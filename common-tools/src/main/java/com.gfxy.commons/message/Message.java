package com.gfxy.commons.message;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.databind.JavaType;
import com.gfxy.commons.utils.JacksonUtil;

/**
 * @author: lijixin 2019-04-23
 */
public class Message<T> {

    @JsonProperty("success")
    private boolean success;

    @JsonProperty("message")
    private T message;

    public Message(boolean success, T message) {
        this.success = success;
        this.message = message;
    }

    public boolean isSuccess() {
        return success;
    }

    public void setSuccess(boolean success) {
        this.success = success;
    }

    public T getMessage() {
        return message;
    }

    public void setMessage(T message) {
        this.message = message;
    }
}
