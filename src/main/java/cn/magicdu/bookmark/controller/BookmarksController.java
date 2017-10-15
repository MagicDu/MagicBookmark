package cn.magicdu.bookmark.controller;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.ResponseBody;

import cn.magicdu.bookmark.pojo.Bookmarks;
import cn.magicdu.bookmark.pojo.BookmarksVo;
import cn.magicdu.bookmark.pojo.Msg;
import cn.magicdu.bookmark.service.BookmarksService;

@Controller
public class BookmarksController {
	@Autowired
	private BookmarksService bookmarksService;

	@RequestMapping("addBookmark")
	@ResponseBody
	public Msg addBookmark(Bookmarks bookmarks) throws Exception {
		Msg msg = new Msg();
		if (bookmarksService.addBookmark(bookmarks) == 1) {
			msg.setMsg("success");
		} else {
			msg.setMsg("error");
		}
		return msg;
	}

	@RequestMapping("selectBookmarks")
	@ResponseBody
	public List<Bookmarks> selectBookmarks(String user_id) throws Exception {
		return bookmarksService.selectBookmarks(user_id);
	}

	@RequestMapping("selectBookmarksVo")
	@ResponseBody
	public List<BookmarksVo> selectBookmarksVo(String user_id) throws Exception {
		return bookmarksService.selectBookmarksVo(user_id);
	}
	@RequestMapping("selectBookmarksById")
	@ResponseBody
	public Bookmarks selectBookmarksById(String id)throws Exception{
		return bookmarksService.selectBookmarksById(id);
	}
	
	@RequestMapping("updateBookmarksById")
	@ResponseBody
	public Msg updateBookmarksById(Bookmarks bookmarks)throws Exception{
		Msg msg = new Msg();
		if (bookmarksService.updateBookmarksById(bookmarks) == 1) {
			msg.setMsg("success");
		} else {
			msg.setMsg("error");
		}
		return msg;
	}
}
