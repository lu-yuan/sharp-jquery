//基本选择器
/*
#id
.class
element
*
selector1, selector2, ... selectorN
*/


//层次选择器
/*
$("ancestor descendant")
$("parent > child")
$("prev + next")
$("prev ~ siblings")
*/


//过滤选择器
/*
//基本过滤选择器
:first
:last
:not(selector)
:even
:odd
:eq(index)
:gt(index)
:lt(index)
:header
:animated
:focus
//内容过滤选择器
:contains(text)
:empty
:has(selector)
:parent
//可见性过滤选择器
:hidden
:visible
//属性过滤选择器
[attribute]
[attribute=value]
[attribute!=value]
[attribute^=value]
[attribute$=value]
[attribute*=value]
[attribute|=value]
[attribute~=value]
[attribute1][attribute2][attributeN]
//子元素过滤选择器
:nth-child(index/even/odd/equation)
:first-child
:last-child
:only-child
:nth-child
//表单对象属性过滤选择器
:enabled
:disabled
:checked
:selected
*/


//表单选择器
/*
:input
:text
:password
:radio
:checkbox
:submit
:image
:reset
:button
:file
:hidden
*/