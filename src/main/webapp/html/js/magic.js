/* my script */

//初始几个对话框
inst = new mdui.Dialog("#edit_bookmarks_dialog"); //编辑书签对话框
login_dialog=new mdui.Dialog("#user_login_dialog");//用户登录对话框
regist_dialog=new mdui.Dialog('#user_regist_dialog');//注册对话框

$(function(){
	init();
})

function init(){
					$.ajax({
								type : 'POST',
								url : '../selectBookmarks.action',
								data : {
									"user_id" : 'test'
								},
								dataType : 'json',
								success : function(data) {
									// alert(data);
									$.each(data,function(i, item) {
														// console.log(item.url);

														$('#bookmarks_list')
																.append(
																		"<div class=\"mdui-chip\"><a class=\"mdui-chip-title mdui-btn\" href="
																				+ item.url
																				+ ">"
																				+ item.name
																				+ "</a> <span id="
																				+ item.id
																				+ " class=\"mdui-chip-delete\"><i class=\"mdui-icon material-icons\">edit</i></span></div>");

													})
								},
								error : function(data) {
									alert(data);
								}

							});
}
				

/*$(document).ready(function(){
	$
	.ajax({
		type : 'POST',
		url : '../selectBookmarks.action',
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

								$('#bookmarks_list')
										.append(
												"<div class=\"mdui-chip\"><a class=\"mdui-chip-title mdui-btn\" href="
														+ item.url
														+ ">"
														+ item.name
														+ "</a> <span id="
														+ item.id
														+ " class=\"mdui-chip-delete\"><i class=\"mdui-icon material-icons\">edit</i></span></div>");

							})
		},
		error : function(data) {
			alert(data);
		}

	});
})*/
//管理员登录
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
$('#user_regist_btn_dialog').click(function(){
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
//--用户注册结束


/**
 * 用户登录 开始
 */
$('#user_login_btn_dialog').click(function() {
	login_dialog.open();
});
$('#login_btn').click(function(){
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
			if(data.msg=="error"){
				mdui.alert("用户名或者密码错误");
			}else{
				localStorage.setItem("*-@5679sdf",data.auth);
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
//-- 用户登录结束


/**
 * 添加书签
 */ 
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

														$('#bookmarks_list')
																.append(
																		"<div class=\"mdui-chip\"><a class=\"mdui-chip-title mdui-btn\" href="
																				+ item.url
																				+ ">"
																				+ item.name
																				+ "</a> <span id="
																				+ item.id
																				+ " class=\"mdui-chip-delete\"><i class=\"mdui-icon material-icons\">edit</i></span></div>");

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


// 修改书签
$('#bookmarks_list').on('click','span',(function(e) {
	$.ajax({
		type : 'POST',
		url : '../selectBookmarksById.action',
		data : {
			"id" :$(e.currentTarget)[0].id
		},
		dataType : 'json',
		success : function(data) {
			  $('#id').val($(e.currentTarget)[0].id)
			  $('#name').val(data.name); 
			  $('#url').val(data.url);
			  $('#description').val(data.description);
			 // alert( $('#state').prop('checked'))
			  if(data.state==1){
				  $('#state').prop('checked',true)
			  }
			  //var inst = new mdui.Dialog("#edit_bookmarks_dialog");
			 // console.log(inst.$dialog[0]); 
			  inst.open();
			  
			 
		},
		error : function(data) {
			//console.log($(e.currentTarget)[0].id)
			mdui.alert('服务器错误')
		}
	});

}))


$('#edit_bookmarks_btn').click(function(e) {
	
	//mdui.alert("修改成功");
	if ($('#state').prop('checked')) {
		state = 1;
	} else {
		state = 0;
	}
	$.ajax({
		type:'POST',
		url:'../updateBookmarksById.action',
		data:{
			"id":$('#id').val(),
			"name":$('#name').val(),
			"url":$('#url').val(),
			"description":$('#description').val(),
			"state":state
		},
		success:function(data){
			inst.close();
			mdui.alert('修改成功');
			//location.reload();
		},
		error:function(){
			mdui.alert('服务器错误')
		}
	});
	
});
$('#edit_bookmarks_btn1').click(function() {
	alert("名字:"+$('#name').val())
})

$('#test_btn').click(function() {
	window.location.href = 'http://www.baidu.com';
})
