const data = {

"class":{
level:"hard",
desc:"Создает класс",
code:"public class Person { }"
},

"public":{
level:"easy",
desc:"Доступен из любого места",
code:"public int age;"
},

"private":{
level:"easy",
desc:"Доступ только внутри класса",
code:"private int password;"
},

"static":{
level:"hard",
desc:"Принадлежит классу",
code:"static int count;"
},

"void":{
level:"easy",
desc:"Метод ничего не возвращает",
code:"public void start(){}"
},

"int":{
level:"easy",
desc:"Целое число",
code:"int number = 5;"
},

"if":{
level:"easy",
desc:"Условие",
code:"if(age > 18){}"
},

"else":{
level:"easy",
desc:"Иначе",
code:"if(a){} else{}"
},

"switch":{
level:"hard",
desc:"Выбор варианта",
code:"switch(day){}"
},

"for":{
level:"easy",
desc:"Цикл",
code:"for(int i=0;i<10;i++){}"
},

"while":{
level:"easy",
desc:"Цикл пока true",
code:"while(x>0){}"
},

"return":{
level:"easy",
desc:"Возвращает значение",
code:"return result;"
},

"new":{
level:"easy",
desc:"Создает объект",
code:"Car car = new Car();"
},

"try":{
level:"hard",
desc:"Обработка ошибок",
code:"try {} catch(Exception e){}"
},

"catch":{
level:"hard",
desc:"Ловит ошибку",
code:"catch(Exception e){}"
},

"finally":{
level:"hard",
desc:"Всегда выполняется",
code:"finally{}"
}

};

let currentCategory = "easy";

function toggleMenu(){

let menu = document.getElementById("sidebar");

if(menu.style.left === "0px"){
menu.style.left = "-250px";
}else{
menu.style.left = "0px";
}

}

function showList(words){

let list=document.getElementById("list");
list.innerHTML="";

words.forEach(word=>{

let div=document.createElement("div");
div.className="word";
div.textContent=word;

div.onclick=function(){
showInfo(word);
};

list.appendChild(div);

});

}

function showInfo(word){

let info=document.getElementById("info");
info.style.display="block";

info.innerHTML=
"<h2>"+word+"</h2>"+
"<p>"+data[word].desc+"</p>"+
"<pre>"+data[word].code+"</pre>";

}

function searchWords(){

let text=document.getElementById("search").value.toLowerCase();

let words=Object.keys(data);

let filtered=words.filter(w =>
data[w].level === currentCategory &&
w.includes(text)
);

showList(filtered);

}

function filterCategory(category){

currentCategory = category;
searchWords();

}

document.addEventListener("DOMContentLoaded", function(){

document.getElementById("search").addEventListener("input", searchWords);

searchWords();

});