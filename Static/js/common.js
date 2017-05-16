
// 头部渲染函数
var header='<div class="container">\
			<div class="row pc hidden-xs">\
				<a href="#" class="logo"></a>\
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
$('header').html(header);




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



//////////////////////////////////////////////////////footer+fixed
var footer='<div class="pc hidden-xs">\
			<div class="footer-top">\
				<div class="container">\
				<div class="col-sm-3">\
					<h4>原生APP系统</h4>\
					<ul>\
						<li><a href="#">123132546</a></li>\
						<li><a href="#">123132546</a></li>\
						<li><a href="#">123132546</a></li>\
						<li><a href="#">123132546</a></li>\
						<li><a href="#">123132546</a></li>\
						<li><a href="#">123132546</a></li>\
					</ul>\
					<div class="line"></div>\
				</div>\
				<div class="col-sm-3">\
					<h4>原生APP系统</h4>\
					<ul>\
						<li><a href="#">123132546</a></li>\
						<li><a href="#">123132546</a></li>\
						<li><a href="#">123132546</a></li>\
						<li><a href="#">123132546</a></li>\
						<li><a href="#">123132546</a></li>\
					</ul>\
					<div class="line"></div>\
				</div>\
				<div class="col-sm-3">\
					<h4>原生APP系统</h4>\
					<ul>\
						<li><a href="#">123132546</a></li>\
						<li><a href="#">123132546</a></li>\
						<li><a href="#">123132546</a></li>\
						<li><a href="#">123132546</a></li>\
						<li><a href="#">123132546</a></li>\
						<li><a href="#">123132546</a></li>\
					</ul>\
					<div class="line"></div>\
				</div>\
				<div class="col-sm-3">\
					<h4>原生APP系统</h4>\
					<ul>\
						<li><a href="#">123132546</a></li>\
						<li><a href="#">123132546</a></li>\
						<li><a href="#">123132546</a></li>\
						<li><a href="#">123132546</a></li>\
						<li><a href="#">123132546</a></li>\
						<li><a href="#">123132546</a></li>\
					</ul>\
				</div>\
			</div>\
		</div>\
		<div class="container footer-bottom">\
			<div class="row">\
				<div class="col-lg-4 col-sm-6 l1">\
					<div class="icon-phone pull-left"></div>\
					<div class="font-box">\
						<h2>4001-021-758</h2>\
						<p>周一到周五 9：00-17：30</p>\
					</div>\
				</div>\
				<div class="col-lg-1 col-sm-2 l2">\
					<div class="icon-qq"></div>\
				</div>\
				<div class="l3">\
					<div class="icon-qrcode pull-right"></div>\
					<div class="font-box">\
						<p>\
							微信扫一扫\
							<br>\
							产品资讯一手掌握\
						</p>\
					</div>\
				</div>\
				<div class="col-lg-5 col-sm-12 l4">\
					<h5>\
						<a href="#">联系我们</a>|\
						<a href="#">公司简介</a>|\
						<a href="#">公司简介</a>|\
						<a href="#">公司简介</a>|\
						<a href="#">公司简介</a>|\
						<a href="#">公司简介</a>\
					</h5>\
					<p>Copyright © 2017 ECJia(ecjia.com) 版权所有，并保留所有权利。\
					<br>\
					常年法律顾问：上海华宏律师事务所 Tel: 4001-021-758　沪ICP备14029880号\
					</p>\
				</div>\
			</div>\
		</div>\
		<div class="fixed-box">\
			<ul>\
				<li class="qq">\
					<a href="#"></a>\
					<div class="qq-box fade-box">\
						<div class="fade-interbox">\
							<a href="#">\
								<div class="icon pull-left"><i></i></div>\
								<p class="pull-right">在线客服<br>点击交谈</p>\
							</a>\
						</div>\
					</div>\
				</li>\
				<li class="phone">\
					<div class="phone-box fade-box">\
						<div class="fade-interbox">\
							<p>服务热线</p>\
							<h4>1001-202-758</h4>\
						</div>\
					</div>\
				</li>\
				<li class="qrcode">\
					<div class="qrcode-box fade-box">\
						<div class="fade-interbox">\
							<div class="icon"></div>\
							<h6>扫一扫，微信关注模板堂</h6>\
						</div>\
					</div>\
				</li>\
				<li class="back-top"></li>\
			</ul>\
		</div>\
	</div>\
	<div class="mobile visible-xs">\
		<div class="footer-top">\
			<div class="slide-box">\
				<h5>原生APP系统</h5>\
				<div class="slide">\
					<ul>\
						<li><a href="#">123132546</a></li>\
						<li><a href="#">123132546</a></li>\
						<li><a href="#">123132546</a></li>\
						<li><a href="#">123132546</a></li>\
						<li><a href="#">123132546</a></li>\
						<li><a href="#">123132546</a></li>\
					</ul>\
				</div>\
			</div>\
			<div class="slide-box">\
				<h5>原生APP系统</h5>\
				<div class="slide">\
					<ul>\
						<li><a href="#">123132546</a></li>\
						<li><a href="#">123132546</a></li>\
						<li><a href="#">123132546</a></li>\
						<li><a href="#">123132546</a></li>\
						<li><a href="#">123132546</a></li>\
					</ul>\
				</div>\
			</div>\
			<div class="slide-box">\
				<h5>原生APP系统</h5>\
				<div class="slide">\
					<ul>\
						<li><a href="#">123132546</a></li>\
						<li><a href="#">123132546</a></li>\
						<li><a href="#">123132546</a></li>\
						<li><a href="#">123132546</a></li>\
						<li><a href="#">123132546</a></li>\
						<li><a href="#">123132546</a></li>\
					</ul>\
				</div>\
			</div>\
			<div class="slide-box">\
				<h5>原生APP系统</h5>\
				<div class="slide">\
					<ul>\
						<li><a href="#">123132546</a></li>\
						<li><a href="#">123132546</a></li>\
						<li><a href="#">123132546</a></li>\
						<li><a href="#">123132546</a></li>\
						<li><a href="#">123132546</a></li>\
						<li><a href="#">123132546</a></li>\
					</ul>\
				</div>\
			<div class="tel-box">\
				<a class="tel" href="tel:4001-021-758">咨询热线：4001-021-758</a>\
			</div>\
		</div>\
		<p class="footer-bottom">Copyright © 2017 ECJia(ecjia.com) 版权所有，并保留所有权利。\
		<br>\
		常年法律顾问：上海华宏律师事务所 Tel: 4001-021-758\
		<br>\
		沪ICP备14029880号\
		</p>\
		<div class="fixed-box">\
			<span></span>\
		</div>\
	</div>'
$('footer').html(footer);

// 回到顶部
$(window).scroll(function(){
	if($(window).scrollTop()>=100){
		$('footer').find('.pc .fixed-box').find('li.back-top').css('visibility','visible');
	}else{
		$('footer').find('.pc .fixed-box').find('li.back-top').css('visibility','hidden');
	}
})
$('footer').find('.pc .fixed-box').find('li.back-top').on('click',function(){
	$('body,html').animate({'scrollTop':0});
})
//回到顶部
$(window).scroll(function(){
	if($(window).scrollTop()>=100){
		$('footer').find('.mobile .fixed-box').css('visibility','visible');
	}else{
		$('footer').find('.mobile .fixed-box').css('visibility','hidden');
	}
})
$('footer').find('.mobile .fixed-box').on('touchend',function(){
	$('body,html').animate({'scrollTop':0});
})

//footer-silde 


$('footer').find('.mobile .footer-top').find('.slide-box').each(function(i,v){
	var slide_delay_arr=[];
	for(var  i=0;i<$(this).find('li').length;i++){
		slide_delay_arr.unshift(i*0.1);
	}
	$(v).find('li').each(function(i,v){
		$(v).css('transitionDelay',slide_delay_arr[i]+'s');
	})
	$(v).find('.slide').css('transition','all '+(slide_delay_arr[0]+0.5)+'s ease-in-out')
})

$('footer').find('.mobile .footer-top').on('click','h5',function(){
	var flag=$(this).closest('.slide-box').hasClass('slide-show');
	if(flag){
		$(this).closest('.slide-box').removeClass('slide-show');
		$(this).closest('.slide-box').find('.slide').css('height','0');
	}else{
		$(this).closest('.floor_5').find('.slide-show').find('.slide').css('height',0);
		$(this).closest('.floor_5').find('.slide-show').removeClass('slide-show');
		var height=$(this).closest('.slide-box').find('ul').outerHeight();
		$(this).closest('.slide-box').addClass('slide-show');
		$(this).closest('.slide-box').find('.slide').css('height',height);
	}
})
