;(function(){
    //1.拼接数据
    $.ajax({
        url:'http://10.31.163.69/shop/php/indexdata.php',
        dataType:'json'
    }).done(function(data){
        var $content='<div class="bkcx-content">';
            // <img src="${value.url}">
        $.each(data,function(index,value){
            $content+=`
            <div class="bkcx-content-item">
            <dl>
                    <dt>
                        <a href="details.html?sid=${value.sid}" target="_blank">
                            <img class="lazy" data-original="${value.url}" width="200" height="243">
                        </a>
                    </dt>
                    <dd class="bkcx-content-item-dd1">
                        <b>${value.count}折/</b>
                        <a href="#" title="${value.title}">${value.title}</a>
                    </dd>
                    <dd class="bkcx-content-item-dd2">
                        <span>¥${value.price}</span>
                        <b> ¥${value.oprice}</b>
                        <a href="details.html?sid=${value.sid}" target="_blank">加入购物车</a>
                    </dd>
                </dl>
                </div>
            `;
        
        });
        $content+='</div>';
        $('.bkcx').append($content);
        /* 懒加载 */
        $(function() {
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
    var $picLi =$('.lunboul li');
    /* 轮播按钮列表 */
    var $btnOl=$('lunbool');
    /*  轮播按钮*/
    var $btnLi = $('.lunbool li');
    var $num = 0;
    var $timer = null;
    var $lunbo = null;
    /* 点击按钮图片变化 */
    $btnLi.on('click',function(){
        $num = $(this).index();
        $(this).addClass('active').siblings('li').removeClass('active');
        var $picLiNow = $picLi.eq($(this).index());
        $picLiNow.animate({
            zIndex: 1,
            opacity:1
        },666).siblings().animate({
            zIndex:0,
            opacity:0

        },666);
    })
    /* 定时器设置自动播放函数 */
    $lunbo = function(){
        
        $num++;
        if($num<4){
            $num =$num;
        }else{
            $num=0;
          
        };
        $btnLi.eq($num).addClass('active').siblings().removeClass('active');
            $picLi.eq($num).animate({
            zIndex: 1,
            opacity:1
        },666).siblings().animate({
            zIndex:0,
            opacity:0

        },666);

        
    }

        /*设置定时器 */
    $timer = setInterval($lunbo, 2000);
        /* 移入移出开关定时器 */
        $picUl.hover(function(){
           clearInterval($timer);
        },function(){
    $timer = setInterval($lunbo, 2000);
            
        })





      
})();





