package com.gfxy.common.util;

import org.bouncycastle.util.encoders.Base64;
import org.slf4j.Logger;
import org.slf4j.LoggerFactory;

import javax.crypto.Cipher;
import java.security.KeyPair;
import java.security.KeyPairGenerator;
import java.security.SecureRandom;
import java.security.Security;
import java.security.interfaces.RSAPrivateKey;
import java.security.interfaces.RSAPublicKey;

public class RsaUtils {
    Logger logger = LoggerFactory.getLogger(RsaUtils.class);

    private KeyPair keyPair;

    public KeyPair initKey() {
        try {
            Security.addProvider(new org.bouncycastle.jce.provider.BouncyCastleProvider());
            SecureRandom random = new SecureRandom();
            KeyPairGenerator generator = KeyPairGenerator.getInstance("RSA", "BC");
            generator.initialize(1024, random);
            keyPair = generator.generateKeyPair();
            return keyPair;
        } catch (Exception e) {
            throw new RuntimeException(e);
        }
    }

    /**
     * 生成public key
     *
     * @return
     */
    public String generateBase64PublicKey() {
        RSAPublicKey key = (RSAPublicKey) keyPair.getPublic();
        return new String(Base64.encode(key.getEncoded()));
    }

    /**
     * 解密
     *
     * @param string
     * @return
     */
    public String decryptBase64(String string) {
        String info = new String(decrypt(Base64.decode(string)));
        logger.debug("解密信息:{}",info);
        return info;
    }

    private byte[] decrypt(byte[] string) {
        try {
            Security.addProvider(new org.bouncycastle.jce.provider.BouncyCastleProvider());
            Cipher cipher = Cipher.getInstance("RSA/None/PKCS1Padding", "BC");
            RSAPrivateKey pbk = (RSAPrivateKey) keyPair.getPrivate();
            cipher.init(Cipher.DECRYPT_MODE, pbk);
            byte[] plainText = cipher.doFinal(string);
            return plainText;
        } catch (Exception e) {
            throw new RuntimeException(e);
        }
    }

    public String encryptBase64(String string) {
        return new String(encrypt(string.getBytes()));
    }

    public byte[] encrypt(byte[] string) {
        try {
            Security.addProvider(new org.bouncycastle.jce.provider.BouncyCastleProvider());
            Cipher cipher = Cipher.getInstance("RSA/None/PKCS1Padding", "BC");
            RSAPublicKey pbk = (RSAPublicKey) keyPair.getPublic();
            cipher.init(Cipher.ENCRYPT_MODE, pbk);
            byte[] plainText = cipher.doFinal(string);
            return plainText;
        } catch (Exception e) {
            throw new RuntimeException(e);
        }
    }

    public static void main(String[] args) {
        RsaUtils rsa =new RsaUtils();
        rsa.initKey();
        // 生成public key
        byte[] mm="冈地方规范合格激光焊接韩国锦这个中国阿斯顿发生发生的发生发生的梵蒂冈地方规范合格激光焊接韩国锦".getBytes();

        byte[] val = Base64.encode(mm);
        byte[] enval = rsa.encrypt(mm);
        byte[] beval = Base64.encode(enval);
        String sbeval = new String(beval);

        String deval = rsa.decryptBase64(sbeval);

    }
}
