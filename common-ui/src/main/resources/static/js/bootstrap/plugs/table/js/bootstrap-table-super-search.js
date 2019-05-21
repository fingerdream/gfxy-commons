/**
 * @Description 扩展bootstrap-table的高级查询
 * @Date 2017/9/15 17:35
 */

!function($) {
    'use strict';

    var sprintf = $.fn.bootstrapTable.utils.sprintf;

    $.extend($.fn.bootstrapTable.defaults, {
        superSearch: false,//是否开启高级查询选项
        superSearchForm: '',//高级查询的表单html
        searchPlaceholder:'搜索',
        /*
         高级查询的内容项定义
         {
         field:'id',//标识(传递到后台的key)
         label:'查询项',//显示的文字
         placeholder:'',//输入项上显示的文字
         type:'text/select/date/dateRange/',//类型(文本/下拉/日期/区间日期)
         selectorUrl:'',//下拉内容的远程获取地址(返回json数组 {id:'',text:''})
         dateFormat:'',//日期格式(当type为date时生效,yyyy-mm-dd hh:ii) 不支持选择秒
         selectorData:[]//下拉内容写死的数据{id:'',text:''}数组(data优先级高于url)
         selectorId:'id',//下拉框的id的key
         selectorText:'text',//下拉框的text的key
         selectorDepend:'',//级联下拉框(上级下拉框的key)
         selectorControl:'',//级联下拉框(下级下拉框的key，如果是多个需要逗号分开)
         allowSearch:false//是否允许查询
         }
         */
        superSearchItems:[],//高级查询的内容
        superSearchUrl: '',//高级查询提交到后台的url,如果为空则读取bootstrap-table配置的url
        superSearchAlign:'right',//高级查询的对齐方式
        showSuperInput:true
    });

    $.extend($.fn.bootstrapTable.defaults, $.fn.bootstrapTable.locales);
    var BootstrapTable = $.fn.bootstrapTable.Constructor,
        _initToolbar = BootstrapTable.prototype.initToolbar

    BootstrapTable.prototype.initToolbar = function() {
        _initToolbar.apply(this, Array.prototype.slice.apply(arguments));
        if (!this.options.superSearch) {
            return;
        }
        var that = this,
            html = [],
            timeoutId = 0,
            $search;
        var toolbarId = $(that.$toolbar).find('div[class="clearfix"]').attr("id");
        html.push(sprintf('<div class="columns columns-%s btn-group pull-%s" role="group">', this.options.superSearchAlign, this.options.superSearchAlign));
        html.push('<button class="btn btn-default dropdown-toggle" data-toggle="dropdown" type="button" name="superSearchBtn" aria-label="advanced search">');
        html.push('高级查询 <span class="caret"></span></button>');
        html.push('<ul class="dropdown-menu" id="'+toolbarId+'_superSearchMenu" role="menu" style="width:500px;padding:15px 15px;"><form id="'+toolbarId+'_menuForm" role="form" class="form-horizontal">');

        var $superSearchForm = $('<div></div>');
        var superSearchItems = this.options.superSearchItems;
        $.each(superSearchItems,function(index,value){
            if(value.type==='text') {
                $superSearchForm.append('<div class="form-group"><label for="' + value.field + '" class="col-md-4 col-sm-4 col-xs-4 control-label">' + value.label + '</label><div class="col-md-8 col-sm-8 col-xs-8 "><input type="text" id="' + value.field + '" class="form-control" name="' + value.field + '" placeholder="' + value.placeholder + '"/></div></div>');
            }else if(value.type==='date'){
                $superSearchForm.append('<div class="form-group"><label for="' + value.field+'" class="col-md-4 col-sm-4 col-xs-4 control-label" >'+value.label+'</label><div class="col-md-8 col-sm-8 col-xs-8 "><input class="form-control" type="text" id="'+value.field+'" name="'+value.field+'" placeholder="'+value.placeholder+'" readonly/></div></div>');
            }else if(value.type==='dateRange'){
                $superSearchForm.append('<div class="form-group"><label for="' + value.field+'" class="col-md-4 col-sm-4 col-xs-4 control-label" >'+ value.label +'</label><div class="col-md-8 col-sm-8 col-xs-8 "><input class="form-control" type="text" id="'+value.field+'" name="'+value.field+'" placeholder="'+value.placeholder+'" readonly/></div></div>');
            }else if(value.type==='select'){
                $superSearchForm.append('<div class="form-group"><label for="' + value.field+'" class="col-md-4 col-sm-4 col-xs-4 control-label" >'+ value.label +'</label><div class="col-md-8 col-sm-8 col-xs-8 "><select id="'+value.field+'"></select></div></div>');
            }else if(value.type==='combobox'){
                var _keyDataOption = "<option value=''></option>";
                for(var _i=0;_i<(value.selectorData).length;_i++){
                    _keyDataOption += '<option value="'+(value.selectorData)[_i].value+'">'+(value.selectorData)[_i].text+'</option>';
                }
                $superSearchForm.append('<div class="form-group"><label for="' + value.field+'" class="col-md-4 col-sm-4 col-xs-4 control-label" >'+ value.label +'</label><div class="col-md-8 col-sm-8 col-xs-8 "><select class="form-control form-select" id="'+value.field+'" name="'+value.field+'">'+_keyDataOption+'</select></div></div>');
            }
        });
        $superSearchForm.append('<div class="col-md-12 col-sm-12 col-xs-12"><div class="btn-group  pull-right">' +
            '<button type="button" name="_superReset" class="btn btn-primary">清空</button>' +
            '</div>' +
            '<div class="btn-group pull-right">' +
            '<button type="button" name="_superSearch" class="btn btn-primary">提交</button>' +
            '&nbsp;&nbsp;&nbsp;&nbsp;</div></div></form>');
        html.push($superSearchForm.html());
        html.push('</ul>');
        html.push('</div>');
        if(!superSearchItems||superSearchItems.length===0){
            html=[];
        }
        
        if(this.options.showSuperInput){
            html.push(
                '<div class="pull-' + this.options.superSearchAlign + ' simpleSearch">',
                sprintf('<div class="input-group" style="width:300px;margin-top: 10px">' +
                    '<input class="form-control" type="text" placeholder="%s">' +
                    '<span class="input-group-btn">' +
                    '<button class="btn btn-default" type="button" name="_simpleSearchText"><i class="fa fa-search"></i></button>' +
                    '</span>' +
                    '</div>',this.options.searchPlaceholder),
                '</div>');
        }else{
            html.push(
                '<div class="pull-' + this.options.superSearchAlign + ' simpleSearch">',
                '</div>');
        }
        that.$toolbar.prepend(html.join(''));

        $("#"+toolbarId+"_superSearchMenu").on("click",function(e){
            e.stopPropagation();
        });
        that.$toolbar.find('button[name="_superReset"]').off('click').on('click',function(){
            _clearMenuForm(that);
        });

        that.$toolbar.find('button[name="_superSearch"]').off('click').on('click',function(){
            _doSuperSearch(that);
        });

        that.$toolbar.find('button[name="_simpleSearchText"]').off('click').on('click',function(){
            _doSimpleSearch(that);
        });

        $.each(superSearchItems,function(index,value){
            if(value.type==='text') {

            }else if(value.type==='date'){
                var format = value.dateFormat.toLowerCase();
                var startView = 2;
                var minView = 0;
                if (format == "yyyy") {
                    startView = 4;
                    minView = 4;
                }
                if (format == "yyyy-mm") {
                    startView = 3;
                    minView = 3;
                }
                if (format == "yyyy-mm-dd") {
                    startView = 2;
                    minView = 2;
                }
                if (format == "yyyy-mm-dd hh") {
                    startView = 2;
                    minView = 1;
                }
                if (format == "yyyy-mm-dd hh:mi") {
                    format = "yyyy-mm-dd hh:ii";
                    startView = 2;
                    minView = 0;
                }
                if (format == "hh:mi") {
                    format = "hh:ii";
                    startView = 1;
                    minView = 0;
                }
                $('#'+value.field).datetimepicker({
                    language:'zh-CN',
                    todayHighlight:true,
                    autoclose:true,
                    clearBtn:true,
                    todayBtn:true,
                    format:format,
                    startView: startView,//首先显示的视图 0-从小时视图开始，选分|1-从天视图开始，选小时|2-从月视图开始，选天|3-从年视图开始，选月|4-从十年视图开始，选年
                    minView: minView//最精确的时间 0-从小时视图开始，选分|1-从天视图开始，选小时|2-从月视图开始，选天|3-从年视图开始，选月|4-从十年视图开始，选年
                });
            }else if(value.type==='dateRange'){

            }else if(value.type==='select'){
                if((value.selectorData).length==0){
                    if(value.selectorUrl==""){
                        $('#'+value.field).select2({
                            data:[],
                            placeholder:value.placeholder,
                            width:'100%',
                            minimumResultsForSearch:value.allowSearch?0:-1
                        });
                    }else{
                        $('#'+value.field).select2({
                            ajax: {
                                url: value.selectorUrl, // 异步请求地址
                                dataType: "json", // 数据类型
                                type: "GET",
                                cache: false,
                                delay : value.allowSearch?500:100,// 延迟显示
                                data: function (params) { // 请求参数（GET）
                                    if (value.selectorDepend) {
                                        var dependValue = $("#" + value.selectorDepend).val();
                                        if (dependValue) {
                                            var objDep = {};
                                            if((value.selectorUrl).indexOf("getSysDictList")>0){//如果是调用通用资源字典则传递parentCode
                                                objDep["parentCode"] = dependValue;
                                            }else{
                                                objDep[value.selectorDepend] = dependValue;
                                            }
                                            if(value.allowSearch){
                                                objDep.selectSearchText = params.term
                                            }
                                            return objDep;
                                        } else {
                                            if(value.allowSearch){
                                                return {
                                                    selectSearchText: params.term
                                                }
                                            }else{
                                                return {};
                                            }
                                        }
                                    }else{
                                        if(value.allowSearch){
                                            return {
                                                selectSearchText: params.term
                                            }
                                        }else{
                                            return {};
                                        }
                                    }
                                },
                                beforeSend: function () { //限制有级联关系的下拉框没有选上级的时候，下级内容为空
                                    if (value.selectorDepend) {
                                        var dependValue = $("#" + value.selectorDepend).val();
                                        if (!dependValue) {
                                            $('#'+value.field).val(null).trigger("change");
                                            return false;
                                        }
                                    }
                                },
                                processResults: function (data) {
                                    if(data instanceof Array){
                                        var dataOrder = $.map(data, function (obj) {
                                            obj.id =  obj[value.selectorId] || obj.id;
                                            obj.text =obj[value.selectorText] || obj.text ;
                                            return obj;
                                        });
                                        return {
                                            results: dataOrder
                                        };
                                    }else{
                                        var dataOrder = $.map(data.data, function (obj) {
                                            obj.id =  obj[value.selectorId] || obj.id;
                                            obj.text =obj[value.selectorText] || obj.text ;
                                            return obj;
                                        });
                                        return {
                                            results: dataOrder
                                        };
                                    }
                                }
                            },
                            placeholder:value.placeholder,
                            width:'100%',
                            minimumResultsForSearch:value.allowSearch?0:-1
                        });
                        if (value.selectorControl) {
                            $('#'+value.field).on("change", function (e) {
                                var controlElement = (value.selectorControl).split(",");
                                for (var i = 0; i < controlElement.length; i++) {
                                    $("#" + controlElement[i]).val(null).trigger("change");
                                }
                            });
                        }
                    }
                }else{
                    $('#'+value.field).select2({
                        data:value.selectorData,
                        placeholder:value.placeholder,
                        //dropdownParent: $(window.top.document).find(".pageDialog").eq(0),
                        width:'100%',
                        minimumResultsForSearch:-1
                    });
                }
                $('#'+value.field).val(null).trigger("change");
            }
        });

        $search = this.$toolbar.find('.simpleSearch input');
        $search.off('keyup drop blur').on('keyup drop blur', function (event) {
            if (that.options.searchOnEnterKey && event.keyCode !== 13) {
                return;
            }

            if ($.inArray(event.keyCode, [37, 38, 39, 40]) > -1) {
                return;
            }

            clearTimeout(timeoutId); // doesn't matter if it's 0
            timeoutId = setTimeout(function () {
                that.onSearch(event);
            }, that.options.searchTimeOut);
        });
        that.options.searchOnEnterKey = true;
    };
    /**
     * @Description 清空高级查询表单内容
     * @Date 2017/9/16 12:43
     */
    var _clearMenuForm = function(tableObj){
        var superSearchItems = tableObj.options.superSearchItems;
        $.each(superSearchItems,function (index,value) {
            if(value.type==='text') {
                $('#'+value.field).val("");
            }else if(value.type==='date'){
                $('#'+value.field).val("");
            }else if(value.type==='dateRange'){
                $('#'+value.field).val("");
            }else if(value.type==='select'){
                $('#'+value.field).val(null).trigger("change");
            }
        });
    };

    /**
     * @Description 执行查询传递高级查询表单项
     * @Date 2017/9/16 23:23
     */
    var _doSuperSearch = function (tableObj) {
        // var superSearchItems = tableObj.options.superSearchItems;
        var param = {};
        // var superSearchParam = {};
        // var allSuperSearchParam = {};
        // $.each(superSearchItems,function (index,value) {
        //     superSearchParam[value.field] = $('#'+value.field).val();
        //     if($('#'+value.field).val()){
        //         allSuperSearchParam[(value.field).substring(5,(value.field).length)] = $('#'+value.field).val();
        //     }
        // });
        // if(tableObj.options.superSearchUrl!=''){
        //     param.url = tableObj.options.superSearchUrl;
        // }
        // if(!$.isEmptyObject(superSearchParam)){
        //     superSearchParam.superSearchParams = JSON.stringify(allSuperSearchParam);
        //     param.query = superSearchParam;
        // }
        if(tableObj.options.showSuperInput){
            param.query = {
                searchText:$(".simpleSearch .input-group .form-control").val()
            };
        }
        tableObj.refresh(param);
    };

    /**
     * @Description 点击查询小按钮时触发的查询(实际模拟触发回车事件)
     * @Date 2017/9/17 0:03
     */
    var _doSimpleSearch = function (tableObj) {
        var e = $.Event('keyup');
        e.keyCode =13;
        tableObj.$toolbar.find('.simpleSearch input').trigger(e);
    };

}(jQuery);


