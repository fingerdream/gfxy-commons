package com.gfxy.commons.crypto;

import org.apache.commons.codec.binary.Base64;

import javax.crypto.KeyGenerator;
import javax.crypto.Mac;
import javax.crypto.SecretKey;
import javax.crypto.spec.SecretKeySpec;
import java.math.BigInteger;
import java.security.MessageDigest;

/**
 *
 */
public abstract class Coder {

    public static final String KEY_SHA = "SHA";
    public static final String KEY_MD5 = "MD5";

    /**
     * MAC算法可选以下多种算法
     *
     * <pre>
     * HmacMD5
     * HmacSHA1
     * HmacSHA256
     * HmacSHA384
     * HmacSHA512
     * </pre>
     */
    public static final String KEY_MAC = "HmacMD5";

    /**
     * BASE64解密
     *
     * @param key
     * @return
     * @throws Exception
     */
    public static byte[] decryptBASE64(String key) throws Exception {
        return (Base64.decodeBase64(key));
    }

    /**
     * BASE64加密
     *
     * @param key
     * @return
     * @throws Exception
     */
    public static String encryptBASE64(byte[] key) throws Exception {
        return new String((Base64.encodeBase64(key)));
    }

    /**
     * MD5加密
     *
     * @param data
     * @return
     * @throws Exception
     */
    public static byte[] encryptMD5(byte[] data) throws Exception {

        MessageDigest md5 = MessageDigest.getInstance(KEY_MD5);
        md5.update(data);

        return md5.digest();

    }

    /**
     * encryptMD5:MD5加密串
     * @param  @param str
     * @param  @return
     * @param  @throws Exception    设定文件
     * @return String    DOM对象
     * @throws
     * @since  CodingExample　Ver 1.1
     */
    public static String encryptMD5(String str) throws Exception {
        MessageDigest md5 = MessageDigest.getInstance(KEY_MD5);

        byte[] bs = md5.digest(str.getBytes());
        StringBuilder sb = new StringBuilder(40);
        for(byte x:bs) {
            if((x & 0xff)>>4 == 0) {
                sb.append("0").append(Integer.toHexString(x & 0xff));
            } else {
                sb.append(Integer.toHexString(x & 0xff));
            }
        }
        return sb.toString();
    }


    /**
     * SHA加密
     *
     * @param data
     * @return
     * @throws Exception
     */
    public static byte[] encryptSHA(byte[] data) throws Exception {

        MessageDigest sha = MessageDigest.getInstance(KEY_SHA);
        sha.update(data);

        return sha.digest();

    }

    /**
     * 初始化HMAC密钥
     *
     * @return
     * @throws Exception
     */
    public static String initMacKey() throws Exception {
        KeyGenerator keyGenerator = KeyGenerator.getInstance(KEY_MAC);

        SecretKey secretKey = keyGenerator.generateKey();
        return encryptBASE64(secretKey.getEncoded());
    }

    /**
     * HMAC加密
     *
     * @param data
     * @param key
     * @return
     * @throws Exception
     */
    public static byte[] encryptHMAC(byte[] data, String key) throws Exception {

        SecretKey secretKey = new SecretKeySpec(decryptBASE64(key), KEY_MAC);
        Mac mac = Mac.getInstance(secretKey.getAlgorithm());
        mac.init(secretKey);

        return mac.doFinal(data);

    }


    public static void main(String[] args) {
        String inputStr = "简单加密";
        System.err.println("原文:\n" + inputStr);

        try {
            byte[] inputData = inputStr.getBytes();
            String code = Coder.encryptBASE64(inputData);
            System.err.println("BASE64加密后:\n" + code);
            byte[] output = Coder.decryptBASE64(code);
            String outputStr = new String(output);
            System.err.println("BASE64解密后:\n" + outputStr);
            String key = Coder.initMacKey();
            System.err.println("Mac密钥:\n" + key);
            BigInteger md5 = new BigInteger(Coder.encryptMD5(inputData));
            System.err.println("MD5:\n" + md5.toString(16));
            BigInteger sha = new BigInteger(Coder.encryptSHA(inputData));
            System.err.println("SHA:\n" + sha.toString(32));
            System.out.println(inputStr);
            BigInteger mac = new BigInteger(Coder.encryptHMAC(inputData, inputStr));
            System.err.println("HMAC:\n" + mac.toString(16));
        } catch (Exception e) {
            e.printStackTrace();
        }
    }

}

