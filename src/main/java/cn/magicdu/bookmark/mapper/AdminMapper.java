package cn.magicdu.bookmark.mapper;

import org.apache.ibatis.annotations.Param;

import cn.magicdu.bookmark.pojo.Admin;

public interface AdminMapper {

	/**
	 * 管理员用户登录
	 * @param name
	 * @param password
	 * @return
	 * @throws Exception
	 */
	public Admin selectAdminByUP(@Param("name") String name, @Param("password") String password) throws Exception;
}
