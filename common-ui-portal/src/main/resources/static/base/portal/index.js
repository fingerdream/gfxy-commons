(function ($) {
    $.learuntab = {
        // 全屏
        requestFullScreen: function () {
            var de = document.documentElement;
            if (de.requestFullscreen) {
                de.requestFullscreen();
            } else if (de.mozRequestFullScreen) {
                de.mozRequestFullScreen();
            } else if (de.webkitRequestFullScreen) {
                de.webkitRequestFullScreen();
            } else if (de.msRequestFullscreen) {
                de.msRequestFullscreen();
            }
        },
        // 取消全屏
        exitFullscreen: function () {
            var de = document;
            if (de.exitFullscreen) {
                de.exitFullscreen();
            } else if (de.mozCancelFullScreen) {
                de.mozCancelFullScreen();
            } else if (de.webkitCancelFullScreen) {
                de.webkitCancelFullScreen();
            } else if (de.msExitFullscreen) {
                de.msExitFullscreen();
            }
        },
        // 刷新
        refreshTab: function () {
            var currentId = $('.page-tabs-content').find('.active').attr(
                'data-id');
            var target = $('.LRADMS_iframe[data-id="' + currentId + '"]');
            var url = target.attr('src');
            target.attr('src', url).on('load',function () {});
        },
        //帮助
        tabHelp: function () {
            var currentId = $('.page-tabs-content').find('.active').attr('data-id');
            var currentName = $('.page-tabs-content').find('.active').text();
            var iHeight = $(window).height() / 1.3;
            if (currentId.indexOf("indexPage.do") > -1) {
                BootstrapDialog.show({
                    size: BootstrapDialog.SIZE_WIDE,
                    draggable: true,
                    id: 'mdDialog',
                    closeByBackdrop: true,
                    closeByKeyboard: true,
                    title: "『首页』使用说明",
                    message: '<iframe style="height: ' + iHeight + 'px;width: 100%" scrolling="auto" frameborder="0" src="authMenu/showMD.do?mdName=indexPage"/>',
                    buttons: [{
                        label: '关闭',
                        action: function (dialogRef) {
                            dialogRef.close();
                        }
                    }],
                    onshown: function () {
                        $('#mdDialog .modal-dialog').css('width', '80%');
                    }
                });
            } else if (currentId.indexOf("menuId") > -1) {
                var menuId = currentId.split("menuId=")[1];
                var helpUrl = "authMenu/helpPage.do?menuId=" + menuId;
                $.ajax({
                    url: helpUrl,
                    type: 'GET',
                    data: {},
                    async: true,
                    dataType: 'text',
                    beforeSend: function () {
                        MaskLoading.fullScreenShow("正在获取帮助页面,请稍后...");
                    },
                    success: function (data) {
                        MaskLoading.fullScreenHide();
                        if (data === "error") {
                            noty({
                                text: "帮助页面获取失败",
                                layout: "center",
                                type: "error",
                                timeout: 1000,
                                theme: 'bootstrapTheme'
                            });
                        } else {
                            data = "authMenu/showMD.do?mdName=" + data;
                            BootstrapDialog.show({
                                size: BootstrapDialog.SIZE_WIDE,
                                draggable: true,
                                id: 'mdDialog',
                                closeByBackdrop: true,
                                closeByKeyboard: true,
                                title: "『" + currentName + "』使用说明",
                                message: '<iframe style="height: ' + iHeight + 'px;width: 100%" scrolling="auto" frameborder="0" src="' + data + '"/>',
                                buttons: [{
                                    label: '关闭',
                                    action: function (dialogRef) {
                                        dialogRef.close();
                                    }
                                }],
                                onshown: function () {
                                    $('#mdDialog .modal-dialog').css('width', '80%');
                                }
                            });
                        }
                    },
                    error: function (data) {
                        MaskLoading.fullScreenHide();
                        noty({
                            text: "帮助页面获取失败",
                            layout: "center",
                            type: "error",
                            timeout: 1000,
                            theme: 'bootstrapTheme'
                        });
                    }
                });
            } else {
                noty({
                    text: "无该页面的系统帮助",
                    layout: "center",
                    type: "error",
                    timeout: 1000,
                    theme: 'bootstrapTheme'
                });
            }
        },
        // 点击
        activeTab: function () {
            var currentId = $(this).data('id');
            if (!$(this).hasClass('active')) {
                $('.mainContent .LRADMS_iframe').each(function () {
                    if ($(this).data('id') == currentId) {
                        $(this).show().siblings('.LRADMS_iframe').hide();
                        return false;
                    }
                });
                $(this).addClass('active').siblings('.menuTab').removeClass(
                    'active');
                $.learuntab.scrollToTab(this);
            }
        },
        // 切换首页
        changeIndex: function () {
            var tabIndex = $(this).attr('tabindex');
            var currentId = "index/indexPage.do";
            var target = $('.LRADMS_iframe[data-id="' + currentId + '"]');
            var url = "index/indexPage.do?systemId="+tabIndex;
            target.attr('src', url).on('load',function () {});
            $.cookie("defaultPage", tabIndex,{ path: '/'});
        },
        // 关闭其他标签
        closeOtherTabs: function () {
            $('.page-tabs-content').children("[data-id]").find('.fa-remove')
                .parents('a').not(".active").each(
                function () {
                    $(
                        '.LRADMS_iframe[data-id="'
                        + $(this).data('id') + '"]')
                        .remove();
                    $(this).remove();
                });
            $('.page-tabs-content').css("margin-left", "0");
        },
        // 关闭标签
        closeTab: function () {
            var closeTabId = $(this).parents('.menuTab').data('id');
            if(closeTabId == 'index/indexPage.do'){
                return false;
            }
            var currentWidth = $(this).parents('.menuTab').width();
            if ($(this).parents('.menuTab').hasClass('active')) {
                if ($(this).parents('.menuTab').next('.menuTab').length) {
                    var activeId = $(this).parents('.menuTab').next(
                        '.menuTab:eq(0)').data('id');
                    $(this).parents('.menuTab').next('.menuTab:eq(0)')
                        .addClass('active');

                    $('.mainContent .LRADMS_iframe').each(function () {
                        if ($(this).data('id') == activeId) {
                            $(this).show().siblings('.LRADMS_iframe').hide();
                            return false;
                        }
                    });
                    var marginLeftVal = parseInt($('.page-tabs-content').css(
                        'margin-left'));
                    if (marginLeftVal < 0) {
                        $('.page-tabs-content').animate({
                            marginLeft: (marginLeftVal + currentWidth) + 'px'
                        }, "fast");
                    }
                    $(this).parents('.menuTab').remove();
                    $('.mainContent .LRADMS_iframe').each(function () {
                        if ($(this).data('id') == closeTabId) {
                            $(this).remove();
                            return false;
                        }
                    });
                }
                if ($(this).parents('.menuTab').prev('.menuTab').length||$(this).parents('.menuTab').prev('.dropdown-menu').prev('.menuTab').length) {
                    var activeId = $(this).parents('.menuTab').prev(
                        '.menuTab:last').data('id');
                    $(this).parents('.menuTab').prev('.menuTab:last').addClass(
                        'active');
                    $('.mainContent .LRADMS_iframe').each(function () {
                        if ($(this).data('id') == activeId) {
                            $(this).show().siblings('.LRADMS_iframe').hide();
                            return false;
                        }
                    });
                    $(this).parents('.menuTab').remove();
                    $('.mainContent .LRADMS_iframe').each(function () {
                        if ($(this).data('id') == closeTabId) {
                            $(this).remove();
                            return false;
                        }
                    });
                }
            } else {
                $(this).parents('.menuTab').remove();
                $('.mainContent .LRADMS_iframe').each(function () {
                    if ($(this).data('id') == closeTabId) {
                        $(this).remove();
                        return false;
                    }
                });
                $.learuntab.scrollToTab($('.menuTab.active'));
            }
            return false;
        },
        // 新增标签
        addTab: function () {
            $(".navbar-custom-menu>ul>li.open").removeClass("open");
            var dataId = $(this).attr('data-id');
            var openType = $(this).attr('open-type');
            if (dataId != "") {
                // top.$.cookie('nfine_currentmoduleid', dataId, { path: "/" });
            }
            var dataUrl = $(this).attr('href');
            var menuName = $.trim($(this).text());
            var flag = true;
            if (dataUrl == undefined || $.trim(dataUrl).length == 0) {
                return false;
            }
            if(openType==1){
                window.open(dataUrl);
            }else{
                $('.menuTab').each(
                    function () {
                        if ($(this).data('id') == dataUrl) {
                            if (!$(this).hasClass('active')) {
                                $(this).addClass('active').siblings('.menuTab')
                                    .removeClass('active');
                                $.learuntab.scrollToTab(this);
                                $('.mainContent .LRADMS_iframe').each(
                                    function () {
                                        if ($(this).data('id') == dataUrl) {
                                            $(this).show().siblings(
                                                '.LRADMS_iframe')
                                                .hide();
                                            return false;
                                        }
                                    });
                            }
                            flag = false;
                            return false;
                        }
                    });
                if (flag) {
                    var str = '<a href="javascript:;" class="active menuTab" data-id="'
                        + dataUrl
                        + '">'
                        + menuName
                        + ' <i class="fa fa-remove"></i></a>';
                    $('.menuTab').removeClass('active');
                    var str1 = '<iframe class="LRADMS_iframe" id="iframe' + dataId
                        + '" name="iframe' + dataId
                        + '"  width="100%" height="100%" src="' + dataUrl
                        + '" frameborder="0" data-id="' + dataUrl
                        + '" seamless></iframe>';
                    $('.mainContent').find('iframe.LRADMS_iframe').hide();
                    $('.mainContent').append(str1);
                    // $.loading(true);
                    $('.mainContent iframe:visible').on('load',function () {
                        // $.loading(false);
                    });
                    $('.menuTabs .page-tabs-content').append(str);
                    $.learuntab.scrollToTab($('.menuTab.active'));
                }
            }
            return false;
        },
        // 标签页向左滚动
        scrollTabRight: function () {
            var marginLeftVal = Math.abs(parseInt($('.page-tabs-content').css(
                'margin-left')));
            var tabOuterWidth = $.learuntab.calSumWidth($(".content-tabs")
                .children().not(".menuTabs"));
            var visibleWidth = $(".content-tabs").outerWidth(true)
                - tabOuterWidth;
            var scrollVal = 0;
            if ($(".page-tabs-content").width() < visibleWidth) {
                return false;
            } else {
                var tabElement = $(".menuTab:first");
                var offsetVal = 0;
                while ((offsetVal + $(tabElement).outerWidth(true)) <= marginLeftVal) {
                    offsetVal += $(tabElement).outerWidth(true);
                    tabElement = $(tabElement).next();
                }
                offsetVal = 0;
                while ((offsetVal + $(tabElement).outerWidth(true)) < (visibleWidth)
                && tabElement.length > 0) {
                    offsetVal += $(tabElement).outerWidth(true);
                    tabElement = $(tabElement).next();
                }
                scrollVal = $.learuntab.calSumWidth($(tabElement).prevAll());
                if (scrollVal > 0) {
                    $('.page-tabs-content').animate({
                        marginLeft: 0 - scrollVal + 'px'
                    }, "fast");
                }
            }
        },
        // 标签页向右滚动
        scrollTabLeft: function () {
            var marginLeftVal = Math.abs(parseInt($('.page-tabs-content').css(
                'margin-left')));
            var tabOuterWidth = $.learuntab.calSumWidth($(".content-tabs")
                .children().not(".menuTabs"));
            var visibleWidth = $(".content-tabs").outerWidth(true)
                - tabOuterWidth;
            var scrollVal = 0;
            if ($(".page-tabs-content").width() < visibleWidth) {
                return false;
            } else {
                var tabElement = $(".menuTab:first");
                var offsetVal = 0;
                while ((offsetVal + $(tabElement).outerWidth(true)) <= marginLeftVal) {
                    offsetVal += $(tabElement).outerWidth(true);
                    tabElement = $(tabElement).next();
                }
                offsetVal = 0;
                if ($.learuntab.calSumWidth($(tabElement).prevAll()) > visibleWidth) {
                    while ((offsetVal + $(tabElement).outerWidth(true)) < (visibleWidth)
                    && tabElement.length > 0) {
                        offsetVal += $(tabElement).outerWidth(true);
                        tabElement = $(tabElement).prev();
                    }
                    scrollVal = $.learuntab
                        .calSumWidth($(tabElement).prevAll());
                }
            }
            $('.page-tabs-content').animate({
                marginLeft: 0 - scrollVal + 'px'
            }, "fast");
        },
        // 滚动标签页
        scrollToTab: function (element) {
            var marginLeftVal = $.learuntab.calSumWidth($(element).prevAll()), marginRightVal = $.learuntab
                .calSumWidth($(element).nextAll());
            var tabOuterWidth = $.learuntab.calSumWidth($(".content-tabs")
                .children().not(".menuTabs"));
            var visibleWidth = $(".content-tabs").outerWidth(true)
                - tabOuterWidth;
            var scrollVal = 0;
            if ($(".page-tabs-content").outerWidth() < visibleWidth) {
                scrollVal = 0;
            } else if (marginRightVal <= (visibleWidth
                - $(element).outerWidth(true) - $(element).next()
                    .outerWidth(true))) {
                if ((visibleWidth - $(element).next().outerWidth(true)) > marginRightVal) {
                    scrollVal = marginLeftVal;
                    var tabElement = element;
                    while ((scrollVal - $(tabElement).outerWidth()) > ($(
                        ".page-tabs-content").outerWidth() - visibleWidth)) {
                        scrollVal -= $(tabElement).prev().outerWidth();
                        tabElement = $(tabElement).prev();
                    }
                }
            } else if (marginLeftVal > (visibleWidth
                - $(element).outerWidth(true) - $(element).prev()
                    .outerWidth(true))) {
                scrollVal = marginLeftVal - $(element).prev().outerWidth(true);
            }
            $('.page-tabs-content').animate({
                marginLeft: 0 - scrollVal + 'px'
            }, "fast");
        },
        // 标签页宽度
        calSumWidth: function (element) {
            var width = 0;
            $(element).each(function () {
                width += $(this).outerWidth(true);
            });
            return width;
        },
        // 初始化
        init: function () {
            $('.menuItem').on('click', $.learuntab.addTab);
            $('.menuTabs').on('click', '.menuTab i', $.learuntab.closeTab);
            $('.menuTabs').on('click', '.menuTab', $.learuntab.activeTab);
            $('.tabLeft').on('click', $.learuntab.scrollTabLeft);
            $('.tabRight').on('click', $.learuntab.scrollTabRight);
            $('.tabReload').on('click', $.learuntab.refreshTab);
            $('.tabHelp').on('click', $.learuntab.tabHelp);
            $('.tabIndex').on('click', $.learuntab.changeIndex);
            $('.tabCloseCurrent').on('click', function () {
                $('.page-tabs-content').find('.active i').trigger("click");
            });
            $('.tabCloseAll').on(
                'click',
                function () {
                    $('.page-tabs-content').children("[data-id]").find(
                        '.fa-remove')
                        .each(
                            function () {
                                $(
                                    '.LRADMS_iframe[data-id="'
                                    + $(this)
                                        .data('id')
                                    + '"]').remove();
                                $(this).parents('a').remove();
                            });
                    $('.page-tabs-content').children("[data-id]:first")
                        .each(
                            function () {
                                $(
                                    '.LRADMS_iframe[data-id="'
                                    + $(this)
                                        .data('id')
                                    + '"]').show();
                                $(this).addClass("active");
                            });
                    $('.page-tabs-content').css("margin-left", "0");
                });
            $('.tabCloseOther').on('click', $.learuntab.closeOtherTabs);
            $('.fullscreen').on('click', function () {
                if (!$(this).attr('fullscreen')) {
                    $(this).attr('fullscreen', 'true');
                    $.learuntab.requestFullScreen();
                } else {
                    $(this).removeAttr('fullscreen');
                    $.learuntab.exitFullscreen();
                }
            });
            // 绑定搜索按钮的点击
            $('#searchMenu').on('click', $.learunindex.searchOpenMenu);
            // 绑定搜索框的回车
            $('#searchMenuText').bind('keypress', $.learunindex.onKeypress);
        },
        loadSkin: function () {
            var color = "blue";
            if ($.cookie("myPortalSkin")) {
                color = $.cookie("myPortalSkin");
            }
            $("#indexBody", window.document).removeClass();
            $("#indexBody", window.document).addClass("hold-transition skin-" + color + " sidebar-mini");
        },
        loadIndexPage: function () {
            var indexPage;
            if($('.tabIndex').length>0){
                indexPage = $('.tabIndex').first().attr('tabindex');
            }
            var url = "";
            if ($.cookie("defaultPage")) {
                indexPage = $.cookie("defaultPage");
            }
            url = "index/indexPage.do?systemId="+indexPage;
            $("#indexNcmcPage").attr('src', url).on('load',function () {});
        }
    };
    $.learunindex = {
        // 加载面板
        load: function () {
            $("body").removeClass("hold-transition");
            $("#content-wrapper").find('.mainContent').height(
                $(window).height() - 100);
            $(window).resize(
                function (e) {
                    $("#content-wrapper").find('.mainContent').height(
                        $(window).height() - 100);
                });
            $(".sidebar-toggle").click(function () {
                if (!$("body").hasClass("sidebar-collapse")) {
                    $("body").addClass("sidebar-collapse");
                } else {
                    $("body").removeClass("sidebar-collapse");
                }
            });
            window.setTimeout(function() {
                $('#ajax-loader').fadeOut();
            }, 300);
        },
        // 获取子菜单
        jsonWhere: function (data, action) {
            if (action == null)
                return;
            var reval = new Array();
            $(data).each(function (i, v) {
                if (action(v)) {
                    reval.push(v);
                }
            });
            return reval;
        },
        // 获取菜单数据
        loadMenu: function (topId) {
            $.ajax({
                url: basePath+"index/getMenuTreeData.do?menuParentId=" + topId,
                type: "GET",
                dataType: "json",
                async: false,
                success: function (data) {
                    console.log(JSON.stringify(data));
                    var _html = "";
                    $
                        .each(
                            data,
                            function (i) {
                                var row = data[i];
                                if (row.parentId == topId) {
                                    if (i == 0) {
                                        _html += '<li class="treeview active">';
                                    } else {
                                        _html += '<li class="treeview">';
                                    }
                                    if (row.isLeaf == 1) {
                                        var relaId = '';
                                        if (row.relatingId) {
                                            relaId = row.relatingId;
                                        } else {
                                            relaId = row.relatingId;
                                        }
                                        _html += '<a class="menuItem subNode" data-id="'
                                            + row.id
                                            + '" data-name=' + row.label + ' open-type=' + row.openType + ' data-url=' + row.url + ''
                                            + ' data-realtingid=' + relaId + ''
                                            + ' onclick="gogo(this)"><i class="'
                                            + row.iconCls
                                            + '"></i>'
                                            + row.label
                                            + '</a>';
                                    } else {
                                        _html += '<a href="#">';
                                        _html += '<i class="'
                                            + row.iconCls
                                            + '"></i><span>'
                                            + row.label
                                            + '</span><i class="fa fa-angle-left pull-right"></i>';
                                        _html += '</a>';
                                    }
                                    var childNodes = $.learunindex
                                        .jsonWhere(
                                            data,
                                            function (v) {
                                                return v.parentId == row.id
                                            });
                                    if (childNodes.length > 0) {
                                        _html += '<ul class="treeview-menu">';
                                        $
                                            .each(
                                                childNodes,
                                                function (i) {
                                                    var subrow = childNodes[i];
                                                    var subchildNodes = $.learunindex
                                                        .jsonWhere(
                                                            data,
                                                            function (v) {
                                                                return v.parentId == subrow.id
                                                            });
                                                    _html += '<li>';
                                                    if (subchildNodes.length > 0) {
                                                        _html += '<a href="#"><i class="'
                                                            + subrow.iconCls
                                                            + '"></i>'
                                                            + subrow.label
                                                            + '';
                                                        _html += '<i class="fa fa-angle-left pull-right"></i></a>';
                                                        _html += '<ul class="treeview-menu">';
                                                        $
                                                            .each(
                                                                subchildNodes,
                                                                function (i) {
                                                                    var subchildNodesrow = subchildNodes[i];
                                                                    var relatId = '';
                                                                    if (subchildNodesrow.relatingId) {
                                                                        relatId = subchildNodesrow.relatingId;
                                                                    } else {
                                                                        relatId = subchildNodesrow.relatingId;
                                                                    }
                                                                    _html += '<li><a class="menuItem subNode" data-id="'
                                                                        + subchildNodesrow.id
                                                                        + '" data-name=' + subchildNodesrow.label + ' open-type=' + subchildNodesrow.openType + ' data-url=' + subchildNodesrow.url + ' data-realtingid=' + relatId + ' onclick="gogo(this)" ><i class="'
                                                                        + subchildNodesrow.iconCls
                                                                        + '"></i>'
                                                                        + subchildNodesrow.label
                                                                        + '</a></li>';
                                                                });
                                                        _html += '</ul>';

                                                    } else {
                                                        var relatingId = '';
                                                        if (subrow.relatingId) {
                                                            relatingId = subrow.relatingId;
                                                        } else {
                                                            relatingId = subrow.relatingId;
                                                        }
                                                        _html += '<a class="menuItem subNode" data-id="'
                                                            + subrow.id
                                                            + '" data-name=' + subrow.label + ' open-type=' + subrow.openType + ' data-url=' + subrow.url + ' data-realtingid=' + relatingId + '  onclick="gogo(this)"><i class="'
                                                            + subrow.iconCls
                                                            + '"></i>'
                                                            + subrow.label
                                                            + '</a>';
                                                    }
                                                    _html += '</li>';
                                                });
                                        _html += '</ul>';
                                    }
                                    _html += '</li>'
                                }
                            });

                    $("#sidebar-menu").append(_html);
                    $("#sidebar-menu li a")
                        .click(
                            function () {
                                var d = $(this), e = d.next();
                                if (e.is(".treeview-menu")
                                    && e.is(":visible")) {
                                    e
                                        .slideUp(
                                            500,
                                            function () {
                                                e
                                                    .removeClass("menu-open")
                                            }),
                                        e
                                            .parent(
                                                "li")
                                            .removeClass(
                                                "active")
                                } else if (e
                                        .is(".treeview-menu")
                                    && !e.is(":visible")) {
                                    var f = d.parents("ul")
                                        .first(), g = f
                                        .find("ul:visible")
                                        .slideUp(500);
                                    g.removeClass("menu-open");
                                    var h = d.parent("li");
                                    e
                                        .slideDown(
                                            500,
                                            function () {
                                                e
                                                    .addClass("menu-open"),
                                                    f
                                                        .find(
                                                            "li.active")
                                                        .removeClass(
                                                            "active"),
                                                    h
                                                        .addClass("active");

                                                var _height1 = $(
                                                        window)
                                                        .height()
                                                    - $(
                                                        "#sidebar-menu >li.active")
                                                        .position().top
                                                    - 41;
                                                var _height2 = $(
                                                        "#sidebar-menu li > ul.menu-open")
                                                        .height() + 10
                                                if (_height2 > _height1) {
                                                    $(
                                                        "#sidebar-menu >li > ul.menu-open")
                                                        .css(
                                                            {
                                                                overflow: "auto",
                                                                height: _height1
                                                            })
                                                }
                                            })
                                }
                                e.is(".treeview-menu");
                            });
                },
                error: function (data) {
                    alert('获取菜单失败');
                }
            });
        },
        // 搜索框回车事件
        onKeypress: function (event) {
            if (event.keyCode) {
                if (event.keyCode == '13') {
                    $.learunindex.searchOpenMenu();
                }
            }
        },
        // 搜索框查询点击事件
        searchOpenMenu: function () {
            var searchMenuName = $("#searchMenuText").val();
            $("#sidebar-menu li a").each(function () {
                if ($(this).hasClass('menuItem')) {
                    var thisMenu = $(this).html();
                    if (thisMenu.indexOf(searchMenuName) > -1) {
                        $(this).click();
                        return false;
                    }
                }
            });
        },
        //加载用户信息界面显示
        loadUserInfo: function () {
            $.ajax({
                url: basePath+"index/getUserShow.do",
                type: "GET",
                dataType: "json",
                success: function (data) {
                    //$("#sideUserName").html(data.sideUserName);
                    $("#topUserName").html(data.topUserName);
                    //$("#sideUserDep").html(data.sideUserDep);
                    var myLogoSrc = "defaultUser.png";
                    if (data.myLogo != "") {
                        myLogoSrc = data.myLogo;
                    }
                    $("#topMyLogo").attr('src', "base/img/" + myLogoSrc);
                    //$("#sideMyLogo").attr('src',"base/img/"+myLogoSrc);
                    $("#logoutId").attr("href", "login/logout.do");
                },
                error: function (data) {
                    $("#sideUserName").html("用户信息获取失败");
                    $("#topUserName").html("用户信息获取失败");
                    $("#sideUserDep").html("用户信息获取失败");
                }
            });
        },
        //加载系统LOGO
        loadPortalLogo: function () {
            $.ajax({
                url: basePath+"index/getLogoInfo.do",
                type: "get",
                dataType: "json",
                async: true,
                success: function (data) {
                    var provinceName = (data.label).split("网络")[0];
                    if (!provinceName) {
                        provinceName = "中国移动";
                    }
                    $("#sys-name").html("<img src='base/img/" + provinceName + ".png'/>");
                    $("#logo-mini").html(data.name);
                },
                error: function (data) {
                    $("#logo-mini").html("");
                    $("#logo-lg").html("");
                }
            });
            $("#logo-lg").html("<img src='base/img/sys-logo.png'/>");
        },
        //加载顶部栏菜单
        loadPortalTopMenu: function () {
            $.ajax({
                url: basePath+'index/getPortalTopMenu.do',
                type: 'GET',
                dataType: 'json',
                beforeSend: function () {
                    MaskLoading.fullScreenShow("正在提交,请稍后...");
                },
                success: function (data) {
                    var indexPage;
                    if($('.tabIndex').length>0){
                        indexPage = $('.tabIndex').first().attr('tabindex');
                    }
                    if ($.cookie("defaultPage")) {
                        indexPage = $.cookie("defaultPage");
                    }
                    $.each(data, function (n, obj) {
                        if (obj.id === indexPage) {
                            $("#portalMenu").append("<li onclick='menuChange(\"" + obj.id + "\")' class=\"active\" id=\"" + obj.id + "\"><a><img src='base/img/menuLogo/" + obj.iconCls + "' class='img-responsive center-block'/><span class=\"hidden-xs span-font\"> " + obj.label + "</span></a></li>");
                        } else {
                            $("#portalMenu").append("<li onclick='menuChange(\"" + obj.id + "\")' class='not-first-li' id=\"" + obj.id + "\"><a><img src='base/img/menuLogo/" + obj.iconCls + "' class='img-responsive center-block'/><span class=\"hidden-xs span-font\"> " + obj.label + "</span></a></li>");
                        }
                    });
                    if (data.length > 0) {
                        $.learunindex.loadMenu(indexPage);
                    }
                },
                error: function (data) {
                    noty({
                        text: "顶部菜单加载失败",
                        layout: "center",
                        type: "error",
                        timeout: 1000,
                        theme: 'bootstrapTheme'
                    });
                    return false;
                },
                complete: function () {
                    MaskLoading.fullScreenHide();
                }
            });
        }
    };
    $.validOpr = {
        validOptions: {
            feedbackIcons: {
                valid: 'glyphicon glyphicon-ok',
                invalid: 'glyphicon glyphicon-remove',
                validating: 'glyphicon glyphicon-refresh'
            },
            message: '值未验证通过',
            group: '.form-group',
            fields: {
                nameForm: {validators: {notEmpty: {message: '请填写用户名称'}}},
                emailForm: {validators: {emailAddress: {message: '邮箱地址格式有误'}}},
                mobileForm: {
                    validators: {
                        stringLength: {
                            min: 11,
                            max: 11,
                            message: '请输入11位手机号码'
                        },
                        regexp: {
                            regexp: /^1[3|4|5|7|8]{1}[0-9]{9}$/,
                            message: '请输入正确的手机号码'
                        }
                    }
                }
            }
        },
        passValidOptions: {
            feedbackIcons: {
                valid: 'glyphicon glyphicon-ok',
                invalid: 'glyphicon glyphicon-remove',
                validating: 'glyphicon glyphicon-refresh'
            },
            message: '值未验证通过',
            group: '.form-group',
            fields: {
                oldPass: {
                    validators: {
                        notEmpty: {
                            message: '用户原密码不能为空'
                        },
                        stringLength: {
                            min: 6,
                            max: 19,
                            message: '用户原密码长度大于5小于20'
                        },
                        regexp: {
                            regexp: /^[^ ]+$/,
                            message: '用户原密码不能有空格'
                        }
                    }
                },
                newPass1: {
                    validators: {
                        notEmpty: {
                            message: '用户新密码不能为空'
                        },
                        identical: {
                            field: 'newPass2',
                            message: '用户新密码与确认密码不一致！'
                        },
                        stringLength: {
                            min: 6,
                            max: 19,
                            message: '用户新密码长度大于5小于20'
                        },
                        regexp: {
                            regexp: /^[^ ]+$/,
                            message: '用户新密码不能有空格'
                        }

                    }
                },
                newPass2: {
                    validators: {
                        identical: {
                            field: 'newPass1',
                            message: '用户新密码与确认密码不一致！'
                        },
                        notEmpty: {
                            message: '用户确认密码不能为空'
                        },
                        stringLength: {
                            min: 6,
                            max: 19,
                            message: '用户确认密码长度大于5小于20'
                        },
                        regexp: {
                            regexp: /^[^ ]+$/,
                            message: '用户确认密码不能有空格'
                        }
                    }
                }
            }
        }
    };
    $(function () {
        $.learunindex.load();
        $.learunindex.loadUserInfo();
        // $.learunindex.loadMenu();
        $.learunindex.loadPortalLogo();
        $.learunindex.loadPortalTopMenu();
        $.learuntab.init();
        $.learuntab.loadSkin();
        $.learuntab.loadIndexPage();
    });
})(jQuery);
function gogo(that) {
    openTab($(that).attr("data-id"), $(that).attr("data-name"), $(that).attr("data-url"), $(that).attr("data-realtingid"),$(that).attr("open-type"));
}
//对外封装调用闭包函数方法
function clickNotice(objectId) {
    $("#" + objectId).click();
}
//对外封装调用闭包函数方法(提供在首页点击打开页面的接口)
function openTab(objectId, objectName, objectHref, objectRelId,openType) {
    if (objectRelId === 'TaiYue') {//安徽太岳系統
        $.ajax({
            url: basePath+'index/getTaiyueToken.do',
            type: 'GET',
            async: true,
            dataType: 'json',
            beforeSend: function () {
                MaskLoading.fullScreenShow("正在提交,请稍后...");
            },
            success: function (data) {
                if (data.success) {
                    var token = data.token.token;
                    objectHref += '?token=' + token;
                    if (objectName === undefined) {
                        objectName = "页面";
                    }
                    $("#openTab").html(objectName);
                    $("#openTab").attr("href", objectHref);
                    $("#openTab").attr("data-id", objectId);
                    $("#openTab").click();
                }
            },
            error: function (data) {
                noty({
                    text: "获取泰岳Token失败",
                    layout: "center",
                    type: "error",
                    timeout: 1000,
                    theme: 'bootstrapTheme'
                });
                return false;
            },
            complete: function () {
                MaskLoading.fullScreenHide();
            }
        });
    } else if (objectRelId === 'ZiYuan') {
        $.ajax({
            url: basePath+'index/getZiYuanToken.do',
            type: 'GET',
            async: true,
            dataType: 'json',
            beforeSend: function () {
                MaskLoading.fullScreenShow("正在提交,请稍后...");
            },
            success: function (data) {
                if (data.success) {
                    var token = data.token;
                    if (objectHref.indexOf("?") > -1) {
                        objectHref += '&token=' + token;
                    } else {
                        objectHref += '?token=' + token;
                    }
                    if (objectName === undefined) {
                        objectName = "页面";
                    }
                    $("#openTab").html(objectName);
                    $("#openTab").attr("href", objectHref);
                    $("#openTab").attr("data-id", objectId);
                    $("#openTab").click();
                } else {
                    noty({
                        text: "获取咨元Token失败",
                        layout: "center",
                        type: "error",
                        timeout: 1000,
                        theme: 'bootstrapTheme'
                    });
                    return false;
                }
            },
            error: function (data) {
                noty({
                    text: "获取咨元Token失败",
                    layout: "center",
                    type: "error",
                    timeout: 1000,
                    theme: 'bootstrapTheme'
                });
                return false;
            },
            complete: function () {
                MaskLoading.fullScreenHide();
            }
        });
    } else if (objectRelId === 'gframe') {
        $.ajax({
            url: basePath+'index/getGframeToken.do',
            type: 'GET',
            async: true,
            dataType: 'json',
            beforeSend: function () {
                MaskLoading.fullScreenShow("正在提交,请稍后...");
            },
            success: function (data) {
                if (data.success) {
                    var token = data.token;
                    if (objectHref.indexOf("?") > -1) {
                        objectHref += '&_myToken=' + token;
                    } else {
                        objectHref += '?_myToken=' + token;
                    }
                    if (objectName === undefined) {
                        objectName = "页面";
                    }
                    $("#openTab").html(objectName);
                    $("#openTab").attr("href", objectHref);
                    $("#openTab").attr("data-id", objectId);
                    $("#openTab").click();
                } else {
                    noty({
                        text: "获取GframeToken失败",
                        layout: "center",
                        type: "error",
                        timeout: 1000,
                        theme: 'bootstrapTheme'
                    });
                    return false;
                }
            },
            error: function (data) {
                noty({
                    text: "获取GframeToken失败",
                    layout: "center",
                    type: "error",
                    timeout: 1000,
                    theme: 'bootstrapTheme'
                });
                return false;
            },
            complete: function () {
                MaskLoading.fullScreenHide();
            }
        });
    } else {
        if (objectName === undefined) {
            objectName = "页面";
        }
        $("#openTab").html(objectName);
        $("#openTab").attr("href", objectHref);
        $("#openTab").attr("data-id", objectId);
        $("#openTab").attr("open-type", openType);
        $("#openTab").click();
    }

}
//打开通知公告弹框
function openDialog(title, msg, type) {
    var dialogType = BootstrapDialog.TYPE_INFO;
    if (type == "通知") {
        dialogType = BootstrapDialog.TYPE_INFO;
    } else if (type == "提示") {
        dialogType = BootstrapDialog.TYPE_SUCCESS;
    } else if (type == "紧急") {
        dialogType = BootstrapDialog.TYPE_DANGER;
    } else if (type == "警告") {
        dialogType = BootstrapDialog.TYPE_WARNING;
    } else {
        dialogType = BootstrapDialog.TYPE_PRIMARY;
    }
    BootstrapDialog.show({
        size: BootstrapDialog.SIZE_WIDE,
        type: dialogType,
        title: title,
        message: msg,
        buttons: [{
            label: '关闭',
            action: function (dialogItself) {
                dialogItself.close();
            }
        }]
    });
}
function menuChange(id) {
    $('#portalMenu li').each(function () {
        if ($(this).hasClass("active")) {
            $(this).removeClass("active");
        }
    });
    $("#" + id).addClass("active");
    $("#sidebar-menu").empty();
    $.learunindex.loadMenu(id);
}
function changeSkin() {
    BootstrapDialog.show({
        size: BootstrapDialog.SIZE_WIDE,
        draggable: true,
        title: '皮肤选择',
        message: '<div style="height: 100%;" id="skinDivId">' +
        '<div class="dashboard-stats">' +
        '<div class="dashboard-stats-item" style="background-color: #3c8dbc;" onclick="changeColor(\'blue\');">' +
        '<div class="stat-icon"><i id="blue" class="" style="padding-left: 5px;"></i></div>' +
        '<h2 class="m-top-none">默认</h2>' +
        '</div>' +
        '</div>' +
        '<div class="dashboard-stats">' +
        '<div class="dashboard-stats-item" style="background-color: #41AEEC;" onclick="changeColor(\'cerulean\');">' +
        '<div class="stat-icon"><i id="cerulean" class="" style="padding-left: 5px;"></i></div>' +
        '<h2 class="m-top-none">天蓝</h2>' +
        '</div>' +
        '</div>' +
        '<div class="dashboard-stats">' +
        '<div class="dashboard-stats-item" style="background-color: #333333;" onclick="changeColor(\'slate\');">' +
        '<div class="stat-icon"><i id="slate" class="" style="padding-left: 5px;"></i></div>' +
        '<h2 class="m-top-none">酷黑</h2>' +
        '</div>' +
        '</div>' +
        '<div class="dashboard-stats">' +
        '<div class="dashboard-stats-item" style="background-color: #de5819;" onclick="changeColor(\'united\');">' +
        '<div class="stat-icon"><i id="united" class="" style="padding-left: 5px;"></i></div>' +
        '<h2 class="m-top-none">橙黄</h2>' +
        '</div>' +
        '</div>' +
        '<div class="dashboard-stats">' +
        '<div class="dashboard-stats-item" style="background-color: #ccd1d4;" onclick="changeColor(\'spacelab\');">' +
        '<div class="stat-icon"><i id="spacelab" class="" style="padding-left: 5px;"></i></div>' +
        '<h2 class="m-top-none">银灰</h2>' +
        '</div>' +
        '</div>' +
        '</div>',
        buttons: [{
            label: '提交',
            action: function (dialogRef) {
                $("#skinDivId .stat-icon i").each(function () {
                    if ($(this).hasClass("fa-check")) {
                        var color = $(this).attr("id");
                        $.cookie("myPortalSkin", color, {path: '/'});
                    }
                });
                dialogRef.close();
                window.location.reload();
            }
        }, {
            label: '关闭',
            action: function (dialogRef) {
                var color = "blue";
                if ($.cookie("myPortalSkin")) {
                    color = $.cookie("myPortalSkin");
                }
                $("#indexBody", window.document).removeClass();
                $("#indexBody", window.document).addClass("hold-transition skin-" + color + " sidebar-mini");
                dialogRef.close();
            }
        }],
        onshown: function (dialogRef) {

        }
    });
    return false;
}

function changeColor(color) {
    $("#skinDivId .stat-icon i").removeClass();
    $("#" + color).addClass("fa fa-check");
    $("#indexBody", window.document).removeClass();
    $("#indexBody", window.document).addClass("hold-transition skin-" + color + " sidebar-mini");
}

function userInfo() {
    $.ajax({
        url: basePath+'index/getMyInfo.do',
        type: 'GET',
        data: {},
        async: true,
        dataType: 'json',
        beforeSend: function () {
            MaskLoading.fullScreenShow("正在获取您的信息,请稍后...");
        },
        success: function (data) {
            MaskLoading.fullScreenHide();
            if (data.success) {
                BootstrapDialog.show({
                    size: BootstrapDialog.SIZE_NORMAL,
                    draggable: true,
                    closeByBackdrop: true,
                    closeByKeyboard: true,
                    title: '个人信息',
                    message: getUserForm(data.message),
                    buttons: [{
                        label: '提交',
                        action: function (dialogRef) {
                            let validate = $("#tableForm").data('bootstrapValidator').validate();
                            if (!validate.isValid()) {
                                return;
                            }
                            //提交修改个人信息
                            $.ajax({
                                url: basePath+'index/saveMyInfo.do',
                                type: 'POST',
                                data: {
                                    userId: data.message.userId,
                                    name: $('#name').val(),
                                    email: $('#email').val(),
                                    mobile: $('#mobile').val()
                                },
                                async: true,
                                dataType: 'json',
                                beforeSend: function () {
                                    MaskLoading.fullScreenShow("正在提交,请稍后...");
                                },
                                success: function (data) {
                                    MaskLoading.fullScreenHide();
                                    if (data.success) {
                                        noty({
                                            text: "修改成功",
                                            layout: "center",
                                            type: "success",
                                            timeout: 1000,
                                            theme: 'bootstrapTheme'
                                        });
                                        dialogRef.close();
                                    } else {
                                        noty({
                                            text: "修改失败",
                                            layout: "center",
                                            type: "error",
                                            timeout: 1000,
                                            theme: 'bootstrapTheme'
                                        });
                                    }
                                },
                                error: function (data) {
                                    MaskLoading.fullScreenHide();
                                    noty({
                                        text: "修改失败",
                                        layout: "center",
                                        type: "error",
                                        timeout: 1000,
                                        theme: 'bootstrapTheme'
                                    });
                                }
                            });
                        }
                    }, {
                        label: '关闭',
                        action: function (dialogRef) {
                            dialogRef.close();
                        }
                    }],
                    onshown: function () {
                        if (data.message.loginName) {
                            $("#loginName").val(data.message.loginName);
                        }
                        if (data.message.name) {
                            $("#name").val(data.message.name);
                        }
                        if (data.message.email) {
                            $("#email").val(data.message.email);
                        }
                        if (data.message.loginName) {
                            $("#mobile").val(data.message.mobile);
                        }
                        $("#tableForm").bootstrapValidator($.validOpr.validOptions);
                    }
                });
            } else {
                noty({
                    text: "用户信息获取失败",
                    layout: "center",
                    type: "error",
                    timeout: 1000,
                    theme: 'bootstrapTheme'
                });
            }
        },
        error: function () {
            MaskLoading.fullScreenHide();
            noty({
                text: "用户信息获取失败",
                layout: "center",
                type: "error",
                timeout: 1000,
                theme: 'bootstrapTheme'
            });
        }
    });
}

function getUserForm() {
    let $tableDataDiv = $('<form id="tableForm" role="form" class="form-horizontal"></form>');
    let $tableInfo = $('<div class="form-group"></div>');
    $tableInfo.append('<label for="loginName" class="col-md-3 col-sm-3 col-xs-3 control-label" style="">用户登陆帐号</label><div class="col-md-9 col-sm-9 col-xs-9 "><input type="text" id="loginName" class="form-control" name="loginName" readonly disabled/></div>');
    $tableDataDiv.append($tableInfo);
    $tableInfo = $('<div class="form-group"></div>');
    $tableInfo.append('<label for="name" class="col-md-3 col-sm-3 col-xs-3 control-label" style="">用户名称</label><div class="col-md-9 col-sm-9 col-xs-9 "><input type="text" id="name" class="form-control" name="nameForm"/></div>');
    $tableDataDiv.append($tableInfo);
    $tableInfo = $('<div class="form-group"></div>');
    $tableInfo.append('<label for="email" class="col-md-3 col-sm-3 col-xs-3 control-label" style="">邮箱</label><div class="col-md-9 col-sm-9 col-xs-9 "><input type="text" id="email" class="form-control" name="emailForm"/></div>');
    $tableDataDiv.append($tableInfo);
    $tableInfo = $('<div class="form-group"></div>');
    $tableInfo.append('<label for="mobile" class="col-md-3 col-sm-3 col-xs-3 control-label" style="">电话</label><div class="col-md-9 col-sm-9 col-xs-9 "><input type="text" id="mobile" class="form-control" name="mobileForm"/></div>');
    $tableDataDiv.append($tableInfo);
    return $tableDataDiv;
}

function getUserPwdForm() {
    let $tableDataDiv = $('<form id="tableForm" role="form" class="form-horizontal"></form>');
    let $tableInfo = $('<div class="form-group"></div>');
    $tableInfo.append('<label for="oldPass" class="col-md-3 col-sm-3 col-xs-3 control-label">原密码</label><div class="col-md-9 col-sm-9 col-xs-9"><input type="password" id="oldPass" class="form-control" value="" name="oldPass"/></div><br><br>');
    $tableDataDiv.append($tableInfo);
    $tableInfo = $('<div class="form-group"></div>');
    $tableInfo.append('<label for="newPass1" class="col-md-3 col-sm-3 col-xs-3 control-label">新密码</label><div class="col-md-9 col-sm-9 col-xs-9"><input type="password" id="newPass1" class="form-control" value="" name="newPass1"/></div><br><br>');
    $tableDataDiv.append($tableInfo);
    $tableInfo = $('<div class="form-group"></div>');
    $tableInfo.append('<label for="newPass2" class="col-md-3 col-sm-3 col-xs-3 control-label">确认新密码</label><div class="col-md-9 col-sm-9 col-xs-9"><input type="password" id="newPass2" class="form-control" value="" name="newPass2"/></div>');
    $tableDataDiv.append($tableInfo);
    return $tableDataDiv;
}

function userPwd() {
    BootstrapDialog.show({
        size: BootstrapDialog.SIZE_NORMAL,
        draggable: true,
        closeByBackdrop: true,
        closeByKeyboard: true,
        title: '修改密码',
        message: getUserPwdForm(),
        buttons: [{
            label: '提交',
            action: function (dialogRef) {
                if ($('#oldPass').val() == $('#newPass1').val()) {
                    noty({
                        text: "新密码不得与旧密码相同，请重新输入",
                        layout: "center",
                        type: "error",
                        timeout: 1000,
                        theme: 'bootstrapTheme'
                    });
                    return false;
                }
                let validate = $("#tableForm").data('bootstrapValidator').validate();
                if (!validate.isValid()) {
                    return;
                }
                $.getJSON('login/getEncryptKey.do', function (data) {
                    var encrypt = new JSEncrypt();
                    encrypt.setPublicKey(data.encryptKey);
                    $.ajax({
                        url: basePath+'index/saveMyPwdInfo.do',
                        type: 'POST',
                        data: {
                            oldPassWord: encrypt.encrypt($('#oldPass').val()),
                            newPassWord: encrypt.encrypt($('#newPass1').val())
                        },
                        async: true,
                        dataType: 'json',
                        beforeSend: function () {
                            MaskLoading.fullScreenShow("正在提交,请稍后...");
                        },
                        success: function (data) {
                            MaskLoading.fullScreenHide();
                            if (data.success) {
                                noty({
                                    text: "修改成功",
                                    layout: "center",
                                    type: "success",
                                    timeout: 1000,
                                    theme: 'bootstrapTheme'
                                });
                                dialogRef.close();
                            } else {
                                noty({
                                    text: data.message,
                                    layout: "center",
                                    type: "error",
                                    timeout: 1000,
                                    theme: 'bootstrapTheme'
                                });
                            }
                        },
                        error: function (data) {
                            MaskLoading.fullScreenHide();
                            noty({
                                text: "修改失败",
                                layout: "center",
                                type: "error",
                                timeout: 1000,
                                theme: 'bootstrapTheme'
                            });
                        }
                    });
                });
            }
        }, {
            label: '关闭',
            action: function (dialogRef) {
                dialogRef.close();
            }
        }],
        onshown: function () {
            $("#tableForm").bootstrapValidator($.validOpr.passValidOptions);
        }
    });

}

function aboutSys() {
    BootstrapDialog.show({
        size: BootstrapDialog.SIZE_WIDE,
        draggable: true,
        closeByBackdrop: true,
        closeByKeyboard: true,
        title: '关于网络配置管理系统',
        message: '<h3><p class="text-center">BOCO<i class="fa fa-copyright" aria-hidden="true"></i>网络配置管理系统</p></h3>' +
        '<h4><p class="text-center"><strong>版本： V1.0.4</strong></p></h4>' +
        '<h4><p class="text-center"><small>内部版本号： BOCO-NCMC-V1.0.4.1012</small></p></h4>' +
        '<h4><p class="text-center"><small>Copyright<i class="fa fa-copyright" aria-hidden="true"></i>亿阳信通 版权所有</small></p></h4>' +
        '<h4><p class="text-center"><small>本产品符合最终用户许可协议，授权给中国移动</small></p></h4>' +
        '<h4><p class="text-center text-primary"><small>亿阳信通 综合激活产品线 研制开发</small></p></h4>',
        buttons: [{
            label: '关闭',
            action: function (dialogRef) {
                dialogRef.close();
            }
        }]
    });
}
