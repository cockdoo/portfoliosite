
var heading_bg, top_bg;
var heading_bg_bottom, top_bg_bottom;
var heading_bgPosition_y = 80,
		top_bgPosition_y = 60;

$(document).ready(function(){
  console.log('ready');
  getElement();

  if (top_bg) {
  	// change_top_bg();
  };

  $('#menu').slicknav();

  // setBlur(location.href);
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
		var num = heading_bgPosition_y - 50*scrolled/heading_bg_bottom;
		heading_bg.style.backgroundPosition = "50%" + num + "%";
	};

	if (scrolled >= 0 && scrolled < top_bg_bottom && top_bg) {
		var num = top_bgPosition_y - 50*scrolled/top_bg_bottom;
		top_bg.style.backgroundPosition = "50%" + num + "%";
	};
}

var resizeTimer;
var interval = Math.floor(1000 / 60 * 10);
 
window.addEventListener('resize', function (event) {
  console.log('resizing');
  if (resizeTimer !== false) {
    clearTimeout(resizeTimer);
  }
  resizeTimer = setTimeout(function () {
    console.log('resized');
    // setBlur(location.href);
  }, interval);
});


// if文で書く
function setBlur (url) {
	console.log();

	var u = "img/works/";
	if (url.substr(url.length - 6, 6) == "works/" || url.substr(url.length - 6, 6) == "/works") {
		u = "../img/works/";
	};

	$('#blur_petapeta').backgroundBlur({
    imageURL : u+'petapeta/thumb.jpg',
    blurAmount : 1,
    imageClass : 'bg-blur',
    endOpacity : 1.0
	});
	$('#blur_mybousainote').backgroundBlur({
    imageURL : u+'mybousainote/thumb.jpg',
    blurAmount : 1,
    imageClass : 'bg-blur',
    endOpacity : 1.0
	});
	$('#blur_clanberry').backgroundBlur({
    imageURL : u+'clanberry/thumb.jpg',
    blurAmount : 1,
    imageClass : 'bg-blur',
    endOpacity : 1.0
	});Opacity : 1.0
	$('#blur_iage').backgroundBlur({
    imageURL : u+'iage/thumb.jpg',
    blurAmount : 1,
    imageClass : 'bg-blur',
    endOpacity : 1.0
	});
	$('#blur_roadscape').backgroundBlur({
    imageURL : u+'roadscape/thumb.jpg',
    blurAmount : 1,
    imageClass : 'bg-blur',
    endOpacity : 1.0
	});
	$('#blur_ndge').backgroundBlur({
    imageURL : u+'ndge/thumb.jpg',
    blurAmount : 1,
    imageClass : 'bg-blur',
    endOpacity : 1.0
	});
	$('#blur_elecafe').backgroundBlur({
    imageURL : u+'elecafe/thumb.jpg',
    blurAmount : 1,
    imageClass : 'bg-blur',
    endOpacity : 1.0
	});
	$('#blur_cansatmapping').backgroundBlur({
    imageURL : u+'cansatmapping/thumb.jpg',
    blurAmount : 0,
    imageClass : 'bg-blur',
    endOpacity : 1.0
	});
	$('#blur_chu2').backgroundBlur({
    imageURL : u+'chu2/thumb.jpg',
    blurAmount : 1,
    imageClass : 'bg-blur',
    endOpacity : 1.0
	});
	$('#blur_cm2').backgroundBlur({
    imageURL : u+'cm2/thumb.jpg',
    blurAmount : 1,
    imageClass : 'bg-blur',
    endOpacity : 1.0
	});
}



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





