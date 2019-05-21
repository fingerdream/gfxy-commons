package com.gfxy.commons.utils;

import java.util.UUID;

/**
 * @author: lijixin 2019-05-11
 */
public class UUIDUtil {
    /**
     * 随机生成uuid
     *
     * @return
     */
    public static String getUUID() {
        return UUID.randomUUID().toString().replace("-", "");
    }
}
