let target = document.querySelector(".backend");

function randomString(){
    let stringArr = ["Backend developer", "Backend engineer"]
    let selectString = stringArr[Math.floor(Math.random()*stringArr.length)]
    let selectStringArr = selectString.split("");
    return selectStringArr;    
}

//타이핑 리셋
function resetTyping(){
    target.textContent = "";
    backend(randomString());
}


//한글자씩 텍스트 출력 함수
function backend(randomArr){
    if(randomArr.length >0){
        target.textContent += randomArr.shift();
        setTimeout(function(){
            backend(randomArr);
        },100);
    }else{
        setTimeout(resetTyping, 3000);
    }
}
backend(randomString());


//커서 깜빡임 효과
function blink(){
    target.classList.toggle("active");
}
setInterval(blink,500)