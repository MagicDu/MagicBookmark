/* my script */

//初始几个对话框
inst = new mdui.Dialog("#edit_bookmarks_dialog"); // 编辑书签对话框
login_dialog = new mdui.Dialog("#user_login_dialog");// 用户登录对话框
regist_dialog = new mdui.Dialog('#user_regist_dialog');// 注册对话框
addbookmrak_dialog = new mdui.Dialog('#add_bookmarks_dialog');// 添加书签对话框
navbar = new mdui.Drawer('#drawer')
// var bm_list = "";

var selector = {

}
var options = {

}

$(function() {
	if (localStorage.getItem('*-@5679sdf') != null) {
		// divDisplay('#menubarwithlogin','display:none');
		init();
	} else {
		// divDisplay('#menubarwithbookmark','display:none');
		$('#menubarwithbookmark').hide();
	}
})

/**
 * 设置某个元素的css属性
 * 
 * @param id
 * @param css_str
 * @returns
 */
function divDisplay(id, css_str) {
	$(id).css(css_str);
}

/**
 * 页面初始化加载元素
 * 
 * @returns
 */
function init() {
	$('#menubarwithlogin').hide();
	$('#menubarwithbookmark').show();
	$.ajax({
		type : 'POST',
		url : '../selectUserBoomarks.action',
		data : {
			"user_id" : 'test'
		},
		success : function(data) {
			// bm_list = data;
			parseCategoryToDrawer(data);
		},
		error : function() {
			mdui.alert('服务器错误')
		}
	});
}

// 管理员登录
$('#admin_login_btn').click(function() {
	$.ajax({
		type : 'POST',
		url : '../../adminLogin.action',
		data : {
			"name" : $('#name').val(),
			"password" : $('#password').val()
		},
		dataType : 'json',
		success : function(data) {
			alert(data.name);
		},
		error : function() {
			alert("用户名或密码错误");
		}
	});
});

/**
 * 用户注册开始
 */
$('#user_regist_btn_dialog').click(function() {
	regist_dialog.open();
})
$("#regist_btn").click(function() {
	$.ajax({
		type : 'POST',
		url : '../addUser.action',
		data : {
			"username" : $('#username').val(),
			"email" : $('#email').val(),
			"password" : $('#password').val()
		},
		dataType : 'json',
		success : function(data) {
			// 处理对话框
			regist_dialog.close();
			mdui.alert('注册成功,请查收激活邮件');
		},
		error : function() {
			// 处理错误
			regist_dialog.close();
			mdui.alert('注册失败');
			// window.location.href='login.html';
		}
	});
})
// --用户注册结束

/**
 * 用户登录 开始
 */
$('#user_login_btn_dialog').click(function() {
	login_dialog.open();
});
$('#login_btn').click(function() {
	$.ajax({
		type : 'POST',
		url : '../userLogin.action',
		data : {
			"username" : $('#login_username').val(),
			"password" : $('#login_password').val()
		},
		dataType : 'json',
		success : function(data) {
			login_dialog.close();
			$('#login_username').val("");
			$('#login_password').val("");
			if (data.msg == "error") {
				mdui.alert("用户名或者密码错误");
			} else {
				localStorage.setItem("*-@5679sdf", data.auth);
				init();
			}
		},
		error : function() {
			login_dialog.close();
			$('#login_username').val("");
			$('#login_password').val("");
			mdui.alert("用户名或密码错误");

		}
	});
})
// -- 用户登录结束

/**
 * 添加书签
 */
$('#add_bookmark').click(function() {
	addbookmrak_dialog.open();
})

$('#add_bookmark_btn').click(function() {
	if ($('#state').prop('checked')) {
		state = 1;
	} else {
		state = 0;
	}
	$.ajax({
		type : 'POST',
		url : '../addBookmark.action',
		data : {
			"name" : $('#name').val(),
			"url" : $('#url').val(),
			"description" : $('#description').val(),
			"state" : state
		},
		dataType : 'json',
		success : function(data) {
			mdui.alert('添加成功');
			alert(data.msg);
		},
		error : function(data) {
			mdui.alert('添加失败');
			alert(data.msg);
		}
	})
})

// 修改书签
$('#bookmarks_list').on('click', 'span', (function(e) {
	$.ajax({
		type : 'POST',
		url : '../selectBookmarksById.action',
		data : {
			"id" : $(e.currentTarget)[0].id
		},
		dataType : 'json',
		success : function(data) {
			$('#b_id').val($(e.currentTarget)[0].id)
			$('#b_name').val(data.name);
			$('#b_url').val(data.url);
			$('#b_description').val(data.description);
			// alert( $('#state').prop('checked'))
			if (data.state == 1) {
				$('#b_state').prop('checked', true)
			}
			// var inst = new mdui.Dialog("#edit_bookmarks_dialog");
			// console.log(inst.$dialog[0]);
			inst.open();

		},
		error : function(data) {
			// console.log($(e.currentTarget)[0].id)
			mdui.alert('服务器错误')
		}
	});

}))

$('#edit_bookmarks_btn').click(function(e) {
	// mdui.alert("修改成功");
	if ($('#b_state').prop('checked')) {
		state = 1;
	} else {
		state = 0;
	}
	$.ajax({
		type : 'POST',
		url : '../updateBookmarksById.action',
		data : {
			"id" : $('#b_id').val(),
			"name" : $('#b_name').val(),
			"url" : $('#b_url').val(),
			"description" : $('#b_description').val(),
			"state" : state
		},
		success : function(data) {
			inst.close();
			mdui.alert('修改成功', function() {
				$('#bookmarks_list').html('');
				init();
			});

		},
		error : function() {
			mdui.alert('服务器错误')
		}
	});

});

// 测试数据专用
$('#test').click(function() {
	$.ajax({
		type : 'POST',
		url : '../selectUserBoomarks.action',
		data : {
			"user_id" : 'test'
		},
		success : function(data) {
			// mdui.alert(data.resultMap['test,计算机'][0].userid)
			// parseDataToView(data);
			// = data;
			parseCategoryToDrawer(data);
		},
		error : function() {
			mdui.alert('服务器错误')
		}
	});
});

/**
 * 解析页面菜单，需要判断是否登录呀
 * 
 * @param data
 * @returns
 */

var list_data;
function parseCategoryToDrawer(data) {
	list_data = data;
	var resultMap = data.resultMap;
	for ( var prop in resultMap) {
		var category = prop.split(',')[1];
		var categoryid = prop.split(',')[0];
		$('#boomarkcollapse')
				.append(
						"<span class='mdui-list-item mdui-ripple' id='"
								+ categoryid + "' onclick='loadData(event)'>"
								+ category + "</span>");
	}
}

/**
 * 单个卡片生成
 */
var div = "<div class='mdui-col-sm-4 mdui-col-md-2' style='margin-top: 10px'><div class='mdui-card'><div class='mdui-card-media'><img src='img/card.jpg'><a href='{0}'><div class='mdui-card-media-covered mdui-card-media-covered-transparent'><div class='mdui-card-primary'><div class='mdui-card-primary-title'>{1}</div><div class='mdui-card-primary-subtitle'>{2}</div> </div></div></a></div></div></div>"
function parseBm(bm) {
	divstr = div.format(bm.url, bm.name, bm.description);
	return divstr;
}

/**
 * 将书签数据解析为许多卡片
 * 
 * @param e
 * @returns
 */
function loadData(e) {
	$('#bmlist_container').empty()
	var str1 = e.target.id + ',' + e.target.innerText
	var resultMap = list_data.resultMap;
	var bmList = resultMap[str1];
	for (var i = 0; i < bmList.length; i++) {
		$('#bmlist_container').append(parseBm(bmList[i]));
	}
}

/**
 * 字符串占位符拼接
 */
String.prototype.format = function() {
	if (arguments.length == 0)
		return this;
	for (var s = this, i = 0; i < arguments.length; i++)
		s = s.replace(new RegExp("\\{" + i + "\\}", "g"), arguments[i]);
	return s;
};

/**
 * 暂时无用
 * 
 * @returns
 */
function StringFormat() {
	if (arguments.length == 0)
		return null;
	var str = arguments[0];
	for (var i = 1; i < arguments.length; i++) {
		var re = new RegExp('\\\\{' + (i - 1) + '\\\\}', 'gm');
		str = str.replace(re, arguments[i]);
	}
	return str;
}

/**
 * 生成对话框
 * @param title
 * @param options
 * @param event
 * @returns
 */
function createDialog(title,options,event) {
	
}

$('#edit_bookmarks_btn1').click(function() {
	alert("名字:" + $('#name').val())
})

$('#test_btn').click(function() {
	window.location.href = 'http://www.baidu.com';
})
