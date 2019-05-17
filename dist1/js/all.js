'use strict';

;(function ($) {
    //1.拼接数据
    $.ajax({
        url: 'http://10.31.163.69/shop/php/indexdata.php',
        dataType: 'json'
    }).done(function (data) {
        var $content = '<div class="bkcx-content">';
        // <img src="${value.url}">
        $.each(data, function (index, value) {
            $content += '\n            <div class="bkcx-content-item">\n            <dl>\n                    <dt>\n                        <a href="http://10.31.163.69/shop/src/details.html?sid=' + value.sid + '" target="_blank">\n                            <img class="lazy" data-original="' + value.url + '" width="200" height="243">\n                        </a>\n                    </dt>\n                    <dd class="bkcx-content-item-dd1">\n                        <b>' + value.count + '\u6298/</b>\n                        <a href="http://10.31.163.69/shop/src/details.html?sid=' + value.sid + '" target="_blank" title="' + value.title + '">' + value.title + '</a>\n                    </dd>\n                    <dd class="bkcx-content-item-dd2">\n                        <span>\xA5' + value.price + '</span>\n                        <b> \xA5' + value.oprice + '</b>\n                        <a href="http://10.31.163.69/shop/src/details.html?sid=' + value.sid + '" target="_blank" target="_blank">\u52A0\u5165\u8D2D\u7269\u8F66</a>\n                    </dd>\n                </dl>\n                </div>\n            ';
        });
        $content += '</div>';
        $('.bkcx').append($content);
        /* 懒加载 */
        $(function () {
            $("img.lazy").lazyload({
                effect: "fadeIn"
            });
        });
    });

    /* 轮播图 */
    /* 获取元素 */
    /* 整个banner盒子 */
    var $ban = $('.banner');
    /* 轮播图片列表 */
    var $picUl = $('.lunboul');
    /* 每张轮播图片 */
    var $picLi = $('.lunboul li');
    /* 轮播按钮列表 */
    var $btnOl = $('lunbool');
    /*  轮播按钮*/
    var $btnLi = $('.lunbool li');
    var $num = 0;
    var $timer = null;
    var $lunbo = null;
    /* 点击按钮图片变化 */
    $btnLi.on('click', function () {
        $num = $(this).index();
        $(this).addClass('active').siblings('li').removeClass('active');
        var $picLiNow = $picLi.eq($(this).index());
        $picLiNow.animate({
            zIndex: 1,
            opacity: 1
        }, 666).siblings().animate({
            zIndex: 0,
            opacity: 0

        }, 666);
    });
    /* 定时器设置自动播放函数 */
    $lunbo = function $lunbo() {

        $num++;
        if ($num < $btnLi.length + 1) {
            $num = $num;
        } else {
            $num = 0;
        };
        $btnLi.eq($num).addClass('active').siblings().removeClass('active');
        $picLi.eq($num).animate({
            zIndex: 1,
            opacity: 1
        }, 666).siblings().animate({
            zIndex: 0,
            opacity: 0

        }, 666);
    };

    /*设置定时器 */
    $timer = setInterval($lunbo, 2000);
    /* 移入移出开关定时器 */
    //     $picUl.hover(function(){
    //        clearInterval($timer);
    //     },function(){
    // $timer = setInterval($lunbo, 2000);

    //     })
    $ban.hover(function () {
        clearInterval($timer);
    }, function () {
        $timer = setInterval($lunbo, 2000);
    });
})(jQuery);
'use strict';

!function ($) {

	var $head_load = new Promise(function (resolve, reject) {
		$('header').load('index.html .header-bar', function () {
			resolve("header加载完成");
		});
	});
	var $foot_load = new Promise(function (resolve, reject) {
		$('footer').load('index.html .footer-bottom', function () {
			resolve("footer加载完成");
		});
	});
	Promise.all([$head_load, $foot_load]).then(function () {
		$.getScript("http://10.31.163.69/shop/src/script/js/headerlogin.js");
	});

	// $('header').load('index.html .header-bar');
	// $('footer').load('index.html .footer-bottom');

	function addcookie(key, value, days) {
		var d = new Date();
		d.setDate(d.getDate() + days);
		document.cookie = key + '=' + encodeURIComponent(value) + ';expires=' + d;
	}

	function getcookie(key) {
		var strarr = decodeURIComponent(document.cookie).split('; ');
		for (var i = 0; i < strarr.length; i++) {
			var newarr = strarr[i].split('=');
			if (newarr[0] == key) {
				return newarr[1];
			}
		}
	}

	//1.渲染商品列表, 传入两个参数，一个id和数量，根据id和数量渲染整个可见的列表.
	function goodslist(id, count) {
		$.ajax({
			url: 'http://10.31.163.69/shop/php/indexdata.php', //获取所有的接口数据
			dataType: 'json'
		}).done(function (data) {
			$.each(data, function (index, value) {
				if (id == value.sid) {
					//遍历判断sid和传入的sid是否相同，方便将那条数据设置到渲染的商品列表中。
					console.log(id);
					var $clonebox = $('.item-hide:hidden').clone(true, true);
					$clonebox.find('.cart-information1-pic').find('img').attr('src', value.url);
					$clonebox.find('.cart-information1-pic').find('img').attr('sid', value.sid);
					$clonebox.find('.cart-information1-info-name').find('a').html(value.title);
					$clonebox.find('.now-price').find('strong').html(value.price);
					$clonebox.find('.last-price').find('b').html(value.oprice);
					$clonebox.find('.quantity').find('input').val(count);
					//计算每个商品的价格。
					$clonebox.find('.cart-sum1-price').find('strong').html((value.price * count).toFixed(2));
					$clonebox.css('display', 'block');
					$('.cart-content-middle-item table tbody').append($clonebox);
					priceall(); //计算总价的
				}
			});
		});
	}

	function delcookie(key) {
		addcookie(key, '', -1);
	}
	//2.获取cookie，执行渲染列表的函数
	if (getcookie('cookiesid') && getcookie('cookienum')) {
		var s = getcookie('cookiesid').split(','); //数组sid
		var n = getcookie('cookienum').split(','); //数组num
		$.each(s, function (i, value) {
			goodslist(s[i], n[i]);
		});
	}

	//3.如果购物车为空，显示empty-cart盒子(购物车空空的)
	kong();
	function kong() {
		if (getcookie('cookiesid') && getcookie('cookienum')) {
			$('.hiden-car').hide(); //cookie存在，购物车有商品，隐藏盒子。
			$('.cart-content').show();
		} else {
			$('.hiden-car').show();
			$('.cart-content').hide();
		}
	}

	//4.计算总价和总的商品件数，必须是选中的商品。
	function priceall() {
		var $sum = 0;
		var $count = 0;
		$('.item-hide:visible').each(function (index, element) {
			if ($(element).find('.quantity input')) {
				$sum += parseInt($(element).find('.quantity').find('input').val());
				$count += parseFloat($(element).find('.cart-sum1-price').find('strong').html());
			}
		});

		$('.cart-money-num').find('b').html($sum);
		$('.cart-money-sum').html('￥' + $count.toFixed(2));
	}

	//5.全选操作
	$('.allsel').on('change', function () {
		$('.goods-item:visible').find(':checkbox').prop('checked', $(this).prop('checked'));
		$('.allsel').prop('checked', $(this).prop('checked'));
		priceall(); //取消选项，重算总和。
	});

	var $inputs = $('.goods-item:visible').find(':checkbox');
	$('.item-list').on('change', $inputs, function () {
		//事件的委托的this指向被委托的元素
		if ($('.goods-item:visible').find('input:checkbox').length == $('.goods-item:visible').find('input:checked').size()) {
			$('.allsel').prop('checked', true);
		} else {
			$('.allsel').prop('checked', false);
		}
		priceall(); //取消选项，重算总和。
	});

	//6.数量的改变
	//改变商品数量++
	$('.quantity .quantity-r-a').on('click', function () {
		var $count = $(this).parents('.cart-num1').find('input').val(); //值
		$count++;
		if ($count >= 99) {
			$count = 99;
		}
		$(this).parents('.cart-num1').find('input').val($count); //赋值回去
		$(this).parents('.item-hide').find('.cart-sum1 .cart-sum1-price').find('strong').html(singlegoodsprice($(this))); //改变后的价格
		priceall(); //重新计算总和。
		setcookie($(this)); //将改变的数量重新添加到cookie
	});

	//改变商品数量--
	$('.quantity .quantity-l-a').on('click', function () {
		var $count = $(this).parents('.cart-num1').find('input').val();
		$count--;
		if ($count <= 1) {
			$count = 1;
		}
		$(this).parents('.cart-num1').find('input').val($count);
		$(this).parents('.item-hide').find('.cart-sum1 .cart-sum1-price').find('strong').html(singlegoodsprice($(this))); //改变后的价格
		priceall();
		setcookie($(this));
	});

	//直接输入改变数量
	$('.quantity input').on('input', function () {
		var $reg = /^\d+$/g; //只能输入数字
		var $value = parseInt($(this).val());
		if ($reg.test($value)) {
			//是数字
			if ($value >= 99) {
				//限定范围
				$(this).val(99);
			} else if ($value <= 0) {
				$(this).val(1);
			} else {
				$(this).val($value);
			}
		} else {
			//不是数字
			$(this).val(1);
		}
		$(this).parents('.item-hide').find('.cart-sum1 .cart-sum1-price').find('strong').html(singlegoodsprice($(this))); //改变后的价格
		priceall();
		setcookie($(this));
	});

	//7.计算数量改变后单个商品的价格
	function singlegoodsprice(obj) {
		//obj:当前元素
		var $dj = parseFloat(obj.parents('.item-hide').find('.now-price').find('strong').html()); //单价

		var $cnum = parseInt(obj.parents('.item-hide').find('.quantity input').val()); //数量

		return ($dj * $cnum).toFixed(2); //结果
	}

	//8.将改变后的数量的值存放到cookie
	//点击按钮将商品的数量和id存放cookie中
	var arrsid = []; //商品的id
	var arrnum = []; //商品的数量
	//提前获取cookie里面id和num
	function cookietoarray() {
		if (getcookie('cookiesid') && getcookie('cookienum')) {
			arrsid = getcookie('cookiesid').split(','); //cookie商品的sid  
			arrnum = getcookie('cookienum').split(','); //cookie商品的num
		}
	}
	function setcookie(obj) {
		//obj:当前操作的对象
		cookietoarray(); //得到数组
		var $index = obj.parents('.item-hide').find('img').attr('sid'); //通过id找数量的位置
		arrnum[$.inArray($index, arrsid)] = obj.parents('.item-hide').find('.quantity input').val();
		addcookie('cookienum', arrnum.toString(), 7);
	}

	//9.删除操作
	//删除cookie
	function delgoodslist(sid, arrsid) {
		//sid：当前删除的sid，arrsid:cookie的sid的值
		var $index = -1;
		$.each(arrsid, function (index, value) {
			//删除的sid对应的索引位置。 index:数组项的索引
			if (sid == value) {
				$index = index; //如果传入的值和数组的值相同，返回值对应的索引。
			}
		});
		arrsid.splice($index, 1); //删除数组对应的值
		arrnum.splice($index, 1); //删除数组对应的值
		addcookie('cookiesid', arrsid.toString(), 7); //添加cookie
		addcookie('cookienum', arrnum.toString(), 7); //添加cookie
	}

	//删除单个商品的函数(委托)
	$('.item-hide').on('click', '.cart-operation1 a', function (ev) {
		cookietoarray(); //得到数组,上面的删除cookie需要。
		if (confirm('你确定要删除吗？')) {
			$(this).first().parents('.item-hide').remove(); //通过当前点击的元素找到整个一行列表，删除
		}
		delgoodslist($(this).first().parents('.item-hide').find('img').attr('sid'), arrsid);
		priceall();
	});

	//删除全部商品的函数
	$('.operation a:first').on('click', function () {
		cookietoarray(); //得到数组,上面的删除cookie需要。
		if (confirm('你确定要全部删除吗？')) {
			$('.goods-item:visible').each(function () {
				if ($(this).find('input:checkbox').is(':checked')) {
					//复选框一定是选中的
					$(this).remove();
					delgoodslist($(this).find('img').attr('sid'), arrsid);
				}
			});
			priceall();
		}
	});
}(jQuery);
'use strict';

!function ($) {

	//1.获取sid
	var picid = location.search.substring(1).split('=')[1];
	var $head_load = new Promise(function (resolve, reject) {
		$('header').load('index.html header', function () {
			resolve("header加载完成");
		});
	});
	var $foot_load = new Promise(function (resolve, reject) {
		$('.footer').load('index.html .footer', function () {
			resolve("footer加载完成");
		});
	});
	Promise.all([$head_load, $foot_load]).then(function () {
		$.getScript("http://10.31.163.69/shop/src/script/js/headerlogin.js");
	});

	//2.将当前的id传给后端获取对应的数据
	$.ajax({
		url: 'http://10.31.163.69/shop/php/detail.php',
		data: {
			sid: picid
		},
		dataType: 'json'
	}).done(function (data) {
		//data:后端返回的和id对应的数据
		// console.log(data);
		$('#smallpic').attr('src', data.url);
		$('#bpic').attr('src', data.url);
		$('#smallpic').attr('sid', data.sid);
		$('dd h1').html(data.title);
		$('dd p').html(data.message);
		$('.money').html(data.price);
		$('.count').prepend(data.count);
		$('.under').append(data.oprice);

		var arr = data.urls.split(',');
		// console.log(arr);
		var str = '';
		$.each(arr, function (index, value) {
			str += '<li><img src="' + value + '"/></li>';
		});
		$('#list ul').html(str);
	});

	//3.放大镜效果
	!function () {

		$('#sf').width($('#spic').width() * $('#bf').width() / $('#bpic').width());
		$('#sf').height($('#spic').height() * $('#bf').height() / $('#bpic').height());
		var bili = $('#bpic').width() / $('#spic').width();
		$('#spic').hover(function () {
			$('#sf').css('visibility', 'visible');
			$('#bf').css('visibility', 'visible');
			$(this).on('mousemove', function (ev) {
				var $left = ev.pageX - $('.wrap').offset().left - $('#sf').width() / 2;
				var $top = ev.pageY - $('.wrap').offset().top - $('#sf').height() / 2;
				if ($left < 0) {
					$left = 0;
				} else if ($left >= $('#spic').width() - $('#sf').width()) {
					$left = $('#spic').width() - $('#sf').width();
				}
				if ($top < 0) {
					$top = 0;
				} else if ($top >= $('#spic').height() - $('#sf').height()) {
					$top = $('#spic').height() - $('#sf').height();
				}
				$('#sf').css('left', $left);
				$('#sf').css('top', $top);
				$('#bpic').css('left', -$left * bili);
				$('#bpic').css('top', -$top * bili);
			});
		}, function () {
			$('#sf').css('visibility', 'hidden');
			$('#bf').css('visibility', 'hidden');
		});

		//点击小图切换
		$('#list ul').on('click', 'li', function () {
			var $imgurl = $(this).find('img').attr('src');
			$('#smallpic').attr('src', $imgurl);
			$('#bpic').attr('src', $imgurl);
		});

		//点击箭头进行切换
		var $num = 6; //放大镜显示6张。
		$('#right').on('click', function () {
			var $list = $('#list ul li'); //8
			if ($list.length > $num) {
				$num++;
				$('#left').css('color', '#333');
				if ($list.length == $num) {
					$('#right').css('color', '#fff');
				}
				$('#list ul').animate({
					left: -($num - 6) * $list.eq(0).innerWidth()
				});
			}
		});

		$('#left').on('click', function () {
			var $list = $('#list ul li'); //8
			if ($num > 6) {
				$num--;
				$('#right').css('color', '#333');
				if ($num <= 6) {
					$('#left').css('color', '#fff');
				}
				$('#list ul').animate({
					left: -($num - 6) * $list.eq(0).innerWidth()
				});
			}
		});
	}();

	function addcookie(key, value, days) {
		var d = new Date();
		d.setDate(d.getDate() + days);
		document.cookie = key + '=' + encodeURIComponent(value) + ';expires=' + d;
	}

	function getcookie(key) {
		var strarr = decodeURIComponent(document.cookie).split('; ');
		for (var i = 0; i < strarr.length; i++) {
			var newarr = strarr[i].split('=');
			if (newarr[0] == key) {
				return newarr[1];
			}
		}
	}

	function delcookie(key) {
		addcookie(key, '', -1);
	}
	//购物车的思路
	//存放商品的sid和商品的数量--数组实现。
	//如果商品第一次存购物车，存放的是商品的sid和商品的数量。
	//如果是第二次购买商品，从第二次开始改变数量。

	//疑问：判断商品是第一次存还是多次存储。

	//1.解决方式：提前获取cookie里面id和num
	//点击按钮将商品的数量和id存放cookie中
	var arrsid = []; //商品的sid
	var arrnum = []; //商品的数量
	function cookietoarray() {
		if (getcookie('cookiesid') && getcookie('cookienum')) {
			//判断商品是第一次存还是多次存储
			arrsid = getcookie('cookiesid').split(','); //cookie商品的sid  
			arrnum = getcookie('cookienum').split(','); //cookie商品的num
		}
	}
	function setcookie(obj) {
		//obj:当前操作的对象
		cookietoarray(); //得到数组
		var $index = obj.parents('.detials-main-content').find('#smallpic').attr('sid'); //通过id找数量的位置

		arrnum[$.inArray($index, arrsid)] = obj.parents('.detials-main-content').find('.sum-num input').val();
		addcookie('cookienum', arrnum.toString(), 7);
	}

	//改变商品数量++
	$('.sum-num-up').on('click', function () {
		var $count = $(this).parents('.sum-num').find('input').val(); //值
		$count++;
		if ($count >= 99) {
			$count = 99;
		}
		$(this).parents('.sum-num').find('input').val($count); //赋值回去

		//    setcookie($(this));//将改变的数量重新添加到cookie
	});

	// 改变商品数量--
	$('.sum-num-down').on('click', function () {
		var $count = $(this).parents('.sum-num').find('input').val();
		$count--;
		if ($count <= 1) {
			$count = 1;
		}
		$(this).parents('.sum-num').find('input').val($count);

		// setcookie($(this));
	});

	//2.有了上面的方法，可以点击加入购物车按钮判断商品是否是第一次还是多次。

	$('.car').on('click', function () {
		//点击加入购物车按钮。

		//判断当前的商品sid是否存在购物车(cookie)
		//判断当前的按钮对应的商品的sid和取出的cookie里面的sid进行比较

		//获取当前的按钮对应的商品的sid
		var $sid = $(this).parents('.detials-main-content').find('#smallpic').attr('sid');
		cookietoarray(); //获取已经存在的cookie值。
		// console.log($sid);
		if ($.inArray($sid, arrsid) != -1) {
			//商品存在，数量叠加 
			//先取出cookie中的对应的数量值+当前添加的数量值，添加到对应的cookie中。
			var num = parseInt(arrnum[$.inArray($sid, arrsid)]) + parseInt($('#sum').val());
			arrnum[$.inArray($sid, arrsid)] = num;
			addcookie('cookienum', arrnum.toString(), 10); //数组存入cookie
		} else {
			//不存在，第一次添加。将商品的id和数量存入数组，再存入cookie.
			arrsid.push($sid); //将当前的id存入数组
			addcookie('cookiesid', arrsid.toString(), 10); //数组存入cookie
			arrnum.push($('#sum').val());
			addcookie('cookienum', arrnum.toString(), 10); //数组存入cookie
		}
	});

	$('.car').on('click', function () {
		$('.success').css({
			display: 'block'
		});
	});
	$('.continue').on('click', function () {
		$('.success').css({
			display: 'none'
		});
	});
}(jQuery);
'use strict';

;(function ($) {
    function addCookie(key, value, day) {
        var date = new Date(); //创建日期对象
        date.setDate(date.getDate() + day); //过期时间：获取当前的日期+天数，设置给date
        document.cookie = key + '=' + encodeURI(value) + ';expires=' + date; //添加cookie，设置过期时间
    }
    function getCookie(key) {
        var str = decodeURI(document.cookie);
        var arr = str.split('; ');
        for (var i = 0; i < arr.length; i++) {
            var arr1 = arr[i].split('=');
            if (arr1[0] == key) {
                return arr1[1];
            }
        }
    }
    function delCookie(key, value) {
        addCookie(key, value, -1); //添加的函数,将时间设置为过去时间
    }

    //显示隐藏
    $(function () {
        if (getCookie('UserName')) {
            $('.welcome').hide();
            $('.show-welcome').show().find('.welcome-name').html(getCookie('UserName'));
        }
        $('.show-welcome .welcome-close').on('click', function () {
            delCookie('UserName', '', -1);
            $('.show-welcome').hide();
            $('.welcome').show();
        });
    });
})(jQuery);
'use strict';

/* 顶部地址区域的切换 */
;(function ($) {
    /* 获取需要替换的元素 */
    var $address = $('.songhuo .address strong');
    /* 获取地区选项 */
    var $send = $('.send-select ul li a');
    /* 地区切换效果 */
    $send.on("mousedown", function () {
        var $sendValue = $(this).text();
        $address.text($sendValue);
        $('.send-select').css({
            display: 'none'
        });
    });
    /* 地址栏hover效果 */
    $('.songhuo').hover(function () {
        $('.send-select').css({
            display: 'block'
        });
    }, function () {
        $('.send-select').css({
            display: 'none'
        });
    });
    /* 黑幕的隐藏与显示 */
    var $city = $('.mask-address-body dl dt a');

    $city.hover(function () {
        $(this).css({
            background: "#ddd6c8",
            color: "#fff",
            borderRadius: 5
        });
    }, function () {
        $(this).css({
            background: "",
            color: "#666",
            borderRadius: 5
        });
    });
    $city.on('mousedown', function () {
        var $cityValue = $(this).text();
        $address.text($cityValue);
        $('.mask').css({
            display: "none"
        });
        $('.mask-address').css({
            display: "none"
        });
    });
})(jQuery);

/* 楼梯效果及回到顶部效果 */
;(function ($) {
    /* 获取楼梯导航条 */
    var $loutinav = $('.louti');
    /* 获取回到顶部按钮 */
    var $scrolltop = $('.scroll');
    /* 获取所有楼层 */
    var $louceng = $('.louceng');

    var $loutispan = $('.louti li');
    /* 滚轮距离顶部一定距离楼梯及回到顶部出现 */
    $(window).on('scroll', function () {
        var $top = $(window).scrollTop();
        if ($top > 300) {
            $loutinav.show();
            $scrolltop.show();
        } else {
            $loutinav.hide();
            $scrolltop.hide();
        }

        $louceng.each(function (index, element) {
            //遍历楼层
            var $loucengTop = $(element).offset().top; //存下当前对象的距离网页顶部的距离
            if ($loucengTop + 800 > $top) {
                //顶部距离和滚轮距离对比
                /* 不满足条件切换到没有颜色的图片位置 */
                $loutispan.css({
                    backgroundPositionX: -67
                });
                /* 满足条件的切换到有颜色的地方 */
                $loutispan.eq(index).css({
                    backgroundPositionX: 0
                });
                return false; //满足条件，跳出遍历
            }
        });
    });
    $loutispan.on('click', function () {
        //点击楼梯跳转当前部分
        $(this).css({
            backgroundPositionX: 0
        }).siblings().css({
            backgroundPositionX: -67
        }); //给当前点击的楼梯换成有颜色的，其他按钮移出颜色
        var $top = $louceng.eq($(this).index()).offset().top; //用$(this).index()获取当前点击的楼梯块的下标，用eq($(this).index())获取相同下标的楼层元素，对其进行操作
        $('html,body').animate({
            scrollTop: $top //页面
        });
    });
    /* 点击回到顶部按钮，回到顶部 */
    $scrolltop.on('click', function () {
        $('html,body').animate({
            scrollTop: 0
        });
    });
})(jQuery);
'use strict';

;(function ($) {
    function addCookie(key, value, day) {
        var date = new Date(); //创建日期对象
        date.setDate(date.getDate() + day); //过期时间：获取当前的日期+天数，设置给date
        document.cookie = key + '=' + encodeURI(value) + ';expires=' + date; //添加cookie，设置过期时间
    }

    $('#btn').on('click', function () {
        var $username = $('#username').val();
        var $password = $('#password').val();
        $.ajax({
            type: 'post',
            url: 'http://10.31.163.69/shop/php/login.php',
            data: { //将用户名和密码传输给后端
                name: $username,
                pass: $password
            },
            success: function success(data) {
                //请求成功，接收后端返回的值
                if (!data) {
                    //用户名或者密码错误
                    $('#error').html('用户名或者密码错误');
                    $('#password').val('');
                } else {
                    //成功,存cookie,跳转到首页
                    addCookie('UserName', $username, 7);
                    location.href = 'http://10.31.163.69/shop/src/index.html';
                }
            }
        });
    });
})(jQuery);
"use strict";

;(function ($) {
    //表单验证-用户名
    $(function () {
        $('#form1').validate({
            rules: {
                username: {
                    required: true,
                    minlength: 2,
                    maxlength: 10,
                    remote: { //将前端的name给后端
                        url: "http://10.31.163.69/shop/php/reg.php", //后台处理程序
                        type: "post" //数据发送方式
                    }
                },
                password: {
                    required: true,
                    minlength: 6,
                    maxlength: 20
                },
                repass: {
                    required: true,
                    equalTo: '#password'
                }
            },
            messages: {
                username: {
                    required: '用户名不能为空',
                    minlength: '用户名不能小于2',
                    maxlength: '用户名不能大于10',
                    remote: '用户名已存在'
                },
                password: {
                    required: '密码不能为空',
                    minlength: '密码不能小于6',
                    maxlength: '密码不能大于20'
                },
                repass: {
                    required: '密码重复不能为空',
                    equalTo: '两次密码不一样'
                }

            }

        });
    });

    $.validator.setDefaults({
        /*添加校验成功后的执行函数--修改提示内容，并为正确提示信息添加新的样式(默认是valid)*/
        success: function success(label) {
            label.text('√').css('color', 'green').addClass('valid');
        }
    });
})(jQuery);