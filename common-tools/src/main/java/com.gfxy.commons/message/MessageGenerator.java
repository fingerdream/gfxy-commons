//package com.gfxy.commons.message;
//
//import com.gfxy.commons.AppInfoBean;
//import org.springframework.beans.factory.annotation.Autowired;
//
///**
// * @author: lijixin 2019-04-23
// */
//
//public class MessageGenerator {
//
////    @Autowired
////    private AppInfoBean appInfoBean;
//
//
//    public <T> Message<T> generateMessage(ResultEnum resultEnum,T t){
//        Message<T> result = Message.Builder.newBuilder()
//                .setMessageBody(t)
//                .setMessageHeader(createMessgeHeader(resultEnum))
//                .build();
//        return result;
//    }
//
//    public MessageHeader createMessgeHeader(ResultEnum resultEnum) {
//        MessageHeader result = MessageHeader.Builder.newBuilder()
//                .setResultEnum(resultEnum)
////                .setInstanceName(appInfoBean.getInstance())
////                .setServiceName(appInfoBean.getService())
//                .build();
//        return result;
//    }
//
//}
