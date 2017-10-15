package cn.magicdu.bookmark.service.impl;

import org.springframework.beans.factory.annotation.Autowired;

import cn.magicdu.bookmark.mapper.UsersMapper;
import cn.magicdu.bookmark.pojo.Users;
import cn.magicdu.bookmark.service.UsersService;
import cn.magicdu.bookmark.utils.UUIDUtils;

public class UsersServiceImpl implements UsersService {
	@Autowired
	private UsersMapper usersMapper;
	
	
	public int addUser(Users user) throws Exception{
		user.setId(UUIDUtils.getUUID());
		user.setActivecode(UUIDUtils.getUUID());
		user.setAvatar("http://avatar.csdn.net/D/1/3/1_xiaoduc.jpg");
		user.setNickname("萌新");
		return usersMapper.addUser(user);
	}

	
	public Users userLogin(String username, String password) {
		
		return usersMapper.selectUserByUP(username, password);
	}

}
