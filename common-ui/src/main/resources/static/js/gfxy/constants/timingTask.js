/**
 * Created by lijixin on 2019/2/26.
 * 用来定义定时任务中用到的常量数据
 */

var TimingTask = function () {
};

//执行周期
TimingTask.prototype.EXECYCLE = [{
    id: '0',
    text: '只一次'
}, {
    id: '1',
    text: '每年'
}, {
    id: '3',
    text: '每月'
}, {
    id: '4',
    text: '每周'
}, {
    id: '5',
    text: '每日'
}, {
    id: '6',
    text: '每小时'
}, {
    id: '7',
    text: '每隔*分钟'
}];
//设定月
TimingTask.prototype.CYCLEMONTH = [{
    id: '1',
    text: '1月'
}, {
    id: '2',
    text: '2月'
}, {
    id: '3',
    text: '3月'
}, {
    id: '4',
    text: '4月'
}, {
    id: '5',
    text: '5月'
}, {
    id: '6',
    text: '6月'
}, {
    id: '7',
    text: '7月'
}, {
    id: '8',
    text: '8月'
}, {
    id: '9',
    text: '9月'
}, {
    id: '10',
    text: '10月'
}, {
    id: '11',
    text: '11月'
}, {
    id: '12',
    text: '12月'
}];
//设定周
TimingTask.prototype.CYCLEWEEK = [{
    id: '1',
    text: '周一'
}, {
    id: '2',
    text: '周二'
}, {
    id: '3',
    text: '周三'
}, {
    id: '4',
    text: '周四'
}, {
    id: '5',
    text: '周五'
}, {
    id: '6',
    text: '周六'
}, {
    id: '7',
    text: '周日'
}];
//设定天
TimingTask.prototype.CYCLEDAY = [{
    id: '0',
    text: '每月最后一天'
}, {
    id: '1',
    text: '1号'
}, {
    id: '2',
    text: '2号'
}, {
    id: '3',
    text: '3号'
}, {
    id: '4',
    text: '4号'
}, {
    id: '5',
    text: '5号'
}, {
    id: '6',
    text: '6号'
}, {
    id: '7',
    text: '7号'
}, {
    id: '8',
    text: '8号'
}, {
    id: '9',
    text: '9号'
}, {
    id: '10',
    text: '10号'
}, {
    id: '11',
    text: '11号'
}, {
    id: '12',
    text: '12号'
}, {
    id: '13',
    text: '13号'
}, {
    id: '14',
    text: '14号'
}, {
    id: '15',
    text: '15号'
}, {
    id: '16',
    text: '16号'
}, {
    id: '17',
    text: '17号'
}, {
    id: '18',
    text: '18号'
}, {
    id: '19',
    text: '19号'
}, {
    id: '20',
    text: '20号'
}, {
    id: '21',
    text: '21号'
}, {
    id: '22',
    text: '22号'
}, {
    id: '23',
    text: '23号'
}, {
    id: '24',
    text: '24号'
}, {
    id: '25',
    text: '25号'
}, {
    id: '26',
    text: '26号'
}, {
    id: '27',
    text: '27号'
}, {
    id: '28',
    text: '28号'
}, {
    id: '29',
    text: '29号'
}, {
    id: '30',
    text: '30号'
}, {
    id: '31',
    text: '31号'
}];

//获取执行周期
TimingTask.prototype.getExeCycleText = function (id) {
    const exeCycle = TimingTask.prototype.EXECYCLE;
    for (let v of exeCycle) {
        if (v.id == id) {
            return v.text;
        }
    }
};
//获取设定月
TimingTask.prototype.getCycleMonthText = function (id) {
    const cycleMonth = TimingTask.prototype.CYCLEMONTH;
    for (let v of cycleMonth) {
        if (v.id == id) {
            return v.text;
        }
    }
};
//获取设定周
TimingTask.prototype.getCycleWeekText = function (id) {
    const cycleWeek = TimingTask.prototype.CYCLEWEEK;
    for (let v of cycleWeek) {
        if (v.id == id) {
            return v.text;
        }
    }
};
//获取设定天
TimingTask.prototype.getCycleDayText = function (id) {
    const cycleDay = TimingTask.prototype.CYCLEDAY;
    for (let v of cycleDay) {
        if (v.id == id) {
            return v.text;
        }
    }
};