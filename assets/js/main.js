/***************************************************
==================== JS INDEX ======================
****************************************************

01. PreLoader Js
02. mobile menu Js
03. header dropdown static Js
04. Common Js=
07. magnificPopup img view
08. magnificPopup video view
09. Counter Js
10. Counter Js
11. Smooth Scroll Js
12. Sticky Header Js
13. Open Handlers
14. Close Handlers
15. overlay not working js
16. search border style
17. scroll wrapper
18. addClass removeClass
19. shaders slider
20. tp-porfolio-10-title-wrap
21. carachter Animation
22. fade-class-active
23. tp-fixed-title-wrap
24. webgl images hover animation
25. zoom in
26. portfolio animation start
27. tp-text-perspective
/***************************************************
==================== JS INDEX ======================
****************************************************/

(function ($) {
	"use strict";

	var windowOn = $(window);

	// 01. PreLoader Js//
	$(window).on('load', function () {
		$("#preloader").fadeOut(500);
	});
	$(window).on('load', function () {
		$("#loading").fadeOut(500);
	});


    // 02. mobile menu Js//
	let tpMenuWrap = $('.tp-mobile-menu-active > ul').clone();
	let tpSideMenu = $('.tp-offcanvas-menu nav');
	tpSideMenu.append(tpMenuWrap);
	if ($(tpSideMenu).find('.submenu, .mega-menu').length != 0) {
	   $(tpSideMenu).find('.submenu, .mega-menu').parent().append
	   ('<button class="tp-menu-close"><i class="fa-solid fa-plus"></i></button>');
	}
	let sideMenuList = $('.tp-offcanvas-menu nav > ul > li button.tp-menu-close, .tp-offcanvas-menu nav > ul li.has-dropdown > a, .tp-offcanvas-menu nav > ul li.has-dropdown > ul > li.menu-item-has-children > a');
	$(sideMenuList).on('click', function (e) {
		e.preventDefault();
		$(this).parent().toggleClass('active');
		$(this).siblings('.submenu, .mega-menu').slideToggle();
	});

	// 03. header dropdown static Js//
	$(function() {
		$('.tp-header-dropdown nav ul li').each(function() {
			if ($(this).find('.mega-menu').length > 0) {
				$(this).addClass('p-static');
			}
		});
	});


	// 04. Common Js//
	$("[data-bg-color]").each(function () {
		$(this).css("background-color", $(this).attr("data-bg-color"));
	});

	$("[data-background").each(function () {
		$(this).css("background-image", "url( " + $(this).attr("data-background") + "  )");
	});

	$("[data-width]").each(function () {
		$(this).css("width", $(this).attr("data-width"));
	});

	$("[data-height]").each(function () {
	$(this).css("height", $(this).attr("data-height"));
	});


	$("[data-text-color]").each(function () {
		$(this).css("color", $(this).attr("data-text-color"));
	});


	// 07. magnificPopup img view //
	$('.popup-image').magnificPopup({
		type: 'image',
		gallery: {
			enabled: true
		}
	});

	// 08. magnificPopup video view //
	$(".popup-video").magnificPopup({
		type: "iframe",
	});

	// 09. Counter Js //
	new PureCounter();
	new PureCounter({
		filesizing: true,
		selector: ".filesizecount",
		pulse: 2,
	});

	// 10. back-to-top //
	function back_to_top() {

		let btn = $('#back_to_top');
		let btn_wrapper = $('.back-to-top-wrapper');

		$(window).on('scroll',function () {
			if ($(window).scrollTop() > 300) {
				btn_wrapper.addClass('back-to-top-btn-show');
			} else {
				btn_wrapper.removeClass('back-to-top-btn-show');
			}
		});

		$(btn).on('click', function (e) {
			e.preventDefault();
			$('html, body').animate({ scrollTop: 0 }, '300');
		});
	}
	back_to_top();


	// 11. Smooth Scroll Js //
	function smoothSctoll() {
		$('.smooth a').on('click', function (event) {
			let target = $(this.getAttribute('href'));
			if (target.length) {
				event.preventDefault();
				$('html, body').stop().animate({
					scrollTop: target.offset().top - 60
				}, 1500);
			}
		});
	}
	smoothSctoll();


	// 12. Sticky Header Js //
	$(window).on('scroll', function () {
		let scroll = $(window).scrollTop();
		if (scroll < 20) {
			$("#header-sticky").removeClass("header-sticky");
		} else {
			$("#header-sticky").addClass("header-sticky");
		}
	});

	// 13. Open Handlers //
	$(".tp-offcanvas-open-btn").on("click", function () {
		$(".tp-offcanvas-area, .tp-offcanvas-2-area, .body-overlay").addClass("opened");
	});

	$(".tp-search-open-btn").on("click", function () {
		$(".tp-search-area, .body-overlay").addClass("opened");
	});

	$(".cartmini-open-btn").on("click", function () {
		$(".cartmini__area").addClass("cartmini-opened");
		$(".body-overlay").addClass("opened");
	});

	// 14. Close Handlers //
	$(".tp-offcanvas-close-btn, .tp-offcanvas-2-close-btn, .tp-search-close-btn, .cartmini-close-btn, .body-overlay").on("click", function () {
		$(".tp-offcanvas-area, .tp-offcanvas-2-area, .tp-search-area, .cartmini__area").removeClass("opened cartmini-opened");
		$(".body-overlay").removeClass("opened");
	});

	// 15. overlay not working js //
	$('.tp-offcanvas-open-btn').on('click', function () {
		const hasOffcanvas2 = $('.tp-offcanvas-2-area').length;
		$('.body-overlay').toggleClass('opened', !hasOffcanvas2);
	});

	/////////////////////////
	// Custom Select Js //
	document.addEventListener("DOMContentLoaded", () => {
		const customSelect = document.getElementById("customSelect");
		if (!customSelect) {
			return;
		}
		const selected = customSelect.querySelector(".selected");
		const options = customSelect.querySelector(".options");
		selected.addEventListener("click", (event) => {
			event.stopPropagation();
			selected.classList.toggle("open");
		});
		options.addEventListener("click", (event) => {
			if (event.target.tagName === "LI") {
			const selectedText = event.target.textContent;
			selected.firstChild.textContent = selectedText;
			selected.classList.remove("open");
			}
		});
		document.addEventListener("click", () => {
			selected.classList.remove("open");
		});
	});


	///////////////////////////
	// Cart Quantity Js
	$('.tp-cart-minus').on('click', function () {
		var $input = $(this).parent().find('input');
		var count = Number($input.val()) - 1;
		count = count < 1 ? 1 : count;
		$input.val(count);
		$input.change();
		return false;
	});

	$('.tp-cart-plus').on('click', function () {
		var $input = $(this).parent().find('input');
		$input.val(Number($input.val()) + 1);
		$input.change();
		return false;
	});

	/////////////////////////////
	// Show Login Toggle Js
	$('#showlogin').on('click', function () {
		$('#checkout-login').slideToggle(900);
	});

	/////////////////////////////
	// Show Coupon Toggle Js
	$('#showcoupon').on('click', function () {
		$('#checkout_coupon').slideToggle(900);
	});

	/////////////////////////////
	// Password Toggle Js //
	document.querySelectorAll('.password-show-toggle').forEach(function (btn) {
		btn.addEventListener('click', function () {
			var parent = btn.closest('.tp-login-input');
			var inputType = parent.querySelector('.tp_password');
			var openEye = parent.querySelector('.open-eye');
			var closeEye = parent.querySelector('.close-eye');

			if (inputType.type === "password") {
				inputType.type = "text";
				openEye.style.display = 'block';
				closeEye.style.display = 'none';
			} else {
				inputType.type = "password";
				openEye.style.display = 'none';
				closeEye.style.display = 'block';
			}
		});
	});



	// 17. scroll wrapper //
	gsap.registerPlugin(ScrollTrigger, ScrollSmoother, ScrollToPlugin);
	if($('#smooth-wrapper').length && $('#smooth-content').length){
		ScrollSmoother.create({
			smooth: 1.35,
			effects: true,
			smoothTouch: .1,
			ignoreMobileResize: true
		})
	}


	// 18. Reveal animation //
	const hoverItem = document.querySelectorAll(".hover-reveal-item");
	function moveImage(e, hoverItem) {
		const item = hoverItem.getBoundingClientRect();
		const x = e.clientX - item.x;
		const y = e.clientY - item.y;
		if (hoverItem.children[1]) {
			hoverItem.children[1].style.transform = `translate(${x}px, ${y}px)`;
		}
	}
	hoverItem.forEach((item, i) => {
		item.addEventListener("mousemove", (e) => {
			setInterval(moveImage(e, item), 100);
		});
	});

	// 19. Work Pin Section
	let tl = gsap.timeline();
	let pr = gsap.matchMedia();
	pr.add("(min-width: 767px)", () => {
	let otherSections = document.querySelectorAll('.sa-work-panel')
		otherSections.forEach((section, index) => {
			gsap.set(otherSections, {
				scale: 1,
			});
			tl.to(section, {
				scale: .8,
				scrollTrigger: {
					trigger: section,
					pin: section,
					scrub: 1,
					start: 'top 0',
					end: "bottom 60%",
					endTrigger: '.sa-work-wrap',
					pinSpacing: false,
					markers: false,
				},
			})
		})
	});


	////fade-class-active
	if ($(".tp-fade-anim").length > 0) {
		gsap.utils.toArray(".tp-fade-anim").forEach((item) => {
			let tp_fade_offset = item.getAttribute("data-fade-offset") || 40,
				tp_duration_value = item.getAttribute("data-duration") || 0.75,
				tp_fade_direction = item.getAttribute("data-fade-from") || "bottom",
				tp_onscroll_value = item.getAttribute("data-on-scroll") || 1,
				tp_delay_value = item.getAttribute("data-delay") || 0.15,
				tp_ease_value = item.getAttribute("data-ease") || "power2.out",
				tp_anim_setting = {
					opacity: 0,
					ease: tp_ease_value,
					duration: tp_duration_value,
					delay: tp_delay_value,
					x: (tp_fade_direction == "left" ? -tp_fade_offset : (tp_fade_direction == "right" ? tp_fade_offset : 0)),
					y: (tp_fade_direction == "top" ? -tp_fade_offset : (tp_fade_direction == "bottom" ? tp_fade_offset : 0)),
				};
			if (tp_onscroll_value == 1) {
				tp_anim_setting.scrollTrigger = {
					trigger: item,
					start: 'top 85%',
				};
			}
			gsap.from(item, tp_anim_setting);
		});
	}

	// Button text animation
	document.querySelectorAll(".tp-btn-anim .tp-btn-text").forEach(el => {
		const text = el.textContent.trim();
		el.innerHTML = "";

		const block = document.createElement("div");
		block.classList.add("btn-anim__block");

		[...text].forEach(char => {
			const span = document.createElement("span");
			span.className = "btn-anim__letter";
			span.textContent = char === " " ? "\u00A0" : char; // Non-breaking space
			block.appendChild(span);
		});

		el.appendChild(block);
		el.appendChild(block.cloneNode(true));
	});


	// button hover animation
	$('.tp-hover-btn').on('mouseenter', function (e) {
		var x = e.pageX - $(this).offset().left;
		var y = e.pageY - $(this).offset().top;

		$(this).find('.tp-btn-circle-dot').css({
			top: y,
			left: x
		});
	});

	$('.tp-hover-btn').on('mouseout', function (e) {
		var x = e.pageX - $(this).offset().left;
		var y = e.pageY - $(this).offset().top;

		$(this).find('.tp-btn-circle-dot').css({
			top: y,
			left: x
		});
	});


	var hoverBtns = gsap.utils.toArray(".tp-hover-btn-wrapper");

	const hoverBtnItem = gsap.utils.toArray(".tp-hover-btn-item");
	hoverBtns.forEach((btn, i) => {
		$(btn).mousemove(function (e) {
			callParallax(e);
		});
		function callParallax(e) {
			parallaxIt(e, hoverBtnItem[i], 60);
		}

		function parallaxIt(e, target, movement) {
			var $this = $(btn);
			var relX = e.pageX - $this.offset().left;
			var relY = e.pageY - $this.offset().top;

			gsap.to(target, 1, {
				x: ((relX - $this.width() / 2) / $this.width()) * movement,
				y: ((relY - $this.height() / 2) / $this.height()) * movement,
				ease: Power2.easeOut,
			});
		}
		$(btn).mouseleave(function (e) {
			gsap.to(hoverBtnItem[i], 1, {
				x: 0,
				y: 0,
				ease: Power2.easeOut,
			});
		});
	});
	// button hover end

	/////////////////////////////
	// service item animation
	$(function () {
		if ($('.ma-service-wrapper').length > 0) {
			$('.ma-service-wrapper .ma-service-item').on("mouseenter", function () {
				let thumbClass = $(this).attr('rel');
				$('#ma-service-thumb').removeClass().addClass(thumbClass);
				$(this).addClass('active').siblings().removeClass('active');

				$('.ma-service-thumb-shape').removeClass('current');

				let shapeNumber = thumbClass.split('-').pop();
				$('.ma-service-thumb-shape.shape-' + shapeNumber).addClass('current');
			});
		}
	});


	/////////////////////////////
	// portfolio animation start
	if ($('.tp-item-anime-md').length > 0) {
		gsap.set('.tp-item-anime-md.marque', {
			x: '2%'
		});
		gsap.timeline({
			scrollTrigger: {
				trigger: '.tp-item-anime-area-md ',
				start: '-100 20%',
				end: 'bottom 20%',
				scrub: true,
				invalidateOnRefresh: true
			}
		})
		.to('.tp-item-anime-md.marque ', {
			x: '-10%'
		});
	}

	function moving_text(){
		if ($('.moving-text').length > 0) {
			gsap.utils.toArray('.moving-text').forEach((section, index) => {
				const w = section.querySelector('.wrapper-text');
				const [x, xEnd] = (index % 2) ? [(section.offsetWidth - w.scrollWidth), 0] : [0, section.offsetWidth - w.scrollWidth];
				gsap.fromTo(w, { x }, {
					x: xEnd,
					scrollTrigger: {
						trigger: section,
						scrub: 0.1,
					}
				});
			});
		}
	}
	$(function(){
		moving_text();
	});


	/////////////////////////////
	// inner-service-3-panel
	pr.add("(min-width: 769px)", () => {
		let otherSections = document.querySelectorAll('.inner-service-3-panel')
		otherSections.forEach((section, index) => {
			tl.to(section, {
				scrollTrigger: {
					trigger: section,
					pin: section,
					scrub: 1,
					start: 'top 10%',
					end: "bottom 100%",
					endTrigger: '.inner-service-3-pin-wrap',
					pinSpacing: false,
					markers: false,
				},
			})
		})
	});

	//////////////////////////////
	// 17. For pricing tab //
	function tabtable_active() {
		const $elements = {
			monthly: $("#tp-nav-monthly"),
			yearly: $("#tp-nav-yearly"),
			switcher: $("#tp-switcher-input"),
			tabMonthly: $("#tp-tab-monthly"),
			tabYearly: $("#tp-tab-yearly")
		};

		const setActive = isMonthly => {
			$elements.switcher.prop("checked", isMonthly);
			$elements.monthly.toggleClass("is-active", isMonthly);
			$elements.yearly.toggleClass("is-active", !isMonthly);
			$elements.tabMonthly.toggleClass("tp-tab-hide", !isMonthly);
			$elements.tabYearly.toggleClass("tp-tab-hide", isMonthly);
		};

		[$elements.monthly, $elements.yearly].forEach($el =>
			$el.on("click", () => setActive($el.is($elements.monthly)))
		);

		$elements.switcher.on("click", () =>
			setActive(!$elements.monthly.hasClass("is-active"))
		);
	}
	if ($("#tp-nav-monthly").length) tabtable_active();


	// 18. addClass removeClass //
	$('.tp-offcanvas-2-area .tp-offcanvas-menu > nav > ul > li').on("mouseenter", function () {
		$(this).addClass('is-active-2').siblings().removeClass('is-active-2');
	}).on("mouseleave", function () {
		$(this).siblings().addClass('is-active-2');
	});


    // 19. shaders slider//
	if ($('#port-showcase-slider-main').length > 0) {
		const showcaseSwiper = new Swiper('#showcase-slider', {
			loop: true,
			slidesPerView: 1,
			touchStartPreventDefault: false,
			speed: 1000,
			mousewheel: true,
			simulateTouch: true,
			autoplay: {

				delay: 5000

			},
			navigation: {

				clickable: true,
				nextEl: '.swiper-next',
				prevEl: '.swiper-prev',

			},
			pagination: {
				el: '.tp-slider-dot',
				clickable: true,
				renderBullet: function (index, className) {
					return '<div class="' + className + '"></div>';
				},
			},
			on: {
				slidePrevTransitionStart: function () {

					$('.tp-slider-dot').find('.swiper-pagination-bullet').each(function () {
						if (!$(this).hasClass("swiper-pagination-bullet-active")) {
							$('#trigger-slides .swiper-slide-active').find('div').first().each(function () {
								if (!$(this).hasClass("active")) {
									$(this).trigger('click');
								}
							});

							$('#trigger-slides .swiper-slide-duplicate-active').find('div').first().each(function () {
								if (!$(this).hasClass("active")) {
									$(this).trigger('click');
								}
							});
						}
					});

				},
				slideNextTransitionStart: function () {

					$('.tp-slider-dot').find('.swiper-pagination-bullet').each(function () {
						if (!$(this).hasClass("swiper-pagination-bullet-active")) {
							$('#trigger-slides .swiper-slide-active').find('div').first().each(function () {
								if (!$(this).hasClass("active")) {
									$(this).trigger('click');
								}
							});

							$('#trigger-slides .swiper-slide-duplicate-active').find('div').first().each(function () {
								if (!$(this).hasClass("active")) {
									$(this).trigger('click');
								}
							});
						}
					});

				}
			},
		});
		var vertex = 'varying vec2 vUv; void main() {  vUv = uv;  gl_Position = projectionMatrix  modelViewMatrix  vec4( position, 1.0 );	}';
		var fragment = `
		varying vec2 vUv;

		uniform sampler2D currentImage;
		uniform sampler2D nextImage;
		uniform sampler2D disp;
		uniform float dispFactor;
		uniform float effectFactor;
		uniform vec4 resolution;

		void main() {

			vec2 uv = (vUv - vec2(0.5))*resolution.zw + vec2(0.5);

			vec4 disp = texture2D(disp, uv);
			vec2 distortedPosition = vec2(uv.x + dispFactor * (disp.r*effectFactor), uv.y);
			vec2 distortedPosition2 = vec2(uv.x - (1.0 - dispFactor) * (disp.r*effectFactor), uv.y);
			vec4 _currentImage = texture2D(currentImage, distortedPosition);
			vec4 _nextImage = texture2D(nextImage, distortedPosition2);
			vec4 finalTexture = mix(_currentImage, _nextImage, dispFactor);

			gl_FragColor = finalTexture; }

		`;
		var gl_canvas = new WebGL({
			vertex: vertex,
			fragment: fragment,
		});
		var addEvents = function () {

			var triggerSlide = Array.from(document.getElementById('trigger-slides').querySelectorAll('.slide-wrap'));
			gl_canvas.isRunning = false;

			triggerSlide.forEach((el) => {

				el.addEventListener('click', function () {

					if (!gl_canvas.isRunning) {

						gl_canvas.isRunning = true;

						document.getElementById('trigger-slides').querySelectorAll('.active')[0].className = '';
						this.className = 'active';

						var slideId = parseInt(this.dataset.slide, 10);

						gl_canvas.material.uniforms.nextImage.value = gl_canvas.textures[slideId];
						gl_canvas.material.uniforms.nextImage.needsUpdate = true;

						gsap.to(gl_canvas.material.uniforms.dispFactor, {
							duration: 1,
							value: 1,
							ease: 'Sine.easeInOut',
							onComplete: function () {
								gl_canvas.material.uniforms.currentImage.value = gl_canvas.textures[slideId];
								gl_canvas.material.uniforms.currentImage.needsUpdate = true;
								gl_canvas.material.uniforms.dispFactor.value = 0.0;
								gl_canvas.isRunning = false;
							}
						});
					}
				});
			});
		};
		addEvents();
	}

   // 20. tp-porfolio-10-title-wrap //
	$('.tp-porfolio-10-title-wrap > ul > li').on('mouseenter', function(){
		$(this).siblings().removeClass('active');
		const rel = $(this).attr('rel');
		$(this).addClass('active');
		$('#tp-porfolio-10-bg-box').removeClass().addClass(rel);
	})

	// 21. carachter Animation //
	if ($('.tp-char-animation').length > 0) {
		let char_come = gsap.utils.toArray(".tp-char-animation");
		char_come.forEach(splitTextLine => {
			const tl = gsap.timeline({
				scrollTrigger: {
					trigger: splitTextLine,
					start: 'top 90%',
					end: 'bottom 60%',
					scrub: false,
					markers: false,
					toggleActions: 'play none none none'
				}
			});
			const itemSplitted = new SplitText(splitTextLine, { type: "chars, words" });
			gsap.set(splitTextLine, { perspective: 300 });
			itemSplitted.split({ type: "chars, words" })
			tl.from(itemSplitted.chars,
				{
					duration: 1,
					delay: 0.5,
					x: 100,
					autoAlpha: 0,
					stagger: 0.05
				});
		});
	}

	// 22. fade-class-active //
	if ($(".tp_fade_anim").length > 0) {
		gsap.utils.toArray(".tp_fade_anim").forEach((item) => {
			let tp_fade_offset = item.getAttribute("data-fade-offset") || 40,
				tp_duration_value = item.getAttribute("data-duration") || 0.75,
				tp_fade_direction = item.getAttribute("data-fade-from") || "bottom",
				tp_onscroll_value = item.getAttribute("data-on-scroll") || 1,
				tp_delay_value = item.getAttribute("data-delay") || 0.15,
				tp_ease_value = item.getAttribute("data-ease") || "power2.out",
				tp_anim_setting = {
					opacity: 0,
					ease: tp_ease_value,
					duration: tp_duration_value,
					delay: tp_delay_value,
					x: (tp_fade_direction == "left" ? -tp_fade_offset : (tp_fade_direction == "right" ? tp_fade_offset : 0)),
					y: (tp_fade_direction == "top" ? -tp_fade_offset : (tp_fade_direction == "bottom" ? tp_fade_offset : 0)),
			    };
			if (tp_onscroll_value == 1) {
				tp_anim_setting.scrollTrigger = {
					trigger: item,
					start: 'top 85%',
				};
			}
			gsap.from(item, tp_anim_setting);
		});
	}

  //////////////////////////////////
  // 23.tp-fixed-title-wrap
	let pc = gsap.matchMedia();
	pc.add("(min-width: 992px)", () => {
		if ($('.tp-fixed-title-wrap').length > 0) {
			let project_text = gsap.timeline({
				scrollTrigger: {
					trigger: ".tp-fixed-title-wrap",
					start: 'top center-=350',
					end: "bottom 63%",
					pin: ".tp-fixed-title",
					markers: false,
					pinSpacing: false,
					scrub: 1,
				}
			})
		}
	});

	pc.add("(min-width: 992px)", () => {
		if ($('.tp-fixed-title-wrap-2').length > 0) {
			let project_text = gsap.timeline({
				scrollTrigger: {
					trigger: ".tp-fixed-title-wrap-2",
					start: 'top center-=450',
					end: "bottom 63%",
					pin: ".tp-fixed-title-2",
					markers: false,
					pinSpacing: false,
					scrub: 1,
				}
			})
		}
	});

	pc.add("(min-width: 992px)", () => {
		if ($('.tp-fixed-title-wrap-3').length > 0) {
			let project_text = gsap.timeline({
				scrollTrigger: {
					trigger: ".tp-fixed-title-wrap-3",
					start: 'top center-=450',
					end: "bottom 72%",
					pin: ".tp-fixed-title-3",
					markers: false,
					pinSpacing: false,
					scrub: 1,
				}
			})
		}
	});

	///////////////////////
	// 24. webgl images hover animation //
	if ($('.tp-hover-item').length) {
		let hoverAnimation__do = function (t, n) {
			let a = new hoverEffect({
				parent: t.get(0),
				intensity: t.data("intensity") || void 0,
				speedIn: t.data("speedin") || void 0,
				speedOut: t.data("speedout") || void 0,
				easing: t.data("easing") || void 0,
				hover: t.data("hover") || void 0,
				image1: n.eq(0).attr("src"),
				image2: n.eq(0).attr("src"),
				displacementImage: t.data("displacement"),
				imagesRatio: n[0].height / n[0].width,
				hover: !1
			});
			t.closest(".tp-hover-item").on("mouseenter", function () {
				a.next()
			}).on("mouseleave", function () {
				a.previous()
			})
		}
		let hoverAnimation = function () {
			$(".tp-hover-img").each(function () {
				let n = $(this);
				let e = n.find("img");
				let i = e.eq(0);
				i[0].complete ? hoverAnimation__do(n, e) : i.on("load", function () {
					hoverAnimation__do(n, e)
				})
			})
		}
		hoverAnimation();
	}

	///////////////////////
	// 25. zoom in //
	$(".anim-zoomin").each(function() {

		// Add wrap <div>.
		$(this).wrap('<div class="anim-zoomin-wrap"></div>');

		// Add overflow hidden.
		$(".anim-zoomin-wrap").css({ "overflow": "hidden" })

		var $this = $(this);
		var $asiWrap = $this.parents(".anim-zoomin-wrap");

		let tp_ZoomIn = gsap.timeline({
			scrollTrigger: {
				trigger: $asiWrap,
				start: "top 100%",
				markers: false,
			}
		});
		tp_ZoomIn.from($this, {
			duration: 1.5,
			autoAlpha: 0,
			scale: 1.2,
			ease: Power2.bounce,
			clearProps: "all"
		});


	});


	////////////////////////////////
	// 26. portfolio animation start
	if ($('.tp-item-anime').length > 0) {
		gsap.set('.tp-item-anime.marque', {
			x: '25%'
		});
		gsap.timeline({
			scrollTrigger: {
				trigger: '.tp-item-anime-area ',
				start: '-1000 10%',
				end: 'bottom 20%',
				scrub: true,
				invalidateOnRefresh: true
			}
		})
		.to('.tp-item-anime.marque ', {
			x: '-100%'
		});
	}

	///////////////////////
	// 27. tp-text-perspective
	gsap.utils.toArray(".tp-text-perspective").forEach(splitTextLine => {
		const delay_value = parseFloat(splitTextLine.getAttribute("data-delay") || 0.5);
		const tl = gsap.timeline({
			scrollTrigger: {
				trigger: splitTextLine,
				start: 'top 85%',
				duration: 1.5,
				scrub: false,
				markers: false,
				toggleActions: 'play none none none'
			}
		});
		const itemSplitted = new SplitText(splitTextLine, { type: "lines" });
		gsap.set(splitTextLine, { perspective: 400 });
		itemSplitted.split({ type: "lines" });

		tl.from(itemSplitted.lines, {
			duration: 1,
			delay: delay_value,
			opacity: 0,
			rotationX: -80,
			force3D: true,
			transformOrigin: "top center -50",
			stagger: 0.1
		});
	});

	///////////////////////
	// 28. text-bg color
	function tp_scrollBg($wrap) {
		$wrap = $wrap || jQuery("body");
		$wrap.find(".tp-text-revel").each(function () {
			var $el = jQuery(this);
			var tpSplit = new SplitText($el[0], { type: "words, chars" });
			jQuery(tpSplit.words).children().first().addClass("tp-first-char");
			gsap.fromTo(
				tpSplit.chars,
				{
					position: "relative",
					display: "inline-block",
					opacity: 0.2,
					x: -5
				},
				{
					opacity: 1,
					x: 0,
					stagger: 0.1,
					scrollTrigger: {
						trigger: $el[0],
						toggleActions: "play pause reverse pause",
						start: "top 70%",
						end: "top 40%",
						scrub: 0.7
					}
				}
			);
		});
	}
	window.addEventListener("DOMContentLoaded", function () {
		tp_scrollBg();
	});

	///////////////////////
	//split-title element
	document.querySelectorAll(".tp-split-title").forEach(title => {
		const split = new SplitText(title, { type: "chars" });

		split.chars.forEach(char => char.classList.add("char"));

		gsap.to(split.chars, {
			scrollTrigger: {
			trigger: title,
			start: "top 80%",
			},
			duration: .8,
			clipPath: "inset(0% 0% 0% 0%)",
			x: 0,
			opacity: 1,
			ease: "power4.out",
			stagger: 0.03
		});
	});

	///////////////////////
	//image cliping effect
	document.addEventListener("DOMContentLoaded", () => {

		const initialClipPaths = [
			"polygon(0% 0%, 0% 0%, 0% 0%, 0% 0%)",
			"polygon(33.33% 0%, 33.33% 0%, 33.33% 0%, 33.33% 0%)",
			"polygon(65.66% 0%, 66.66% 0%, 66.66% 0%, 66.66% 0%)",
			"polygon(0% 33.33%, 0% 33.33%, 0% 33.33%, 0% 33.33%)",
			"polygon(33.33% 33.33%, 33.33% 33.33%, 33.33% 33.33%, 33.33% 33.33%)",
			"polygon(65.66% 33.33%, 66.66% 33.33%, 66.66% 33.33%, 66.66% 33.33%)",
			"polygon(0% 66.66%, 0% 66.66%, 0% 66.66%, 0% 66.66%)",
			"polygon(33.33% 66.66%, 33.33% 66.66%, 33.33% 66.66%, 33.33% 66.66%)",
			"polygon(65.66% 66.66%, 66.66% 66.66%, 66.66% 66.66%, 66.66% 66.66%)"
		];

		const finalClipPaths = [
			"polygon(0% 0%, 34.33% 0%, 34.33% 34.33%, 0% 34.33%)",
			"polygon(32.33% 0%, 66.66% 0%, 66.66% 33.33%, 33.33% 34.33%)",
			"polygon(65.66% 0%, 100% 0%, 100% 33.33%, 65.66% 34.33%)",
			"polygon(0% 33.33%, 33.33% 33.33%, 33.33% 66.66%, 0% 66.66%)",
			"polygon(30.33% 33.33%, 66.66% 33.33%, 66.66% 66.66%, 33.33% 66.66%)",
			"polygon(65.66% 33.33%, 100% 32.33%, 100% 66.66%, 65.66% 66.66%)",
			"polygon(0% 65.66%, 33.33% 66.66%, 33.33% 100%, 0% 100%)",
			"polygon(30.33% 66.66%, 66.66% 65.66%, 66.66% 100%, 33.33% 100%)",
			"polygon(65.66% 66.66%, 100% 65.66%, 100% 100%, 65.66% 100%)"
		];

		// Create mask divs for each wrapper
		document.querySelectorAll(".tp-clip-anim").forEach(wrapper => {
			const img = wrapper.querySelector(".tp-anim-img[data-animate='true']");
			if (!img) return;
			const url = img.src;

			// Remove old masks if any (reuse safe)
			wrapper.querySelectorAll(".mask").forEach(m => m.remove());

			for (let i = 0; i < 9; i++) {
				const mask = document.createElement("div");
				mask.className = `mask mask-${i + 1}`;
				Object.assign(mask.style, {
					backgroundImage: `url(${url})`,
					backgroundSize: "cover",
					backgroundPosition: "center",
					position: "absolute",
					inset: "0"
				});
				wrapper.appendChild(mask);
			}
		});

		// Animate masks
		gsap.utils.toArray(".tp-clip-anim").forEach(wrapper => {
			const masks = wrapper.querySelectorAll(".mask");
			if (!masks.length) return;

			gsap.set(masks, { clipPath: (i) => initialClipPaths[i] });

			const order = [
				[".mask-1"],
				[".mask-2", ".mask-4"],
				[".mask-3", ".mask-5", ".mask-7"],
				[".mask-6", ".mask-8"],
				[".mask-9"]
			];

			const tl = gsap.timeline({
				scrollTrigger: { trigger: wrapper, start: "top 75%" }
			});

			order.forEach((targets, i) => {
				const validTargets = targets
					.map(c => wrapper.querySelector(c))
					.filter(el => el); // filter out nulls

				if (validTargets.length) {
					tl.to(validTargets, {
						clipPath: (j, el) => finalClipPaths[Array.from(masks).indexOf(el)],
						duration: 1,
						ease: "power4.out",
						stagger: 0.1
					}, i * 0.125);
				}
			});
		});
	});

	///////////////////////
	// brand effect
	if ($('.ds-brand-area.tp-about-dgm-ptb').length) {
	gsap.set(".inner-brand-item", { scale: 1.3, opacity: 0 });
	gsap.to(".inner-brand-item", {
		scale: 1,
		opacity: 1,
		duration: 1.5,
		ease: "bounce.out",
		stagger: {
			each: 0.1
		},
		scrollTrigger: {
			trigger: '.ds-brand-area.tp-about-dgm-ptb',
			start: "top 100%"
		}
	})
	}



})(jQuery);