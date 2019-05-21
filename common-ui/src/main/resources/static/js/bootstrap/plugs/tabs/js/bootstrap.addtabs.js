/**
 * Website: http://git.oschina.net/hbbcs/bootStrap-addTabs
 *
 * Version : 2.0
 *
 * Mail: hbbcs@sina.com
 * 
 * Created by joe on 2016-2-4.Update 2017-03-14
 */


(function($) {

    var settings = {
        content: '', //直接指定所有页面TABS内容
        close: true, //是否可以关闭
        monitor: 'body', //监视的区域
        iframe: true, //使用iframe还是ajax
        iframeHeight: $(window).height()-50, //固定TAB中IFRAME高度,根据需要自己修改
        target: '.nav-tabs',
        contextmenu: true, //是否使用右键菜单
        local: {
            'refreshLabel': '刷新此标签',
            'closeThisLabel': '关闭此标签',
            'closeOtherLabel': '关闭其他标签',
            'closeLeftLabel': '关闭左侧标签',
            'closeRightLabel': '关闭右侧标签',
            'closeAllLabel': '关闭全部标签'
        },
        callback: function() { //关闭后回调函数
        }
    };

    var target;

    _click = function(obj) {
        var a_obj, a_target;
        if (typeof obj.data('addtab') == 'object') {
            a_obj = obj.data('addtab');
        } else {
            a_obj = obj.data();
        }
        if (!a_obj.id && !a_obj.addtab) {
            a_obj.id = Math.random().toString(36).substring(3, 35);
            obj.data('id', a_obj.id);
        }

        $.addtabs.add({
            'target': a_obj.target ? a_obj.target : target,
            'id': a_obj.id ? a_obj.id : a_obj.addtab,
            'title': a_obj.title ? a_obj.title : obj.html(),
            'content': settings.content ? settings.content : a_obj.content,
            'url': a_obj.url,
            'ajax': a_obj.ajax ? true : false
        });
    };

    _createMenu = function(right, icon, text) {
        return $('<a>', {
            'href': 'javascript:void(0);',
            'class': "list-group-item",
            'data-right': right
        }).append(
            $('<i>', {
                'class': 'glyphicon ' + icon
            })
        ).append(text);
    }

    _pop = function(id, e, mouse) {
        $('body').find('#popMenu').remove();
        var refresh = e.attr('id') ? _createMenu('refresh', 'glyphicon-refresh', settings.local.refreshLabel) : '';
        var remove = e.attr('id') ? _createMenu('remove', 'glyphicon-remove', settings.local.closeThisLabel) : '';
        var left = e.prev('li').attr('id') ? _createMenu('remove-left', 'glyphicon-chevron-left', settings.local.closeLeftLabel) : '';
        var right = e.next('li').attr('id') ? _createMenu('remove-right', 'glyphicon-chevron-right', settings.local.closeRightLabel) : '';
        var all = e.attr('id') ? _createMenu('remove-all', 'glyphicon-minus', settings.local.closeAllLabel) : '';
        var popHtml = $('<ul>', {
                'aria-controls': id,
                'class': 'rightMenu list-group',
                id: 'popMenu',
                'aria-url': e.attr('aria-url')
            }).append(refresh)
            .append(remove)
            .append(_createMenu('remove-circle', 'glyphicon-remove-circle', settings.local.closeOtherLabel))
            .append(left)
            .append(right)
            .append(all);

        popHtml.css({
            'top': mouse.pageY,
            'left': mouse.pageX
        });
        popHtml.appendTo($('body')).fadeIn('slow');
        //刷新页面
        $('body').on('click', 'ul.rightMenu a[data-right=refresh]', function() {
            var id = $(this).parent('ul').attr("aria-controls").substring(4);
            var url = $(this).parent('ul').attr('aria-url');
            $.addtabs.add({
                'id': id,
                'url': url,
                'refresh': true
            });
        });

        //关闭自身
        $('body').on('click', 'ul.rightMenu a[data-right=remove]', function() {
            var id = $(this).parent("ul").attr("aria-controls");
            if (id.substring(0, 4) != 'tab_') return;
            $.addtabs.close({
                "id": id
            });
            $.addtabs.drop();
        });

        //关闭其他  这里原有的代码有bug,无法全部关闭，最终改成先关闭左边的再关闭右边的 add by zhuyu
        $('body').on('click', 'ul.rightMenu a[data-right=remove-circle]', function() {
            var tab_id = $(this).parent('ul').attr("aria-controls");
            $('#tab_' + tab_id).prevUntil().each(function() {
                var id = $(this).attr('id');
                if (id && id != 'tab_' + tab_id) {
                    $.addtabs.close({
                        "id": $(this).children('a').attr('aria-controls')
                    });
                }
            });
            $('#tab_' + tab_id).nextUntil().each(function() {
                var id = $(this).attr('id');
                if (id && id != 'tab_' + tab_id) {
                    $.addtabs.close({
                        "id": $(this).children('a').attr('aria-controls')
                    });
                }
            });
            $.addtabs.drop();
        });

        //关闭左侧
        $('body').on('click', 'ul.rightMenu a[data-right=remove-left]', function() {
            var tab_id = $(this).parent('ul').attr("aria-controls");
            $('#tab_' + tab_id).prevUntil().each(function() {
                var id = $(this).attr('id');
                if (id && id != 'tab_' + tab_id) {
                    $.addtabs.close({
                        "id": $(this).children('a').attr('aria-controls')
                    });
                }
            });
            $.addtabs.drop();
        });

        //关闭右侧
        $('body').on('click', 'ul.rightMenu a[data-right=remove-right]', function() {
            var tab_id = $(this).parent('ul').attr("aria-controls");
            $('#tab_' + tab_id).nextUntil().each(function() {
                var id = $(this).attr('id');
                if (id && id != 'tab_' + tab_id) {
                    $.addtabs.close({
                        "id": $(this).children('a').attr('aria-controls')
                    });
                }
            });
            $.addtabs.drop();
        });

        //关闭全部  原生的没有这个按钮，扩展了一个关闭所有，即先关闭左边再关闭右边再关闭自身  add by zhuyu
        $('body').on('click', 'ul.rightMenu a[data-right=remove-all]', function() {
            var tab_id = $(this).parent('ul').attr("aria-controls");
            $('#tab_' + tab_id).prevUntil().each(function() {
                var id = $(this).attr('id');
                if (id && id != 'tab_' + tab_id) {
                    $.addtabs.close({
                        "id": $(this).children('a').attr('aria-controls')
                    });
                }
            });
            $('#tab_' + tab_id).nextUntil().each(function() {
                var id = $(this).attr('id');
                if (id && id != 'tab_' + tab_id) {
                    $.addtabs.close({
                        "id": $(this).children('a').attr('aria-controls')
                    });
                }
            });
            $.addtabs.close({
                "id": tab_id
            });
            $.addtabs.drop();
        });

        popHtml.mouseleave(function() {
            $(this).fadeOut('slow');
        });
        $('body').click(function() {
            popHtml.fadeOut('slow');
        })
    };

    _listen = function() {
        $(settings.monitor).on('click', '[data-addtab]', function() {
            _click($(this));
            $.addtabs.drop();
        });

        $('body').on('click', '.close-tab', function() {
            var id = $(this).prev("a").attr("aria-controls");
            $.addtabs.close({
                'id': id
            });
            $.addtabs.drop();
        });

        if (settings.contextmenu) {
            //obj上禁用右键菜单
            $('body').on('contextmenu', 'li[role=presentation]', function(e) {
                var id = $(this).children('a').attr('aria-controls');
                _pop(id, $(this), e);
                return false;
            });
        }

        var el;
        $('body').on('dragstart.h5s', '.nav-tabs li', function(e) {
            el = $(this);
        }).on('dragover.h5s dragenter.h5s drop.h5s', '.nav-tabs li', function(e) {
            if (el == $(this)) return;
            $('.dragBack').removeClass('dragBack');
            $(this).addClass('dragBack');
            el.insertAfter($(this))
        }).on('dragend.h5s', '.nav-tabs li', function() {
            $('.dragBack').removeClass('dragBack');
        });

    };

    $.addtabs = function(options) {
        $.addtabs.set(options);
        _listen();
    };

    $.addtabs.set = function() {
        if (arguments[0]) {
            if (typeof arguments[0] == 'object') {
                settings = $.extend(settings, arguments[0] || {});
            } else {
                settings[arguments[0]] = arguments[1];
            }
        }
        if (typeof settings.target == 'object') {
            target = settings.target;
        } else {
            target = $('body').find(settings.target).length > 0 ? $(settings.target).first() : $('body').find('.nav-tabs').first();
        }
    }

    $.addtabs.add = function(opts) {
        var a_target;
        opts.id = opts.id ? opts.id : Math.random().toString(36).substring(3, 35);
        if (typeof opts.target == 'object') {
            a_target = opts.target;
        } else if (typeof opts.target == 'string') {
            a_target = $('body').find(opts.target);
        } else {
            a_target = target;
        }

        var id = 'tab_' + opts.id;
        var tab_li = a_target;
        console.log(tab_li);
        var tab_content = tab_li.next('.tab-content');

        tab_li.find('li[role = "presentation"].active').removeClass('active');
        tab_content.find('div[role = "tabpanel"].active').removeClass('active');
        //如果TAB不存在，创建一个新的TAB
        if (tab_li.find('#tab_' + id).length < 1) {
            //创建新TAB的title
            var title = $('<li>', {
                'role': 'presentation',
                'id': 'tab_' + id,
                'aria-url': opts.url
            }).append(
                $('<a>', {
                    'href': '#' + id,
                    'aria-controls': id,
                    'role': 'tab',
                    'data-toggle': 'tab'
                }).html(opts.title)
            );
            //zhuyu 添加新增tab的时候，对于是否允许关闭的配置进行初始化可配，原始的是写死的不可配置的
            //start
            var closeFlag = true;
            if(opts.close){
            	if(opts.close=="no"){
            		closeFlag = false;
            	}else{
            		closeFlag = true;
            	}
            }else{
            	closeFlag = settings.close;
            }
            //end
            //是否允许关闭
            if (closeFlag) {
                title.append(
                    $('<i>', {
                        'class': 'close-tab fa fa-times'
                    })
                );
            }
            //创建新TAB的内容
            var content = $('<div>', {
                'class': 'tab-pane',
                'id': id,
                'role': 'tabpanel'
            });

            //加入TABS
            tab_li.append(title);
            tab_content.append(content);
        } else if (!opts.refresh) {
            $('#tab_' + id).addClass('active');
            $('#' + id).addClass('active');
            return;
        } else {
            var content = $('#' + id);
            content.html('');
        }

        //是否指定TAB内容
        if (opts.content) {
            content.append(opts.content);
        } else if (settings.iframe && !opts.ajax) { //没有内容，使用IFRAME打开链接
            content.append(
                $('<iframe>', {
                    'class': 'iframeClass',
                    'height': opts.height?opts.height:settings.iframeHeight,//打开页面高度可配    zhuyu add
                    'frameborder': "no",
                    'border': "0",
                    'id':id,
                    'src': opts.url
                })
            );
        } else {
            $.get(opts.url, function(data) {
                content.append(data);
            });
        }
        //激活TAB
        tab_li.find('#tab_' + id).addClass('active');
        tab_content.find('#' + id).addClass('active');
        $.addtabs.drop();
    };

    $.addtabs.close = function(opts) {
        //如果关闭的是当前激活的TAB，激活他的前一个TAB
        var $prevClick;        
        if ($("#tab_" + opts.id).hasClass('active')) {            
            if ($('#tab_' + opts.id).parents('li.tabdrop').length > 0 && !$('#tab_' + opts.id).parents('li.tabdrop').hasClass('hide')) {
                //$('#tab_' + opts.id).parents('.nav-tabs').find('li').last().addClass('active');
                $prevClick=$('#tab_' + opts.id).parents('.nav-tabs').find('li').last().find('a');
            } else {                
                //$("#tab_" + opts.id).prev('li').addClass('active');
                $prevClick=$('#tab_' + opts.id).prev('li').find('a');
            }
            //$("#" + opts.id).prev().addClass('active');
        }
        //关闭TAB
        $("#tab_" + opts.id).remove();
        $("#" + opts.id).remove();
        if($prevClick){
            $prevClick.click();
        }
        $.addtabs.drop();
        settings.callback();
    };

    $.addtabs.closeAll = function(target) {
        if (typeof target == 'string') {
            target = $('body').find(target);
        }
        $.each(target.find('li[id]'), function() {
            var id = $(this).children('a').attr('aria-controls');
            $("#tab_" + id).remove();
            $("#" + id).remove();
        });
        target.find('li[role = "presentation"]').first().addClass('active');
        var firstID = target.find('li[role = "presentation"]').first().children('a').attr('aria-controls');
        $('#' + firstID).addClass('active');
        $.addtabs.drop();
    };

    $.addtabs.drop = function() {
        //创建下拉标签
        var dropdown = $('<li>', {
            'class': 'dropdown pull-right hide tabdrop tab-drop'
        }).append(
            $('<a>', {
                'class': 'dropdown-toggle',
                'data-toggle': 'dropdown',
                'href': '#'
            }).append(
                $('<i>', {
                    'class': "glyphicon glyphicon-align-justify"
                })
            ).append(
                $('<b>', {
                    'class': 'caret'
                })
            )
        ).append(
            $('<ul>', {
                'class': "dropdown-menu"
            })
        )


        $('body').find('.nav-tabs').each(function() {
            var element = $(this);
            //检测是否已增加
            if (element.find('.tabdrop').length < 1) {
                dropdown.prependTo(element);
            } else {
                dropdown = element.find('.tabdrop');
            }
            //检测是否有下拉样式
            if (element.parent().is('.tabs-below')) {
                dropdown.addClass('dropup');
            }
            var collection = 0;

            //检查超过一行的标签页
            element.append(dropdown.find('li'))
                .find('>li')
                .not('.tabdrop')
                .each(function() {
                    if (this.offsetTop > 0 || element.width() - $(this).position().left - $(this).width() < 83) {
                        dropdown.find('ul').prepend($(this));
                        collection++;
                    }
                });

            //如果有超出的，显示下拉标签
            if (collection > 0) {
                dropdown.removeClass('hide');
                if (dropdown.find('.active').length == 1) {
                    dropdown.addClass('active');
                } else {
                    dropdown.removeClass('active');
                }
            } else {
                dropdown.addClass('hide');
            }
        })

    }

})(jQuery);

$(function() {
    $.addtabs();
})
