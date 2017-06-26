//加载DOM
/*
$(document).ready()
*/

//事件绑定
/*
bind(type[,data],fn)
第一个参数，
blur,focus,load,resize,scroll,unload,click,dblclick,mousedown,mouseup,mousemove,mouseover,mouseout,mouseenter,
mouseleave,change,select,submit,keydown,keypress,keyup,error
第二个参数，
event.data
第三个参数，
处理函数
*/

//合成事件
/*
hover(enter,leave)
toggle(fn1,fn2,...fnN)
$().hover(function(){
	
},function(){
	
})
替代了mouseover,mouseout
*/

//事件冒泡
/*
向上触发
点击里面的click事件，外面的click事件触发
$('element').bind('click',function(event){
	//...
});
$('span').bind('click',function(){
	//...
	event.stopPropagation();
});
当点击span，只触发span的click事件，不触发div,body的click
阻止默认行为
单击超链接会跳转，单击提交按钮会提交，等默认行为
event.preventDefault()
事件捕获，支持性不好
从最外层元素开始，到最里面元素
jQuery不支持事件捕获,如果要用，请使用原生的，
*/

//事件对象的属性
/*
event.type
event.preventDefault()
event.stopPropagation()
event.target
event.relatedTarget
event.pageX
event.pageY
event.which
event.metaKey
*/

//移除事件
/*
unbind([type],[data]);
$().unbind('click', myFun2);
one(type, [data], fn)
off()
delegate()
undelegate()
*/

//模拟操作
/*
$().trigger('click');
$().trigger('myClick');
$().trigger('myClick', ['我的自定义','事件']);
$().trigger("focus")
$().triggerHandler("focus")
*/

//其他用法
/*
$().bind("mouseover mouseout", fn)
$().bind("click.plugin", fn);
$().unbind(".plugin");
$().trigger("click!")


*/

//动画
/*

*/