package com.gfxy.performance.controller;

import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.RequestMapping;

/**
 * @author: lijixin 2019-05-09
 */
@Controller
@RequestMapping("/performance")
public class PerformanceController {

    @RequestMapping("teachingQuantity")
    public String teachingQuantity(){
        return "";
    }

    public String teachingQuality(){
        return "";
    }
}
