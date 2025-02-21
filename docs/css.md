# CSS相关
[W3C CSS教程](https://www.w3school.com.cn/css/index.asp)
## 基础知识
>块级元素block:
:::info
div、h1-h6、form、p、li、ol、li、dl、dt、dd、address、caption、table、tbody、td、tfoot、th、thead、tr​
:::
<mark>默认单独占一行，容器有多宽就占据多宽，可以调整高度和宽度</mark>

>行内元素inline(也叫内联元素):
:::info
b, big, i, small, tt
abbr, acronym, cite, code, dfn, em, kbd, strong, samp, var
a, bdo, br, img, map, object, q, script, span, sub, sup
button, input, label, select, textarea
:::
<mark>内联元素不从新行开始，仅占用所需的宽度</mark>

通过设定一个元素的display属性，可以转化他们的元素属性

```如果想隐藏一个元素:display:none 还是 visibility:hidden?```

display:none 会把元素真正从网页流中删去，也就说原先占据的位置会空出来给其他元素占据<br>
visibility:hidden 则只是让元素看不见，但是仍然占据着位置

:伪类选择器
::伪元素选择器

## 循环文本滚动
```css
.scroll-wrap {
        height: 300px;
        /* 容器高度 */
        overflow: hidden;
        /* 隐藏溢出的内容 */
        position: relative;
}

.scroll-text {
    position: absolute;
    top: 0;
    left: 0;
    animation: scroll 30s linear infinite;
    /* 30s 为滚动时间，可根据实际情况调整 */
}

.scroll-text p {
    margin: 0;
    padding: 10px 40px;
    /* 文字上下留白，可根据实际情况调整 */
}

@keyframes scroll {
    0% {
        transform: translateY(0);
    }

    100% {
        transform: translateY(-100%);
    }
}
```
```html
<div class='scroll-wrap' id='ygaBox'>
    <div class='scroll-text'>
        <p>
            <span style='color: white;font-size: 12px;'>
            文本1
            </span>
            <span style='color: #febb26;font-size: 14px;'>
            文本2
            </span>
            </span><span style='color: white;font-size: 12px;'>
            文本3
            </span>
        </p>
        <p>
            <span style='color: white;font-size: 12px;'>
            文本1
            </span>
            <span style='color: #febb26;font-size: 14px;'>
            文本2
            </span>
            </span><span style='color: white;font-size: 12px;'>
            文本3
            </span>
        </p>
        <p>
            <span style='color: white;font-size: 12px;'>
            文本1
            </span>
            <span style='color: #febb26;font-size: 14px;'>
            文本2
            </span>
            </span><span style='color: white;font-size: 12px;'>
            文本3
            </span>
        </p>
    </div>
</div>
```
## css实现按钮居中
### 1、 父元素盒子样式用：
>display:flex;justify-content: center;align-items: center;
```html
<div style="display:flex;justify-content: center;align-items: center;">
    <c:if test="${pd.post!='1'}">
        <button type="button" class="btn btn-small btn-primary"
            onclick="search();">
            <i class="icon-search">发起查询</i>
        </button>
    </c:if>
    <c:if test="${pd.post=='1' && pd.resultCode=='200'}">
        <button style="margin: auto 10px" type="button"
            class="btn btn-small btn-primary" onclick="checkResult('${pd.QYMC}');">
            <i class="icon-search">查询结果</i>
        </button>
        <button style="margin: auto 10px" type="button"
            class="btn btn-small btn-primary" onclick="searchAgain();">
            <i class="icon-search">重新查询</i>
        </button>
    </c:if>
    <c:if test="${pd.post=='1' && pd.resultCode=='500'}">
        <span style="color:red;">查询绿色企业识别信息发生异常</span>
        <button style="margin: auto 10px" type="button"
            class="btn btn-small btn-primary" onclick="search();">
            <i class="icon-search">重新查询</i>
        </button>
    </c:if>
</div>
```
### 2、 本身盒子采用style="display:block;margin:0 auto;"
```html
<button style="display:block;margin:0 auto;" type="button" class="btn btn-small btn-primary"
    onclick="search();">
    <i class="icon-search">发起查询</i>
</button>
```

### 3、 本身盒子采用style="text-align:center"
```html
 <div style="text-align:center">
   <button>按钮居中</button>                     
 </div>
```

## flex和inline-flex的区别

使用了display: flex 属性后，父元素不设置宽度，宽度就是100%；不会被子元素宽度撑开；
使用了display: inline-flex 属性后，父元素不设置宽度，宽度就是所有的子元素宽度之和，会被子元素宽度撑开，实现宽度自适应