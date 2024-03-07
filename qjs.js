let question_count = 0;

let points = 0;

var bot = document.getElementById("btn-next");

let user_answer;

let e;

let cor = 0;

let uco = 0;

let namee;

let ty =0;

let cin = 0;

function ttf(){

gh()

document.querySelector(".afte").style.display="none";

document.querySelector("body").style.background="#000";

document.getElementById("fin").style.display="block";


}

function submitted(z){

z.preventDefault();

namee = document.forms["id"]["name"].value;

document.querySelector(".name").innerHTML = namee;

document.getElementById("start").style.display="none";

document.querySelector(".wrapper").style.display="flex";



} window.onload = function(){

show(question_count);

};

function show(count){

let question = document.getElementById("questions");

let[first,second,third,fourth] = questions[count].options;

question.innerHTML = `<span id="h22"><span id="qu">السؤال رقم : </span><span id="qq">${count + 1}</span><span id="nnn"> من : <span id="qn">${questions.length}</span> أسئلة </span>${questions[count].question}</span>

<dl class="option_group">

<li class="option">${first}</li>

<li class="option">${second}</li>

<li class="option">${third}</li>

<li class="option">${fourth}</li>

</dl>`;

toggleActive();

}

function toggleActive(){

let option = document.querySelectorAll("li.option");

for(let i= 0; i<option.length; i++){

option[i].onclick = function(){

for(let i=0; i<option.length; i++){

if(option[i].classList.contains("active")){

option[i].classList.remove("active");

}

}

option[i].classList.add("active")


}

}


cin++

let b= ((cin / questions.length )* 100).toFixed(0);

document.getElementById("file").value+= 10 / questions.length

document.getElementById("nesus").innerHTML = b + '%';



}


function next(){

if(question_count == questions.length -1 && document.querySelector("li.option.active").innerHTML ){

document.querySelector(".afte").style.display="flex";

document.getElementById("allq").style.display="none";
}

console.log(question_count);

let user_answer = document.querySelector("li.option.active").innerHTML

if(document.querySelector("li.option.active").innerHTML){

e = document.querySelector("li.option.active").innerHTML}


if(user_answer == questions[question_count].answer){

points += 2;

cor++;

sessionStorage.setItem("points",points);

nn = questions.length * 2;

nss = ((points / nn) * 100).toFixed(1);

bot.style.background ="#4FFF20";

bot.innerHTML = `<span id="sah">صح</span>`;

let poi = document.getElementById("poi");


}

else{

bot.style.background = "red";

bot.innerHTML = `<span id="sah">خطأ</span>`

uco++

}

console.log(points);

toww()

question_count++;

show(question_count);

}

var sec = 0;

var mint = 0;

var timer;

var ele = document.getElementById("timer");

(function(){

timer = setInterval(() => {

ele.innerHTML = mint + ':' + sec;

sec++

while(sec == 60){

mint++

sec = +0

}

}, 1000)

})()

let count = 0;

function toww(){

let boto = document.getElementById("fin");

let op1 = document.querySelectorAll("li.op1");

let op2 = document.querySelectorAll("li.op2");

B = questions[count].answer;

if (e == B){


boto.innerHTML += `<span class="h22"><span id="qu"> إجابة السؤال رقم : </span><span id="qq">${count + 1}</span>${questions[count].question}</span>

<dl class="option_grou">

<li class="op2"><span class="B">${questions[count].answer}</span><span id="lzcorr">إجابتك صحيحة</span></li>

</dl>

<dl class="nft">

<li><a href="https://www.facebook.com/profile.php?id=61550724900793"><img src='https://blogger.googleusercontent.com/img/b/R29vZ2xl/AVvXsEiMCWWB71tSVFJ9-j22kuaShNWSwBUsewI61lw0A6eWN3puhlEbapRcbAAOdrJGneeOAbc9T6-Rv9s-KchwaBCfJwVvSCZo1IAVo426a13oL4tFvMM15yAoYG1ChWr_jIezEWW9k_v6dgdneA-BjnxYN-a1hID9GbscWJa7qMZvUfpwBe4olQDOxo-6R94N/s320/icon%281%29.png'/></a></li>

<li style="color:#fff">👈تابعنا على👉</li>

<li><a href="https://t.me/thanawey_2024"><img id="tjpgn" src="https://blogger.googleusercontent.com/img/b/R29vZ2xl/AVvXsEiCsqqHUNx6aNNOvVEgN3o7_yn3ziQyt-r9IQ53vZyo7M9l7nx6UdS2FI7IxZx14Eqpm2kp9CX6w508HOrR9bUITmZkVJAuoSiph8OorVdRjj28UleW22cLUMW-JKgglYA8lJVQP4jr_HlGr8RysgeFlwB8lqanU2vnNI7b3MmxXd6gtLwBAB9s7qQ5yDon/s320/ic_launcher.png" style="width:60px"></a></li>

</dl>`

}

if (e != B){


boto.innerHTML += `<span class="h22"><span id="qu"> إجابة السؤال رقم : </span><span id="qq">${count + 1}</span>${questions[count].question}</span>

<dl class="option_grou">

<li class="op1"><span class="A">${e}</span><span id="locor">إجابتك خاطئة</span></li>

<li class="op2"><span class="B">${questions[count].answer}</span><span id="lzcorr">الإجابة الصحيحة</span></li>

</dl>

<dl class="nft">

<li><a href="https://www.facebook.com/profile.php?id=61550724900793"><img src='https://blogger.googleusercontent.com/img/b/R29vZ2xl/AVvXsEiMCWWB71tSVFJ9-j22kuaShNWSwBUsewI61lw0A6eWN3puhlEbapRcbAAOdrJGneeOAbc9T6-Rv9s-KchwaBCfJwVvSCZo1IAVo426a13oL4tFvMM15yAoYG1ChWr_jIezEWW9k_v6dgdneA-BjnxYN-a1hID9GbscWJa7qMZvUfpwBe4olQDOxo-6R94N/s320/icon%281%29.png'/></a></li>

<li style="color:#fff">👈تابعنا على👉</li>

<li><a href="https://t.me/thanawey_2024"><img id="tjpgn" src="https://blogger.googleusercontent.com/img/b/R29vZ2xl/AVvXsEiCsqqHUNx6aNNOvVEgN3o7_yn3ziQyt-r9IQ53vZyo7M9l7nx6UdS2FI7IxZx14Eqpm2kp9CX6w508HOrR9bUITmZkVJAuoSiph8OorVdRjj28UleW22cLUMW-JKgglYA8lJVQP4jr_HlGr8RysgeFlwB8lqanU2vnNI7b3MmxXd6gtLwBAB9s7qQ5yDon/s320/ic_launcher.png" style="width:60px"></a></li>

</dl>`;

}

count++

}

function gh(){

poi.innerHTML += `درجتك يا <span id="pn">${namee}</span> هى : <span id="pp"> ${points} درجة</span> <br>

من الدرجة الكلية : <span id="pnn">${nn} درجة</span><br>

النسبة : <span id

="pns">${nss} %</span><br>

عدد الإجابات الصحيحة : <span id="cc">${cor} إجابات</span> <br>

عدد الإجابات الخاطئة : <span id="uc">${uco} إجابات </span> <br>

الوقت المستغرق <span id="ptm">${mint} دقيقة و </span><span id="ps">${sec} ثانية</span><br>

<span id="endp"> 👇متنساش تصلى على النبى وتشترك بقناة التليجرام 👇 </span> <br>

<span id="etel"><a href="https://t.me/thanawey_2024"><img id="tjpg"  style="width:100px"></a>`

}
