package cn.magicdu.bookmark.controller;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.ResponseBody;
import org.springframework.web.servlet.ModelAndView;

import cn.magicdu.bookmark.pojo.Admin;
import cn.magicdu.bookmark.service.AdminService;

/**
 * 管理员Controller实现类
 * 
 * @author xiaoduc
 *
 */
// 标示控制器
@Controller
public class AdminController {
	@Autowired AdminService adminService;
	//对URL进行映射
	@RequestMapping("adminLogin")
	public @ResponseBody Admin adminLogin(String name,String password) throws Exception{
		Admin admin= adminService.adminLogin(name, password);
		return admin;
	}
	
	public ModelAndView addAdmin(){
		return null;
	}

}
