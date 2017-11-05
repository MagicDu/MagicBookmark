package cn.magicdu.bookmark.mapper;

import java.util.List;

import cn.magicdu.bookmark.pojo.Bookmarks;
import cn.magicdu.bookmark.pojo.BookmarksVo;

public interface BookmarksMapper {
	/**
	 * 添加书签
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
	public List<Bookmarks> selectBookmarks (String user_id) throws Exception;

	/**
	 * 根据用户id查询书签
	 * @param user_id
	 * @return
	 */
	public List<BookmarksVo> selectBookmarksVo(String user_id);

	/**
	 * 根据书签id查询书签
	 * @param id
	 * @return
	 */
	public Bookmarks selectBookmarksById(String id);

	/**
	 * 修改书签
	 * @param bookmarks
	 * @return
	 */
	public int updateBookmarksById(Bookmarks bookmarks);
	
	/**
	 * 查询用户书签
	 */
	
	public List<BookmarksVo> selectInfoByIdAndCe(String user_id);
}
