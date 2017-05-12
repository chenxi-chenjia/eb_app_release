
// 头部渲染函数
var header='<div class="container">\
			<div class="row pc hidden-xs">\
				<a href="#" id="logo"></a>\
				<nav class="pull-right clearfix">\
					<div class="pull-left">\
						<a href="#">首页</a>\
					</div>\
					<div class="pull-left ">\
						<a href="#">产品介绍</a>\
					</div>\
					<div class="pull-left"><a href="#">下载源码</a></div>\
					<div class="pull-left"><a href="#">问答社区</a></div>\
					<div class="pull-left"><a href="#">功能列表</a></div>\
					<div class="pull-left"><a href="#">帮助手册</a></div>\
				</nav>\
			</div>\
			<div class="row mobile visible-xs-block">\
				<div class="col-sx-12 clearfix">\
					<a href="#" class="logo pull-left"></a>\
					<div class="button pull-right"></div>\
					<div class="slide-box">\
						<div class="mask"></div>\
						<div class="content-box clearfix">\
							<h4 class="slide-top">EB产品</h4>\
							<a href="#">\
								<h5>123456</h5>\
							</a>\
							<a href="#">\
								<h5>123456</h5>\
							</a>\
							<a href="#">\
								<h5>123456</h5>\
							</a>\
							<a href="#">\
								<h5>123456</h5>\
							</a>\
							<a href="#">\
								<h5>123456</h5>\
							</a>\
							<a href="#">\
								<h5>123456</h5>\
							</a>\
							<a href="#">\
								<h5>123456</h5>\
							</a>\
							<a href="#">\
								<h5>123456</h5>\
							</a>\
							<a href="#">\
								<h5>123456</h5>\
							</a>\
							<a href="#">\
								<h5>123456</h5>\
							</a>\
						</div>\
					</div>\
				</div>\
			</div>\
		</div>'
var header_mobile;
$('<header></header>').html(header).prependTo($('div#header'));




//移动端展开导航栏
var mobile_slide_flag=1;
$('header .mobile').on('click','.button',function(){
	if(mobile_slide_flag==1){
		mobile_slide_flag=0;
		$(this).addClass('show-slide');
		$(this).closest('.mobile').find('.slide-box').css('visibility','visible').find('.content-box').addClass('slide-down');
		setTimeout(function(){
			mobile_slide_flag=2;
		},1000)
	}else if(mobile_slide_flag==2){
		var self=this;
		mobile_slide_flag=0;
		$(this).removeClass('show-slide');
		$(this).closest('.mobile').find('.slide-box').find('.content-box').removeClass('slide-down');
		setTimeout(function(){
			$(self).closest('.mobile').find('.slide-box').css('visibility','hidden');
			mobile_slide_flag=1;
		},1000)
	}
})
$('header .mobile').on('click','.mask',function(){
	if(mobile_slide_flag==2){
		var self=this;
		mobile_slide_flag=0;
		$('header .mobile').find('.button').removeClass('show-slide');
		$(this).closest('.mobile').find('.slide-box').find('.content-box').removeClass('slide-down');
		setTimeout(function(){
			$(self).closest('.mobile').find('.slide-box').hide();
			mobile_slide_flag=1;
		},1000)
	}
	return false;
})


