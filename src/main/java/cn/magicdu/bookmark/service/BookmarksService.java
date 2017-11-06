package cn.magicdu.bookmark.service;

import java.util.List;
import java.util.Map;

import cn.magicdu.bookmark.pojo.Bookmarks;
import cn.magicdu.bookmark.pojo.BookmarksVo;

public interface BookmarksService {
	/**
	 * 添加书签
	 * 
	 * @param bookmarks
	 * @return
	 * @throws Exception
	 */
	public int addBookmark(Bookmarks bookmarks) throws Exception;
	/**
	 * 根据用户id查询用户书签
	 * @param user_id
	 * @return
	 * @throws Exception
	 */
	public List<Bookmarks> selectBookmarks(String user_id) throws Exception;
	/**
	 * 根据用户id查询书签
	 * @param user_id
	 * @return
	 * @throws Exception
	 */
	public List<BookmarksVo> selectBookmarksVo(String user_id) throws Exception;
	/**
	 * 根据书签id查询书签
	 * @param id
	 * @return 
	 */
	public Bookmarks selectBookmarksById(String id);
	/**
	 * 
	 * @param bookmarks
	 * @return
	 */
	public int updateBookmarksById(Bookmarks bookmarks);
	
	
	public Map<String, List<Object>> selectUserBookmarksById(String user_id);
	
}
