package com.gfxy.performance.controller.teacher;

import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.RequestMapping;

/**
 * 教学数量
 * @author: lijixin 2019-05-09
 */
@Controller
@RequestMapping("performance/teaching")
public class TeachingQuantityController {

    @RequestMapping("quantity")
    public String getTeachingQuantity(){
        return "";
    }
}
