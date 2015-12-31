
var heading_bg, top_bg;
var heading_bg_bottom, top_bg_bottom;
var heading_bgPosition_y = 67,
		top_bgPosition_y = 50;

$(document).ready(function(){
  console.log('ready');
  getElement();

  if (top_bg) {
  	// change_top_bg();
  };

  $('.bxslider').bxSlider();
});

function getElement() {
	heading_bg = document.getElementById('heading_bg');
	top_bg = document.getElementById('top_bg');

	if (heading_bg) {
		heading_bg_bottom = heading_bg.offsetTop + heading_bg.offsetHeight;	
	};
	if (top_bg) {
		top_bg_bottom = top_bg.offsetTop + top_bg.offsetHeight;
	};
}

window.onscroll = function(){
	var scrolled = $(this).scrollTop();

	if (scrolled >= 0 && scrolled < heading_bg_bottom && heading_bg) {
		var num = heading_bgPosition_y - 20*scrolled/heading_bg_bottom;
		heading_bg.style.backgroundPosition = "50%" + num + "%";
	};

	if (scrolled >= 0 && scrolled < top_bg_bottom && top_bg) {
		var num = top_bgPosition_y - 40*scrolled/top_bg_bottom;
		top_bg.style.backgroundPosition = "100%" + num + "%";
	};
}

// if文で書く
$('#blur_06').backgroundBlur({
    imageURL : 'img/work/ndge/thumb.jpg',
    blurAmount : 3,
    imageClass : 'bg-blur',
    endOpacity : 1.0
});


num = 1;

function change_top_bg () {
	setInterval(function(){
		if (num == 1) {
			num = 2;
		}
		else {
			num = 1;
		}
		// console.log(top_bg.style);
		var overlay = "linear-gradient(right, rgba(0,0,0,0.3),  rgba(0,0,0,0.3) ),";
		var image = "url(../img/bg_top0"+num+".jpg)";
		// console.log(overlay + image);
		top_bg.style.backgroundImage = image;
	}, 6000);
}





