// --------------------------------------------------------------------------------------------------------------------------------
// --------------------------------------------------------------------------------------------------------------------------------
// The file is an easy-to-use javascript library.
// Version: 1.3.3
// Author: Lancer Lin
// Website: www.linqing07.com/lancer_js/catalog/index.html
// Email: lancer07@139.com , lancer07@126.com
// --------------------------------------------------------------------------------------------------------------------------------
// --------------------------------------------------------------------------------------------------------------------------------

// ----------------------------------------------------------------------------------------------------------------------------

/*--------------8<--------------8<-------Api Begin-------8<--------------8<-------------*/

/*****************************************************************************
	00. ajax 
			· get : 使用Get方法获取数据, 
				ll.ajax.get('2.xml',function(e){
					console.log(e.getElementsByTagName('success')[0].firstChild.nodeValue)	
				},'xml');
			· post : 使用Post方法传递数据,
				ll.ajax.post('ajax.txt',data,function(v){
					console.log(e.getElementsByTagName('success')[0].firstChild.nodeValue)	
				},'xml');			
	01. array 
			· contains : 检查数组中是否含有某元素
			· descendingSort : 将数组进行递减排序
			· empty : 清空数组
			· increasingSort : 将数组进行递增排序
			· index : 获取元素在数组中的序号
			· intersection : 输出两个数组中的相同的数
			· lastIndexOf : 从后开始查找
			· max : 输出数组中的最大项
			· min : 输出数组中的最小项
			· random : 随机产生数组
			· remove : 移除元素
			· removeAt : 移除指定位置的项
			· shuffle : 打乱数组
			· unique : 去除重复数据
	02. browser 
			· addFavorite : 将当前页加入到收藏夹 
				ll.browser.addFavorite('http://www.starwebdesign.com.cn','星秀网页设计','加入收藏失败，有劳您手动添加。')
			. chrome : 输出chrome信息
			· core : 输出浏览器内核信息
			. firefox : 输出ff信息
			. IE : 输出ie信息
			. isGecko : 是否为Gecko内核
			. isWebkit : 是否为Webkit内核
			. opera : 输出opera信息
			. safari : 输出safari信息
			· version : 输出浏览器版本信息
	03. cookie 
			· del : 销毁cookie
			· get : 获取cookie
			· set : 设置cookie
	04. date 
			· add : 计算日期, ll.date.add(day,20)
			· getCNDay : 显示周或星期, ll.date.getCNDay(day,Z)
			· toString : 格式化日期, ll.date.toString(day,'yyyy-mm-dd')
			
	05. dom 
			· 通过id获取,该元素是唯一的 
				ll.dom('#id') 
			 
			· 通过className获取 
				ll.dom('.cls') 获取文档中所有className为cls的元素 
				ll.dom('span.cls') 获取文档中所有className为cls的span元素
				ll.dom('#abc .cls') 获取文档中所有#abc下的className为cls的元素
				ll.dom('#abc span.cls') 获取文档中所有#abc下的className为cls的span元素
			
			· 通过tagName获取 
				ll.dom('span') 获取文档中所有的span元素
				ll.dom('#abc span') 获取#abc中所有的span元素
	
			· addClass : 增加类 ll.dom("#abc").addClass("s")
			· after : 在每个匹配的元素之后插入内容
			· append : 元素内部追加内容
			· attr : 增加属性
			· before : 在每个匹配的元素之前插入内容
			· css : 添加样式
			· each : 遍历节点
			· empty : 清空元素
			· eq : 获取第几个元素
			· even : 获取偶数个元素
			· fadeIn ： 淡入
			· fadeOut ： 淡出
			· fadeTo ： 变换到指定透明度
			· first : 获取第一个元素
			· getCss : 新增css
			· getScript : 新增js
			· gt : 匹配所有大于给定索引值的元素
			· hasClass : 检查是否含有某样式
			· hide : 隐藏
			· html : 创建html
			· last : 获取最后一个元素
			· lt : 匹配所有小于给定索引值的元素
			· next : 获取后一个元素
			· odd ： 获取奇数个元素
			· offset 获取匹配元素在当前视口的相对偏移
			· on ： 绑定事件
			· parent  : 选择父级元素
			· prepend : 元素内部前置内容
			· prev : 选择前一个元素
			· remove : 移除
			· removeAttr : 移除属性
			· removeClass : 移除样式 
			· replace : 置换元素
			· show : 显示
			· sibilings : 获取兄弟元素
			· size : 返回元素数量
			· slice : 选取一个匹配的子集
			· text : 创建文本
			· toggle : 如果元素是可见的，切换为隐藏的；如果元素是隐藏的，切换为可见的
			
	06. eventUtil
			· addHandler : 添加事件监听 ll.eventUtil.addHandler(elem,'click',function(e){ alert("123") });
			· getEvent : 获取参数
			· getTarget : 获取目标
			· preventDefault : 阻止浏览器默认事件
			· removeHandler : 移除事件监听
			· stopPropagation : 阻止冒泡事件 
	07. img 
			· preload : 预加载图片 ll.img.preload('1.jpg','2.jpg','3.jpg')
	08. math 
			· randomColor : 随机颜色 
			· randomNum : 随机数 ll.math.randomNum(50,100)
			· sum : 求和
	09. page
			· getHeight : 获取页面高度
			· getScrollLeft : 获取横向滚动量
			· getScrollTop : 获取纵向滚动量
			· getViewHeight : 获取页面视觉区域高度
			· getViewWidth : 获取页面视觉区域宽度
			· getWidth : 获取页面宽度
			· rollTo : 页面滚动至
			· rollToBottom : 页面滚动至底部
			· rollToTop ： 页面滚动至顶部
	10. platform
			· isAndroid : 是否为安卓系统
			· isBlackBerry : 是否为黑莓
			· isIpad : 是否为iPad
			· isIphone : 是否为iPhone
			· isMacintosh : 是否为Mac
			· isMobile : 是否为移动设备
			· isWindows : 是否为Windows
			· isX11 : 是否为X11
	11. regExp
			· isAdult : 判断是否已成年 
			· isChinese : 判断是否为中文
			· isDate : 判断是否为正确日期格式
			· isEmail : 判断是否为Email地址
			· isIdcard : 判断是否为身份证号
			· isMobile : 判断是否为手机号
			· isQQ : 判断是否为QQ号
			· isTel : 判断是否为固定电话号
			· isURL : 判断是否为链接地址
	12. string
			· filterText : 屏蔽词
			· isNotaNumber : 判断是否为数字 
			· noNumbers : 判断是否存在数字
			· onlyNumbers :  判断是否为仅有数字
			· removeWhitespace : 移除字符串两边空白  
			· toArray : 转换为数组
	13. url
			· getQueryVariable :  获取url参数的键值对
			· getQueryString : 获取url参数的值
			· getUrlParm : 获取url参数

*****************************************************************************/	

/*--------------8<--------------8<-------Api End-------8<--------------8<-------------*/

//  --------------------------------------------------------------------------------------------------------------------------------
//  --------------------------------------------------------------------------------------------------------------------------------

if (typeof ll !=='object'){
	var ll = {}
}
/*--------------8<--------------8<-------AJAX Begin-------8<--------------8<-------------*/
if (typeof ll.ajax !== 'object'){
	ll.ajax = {
		_xmlHttp : function(){ 
			return new (window.ActiveXObject||window.XMLHttpRequest)("Microsoft.XMLHTTP");
		},
		_AddEventToXHP : function(xhp,fun,format){
			xhp.onreadystatechange=function(){
				if(xhp.readyState == 4 && xhp.status == 200){
					var tmp = "" ;
					if(format){
						switch (format){
							case 'text':
								tmp = xhp.responseText;
								break;
							case 'json':
								tmp = eval('(' + xhp.responseText + ')');
								break;
							case 'xml':
								tmp = xhp.responseXML;
								break;
						}
					}else{
						tmp = eval('(' + xhp.responseText + ')');	
					}
					fun(tmp);
				}
			}	
		},
		get : function(url,fun,format,bool){
			var _xhp = ll.ajax._xmlHttp();	
			ll.ajax._AddEventToXHP(_xhp, fun || function(){}, format);
			_xhp.open("GET",url,bool);
			_xhp.send(null);	
		},
		post : function(url,data,fun,format,bool){	
			var _xhp = ll.ajax._xmlHttp();	
			ll.ajax._AddEventToXHP(_xhp, fun || function(){}, format);
			_xhp.open("POST",url,bool);
			_xhp.setRequestHeader("Content-Type","application/x-www-form-urlencoded");
			_xhp.send(data);
		}
	}
}
/*--------------8<--------------8<-------AJAX End-------8<--------------8<-------------*/

/*--------------8<--------------8<-------------8<--------------8<-------------8<--------------8<-------------*/

/*--------------8<--------------8<-------Array Begin-------8<--------------8<-------------*/
if (typeof ll.array !== 'object'){
	ll.array = window.ll.array = function (Arr) {
		return new ll.array.fn.init(Arr) ;
	}
	
	ll.array.fn = ll.array.prototype = {                                                        
		init : function (Arr) {
			if(typeof Arr === "object"){	
				this[0] = Arr;	
			}
		},
		contains : function(needle){
			var arr = this[0];
			for (i in arr) {
				if (arr[i] == needle){
					return true;
				}
			}
			return false;
		},
		descendingSort : function(){
			var arr = this[0];
			arr.sort(new Function("a","b","return b-a;"));
			var sortedArr = [];
			for (var i = 0; i < arr.length; i++) {
				sortedArr.push(arr[i])
			}
			return sortedArr	
		},
		empty : function() {
			var arr = this[0];
   			arr.length = 0;
		},
		increasingSort : function(){
			var arr = this[0];
			arr.sort(new Function("a","b","return a-b;"));
			var sortedArr = [];
			for (var i = 0; i < arr.length; i++) {
				sortedArr.push(arr[i])
			}
			return sortedArr
		},
		index: function(value) {
			var arr = this[0];
			for (var i=0, il = arr.length; i < il; i++) {
				if (arr[i] == value){
					return i;
				}
			}
			return -1;
		},
		intersection : function(arr2){
			var arr = this[0]
			 ,	ai = 0
			 ,  bi = 0
			 ,  result = new Array();
			while( ai < arr.length && bi < arr2.length ){
				if(arr[ai] < arr2[bi] ){ 
					ai++; 
				}
				else if (arr[ai] > arr2[bi] ){
					 bi++; 
				}
				else{
					result.push(arr[ai]);
					ai++;
					bi++;
				}
			}
			return result	
		},
		lastIndexOf : function (value) {
			var arr = this[0];
			for (var i=0, il = arr.length; i < il; i++) {
				if (arr[i] == value) {
					return Math.abs(i - arr.length);
				}
			}
			return -1;
		},
		max : function(){
			var arr = this[0],
				maxNum = Math.max.apply(null, arr);
			return maxNum; 	
		},
		min : function(){
			var arr = this[0],
				minNum = Math.min.apply(null, arr);
			return minNum;
		},
		random : function(quantity,begin,end){
			var ar = [];
			for (var i = 0; i < quantity; i ++) {
				var x = ll.math.randomNum(begin,end)
				ar.push(x);
			}
			return ar
		},
		remove : function (match) {
			var arr = this[0],
				len = arr.length;	
			while (len--) {
				if (len in arr && arr[len] === match) {
					arr.splice(len, 1);
				}
			}
			return arr;
		},
		removeAt : function (index) {
			var arr = this[0];
   			return arr.splice(index, 1)[0];
		},
		shuffle : function() {
			var arr = this[0];
			for(var j, x, i = arr.length; i; j = parseInt(Math.random() * i), x = arr[--i], arr[i] = arr[j], arr[j] = x);
			return arr;
		},
		unique : function(){
			var arr = this[0],
				newArr = [],
				origLen = arr.length,
				found,
				x, y;
			for ( x = 0; x < origLen; x++ ) {
				found = undefined;
				for ( y = 0; y < newArr.length; y++ ) {
					if ( arr[x] === newArr[y] ) { 
					  found = true;
					  break;
					}
				}
				if ( !found) newArr.push( arr[x] );    
			}
			return newArr;	
		}
	}
	ll.array.fn.init.prototype = ll.array.prototype;
}
/*--------------8<--------------8<-------Array End-------8<--------------8<-------------*/

/*--------------8<--------------8<-------------8<--------------8<-------------8<--------------8<-------------*/

/*--------------8<--------------8<-------Browser Begin-------8<--------------8<-------------*/
if (typeof ll.browser !== 'object'){
	ll.browser = {
		addFavorite : function(sURL,sTitle,notice){
			try{
				window.external.addFavorite(sURL, sTitle);
			}
			catch (e){
				try{
					window.sidebar.addPanel(sTitle, sURL, "");
				}
				catch (e){
					return notice;
				}
			}
		},
		chrome : /chrome\/(\d+\.\d+)/i.test(navigator.userAgent) ? + RegExp['\x241'] : undefined,
		core : function(){
			var type = (
				/*@cc_on!@*/ 0 ? 'msie' :
				window.chrome ? 'chrome' :
				window.opera ? 'opera' :
				window.MouseScrollEvent ? 'gecko' :
				window.WheelEvent ? 'safari' :
				'unknown'
			);
			return type
		},
		firefox : /firefox\/(\d+\.\d+)/i.test(navigator.userAgent) ? + RegExp['\x241'] : undefined,
		ie : /msie (\d+\.\d+)/i.test(navigator.userAgent) ? (document.documentMode || + RegExp['\x241']) : undefined,
		isGecko : /gecko/i.test(navigator.userAgent) && !/like gecko/i.test(navigator.userAgent),
		isWebkit : /webkit/i.test(navigator.userAgent),
		opera : /opera(\/| )(\d+(\.\d+)?)(.+?(version\/(\d+(\.\d+)?)))?/i.test(navigator.userAgent) ?  + ( RegExp["\x246"] || RegExp["\x242"] ) : undefined,
		safari : /(\d+\.\d)?(?:\.\d)?\s+safari\/?(\d+\.\d+)?/i.test(navigator.userAgent) && !/chrome/i.test(navigator.userAgent) ? + (RegExp['\x241'] || RegExp['\x242']) : undefined,
		version : function(){
			var Sys = {}
			 ,  ua = navigator.userAgent.toLowerCase()
			 ,  s 
			 ,  result;
			(s = ua.match(/msie ([\d.]+)/)) ? Sys.ie = s[1] :
			(s = ua.match(/firefox\/([\d.]+)/)) ? Sys.firefox = s[1] :
			(s = ua.match(/chrome\/([\d.]+)/)) ? Sys.chrome = s[1] :
			(s = ua.match(/opera.([\d.]+)/)) ? Sys.opera = s[1] :
			(s = ua.match(/version\/([\d.]+).*safari/)) ? Sys.safari = s[1] : 0;
			if (Sys.ie) {
				result = 'ie ' + Sys.ie ;
			}else if (Sys.firefox){
				result ='firfox ' + Sys.firefox ;
			}else if (Sys.chrome){ 
				result = 'chrome ' + Sys.chrome ;
			}else if (Sys.opera){ 
				result ='opera ' + Sys.opera ;
			}else if (Sys.safari){ 
				result = 'safari ' + Sys.safari ;
			}else{
				result = 'other browser' ;
			}
			return result	
		}
	}
}
/*--------------8<--------------8<-------Browser End-------8<--------------8<-------------*/

/*--------------8<--------------8<-------------8<--------------8<-------------8<--------------8<-------------*/

/*--------------8<--------------8<-------Cookie Begin-------8<--------------8<-------------*/
if (typeof ll.cookie !== 'object'){
	ll.cookie = {
		del: function(name, path, domain){
			document.cookie = name + "=" +
				((path) ? "; path=" + path : "") +
				((domain) ? "; domain=" + domain : "") +
				"; expires=Thu, 01-Jan-70 00:00:01 GMT";
		},
		get: function(name){
			var v = document.cookie.match('(?:^|;)\\s*' + name + '=([^;]*)');
			return v ? decodeURIComponent(v[1]) : null;
		},
		set: function(name, value ,expires, path, domain){
			var str = name + "=" + encodeURIComponent(value);
			if (expires != null || expires != '') {
				if (expires == 0) {expires = 100*365*24*60;}
				var exp = new Date();
				exp.setTime(exp.getTime() + expires*60*1000);
				str += "; expires=" + exp.toGMTString();
			}
			if (path) {str += "; path=" + path;}
			if (domain) {str += "; domain=" + domain;}
			document.cookie = str;
		}
	};
}
/*--------------8<--------------8<-------Cookie End-------8<--------------8<-------------*/

/*--------------8<--------------8<-------------8<--------------8<-------------8<--------------8<-------------*/

/*--------------8<--------------8<-------Date Begin-------8<--------------8<-------------*/
if (typeof ll.date !== 'object'){
	ll.date = {
		getCNDay : function(day,Z_XQ){
			var cnDay = ['周日','周一','周二','周三','周四','周五','周六'];
			var cnDay1 = ['星期天','星期一','星期二','星期三','星期四','星期五','星期六'];
			if(typeof Z_XQ == 'undefined' || Z_XQ == 'Z'){
				return cnDay[day.getDay()];
			}else{
				return cnDay1[day.getDay()];
			}
		},
		toString : function(day,format){
			if(typeof format == 'undefined'){
				format='yyyy-MM-dd';
			}
			var year = day.getFullYear();
			var month = day.getMonth()+1;
			var date = day.getDate();
		
			format = format.replace('yyyy',year);
			format = format.replace('mm',month);
			format = format.replace('dd',date);
			return format;
		},
		add : function(day,num){
			var val = day.valueOf();
			val = val + num*24*60*60*1000;
			return new Date(val)
		}	
	}
}
/*--------------8<--------------8<-------Date End-------8<--------------8<-------------*/	

/*--------------8<--------------8<-------------8<--------------8<-------------8<--------------8<-------------*/	

/*--------------8<--------------8<-------DOM Begin-------8<--------------8<-------------*/
if (typeof ll.dom !== 'object'){

	var undefined = undefined;
	
	ll.dom = window.ll.dom = function (selector, context) {
		return new ll.dom.fn.init(selector,context) ;
	},

	
	ll.dom.fn = ll.dom.prototype = {                       
		length : 0 ,                                  
		init : function (selector) {
			selector = selector || document;
			var idExpr = /^#([\w-]+)$/,
				clsExpr = /^([\w\-]+)?\.([\w\-]+)/,
				tagExpr = /^([\w\*]+)$/,
				attrExpr = /^([\w\-]+)?\[([\w]+)(=(\w+))?\]/;
			
			var idTagExpr = /^#([\w-]+)\s([\w\*]+)$/,
				idClsExpr = /^#([\w-]+)\s([\w\-]+)?\.([\w\-]+)$/,
				tagClsExpr = /^([\w\*]+)\s([\w\-]+)?\.([\w\-]+)$/,
				clsTagExpr = /^([\w\-]+)?\.([\w\-]+)\s([\w\*]+)$/;
			
			
			function one(els){
				return els.length==1 ? els[0] : els;
			}
			function filter(all,attr,val){
				var reg = RegExp('(?:^|\\s+)' + val + '(?:\\s+|$)');
				function test(node){
					var v = attr == 'className' ? node.className : node.getAttribute(attr);
					if(v){
						if(val){
							if(reg.test(v)) return true;
						}else{
							return true;
						}
					}
					return false;
				}
				var i = -1, el, r = -1, res = [];
				while( (el = all[++i]) ){
					if(test(el)) {
						res[++r] = el;
					}
				}
				return res;			
			}

			if (typeof selector === "string") {
				
				var	ele,
					father = selector.split(" ")[0].slice(1),
					child = selector.split(" ")[1] ;
					
				if(idExpr.test(selector)){
					ele = document.getElementById(selector.substr(1,selector.length));
					if (ele) {
						this.length = 1;
						this[0] = ele;
					}
				
				
				}else if(idTagExpr.test(selector)){
					this.length = document.getElementById(father).getElementsByTagName(child).length;
					ele = document.getElementById(father).getElementsByTagName(child);
					
					for(var j=0;j<this.length;j++){
						this[j] = ele[j]	
					}
				
				}else if(idClsExpr.test(selector)){
					var ary = child.split('.'),
						tag = ary[0],
						cls = ary[1],
						len,
						all,
						els = [];
						
						if(document.getElementById(father).getElementsByClassName){	
							var res = document.getElementById(father).getElementsByClassName(cls);
							if(tag){
								for(var i=0,len=res.length; i<len; i++){
									res[i].tagName.toLowerCase()==tag && els.push(res[i]);
								}
								ele = els ;
								this.length = els.length;								
							}else{
								ele = res ;
								this.length = res.length;
							}
						}else{
							all = document.getElementById(father).getElementsByTagName(tag || '*');
							ele = filter(all, 'className', cls) ;
							this.length = filter(all, 'className', cls).length;	
						}

						for(var j=0;j<ele.length;j++){
							this[j] = ele[j] ;
						}
				
				}
				else if(clsExpr.test(selector)){
					var ary = selector.split('.'),
						tag = ary[0],
						cls = ary[1],
						len,
						all,
						els = [];
						
						if(document.getElementsByClassName){	
							var res = document.getElementsByClassName(cls);
							if(tag){
								for(var i=0,len=res.length; i<len; i++){
									res[i].tagName.toLowerCase()==tag && els.push(res[i]);
								}
								ele = els ;
								this.length = els.length;								
							}else{
								ele = res ;
								this.length = res.length;
							}
						}else{
							all = document.getElementsByTagName(tag || '*');
							ele = filter(all, 'className', cls) ;
							this.length = filter(all, 'className', cls).length;	
						}

						for(var j=0;j<ele.length;j++){
							this[j] = ele[j] ;
						}
				
				}else if(tagExpr.test(selector)){
					this.length = document.getElementsByTagName(selector).length;
					ele = document.getElementsByTagName(selector);
					
					for(var j=0;j<this.length;j++){
						this[j] = ele[j];
					}
				}
		
				this.context = document;
				this.selector = selector;			
				return this;
			}else if(typeof selector === "object"){	
				if (selector.length){
					this.length = selector.length;
					for(var j=0;j < this.length;j++){
						this[j] = selector[j] ;
					}
				}else{
					this.length = 1 ;
					this[0] = selector;			
				}
			}
		},
		addClass : function(cls){
			var me = this ;
			this.each(function() {
				if (! me.hasClass(cls)){
					this.className += " " + cls;
				}
			},arguments);
		},
		after : function(node){
			this.each(function() {
				this.parentNode.insertBefore(node,null)
			});
		},
		append : function(node){
			this.each(function() {
				this.insertBefore(node,null)
			});
		},
		attr : function(name,value){
			if(value){
				this.each(function() {
					this.setAttribute(name,value) ;
				});
			}else{
				this.each(function() {
					this.getAttribute(name) ;
				});
			}
		},
		before : function(node){
			this.each(function() {
				this.parentNode.insertBefore(node,this)
			});
		},
		clone : function(boo){
			var cloneElement = [];
			this.each(function() {
				cloneElement.push(this.cloneNode(boo))		
			});
			return ll.dom(cloneElement)
		},
		css : function (name, value) {
			this.each(function (name, value) {
				this.style[name] = value;
			},arguments);
		},
		data : function(name,value){
			if(value){
				this.each(function() {
					this.setAttribute("data-" + name,value) ;
				});
			}else{
				this.each(function() {
					this.getAttribute("data-" + name) ;
				});
			}
		},
		each : function (callback, args) { 
			return ll.dom.each(this, callback, args);
		},
		empty : function() {
			this.each(function() {
				this.innerHTML = "" ;
			})
		},
		eq : function(n){
			return ll.dom(this[n]);	
		},
		even : function(){
			var evenElement = [];
			for(var i=0;i<this.length;i+=2){
				evenElement.push(this[i])
			}
			return ll.dom(evenElement);		
		},
		fadeIn : function(speed){
			this.each(function () {
				ll.dom(this).fadeTo(1,speed)	
			})
		},
		fadeOut : function(speed){
			this.each(function () {
				ll.dom(this).fadeTo(0,speed)	
			})
		},
		fadeTo : function(toAlpha,speed){
			speed > 100 ? speed = 100 : speed = speed;
			this.each(function () {
				var me = this ,
					nowAlpha = 1;
				if(me.style.display == "none"){
					nowAlpha = 0;
				}
				var getOpacity = function(){
					if(ll.browser.ie){
						if(me.style.filter){
							nowAlpha = (me.style.filter).slice(14,-1)/ 100 ;
						}
					}else{
						if(me.style.opacity){
							nowAlpha = me.style.opacity;					
						}
					}
				}
				getOpacity();
				
				var setOpacity = function(transforAlpha){
					getOpacity();
					if(nowAlpha != toAlpha){
						if(ll.browser.ie){
							me.style.filter = "alpha(opacity=" +  transforAlpha * 100 + ")";
						}else{
							me.style.opacity = transforAlpha;	
						}
					}
				}
				var	timer = setInterval (function(){
					if(toAlpha == 1){
						ll.dom(me).show();
					}
					if ( nowAlpha < toAlpha){
						nowAlpha = nowAlpha - 0 + speed/1000;
						setOpacity(nowAlpha);
					}else if(nowAlpha > toAlpha){
						nowAlpha = nowAlpha - speed/1000;
						setOpacity(nowAlpha);
					}else{
						if(toAlpha == 0){
							ll.dom(me).hide();
						}
						clearInterval(timer);
					}
				},13);			
			})
		},
		first : function(){
			return ll.dom(this[0]);
		},
		getCss : function(address){
			this.each(function() {
				var css = document.createElement('link'); 
				css.type = 'text/css'; 
				css.rel = 'stylesheet';
				css.href = address;
				this.appendChild(css); 		
			});
		},
		getScript : function(address){
			this.each(function() {
				var script = document.createElement('script'); 
				script.type = 'text/javascript'; 
				script.src = address; 
				this.appendChild(script); 	
			});
		},
		gt : function(num){
			var gtElement = [];
			for(var i=num+1;i<this.length;i++){
				gtElement.push(this[i])
			}
			return ll.dom(gtElement);
		},
		hasClass : function(cls){
			var l = false;
			this.each(function() {
				if (this.className.match(new RegExp('(\\s|^)'+cls+'(\\s|$)'))){
					l = true ;
				}else{
					l = false ;
				}
			},arguments)
			return l
		},
		hide : function(){
			this.each(function() {
				this.style.display = "none"; 
			})
		},
		html : function(str){
			this.each(function() {
				this.innerHTML = str; 
			})
		},
		last : function(){
			return ll.dom(this[this.length-1]);
		},
		lt : function(num){
			var ltElement = [];
			for(var i=num-1;i>=0;i--){
				ltElement.push(this[i])
			}
			return ll.dom(ltElement);
		},
		next : function(){
			var nextElement = [];
			var getNextElement = function(n){  
				var x=n.nextSibling;  
				if(x == null) return null;  
				while (x && x.nodeType!=1){  
					x=x.nextSibling;  
				}  
				return x ; 
			}
			this.each(function() {
				nextElement.push(getNextElement(this))		
			});
			return ll.dom(nextElement)
		},
		odd : function(){
			var oddElement = [];
			for(var i=1;i<this.length;i+=2){
				oddElement.push(this[i])
			}
			return ll.dom(oddElement);	
		},
		offset : function(direction){
			var num = [];
			this.each(function() {
				if(direction == "top"){
					num.push(this.offsetTop)
				}else if (direction == "left"){
					num.push(this.offsetLeft)	
				} 
			});
			return num
		},
		on : function(name, fun){
			var me = this ;
			this.each(function(i){
				ll.eventUtil.addHandler(me[i], name, fun);
        	});
        	return this;
    	},
		parent : function(){
			var parentElement = [];
			this.each(function() {
				parentElement.push(this.parentNode);
			});
			return ll.dom(parentElement);
		},
		prepend : function(node){
			this.each(function() {
				this.insertBefore(node,this.firstChild);
			});
		},
		prev : function(){
			var prevElement = [];
			var getPrevElement = function(n){  
				var x=n.previousSibling;  
				if(x == null) return null;  
				while (x && x.nodeType!=1){  
					x=x.previousSibling;  
				}  
				return x ; 
			} 
			this.each(function() {
				prevElement.push(getPrevElement(this))		
			});
			return ll.dom(prevElement)
		},
		remove : function() {
			this.each(function() {
				this.parentNode.removeChild(this);
			})
		},
		removeAttr : function(name){
			this.each(function() {
				this.removeAttribute(name) ;
			});
		},
		removeClass : function(cls){
			var me = this ;
			this.each(function() {
				if (me.hasClass(cls)){
					var reg = new RegExp('(\\s|^)'+cls+'(\\s|$)');
					this.className = this.className.replace(reg,' ');
				}
			},arguments);
		},
		replace : function(node){
			this.each(function() {
				this.parentNode.replaceChild(node,this)
			});
		},
		show : function(){
			this.each(function() {
				this.style.display = "block"; 
			})
		},
		sibilings : function(tagName){
			var sibilingsElement = [],
				tagName = tagName || "*";
			this.each(function() {
				var thisSibilings = this.parentNode.getElementsByTagName(tagName);
				for(var n=0;n<thisSibilings.length;n++){
					sibilingsElement.push(thisSibilings[n])
				}
			});
			for(var i=0;i<sibilingsElement.length;i++){
				if( sibilingsElement[i] == this[0] ){
					ll.array.removeAt(sibilingsElement,i)
				}	
			}
			return ll.dom(sibilingsElement);
		},
		size: function () { 
			return this.length;
		}, 
		slice : function(start,end){
			var sliceElement = [];
			for(var i=start ;i<end;i++){
				sliceElement.push(this[i])
			}
			return ll.dom(sliceElement);
		},
		text: function (val) {
			if (val) {
				this.each(function () {
					if (typeof(this.innerText) != 'undefined'){
						this.innerText = val
					} else{
						this.textContent = val		
					}
				})
			}
			return this;
		},
		toggle : function(){
			this.each(function() {
				if (this.style.display == "none"){
					this.style.display = "block" ;
				}else{
					this.style.display = "none" ;	
				}
			})
		}
	}
	
	ll.dom.fn.init.prototype = ll.dom.prototype;	
	ll.dom.each = function (object, callback, args) {
		var i = 0, length = object.length;
		if (args === undefined) {
			for (var value = object[0];i < length && callback.call(value, i, value) !== false;value = object[++i]){}
		}else{
			for (; i < length; ) {
				if (callback.apply(object[i++], args) === false) {
					break;
				}
			}
		}
	}
}

/*--------------8<--------------8<-------DOM End-------8<--------------8<-------------*/

/*--------------8<--------------8<-------------8<--------------8<-------------8<--------------8<-------------*/	

/*--------------8<--------------8<-------EventUtil Begin-------8<--------------8<-------------*/
if (typeof ll.eventUtil !== 'object'){
	ll.eventUtil = {
		addHandler: function(elem,type,handler){
			if (elem.addEventListener) {
				elem.addEventListener(type, handler, false);
			}else if(elem.attachEvent){
				elem.attachEvent('on' + type, handler);
			}else{
				elem["on"+ type ] = handler;
			}
		},
		removeHandler: function(elem,type,handler){
			if (elem.removeEventListener) {
				elem.removeEventListener(type, handler, false);
			}else if(elem.detachEvent){
				elem.detachEvent('on'+ type,handler);
			}else{
				elem["on"+type] = handler;
			}
		},
		getEvent: function(event){
			return event ? event : window.event;
		},
		getTarget: function(event){
			return event.target || event.srcElement;
		},
		preventDefault: function(){
			if(event.preventDefault){
				event.preventDefault;
			}else{
				event.returnValue = false;
			}
		},
		stopPropagation: function(event){
			if(event.stopProgation){
				event.stopProgation;
			}else{
				event.cancalBubble = true;
			}
		}
	}
}
/*--------------8<--------------8<-------EventUtil End-------8<--------------8<-------------*/	

/*--------------8<--------------8<-------------8<--------------8<-------------8<--------------8<-------------*/	

/*--------------8<--------------8<-------Img Begin-------8<--------------8<-------------*/
if (typeof ll.img !== 'object'){
	ll.img = {
		preload : function(argument){
			var imageArray = new Array(argument.length);
			for(var i=0; i < argument.length; i++){
				imageArray[i] = new Image;
				imageArray[i].src = argument[i];
			}
		}
	}
}
/*--------------8<--------------8<-------Img End-------8<--------------8<-------------*/

/*--------------8<--------------8<-------------8<--------------8<-------------8<--------------8<-------------*/

/*--------------8<--------------8<-------Math Begin-------8<--------------8<-------------*/		
if (typeof ll.math !== 'object'){
	ll.math = {
		randomColor : function(){
			var color = Math.random(0, 0xFFFFFF);
			return '#' + ('000000' + color.toString(16)).slice(-6);
		},
		randomNum : function(begin,end){
			var c = end - begin + 1;	
			return Math.floor(Math.random() * c + begin);
		},
		sum : function(){
			var args = ll.string.toArray.apply(null, arguments);
			if (args.length == 1){ 
				return args[0]
			}else{
				return args[0] + ll.math.sum.apply(null, args.slice(1, args.length));
			}
		}
	}
}
/*--------------8<--------------8<-------Math End-------8<--------------8<-------------*/

/*--------------8<--------------8<-------------8<--------------8<-------------8<--------------8<-------------*/	

/*--------------8<--------------8<-------page Begin-------8<--------------8<-------------*/
if (typeof ll.page !== 'object'){
	ll.page = {
		getHeight : function () {
			var doc = document,
			body = doc.body,
			html = doc.documentElement,
			client = doc.compatMode == 'BackCompat' ? body : doc.documentElement;
			return Math.max(html.scrollHeight, body.scrollHeight, client.clientHeight);
		},
		getScrollTop : function () {
			var d = document;
			return window.pageYOffset || d.documentElement.scrollTop || d.body.scrollTop ;
		},
		getScrollLeft : function () {
			var d = document;
			return window.pageXOffset || d.documentElement.scrollLeft || d.body.scrollLeft;
		},
		getViewHeight : function () {
			var doc = document,
			client = doc.compatMode == 'BackCompat' ? doc.body : doc.documentElement;
			return client.clientHeight;
		},
		getViewWidth : function () {
			var doc = document,
			client = doc.compatMode == 'BackCompat' ? doc.body : doc.documentElement;
			return client.clientWidth;
		},
		getWidth : function () {
			var doc = document,
			body = doc.body,
			html = doc.documentElement,
			client = doc.compatMode == 'BackCompat' ? body : doc.documentElement;
			return Math.max(html.scrollWidth, body.scrollWidth, client.clientWidth);
		},
		rollTo : function(endPointElement,speed){
			var nowScrollY = window.scrollY,
				endPoint = document.getElementById(endPointElement.substr(1)).offsetTop;
			if(nowScrollY != endPoint){
				speed ? speed : 50 ;
				for(var i = 1; i < speed; i*=10){
					if (speed/i < 10 ) {
						break
					}
				}	
				if(endPoint > speed){
					var	timer = setInterval (function(){
						if ( nowScrollY < endPoint - i || nowScrollY > endPoint + i){
							if(nowScrollY < endPoint){
								nowScrollY = nowScrollY + speed ;
							}else if(nowScrollY > endPoint){
								nowScrollY = nowScrollY - speed ;
							}
							window.scroll(0, nowScrollY);
						}else{
							clearInterval(timer);
						}
					},13);	
				}else{
					window.scroll(0, endPoint);	
				}
			}
		},
		rollToBottom : function(speed){
			var nowScrollY = window.scrollY,
				pageHeight = document.body.scrollHeight,
				timer = setInterval (function(){
					if ( nowScrollY <= pageHeight ){
						nowScrollY = nowScrollY + ( speed ? speed : 50 );
						window.scroll(0, nowScrollY);
					}else{
						clearInterval(timer);	
					}
				},13);
		},
		rollToTop : function(speed){
			var nowScrollY = window.scrollY;
			if(nowScrollY > 0 ){
				var	timer = setInterval (function(){
					if ( nowScrollY >=0 ){
						nowScrollY = nowScrollY - ( speed ? speed : 50 )  ;
						window.scroll(0, nowScrollY);
					}else{
						clearInterval(timer);
					}
				},13);
			}
		}
	}
}

/*--------------8<--------------8<-------page End-------8<--------------8<-------------*/

/*--------------8<--------------8<-------------8<--------------8<-------------8<--------------8<-------------*/

/*--------------8<--------------8<-------platform Begin-------8<--------------8<-------------*/
if (typeof ll.platform !== 'object'){
	ll.platform = {
		isAndroid : /android/i.test(navigator.userAgent),
		isBlackBerry : /BlackBerry/i.test(navigator.userAgent),
		isIpad : /ipad/i.test(navigator.userAgent),
		isIphone : /iphone/i.test(navigator.userAgent),
		isMacintosh : /macintosh/i.test(navigator.userAgent),
		isMobile : !!navigator.userAgent.match(/AppleWebKit.*Mobile.*/) || !!navigator.userAgent.match(/AppleWebKit/),
		isWindows : /windows/i.test(navigator.userAgent),
		isX11 : /x11/i.test(navigator.userAgent)
	}
}
/*--------------8<--------------8<-------platform End-------8<--------------8<-------------*/

/*--------------8<--------------8<-------------8<--------------8<-------------8<--------------8<-------------*/	

/*--------------8<--------------8<-------regExp Begin-------8<--------------8<-------------*/
if (typeof ll.regExp !== 'object'){
	ll.regExp = {
		isAdult : function(str){
			var s = str;
			if( ll.regExp.isIdcard(s)){
				var birthday = (new Date(s.slice(6,10),s.slice(10,12)-1,s.slice(12,14)))
				 ,  today = (new Date()) ;
				 return ( today - birthday > 18 * 365 * 24 * 60 * 60 * 1000 )
			}else{
				return false	
			}		
		},
		isChinese : function(str){
			var reg = /^[\u4E00-\u9FFF]+$/ ;
			return reg.test(str);
		},
		isDate : function(str){
			var reg = /^\d{4}-\d{1,2}-\d{1,2}$/;
			return reg.test(str);
		},
		isEmail : function(str){
			var reg = /^([a-zA-Z0-9_-])+@([a-zA-Z0-9_-])+((\.[a-zA-Z0-9_-]{2,3}){1,2})$/;
			return reg.test(str);
		},
		isIdcard : function(str){
			var reg = /^(\d{14}|\d{17})(\d|[xX])$/;
			return reg.test(str);
		},
		isMobile : function(str){
			var reg = /^0*(13|14|15|18)\d{9}$/;
			return reg.test(str);
		},
		isQQ : function(str){
			var reg = /^[1-9][0-9]{4,}$/;
			return reg.test(str);
		},
		isTel : function(str){
			var reg = /^\d{3,4}-\d{7,8}(-\d{3,4})?$/ ;
			return reg.test(str);	
		},
		isURL : function(str){
    		var reg = /http:\/\/[A-Za-z0-9\.-]{3,}\.[A-Za-z]{3}/ ;
			return reg.test(str);
		}
	}
}
/*--------------8<--------------8<-------regExp End-------8<--------------8<-------------*/

/*--------------8<--------------8<-------------8<--------------8<-------------8<--------------8<-------------*/

/*--------------8<--------------8<-------String Begin-------8<--------------8<-------------*/
if (typeof ll.string !== 'object'){
	ll.string = window.ll.string = function (Str) {
		return new ll.string.fn.init(Str) ;
	}
	ll.string.fn = ll.string.prototype = {                                                   
		init : function (Str) {
			if(typeof Str === "string"){	
				this[0] = Str;	
			}
		},
		filterText : function(badWords) {
			var str = this[0],
				re = new RegExp(badWords,"g");  
			result = str.replace(re,"****"); 
			return(result);
		},
		isNotaNumber : function(){
			var str = this[0];
			return isNaN(str);
		},
		noNumbers : function (){
			var str = this[0],
				searchForNumbers = /\d/;
			return (searchForNumbers.test(str) == false);
		}, 
		onlyNumbers: function(){
			var str = this[0],
				searchForNonNumbers = /\D+/;
			return (searchForNonNumbers.test(str) == false);
		},
		removeWhitespace: function() {
			var str = this[0],
				firstNonWhite = str.search(/\S/);
			if (firstNonWhite != -1){
				for (var i=str.length-1; i >= 0; i--){
					if (str.charAt(i).search(/\S/) != -1){
						str = str.substring(firstNonWhite, i+1);
						break;
					}
				}
			}
			return str;
		},
		toArray : function(){
			var str = this[0],
				args = [];
			
			for(var i=0; i<str.length; i++) {
				args.push(str[i]);
			}
			return args
		}
	}
	ll.string.fn.init.prototype = ll.string.prototype;
}
/*--------------8<--------------8<-------String End-------8<--------------8<-------------*/

/*--------------8<--------------8<-------------8<--------------8<-------------8<--------------8<-------------*/

/*--------------8<--------------8<-------URL Begin-------8<--------------8<-------------*/

if (typeof ll.url !== 'object'){
	ll.url = {
		getQueryString : function(){
			var result = [], queryString = location.search.substring(1)
			,	re = /([^&=]+)=([^&]*)/g, m;
			while (m = re.exec(queryString)) {
				result[decodeURIComponent(m[1])] = decodeURIComponent(m[2]);
			}
			return result;
		},
		getUrlParm : function(name){
			var regexS = "[\\?&]"+name+"=([^&#]*)"
			, regex = new RegExp( regexS ) 
			, tmpURL = window.location.href 
			, results = regex.exec( tmpURL ) ;
			if( results == null ){
				return "" ;
			}else{
				return results[1]
			}
		},
		getUrlVars : function (){
			var vars = []
			  , hash
			  , hashes = window.location.href.slice(window.location.href.indexOf('?') + 1).split('&');
			for(var i = 0; i < hashes.length; i++){
				hash = hashes[i].split('=');
				vars.push(hash[0]);
				vars[hash[0]] = hash[1];
			}
			return vars;
		}
	}
}
/*--------------8<--------------8<-------URL End-------8<--------------8<-------------*/

/*--------------8<--------------8<-------------8<--------------8<-------------8<--------------8<-------------*/

// --------------------------------------------------------------------------------------------------------------------------------
// --------------------------------------------------------------------------------------------------------------------------------

/*--------------8<--------------8<-------The End-------8<--------------8<-------------*/

//--------------------------------------------------------------------------------------------------------------------------------
// --------------------------------------------------------------------------------------------------------------------------------