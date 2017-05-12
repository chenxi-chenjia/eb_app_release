var mySwiper1 = new Swiper('#pc .banner .swiper-container', {
	autoplay: 5000,
	loop:true,
	pagination : '.swiper-pagination',
	paginationClickable :true,
	prevButton:'#pc .banner .swiper-button-prev',
	nextButton:'#pc .banner .swiper-button-next',
	effect : 'fade',
	simulateTouch : false
})

var img_url='./Static/img/index/';
var data_arr=['yuelife','shiyi','zhengzhong','guosheng','aiqi','jian100','huanqiu','mifeng','tengchong']
var index_slide_data=[
	{
		bg_url:img_url+data_arr[0]+'_bg.png',
		icon_url:img_url+data_arr[0]+'_icon.png',
		qrcode_url:img_url+data_arr[0]+'_qrcode.png',
		h3:'悦生活',
		p:'品悦全球美酒'
	},{
		bg_url:img_url+data_arr[1]+'_bg.png',
		icon_url:img_url+data_arr[1]+'_icon.png',
		qrcode_url:img_url+data_arr[1]+'_qrcode.png',
		h3:'悦生活',
		p:'品悦全球美酒'
	},{
		bg_url:img_url+data_arr[2]+'_bg.png',
		icon_url:img_url+data_arr[2]+'_icon.png',
		qrcode_url:img_url+data_arr[2]+'_qrcode.png',
		h3:'悦生活',
		p:'品悦全球美酒'
	},{
		bg_url:img_url+data_arr[3]+'_bg.png',
		icon_url:img_url+data_arr[3]+'_icon.png',
		qrcode_url:img_url+data_arr[3]+'_qrcode.png',
		h3:'悦生活',
		p:'品悦全球美酒'
	},{
		bg_url:img_url+data_arr[4]+'_bg.png',
		icon_url:img_url+data_arr[4]+'_icon.png',
		qrcode_url:img_url+data_arr[4]+'_qrcode.png',
		h3:'悦生活',
		p:'品悦全球美酒'
	},{
		bg_url:img_url+data_arr[5]+'_bg.png',
		icon_url:img_url+data_arr[5]+'_icon.png',
		qrcode_url:img_url+data_arr[5]+'_qrcode.png',
		h3:'悦生活',
		p:'品悦全球美酒'
	},{
		bg_url:img_url+data_arr[6]+'_bg.png',
		icon_url:img_url+data_arr[6]+'_icon.png',
		qrcode_url:img_url+data_arr[6]+'_qrcode.png',
		h3:'悦生活',
		p:'品悦全球美酒'
	},{
		bg_url:img_url+data_arr[7]+'_bg.png',
		icon_url:img_url+data_arr[7]+'_icon.png',
		qrcode_url:img_url+data_arr[7]+'_qrcode.png',
		h3:'悦生活',
		p:'品悦全球美酒'
	},{
		bg_url:img_url+data_arr[8]+'_bg.png',
		icon_url:img_url+data_arr[8]+'_icon.png',
		qrcode_url:img_url+data_arr[8]+'_qrcode.png',
		h3:'悦生活',
		p:'品悦全球美酒'
	},
]
var el=index_slide_data.map(function(v,i){
	return(
		'<div class="swiper-slide col-md-3 col-sm-4" style="background-image:url('+v.bg_url+')">\
			<div class="mask">\
				<div class="icon" style="background-image:url('+v.icon_url+')"></div>\
				<div class="text">\
					<h3>'+v.h3+'</h3>\
					<p>'+v.p+'</p>\
				</div>\
				<div class="qrcode" style="background-image:url('+v.qrcode_url+')"></div>\
			</div>\
		</div>'
	)
})
$('#pc .floor_5').find('div.swiper-wrapper').html(el);
var mySwiper2 = new Swiper('#pc .floor_5 .swiper-container', {
	autoplay: 5000,
	loop:true,
	paginationClickable :true,
	prevButton:'.swiper-button-prev',
	nextButton:'.swiper-button-next',
	simulateTouch : false,
	slidesPerView : 'auto'
})

//底部数字转动
var pc_floor_6_top=$('#pc .floor_6').offset().top;
var window_screen_height=$(window).height();
$(window).scroll(function(){
	if($(window).scrollTop()+window_screen_height-200>=pc_floor_6_top){
		$('#pc .floor_6').find('.active').removeClass('active');
	}
})

// 回到顶部
$(window).scroll(function(){
	if($(window).scrollTop()>=100){
		$('#pc .fixed-box').find('li.back-top').css('visibility','visible');
	}else{
		$('#pc .fixed-box').find('li.back-top').css('visibility','hidden');
	}
})
$('#pc .fixed-box').find('li.back-top').on('click',function(){
	$('body,html').animate({'scrollTop':0});
})










///////////////////////////////////////////////////////mobile
var mySwiper3 = new Swiper('#mobile .banner .swiper-container', {
	autoplay: 5000,
	loop:true,
	pagination : '.swiper-pagination',
	paginationClickable :true,
	effect : 'silde',
	simulateTouch : true
})

//底部banner
var el=index_slide_data.map(function(v,i){
	return(
		'<div class="swiper-slide">\
			<img src="./Static/img/index/mob6-bg'+(i+1)+'.png" alt="" />\
			<div class="content-box">\
				<div class="icon" style="background-image:url('+v.icon_url+')"></div>\
				<div class="text">\
					<h3>'+v.h3+'</h3>\
					<p>'+v.p+'</p>\
					<a href="#">下载APP体验</a>\
				</div>\
			</div>\
		</div>'
	)
})

$('#mobile .floor_4').find('.swiper-wrapper').html(el);
// var mySwiper4 = new Swiper('#mobile .floor_4 .swiper-container', {
// 	autoplay: 5000,
// 	loop:true,
// 	paginationClickable :true,
// 	simulateTouch : true,
// 	slidesPerView : 'auto',
// 	pagination : '.swiper-pagination'
// })
