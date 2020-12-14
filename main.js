/*
* @Author: shikaiwei
* @Date:   2020-12-10 16:24:06
* @Last Modified by:   shikaiwei
* @Last Modified time: 2020-12-14 15:51:43
*/
// window.onload=function(){
clock();
var wrap=document.getElementById('wrap');
var pic=document.getElementById('pic').getElementsByTagName("li");
var back = document.getElementById("tagchild1");
var forw = document.getElementById("tagchild2");
var sub = document.getElementById("subb");
var regist = document.getElementById("regist");
var inregist = document.getElementById("input3");
var inregister = document.getElementById("input4");
var forwardIndex=0;
var backIndex=0;
var timer=null;
for(var i=1;i<pic.length;i++){
    pic[i].style.display = "none";
}
 //下一张图片按钮
forw.onclick=function() {
    if (++forwardIndex >= pic.length){
        forwardIndex = 0;
    }
    forwardChangePic(forwardIndex);
    backIndex=forwardIndex;
}
function forwardChangePic(forwardIndex){
    for (var i = 0; i <pic.length; ++i) {
    	pic[i].style.display = "none";
    }
    pic[forwardIndex].style.display = "block";
}
 //上一张图片按钮
back.onclick=function() {
    --backIndex;
 	if (backIndex <0){
 		backIndex = pic.length-1;
 	}
    backChangePic(backIndex);
}
 function backChangePic(headIndex){
 	for (var i = 0; i <pic.length; ++i) {
        pic[i].style.display = "none";
    }
    pic[headIndex].style.display = "block";
}

// 时间显示
function clock() {
    var today = new Date(); //初始化Date对象
    var hour = today.getHours(); //小时
    var minute = today.getMinutes(); //分钟
    var week = today.getDay(); //周
    var year = today.getFullYear(); //年
    var month = today.getMonth() + 1; //月
    var day = today.getDate(); //日
    var second = today.getSeconds(); //秒
    minute = checkTime(minute);
    second = checkTime(second);
    var weeks = ["星期日","星期一","星期二","星期三","星期四","星期五","星期六" ];
    //将拼接的字符串 渲染到HTML标签里面
    document.getElementById('dateinfo').innerHTML = year + "年"+ month + "月" + day + "日 " + weeks[week] + " " + hour + ":" + minute + ":" + second;
    t = setTimeout('clock()',1000);
}
//时间显示规格化
function checkTime(i) {
	if(i < 10) {
		i = "0" + i;
	}
	return ''+i;
}
// 注册框
regist.onclick = function(){
    document.getElementById("id1").style.display="block";
    document.getElementsByTagName("html")[0].style.overflow="hidden";
    changeImg();           
}
inregist.onclick=function(){
    check();
    if(check()==true){
        document.getElementById('codeInput').value = "";
        document.getElementById("id1").style.display="none";
    }
}
//登录框
sub.onclick = function(){
    document.getElementById("id3").style.display="block";
    document.getElementsByTagName("html")[0].style.overflow="hidden";
    changeImg();             
}
inregister.onclick=function(){
    check1();
    if(check1()==true){
        document.getElementById('codeInput1').value = "";
        document.getElementById("id3").style.display="none";
    }           
}


 // 声明一个变量用于存储生成的验证码
document.getElementById('code').onclick = changeImg;
document.getElementById('code1').onclick = changeImg;
function changeImg(){
    // 验证码组成库
    var arrays=new Array(  
        '1','2','3','4','5','6','7','8','9','0',  
        'a','b','c','d','e','f','g','h','i','j',  
        'k','l','m','n','o','p','q','r','s','t',  
        'u','v','w','x','y','z',  
        'A','B','C','D','E','F','G','H','I','J',  
        'K','L','M','N','O','P','Q','R','S','T',  
        'U','V','W','X','Y','Z'               
    ); 
    // 重新初始化验证码
    code ='';
    // 随机从数组中获取四个元素组成验证码
    for(var i = 0; i<4; i++){
        // 随机获取一个数组的下标
        var r = parseInt(Math.random()*arrays.length);
        code += arrays[r];
    }
    // 验证码写入span区域
    document.getElementById('code').innerHTML = code;
    document.getElementById('code1').innerHTML = code;
}
// 验证验证码
function check(){
    var error;
    // 获取用户输入的验证码
    var codeInput = document.getElementById('codeInput').value;
    if(codeInput.toLowerCase() == code.toLowerCase()){
        document.getElementById('errorTips').innerHTML = "";
        return true;
    }else{
        error = '验证码错误，重新输入';
        document.getElementById('errorTips').innerHTML = error;
        return false;
    }
}
function check1(){
    var error;
    // 获取用户输入的验证码
    var codeInput1 = document.getElementById('codeInput1').value;
    if(codeInput1.toLowerCase() == code.toLowerCase()){
        document.getElementById('errorTips1').innerHTML = "";
        return true;
    }else{
        error = '验证码错误，重新输入';
        document.getElementById('errorTips1').innerHTML = error;
        return false;
    }
}
var button = document.getElementById("input5");
var button1 = document.getElementById("input6");
button.onclick=function(){
    document.getElementById("id1").style.display="none";
    document.getElementsByTagName("html")[0].style.overflow="auto";
}
button1.onclick=function(){
    document.getElementById("id3").style.display="none";
    document.getElementsByTagName("html")[0].style.overflow="auto";
}

var output1 = document.getElementById("input2");
output1.onblur=function(){
    if(output1.value==""){
        document.getElementById("inid4").innerHTML="用户名不能为空";
        return true;
    }
    else{
        document.getElementById("inid4").innerHTML="";
        return false
    }
}

var output2 = document.getElementById("input02");
output2.onblur=function(){
    if(output1.value==""){
        document.getElementById("inid5").innerHTML="密码不能为空";
    }
    else{
        document.getElementById("inid5").innerHTML="";
    }
}
var output3 = document.getElementById("input1");
output3.onblur=function(){
    if(output3.value==""){
        document.getElementById("inid1").innerHTML="用户名不能为空";
        return true;
    }
    else{
        document.getElementById("inid1").innerHTML="";
        return false
    }
}

var output4 = document.getElementById("input01");
output4.onblur=function(){
    if(output4.value==""){
        document.getElementById("inid2").innerHTML="密码不能为空";
    }
    else{
        document.getElementById("inid2").innerHTML="";
    }
}

var output5 = document.getElementById("input001");
output5.onblur=function(){
    if(output5.value==""){
        document.getElementById("inid3").innerHTML="确认密码不能为空";
    }
    else{
        document.getElementById("inid3").innerHTML="";
    }
}