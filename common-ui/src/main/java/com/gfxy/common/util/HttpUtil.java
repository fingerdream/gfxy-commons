package com.gfxy.common.util;

import org.slf4j.Logger;
import org.slf4j.LoggerFactory;

import javax.servlet.http.Cookie;
import javax.servlet.http.HttpServletResponse;

public class HttpUtil {
    private static Logger logger = LoggerFactory.getLogger(HttpUtil.class);

    /**
     * <p>Method: clearCookie </p>
     * <p>Description: 清空cookie</p>
     * <p>date: 2018/10/18 14:24 </p>
     * @author zhuyu[zhuyu@boco.com.cn]
     */
    public static void clearCookie(Cookie[] cookies,HttpServletResponse response){
        if(cookies!=null&&cookies.length>0) {
            for (Cookie cookie : cookies) {
                if("encryptToken".equals(cookie.getName())) {
                    cookie.setMaxAge(0);
                    response.addCookie(cookie);
                    break;
                }
            }
        }
    }
}
