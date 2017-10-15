package cn.magicdu.bookmark.mapper;

import org.apache.ibatis.annotations.Param;

import cn.magicdu.bookmark.pojo.Users;

public interface UsersMapper {
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
	public Users selectUserByUP(@Param("username")String username, @Param("password")String password);
}
