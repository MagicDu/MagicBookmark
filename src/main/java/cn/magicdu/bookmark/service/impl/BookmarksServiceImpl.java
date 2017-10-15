package cn.magicdu.bookmark.service.impl;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;

import cn.magicdu.bookmark.mapper.BookmarksMapper;
import cn.magicdu.bookmark.pojo.Bookmarks;
import cn.magicdu.bookmark.pojo.BookmarksVo;
import cn.magicdu.bookmark.service.BookmarksService;
import cn.magicdu.bookmark.utils.UUIDUtils;

public class BookmarksServiceImpl implements BookmarksService {

	@Autowired
	private BookmarksMapper bookmarksMapper;
	
	public int addBookmark(Bookmarks bookmarks) throws Exception {
		bookmarks.setId(UUIDUtils.getUUID());
		bookmarks.setCategory_id("test");
		bookmarks.setUser_id("test");
		return bookmarksMapper.addBookmark(bookmarks);
	}
	
	public List<Bookmarks> selectBookmarks(String user_id) throws Exception {
		
		return bookmarksMapper.selectBookmarks(user_id);
	}
	
	public List<BookmarksVo> selectBookmarksVo(String user_id) throws Exception {
		return bookmarksMapper.selectBookmarksVo(user_id);
	}
	
	public Bookmarks selectBookmarksById(String id) {
		
		return bookmarksMapper.selectBookmarksById(id);
	}
	
	public int updateBookmarksById(Bookmarks bookmarks) {
		bookmarks.setCategory_id("test");
		bookmarks.setUser_id("test");
		return bookmarksMapper.updateBookmarksById(bookmarks);
	}

}
