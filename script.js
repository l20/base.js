// window.onload = function (){
// 	Base.getId('box').css('color', 'red').css('backgroundColor', 'black').html('pox').click(function(){
// 		alert('a');
// 	});
// };
/*
window.onload = function(){
	//个人中心下拉菜单
	$().getClass('member').hover(function(){
			$(this).css('background', 'url(images/arrow2.png) no-repeat 55px center')
			$().getClass('member_ul').show();
	}, function(){
			$(this).css('background', 'url(images/arrow.png) no-repeat 55px center')
			$().getClass('member_ul').hide();
	});	


	//登录窗口
	var login = $().getId('login');
	var screen = $().getId('screen');
	login.center(350, 250);
	$().resize(function(){			//浏览器窗口事件
		login.center(350, 250);
		if (login.css('display') == 'black') {
			screen.lock();
		}
	});
	$().getClass('close').click(function(){
		login.center(350, 250);
		login.hide();			//隐藏登陆框
		screen.unlock();	//解除遮罩锁屏
	});
	$().getClass('login').click(function(){
		login.center(350, 250);
		login.show();		//显示登陆框
		screen.lock();	//遮罩锁屏
	});

	// 拖拽窗口
	// 流程：
	// 1.鼠标点下
	// 2.在点下的DIV被选中，进行move移动
	// 3.松开鼠标，停止移动

	// 用到的属性方法：
	// 1.onmousedown，鼠标按下
	// 2.onmousemove，鼠标移动
	// 3.onmousemup，鼠标松开
	login.drag([$().getTagName('h2').getElement(0)]);

	//浏览器检测实验代码
	// (function(){
	// 	window.sys = {};
	// 	var s;
	// 	var ua = navigator.userAgent.toLowerCase();
	// 	if ((/rv:([\d.]+)/).test(ua)) {
	// 		s = ua.match(/rv:([\d.]+)/);
	// 		sys.ie = s[1];
	// 	}
	// alert(ua);
	// })();
	// alert(sys.ie);

};
*/
	/*
	addEvent(document, 'DOMContentLoaded', function(){
		var test = document.getElementById('test');
		alert(test.innerHTML);
	});

*/
$(function() {
		//个人中心下拉菜单
	$('#header .member').hover(function(){
			$(this).css('background', 'url(images/arrow2.png) no-repeat 55px center')
			$('#header .member_ul').show().animate({
				t : 30,
				step : 10,
				mul: {
					o : 100,
					h : 110
				}
			});
	}, function(){
			$(this).css('background', 'url(images/arrow.png) no-repeat 55px center')
			$('#header .member_ul').animate({
				t : 30,
				step : 10,
				mul : {
					o : 0,
					h : 0
				},
				fn : function(){
					$('#header .member_ul').hide();
				}
			});
	});	

	
	//登录窗口
	var login = $('#login');
	//遮罩画布
	var screen = $('#screen');
	login.center(350, 250).resize(function () {
		if (login.css('display') == 'block') {
			screen.lock();
		}
	});
	$('#header .login').click(function () {
		login.center(350, 250).css('display', 'block');
		screen.lock().animate({
			attr : 'o',
			target : 30,
			t : 30,
			step : 10
		});
	});
	$('#login .close').click(function () {
		login.css('display', 'none');
		//先执行渐变动画，动画完毕后再执行关闭unlock
		screen.animate({
			attr : 'o',
			target : 0,
			t : 30,
			step : 10,
			fn : function () {
				screen.unlock();
			}
		});
	});

		//注册验证
	var reg = $('#reg');
	reg.center(600, 550).resize(function () {
		if (reg.css('display') == 'block') {
			screen.lock();
		}
	});
	$('#header .reg').click(function () {
		reg.center(600, 550).show();
		screen.lock().animate({
			attr : 'o',
			target : 30,
			t : 30,
			step : 10
		});
	});
	$('#reg .close').click(function () {
		reg.hide();
		screen.animate({
			attr : 'o',
			target : 0,
			t : 30,
			step : 10,
			fn : function () {
				screen.unlock();
			}
		});
	});	

	// 拖拽窗口
	login.drag($('#login h2').last());
	reg.drag($('#reg h2').last());

	//分享窗口
	$('#share').css('top', getScroll().top + (getInner().height - parseInt(getStyle($('#share')
		.first(),'height'))) / 2 + 'px');	//初始化位置

	addEvent(window, 'scroll', function(){
		$('#share').animate({
			attr : 'y',
			t : 10,
			target : getScroll().top + (getInner().height - parseInt(getStyle($('#share')
		.first(),'height'))) / 2 
		});
	});

	$('#share').hover(function(){			//收缩效果
		$(this).animate({
			attr : 'x',
			target : 0
		});
	}, function(){
		$(this).animate({
			attr : 'x',
			target: -211
		});
	})

	//导航条
	$('#nav .about li').hover(function(){
		var target = $(this).first().offsetLeft;   //动态获取鼠标所指导航条位置
		$('#nav .nav_bg').animate({		//导航条滑块动画
			attr : 'x',
			target: target + 20,	
			t : 30,
			step : 10,
			fn : function(){     //导航条白字体动画
				$('#nav .white').animate({
					attr : 'x',
					target : -target
				});
			}
		});

	}, function(){
		$('#nav .nav_bg').animate({
			attr: 'x',
			target : 20,
				t : 30,
				step : 10,
				fn : function(){
					$('#nav .white').animate({
						attr : 'x',
						target : 0
					});
				}
		});
	});

	//侧边信息栏
	$('#sidebar h2').toggle(function(){
		$(this).next().animate({
			t : 30,
			mul : {
				h : 0,
				o : 0
			}
		});
	}, function(){
		$(this).next().animate({
			t : 30,
			mul : {
				h : 150,
				o : 100
			}
		});


 });

	
	//表单用户名验证
	$('form').form('user').bind('focus', function () {
		$('#reg .info_user').show();                     //输入用户名提示
		$('#reg .error_user').hide();
		$('#reg .succ_user').hide();
	}).bind('blur', function () {
		if (trim($(this).value()) == '') {         //没有输入不提示
			$('#reg .info_user').hide();
			$('#reg .error_user').hide();
			$('#reg .succ_user').hide();
		} else if (!/[a-zA-Z0-9_]{2,20}/.test(trim($(this).value()))) {
			$('#reg .error_user').show();					//输入错误警告
			$('#reg .info_user').hide();
			$('#reg .succ_user').hide();
		} else {									//输入成功
			$('#reg .succ_user').show();
			$('#reg .error_user').hide();
			$('#reg .info_user').hide();
		}
	});
	
	$('form .submit').bind('click',function (){
		var flag = true;
		if (trim($('form').form('user').value()) == '') {
			$('#reg .error_user').show();
			flag = false;
		}	
		if (trim($('form').form('pass').value()) == ''){
			$('#reg .error_pass').show();
			flag = false;
		}
		if (trim($('form').form('ques').value()) == 0) {
			$('#reg .error_ques').show();	
			flag = false;
		}
		if (trim($('form').form('ans').value()) == '') {
			$('#reg .error_ans').show();	
			flag = false;
		}
		if (trim($('form').form('email').value()) == '') {
			$('#reg .error_email').show();		
			flag = false;
		}
		if (flag) {
			ajax({
				method: 'post',
				url   : 'demo.php',
				date  : $('form').eq(0).serialize(),
				success : function (text) {
					alert (text);
				},
				async : true
				});
		}
		//if (trim($('form').form('user').value()) {}
	});

	//表单密码验证

	$('form').form('pass').bind('focus', function() {
		$('#reg .info_pass').show();
		$('#reg .error_pass').hide();
		$('#reg .succ_pass').hide();
	}).bind('blur', function() {
		if (trim($(this).value()) == '') {   //若不输入任何字符则不提示
			$('#reg .info_pass').hide();
		}else {	
			 if (check_pass(this)) {				//若输入密码为合法则提示“可用”
				$('#reg .succ_pass').show();
				$('#reg .error_pass').hide();
				$('#reg .info_pass').hide();
			}else{
				$('#reg .error_pass').show();
				$('#reg .info_pass').hide();
				$('#reg .succ_pass').hide();
			}
		}
		
	});

	///密码强度验证
	$('form').form('pass').bind('keyup', function(){
		check_pass(this);
	});



	function check_pass(_this) {
		var value = trim($(_this).value());
		var value_length = value.length;
		var code_length = 0;
		var flag = false;
		
		//第一个必须条件的验证6-20位之间
		if (value_length >= 6 && value_length <= 20) {
			$('#reg .info_pass .q1').html('●').css('color', 'green');
		} else {
			$('#reg .info_pass .q1').html('○').css('color', '#666');
		}
		
		//第二个必须条件的验证，字母或数字或非空字符，任意一个即可
		if (value_length > 0 && !/\s/.test(value)) {
			$('#reg .info_pass .q2').html('●').css('color', 'green');
		} else {
			$('#reg .info_pass .q2').html('○').css('color', '#666');
		}
		
		//第三个必须条件的验证，大写字母，小写字母，数字，非空字符 任意两种混拼即可
		if (/[0-9]/.test(value)) {   //若输入有数字则+1
			code_length++;
		}
		
		if (/[a-z]/.test(value)) {	//若输入有小写字母说明为一种字符则+1
			code_length++;
		}
		
		if (/[A-Z]/.test(value)) {	//若输入有大写字母说明为一种字符则+1
			code_length++;
		}
		
		if (/[^0-9a-zA-Z]/.test(value)) { //若输入有非数字、大小写字母，说明是符号字符，为一种字符则+1
			code_length++;
		}
		
		if (code_length >= 2) {
			$('#reg .info_pass .q3').html('●').css('color', 'green');
		} else {
			$('#reg .info_pass .q3').html('○').css('color', '#666');
		}
		
		//安全级别
		//说明：必须从高级别往低级别判断，否则会判断不了
		if (value_length >= 10 && code_length >= 3) {		//密码长度大于等于10且字符种类大于等于3种说明为高安全级别
			$('#reg .info_pass .s1').css('color', 'green');
			$('#reg .info_pass .s2').css('color', 'green');
			$('#reg .info_pass .s3').css('color', 'green');
			$('#reg .info_pass .s4').html('高').css('color', 'green');
		} else if (value_length >= 8 && code_length >= 2) {		//密码长度大于等于8且字符种类大于等于2种说明为中安全级别
			$('#reg .info_pass .s1').css('color', '#f60');
			$('#reg .info_pass .s2').css('color', '#f60');
			$('#reg .info_pass .s3').css('color', '#ccc');
			$('#reg .info_pass .s4').html('中').css('color', '#f60');
		} else if (value_length >= 1) {							//密码长度大于等于1说明为低安全级别
			$('#reg .info_pass .s1').css('color', 'maroon');
			$('#reg .info_pass .s2').css('color', '#ccc');
			$('#reg .info_pass .s3').css('color', '#ccc');
			$('#reg .info_pass .s4').html('低').css('color', 'maroon');
		} else {												//没有输入不提示安全级别
			$('#reg .info_pass .s1').css('color', '#ccc');
			$('#reg .info_pass .s2').css('color', '#ccc');
			$('#reg .info_pass .s3').css('color', '#ccc');
			$('#reg .info_pass .s4').html(' ');
		}	
		
		//满足以上三种条件（密码长度、字母数字非空字符、安全级别大于中）
		if (value_length >= 6 && value_length <= 20 && !/\s/.test(value) && code_length >= 2) flag = true;
		
		return flag;
	}

	//确认密码

	$('form').form('notpass').bind('focus', function() {
		$('#reg .info_notpass').show();
		$('#reg .error_notpass').hide();
		$('#reg .succ_notpass').hide();
	}).bind('blur', function() {
		if (trim($(this).value()) == '') {   //若不输入任何字符则不提示
			$('#reg .info_notpass').hide();
		}else if (trim($(this).value()) == trim($('form').form('pass').value())) {				//若输入密码为合法则提示“可用”
			$('#reg .succ_notpass').show();
			$('#reg .error_notpass').hide();
			$('#reg .info_notpass').hide();
		}else{
			$('#reg .error_notpass').show();
			$('#reg .info_notpass').hide();
			$('#reg .succ_notpass').hide();
		}
	});

	//问题回答验证
	$('form').form('ans').bind('focus', function() {
		$('#reg .info_ans').show();
		$('#reg .error_ans').hide();
		$('#reg .succ_ans').hide();
	}).bind('blur', function() {
		if (trim($(this).value()) == '') {   //若不输入任何字符则不提示
			$('#reg .info_ans').hide();
		}else if (trim($(this).value().length) >= 2 && trim($(this).value().length) <= 32) {				//若输入密码为合法则提示“可用”
			$('#reg .succ_ans').show();
			$('#reg .error_ans').hide();
			$('#reg .info_ans').hide();
		}else{
			$('#reg .error_ans').show();
			$('#reg .info_ans').hide();
			$('#reg .succ_ans').hide();
		}
	});

	//电子邮件验证
	$('form').form('email').bind('focus', function() {
		if ($(this).value().indexOf('@') !== -1) {
			$('#reg .all_email').show();
		}
		$('#reg .info_email').show();
		$('#reg .error_email').hide();
		$('#reg .succ_email').hide();
	}).bind('blur', function() {
		$('#reg .all_email').hide();
		if (trim($(this).value()) == '') {   //若不输入任何字符则不提示
			$('#reg .info_email').hide();
		}else if (/^[0-9a-zA-Z_\-\.]+@[0-9a-zA-Z_\-]+(\.[a-zA-Z]{2,4}){1,2}$/.test(trim($(this).value()))) {				//若输入密码为合法则提示“可用”
			$('#reg .succ_email').show();
			$('#reg .error_email').hide();
			$('#reg .info_email').hide();
		}else{
			$('#reg .error_email').show();
			$('#reg .info_email').hide();
			$('#reg .succ_email').hide();
		}
	});

	//电子邮件补全
	$('form').form('email').bind('keyup', function() {
		if ($(this).value().indexOf('@') == -1) {
			//alert('-1');
			$('#reg .all_email').show();
			$('#reg .all_email li span').html($(this).value());
	 	}else{
	 		$('#reg .all_email').hide();
	 	}
	 	if (trim($(this).value()) == ''){
	 		$('#reg .all_email').hide();
	 	}
/*		//方向键盘选择
	 	$('#reg .all_email li').css('background', 'none');
		$('#reg .all_email li').css('color', '#666');

		if (event.keyCode == 40) {    //↓
			if (this.index == undefined || this.index >= $('#reg .all_email li').length() - 1) {
				this.index = 0;
			} else {
				this.index++;
			}
			$('#reg .all_email li').eq(this.index).css('background', '#e5edf2');
			$('#reg .all_email li').eq(this.index).css('color', '#369');
		}
		
		if (event.keyCode == 38) {		//↑
			if (this.index == undefined || this.index <= 0) {
				this.index = $('#reg .all_email li').length() - 1;
			} else {
				this.index--;
			}
			$('#reg .all_email li').eq(this.index).css('background', '#e5edf2');
			$('#reg .all_email li').eq(this.index).css('color', '#369');
		}
		
		
		if (event.keyCode == 13) {	// Enter
			$(this).value($('#reg .all_email li').eq(this.index).text());
			$('#reg .all_email').css('display', 'none');
			this.index = undefined;
		}
*/		
	})

	//电子邮件补全系统点击获取
	$('#reg .all_email li').bind('mousedown', function () {
		$('form').form('email').value($(this).text());
	});
	
	//电子邮件补全系统鼠标移入移出效果
	$('#reg .all_email li').hover(function () {
		$(this).css('background', '#e5edf2');
		$(this).css('color', '#369');
	}, function () {
		$(this).css('background', 'none');
		$(this).css('color', '#666');
	});
	
	//年月日
	var year = $('form').form('year');
	var month = $('form').form('month');
	var day = $('form').form('day');
	
	var day30 = [4, 6, 9, 11];
	var day31 = [1, 3, 5, 7, 8, 10, 12];
	
	//注入年
	for (var i = 1915; i <= 2015; i ++) {
		year.first().add(new Option(i, i), undefined);
	}
	
	//注入月
	
		if (year.value() !== 0) {
			for (var i = 1; i <= 12; i ++) {
				month.first().add(new Option(i, i), undefined);
			}
		}else if (year.value() == 0) {
			month.first().options.length = 1;
		}


	// $('form').form('ps').bind('click', function(){
	// 	alert(year.value());	
	// });
	
	
	year.bind('change', select_day);
	month.bind('change', select_day);
	

	function select_day() {

		if (year.value() != 0 && month.value() != 0) {
			
			//清理之前的注入
			day.first().options.length = 1;
			
			//不确定的日
			var cur_day = 0;
			
			//注入日
			if (inArray(day31, parseInt(month.value()))) {
				cur_day = 31;
			} else if (inArray(day30, parseInt(month.value()))) {
				cur_day = 30;
			} else {//闰年判断
				if ((parseInt(year.value()) % 4 == 0 && parseInt(year.value()) % 100 != 0) || parseInt(year.value()) % 400 == 0) {
					cur_day = 29;
				} else {
					cur_day = 28;
				}
			}
			
			for (var i = 1; i <= cur_day; i ++) {
				day.first().add(new Option(i, i), undefined);
			}
			
		} else {
			//清理之前的注入
			day.first().options.length = 1;
		}
	}

	//轮播器初始化	
	$('#banner img').hide();
	$('#banner img').eq(0).show();
	$('#banner ul li').eq(0).css('color', '#333');
	$('#banner strong').eq(0).html($('#banner img').eq(0).attr('alt'));

	var banner_count = 1; 	//轮播计数器
	
	//自动轮播器
	var banner_timer = setInterval(runInterval, 1000);

	//手动轮播器
	$('#banner ul li').hover(function(){
		clearInterval(banner_timer); //进入手动清理自动轮播
		$('#banner img').hide();
		$('#banner img').eq($(this).index()).show();
		$('#banner ul li').css('color', '#fff');
		$('#banner ul li').eq($(this).index()).css('color', '#333');
		$('#banner strong').html($('#banner img').eq($(this).index()).attr('alt'));
	}, function(){
		banner_timer = setInterval(runInterval, 1000);  //启动自动轮播
	});
	//鼠标处在图片区域停止自动轮播
	$('#banner img').hover(function(){
		clearInterval(banner_timer);
	}, function() {
		banner_timer = setInterval(runInterval, 1000);
	});



	//轮播函数
	function runInterval(banner_type) {
			if (banner_count > $('#banner ul li').length()) banner_count = 0;
			if (banner_count ==1 )
			{	
				$('#banner img').hide();	
				$('#banner img').eq(0).show();
				$('#banner ul li').eq(0).css('color', '#333');
				$('#banner ul li').eq(1).css('color', '#fff');
				$('#banner ul li').eq(2).css('color', '#fff');
				$('#banner strong').html($('#banner img').eq(0).attr('alt'));
			}else if (banner_count == 2)
			{
				$('#banner img').hide();
				$('#banner img').eq(1).show();
				$('#banner ul li').eq(0).css('color', '#fff');
				$('#banner ul li').eq(1).css('color', '#333');
				$('#banner ul li').eq(2).css('color', '#fff');
				$('#banner strong').html($('#banner img').eq(1).attr('alt'));
			}else if (banner_count == 3){
				$('#banner img').hide();
				$('#banner img').eq(2).show();
				$('#banner ul li').eq(0).css('color', '#fff');
				$('#banner ul li').eq(1).css('color', '#fff');
				$('#banner ul li').eq(2).css('color', '#333');
				$('#banner strong').html($('#banner img').eq(2).attr('alt'));
				banner_count = 0;
			}
			banner_count ++;
	}

	//图片预加载
	//alert($('.wait_load').eq(0).attr('xsrc'));
	//$('.wait_load').eq(0).attr('src', $('.wait_load').eq(0).attr('xsrc'));
	//alert(offsetTop($('.wait_load').last()));
	//alert(getInner().height + getScroll().top);

		
	var wait_load = $('.wait_load');
	wait_load.opacity(0);
	$(window).bind('scroll', _wait_load); //滚动条事件
	$(window).bind('resize', _wait_load); //浏览器窗口事件

	function _wait_load () {
		setTimeout(function () {
			for (var i = 0; i < wait_load.length(); i ++) {
				var _this = wait_load.ge(i);
				if (getInner().height + getScroll().top >= offsetTop(_this)) {  
					$(_this).attr('src', $(_this).attr('xsrc')).animate({
						attr : 'o',
						target : 100,
						t : 30,
						step : 10
					});
				}
			}
		}, 100);
	}

	//图片预加载
	var photo_big = $('#photo_big');
	//遮罩画布
	var screen = $('#screen');
	photo_big.center(610, 460).resize(function () {
		if (photo_big.css('display') == 'block') {
			screen.lock();
		}
	});
	$('#photo dl dt img').click(function () {  //点击相应的小图触发弹窗
		var _this = this
		photo_big.center(610, 460).show();
		screen.lock().animate({
			attr : 'o',
			target : 30,
			t : 30,
			step : 10
		});

		//大图加载弹窗
		var load_img = new Image();//创建临时区域图片对象
		$(load_img).bind('load', function() {  //后台加载图片完成之后再出发事件
			$('#photo_big .big img').attr('src', load_img.src)
			.animate({				//渐进透明效果
				attr : 'o',
				target : 100,
				t : 30,
				step : 10
			}).css('width', '600px').css('height', '450px').css('top', '0').opacity(0);
		});
		load_img.src = $(this).attr('bigsrc');  //若不放在后面执行IE会加载不了图片
		//图片预加载前一张和后一张
		var current = _this.parentNode.parentNode; //dl标签
		var curIdx = $(current).index();		 //当前节点下标
		var perv = prevIndex (curIdx, current); //上一节点下标
		var next = nextIndex (curIdx, current); //下一节点下标
		
		var prevImg = new Image();
		var nextImg = new Image();

		prevImg.src = $('#photo dl dt img').eq(perv).attr('bigsrc'); //属性值替换
		nextImg.src = $('#photo dl dt img').eq(next).attr('bigsrc');

		$('#photo_big .big strong').hover(function () {
			$(this).animate({
				attr : 'o',
				target :30,
				t : 30,
				step :10
			});
			
			$('#photo_big div .sl').click (function () {
				var _perv = 0;
				prenxtLoad (_perv);
			});
			$('#photo_big div .sr').click (function () {
				var _next = 1;
				prenxtLoad (_next);
			});
		},function () {
			$(this).animate({
				attr : 'o',
				target :0,
				t : 30,
				step :10
		});
	});
	$('#photo_big .big .index').html(curIdx + 1 + '/' + current.parentNode.children.length);

	//前后图片选择函数
	function prenxtLoad (type) {

		if (type == 0) { //上一张图片

			//在没有加载完毕时显示正在加载图片
			$('#photo_big .big img').attr('src', 'images/loading.gif').css('width', '32px').css('height', '32px').css('top', '190px');
		
			curIdx --;
			if (curIdx < 0) curIdx = 11;

			var current_img = new Image();
			//后台等待图片加载完毕
			$(current_img).bind('load', function () {
				$('#photo_big .big img').attr('src', current_img.src).animate({
					attr : 'o',
					target : 100,
					t : 30,
					step : 10
				}).opacity(0).css('width', '600px').css('height', '450px').css('top', 0);	
			});

			current_img.src = $('#photo dl dt img').eq(curIdx).attr('bigsrc');

		} else if (type == 1) {	//下一张图片

			//在没有加载完毕时显示正在加载图片
			$('#photo_big .big img').attr('src', 'images/loading.gif').css('width', '32px').css('height', '32px').css('top', '190px');	

			curIdx ++;
			if (curIdx == 12) curIdx = 0;

			var current_img = new Image();
			//后台等待图片加载完毕
			$(current_img).bind('load', function () {
				$('#photo_big .big img').attr('src', current_img.src).animate({
					attr : 'o',
					target : 100,
					t : 30,
					step : 10
				}).opacity(0).css('width', '600px').css('height', '450px').css('top', 0);	
			});

			current_img.src = $('#photo dl dt img').eq(curIdx).attr('bigsrc');
		}
		$('#photo_big .big .index').html(curIdx + 1 + '/' + current.parentNode.children.length);
		//预加载当前图片的前后两张图片
		var perv = prevIndex (curIdx, current); //上一节点下标
		var next = nextIndex (curIdx, current); //下一节点下标
		
		var prevImg = new Image();
		var nextImg = new Image();

		prevImg.src = $('#photo dl dt img').eq(perv).attr('bigsrc'); //属性值替换
		nextImg.src = $('#photo dl dt img').eq(next).attr('bigsrc');
	}
	});
	$('#photo_big .close').click(function () {  //图片弹窗关闭
		photo_big.hide();
		//先执行渐变动画，动画完毕后再执行关闭unlock
		screen.animate({
			attr : 'o',
			target : 0,
			t : 30,
			step : 10,
			fn : function () {
				screen.unlock();
			}
		});
	});
	photo_big.drag($('#photo_big h2').last());  //拖拽
	
	//
	//调用ajax
	/*	addEvent(document, 'click', function () {
			ajax({
				method : 'post',
				url : 'demo.php',
				data : {
					'name' : 'Lee',
					'age' : 100
				},
				success : function (text) {
					alert(text);
				},
				async : true
			});
		});*/

});

	

