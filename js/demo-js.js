$(document).ready(function(){
    
	$("html").niceScroll({
		cursorcolor : '#a71e2b',
		cursorborder : 0,
		zindex : 99999,
	});

	//点击左边导航
	var imgs = ["bg-homepage","bg-about","bg-gallery","bg-services","bg-contact"]
	var pages = ["menu-content","about-content","gallery-content","services-content","touch-content"]
	$(".main_menu li a").click(function(){
		var id = $(this).attr('class');
		id = id.split('-');
		$(".bg-image").fadeOut('slow', function(){
			$(this).css({
				'background-image' : 'url(images/'+imgs[id[1]-1]+'.jpg)',
			}).fadeIn('slow');
		});
		id[1]-1 == 0 ? $('#'+pages[id[1]-1]).show().siblings().hide() : $('#'+pages[id[1]-1]).slideDown(600).siblings().hide()
		return false;
	});
	
	
	
//	$(".main_menu .show-1").click(function(){
//		$(".bg-image").fadeOut('slow', function(){
//			$(this).css({
//				'background-image' : 'url(images/bg-homepage.jpg)',
//			}).fadeIn('slow');
//		});
//		$('#menu-content').show().siblings().hide()
//		return false;
//	});
//	$(".main_menu .show-2").click(function(){
//		$(".bg-image").fadeOut('slow', function(){
//			$(this).css({
//				'background-image' : 'url(images/bg-about.jpg)',
//			}).fadeIn('slow');
//		});
//		$('#about-content').slideDown(600).siblings().hide()
//		return false;
//	});
//	$(".main_menu .show-3").click(function(){
//		$(".bg-image").fadeOut('slow', function(){
//			$(this).css({
//				'background-image' : 'url(images/bg-gallery.jpg)',
//			}).fadeIn('slow');
//		});
//		return false;
//	});
//	$(".main_menu .show-4").click(function(){
//		$(".bg-image").fadeOut('slow', function(){
//			$(this).css({
//				'background-image' : 'url(images/bg-services.jpg)',
//			}).fadeIn('slow');
//		});
//		return false;
//	});
//	$(".main_menu .show-5").click(function(){
//		$(".bg-image").fadeOut('slow', function(){
//			$(this).css({
//				'background-image' : 'url(images/bg-contact.jpg)',
//			}).fadeIn('slow');
//		});
//		return false;
//	});
	$('.menu li a').hover(function(){
		$(this).siblings('p').fadeIn(200)
	},function(){
		$(this).siblings('p').fadeOut(300)
	})
	
	
	
	
	//首页右边效果
	$('.menuItem').hover(function(){
		$(this).children('.mask').fadeIn(200)
	},function(){
		$(this).children('.mask').fadeOut(200)
	})
	
//	$('.gallery-thumb').hover(function(){
//		$(this).children('.overlay-g').fadeIn(100)
//	},function(){
//		$(this).children('.overlay-g').fadeOut(100)
//	})
	
	
	/************** LightBox *********************/
	$(function(){
		$('.mask a').lightbox();
		$('.overlay-g a').lightbox();
	});
	
	/************** Open Filters on gallery page *********************/
	$(".toggle-filter").click(function(){
		$(".filter-controls").slideToggle();
		return false;
	});
	
	/************** MixItUp Plugin *********************/
	$('#grid').mixitup({
        effects: ['fade','grayscale'],
        easing: 'snap',
        transitionSpeed: 800
    });
//	var mixer = mixitup($('#grid'));

	$('.service .header').hover(function(){
		$(this).children('.header-bg').animate({'width':'100%'});
		$(this).children('.service-header').children('h4').addClass('active')
	},function(){
		$(this).children('.header-bg').animate({'width':'60px'}).siblings().children('h4').removeClass('active');
	})
	/********************Map**************************/
	// 百度地图API功能
	var map = new BMap.Map("map-canvas");    // 创建Map实例
	map.centerAndZoom(new BMap.Point(116.404, 39.915), 11);  // 初始化地图,设置中心点坐标和地图级别
	//添加地图类型控件
	map.addControl(new BMap.MapTypeControl({
		mapTypes:[
            BMAP_NORMAL_MAP,
            BMAP_HYBRID_MAP
        ]}));	  
	map.setCurrentCity("北京");          // 设置地图显示的城市 此项是必须设置的
	map.enableScrollWheelZoom(true);
	//根据浏览器位置定位
	var geolocation = new BMap.Geolocation();
	geolocation.getCurrentPosition(function(r){
		if(this.getStatus() == BMAP_STATUS_SUCCESS){
			var mk = new BMap.Marker(r.point);
			map.addOverlay(mk);
			map.panTo(r.point);
//			alert('您的位置：'+r.point.lng+','+r.point.lat);
		}
		else {
			alert('failed'+this.getStatus());
		}        
	});
	//
	// 百度地图API功能
	map.centerAndZoom(new BMap.Point(116.4035,39.915),8); 
	setTimeout(function(){
		map.setZoom(14);  
	},2000)//2秒后放大到14级
	map.enableScrollWheelZoom(true)
})