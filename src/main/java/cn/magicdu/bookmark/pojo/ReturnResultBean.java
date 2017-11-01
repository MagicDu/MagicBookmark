package cn.magicdu.bookmark.pojo;

import java.util.List;

public class ReturnResultBean {

	private String category_id;
	private String category_name;
	private List<Bookmarks> b_list;

	public String getCategory_id() {
		return category_id;
	}

	public void setCategory_id(String category_id) {
		this.category_id = category_id;
	}

	public String getCategory_name() {
		return category_name;
	}

	public void setCategory_name(String category_name) {
		this.category_name = category_name;
	}

	public List<Bookmarks> getB_list() {
		return b_list;
	}

	public void setB_list(List<Bookmarks> b_list) {
		this.b_list = b_list;
	}

}
