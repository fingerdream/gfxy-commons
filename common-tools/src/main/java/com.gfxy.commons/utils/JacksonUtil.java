package com.gfxy.commons.utils;

import java.io.IOException;
import java.io.InputStream;

import org.slf4j.Logger;
import org.slf4j.LoggerFactory;

import com.fasterxml.jackson.annotation.JsonInclude.Include;
import com.fasterxml.jackson.core.JsonParser;
import com.fasterxml.jackson.core.JsonProcessingException;
import com.fasterxml.jackson.databind.DeserializationFeature;
import com.fasterxml.jackson.databind.JavaType;
import com.fasterxml.jackson.databind.ObjectMapper;


/**
 * @author: lijixin 2019-04-23
 */
public class JacksonUtil {
    private static final Logger logger = LoggerFactory.getLogger(JacksonUtil.class);

    public static final ObjectMapper mapper = new ObjectMapper();

    public static <T> T jsonToBean(String input, JavaType clazz) {
        ObjectMapper mapper = new ObjectMapper();
        mapper.configure(JsonParser.Feature.AUTO_CLOSE_SOURCE,false);
        mapper.configure(DeserializationFeature.FAIL_ON_UNKNOWN_PROPERTIES, false);
        mapper.setSerializationInclusion(Include.NON_NULL);
        try {
            T result = mapper.readValue(input, clazz);
            return result;
        } catch (IOException e) {
            if (logger.isErrorEnabled()) {
                logger.error("", e);
            }
            throw new RuntimeException(e);
        }

    }

    public static <T> T jsonToBean(InputStream inputStream, JavaType javaType) {
        ObjectMapper mapper = new ObjectMapper();
        mapper.configure(JsonParser.Feature.AUTO_CLOSE_SOURCE,false);
        mapper.configure(DeserializationFeature.FAIL_ON_UNKNOWN_PROPERTIES, false);
        mapper.setSerializationInclusion(Include.NON_NULL);
        try {
            T result = mapper.readValue(inputStream, javaType);
            return result;
        } catch (IOException e) {
            if (logger.isErrorEnabled()) {
                logger.error("", e);
            }
            throw new RuntimeException(e);
        }

    }

    public static <T> T jsonToBean(InputStream inputStream, Class<T> clazz){
        ObjectMapper mapper = new ObjectMapper();
        mapper.configure(JsonParser.Feature.AUTO_CLOSE_SOURCE,false);
        mapper.configure(DeserializationFeature.FAIL_ON_UNKNOWN_PROPERTIES, false);
        mapper.setSerializationInclusion(Include.NON_NULL);
        try {
            T result = mapper.readValue(inputStream, clazz);
            return result;
        } catch (IOException e) {
            if (logger.isErrorEnabled()) {
                logger.error("", e);
            }
            throw new RuntimeException(e);
        }
    }

    public static <T> T jsonToBean(String input, Class<T> clazz) {
        ObjectMapper mapper = new ObjectMapper();
        mapper.configure(JsonParser.Feature.AUTO_CLOSE_SOURCE,false);
        mapper.configure(DeserializationFeature.FAIL_ON_UNKNOWN_PROPERTIES, false);
        mapper.setSerializationInclusion(Include.NON_NULL);
        try {
            T result = mapper.readValue(input, clazz);
            return result;
        } catch (IOException e) {
            if (logger.isErrorEnabled()) {
                logger.error("", e);
            }
            throw new RuntimeException(e);
        }

    }

    public static <T> String beanToJson(T t) {
        ObjectMapper mapper = new ObjectMapper();
        mapper.configure(JsonParser.Feature.AUTO_CLOSE_SOURCE,false);
        mapper.configure(DeserializationFeature.FAIL_ON_UNKNOWN_PROPERTIES, false);
        mapper.setSerializationInclusion(Include.NON_NULL);
        try {
            String value = mapper.writeValueAsString(t);
            return value;
        } catch (JsonProcessingException e) {
            if (logger.isErrorEnabled()) {
                logger.error("", e);

            }
            e.printStackTrace();
            throw new RuntimeException(e);
        }
    }

    public static JavaType getCollectionType(Class<?> collectionClass, Class<?>... elementClasses) {
        return mapper.getTypeFactory().constructParametricType(collectionClass, elementClasses);
    }

}
