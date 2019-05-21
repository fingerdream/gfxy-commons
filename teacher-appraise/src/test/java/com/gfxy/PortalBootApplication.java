package com.gfxy;

import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;
import org.springframework.boot.context.embedded.EmbeddedServletContainerCustomizer;
import org.springframework.context.annotation.Bean;

/**
 * @author: lijixin 2019-04-30
 */
@SpringBootApplication
public class PortalBootApplication {

    public static void main(String[] args) {
        SpringApplication.run(PortalBootApplication.class, args);
    }

    @Bean
    public EmbeddedServletContainerCustomizer containerCustomizer() {
        return container -> {
            container.setSessionTimeout(8*60*60);/*单位为S*///设置session超时时间为8小时
        };
    }

}

