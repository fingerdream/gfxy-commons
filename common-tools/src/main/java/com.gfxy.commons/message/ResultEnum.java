package com.gfxy.commons.message;

import com.fasterxml.jackson.annotation.JsonCreator;
import com.fasterxml.jackson.annotation.JsonValue;

/**
 * @author: lijixin 2019-04-23
 */
public enum ResultEnum {

    //调用成功
    SUCCESS(1,"成功"),
    //调用失败
    FAILURE(0,"失败");

    private int key;
    private String value;

    ResultEnum(int key, String value) {
        this.key = key;
        this.value = value;
    }

    @JsonCreator
    public static ResultEnum getResultEnumByKey(int key){
        ResultEnum result = null;

        for(ResultEnum resultEnum : ResultEnum.values()){
            if(resultEnum.key == key){
                result = resultEnum;
                break;
            }
        }
        if(result != null){
            return result;
        } else {
            throw new IllegalArgumentException("枚举值不存在对应的key[" + key + "]");
        }
    }

    @JsonValue
    public int getKey() {
        return key;
    }

    public String getValue() {
        return value;
    }

}
