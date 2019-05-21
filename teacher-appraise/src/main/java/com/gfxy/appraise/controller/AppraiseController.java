package com.gfxy.appraise.controller;

import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.RequestMapping;

import javax.servlet.http.HttpServletRequest;

/**
 * @author: lijixin 2019-05-07
 */
@Controller
@RequestMapping("/appraise")
public class AppraiseController {

    @RequestMapping("")
    public String handleRequest(HttpServletRequest request){
        return "appraise/appraise";
    }

    
}
