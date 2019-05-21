(function ($) {
    var organizationId = "";
    $.organizationInfoMgr={
        state:[{id:0,text:"生效"},{id:1,text:"不生效"}],
        initButton:function(){
            $("#addData").on('click', $.deptInfoOper.addDeptInfo);
            $("#updateData").on('click', $.deptInfoOper.updateDeptInfo);
            $("#delData").on('click', $.deptInfoOper.delDeptInfo);
        },
        initTable:function(treeNode){
            organizationId = treeNode.organizationId;
            $('#mainContent').show();
            $('#deptTable').bootstrapTable('destroy');
            $('#deptTable').bootstrapTable(
                {
                    height: '100%',
                    method: 'get',
                    url: basePath + 'organization/getOrganizationList.do?id=' + organizationId,
                    dataType: "json",
                    striped: true,// 使表格有条纹
                    pagination: true,// 在表格底部显示分页
                    pageNumber: 1,
                    pageSize: 20,
                    cache: false,// 是否使用缓存
                    pageList: [20, 50, 100],
                    paginationLoop: false,
                    idField: 'organizationId',// 标识哪个字段为id主键
                    sidePagination: "client",// 表格分页的位置
                    queryParamsType: "", // 参数格式,发送标准的RESTFul类型的参数请求
                    clickToSelect: true,//点击行即可选中单选/复选框
                    sortable: true,
                    showRefresh: true,
                    toolbar: '#toolbar',
                    search: true,//是否显示右上角的搜索框
                    queryParams: function (params) {

                    }, //参数
                    columns: [{
                        checkbox: true
                    }, {
                        field: 'organizationId',
                        title: '部门ID',
                        visible: false
                    }, {
                        field: 'parentId',
                        title: '父级部门ID',
                        visible: false
                    }, {
                        field: 'name',
                        title: '部门名称'
                    }, {
                        field: 'description',
                        title: '描述'
                    }, {
                        field: 'state',
                        title: '状态',
                        formatter: $.deptMgrFormatter.stateFormatter

                    }]

                });
            $('#deptTable').bootstrapTable(
                'resetView',{
                    height: $(window).height() - 70
                }
            );
        }
    };

    $.deptMgrFormatter = {
        stateFormatter:function(value,row,index){
            if(value == '1'){
                return '<span class="badge">不生效</span>'
            } else {
                return '<span class="badge badge-success">生效</span>'
            }
        }
    };

    $.initTree={
        initTreePanel:function(){
            var rootNode = [];
            var setting = {
                async: {
                    enable: true,
                    url: basePath + "organization/all.do",
                    autoParam: ["organizationId", "parentId", "nodeLevel"],
                    type: 'GET'
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
                        idKey: "organizationId",
                        pIdKey: "parentId",
                        rootPId: "0"
                    }
                },
                callback: {
                    onClick: function (event, treeId, treeNode) {
                        $.initTree.treeOnClick(event, treeId, treeNode);
                    }
                }
            };
            var t = $("#tree");
            t = $.fn.zTree.init(t, setting, rootNode);
            $("#tree").css('height', $(window).height() - 70);
        },
        /*
         * 点击树打开页面
         */
        treeOnClick: function (event, treeId, treeNode) {
            $.organizationInfoMgr.initTable(treeNode);
        },
        /*
         * 刷新树节点
         */
        treeRefresh: function (organizationId) {
            var zTree = $.fn.zTree.getZTreeObj("tree"),
                /*获取 zTree 当前被选中的节点数据集合*/
                nodes = zTree.getSelectedNodes();
            /*强行异步加载父节点的子节点。[setting.async.enable = true 时有效]*/
            zTree.reAsyncChildNodes(nodes[0], "refresh", false);
        },
        /*
         * 浏览器大小发生变化
         */
        treeResize: function () {
            $(window).resize(function () {
                $("#tree").css('height', $(window).height() - 40);
            });
        }

    };
    $.deptInfoOper={
        validOptions: {
            feedbackIcons: {
                valid: 'glyphicon glyphicon-ok',
                invalid: 'glyphicon glyphicon-remove',
                validating: 'glyphicon glyphicon-refresh'
            },
            message: '值未验证通过',
            group: '.v-group',
            fields: {
                deptNameForm: {validators: {notEmpty: {message: '请填写部门名称'}}},
                stateForm: {validators: {notEmpty: {message: '请选择状态'}}}
            }
        },
        getForm: function () {
            var $tableDataDiv = $('<form id="tableForm" role="form" class="form-horizontal"></form>');
            var $tableInfo = $('<div class="form-group"></div>');
            $tableInfo.append('<div class="v-group"><label for="deptName-form" class="col-md-2 col-sm-2 col-xs-2 control-label">部门名称</label><div class="col-md-4 col-sm-4 col-xs-10 "><input type="text" id="deptName-form" class="form-control" name="cnNameForm" placeholder="部门名称"/></div></div>');
            $tableInfo.append('<div class="v-group"><label for="description-form" class="col-md-2 col-sm-2 col-xs-2 control-label">部门描述</label><div class="col-md-4 col-sm-4 col-xs-10 "><input type="text" id="description-form" class="form-control" name="cnNameForm" placeholder="部门描述"/></div></div>');
            $tableDataDiv.append($tableInfo);
            $tableInfo = $('<div class="form-group"></div>');
            $tableInfo.append('<div class="v-group"><label for="state-form" class="col-md-2 col-sm-2 col-xs-2 control-label">状态</label><div class="col-md-4 col-sm-4 col-xs-10 "><select class="form-control select2" id="state-form" name="stateForm" placeholder="状态"></select></div></div>');
            $tableDataDiv.append($tableInfo);
            return $tableDataDiv;
        },
        addDeptInfo: function () {
            BootstrapDialog.show({
                size: BootstrapDialog.SIZE_WIDE,
                draggable: true,
                title: '新增部门信息',
                message: $.deptInfoOper.getForm(false),
                buttons: [{
                    label: '提交',
                    action: function (dialogRef) {
                        var validate = $("#tableForm").data('bootstrapValidator').validate();
                        if (!validate.isValid()) {
                            return;
                        }
                        var zTreeObj = $.fn.zTree.getZTreeObj("tree");
                        var zTree = zTreeObj.getSelectedNodes(true);
                        var levelNum = zTree[0].level;
                        if (!levelNum) {
                            levelNum = 0;
                        }
                        $.ajax({
                            url: basePath + 'organization/saveOrganization.do',
                            type: 'POST',
                            data: {
                                name: $('#tableForm #deptName-form').val(),
                                description: $('#tableForm #description-form').val(),
                                state: $('#tableForm #state-form').val(),
                                nodeLevel: levelNum,
                                parentId: organizationId
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
                                    $.deptInfoOper.refreshData();
                                    $.initTree.treeRefresh(organizationId);
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
                    $('#state-form').select2({
                        placeholder: '请选择状态',
                        width: "100%",
                        data: $.organizationInfoMgr.state,
                        minimumResultsForSearch: -1,
                        multiple: false
                    });
                    $("#tableForm").bootstrapValidator($.deptInfoOper.validOptions);
                }
            });
        },
        updateDeptInfo: function () {
            var selections = $('#deptTable').bootstrapTable('getSelections');
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
                title: '修改部门信息',
                message: $.deptInfoOper.getForm(true),
                buttons: [{
                    label: '提交',
                    action: function (dialogRef) {
                        var validate = $("#tableForm").data('bootstrapValidator').validate();
                        if (!validate.isValid()) {
                            return;
                        }
                        var zTreeObj = $.fn.zTree.getZTreeObj("tree");
                        var zTree = zTreeObj.getSelectedNodes(true);
                        var levelNum = zTree[0].level;
                        if (!levelNum) {
                            levelNum = 0;
                        }
                        $.ajax({
                            url: basePath + 'organization/saveOrganization.do',
                            type: 'POST',
                            data: {
                                name: $('#tableForm #deptName-form').val(),
                                description: $('#tableForm #description-form').val(),
                                state: $('#tableForm #state-form').val(),
                                nodeLevel: levelNum,
                                organizationId: selections[0].organizationId,
                                parentId: organizationId
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
                                    $.deptInfoOper.refreshData();
                                    $.initTree.treeRefresh(organizationId);
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
                    $('#state-form').select2({
                        placeholder: '请选择状态',
                        allowClear: true,
                        width: "100%",
                        data: $.organizationInfoMgr.state,
                        minimumResultsForSearch: -1,
                        multiple: false
                    });
                    $("#state-form").val(selections[0].state).trigger("change");
                    $("#description-form").val(selections[0].description);
                    $("#deptName-form").val(selections[0].name);
                    $("#tableForm").bootstrapValidator($.deptInfoOper.validOptions);
                }
            });
        },
        delDeptInfo: function () {
            var selections = $('#deptTable').bootstrapTable('getSelections');
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
            $.ajax({
                url: basePath + 'userInfo/getGroupInfoWithUser.do',
                type: 'GET',
                cache: false,
                data: {
                    organizationId: selections[0].organizationId,
                    level: 1
                },
                async: true,
                dataType: 'json',
                beforeSend: function () {
                    MaskLoading.fullScreenShow("正在校验,请稍后...");
                },
                success: function (data) {
                    MaskLoading.fullScreenHide();
                    if (data.length > 0) {
                        noty({
                            text: "该部门下或子部门已配置有人员信息，不可删除此部门！",
                            layout: "center",
                            type: "error",
                            timeout: 1000,
                            theme: 'bootstrapTheme'
                        });
                    } else {
                        BootstrapDialog.confirm({
                            draggable: true,
                            btnOKLabel: '是',
                            btnCancelLabel: '否',
                            title: '删除部门',
                            message: '确定要进行删除操作吗?',
                            callback: function (result) {
                                if (result) {
                                    $.ajax({
                                        url: basePath + 'groupInfo/delDeptInfo.do',
                                        type: 'POST',
                                        data: {organizationId: selections[0].organizationId},
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
                                                $.deptInfoOper.refreshData();
                                                $.initTree.treeRefresh(selections[0].groupId);
                                            } else {
                                                noty({
                                                    text: data.errorMessage,
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
                    }
                },
                error: function (data) {
                    MaskLoading.fullScreenHide();
                }
            });
        },
        refreshData: function () {
            $('#deptTable').bootstrapTable('refresh');
            $('#deptTable').bootstrapTable('resetView');
        }
    };


    $(function () {
        $.organizationInfoMgr.initButton();
        $.initTree.initTreePanel();
        $.initTree.treeResize();
    })
})(jQuery)