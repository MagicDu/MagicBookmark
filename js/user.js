//用户登录
$('#login_btn').click(function() {
	$.ajax({
		type : 'POST',
		url : '../../userLogin.action',
		data : {
			"name" : $('#name').val(),
			"password" : $('#password').val()
		},
		dataType : 'json',
		success : function(data) {
			alert(data.name);
		},
		error : function() {
			mdui.alert("用户名或密码错误");
		}
	});
});