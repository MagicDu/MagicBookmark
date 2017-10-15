package cn.magicdu.bookmark.controller;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.ResponseBody;

import cn.magicdu.bookmark.pojo.Msg;
import cn.magicdu.bookmark.pojo.Users;
import cn.magicdu.bookmark.service.UsersService;

/**
 * 用户Controller
 * 
 * @author xiaoduc
 *
 */
@Controller
public class UsersController {
	@Autowired
	private UsersService usersService;

	@RequestMapping("addUser")
	@ResponseBody
	public  Msg addUser(Users user) throws Exception {
		Msg msg = new Msg();
		if(usersService.addUser(user)==1){
			msg.setMsg("success");
		}else{
			msg.setMsg("error");
		}
		return msg;
	}
	
	@RequestMapping("userLogin")
	@ResponseBody
	public Users userLogin(String username,String password)throws Exception{
		Users user =usersService.userLogin(username,password);
		return user;
		
	}
}
