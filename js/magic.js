/* my script */

// admin login
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

// 表单验证
$("#regist_btn").click(function() {
	$.ajax({
		type : 'POST',
		url : '../../addUser.action',
		data : {
			"username" : $('#username').val(),
			"email" : $('#email').val(),
			"password" : $('#password').val()
		},
		dataType : 'json',
		success : function(data) {
			// 处理对话框
			mdui.alert('注册成功,请查收激活邮件');
		},
		error : function() {
			// 处理错误
			mdui.alert('注册失败');
			// window.location.href='login.html';
		}
	});
})

// 添加书签
$('#add_bookmark_btn').click(function() {
	if ($('#state').prop('checked')) {
		state = 1;
	} else {
		state = 0;
	}
	$.ajax({
		type : 'POST',
		url : '../../addBookmark.action',
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
$('#selectBookmarks')
		.click(
				function() {
					$
							.ajax({
								type : 'POST',
								url : '../../selectBookmarks.action',
								data : {
									"user_id" : 'test'
								},
								dataType : 'json',
								success : function(data) {
									// alert(data);
									$
											.each(
													data,
													function(i, item) {
														// console.log(item.url);

														$('#test_button')
																.append(
																		"<div class=\"mdui-chip\"><a class=\"mdui-chip-title mdui-btn\" href="
																				+ item.url
																				+ ">"
																				+ item.name
																				+ "</a> <span class=\"mdui-chip-delete\"><i class=\"mdui-icon material-icons\">edit</i></span></div>");

													})
								},
								error : function(data) {
									alert(data);
								}

							});
				})

$('#selectBookmarksVo').click(function() {
	$.ajax({
		type : 'POST',
		url : '../../selectBookmarksVo.action',
		data : {
			"user_id" : 'test'
		},
		dataType : 'json',
		success : function(data) {
			// alert(data);
			$.each(data, function(i, item) {
				// console.log(item.url);
				// console.log(item.category.name);
				// $('#test').append("<a
				// href="+item.url+">"+item.name+"</a></br>");
				
			})
		},
		error : function(data) {
			alert(data);
		}

	});
})

$('#edit_bookmarks').click(function(){
	
});
$('#test_btn').click(function() {
	window.location.href = 'http://www.baidu.com';
})
