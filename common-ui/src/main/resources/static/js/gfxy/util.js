/*
 * 功能：生成一个GUID码，其中GUID以14个以下的日期时间及18个以上的16进制随机数组成，
 * GUID存在一定的重复概率，但重复概率极低，理论上重复概率为每10ms有1/(16^18)，
 * 即16的18次方分之1，重复概率低至可忽略不计
 */
function GUID() {
    this.date = new Date();
    /* 判断是否初始化过，如果初始化过以下代码，则以下代码将不再执行，实际中只执行一次 */
    if (typeof this.newGUID != 'function') {

        /* 生成GUID码 */
        GUID.prototype.newGUID = function() {
            this.date = new Date();
            var guidStr = '';
            sexadecimalDate = this.hexadecimal(this.getGUIDDate(), 16);
            sexadecimalTime = this.hexadecimal(this.getGUIDTime(), 16);
            for (var i = 0; i < 9; i++) {
                guidStr += Math.floor(Math.random() * 16).toString(16);
            }
            guidStr += sexadecimalDate;
            guidStr += sexadecimalTime;
            while (guidStr.length < 32) {
                guidStr += Math.floor(Math.random() * 16).toString(16);
            }
            return this.formatGUID(guidStr);
        }

        /*
         * 功能：获取当前日期的GUID格式，即8位数的日期：19700101 返回值：返回GUID日期格式的字条串
         */
        GUID.prototype.getGUIDDate = function() {
            return this.date.getFullYear()
                + this.addZero(this.date.getMonth() + 1)
                + this.addZero(this.date.getDay());
        }

        /*
         * 功能：获取当前时间的GUID格式，即8位数的时间，包括毫秒，毫秒为2位数：12300933 返回值：返回GUID日期格式的字条串
         */
        GUID.prototype.getGUIDTime = function() {
            return this.addZero(this.date.getHours())
                + this.addZero(this.date.getMinutes())
                + this.addZero(this.date.getSeconds())
                + this.addZero(parseInt(this.date.getMilliseconds() / 10));
        }

        /*
         * 功能: 为一位数的正整数前面添加0，如果是可以转成非NaN数字的字符串也可以实现 参数:
         * 参数表示准备再前面添加0的数字或可以转换成数字的字符串 返回值: 如果符合条件，返回添加0后的字条串类型，否则返回自身的字符串
         */
        GUID.prototype.addZero = function(num) {
            if (Number(num).toString() != 'NaN' && num >= 0 && num < 10) {
                return '0' + Math.floor(num);
            } else {
                return num.toString();
            }
        }

        /*
         * 功能：将y进制的数值，转换为x进制的数值
         * 参数：第1个参数表示欲转换的数值；第2个参数表示欲转换的进制；第3个参数可选，表示当前的进制数，如不写则为10 返回值：返回转换后的字符串
         */
        GUID.prototype.hexadecimal = function(num, x, y) {
            if (y != undefined) {
                return parseInt(num.toString(), y).toString(x);
            } else {
                return parseInt(num.toString()).toString(x);
            }
        }

        /*
         * 功能：格式化32位的字符串为GUID模式的字符串 参数：第1个参数表示32位的字符串 返回值：标准GUID格式的字符串
         */
        GUID.prototype.formatGUID = function(guidStr) {
            var str1 = guidStr.slice(0, 8) + '-', str2 = guidStr.slice(8, 12)
                + '-', str3 = guidStr.slice(12, 16) + '-', str4 = guidStr
                    .slice(16, 20)
                + '-', str5 = guidStr.slice(20);
            return str1 + str2 + str3 + str4 + str5;
        }
    }
}

Date.prototype.format = function(format) {
    var o = {
        "M+": this.getMonth() + 1,
        // month
        "d+": this.getDate(),
        // day
        "h+": this.getHours(),
        // hour
        "m+": this.getMinutes(),
        // minute
        "s+": this.getSeconds(),
        // second
        "q+": Math.floor((this.getMonth() + 3) / 3),
        // quarter
        "S": this.getMilliseconds()
        // millisecond
    };
    if (/(y+)/.test(format) || /(Y+)/.test(format)) {
        format = format.replace(RegExp.$1, (this.getFullYear() + "").substr(4 - RegExp.$1.length));
    }
    for (var k in o) {
        if (new RegExp("(" + k + ")").test(format)) {
            format = format.replace(RegExp.$1, RegExp.$1.length == 1 ? o[k] : ("00" + o[k]).substr(("" + o[k]).length));
        }
    }
    return format;
};

/**
 * @description: 获取时间当前的时间差，入参格式（2018-05-17 16:58:00）
 * @date: 2018/7/12 11:42
 */
Date.prototype.orderFinishTime = function(timesData) {
//如果时间格式是正确的，那下面这一步转化时间格式就可以不用了
    var dateBegin = new Date(timesData.replace(/-/g, "/"));//将-转化为/，使用new Date
    var dateEnd = new Date();//获取当前时间
    var dateDiff = dateEnd.getTime() - dateBegin.getTime();//时间差的毫秒数
    var dayDiff = Math.floor(dateDiff / (24 * 3600 * 1000));//计算出相差天数
    var leave1 = dateDiff % (24 * 3600 * 1000);    //计算天数后剩余的毫秒数
    var hours = Math.floor(leave1 / (3600 * 1000));//计算出小时数
    //计算相差分钟数
    var leave2 = leave1 % (3600 * 1000);    //计算小时数后剩余的毫秒数
    var minutes = Math.floor(leave2 / (60 * 1000));//计算相差分钟数
    //计算相差秒数
    var leave3 = leave2 % (60 * 1000);      //计算分钟数后剩余的毫秒数
    var seconds = Math.round(leave3 / 1000);
    var timesString = '';

    if (dayDiff != 0) {
        if(dayDiff>0){
            timesString = '已超时'+dayDiff + '天';
        }else{
            timesString = '还有'+Math.abs(dayDiff) + '天';
        }
    } else if (dayDiff == 0 && hours != 0) {
        if(hours>0){
            timesString = '已超时'+hours + '小时';
        }else{
            timesString = '还有'+Math.abs(hours) + '小时';
        }
    } else if (dayDiff == 0 && hours == 0) {
        if(minutes>0){
            timesString = '已超时'+minutes + '分钟';
        }else{
            timesString = '还有'+Math.abs(minutes) + '分钟';
        }
    }
    return timesString;
};

/**
 * @description: 获取时间指定的时间差，入参格式（2018-05-17 16:58:00,2018-05-17 16:58:00）
 * @date: 2018/7/13 8:42
 */
Date.prototype.orderEndTime = function(timesData,endTimeData) {
//如果时间格式是正确的，那下面这一步转化时间格式就可以不用了
    var dateBegin = new Date(timesData.replace(/-/g, "/"));//将-转化为/，使用new Date
    var dateEnd = new Date(endTimeData.replace(/-/g, "/"));//获取结束时间
    var dateDiff = dateEnd.getTime() - dateBegin.getTime();//时间差的毫秒数
    var dayDiff = Math.floor(dateDiff / (24 * 3600 * 1000));//计算出相差天数
    var leave1 = dateDiff % (24 * 3600 * 1000);    //计算天数后剩余的毫秒数
    var hours = Math.floor(leave1 / (3600 * 1000));//计算出小时数
    //计算相差分钟数
    var leave2 = leave1 % (3600 * 1000);    //计算小时数后剩余的毫秒数
    var minutes = Math.floor(leave2 / (60 * 1000));//计算相差分钟数
    //计算相差秒数
    var leave3 = leave2 % (60 * 1000);      //计算分钟数后剩余的毫秒数
    var seconds = Math.round(leave3 / 1000);
    var timesString = '';

    if (dayDiff != 0) {
        if(dayDiff>0){
            timesString = '超时'+dayDiff + '天完成';
        }else{
            timesString = '提前'+Math.abs(dayDiff) + '天完成';
        }
    } else if (dayDiff == 0 && hours != 0) {
        if(hours>0){
            timesString = '超时'+hours + '小时完成';
        }else{
            timesString = '提前'+Math.abs(hours) + '小时完成';
        }
    } else if (dayDiff == 0 && hours == 0) {
        if(minutes>0){
            timesString = '超时'+minutes + '分钟完成';
        }else{
            timesString = '提前'+Math.abs(minutes) + '分钟完成';
        }
    }
    return timesString;
};

function getCronWeek(cronNum) {
    if(cronNum==="1"){
        return "日";
    }
    if(cronNum==="2"){
        return "一";
    }
    if(cronNum==="3"){
        return "二";
    }
    if(cronNum==="4"){
        return "三";
    }
    if(cronNum==="5"){
        return "四";
    }
    if(cronNum==="6"){
        return "五";
    }
    if(cronNum==="7"){
        return "六";
    }
}

function sumList(key,rows){
    var cnt = 0;
    $.each(rows, function(index, value) {
        if (value[key]) {
            cnt += parseInt(value[key]);
        }
    });
    return cnt;
}
/** 将字符串进行换行，用于bootstarap-table 在formatter 方法里 */
function breakText(_length,value){
    if(value==null){
        return value;
    }
    if (value.length <= _length) {
        return value;
    }
    var fval = [];
    for (var i = 0; i * _length < value.length; i++) {
        var end = ((i + 1) * _length < value.length) ? (i + 1) * _length : value.length;
        fval.push(value.substring(i * _length, end));
        if ((i + 1) * _length < value.length) {
            fval.push('<br>');
        }
    }
    return fval.join('');
}

function downloadFile(url,ifranmeId){
    try {
        var elemIF;
        if(ifranmeId==null){
            elemIF = document.createElement("iframe");
        }else{
            elemIF = document.getElementById(ifranmeId);
            if (elemIF == null) {
                elemIF = document.createElement("iframe");
                elemIF.id = ifranmeId;
            }
        }
        elemIF.src = url;
        elemIF.style.display = "none";
        document.body.appendChild(elemIF);
    } catch (e) {
        alert('下载文件异常！');
    }
}

/** 将字符串进行换行，用于bootstarap-table 在formatter 方法里 */
function breakText(_length,value){
    if(value==null){
        return value;
    }
    if (value.length <= _length) {
        return value;
    }
    var fval = [];
    for (var i = 0; i * _length < value.length; i++) {
        var end = ((i + 1) * _length < value.length) ? (i + 1) * _length : value.length;
        fval.push(value.substring(i * _length, end));
        if ((i + 1) * _length < value.length) {
            fval.push('<br>');
        }
    }
    return fval.join('');    
}

function downloadFile(url,ifranmeId){    
    try {
        var elemIF;
        if(ifranmeId==null){
            elemIF = document.createElement("iframe");
        }else{
            elemIF = document.getElementById(ifranmeId);
            if (elemIF == null) {
                elemIF = document.createElement("iframe");
                elemIF.id = ifranmeId;
            }
        }        
        elemIF.src = url;
        elemIF.style.display = "none";
        document.body.appendChild(elemIF);
    } catch (e) {
        alert('下载文件异常！');
    }
}

