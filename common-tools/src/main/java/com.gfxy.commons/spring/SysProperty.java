package com.gfxy.commons.spring;

import java.io.File;
import java.io.IOException;
import java.util.Map;
import java.util.Properties;

import com.gfxy.commons.crypto.DESCoder;
import org.apache.commons.lang3.StringUtils;
import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.beans.BeansException;
import org.springframework.beans.factory.BeanInitializationException;
import org.springframework.beans.factory.config.ConfigurableListableBeanFactory;
import org.springframework.beans.factory.config.PropertyPlaceholderConfigurer;
import org.springframework.context.EnvironmentAware;
import org.springframework.core.env.Environment;
import org.springframework.core.io.Resource;


/**
 * Created by lijixin on 16/7/4.
 */
public class SysProperty extends PropertyPlaceholderConfigurer implements EnvironmentAware {

    private final static Logger logger = LoggerFactory.getLogger(SysProperty.class);

    public static final String DESCODER_KEY="BOCO_ENCRYPT_PROPERTIES";

    private static SysProperty instance = new SysProperty();
    public static SysProperty getInstance(){
        return instance;
    }
    private Properties prop;


    private Environment environment ;

    public void postProcessBeanFactory(ConfigurableListableBeanFactory beanFactory) throws BeansException {
        try {
            prop = mergeProperties();
            // Convert the merged properties, if necessary.
            convertProperties(prop);
            // Let the subclass process the properties.
            processProperties(beanFactory, prop);


            super.processProperties(beanFactory, prop);
        } catch (IOException ex) {
            logger.error("Could not load properties", ex);
            throw new BeanInitializationException("Could not load properties", ex);
        }
    }




    /**
     * 私密字段在配置文件中做了加密处理，这里进行解密
     * @author lonjack 20121031
     */
    @Override
    protected void processProperties(ConfigurableListableBeanFactory beanFactoryToProcess, Properties props)
            throws BeansException {
        for (Object key : props.keySet()) {
            String keyStr = key.toString();
            if (StringUtils.isNotBlank(keyStr)) {
                if (keyStr.startsWith("encrypt.prop")) {
                    String tempValue = "";
                    try {
                        tempValue = props.getProperty(keyStr);
                        byte[] outputData = DESCoder.decrypt(DESCoder.decryptBASE64(tempValue), DESCODER_KEY);
                        String value = new String(outputData);
                        props.setProperty(keyStr, value);
                    } catch (Exception e) {
                        logger.error("解密配置文件中的加密属性值出错，请确认配置是否正确，属性名称为：" +keyStr, e);
                    }
                }
            }
        }
    }




    public void setValue(String key,String value){
        instance.prop.put(key, value);
    }

    private Map<String, Resource> files;

    public void setFiles(Map<String,Resource> files){
        this.files = files;
    }

    public String getValue(String key){
        String value = null ;
        if(this.environment != null){
            value = environment.getProperty(key) ;
        }
        if(value == null || "".equals(value)){
            value = instance.prop.getProperty(key);
        }
        return value ;
    }

    public String getValue(String key,String defaultValue){
        String value = null ;
        if(this.environment != null){
            value = environment.getProperty(key,defaultValue) ;
        }
        if(value == null || "".equals(value)){
            value = instance.prop.getProperty(key, defaultValue);
        }
        return value;
    }

    public String getFilePath(String key){
        try {
            return this.files.get(key).getFile().getPath();
        } catch (IOException e) {
            e.printStackTrace();
            return null;
        }
    }

    public File getFile(String key){
        try {
            return this.files.get(key).getFile();
        } catch (IOException e) {
            e.printStackTrace();
            return null;
        }
    }

    public Resource getResource(String key){
        return this.files.get(key);
    }

    @Override
    public void setEnvironment(Environment environment) {

        this.environment = environment;
    }

    @Override
    protected String resolvePlaceholder(String placeholder, Properties props) {
        return this.getValue(placeholder);
    }

}

