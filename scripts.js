var timeoutTime = 950;
var currentEmoji = "&#128293;";
var lastTrail = performance.now();
var limitTrail = 20;

function mouseTrail(e){
    if (limitTrail > performance.now() - lastTrail){
        return;
    }
    lastTrail = performance.now();
    var htmlElement = document.createElement("div");
    htmlElement.innerHTML = currentEmoji;
    htmlElement.className = "emoji-style fade-out";
    htmlElement.style.left = e.pageX + "px";
    htmlElement.style.top = e.pageY + "px";
    htmlElement = document.body.appendChild(htmlElement);
    setTimeout(function(){
        htmlElement.remove();
    }, timeoutTime);
}

function setLimitTrail(num){
    limitTrail = num;
    //console.log(limitTrail + lastTrail);
    document.getElementById("limitTrailValue").innerText = limitTrail;
}

function setTimeoutTime(num){
    timeoutTime = num;
    document.getElementById("timeoutTimeValue").innerText = timeoutTime;
}

document.getElementById("body").addEventListener("mousemove", e => mouseTrail(e), false);
document.getElementById("limitTrail").addEventListener("change", e => setLimitTrail(e.target.value.valueOf()), false)
document.getElementById("timeoutTime").addEventListener("change", e => setTimeoutTime(e.target.value.valueOf()), false)
document.getElementById("limitTrailValue").innerText = limitTrail;
document.getElementById("timeoutTimeValue").innerText = timeoutTime;

