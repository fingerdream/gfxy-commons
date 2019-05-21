package com.gfxy.common.controller;

import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.RequestMapping;

import javax.servlet.http.HttpServletRequest;

/**
 * @author: lijixin 2019-05-12
 */
@Controller
@RequestMapping("/staff")
public class StaffController {
    private static Logger logger = LoggerFactory.getLogger(StaffController.class);

    @RequestMapping("/index.action")
    public String handleRequest(HttpServletRequest request){
        return "base/system/staff";
    }
}
