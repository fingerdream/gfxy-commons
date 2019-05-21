package com.gfxy.common.util;

import javax.imageio.ImageIO;
import java.awt.*;
import java.awt.image.BufferedImage;
import java.io.IOException;
import java.io.OutputStream;
import java.util.Random;

public class CodeUtil {

    private static int width = 120;// 定义图片的width
    private static int height = 36;// 定义图片的height
    private static int codeCount = 4;// 定义图片上显示验证码的个数
    private static int xx = 25;
    private static int fontHeight = 28;
    private static int codeY = 28;
    private static char[] codeSequence = { 'A', 'B', 'C', 'D', 'E', 'F', 'G', 'H', 'J', 'K', 'L', 'M', 'N', 'P', 'Q',
            'R', 'S', 'T', 'U', 'V', 'W', 'X', 'Y', 'Z', 'a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'j', 'k', 'm', 'n',
            'o', 'p', 'q', 'r', 's', 't', 'u', 'v', 'w', 'x', 'y', 'z', '1', '2', '3', '4', '5', '6', '7', '8', '9' };

    public static BufferedImage createCodeIcon(String code) {
        BufferedImage image = new BufferedImage(width, height, BufferedImage.TYPE_INT_RGB);
        Graphics2D gd = image.createGraphics();

        gd.setColor(Color.WHITE);
        gd.fillRect(0, 0, width, height);

        Font font = new Font("Fixedsys", Font.PLAIN, fontHeight);
        gd.setFont(font);

        gd.setColor(Color.BLACK);
        gd.drawRect(0, 0, width - 1, height - 1);

        Random random = new Random();
        int red = random.nextInt(255);
        int green = red + random.nextInt(50);
        int blue = red + random.nextInt(50);

        for (int i = 0; i < 10; i++) {
            gd.setColor(createColor(red, green, blue));
            int x = random.nextInt(width);
            int y = random.nextInt(height);
            int xl = random.nextInt(width - x)&0xF;
            int yl = random.nextInt(height - y)&0xF;
            gd.drawLine(x, y, x + xl, y + yl);
            gd.drawLine(x + 1, y, x + xl + 1, y + yl);
        }

        for (int i = 0; i < code.length(); i++) {
            gd.setColor(new Color(random.nextInt(255), random.nextInt(255), random.nextInt(255)));
            Double d = random.nextDouble() / 10;
            gd.rotate(Math.PI * d, 15+i * xx, 0);//旋转
            gd.drawString(code.substring(i, i + 1), 15+i * xx, codeY);
            gd.rotate(-Math.PI * d, 15+i * xx, 0);//旋转
        }
        return image;

    }

    public static void writeIcon(OutputStream out, String code) throws IOException {
        ImageIO.write(createCodeIcon(code), "jpeg", out);
    }
    
    public static String createCode() {
        Random random = new Random();
        StringBuffer randomCode = new StringBuffer();
        for (int i = 0; i < codeCount; i++) {
            String code = String.valueOf(codeSequence[random.nextInt(codeSequence.length)]);
            randomCode.append(code);
        }
        return randomCode.toString();
    }

    private static Color createColor(int red, int green, int blue) {
        Random random = new Random();
        if (random.nextInt(2) == 1) {
            return new Color((red + random.nextInt(10)) & 0xFF, (green + random.nextInt(10)) & 0xFF,
                    (blue + random.nextInt(10)) & 0xFF);
        }
        return new Color((red - random.nextInt(10)) & 0xFF, (green - random.nextInt(10)) & 0xFF,
                (blue - random.nextInt(10)) & 0xFF);
    }

}
