"use strict";!function(a){a("#btn").on("click",function(){var t=a("#username").val(),e=a("#password").val();a.ajax({type:"post",url:"http://10.31.163.69/shop/php/login.php",data:{name:t,pass:e},success:function(e){e?(function(e,t,a){var n=new Date;n.setDate(n.getDate()+a),document.cookie=e+"="+encodeURI(t)+";expires="+n}("UserName",t,7),location.href="./index.html"):(a("#error").html("用户名或者密码错误"),a("#password").val(""))}})})}(jQuery);