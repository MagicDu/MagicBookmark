package cn.magicdu.bookmark.service;

import cn.magicdu.bookmark.pojo.Admin;

/**
 * 管理员service
 * 
 * @author xiaoduc
 *
 */
public interface AdminService {
	
	/**
	 * 管理员登录service
	 * @param name
	 * @param password
	 * @return
	 * @throws Exception
	 */
	public Admin adminLogin(String name,String password) throws Exception;
	
}
