/**
 * Created by lipeiyao on 2017/11/22.
 */
(function ($) {
    var menuId = "";

    $.menuInfoMgr = {
        isShow: function () {
            if (btnAuth == 'all') {
                return true;
            } else {
                if (btnCfg == '1') {
                    return true
                } else {
                    return false;
                }
            }
        },
        isLeaf: [{id: 0, text: "是"}, {id: 1, text: "否"}],
        openType: [{id: 0, text: "现有方式"}, {id: 1, text: "新tab页打开"}],
        relatingIdData: [{id: 'GFXY', text: '国防学院'}],
        initButton: function () {
            $("#addData").on('click', $.menuInfoOper.addMenuInfo);
            $("#updateData").on('click', $.menuInfoOper.updateMenuInfo);
            $("#delData").on('click', $.menuInfoOper.delMenuInfo);
            $("#btnCfg").on('click', $.menuInfoOper.btnCfg);
        },
        initTable: function (treeNode) {
            menuId = treeNode.id;
            $('#mainContent').show();
            $('#menuTable').bootstrapTable('destroy');
            $('#menuTable')
                .bootstrapTable(
                    {
                        height: '100%',
                        method: 'get',
                        url: basePath+'menu/getMenuTablelList.do?menuId=' + menuId,
                        dataType: "json",
                        striped: true,// 使表格有条纹
                        pagination: true,// 在表格底部显示分页
                        pageNumber: 1,
                        pageSize: 20,
                        cache: false,// 是否使用缓存
                        pageList: [20, 50, 100],
                        paginationLoop: false,
                        idField: 'id',// 标识哪个字段为id主键
                        sidePagination: "client",// 表格分页的位置
                        queryParamsType: "", // 参数格式,发送标准的RESTFul类型的参数请求
                        clickToSelect: true,//点击行即可选中单选/复选框
                        sortable: true,
                        showRefresh: true,
                        showExport: true,  //是否显示导出按钮
                        buttonsAlign: "right",  //按钮位置
                        exportTypes: ['excel'],  //导出文件类型
                        Icons: 'fa fa-file-excel-o',
                        toolbar: '#toolbar',
                        search: true,//是否显示右上角的搜索框
                        queryParams: function (params) {
                        }, //参数
                        columns: [{
                            checkbox: true
                        }, {
                            field: 'number',
                            title: '序号'
                        }, {
                            field: 'id',
                            title: '菜单ID',
                            visible: false
                        }, {
                            field: 'parentId',
                            title: '父级菜单ID',
                            visible: false
                        }, {
                            field: 'relatingId',
                            title: '归属系统',
                            formatter: $.menuMgrFormatter.relatingIdFormatter
                        }, {
                            field: 'label',
                            title: '菜单名称'
                        }, {
                            field: 'url',
                            title: '菜单URL'
                        }, {
                            field: 'orderNum',
                            title: '菜单显示顺序'
                        }, {
                            field: 'iconCls',
                            title: '菜单显示图标',
                            formatter: $.menuMgrFormatter.iconClsFormatter
                        }, {
                            field: 'notes',
                            title: '菜单描述'
                        }, {
                            field: 'isLeaf',
                            title: '是否为目录',
                            formatter: $.menuMgrFormatter.isLeafFormatter
                        }, {
                            field: 'openType',
                            title: '节点打开类型',
                            formatter: $.menuMgrFormatter.openTypeFormatter
                        }],
                        detailView: true,
                        onExpandRow: function (index, row, $detail) {
                            $.menuInfoMgr.initSubGrid(index, row, $detail);
                        }
                    });
            $('#menuTable').bootstrapTable(
                'resetView',
                {
                    height: $(window).height() - 70
                });
        },
        initSubGrid: function (index, row, $detail) {
            var appId = row.id;
            var subtable = $detail.html('<table id="' + row.number + '"></table>').find('table');
            $(subtable).bootstrapTable({
                method: 'get',
                url: basePath+'menu/getAppBtnList.do?appId=' + appId,
                dataType: "json",
                striped: true,//使表格有条纹
                pagination: false,// 在表格底部显示分页
                pageNumber: 1,
                pageSize: 10,
                pageList: [20, 50, 100],
                paginationLoop: true,
                cache: false,//是否使用缓存
                undefinedText: '-',//当数据为 undefined 时显示的字符
                idField: 'id',//标识哪个字段为id主键
                showToggle: false,//名片格式
                cardView: false,//设置为True时显示名片（card）布局
                singleSelect: true,//复选框只能选择一条记录
                clickToSelect: true,//点击行即可选中单选/复选框
                sidePagination: "client",//表格分页的位置
                queryParamsType: "", //参数格式,发送标准的RESTFul类型的参数请求
                columns: [{
                    field: 'appId',
                    title: '菜单标识',
                    visible: false
                }, {
                    field: 'btnId',
                    title: '按钮标识'
                }, {
                    field: 'btnName',
                    title: '按钮名称'
                }, {
                    field: 'id',
                    title: '操作',
                    formatter: $.menuMgrFormatter.opBtn,
                    visible: $.menuInfoMgr.isShow()
                }],
                silent: true,  //刷新事件必须设置
                formatNoMatches: function () {  //没有匹配的结果
                    return '无符合条件的记录';
                },
                onLoadError: function (data) {
                    return '查询信息失败';
                }
            });
        }
    };
    $.menuMgrFormatter = {
        isLeafFormatter: function (value, row, index) {
            if (value == '1') {
                return '<span class="badge">否</span>'
            } else {
                return '<span class="badge badge-success">是</span>'
            }
        },
        iconClsFormatter: function (value, row, index) {
            return '<span class="' + value + '"></span>'
        },
        openTypeFormatter: function (value, row, index) {
            if (value == '1') {
                return '<span class="badge">新tab页打开</span>'
            } else {
                return '<span class="badge badge-success">现有方式</span>'
            }
        },
        opBtn: function (value, row, index) {
            return '<button type="button" class="btn btn-info btn-xs" onclick="$.menuInfoOper.updateBtn(\'' + value + '\',\'' + row.btnId + '\',\'' + row.btnName + '\',this)">修改</button>&nbsp;&nbsp;&nbsp;&nbsp;' +
                '<button type="button" class="btn btn-danger btn-xs" onclick="$.menuInfoOper.delBtn(\'' + value + '\',this)">删除</button>';
        },
        relatingIdFormatter: function (value) {
            return '教评系统';
        }
    };
    $.initTree = {
        initTreePanel: function () {
            let rootNode = [];
            const setting = {
                async: {
                    enable: true,
                    url: basePath+"menu/getMenuTree.do",
                    autoParam: ["id", "pId", "level"],
                    type: 'get'
                },
                view: {
                    dblClickExpand: false,
                    showLine: true,
                    selectedMulti: false
                },
                data: {
                    key: {
                        name: 'name'
                    },
                    simpleData: {
                        enable: true,
                        idKey: "id",
                        pIdKey: "pId",
                        rootPId: "-2"
                    }
                },
                callback: {
                    onClick: function (event, treeId, treeNode) {
                        $.initTree.treeOnClick(event, treeId, treeNode);
                        return false;
                    }
                }
            };
            let t = $("#tree");
            t = $.fn.zTree.init(t, setting, rootNode);
            $("#tree").css('height', $(window).height() - 60);
        },
        /*
         * 点击树打开页面
         */
        treeOnClick: function (event, treeId, treeNode) {
            $.menuInfoMgr.initTable(treeNode);
        },
        /*
         * 刷新树节点
         */
        treeRefresh: function (menuId) {
            let zTree = $.fn.zTree.getZTreeObj("tree"),
                /*获取 zTree 当前被选中的节点数据集合*/
                nodes = zTree.getSelectedNodes();
            /*强行异步加载父节点的子节点。[setting.async.enable = true 时有效]*/
            zTree.reAsyncChildNodes(nodes[0], "refresh", false);
        },
        /*
         * 点击树的折叠与展开的节点
         */
        minifiedEvent: function () {
            $('.js-toggle-minified').clickToggle(
                function () {
                    $('.left-sidebar').addClass('minified');
                    $('.content-wrapper').addClass('expanded');
                    $('.sidebar-minified').find('i.fa-angle-left').toggleClass(
                        'fa-angle-right');
                    $('#table').bootstrapTable('resetView');
                },
                function () {
                    $('.left-sidebar').removeClass('minified');
                    $('.content-wrapper').removeClass('expanded');
                    $('.sidebar-minified').find('i.fa-angle-left').toggleClass(
                        'fa-angle-right');
                    $('#table').bootstrapTable('resetView');
                });
        },
        /*
         * 浏览器大小发生变化
         */
        treeResize: function () {
            $(window).resize(function () {
                $("#tree").css('height', $(window).height() - 60);
            });
        }
    };
    $.menuInfoOper = {
        validOptions: {
            feedbackIcons: {
                valid: 'glyphicon glyphicon-ok',
                invalid: 'glyphicon glyphicon-remove',
                validating: 'glyphicon glyphicon-refresh'
            },
            message: '值未验证通过',
            group: '.v-group',
            fields: {
                labelForm: {validators: {notEmpty: {message: '请填写菜单名称'}}},
                openTypeForm: {validators: {notEmpty: {message: '请选择打开类型'}}},
                orderNumForm: {validators: {notEmpty: {message: '请填写菜单显示顺序'}, numeric: {message: '菜单显示顺序必须为数字'}}}
            }
        },
        validOptionsBtn: {
            feedbackIcons: {
                valid: 'glyphicon glyphicon-ok',
                invalid: 'glyphicon glyphicon-remove',
                validating: 'glyphicon glyphicon-refresh'
            },
            message: '值未验证通过',
            group: '.v-group',
            fields: {
                btnId: {validators: {notEmpty: {message: '请填写按钮标识'}}}
            }
        },
        getForm: function (updateFlag) {
            let $tableDataDiv = $('<form id="tableForm" role="form" class="form-horizontal"></form>');
            let $tableInfo = $('<div class="form-group"></div>');
            $tableInfo.append(`<div class="v-group">
                                    <label for="label-form" class="col-md-2 col-sm-2 col-xs-2 control-label">菜单名称</label>
                                    <div class="col-md-4 col-sm-4 col-xs-10 ">
                                        <input type="text" id="label-form" class="form-control"  name="labelForm" placeholder="菜单名称"/>
                                    </div>
                               </div>`);
            $tableInfo.append(`<div class="v-group">
                                    <label for="isLeaf-form" class="col-md-2 col-sm-2 col-xs-2 control-label">是否是目录</label>
                                    <div class="col-md-4 col-sm-4 col-xs-10 ">
                                        <select class="form-control select2" id="isLeaf-form" name="isLeafForm" placeholder="是否是目录"></select>
                                    </div>
                                </div>`);
            $tableDataDiv.append($tableInfo);
            $tableInfo = $('<div class="form-group"></div>');
            $tableInfo.append(`<div class="v-group">
                                    <label for="url-form" class="col-md-2 col-sm-2 col-xs-2 control-label">菜单URL</label>
                                    <div class="col-md-10 col-sm-10 col-xs-10 ">
                                        <input type="text" id="url-form" class="form-control" name="urlForm" placeholder="菜单URL"/>
                                    </div>
                               </div>`);
            $tableDataDiv.append($tableInfo);
            $tableInfo = $('<div class="form-group"></div>');
            $tableInfo.append(`<div class="v-group">
                                    <label for="openType-form" class="col-md-2 col-sm-2 col-xs-2 control-label">打开类型</label>
                                    <div class="col-md-4 col-sm-4 col-xs-10 ">
                                        <select id="openType-form" name="openTypeForm" class="form-control select2"></select>
                                    </div>
                               </div>`);
            $tableInfo.append(`<div class="v-group">
                                    <label for="relatingId-form" class="col-md-2 col-sm-2 col-xs-2 control-label">归属系统</label>
                                    <div class="col-md-4 col-sm-4 col-xs-10 ">
                                        <select id="relatingId-form" name="relatingIdForm" class="form-control select2"></select>
                                    </div>
                              </div>`);
            $tableDataDiv.append($tableInfo);
            $tableInfo = $('<div class="form-group"></div>');
            $tableInfo.append(`<div class="v-group">
                                    <label for="orderNum-form" class="col-md-2 col-sm-2 col-xs-2 control-label">菜单显示顺序</label>
                                    <div class="col-md-4 col-sm-4 col-xs-10 ">
                                        <input type="text" id="orderNum-form" class="form-control" name="descriptionForm" placeholder="菜单显示顺序"/>
                                    </div>
                               </div>`);
            $tableInfo.append(`<div class="v-group">
                                    <label for="iconCls-form" class="col-md-2 col-sm-2 col-xs-2 control-label">菜单显示图标</label>
                                    <div class="col-md-4 col-sm-4 col-xs-10 ">
                                        <input type="text" id="iconCls-form" class="form-control" name="iconClsForm" placeholder="菜单显示图标 例：fa fa-table"/>
                                    </div>
                               </div>`);
            $tableDataDiv.append($tableInfo);
            if(updateFlag){
                $tableInfo = $('<div class="form-group show" ></div>');
                // $tableInfo.append(`<div class="v-group">
                //                     <label for="orderNum-form" class="col-md-2 col-sm-2 col-xs-2 control-label">上级目录</label>
                //                     <div class="col-md-4 col-sm-4 col-xs-10 ">
                //                     <input type="text" id="parentId-form" class="parentIdForm" name="descriptionForm" placeholder="菜单描述"/>
                //                     </div>
                //                </div>`);
                $tableInfo.append(`<div class="v-group">
                                    <label for="description-form" class="col-md-2 col-sm-2 col-xs-2 control-label">菜单描述</label>
                                    <div class="col-md-4 col-sm-4 col-xs-10 ">
                                        <input type="text" id="description-form" class="form-control" name="descriptionForm" placeholder="菜单描述"/>
                                    </div>
                               </div>`);
                $tableDataDiv.append($tableInfo);
            }else{
                $tableInfo = $('<div class="form-group"></div>');
                $tableInfo.append(`<div class="v-group">
                                    <label for="description-form" class="col-md-2 col-sm-2 col-xs-2 control-label">菜单描述</label>
                                    <div class="col-md-10 col-sm-10 col-xs-10 ">
                                        <input type="text" id="description-form" class="form-control" name="descriptionForm" placeholder="菜单描述"/>
                                    </div>
                               </div>`);
                $tableDataDiv.append($tableInfo);
            }
            return $tableDataDiv;
        },
        getBtnForm: function () {
            let $tableDataDiv = $('<form id="tableBtnForm" role="form" class="form-horizontal"></form>');
            let $tableInfo = $('<div class="form-group"></div>');
            $tableInfo.append('<div class="v-group"><label for="btnId" class="col-md-2 col-sm-2 col-xs-2 control-label">按钮标识</label><div class="col-md-4 col-sm-4 col-xs-10 "><input type="text" id="btnId" class="form-control" value="" name="btnIdForm" placeholder="按钮标识"/></div></div>');
            $tableInfo.append('<div class="v-group"><label for="btnName" class="col-md-2 col-sm-2 col-xs-2 control-label">按钮名称</label><div class="col-md-4 col-sm-4 col-xs-10 "><input type="text" id="btnName" class="form-control" value="" name="btnNameForm" placeholder="不填则按钮名称默认"/></div></div>');
            $tableDataDiv.append($tableInfo);
            return $tableDataDiv;
        },
        addMenuInfo: function () {
            BootstrapDialog.show({
                size: BootstrapDialog.SIZE_WIDE,
                draggable: true,
                title: '新增菜单信息',
                message: $.menuInfoOper.getForm(false),
                buttons: [{
                    label: '提交',
                    action: function (dialogRef) {
                        var validate = $("#tableForm").data('bootstrapValidator').validate();
                        if (!validate.isValid()) {
                            return;
                        }
                        if ($.trim($("#isLeaf-form").val()) == 1 && $.trim($("#url-form").val()) == "") {
                            noty({
                                text: "请填写菜单url",
                                layout: "center",
                                type: "error",
                                timeout: 1000,
                                theme: 'bootstrapTheme'
                            });
                            return false;
                        }
                        var zTreeObj = $.fn.zTree.getZTreeObj("tree");
                        var zTree = zTreeObj.getSelectedNodes(true);
                        var levelNum = zTree[0].level;
                        $.ajax({
                            url: basePath+'menu/saveMenuInfoData.do',
                            type: 'POST',
                            data: {
                                label: $('#tableForm #label-form').val(),
                                name: $('#tableForm #label-form').val(),
                                url: $('#tableForm #url-form').val(),
                                description: $('#tableForm #description-form').val(),
                                relatingId: $('#tableForm #relatingId-form').val(),
                                isLeaf: $('#tableForm #isLeaf-form').val(),
                                orderNum: $('#tableForm #orderNum-form').val(),
                                iconCls: $('#tableForm #iconCls-form').val(),
                                openType: $('#tableForm #openType-form').val(),
                                parentId: menuId,
                                levelNum:levelNum
                            },
                            async: true,
                            dataType: 'json',
                            beforeSend: function () {
                                MaskLoading.fullScreenShow("正在提交,请稍后...");
                            },
                            success: function (data) {
                                if (data.success) {
                                    noty({
                                        text: "新增数据成功",
                                        layout: "center",
                                        type: "success",
                                        timeout: 1000,
                                        theme: 'bootstrapTheme'
                                    });
                                    MaskLoading.fullScreenHide();
                                    dialogRef.close();
                                    $.menuInfoOper.refreshData();
                                    $.initTree.treeRefresh(menuId);
                                } else {
                                    noty({
                                        text: data.message.errorMessage,
                                        layout: "center",
                                        type: "error",
                                        timeout: 1000,
                                        theme: 'bootstrapTheme'
                                    });
                                    MaskLoading.fullScreenHide();
                                }
                            },
                            error: function (data) {
                                noty({
                                    text: "服务器异常",
                                    layout: "center",
                                    type: "error",
                                    timeout: 1000,
                                    theme: 'bootstrapTheme'
                                });
                                MaskLoading.fullScreenHide();
                            },
                            complete: function () {
                                MaskLoading.fullScreenHide();
                            }
                        });
                    }
                }, {
                    label: '关闭',
                    action: function (dialogRef) {
                        dialogRef.close();
                    }
                }],
                onshown: function (dialogRef) {
                    $('#isLeaf-form').select2({
                        placeholder: '请选择状态',
                        width: "100%",
                        data: $.menuInfoMgr.isLeaf,
                        minimumResultsForSearch: -1,
                        multiple: false
                    });
                    $('#openType-form').select2({
                        placeholder: '请选择打开类型',
                        allowClear: true,
                        width: "100%",
                        data: $.menuInfoMgr.openType,
                        minimumResultsForSearch: -1,
                        multiple: false
                    });
                    $('#relatingId-form').select2({
                        placeholder: '归属系统',
                        width: "100%",
                        data: $.menuInfoMgr.relatingIdData,
                        minimumResultsForSearch: -1,
                        multiple: false
                    });
                    $("#tableForm").bootstrapValidator($.menuInfoOper.validOptions);
                }
            });
        },
        updateMenuInfo: function () {
            var selections = $('#menuTable').bootstrapTable('getSelections');
            if (selections.length == 0) {
                noty({
                    text: "请勾选需要操作的记录",
                    layout: "center",
                    type: "error",
                    timeout: 1000,
                    theme: 'bootstrapTheme'
                });
                return false;
            }
            if (selections.length > 1) {
                noty({
                    text: "只能勾选一条需要操作的记录",
                    layout: "center",
                    type: "error",
                    timeout: 1000,
                    theme: 'bootstrapTheme'
                });
                return false;
            }
            BootstrapDialog.show({
                size: BootstrapDialog.SIZE_WIDE,
                draggable: true,
                title: '修改菜单信息',
                message: $.menuInfoOper.getForm(true),
                buttons: [{
                    label: '提交',
                    action: function (dialogRef) {
                        var validate = $("#tableForm").data('bootstrapValidator').validate();
                        if (!validate.isValid()) {
                            return;
                        }

                        if ($.trim($("#isLeaf-form").val()) == 1 && $.trim($("#url-form").val()) == "") {
                            noty({
                                text: "请填写菜单url",
                                layout: "center",
                                type: "error",
                                timeout: 1000,
                                theme: 'bootstrapTheme'
                            });
                            return false;
                        }

                        var zTreeObj = $.fn.zTree.getZTreeObj("tree");
                        var zTree = zTreeObj.getSelectedNodes(true);
                        var levelNum = zTree[0].level;
                        $.ajax({
                            url: basePath+'menu/saveMenuInfoData.do',
                            type: 'POST',
                            data: {
                                label: $('#tableForm #label-form').val(),
                                name: $('#tableForm #label-form').val(),
                                url: $('#tableForm #url-form').val(),
                                description: $('#tableForm #description-form').val(),
                                relatingId: $('#tableForm #relatingId-form').val(),
                                isLeaf: $('#tableForm #isLeaf-form').val(),
                                orderNum: $('#tableForm #orderNum-form').val(),
                                iconCls: $('#tableForm #iconCls-form').val(),
                                openType: $('#tableForm #openType-form').val(),
                                // parentId: $('#tableForm #parentId-form').val(),
                                parentId:selections[0].parentId,
                                id: selections[0].id,
                                levelNum:levelNum
                            },
                            async: true,
                            dataType: 'json',
                            beforeSend: function () {
                                MaskLoading.fullScreenShow("正在提交,请稍后...");
                            },
                            success: function (data) {
                                if (data.success) {
                                    noty({
                                        text: "修改数据成功",
                                        layout: "center",
                                        type: "success",
                                        timeout: 1000,
                                        theme: 'bootstrapTheme'
                                    });
                                    MaskLoading.fullScreenHide();
                                    dialogRef.close();
                                    $.menuInfoOper.refreshData();
                                    $.initTree.treeRefresh(menuId);
                                } else {
                                    noty({
                                        text: data.message.errorMessage,
                                        layout: "center",
                                        type: "error",
                                        timeout: 1000,
                                        theme: 'bootstrapTheme'
                                    });
                                    MaskLoading.fullScreenHide();
                                }
                            },
                            error: function (data) {
                                noty({
                                    text: "服务器异常",
                                    layout: "center",
                                    type: "error",
                                    timeout: 1000,
                                    theme: 'bootstrapTheme'
                                });
                                MaskLoading.fullScreenHide();
                            },
                            complete: function () {
                                MaskLoading.fullScreenHide();
                            }
                        });
                    }
                }, {
                    label: '关闭',
                    action: function (dialogRef) {
                        dialogRef.close();
                    }
                }],
                onshown: function (dialogRef) {
                    $("#label-form").val(selections[0].label);
                    $("#url-form").val(selections[0].url);
                    $("#description-form").val(selections[0].notes);
                    $("#orderNum-form").val(selections[0].orderNum);
                    $("#iconCls-form").val(selections[0].iconCls);
                    $('#isLeaf-form').select2({
                        placeholder: '请选择状态',
                        allowClear: true,
                        width: "100%",
                        data: $.menuInfoMgr.isLeaf,
                        minimumResultsForSearch: -1,
                        multiple: false
                    });
                    $("#isLeaf-form").val(selections[0].isLeaf).trigger("change");
                    $('#openType-form').select2({
                        placeholder: '请选择打开类型',
                        allowClear: true,
                        width: "100%",
                        data: $.menuInfoMgr.openType,
                        minimumResultsForSearch: -1,
                        multiple: false
                    });
                    $("#openType-form").val(selections[0].openType).trigger("change");
                    $('#relatingId-form').select2({
                        placeholder: '归属系统',
                        width: "100%",
                        data: $.menuInfoMgr.relatingIdData,
                        minimumResultsForSearch: -1,
                        multiple: false
                    });
                    $("#relatingId-form").val(selections[0].relatingId).trigger("change");
                    // $.ajax({
                    //     url : basePath+'menuMgr/getParentMenuList.do',
                    //     type : 'GET',
                    //     cache: false,
                    //     data : {},
                    //     async : true,
                    //     dataType : 'json',
                    //     beforeSend : function () {
                    //         MaskLoading.fullScreenShow("正在获取数据,请稍后...");
                    //     },
                    //     success : function(data) {
                    //         MaskLoading.fullScreenHide();
                    //         $('#parentId-form').select2({
                    //             placeholder: '上级目录',
                    //             width: "100%",
                    //             data: data,
                    //             minimumResultsForSearch: -1,
                    //             multiple: false
                    //         });
                    //         $("#parentId-form").val(menuId).trigger("change");
                    //     },
                    //     error : function(data) {
                    //         MaskLoading.fullScreenHide();
                    //     }
                    // });
                    $("#tableForm").bootstrapValidator($.menuInfoOper.validOptions);
                }
            });
        },
        delMenuInfo: function () {
            var selections = $('#menuTable').bootstrapTable('getSelections');
            if (selections.length == 0) {
                noty({
                    text: "请勾选需要操作的记录",
                    layout: "center",
                    type: "error",
                    timeout: 1000,
                    theme: 'bootstrapTheme'
                });
                return false;
            }
            var menuIds = new Array();
            for (var i = 0; i < selections.length; i++) {
                menuIds.push(selections[i].id);
            }
            BootstrapDialog.confirm({
                draggable: true,
                btnOKLabel: '是',
                title: "删除菜单",
                btnCancelLabel: '否',
                message: '确定要进行删除操作吗?',
                callback: function (result) {
                    if (result) {
                        $.ajax({
                            url: basePath+'menuMgr/delMenuInfoData.do',
                            type: 'POST',
                            data: {menuId: JSON.stringify(menuIds)},
                            async: true,
                            dataType: 'json',
                            beforeSend: function () {
                                MaskLoading.fullScreenShow("正在提交,请稍后...");
                            },
                            success: function (data) {
                                if (data.success) {
                                    noty({
                                        text: "删除数据成功",
                                        layout: "center",
                                        type: "success",
                                        timeout: 1000,
                                        theme: 'bootstrapTheme'
                                    });
                                    MaskLoading.fullScreenHide();
                                    $.menuInfoOper.refreshData();
                                    $.initTree.treeRefresh(selections[0].id);
                                } else {
                                    noty({
                                        text: data.message.errorMessage,
                                        layout: "center",
                                        type: "error",
                                        timeout: 1000,
                                        theme: 'bootstrapTheme'
                                    });
                                    MaskLoading.fullScreenHide();
                                }
                            },
                            error: function (data) {
                                noty({
                                    text: "服务器异常",
                                    layout: "center",
                                    type: "error",
                                    timeout: 1000,
                                    theme: 'bootstrapTheme'
                                });
                            },
                            complete: function () {
                                MaskLoading.fullScreenHide();
                            }
                        });
                    }
                }
            });
        },
        refreshData: function () {
            $('#menuTable').bootstrapTable('refresh');
            $('#menuTable').bootstrapTable('resetView');
        },
        btnCfg: function () {
            var selections = $('#menuTable').bootstrapTable('getSelections');
            if (selections.length == 0) {
                noty({
                    text: "请勾选需要操作的记录",
                    layout: "center",
                    type: "error",
                    timeout: 1000,
                    theme: 'bootstrapTheme'
                });
                return false;
            }
            if (selections.length > 1) {
                noty({
                    text: "只能勾选一条需要操作的记录",
                    layout: "center",
                    type: "error",
                    timeout: 1000,
                    theme: 'bootstrapTheme'
                });
                return false;
            }
            BootstrapDialog.show({
                size: BootstrapDialog.SIZE_WIDE,
                draggable: true,
                title: '新增按钮配置',
                message: $.menuInfoOper.getBtnForm(),
                buttons: [{
                    label: '提交',
                    action: function (dialogRef) {
                        var validate = $("#tableBtnForm").data('bootstrapValidator').validate();
                        if (!validate.isValid()) {
                            return;
                        }
                        $.ajax({
                            url: basePath+'menuMgr/addMenuBtn.do',
                            type: 'POST',
                            data: {
                                btnId: $("#btnId").val(),
                                btnName: $("#btnName").val(),
                                appId: selections[0].id
                            },
                            async: true,
                            dataType: 'json',
                            beforeSend: function () {
                                MaskLoading.fullScreenShow("正在提交,请稍后...");
                            },
                            success: function (data) {
                                if (data.success) {
                                    noty({
                                        text: "按钮新增成功",
                                        layout: "center",
                                        type: "success",
                                        timeout: 1000,
                                        theme: 'bootstrapTheme'
                                    });
                                    MaskLoading.fullScreenHide();
                                    dialogRef.close();
                                    $("#menuTable").bootstrapTable('collapseRow', Number(selections[0].number) - 1);
                                    $("#menuTable").bootstrapTable('expandRow', Number(selections[0].number) - 1);
                                } else {
                                    noty({
                                        text: data.message.errorMessage,
                                        layout: "center",
                                        type: "error",
                                        timeout: 1000,
                                        theme: 'bootstrapTheme'
                                    });
                                    MaskLoading.fullScreenHide();
                                }
                            },
                            error: function (data) {
                                noty({
                                    text: "服务器异常",
                                    layout: "center",
                                    type: "error",
                                    timeout: 1000,
                                    theme: 'bootstrapTheme'
                                });
                                MaskLoading.fullScreenHide();
                            },
                            complete: function () {
                                MaskLoading.fullScreenHide();
                            }
                        });
                    }
                }, {
                    label: '关闭',
                    action: function (dialogRef) {
                        dialogRef.close();
                    }
                }],
                onshown: function (dialogRef) {
                    $("#tableBtnForm").bootstrapValidator($.menuInfoOper.validOptionsBtn);
                }
            });
        },
        updateBtn: function (id, btnId, btnName, that) {
            var index = Number($(that).closest('table').attr("id")) - 1;
            BootstrapDialog.show({
                size: BootstrapDialog.SIZE_WIDE,
                draggable: true,
                title: '修改按钮配置',
                message: $.menuInfoOper.getBtnForm(),
                buttons: [{
                    label: '提交',
                    action: function (dialogRef) {
                        var validate = $("#tableBtnForm").data('bootstrapValidator').validate();
                        if (!validate.isValid()) {
                            return;
                        }
                        $.ajax({
                            url: basePath+'menuMgr/updateMenuBtn.do',
                            type: 'POST',
                            data: {
                                btnId: $("#btnId").val(),
                                btnName: $("#btnName").val(),
                                id: id
                            },
                            async: true,
                            dataType: 'json',
                            beforeSend: function () {
                                MaskLoading.fullScreenShow("正在提交,请稍后...");
                            },
                            success: function (data) {
                                if (data.success) {
                                    noty({
                                        text: "按钮修改成功",
                                        layout: "center",
                                        type: "success",
                                        timeout: 1000,
                                        theme: 'bootstrapTheme'
                                    });
                                    MaskLoading.fullScreenHide();
                                    dialogRef.close();
                                    $("#menuTable").bootstrapTable('collapseRow', index);
                                    $("#menuTable").bootstrapTable('expandRow', index);
                                } else {
                                    noty({
                                        text: data.message.errorMessage,
                                        layout: "center",
                                        type: "error",
                                        timeout: 1000,
                                        theme: 'bootstrapTheme'
                                    });
                                    MaskLoading.fullScreenHide();
                                }
                            },
                            error: function (data) {
                                noty({
                                    text: "服务器异常",
                                    layout: "center",
                                    type: "error",
                                    timeout: 1000,
                                    theme: 'bootstrapTheme'
                                });
                                MaskLoading.fullScreenHide();
                            },
                            complete: function () {
                                MaskLoading.fullScreenHide();
                            }
                        });
                    }
                }, {
                    label: '关闭',
                    action: function (dialogRef) {
                        dialogRef.close();
                    }
                }],
                onshown: function (dialogRef) {
                    $("#btnId").val(btnId);
                    $("#btnName").val(btnName);
                    $("#tableBtnForm").bootstrapValidator($.menuInfoOper.validOptionsBtn);
                }
            });
        },
        delBtn: function (id, that) {
            var index = Number($(that).closest('table').attr("id")) - 1;
            BootstrapDialog.confirm({
                title: '提示',
                message: '确定删除该按钮数据吗?',
                type: BootstrapDialog.TYPE_WARNING,
                closable: true,
                draggable: true,
                btnCancelLabel: '否',
                btnOKLabel: '确定',
                btnOKClass: 'btn-warning',
                callback: function (result) {
                    if (result) {
                        $.ajax({
                            url: basePath+'menuMgr/delMenuBtn.do',
                            type: 'POST',
                            data: {
                                id: id
                            },
                            async: true,
                            dataType: 'json',
                            beforeSend: function () {
                                MaskLoading.fullScreenShow("正在删除,请稍后...");
                            },
                            success: function (data) {
                                MaskLoading.fullScreenHide();
                                if (data.success) {
                                    noty({
                                        text: "按钮删除成功",
                                        layout: "center",
                                        type: "success",
                                        timeout: 1000,
                                        theme: 'bootstrapTheme'
                                    });
                                    $("#menuTable").bootstrapTable('collapseRow', index);
                                    $("#menuTable").bootstrapTable('expandRow', index);
                                } else {
                                    noty({
                                        text: data.message.errorMessage,
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
                                    text: '服务调用失败',
                                    layout: "center",
                                    type: "error",
                                    timeout: 1000,
                                    theme: 'bootstrapTheme'
                                });
                            }
                        });
                    }
                }
            });
        }
    };
    $(function () {
        $.menuInfoMgr.initButton();
        $.initTree.initTreePanel();
        $.initTree.treeResize();
    })
})(jQuery);
