package com.gfxy.commons.message;



/**
 * @author: lijixin 2019-04-23
 */
public class MessageUtil {
    public static <T> Message getSuccessMsg(T t){
        return new Message(true,t);
    }

    public static Message getErrorMsg(Exception e){
        return new Message(false,e.getMessage());
    }

    public static Message getErrorMsg(String errorMsg){
        return new Message(false, errorMsg);
    }

}
