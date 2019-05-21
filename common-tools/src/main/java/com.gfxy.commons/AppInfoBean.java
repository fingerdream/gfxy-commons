package com.gfxy.commons;

/**
 * @author: lijixin 2019-04-23
 */
public class AppInfoBean {
    private String service;

    private String instance;

    private String version;

    private String domain;

    public String getService() {
        return service;
    }

    public void setService(String service) {
        this.service = service;
    }

    public String getInstance() {
        return instance;
    }

    public void setInstance(String instance) {
        this.instance = instance;
    }

    public String getVersion() {
        return version;
    }

    public void setVersion(String version) {
        this.version = version;
    }

    public String getDomain() {
        return domain;
    }

    public void setDomain(String domain) {
        this.domain = domain;
    }


    public static final class Builder {
        private AppInfoBean result = new AppInfoBean();

        private Builder() {
            this.result = new AppInfoBean();
        }

        public static Builder newBuilder() {
            return new Builder();
        }

        public Builder setService(String service) {
            this.result.service = service;
            return this;
        }

        public Builder setInstance(String instance) {
            this.result.instance = instance;
            return this;
        }

        public Builder setVersion(String version) {
            this.result.version = version;
            return this;
        }

        public Builder setDomain(String domain) {
            this.result.domain = domain;
            return this;
        }

        public AppInfoBean build() {
            return result;
        }
    }

}
