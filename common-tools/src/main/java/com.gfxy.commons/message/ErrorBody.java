package com.gfxy.commons.message;

/**
 * @author: lijixin 2019-04-23
 */
public class ErrorBody {

    private String errorId;

    private String errorMsg;


    public ErrorBody() {
    }

    public ErrorBody(String errorId, String errorMsg) {
        this.errorId = errorId;
        this.errorMsg = errorMsg;
    }


    public String getErrorId() {
        return errorId;
    }

    public void setErrorId(String errorId) {
        this.errorId = errorId;
    }

    public String getErrorMsg() {
        return errorMsg;
    }

    public void setErrorMsg(String errorMsg) {
        this.errorMsg = errorMsg;
    }


    public static class Builder {
        private ErrorBody result ;

        private Builder() {
            this.result = new ErrorBody();
        }

        public static Builder newBuilder() {
            return new Builder();
        }

        public Builder setErrorId(String errorId){
            result.setErrorId(errorId);
            return this;
        }

        public Builder setErrorMsg(String errorMsg){
            result.setErrorMsg(errorMsg);
            return this;
        }

        public ErrorBody build() {
            return result;
        }
    }
}

