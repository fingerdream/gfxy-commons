package com.gfxy.commons.message;

import com.fasterxml.jackson.annotation.JsonProperty;

/**
 * @author: lijixin 2019-04-23
 */
public class MessageHeader {

    @JsonProperty("service")
    private String serviceName;

    @JsonProperty("instance")
    private String instanceName;

    @JsonProperty("result")
    private ResultEnum resultEnum;

    public String getServiceName() {
        return serviceName;
    }

    public void setServiceName(String serviceName) {
        this.serviceName = serviceName;
    }

    public String getInstanceName() {
        return instanceName;
    }

    public void setInstanceName(String instanceName) {
        this.instanceName = instanceName;
    }

    public ResultEnum getResultEnum() {
        return resultEnum;
    }

    public void setResultEnum(ResultEnum resultEnum) {
        this.resultEnum = resultEnum;
    }

    @Override
    public String toString() {
        return "MessageHeader{" +
                "serviceName='" + serviceName + '\'' +
                ", instanceName='" + instanceName + '\'' +
                ", resultEnum=" + resultEnum +
                '}';
    }


    public static final class Builder {

        private MessageHeader result = new MessageHeader();

        private Builder() {
            this.result = new MessageHeader();
        }

        public static Builder newBuilder() {
            return new Builder();
        }

        public Builder setServiceName(String serviceName) {
            this.result.serviceName = serviceName;
            return this;
        }

        public Builder setInstanceName(String instanceName) {
            this.result.instanceName = instanceName;
            return this;
        }

        public Builder setResultEnum(ResultEnum resultEnum) {
            this.result.resultEnum = resultEnum;
            return this;
        }

        public MessageHeader build() {
            return result;
        }
    }

}
