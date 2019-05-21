/**
 * Created by lipeiyao on 2017/11/10.
 */
(function ($) {
    $.roleInfoMgr = {
        state: [{id: 0, text: "生效"}, {id: 1, text: "不生效"}],
        initButton: function () {
            $("#addData").on('click', $.roleInfoOper.addRoleInfo);
            $("#updateData").on('click', $.roleInfoOper.updateRoleInfo);
            $("#delData").on('click', $.roleInfoOper.delRoleInfo);
            $("#roleMenu").on('click', $.roleInfoOper.roleToMenu);
        },
        initTable: function () {
            $('#roleTable')
                .bootstrapTable(
                    {
                        height: '100%',
                        method: 'get',
                        url: basePath + 'roleInfo/getRoleInfoDatas.do',
                        dataType: "json",
                        striped: true,// 使表格有条纹
                        pagination: true,// 在表格底部显示分页
                        pageNumber: 1,
                        pageSize: 20,
                        cache: false,// 是否使用缓存
                        pageList: [20, 50, 100],
                        paginationLoop: false,
                        idField: 'roleId',// 标识哪个字段为id主键
                        sidePagination: "client",// 表格分页的位置
                        queryParamsType: "", // 参数格式,发送标准的RESTFul类型的参数请求
                        clickToSelect: true,//点击行即可选中单选/复选框
                        sortable: true,
                        showRefresh: true,
                        search: true,//是否显示右上角的搜索框
                        toolbar: '#toolbar',
                        responseHandler: function (res) {
                            console.log(res);
                            return res;
                        },
                        queryParams: function (params) {
                            return {
                                offset: params.pageSize * params.pageNumber - 1,
                                pageSize: params.pageSize
                            }
                        }, //参数
                        columns: [{
                            checkbox: true
                        }, {
                            field: 'roleId',
                            title: '角色ID',
                            visible: false
                        }, {
                            field: 'name',
                            title: '角色名称'
                        }, {
                            field: 'systemId',
                            title: '所属应用',
                            formatter: $.roleMgrFormatter.systemNameFormatter
                        }, {
                            field: 'description',
                            title: '描述'
                        }, {
                            field: 'state',
                            title: '状态',
                            formatter: $.roleMgrFormatter.stateFormatter
                        }]
                    });
            $('#roleTable').bootstrapTable('resetView',
                {
                    height: $(window).height() - 70
                });
        }
    };
    $.roleMgrFormatter = {
        stateFormatter: function (value, row, index) {
            if (value == '1') {
                return '<span class="badge">不生效</span>'
            } else {
                return '<span class="badge badge-success">生效</span>'
            }
        },
        systemNameFormatter: function (value, row, index) {
            let systemName = "";
            let systemIds = value.split(",");
            for (let i = 0; i < systemIds.length; i++) {
                for (let j = 0; j < systemArr.length; j++) {
                    if (systemIds[i] === (systemArr[j].id)) {
                        systemName += systemArr[j].label + ",";
                    }
                }
            }
            if (systemName.length > 0) {
                systemName = systemName.substring(0, systemName.length - 1);
            }
            return systemName;
        }
    };
    $.roleInfoOper = {
        validOptions: {
            feedbackIcons: {
                valid: 'glyphicon glyphicon-ok',
                invalid: 'glyphicon glyphicon-remove',
                validating: 'glyphicon glyphicon-refresh'
            },
            message: '值未验证通过',
            group: '.v-group',
            fields: {
                roleNameForm: {validators: {notEmpty: {message: '请填写角色名称'}}},
                stateForm: {validators: {notEmpty: {message: '请选择状态'}}},
                systemIdForm: {validators: {notEmpty: {message: '请选择所属应用'}}}
            }
        },
        getForm: function () {
            let $tableDataDiv = $('<form id="tableForm" role="form" class="form-horizontal"></form>');
            let $tableInfo = $('<div class="form-group"></div>');
            $tableInfo.append('<div class="v-group"><label for="roleName-form" class="col-md-2 col-sm-2 col-xs-2 control-label">角色名称</label><div class="col-md-4 col-sm-4 col-xs-10 "><input type="text" id="roleName-form" class="form-control" name="roleNameForm" placeholder="角色名称"/></div></div>');
            $tableInfo.append('<div class="v-group"><label for="description-form" class="col-md-2 col-sm-2 col-xs-2 control-label">角色描述</label><div class="col-md-4 col-sm-4 col-xs-10 "><input type="text" id="description-form" class="form-control" name="descriptionForm" placeholder="角色描述"/></div></div>');
            $tableDataDiv.append($tableInfo);
            $tableInfo = $('<div class="form-group"></div>');
            $tableInfo.append('<div class="v-group"><label for="state-form" class="col-md-2 col-sm-2 col-xs-2 control-label">状态</label><div class="col-md-4 col-sm-4 col-xs-10 "><select class="form-control select2" id="state-form" name="stateForm" placeholder="状态"></select></div></div>');
            $tableInfo.append('<div class="v-group"><label for="systemId-form" class="col-md-2 col-sm-2 col-xs-2 control-label">所属应用</label><div class="col-md-4 col-sm-4 col-xs-10 "><select class="form-control select2" id="systemId-form" name="systemIdForm" placeholder="所属应用"></select></div></div>');
            $tableDataDiv.append($tableInfo);
            return $tableDataDiv;
        },
        addRoleInfo: function () {
            BootstrapDialog.show({
                size: BootstrapDialog.SIZE_WIDE,
                draggable: true,
                title: '新增角色信息',
                message: $.roleInfoOper.getForm(false),
                buttons: [{
                    label: '提交',
                    action: function (dialogRef) {
                        var validate = $("#tableForm").data('bootstrapValidator').validate();
                        if (!validate.isValid()) {
                            return;
                        }
                        $.ajax({
                            url: basePath + 'roleInfo/saveRoleInfoData.do',
                            type: 'POST',
                            data: {
                                name: $('#tableForm #roleName-form').val(),
                                description: $('#tableForm #description-form').val(),
                                state: $('#tableForm #state-form').val(),
                                systemId: $('#tableForm #systemId-form').val().join(",")
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
                                    $.roleInfoOper.refreshData();
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
                onshown: function () {
                    $('#state-form').select2({
                        placeholder: '请选择状态',
                        width: "100%",
                        data: $.roleInfoMgr.state,
                        minimumResultsForSearch: -1,
                        multiple: false
                    });
                    $('#systemId-form').select2({
                        placeholder: '请选择所属应用',
                        allowClear: false,
                        width: "100%",
                        minimumResultsForSearch: -1,
                        multiple: true,
                        ajax: {
                            url: basePath + "roleInfo/getSystem.do", // 异步请求地址
                            dataType: "json", // 数据类型
                            type: "GET",
                            processResults: function (data) {
                                let dataOrder = $.map(data, function (obj) {
                                    obj.id = obj.id;
                                    obj.text = obj.label;
                                    return obj;
                                });
                                return {
                                    results: dataOrder
                                };
                            }
                        }
                    });
                    $("#tableForm").bootstrapValidator($.roleInfoOper.validOptions);
                }
            });
        },
        updateRoleInfo: function () {
            var selections = $('#roleTable').bootstrapTable('getSelections');
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
                title: '修改角色信息',
                message: $.roleInfoOper.getForm(true),
                buttons: [{
                    label: '提交',
                    action: function (dialogRef) {
                        var validate = $("#tableForm").data('bootstrapValidator').validate();
                        if (!validate.isValid()) {
                            return;
                        }
                        $.ajax({
                            url: basePath + 'roleInfo/saveRoleInfoData.do',
                            type: 'POST',
                            data: {
                                name: $('#tableForm #roleName-form').val(),
                                description: $('#tableForm #description-form').val(),
                                state: $('#tableForm #state-form').val(),
                                systemId: $('#tableForm #systemId-form').val().join(","),
                                roleId: selections[0].roleId
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
                                    $.roleInfoOper.refreshData();
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
                    $("#roleName-form").val(selections[0].name);
                    $("#description-form").val(selections[0].description);
                    $('#state-form').select2({
                        placeholder: '请选择状态',
                        allowClear: true,
                        width: "100%",
                        data: $.roleInfoMgr.state,
                        minimumResultsForSearch: -1,
                        multiple: false
                    });
                    $("#state-form").val(selections[0].state).trigger("change");
                    $.ajax({
                        url: basePath + 'roleInfo/getSystem.do',
                        type: 'GET',
                        cache: false,
                        data: {
                            systemId: selections[0].systemId
                        },
                        async: true,
                        dataType: 'json',
                        beforeSend: function () {
                            MaskLoading.fullScreenShow("正在获取数据,请稍后...");
                        },
                        success: function (data) {
                            MaskLoading.fullScreenHide();
                            let systemIdDatas = [];
                            let systemIdSel = (selections[0].systemId).split(",");
                            for (let i = 0; i < data.length; i++) {
                                systemIdDatas.push({id: data[i].id, text: data[i].label});
                            }
                            $('#systemId-form').select2({
                                placeholder: '请选择所属应用',
                                allowClear: false,
                                width: "100%",
                                data: systemIdDatas,
                                minimumResultsForSearch: -1,
                                multiple: true,
                                ajax: {
                                    url: basePath + "roleInfo/getSystem.do", // 异步请求地址
                                    dataType: "json", // 数据类型
                                    type: "GET",
                                    processResults: function (data) {
                                        let dataOrder = $.map(data, function (obj) {
                                            obj.id = obj.id;
                                            obj.text = obj.label;
                                            return obj;
                                        });
                                        return {
                                            results: dataOrder
                                        };
                                    }
                                }
                            });
                            $("#systemId-form").val(systemIdSel).trigger("change");
                        },
                        error: function (data) {
                            MaskLoading.fullScreenHide();
                        }
                    });

                    $("#tableForm").bootstrapValidator($.roleInfoOper.validOptions);
                }
            });
        },
        delRoleInfo: function () {
            var selections = $('#roleTable').bootstrapTable('getSelections');
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
                url: basePath + 'publicRes/getRoleResource.do',
                type: 'GET',
                cache: false,
                data: {
                    roleId: selections[0].roleId
                },
                async: true,
                dataType: 'json',
                beforeSend: function () {
                    MaskLoading.fullScreenShow("正在验证,请稍后...");
                },
                success: function (data) {
                    if (data.length > 0) {
                        noty({
                            text: "该角色下已绑定有其他资源信息,不可删除!",
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
                            title: '删除角色',
                            message: '确定要进行删除操作吗?',
                            callback: function (result) {
                                if (result) {
                                    $.ajax({
                                        url: basePath + 'roleInfo/delRoleInfo.do',
                                        type: 'POST',
                                        data: {roleId: selections[0].roleId},
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
                                                $.roleInfoOper.refreshData();
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
                    }
                    MaskLoading.fullScreenHide();
                },
                error: function (data) {
                    MaskLoading.fullScreenHide();
                }
            });
        },
        getMenuTree: function () {
            let $tableDataDiv = $('<div class="col-md-12 col-sm-12 col-xs-12 left-sidebar"  id="leftTree"></div>');
            let $tableInfo = $('<nav class="main-nav"></nav>');
            $tableInfo.append('<ul id="tree" class="ztree" style="width:100%; overflow:auto;"></ul>');
            $tableDataDiv.append($tableInfo);
            return $tableDataDiv;
        },
        roleToMenu: function () {
            let selections = $('#roleTable').bootstrapTable('getSelections');
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
                type: BootstrapDialog.TYPE_INFO,
                title: "菜单角色赋权",
                message: $.roleInfoOper.getMenuTree,
                buttons: [{
                    label: '提交',
                    id: 'roleMenuCommitBtn',
                    action: function (dialogRef) {
                        var checkNode = [];
                        var treeObj = $.fn.zTree.getZTreeObj("tree");
                        var nodeC = treeObj.getCheckedNodes(true);
                        for (var i = 0; i < nodeC.length; i++) {
                            var chkValue = [];
                            if ($('input[name="chb_' + nodeC[i].id + '"]')) {
                                $('input[name="chb_' + nodeC[i].id + '"]:checked').each(function () {
                                    chkValue.push($(this).val());
                                });
                            }
                            checkNode.push({
                                id: nodeC[i].id,
                                btn: chkValue
                            });
                        }
                        var parmObj = {
                            checkNode: checkNode,
                            roleId: selections[0].roleId
                        };
                        var paramString = JSON.stringify(parmObj);
                        $.ajax({
                            url: basePath + 'menu/saveRoleTreeData.do',
                            type: 'POST',
                            data: {
                                param: paramString
                            },
                            async: true,
                            dataType: 'json',
                            beforeSend: function () {
                                MaskLoading.fullScreenShow("正在提交,请稍后...");
                                $("#roleMenuCommitBtn").button('loading');
                            },
                            success: function (data) {
                                $("#roleMenuCommitBtn").button('reset');
                                console.log(JSON.stringify(data));
                                if (data.success) {
                                    noty({
                                        text: "保存数据成功",
                                        layout: "center",
                                        type: "success",
                                        timeout: 1000,
                                        theme: 'bootstrapTheme'
                                    });
                                    MaskLoading.fullScreenHide();
                                    dialogRef.close();
                                    $.roleInfoOper.refreshData();
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
                    action: function (dialogItself) {
                        dialogItself.close();
                    }
                }],
                onshown: function () {
                    $("#roleMenuCommitBtn").attr("data-loading-text", "提交中...");
                    $(".modal-body").css('height', $(window).height() - 320);
                    var setting = {
                        check: {
                            enable: true,
                            autoCheckTrigger: true,
                            chkStyle: "checkbox",
                            chkboxType: {"Y": "ps", "N": "s"}
                        },
                        async: {
                            enable: true,
                            url: basePath + "menu/getRoleMenuTree.do?roleId=" + selections[0].roleId + "&systemId=" + selections[0].systemId,
                            autoParam: ["id=id", "level=level"]
                        },
                        data: {
                            key: {
                                name: "name"
                            },
                            simpleData: {
                                enable: true,
                                idKey: "id",
                                pIdKey: "pid",
                                rootPId: -2
                            }
                        },
                        callback: {},
                        view: {
                            addDiyDom: $.roleInfoOper.addDiyDom
                        }
                    };
                    var t = $("#tree");
                    t = $.fn.zTree.init(t, setting);
                    var treeObj = $.fn.zTree.getZTreeObj("tree");
                    treeObj.expandAll(true);
                    $("#tree").css('height', $(window).height() - 340);
                }

            });
        },
        refreshData: function () {
            $('#roleTable').bootstrapTable('refresh');
            $('#roleTable').bootstrapTable('resetView');
        },
        addDiyDom: function (treeId, treeNode) {
            if (treeNode.isParent) {
                return;
            } else {
                var aObj = $("#" + treeNode.tId + "_a");
                if (treeNode.btns) {
                    var editStr = "";
                    for (var j = 0; j < (treeNode.btns).length; j++) {
                        if ((treeNode.btns)[j].checkFlag) {
                            editStr += "&nbsp;&nbsp;&nbsp;&nbsp;<input type='checkbox' value='" + (treeNode.btns)[j].btnId + "' name='chb_" + treeNode.id + "' class='check' checked>" + (treeNode.btns)[j].btnName;
                        } else {
                            editStr += "&nbsp;&nbsp;&nbsp;&nbsp;<input type='checkbox' value='" + (treeNode.btns)[j].btnId + "' name='chb_" + treeNode.id + "' class='check'>" + (treeNode.btns)[j].btnName;
                        }
                    }
                    aObj.after(editStr);
                }
            }
        }
    };
    $(function () {
        $.roleInfoMgr.initButton();
        $.roleInfoMgr.initTable();
    })
})(jQuery);