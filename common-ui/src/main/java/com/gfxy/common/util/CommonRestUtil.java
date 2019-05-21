//package com.gfxy.common.com.gfxy.common.util.util.util;
//
//import com.fasterxml.jackson.jaxrs.json.JacksonJsonProvider;
//import net.sf.json.JSONObject;
//import org.glassfish.jersey.media.multipart.FormDataBodyPart;
//import org.glassfish.jersey.media.multipart.FormDataMultiPart;
//import org.glassfish.jersey.media.multipart.MultiPartFeature;
//import org.glassfish.jersey.media.multipart.file.StreamDataBodyPart;
//import org.slf4j.Logger;
//import org.springframework.beans.factory.annotation.Autowired;
//import org.springframework.core.env.Environment;
//import org.springframework.stereotype.Component;
//import org.springframework.com.gfxy.common.util.util.util.FileCopyUtils;
//
//import javax.annotation.PostConstruct;
//import javax.servlet.http.Cookie;
//import javax.servlet.http.HttpServletRequest;
//import javax.servlet.http.HttpServletResponse;
//import javax.ws.rs.client.Client;
//import javax.ws.rs.client.ClientBuilder;
//import javax.ws.rs.client.Entity;
//import javax.ws.rs.client.WebTarget;
//import javax.ws.rs.core.HttpHeaders;
//import javax.ws.rs.core.MediaType;
//import javax.ws.rs.core.Response;
//import java.io.IOException;
//import java.io.InputStream;
//import java.io.UnsupportedEncodingException;
//import java.net.URLEncoder;
//import java.com.gfxy.common.util.util.util.Iterator;
//
//import static com.gfxy.evaluation.common.com.gfxy.common.util.util.util.GFXYUIStatic.*;
//
//
///**
// * <p>Class: CommonRestUtil </p>
// * <p>Description: 通用rest组件</p>
// * <p>date: 2017/9/26 17:12 </p>
// *
// * @author zhuyu[zhuyu@boco.com.cn]
// */
//
//@Component
//public class CommonRestUtil {
//
//    @Autowired
//    private Environment environment;
//
//    private static CommonRestUtil commonRestUtil;
//
//    public void setEnvironment(Environment environment) {
//        this.environment = environment;
//    }
//
//    @PostConstruct
//    public void init() {
//        commonRestUtil = this;
//        commonRestUtil.environment = this.environment;
//    }
//
//
//    /**
//     * <p>Method: doRest </p>
//     * <p>Description: 通用服务调用</p>
//     * <p>date: 2017/9/26 17:10 </p>
//     *
//     * @author zhuyu[zhuyu@boco.com.cn]
//     */
//    public static JSONObject doRest(String path, String operType, Object param, ERestType restType, Logger logger, String reMark, HttpServletRequest request) {
//        JSONObject rtMsg = new JSONObject();
//        Client client = ClientBuilder.newClient().register(JacksonJsonProvider.class);
//        logger.info("[" + reMark + "]调用restFul服务:调用类型:{};", new Object[]{restType.getName()});
//        logger.info("[" + reMark + "]调用restFul服务:调用参数:{};", new Object[]{param.toString(), "UTF-8"});
//        WebTarget target = getWebTarget(operType, client, path, logger, reMark);
//        Response response = null;
//        String myToken = "";
//        Cookie[] cookies = request.getCookies();
//        if (cookies != null) {
//            for (Cookie cookie : cookies) {
//                if (cookie.getName().equals("_myToken")) {
//                    myToken = cookie.getValue();
//                }
//            }
//        }
//        switch (restType) {
//            case GET:
//                if (param instanceof JSONObject) {
//                    JSONObject param1 = (JSONObject) param;
//                    Iterator<?> it = param1.keys();
//                    while (it.hasNext()) {
//                        String key = (String) it.next();
//                        String value = param1.getString(key);
//                        if (!(key.equals("_myToken"))) {
//                            target = target.queryParam(key, value);
//                        } else {
//                            myToken = value;
//                        }
//                    }
//                    response = target.request(MediaType.APPLICATION_JSON_TYPE + ";charset=utf-8").header(HttpHeaders.AUTHORIZATION, myToken).get();
//                }
//                break;
//            case POST:
//                response = target.request(MediaType.APPLICATION_JSON_TYPE + ";charset=utf-8").header(HttpHeaders.AUTHORIZATION, myToken).post(Entity.entity(param, MediaType.APPLICATION_JSON_TYPE + ";charset=utf-8"));
//                break;
//            case PUT:
//                response = target.request(MediaType.APPLICATION_JSON_TYPE + ";charset=utf-8").header(HttpHeaders.AUTHORIZATION, myToken).put(Entity.entity(param, MediaType.APPLICATION_JSON_TYPE + ";charset=utf-8"));
//                break;
//            case DELETE:
//                if (param instanceof JSONObject) {
//                    JSONObject param1 = (JSONObject) param;
//                    Iterator<?> it = param1.keys();
//                    while (it.hasNext()) {
//                        String key = (String) it.next();
//                        String value = param1.getString(key);
//                        target = target.queryParam(key, value);
//                    }
//                    response = target.request(MediaType.APPLICATION_JSON_TYPE + ";charset=utf-8").header(HttpHeaders.AUTHORIZATION, myToken).delete();
//                }
//                break;
//        }
//        logger.info("[" + reMark + "]调用restFul服务:返回结果状态编号:{};", new Object[]{response.getStatus() + ""});
//        if (response.getStatus() == 200) {
//            String resultWrapStr = response.readEntity(String.class);
//            logger.debug("[" + reMark + "]调用restFul服务:返回结果数据内容:{};", new Object[]{resultWrapStr});
//            if (resultWrapStr.startsWith("{")) {
//                JSONObject resultJo = JSONObject.fromObject(resultWrapStr);
//                if (resultJo.has("header")) {
//                    JSONObject header = resultJo.getJSONObject("header");
//                    Object body = resultJo.get("body");
//                    rtMsg = doReturnStr(header, body);
//                } else if (resultJo.has("code")) {
//                    if (resultJo.getInt("code") == 0) {
//                        rtMsg.accumulate("success", true);
//                        rtMsg.accumulate("message", resultJo.getString("data"));
//                    } else {
//                        rtMsg.accumulate("success", false);
//                        rtMsg.accumulate("message", resultJo.getString("msg"));
//                    }
//                } else {
//                    rtMsg.accumulate("success", true);
//                    rtMsg.accumulate("message", resultWrapStr);
//                }
//            } else {
//                rtMsg.accumulate("success", true);
//                rtMsg.accumulate("message", resultWrapStr);
//            }
//        } else if (response.getStatus() == 401) {
//            rtMsg.accumulate("success", false);
//            rtMsg.accumulate("message", "{\"errorMessage\":\"没有权限访问,请您重新登陆\"}");
//        } else {
//            rtMsg.accumulate("success", false);
//            rtMsg.accumulate("message", "{\"errorMessage\":\"服务调用失败\"}");
//        }
//        return rtMsg;
//    }
//
//    /**
//     * <p>Method: postFile </p>
//     * <p>Description: 执行上传服务</p>
//     * <p>date: 2017/9/26 17:10 </p>
//     *
//     * @author zhuyu[zhuyu@boco.com.cn]
//     */
//    public static JSONObject postFile(String path, String operType, JSONObject param, Logger logger, String reMark, String fileName, InputStream is, HttpServletRequest request) {
//        JSONObject rtMsg = new JSONObject();
//        Client client = ClientBuilder.newClient().register(MultiPartFeature.class);
//        WebTarget target = getWebTarget(operType, client, path, logger, reMark);
//        FormDataMultiPart part = new FormDataMultiPart();
//        try {
//            fileName = URLEncoder.encode(fileName,"UTF-8");
//        }catch (UnsupportedEncodingException e){
//            rtMsg.accumulate("success", false);
//            rtMsg.accumulate("message", e.getMessage());
//            return rtMsg;
//        }
//        part.bodyPart(new StreamDataBodyPart("file", is, fileName));
//        if (param != null && param.size() > 0) {
//            Iterator<?> it = param.keys();
//            while (it.hasNext()) {
//                String key = (String) it.next();
//                String value = param.getString(key);
//                part.bodyPart(new FormDataBodyPart(key, value));
//            }
//        }
//        String myToken = "";
//        Cookie[] cookies = request.getCookies();
//        for (Cookie cookie : cookies) {
//            if (cookie.getName().equals("_myToken")) {
//                myToken = cookie.getValue();
//            }
//        }
//        Response response = target.request().header(HttpHeaders.AUTHORIZATION, myToken).post(Entity.entity(part, part.getMediaType()));
//        logger.info("[" + reMark + "]调用restFul服务:返回结果状态编号:{};", new Object[]{response.getStatus() + ""});
//        if (response.getStatus() == 200) {
//            String resultWrapStr = response.readEntity(String.class);
//            logger.debug("[" + reMark + "]调用restFul服务:返回结果数据内容:{};", new Object[]{resultWrapStr});
//            JSONObject resultJo = JSONObject.fromObject(resultWrapStr);
//            JSONObject header = resultJo.getJSONObject("header");
//            String body = resultJo.getString("body");
//            rtMsg = doReturnStr(header, body);
//        } else {
//            rtMsg.accumulate("success", false);
//            rtMsg.accumulate("message", "服务调用失败");
//        }
//        return rtMsg;
//    }
//
//    /**
//     * <p>Method: postFile </p>
//     * <p>Description: 执行上传服务</p>
//     * <p>date: 2017/9/26 17:10 </p>
//     *
//     * @author zhuyu[zhuyu@boco.com.cn]
//     */
//    public static InputStream getFile(String path, String operType, JSONObject param, Logger logger, String reMark, HttpServletRequest request) {
//        Client client = ClientBuilder.newClient().register(MultiPartFeature.class);
//        WebTarget target = getWebTarget(operType, client, path, logger, reMark);
//        Iterator<?> it = param.keys();
//        while (it.hasNext()) {
//            String key = (String) it.next();
//            String value = param.getString(key);
//            target = target.queryParam(key, value);
//        }
//        String myToken = "";
//        Cookie[] cookies = request.getCookies();
//        for (Cookie cookie : cookies) {
//            if (cookie.getName().equals("_myToken")) {
//                myToken = cookie.getValue();
//            }
//        }
//        Response response = target.request(MediaType.APPLICATION_OCTET_STREAM + ";charset=utf-8").header(HttpHeaders.AUTHORIZATION, myToken).get();
//        logger.info("[" + reMark + "]调用restFul服务:返回结果状态编号:{};", new Object[]{response.getStatus() + ""});
//        if (response.getStatus() == 200) {
//            InputStream inputStream = response.readEntity(InputStream.class);
//            return inputStream;
//        } else {
//            return null;
//        }
//    }
//
//    private static JSONObject doReturnStr(JSONObject header, Object body) {
//        JSONObject rtMsg = new JSONObject();
//        if (header.getInt("result") == 1) {//成功
//            rtMsg.accumulate("success", true);
//        } else {
//            rtMsg.accumulate("success", false);
//        }
//        rtMsg.accumulate("message", body == null ? "" : body.toString());
//        return rtMsg;
//    }
//
//    private static WebTarget getWebTarget(String operType, Client client, String path, Logger logger, String reMark) {
//        WebTarget target = null;
//        String portalServer = commonRestUtil.environment.getProperty(PORTAL_WEB_SERVER);//门户服务
//        String odmServer = commonRestUtil.environment.getProperty(ODM_WEB_SERVER);//局数据数据服务
//        String flowServer = commonRestUtil.environment.getProperty(FLOW_WEB_SERVER);//局数据流程服务
//        String iosWebServer = commonRestUtil.environment.getProperty(IOS_WEB_SERVER);//巡检服务
//        String cmnetBaseUrl = commonRestUtil.environment.getProperty(CMNET_WEB_SERVER); //cmnet服务
//        String cmpBaseUrl = commonRestUtil.environment.getProperty(CMP_WEB_SERVER); //指令下发服务
//        String collectUrl = commonRestUtil.environment.getProperty(COLLECT_WEB_SERVER); //采集服务
//        String commandGenUrl = commonRestUtil.environment.getProperty(CMDGEN_WEB_SERVER); //指令生成服务
//        String acttasksUrl = commonRestUtil.environment.getProperty(ACTTASK_WEB_SERVER); //指令下发服务
//        String cmdOperateRest = commonRestUtil.environment.getProperty(CMDOPER_WEB_SERVER); //局数据高危指令服务
//        String jkRest = commonRestUtil.environment.getProperty(JK_WEB_SERVER); //局数据金库服务
//        String ftpIssue = commonRestUtil.environment.getProperty(FTPISSUE_WEB_SERVER); //局数据ftp下载服务
//        String odmCollectRest = commonRestUtil.environment.getProperty(ODMCOLLECT_WEB_SERVER); //局数据采集服务
//        String inasWebgateRest = commonRestUtil.environment.getProperty(INASWEBGATE_WEB_SERVER); //激活提供界面服务
//        String gframeRest = commonRestUtil.environment.getProperty(GFRAME_WEB_SERVER); //gframe提供界面服务
//        String goduRest = commonRestUtil.environment.getProperty(GODU_WEB_SERVER); //godu提供界面服务
//        String inasWebServer = "http://127.0.0.1:9001/dssServer/inas/v1/";//激活服务
//        switch (operType) {
//            case PORTAL_WEB_SERVER:
//                target = client.target(portalServer).path(path);
//                logger.info("[" + reMark + "]调用restFul服务:url:{}/{};", new Object[]{portalServer, path});
//                break;
//            case IOS_WEB_SERVER:
//                target = client.target(iosWebServer).path(path);
//                logger.info("[" + reMark + "]调用restFul服务:url:{}/{};", new Object[]{iosWebServer, path});
//                break;
//            case INAS_WEB_SERVER:
//                target = client.target(inasWebServer).path(path);
//                logger.info("[" + reMark + "]调用restFul服务:url:{}/{};", new Object[]{iosWebServer, path});
//                break;
//            case ODM_WEB_SERVER:
//                target = client.target(odmServer).path(path);
//                logger.info("[" + reMark + "]调用restFul服务:url:{}/{};", new Object[]{odmServer, path});
//                break;
//            case FLOW_WEB_SERVER:
//                target = client.target(flowServer).path(path);
//                logger.info("[" + reMark + "]调用restFul服务:url:{}/{};", new Object[]{flowServer, path});
//                break;
//            case CMNET_WEB_SERVER:
//                target = client.target(cmnetBaseUrl).path(path);
//                logger.info("[" + reMark + "]调用restFul服务:url:{}/{};", new Object[]{cmnetBaseUrl, path});
//                break;
//            case COLLECT_WEB_SERVER:
//                target = client.target(collectUrl).path(path);
//                logger.info("[" + reMark + "]调用restFul服务:url:{}/{};", new Object[]{collectUrl, path});
//                break;
//            case CMDGEN_WEB_SERVER:
//                target = client.target(commandGenUrl).path(path);
//                logger.info("[" + reMark + "]调用restFul服务:url:{}/{};", new Object[]{commandGenUrl, path});
//                break;
//            case ACTTASK_WEB_SERVER:
//                target = client.target(acttasksUrl).path(path);
//                logger.info("[" + reMark + "]调用restFul服务:url:{}/{};", new Object[]{acttasksUrl, path});
//                break;
//            case CMP_WEB_SERVER:
//                target = client.target(cmpBaseUrl).path(path);
//                logger.info("[" + reMark + "]调用restFul服务:url:{}/{};", new Object[]{cmpBaseUrl, path});
//                break;
//            case CMDOPER_WEB_SERVER:
//                target = client.target(cmdOperateRest).path(path);
//                logger.info("[" + reMark + "]调用restFul服务:url:{}/{};", new Object[]{cmdOperateRest, path});
//                break;
//            case JK_WEB_SERVER:
//                target = client.target(jkRest).path(path);
//                logger.info("[" + reMark + "]调用restFul服务:url:{}/{};", new Object[]{jkRest, path});
//                break;
//            case FTPISSUE_WEB_SERVER:
//                target = client.target(ftpIssue).path(path);
//                logger.info("[" + reMark + "]调用restFul服务:url:{}/{};", new Object[]{ftpIssue, path});
//                break;
//            case ODMCOLLECT_WEB_SERVER:
//                target = client.target(odmCollectRest).path(path);
//                logger.info("[" + reMark + "]调用restFul服务:url:{}/{};", new Object[]{odmCollectRest, path});
//                break;
//            case INASWEBGATE_WEB_SERVER:
//                target = client.target(inasWebgateRest).path(path);
//                logger.info("[" + reMark + "]调用restFul服务:url:{}/{};", new Object[]{inasWebgateRest, path});
//                break;
//            case GFRAME_WEB_SERVER:
//                target = client.target(gframeRest).path(path);
//                logger.info("[" + reMark + "]调用restFul服务:url:{}/{};", new Object[]{gframeRest, path});
//                break;
//            case GODU_WEB_SERVER:
//                target = client.target(goduRest).path(path);
//                logger.info("[" + reMark + "]调用restFul服务:url:{}/{};", new Object[]{goduRest, path});
//                break;
//            default:
//                logger.info("未匹配到{}对应的rest服务", operType);
//        }
//        return target;
//    }
//
//    public static void downLoadFile(HttpServletResponse response, InputStream in, String fileName) throws IOException {
//        response.setContentType("application/octet-stream");
//        response.setCharacterEncoding("UTF-8");
//        response.setHeader("Content-disposition", "attachment;filename=" + new String(fileName.getBytes("utf-8"), "ISO8859-1"));
//        FileCopyUtils.copy(in, response.getOutputStream());
//    }
//
//}
