$('#pc .tab-nav').on('mouseenter','li',function(){console.log(1)
	var index=$(this).index();
	if(!$(this).hasClass('show')){
		$(this).closest('ul').find('li.show').removeClass('show');
		$(this).addClass('show');
		$(this).closest('.row').find('.img-box').find('.show').removeClass('show').end().find('li').eq(index).addClass('show');
	}
	
})

//pc动画
var floor_data=new Array();
$('#pc').find('.common-floor').each(function(){
	floor_data.push($(this).offset().top)
})
var screen_height=$(window).height();
$('#pc .common-floor').find('h1,p,.button-box').addClass('animate').end().find('.img,.icon-box').addClass('animate');
$(window).scroll(function(){
	var win_top=$(window).scrollTop();
	floor_data.forEach(function(v,i){
		if(win_top+screen_height-300>v){
			$('#pc .common-floor').eq(i).find('.animate').removeClass('animate').end().find('h1,p,.button-box').addClass('animated').addClass('fadeInDown').end().find('.img,.icon-box').addClass('animated').addClass('fadeInUp')
		}
	})
})

/////////////////////////////////////////////////////////////mobile
var innter_box_height=$('#mobile .swiper-slide').eq(4).find('.innter-box').height();
$('#mobile .swiper-slide').eq(4).find('.innter-box').width(innter_box_height);
var mySwiper = new Swiper('#mobile .swiper-container', {
	autoplay: 0,//可选选项，自动滑动
	noSwiping:false,
	direction: 'vertical',
	pagination: '.swiper-pagination',
    paginationClickable: true,
    mousewheelControl : true,
    onSlideChangeStart:function(swiper){

    },
    onSlideChangeEnd:function(swiper){

    }
})	