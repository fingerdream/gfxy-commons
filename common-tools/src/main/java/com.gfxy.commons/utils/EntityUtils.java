package com.gfxy.commons.utils;

import org.slf4j.Logger;
import org.slf4j.LoggerFactory;

import java.lang.reflect.Constructor;
import java.lang.reflect.Field;
import java.lang.reflect.InvocationTargetException;
import java.lang.reflect.Method;
import java.util.*;

/**
 * @author: lijixin 2019-05-17
 */
public class EntityUtils {
    private static Logger logger = LoggerFactory.getLogger(EntityUtils.class);


        /**
         * 数组集合转化为指定对象集合
         * 指定的实体对象必须包含所以字段的构造方法，数组的元素的顺序将和构造方法顺序和类型一一对应
         *
         * @param list  集合
         * @param clazz c
         * @param <T>   类型
         * @return List<T>
         */
        public static <T> List<T> castEntity(List<Object[]> list, Class<T> clazz) {
            List<T> returnList = new ArrayList<>();
            if (list.size() == 0) {
                return returnList;
            }
            Class[] c2 = null;
            Constructor[] constructors = clazz.getConstructors();
            for (Constructor constructor : constructors) {
                Class[] tClass = constructor.getParameterTypes();
                if (tClass.length == list.get(0).length) {
                    c2 = tClass;
                    break;
                }
            }
            //构造方法实例化对象
            for (Object[] o : list) {
                Constructor<T> constructor = null;
                try {
                    constructor = clazz.getConstructor(c2);
                } catch (NoSuchMethodException e) {
                    e.printStackTrace();
                }
                try {
                    assert constructor != null;
                    System.out.println(Arrays.toString(o));
                    returnList.add(constructor.newInstance(o));
                } catch (InstantiationException | IllegalAccessException | InvocationTargetException e) {
                    e.printStackTrace();
                }
            }

            return returnList;
        }

}
