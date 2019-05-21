package com.gfxy.common.login;

/**
 * @author: lijixin 2019-04-30
 */
public class LoginMessage {
    private int flag;
    private String message;

    public LoginMessage() {

    }

    public LoginMessage(int flag, String message) {
        this.flag = flag;
        this.message = message;
    }

    public int getFlag() {
        return flag;
    }

    public void setFlag(int flag) {
        this.flag = flag;
    }

    public String getMessage() {
        return message;
    }

    public void setMessage(String message) {
        this.message = message;
    }
}
