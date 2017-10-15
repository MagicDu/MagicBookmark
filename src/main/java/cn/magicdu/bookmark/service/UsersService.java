package cn.magicdu.bookmark.service;

import cn.magicdu.bookmark.pojo.Users;

public interface UsersService {
	/**
	 * 添加用戶
	 * @param user
	 * @return
	 * @throws Exception 
	 */
	public int addUser(Users user) throws Exception;

	/**
	 * 用户登录
	 * @param username
	 * @param password
	 * @return
	 */
	public Users userLogin(String username, String password);
}
