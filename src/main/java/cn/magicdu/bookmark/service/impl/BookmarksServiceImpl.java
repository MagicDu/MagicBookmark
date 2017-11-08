package cn.magicdu.bookmark.service.impl;

import java.util.ArrayList;
import java.util.HashMap;
import java.util.List;
import java.util.Map;

import org.springframework.beans.factory.annotation.Autowired;

import cn.magicdu.bookmark.mapper.BookmarksMapper;
import cn.magicdu.bookmark.pojo.Bookmarks;
import cn.magicdu.bookmark.pojo.BookmarksVo;
import cn.magicdu.bookmark.pojo.UserAndBookmarks;
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

	/*
	 * public List <BookmarksVo> selectUserBookmarksById(String user_id){ return
	 * bookmarksMapper.selectInfoByIdAndCe(user_id); }
	 */

	/**
	 * 查询用户书签
	 */
	public Map<String, List<Object>> selectUserBookmarksById(String user_id) {
		List<BookmarksVo> bml = bookmarksMapper.selectInfoByIdAndCe(user_id);
		Map<String, List<Object>> resultMap = new HashMap<String, List<Object>>();
		
		for (BookmarksVo bmv: bml) {

				String categoryStr = bmv.getCategoryid() + "," + bmv.getCategoryname();
				UserAndBookmarks uab = new UserAndBookmarks();
				uab.setUserid(bmv.getUserid());
				uab.setUsername(bmv.getUsername());
				uab.setName(bmv.getName());
				uab.setUrl(bmv.getUrl());
				uab.setDescription(bmv.getDescription());
				uab.setState(bmv.getState());
				uab.setId(bmv.getId());
				List<Object> bmList=resultMap.get(categoryStr);
				if(bmList==null){
					bmList = new ArrayList<Object>();
				}
				bmList.add(uab);
				resultMap.put(categoryStr, bmList);		
			}
		return resultMap;
	}
}
