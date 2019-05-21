package com.gfxy.performance.controller;

import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.RequestMapping;

/**
 * @author: lijixin 2019-05-09
 */
@Controller
@RequestMapping("teaching")
public class TeachingController {
    @RequestMapping("quantity")
    public String teachingQuantity(){
        return "";
    }

    @RequestMapping("quality")
    public String teachingQuality(){
        return "";
    }

    @RequestMapping("construction")
    public String teachingConstruction(){
        return "";
    }

    @RequestMapping("advanced")
    public String teachingAdvanced(){
        return "";
    }

    @RequestMapping("punishment")
    public String teachingPunishment(){
        return "";
    }


}
