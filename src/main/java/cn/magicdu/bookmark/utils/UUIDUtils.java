package cn.magicdu.bookmark.utils;

import java.util.UUID;

/**
 * 生成uuid的工具类
 * 
 * @author xiaoduc
 *
 */
public class UUIDUtils {
	public static String getUUID() {
		UUID uuid = UUID.randomUUID();
		String uuidStr = uuid.toString();
		uuidStr = uuidStr.replaceAll("-", "");
		return uuidStr;
	}
}
