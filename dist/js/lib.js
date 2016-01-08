!function(t){"use strict";function e(e){return this.each(function(){var i=t(this),n=i.data("plugin.backgroundBlur"),s=t.extend({},o.DEFAULTS,i.data(),"object"==typeof e&&e);n||i.data("plugin.backgroundBlur",n=new o(this,s)),"fadeIn"===e?n.fadeIn():"fadeOut"===e?n.fadeOut():"string"==typeof e&&n.generateBlurredImage(e)})}var i=function(){for(var t,e=3,i=document.createElement("div"),n=i.getElementsByTagName("i");i.innerHTML="<!--[if gt IE "+ ++e+"]><i></i><![endif]-->",n[0];);return e>4?e:t}(),n=function(){return"_"+Math.random().toString(36).substr(2,9)},s={svgns:"http://www.w3.org/2000/svg",xlink:"http://www.w3.org/1999/xlink",createElement:function(t,e){var i=document.createElementNS(s.svgns,t);return e&&s.setAttr(i,e),i},setAttr:function(t,e){for(var i in e)"href"===i?t.setAttributeNS(s.xlink,i,e[i]):t.setAttribute(i,e[i]);return t}},o=function(e,i){this.internalID=n(),this.$element=t(e),this.$width=this.$element.width(),this.$height=this.$element.height(),this.element=e,this.options=t.extend({},o.DEFAULTS,i),this.$overlayEl=this.createOverlay(),this.$blurredImage={},this.useVelocity=this.detectVelocity(),this.attachListeners(),this.generateBlurredImage(this.options.imageURL)};o.VERSION="0.0.1",o.DEFAULTS={imageURL:"",blurAmount:10,imageClass:"",overlayClass:"",duration:!1,opacity:1},o.prototype.detectVelocity=function(){return!!window.jQuery.Velocity},o.prototype.attachListeners=function(){this.$element.on("ui.blur.loaded",t.proxy(this.fadeIn,this)),this.$element.on("ui.blur.unload",t.proxy(this.fadeOut,this))},o.prototype.fadeIn=function(){this.options.duration&&this.options.duration>0&&(this.useVelocity?this.$blurredImage.velocity({opacity:this.options.opacity},{duration:this.options.duration}):this.$blurredImage.animate({opacity:this.options.opacity},{duration:this.options.duration}))},o.prototype.fadeOut=function(){this.options.duration&&this.options.duration>0?this.useVelocity?this.$blurredImage.velocity({opacity:0},{duration:this.options.duration}):this.$blurredImage.animate({opacity:0},{duration:this.options.duration}):this.$blurredImage.css({opacity:0})},o.prototype.generateBlurredImage=function(t){var e=this.$blurredImage;this.internalID=n(),e.length>0&&(this.options.duration&&this.options.duration>0?this.useVelocity?e.first().velocity({opacity:0},{duration:this.options.duration,complete:function(){e.remove()}}):e.first().animate({opacity:0},{duration:this.options.duration,complete:function(){e.remove()}}):e.remove()),i?this.$blurredImage=this.createIMG(t,this.$width,this.$height):this.$blurredImage=this.createSVG(t,this.$width,this.$height)},o.prototype.createOverlay=function(){return this.options.overlayClass&&""!==this.options.overlayClass?t("<div></div>").prependTo(this.$element).addClass(this.options.overlayClass):!1},o.prototype.createSVG=function(e,i,n){var o=this,a=s.createElement("svg",{xmlns:s.svgns,version:"1.1",width:i,height:n,id:"blurred"+this.internalID,"class":this.options.imageClass,viewBox:"0 0 "+i+" "+n,preserveAspectRatio:"none"}),r="blur"+this.internalID,l=s.createElement("filter",{id:r}),d=s.createElement("feGaussianBlur",{"in":"SourceGraphic",stdDeviation:this.options.blurAmount}),c=s.createElement("image",{x:0,y:0,width:i,height:n,externalResourcesRequired:"true",href:e,style:"filter:url(#"+r+")",preserveAspectRatio:"none"});c.addEventListener("load",function(){o.$element.trigger("ui.blur.loaded")},!0),c.addEventListener("SVGLoad",function(){o.$element.trigger("ui.blur.loaded")},!0),l.appendChild(d),a.appendChild(l),a.appendChild(c);var g=t(a);return o.options.duration&&o.options.duration>0&&(g.css({opacity:0}),window.setTimeout(function(){"0"===g.css("opacity")&&g.css({opacity:1})},this.options.duration+100)),this.element.insertBefore(a,this.element.firstChild),g},o.prototype.createIMG=function(t,e,i){var n=this,s=this.prependImage(t),o=2*this.options.blurAmount>100?100:2*this.options.blurAmount;return s.css({filter:"progid:DXImageTransform.Microsoft.Blur(pixelradius="+o+") ",top:2.5*-this.options.blurAmount,left:2.5*-this.options.blurAmount,width:e+2.5*this.options.blurAmount,height:i+2.5*this.options.blurAmount}).attr("id","blurred"+this.internalID),s.load(function(){n.$element.trigger("ui.blur.loaded")}),this.options.duration&&this.options.duration>0&&window.setTimeout(function(){"0"===s.css("opacity")&&s.css({opacity:1})},this.options.duration+100),s},o.prototype.prependImage=function(e){var i,n=t('<img src="'+e+'" />');return i=this.$overlayEl?n.insertBefore(this.$overlayEl).attr("id",this.internalID).addClass(this.options.imageClass):n.prependTo(this.$element).attr("id",this.internalID).addClass(this.options.imageClass)};var a=t.fn.backgroundBlur;t.fn.backgroundBlur=e,t.fn.backgroundBlur.Constructor=o,t.fn.backgroundBlur.noConflict=function(){return t.fn.backgroundBlur=a,this}}(jQuery),function(t){var e={},n={mode:"horizontal",slideSelector:"",infiniteLoop:!0,hideControlOnEnd:!1,speed:500,easing:null,slideMargin:0,startSlide:0,randomStart:!1,captions:!1,ticker:!1,tickerHover:!1,adaptiveHeight:!1,adaptiveHeightSpeed:500,video:!1,useCSS:!0,preloadImages:"visible",responsive:!0,slideZIndex:50,wrapperClass:"bx-wrapper",touchEnabled:!0,swipeThreshold:50,oneToOneTouch:!0,preventDefaultSwipeX:!0,preventDefaultSwipeY:!1,pager:!0,pagerType:"full",pagerShortSeparator:" / ",pagerSelector:null,buildPager:null,pagerCustom:null,controls:!0,nextText:"Next",prevText:"Prev",nextSelector:null,prevSelector:null,autoControls:!1,startText:"Start",stopText:"Stop",autoControlsCombine:!1,autoControlsSelector:null,auto:!1,pause:4e3,autoStart:!0,autoDirection:"next",autoHover:!1,autoDelay:0,autoSlideForOnePage:!1,minSlides:1,maxSlides:1,moveSlides:0,slideWidth:0,onSliderLoad:function(){},onSlideBefore:function(){},onSlideAfter:function(){},onSlideNext:function(){},onSlidePrev:function(){},onSliderResize:function(){}};t.fn.bxSlider=function(s){if(0==this.length)return this;if(this.length>1)return this.each(function(){t(this).bxSlider(s)}),this;var o={},a=this;e.el=this;var r=t(window).width(),l=t(window).height(),d=function(){o.settings=t.extend({},n,s),o.settings.slideWidth=parseInt(o.settings.slideWidth),o.children=a.children(o.settings.slideSelector),o.children.length<o.settings.minSlides&&(o.settings.minSlides=o.children.length),o.children.length<o.settings.maxSlides&&(o.settings.maxSlides=o.children.length),o.settings.randomStart&&(o.settings.startSlide=Math.floor(Math.random()*o.children.length)),o.active={index:o.settings.startSlide},o.carousel=o.settings.minSlides>1||o.settings.maxSlides>1,o.carousel&&(o.settings.preloadImages="all"),o.minThreshold=o.settings.minSlides*o.settings.slideWidth+(o.settings.minSlides-1)*o.settings.slideMargin,o.maxThreshold=o.settings.maxSlides*o.settings.slideWidth+(o.settings.maxSlides-1)*o.settings.slideMargin,o.working=!1,o.controls={},o.interval=null,o.animProp="vertical"==o.settings.mode?"top":"left",o.usingCSS=o.settings.useCSS&&"fade"!=o.settings.mode&&function(){var t=document.createElement("div"),e=["WebkitPerspective","MozPerspective","OPerspective","msPerspective"];for(var i in e)if(void 0!==t.style[e[i]])return o.cssPrefix=e[i].replace("Perspective","").toLowerCase(),o.animProp="-"+o.cssPrefix+"-transform",!0;return!1}(),"vertical"==o.settings.mode&&(o.settings.maxSlides=o.settings.minSlides),a.data("origStyle",a.attr("style")),a.children(o.settings.slideSelector).each(function(){t(this).data("origStyle",t(this).attr("style"))}),c()},c=function(){a.wrap('<div class="'+o.settings.wrapperClass+'"><div class="bx-viewport"></div></div>'),o.viewport=a.parent(),o.loader=t('<div class="bx-loading" />'),o.viewport.prepend(o.loader),a.css({width:"horizontal"==o.settings.mode?100*o.children.length+215+"%":"auto",position:"relative"}),o.usingCSS&&o.settings.easing?a.css("-"+o.cssPrefix+"-transition-timing-function",o.settings.easing):o.settings.easing||(o.settings.easing="swing");f();o.viewport.css({width:"100%",overflow:"hidden",position:"relative"}),o.viewport.parent().css({maxWidth:h()}),o.settings.pager||o.viewport.parent().css({margin:"0 auto 0px"}),o.children.css({"float":"horizontal"==o.settings.mode?"left":"none",listStyle:"none",position:"relative"}),o.children.css("width",v()),"horizontal"==o.settings.mode&&o.settings.slideMargin>0&&o.children.css("marginRight",o.settings.slideMargin),"vertical"==o.settings.mode&&o.settings.slideMargin>0&&o.children.css("marginBottom",o.settings.slideMargin),"fade"==o.settings.mode&&(o.children.css({position:"absolute",zIndex:0,display:"none"}),o.children.eq(o.settings.startSlide).css({zIndex:o.settings.slideZIndex,display:"block"})),o.controls.el=t('<div class="bx-controls" />'),o.settings.captions&&_(),o.active.last=o.settings.startSlide==m()-1,o.settings.video&&a.fitVids();var e=o.children.eq(o.settings.startSlide);"all"==o.settings.preloadImages&&(e=o.children),o.settings.ticker?o.settings.pager=!1:(o.settings.pager&&y(),o.settings.controls&&C(),o.settings.auto&&o.settings.autoControls&&T(),(o.settings.controls||o.settings.autoControls||o.settings.pager)&&o.viewport.after(o.controls.el)),g(e,p)},g=function(e,i){var n=e.find("img, iframe").length;if(0==n)return void i();var s=0;e.find("img, iframe").each(function(){t(this).one("load",function(){++s==n&&i()}).each(function(){this.complete&&t(this).load()})})},p=function(){if(o.settings.infiniteLoop&&"fade"!=o.settings.mode&&!o.settings.ticker){var e="vertical"==o.settings.mode?o.settings.minSlides:o.settings.maxSlides,i=o.children.slice(0,e).clone().addClass("bx-clone"),n=o.children.slice(-e).clone().addClass("bx-clone");a.append(i).prepend(n)}o.loader.remove(),b(),"vertical"==o.settings.mode&&(o.settings.adaptiveHeight=!0),o.viewport.height(u()),a.redrawSlider(),o.settings.onSliderLoad(o.active.index),o.initialized=!0,o.settings.responsive&&t(window).bind("resize",H),o.settings.auto&&o.settings.autoStart&&(m()>1||o.settings.autoSlideForOnePage)&&$(),o.settings.ticker&&q(),o.settings.pager&&D(o.settings.startSlide),o.settings.controls&&L(),o.settings.touchEnabled&&!o.settings.ticker&&O()},u=function(){var e=0,n=t();if("vertical"==o.settings.mode||o.settings.adaptiveHeight)if(o.carousel){var s=1==o.settings.moveSlides?o.active.index:o.active.index*x();for(n=o.children.eq(s),i=1;i<=o.settings.maxSlides-1;i++)n=s+i>=o.children.length?n.add(o.children.eq(i-1)):n.add(o.children.eq(s+i))}else n=o.children.eq(o.active.index);else n=o.children;return"vertical"==o.settings.mode?(n.each(function(i){e+=t(this).outerHeight()}),o.settings.slideMargin>0&&(e+=o.settings.slideMargin*(o.settings.minSlides-1))):e=Math.max.apply(Math,n.map(function(){return t(this).outerHeight(!1)}).get()),"border-box"==o.viewport.css("box-sizing")?e+=parseFloat(o.viewport.css("padding-top"))+parseFloat(o.viewport.css("padding-bottom"))+parseFloat(o.viewport.css("border-top-width"))+parseFloat(o.viewport.css("border-bottom-width")):"padding-box"==o.viewport.css("box-sizing")&&(e+=parseFloat(o.viewport.css("padding-top"))+parseFloat(o.viewport.css("padding-bottom"))),e},h=function(){var t="100%";return o.settings.slideWidth>0&&(t="horizontal"==o.settings.mode?o.settings.maxSlides*o.settings.slideWidth+(o.settings.maxSlides-1)*o.settings.slideMargin:o.settings.slideWidth),t},v=function(){var t=o.settings.slideWidth,e=o.viewport.width();return 0==o.settings.slideWidth||o.settings.slideWidth>e&&!o.carousel||"vertical"==o.settings.mode?t=e:o.settings.maxSlides>1&&"horizontal"==o.settings.mode&&(e>o.maxThreshold||e<o.minThreshold&&(t=(e-o.settings.slideMargin*(o.settings.minSlides-1))/o.settings.minSlides)),t},f=function(){var t=1;if("horizontal"==o.settings.mode&&o.settings.slideWidth>0)if(o.viewport.width()<o.minThreshold)t=o.settings.minSlides;else if(o.viewport.width()>o.maxThreshold)t=o.settings.maxSlides;else{var e=o.children.first().width()+o.settings.slideMargin;t=Math.floor((o.viewport.width()+o.settings.slideMargin)/e)}else"vertical"==o.settings.mode&&(t=o.settings.minSlides);return t},m=function(){var t=0;if(o.settings.moveSlides>0)if(o.settings.infiniteLoop)t=Math.ceil(o.children.length/x());else for(var e=0,i=0;e<o.children.length;)++t,e=i+f(),i+=o.settings.moveSlides<=f()?o.settings.moveSlides:f();else t=Math.ceil(o.children.length/f());return t},x=function(){return o.settings.moveSlides>0&&o.settings.moveSlides<=f()?o.settings.moveSlides:f()},b=function(){if(o.children.length>o.settings.maxSlides&&o.active.last&&!o.settings.infiniteLoop){if("horizontal"==o.settings.mode){var t=o.children.last(),e=t.position();S(-(e.left-(o.viewport.width()-t.outerWidth())),"reset",0)}else if("vertical"==o.settings.mode){var i=o.children.length-o.settings.minSlides,e=o.children.eq(i).position();S(-e.top,"reset",0)}}else{var e=o.children.eq(o.active.index*x()).position();o.active.index==m()-1&&(o.active.last=!0),void 0!=e&&("horizontal"==o.settings.mode?S(-e.left,"reset",0):"vertical"==o.settings.mode&&S(-e.top,"reset",0))}},S=function(t,e,i,n){if(o.usingCSS){var s="vertical"==o.settings.mode?"translate3d(0, "+t+"px, 0)":"translate3d("+t+"px, 0, 0)";a.css("-"+o.cssPrefix+"-transition-duration",i/1e3+"s"),"slide"==e?(a.css(o.animProp,s),a.bind("transitionend webkitTransitionEnd oTransitionEnd MSTransitionEnd",function(){a.unbind("transitionend webkitTransitionEnd oTransitionEnd MSTransitionEnd"),M()})):"reset"==e?a.css(o.animProp,s):"ticker"==e&&(a.css("-"+o.cssPrefix+"-transition-timing-function","linear"),a.css(o.animProp,s),a.bind("transitionend webkitTransitionEnd oTransitionEnd MSTransitionEnd",function(){a.unbind("transitionend webkitTransitionEnd oTransitionEnd MSTransitionEnd"),S(n.resetValue,"reset",0),N()}))}else{var r={};r[o.animProp]=t,"slide"==e?a.animate(r,i,o.settings.easing,function(){M()}):"reset"==e?a.css(o.animProp,t):"ticker"==e&&a.animate(r,speed,"linear",function(){S(n.resetValue,"reset",0),N()})}},w=function(){for(var e="",i=m(),n=0;i>n;n++){var s="";o.settings.buildPager&&t.isFunction(o.settings.buildPager)?(s=o.settings.buildPager(n),o.pagerEl.addClass("bx-custom-pager")):(s=n+1,o.pagerEl.addClass("bx-default-pager")),e+='<div class="bx-pager-item"><a href="" data-slide-index="'+n+'" class="bx-pager-link">'+s+"</a></div>"}o.pagerEl.html(e)},y=function(){o.settings.pagerCustom?o.pagerEl=t(o.settings.pagerCustom):(o.pagerEl=t('<div class="bx-pager" />'),o.settings.pagerSelector?t(o.settings.pagerSelector).html(o.pagerEl):o.controls.el.addClass("bx-has-pager").append(o.pagerEl),w()),o.pagerEl.on("click","a",A)},C=function(){o.controls.next=t('<a class="bx-next" href="">'+o.settings.nextText+"</a>"),o.controls.prev=t('<a class="bx-prev" href="">'+o.settings.prevText+"</a>"),o.controls.next.bind("click",k),o.controls.prev.bind("click",E),o.settings.nextSelector&&t(o.settings.nextSelector).append(o.controls.next),o.settings.prevSelector&&t(o.settings.prevSelector).append(o.controls.prev),o.settings.nextSelector||o.settings.prevSelector||(o.controls.directionEl=t('<div class="bx-controls-direction" />'),o.controls.directionEl.append(o.controls.prev).append(o.controls.next),o.controls.el.addClass("bx-has-controls-direction").append(o.controls.directionEl))},T=function(){o.controls.start=t('<div class="bx-controls-auto-item"><a class="bx-start" href="">'+o.settings.startText+"</a></div>"),o.controls.stop=t('<div class="bx-controls-auto-item"><a class="bx-stop" href="">'+o.settings.stopText+"</a></div>"),o.controls.autoEl=t('<div class="bx-controls-auto" />'),o.controls.autoEl.on("click",".bx-start",I),o.controls.autoEl.on("click",".bx-stop",P),o.settings.autoControlsCombine?o.controls.autoEl.append(o.controls.start):o.controls.autoEl.append(o.controls.start).append(o.controls.stop),o.settings.autoControlsSelector?t(o.settings.autoControlsSelector).html(o.controls.autoEl):o.controls.el.addClass("bx-has-controls-auto").append(o.controls.autoEl),z(o.settings.autoStart?"stop":"start")},_=function(){o.children.each(function(e){var i=t(this).find("img:first").attr("title");void 0!=i&&(""+i).length&&t(this).append('<div class="bx-caption"><span>'+i+"</span></div>")})},k=function(t){o.settings.auto&&a.stopAuto(),a.goToNextSlide(),t.preventDefault()},E=function(t){o.settings.auto&&a.stopAuto(),a.goToPrevSlide(),t.preventDefault()},I=function(t){a.startAuto(),t.preventDefault()},P=function(t){a.stopAuto(),t.preventDefault()},A=function(e){o.settings.auto&&a.stopAuto();var i=t(e.currentTarget);if(void 0!==i.attr("data-slide-index")){var n=parseInt(i.attr("data-slide-index"));n!=o.active.index&&a.goToSlide(n),e.preventDefault()}},D=function(e){var i=o.children.length;return"short"==o.settings.pagerType?(o.settings.maxSlides>1&&(i=Math.ceil(o.children.length/o.settings.maxSlides)),void o.pagerEl.html(e+1+o.settings.pagerShortSeparator+i)):(o.pagerEl.find("a").removeClass("active"),void o.pagerEl.each(function(i,n){t(n).find("a").eq(e).addClass("active")}))},M=function(){if(o.settings.infiniteLoop){var t="";0==o.active.index?t=o.children.eq(0).position():o.active.index==m()-1&&o.carousel?t=o.children.eq((m()-1)*x()).position():o.active.index==o.children.length-1&&(t=o.children.eq(o.children.length-1).position()),t&&("horizontal"==o.settings.mode?S(-t.left,"reset",0):"vertical"==o.settings.mode&&S(-t.top,"reset",0))}o.working=!1,o.settings.onSlideAfter(o.children.eq(o.active.index),o.oldIndex,o.active.index)},z=function(t){o.settings.autoControlsCombine?o.controls.autoEl.html(o.controls[t]):(o.controls.autoEl.find("a").removeClass("active"),o.controls.autoEl.find("a:not(.bx-"+t+")").addClass("active"))},L=function(){1==m()?(o.controls.prev.addClass("disabled"),o.controls.next.addClass("disabled")):!o.settings.infiniteLoop&&o.settings.hideControlOnEnd&&(0==o.active.index?(o.controls.prev.addClass("disabled"),o.controls.next.removeClass("disabled")):o.active.index==m()-1?(o.controls.next.addClass("disabled"),o.controls.prev.removeClass("disabled")):(o.controls.prev.removeClass("disabled"),o.controls.next.removeClass("disabled")))},$=function(){if(o.settings.autoDelay>0){setTimeout(a.startAuto,o.settings.autoDelay)}else a.startAuto();o.settings.autoHover&&a.hover(function(){o.interval&&(a.stopAuto(!0),o.autoPaused=!0)},function(){o.autoPaused&&(a.startAuto(!0),o.autoPaused=null)})},q=function(){var e=0;if("next"==o.settings.autoDirection)a.append(o.children.clone().addClass("bx-clone"));else{a.prepend(o.children.clone().addClass("bx-clone"));var i=o.children.first().position();e="horizontal"==o.settings.mode?-i.left:-i.top}S(e,"reset",0),o.settings.pager=!1,o.settings.controls=!1,o.settings.autoControls=!1,o.settings.tickerHover&&!o.usingCSS&&o.viewport.hover(function(){a.stop()},function(){var e=0;o.children.each(function(i){e+="horizontal"==o.settings.mode?t(this).outerWidth(!0):t(this).outerHeight(!0)});var i=o.settings.speed/e,n="horizontal"==o.settings.mode?"left":"top",s=i*(e-Math.abs(parseInt(a.css(n))));N(s)}),N()},N=function(t){speed=t?t:o.settings.speed;var e={left:0,top:0},i={left:0,top:0};"next"==o.settings.autoDirection?e=a.find(".bx-clone").first().position():i=o.children.first().position();var n="horizontal"==o.settings.mode?-e.left:-e.top,s="horizontal"==o.settings.mode?-i.left:-i.top,r={resetValue:s};S(n,"ticker",speed,r)},O=function(){o.touch={start:{x:0,y:0},end:{x:0,y:0}},o.viewport.bind("touchstart",V)},V=function(t){if(o.working)t.preventDefault();else{o.touch.originalPos=a.position();var e=t.originalEvent;o.touch.start.x=e.changedTouches[0].pageX,o.touch.start.y=e.changedTouches[0].pageY,o.viewport.bind("touchmove",B),o.viewport.bind("touchend",W)}},B=function(t){var e=t.originalEvent,i=Math.abs(e.changedTouches[0].pageX-o.touch.start.x),n=Math.abs(e.changedTouches[0].pageY-o.touch.start.y);if(3*i>n&&o.settings.preventDefaultSwipeX?t.preventDefault():3*n>i&&o.settings.preventDefaultSwipeY&&t.preventDefault(),"fade"!=o.settings.mode&&o.settings.oneToOneTouch){var s=0;if("horizontal"==o.settings.mode){var a=e.changedTouches[0].pageX-o.touch.start.x;s=o.touch.originalPos.left+a}else{var a=e.changedTouches[0].pageY-o.touch.start.y;s=o.touch.originalPos.top+a}S(s,"reset",0)}},W=function(t){o.viewport.unbind("touchmove",B);var e=t.originalEvent,i=0;if(o.touch.end.x=e.changedTouches[0].pageX,o.touch.end.y=e.changedTouches[0].pageY,"fade"==o.settings.mode){var n=Math.abs(o.touch.start.x-o.touch.end.x);n>=o.settings.swipeThreshold&&(o.touch.start.x>o.touch.end.x?a.goToNextSlide():a.goToPrevSlide(),a.stopAuto())}else{var n=0;"horizontal"==o.settings.mode?(n=o.touch.end.x-o.touch.start.x,i=o.touch.originalPos.left):(n=o.touch.end.y-o.touch.start.y,i=o.touch.originalPos.top),!o.settings.infiniteLoop&&(0==o.active.index&&n>0||o.active.last&&0>n)?S(i,"reset",200):Math.abs(n)>=o.settings.swipeThreshold?(0>n?a.goToNextSlide():a.goToPrevSlide(),a.stopAuto()):S(i,"reset",200)}o.viewport.unbind("touchend",W)},H=function(e){if(o.initialized){var i=t(window).width(),n=t(window).height();(r!=i||l!=n)&&(r=i,l=n,a.redrawSlider(),o.settings.onSliderResize.call(a,o.active.index))}};return a.goToSlide=function(e,i){if(!o.working&&o.active.index!=e)if(o.working=!0,o.oldIndex=o.active.index,0>e?o.active.index=m()-1:e>=m()?o.active.index=0:o.active.index=e,o.settings.onSlideBefore(o.children.eq(o.active.index),o.oldIndex,o.active.index),"next"==i?o.settings.onSlideNext(o.children.eq(o.active.index),o.oldIndex,o.active.index):"prev"==i&&o.settings.onSlidePrev(o.children.eq(o.active.index),o.oldIndex,o.active.index),o.active.last=o.active.index>=m()-1,o.settings.pager&&D(o.active.index),o.settings.controls&&L(),"fade"==o.settings.mode)o.settings.adaptiveHeight&&o.viewport.height()!=u()&&o.viewport.animate({height:u()},o.settings.adaptiveHeightSpeed),o.children.filter(":visible").fadeOut(o.settings.speed).css({zIndex:0}),o.children.eq(o.active.index).css("zIndex",o.settings.slideZIndex+1).fadeIn(o.settings.speed,function(){t(this).css("zIndex",o.settings.slideZIndex),M()});else{o.settings.adaptiveHeight&&o.viewport.height()!=u()&&o.viewport.animate({height:u()},o.settings.adaptiveHeightSpeed);var n=0,s={left:0,top:0};if(!o.settings.infiniteLoop&&o.carousel&&o.active.last)if("horizontal"==o.settings.mode){var r=o.children.eq(o.children.length-1);s=r.position(),n=o.viewport.width()-r.outerWidth()}else{var l=o.children.length-o.settings.minSlides;s=o.children.eq(l).position()}else if(o.carousel&&o.active.last&&"prev"==i){var d=1==o.settings.moveSlides?o.settings.maxSlides-x():(m()-1)*x()-(o.children.length-o.settings.maxSlides),r=a.children(".bx-clone").eq(d);s=r.position()}else if("next"==i&&0==o.active.index)s=a.find("> .bx-clone").eq(o.settings.maxSlides).position(),o.active.last=!1;else if(e>=0){var c=e*x();s=o.children.eq(c).position()}if("undefined"!=typeof s){var g="horizontal"==o.settings.mode?-(s.left-n):-s.top;S(g,"slide",o.settings.speed)}}},a.goToNextSlide=function(){if(o.settings.infiniteLoop||!o.active.last){var t=parseInt(o.active.index)+1;a.goToSlide(t,"next")}},a.goToPrevSlide=function(){if(o.settings.infiniteLoop||0!=o.active.index){var t=parseInt(o.active.index)-1;a.goToSlide(t,"prev")}},a.startAuto=function(t){o.interval||(o.interval=setInterval(function(){"next"==o.settings.autoDirection?a.goToNextSlide():a.goToPrevSlide()},o.settings.pause),o.settings.autoControls&&1!=t&&z("stop"))},a.stopAuto=function(t){o.interval&&(clearInterval(o.interval),o.interval=null,o.settings.autoControls&&1!=t&&z("start"))},a.getCurrentSlide=function(){return o.active.index},a.getCurrentSlideElement=function(){return o.children.eq(o.active.index)},a.getSlideCount=function(){return o.children.length},a.redrawSlider=function(){o.children.add(a.find(".bx-clone")).width(v()),o.viewport.css("height",u()),o.settings.ticker||b(),o.active.last&&(o.active.index=m()-1),o.active.index>=m()&&(o.active.last=!0),o.settings.pager&&!o.settings.pagerCustom&&(w(),D(o.active.index))},a.destroySlider=function(){o.initialized&&(o.initialized=!1,t(".bx-clone",this).remove(),o.children.each(function(){void 0!=t(this).data("origStyle")?t(this).attr("style",t(this).data("origStyle")):t(this).removeAttr("style")}),void 0!=t(this).data("origStyle")?this.attr("style",t(this).data("origStyle")):t(this).removeAttr("style"),t(this).unwrap().unwrap(),o.controls.el&&o.controls.el.remove(),o.controls.next&&o.controls.next.remove(),o.controls.prev&&o.controls.prev.remove(),o.pagerEl&&o.settings.controls&&o.pagerEl.remove(),t(".bx-caption",this).remove(),o.controls.autoEl&&o.controls.autoEl.remove(),clearInterval(o.interval),o.settings.responsive&&t(window).unbind("resize",H))},a.reloadSlider=function(t){void 0!=t&&(s=t),a.destroySlider(),d()},d(),this}}(jQuery),function(t,e,i){function n(e,i){this.element=e,this.settings=t.extend({},s,i),this._defaults=s,this._name=o,this.init()}var s={label:"",duplicate:!0,duration:200,easingOpen:"swing",easingClose:"swing",closedSymbol:"&#9658;",openedSymbol:"&#9660;",prependTo:"#slicknav",parentTag:"a",closeOnClick:!0,allowParentLinks:!1,nestedParentLinks:!0,showChildren:!1,init:function(){},open:function(){},close:function(){}},o="slicknav",a="slicknav";n.prototype.init=function(){var i,n,s=this,o=t(this.element),r=this.settings;r.duplicate?(s.mobileNav=o.clone(),s.mobileNav.removeAttr("id"),s.mobileNav.find("*").each(function(e,i){t(i).removeAttr("id")})):s.mobileNav=o,i=a+"_icon",""===r.label&&(i+=" "+a+"_no-text"),"a"==r.parentTag&&(r.parentTag='a href="#"'),s.mobileNav.attr("class",a+"_nav"),n=t('<div class="'+a+'_menu"></div>'),s.btn=t(["<"+r.parentTag+' aria-haspopup="true" tabindex="0" class="'+a+"_btn "+a+'_collapsed">','<span class="'+a+'_menutxt">'+r.label+"</span>",'<span class="'+i+'">','<span class="'+a+'_icon-bar"></span>','<span class="'+a+'_icon-bar"></span>','<span class="'+a+'_icon-bar"></span>',"</span>","</"+r.parentTag+">"].join("")),t(n).append(s.btn),t(r.prependTo).prepend(n),n.append(s.mobileNav);var l=s.mobileNav.find("li");t(l).each(function(){var e=t(this),i={};if(i.children=e.children("ul").attr("role","menu"),e.data("menu",i),i.children.length>0){var n=e.contents(),o=!1;nodes=[],t(n).each(function(){return t(this).is("ul")?!1:(nodes.push(this),void(t(this).is("a")&&(o=!0)))});var l=t("<"+r.parentTag+' role="menuitem" aria-haspopup="true" tabindex="-1" class="'+a+'_item"/>');if(r.allowParentLinks&&!r.nestedParentLinks&&o)t(nodes).wrapAll('<span class="'+a+"_parent-link "+a+'_row"/>').parent();else{var d=t(nodes).wrapAll(l).parent();d.addClass(a+"_row")}e.addClass(a+"_collapsed"),e.addClass(a+"_parent");var c=t('<span class="'+a+'_arrow">'+r.closedSymbol+"</span>");r.allowParentLinks&&!r.nestedParentLinks&&o&&(c=c.wrap(l).parent()),t(nodes).last().after(c)}else 0===e.children().length&&e.addClass(a+"_txtnode");e.children("a").attr("role","menuitem").click(function(e){r.closeOnClick&&!t(e.target).parent().closest("li").hasClass(a+"_parent")&&t(s.btn).click()}),r.closeOnClick&&r.allowParentLinks&&(e.children("a").children("a").click(function(e){t(s.btn).click()}),e.find("."+a+"_parent-link a:not(."+a+"_item)").click(function(e){t(s.btn).click()}))}),t(l).each(function(){var e=t(this).data("menu");r.showChildren||s._visibilityToggle(e.children,null,!1,null,!0)}),s._visibilityToggle(s.mobileNav,null,!1,"init",!0),s.mobileNav.attr("role","menu"),t(e).mousedown(function(){s._outlines(!1)}),t(e).keyup(function(){s._outlines(!0)}),t(s.btn).click(function(t){t.preventDefault(),s._menuToggle()}),s.mobileNav.on("click","."+a+"_item",function(e){e.preventDefault(),s._itemClick(t(this))}),t(s.btn).keydown(function(t){var e=t||event;13==e.keyCode&&(t.preventDefault(),s._menuToggle())}),s.mobileNav.on("keydown","."+a+"_item",function(e){var i=e||event;13==i.keyCode&&(e.preventDefault(),s._itemClick(t(e.target)))}),r.allowParentLinks&&r.nestedParentLinks&&t("."+a+"_item a").click(function(t){t.stopImmediatePropagation()})},n.prototype._menuToggle=function(t){var e=this,i=e.btn,n=e.mobileNav;i.hasClass(a+"_collapsed")?(i.removeClass(a+"_collapsed"),i.addClass(a+"_open")):(i.removeClass(a+"_open"),i.addClass(a+"_collapsed")),i.addClass(a+"_animating"),e._visibilityToggle(n,i.parent(),!0,i)},n.prototype._itemClick=function(t){var e=this,i=e.settings,n=t.data("menu");n||(n={},n.arrow=t.children("."+a+"_arrow"),n.ul=t.next("ul"),n.parent=t.parent(),n.parent.hasClass(a+"_parent-link")&&(n.parent=t.parent().parent(),n.ul=t.parent().next("ul")),t.data("menu",n)),n.parent.hasClass(a+"_collapsed")?(n.arrow.html(i.openedSymbol),n.parent.removeClass(a+"_collapsed"),n.parent.addClass(a+"_open"),n.parent.addClass(a+"_animating"),e._visibilityToggle(n.ul,n.parent,!0,t)):(n.arrow.html(i.closedSymbol),n.parent.addClass(a+"_collapsed"),n.parent.removeClass(a+"_open"),n.parent.addClass(a+"_animating"),e._visibilityToggle(n.ul,n.parent,!0,t))},n.prototype._visibilityToggle=function(e,i,n,s,o){var r=this,l=r.settings,d=r._getActionItems(e),c=0;n&&(c=l.duration),e.hasClass(a+"_hidden")?(e.removeClass(a+"_hidden"),e.slideDown(c,l.easingOpen,function(){t(s).removeClass(a+"_animating"),t(i).removeClass(a+"_animating"),o||l.open(s)}),e.attr("aria-hidden","false"),d.attr("tabindex","0"),r._setVisAttr(e,!1)):(e.addClass(a+"_hidden"),e.slideUp(c,this.settings.easingClose,function(){e.attr("aria-hidden","true"),d.attr("tabindex","-1"),r._setVisAttr(e,!0),e.hide(),t(s).removeClass(a+"_animating"),t(i).removeClass(a+"_animating"),o?"init"==s&&l.init():l.close(s)}))},n.prototype._setVisAttr=function(e,i){var n=this,s=e.children("li").children("ul").not("."+a+"_hidden");i?s.each(function(){var e=t(this);e.attr("aria-hidden","true");var s=n._getActionItems(e);s.attr("tabindex","-1"),n._setVisAttr(e,i)}):s.each(function(){var e=t(this);e.attr("aria-hidden","false");var s=n._getActionItems(e);s.attr("tabindex","0"),n._setVisAttr(e,i)})},n.prototype._getActionItems=function(t){var e=t.data("menu");if(!e){e={};var i=t.children("li"),n=i.find("a");e.links=n.add(i.find("."+a+"_item")),t.data("menu",e)}return e.links},n.prototype._outlines=function(e){e?t("."+a+"_item, ."+a+"_btn").css("outline",""):t("."+a+"_item, ."+a+"_btn").css("outline","none")},n.prototype.toggle=function(){var t=this;t._menuToggle()},n.prototype.open=function(){var t=this;t.btn.hasClass(a+"_collapsed")&&t._menuToggle()},n.prototype.close=function(){var t=this;t.btn.hasClass(a+"_open")&&t._menuToggle()},t.fn[o]=function(e){var i=arguments;if(void 0===e||"object"==typeof e)return this.each(function(){t.data(this,"plugin_"+o)||t.data(this,"plugin_"+o,new n(this,e))});if("string"==typeof e&&"_"!==e[0]&&"init"!==e){var s;return this.each(function(){var a=t.data(this,"plugin_"+o);a instanceof n&&"function"==typeof a[e]&&(s=a[e].apply(a,Array.prototype.slice.call(i,1)))}),void 0!==s?s:this}}}(jQuery,document,window);