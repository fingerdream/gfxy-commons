package com.gfxy.common.login;

import org.springframework.stereotype.Component;
import org.springframework.web.servlet.HandlerInterceptor;
import org.springframework.web.servlet.ModelAndView;

import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;
import javax.servlet.http.HttpSession;

@Component
public class LoginInterceptor implements HandlerInterceptor {

    //在业务处理器处理请求之前被调用。预处理，可以进行编码、安全控制、权限校验等处理
    @Override
    public boolean preHandle(HttpServletRequest request, HttpServletResponse response, Object handler)
            throws Exception {
        //获取当前的session
        HttpSession session = request.getSession();
        //从session中寻求cur_user变量
        Object obj = session.getAttribute("userName");
        //判断是否存在用户变量
        //不存在则跳转到登录界面
        if (obj == null) {
            response.sendRedirect(request.getContextPath() + "/login");
            return false;// 必须返回false，不然业务会被执行，存在漏洞
        } else {
            //存在则再次注入session
            session.setAttribute("userName", obj.toString());
        }
        return true;// 只有返回true才会继续向下执行，返回false取消当前请求
    }

    //在业务处理器处理请求执行完成后，生成视图之前执行。后处理（调用了Service并返回ModelAndView，但未进行页面渲染），有机会修改ModelAndView （这个博主就基本不怎么用了）
    @Override
    public void postHandle(HttpServletRequest request, HttpServletResponse response, Object handler,
                           ModelAndView modelAndView) throws Exception {
        request.setAttribute("_js_version", System.currentTimeMillis());
    }

    //在DispatcherServlet完全处理完请求后被调用，可用于清理资源等。返回处理（已经渲染了页面）
    @Override
    public void afterCompletion(HttpServletRequest request, HttpServletResponse response, Object handler, Exception ex)
            throws Exception {

    }
}
