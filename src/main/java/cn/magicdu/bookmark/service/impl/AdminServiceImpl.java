package cn.magicdu.bookmark.service.impl;

import org.springframework.beans.factory.annotation.Autowired;

import cn.magicdu.bookmark.mapper.AdminMapper;
import cn.magicdu.bookmark.pojo.Admin;
import cn.magicdu.bookmark.service.AdminService;

public class AdminServiceImpl implements AdminService{

	@Autowired 
	private AdminMapper adminMapper;
	
	
	public Admin adminLogin(String name, String password) throws Exception {
		// TODO Auto-generated method stub
		return adminMapper.selectAdminByUP(name, password);
	}

}
