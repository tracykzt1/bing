
// 使用原生js的方法解决跨域

var inputTxt = document.getElementById('inputTxt'),
	listUl = document.getElementById('listUl');


//getInfo函数要放到全局作用域里，不然会报错！
function getInfo(resData){
	listUl.innerHTML = "";
	var dataLen = resData.result.length;
	for (var i = 0; i < dataLen; i++) {
		listUl.innerHTML += "<li>" + resData.result[i].word + "</li>";
	}
}

inputTxt.onkeyup = function(e) {
	var keyWords = this.value;
	keyWords = keyWords.trim();
	if (keyWords.length > 0) {
		listUl.style.display = "block";
		var script = document.createElement("script"),
			url = "https://sug.so.360.cn/suggest?callback=getInfo&encodein=utf-8&encodeout=utf-8&format=json&fields=word&word="+keyWords//360搜索接口
		script.setAttribute("src", url);
		document.body.appendChild(script);
	}else{
		listUl.style.display = "none";
	}
}



inputTxt.onfocus = function() {
	if (!(this.value == '')) {
		listUl.style.display = "block";
	}
}

inputTxt.onblur = function() {
	listUl.style.display = "none";
};


