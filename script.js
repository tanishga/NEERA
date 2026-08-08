var neera;
var girl;
var bubble;
var picture;
var message;
var texts;

texts=[
    "Had water?", "Drink some water!", "Stay hydrated!", "Water time!", "Go drink some water! Pretty Please..."
];


neera=document.getElementById("neera");
girl=document.getElementById("girl");
bubble=document.getElementById("bubble");
message=document.getElementById("message");

function walkIn(){
    document.getElementById("yesButton").disabled=false;
    bubble.style.display="none";
    girl.src="images/neera_walk1.png"; 
    picture=setInterval(changePicture,300);
    neera.style.right="20px";
    setTimeout(stopWalking, 2000);
}

function changePicture(){
    if(girl.src.indexOf("walk1") != -1){
        girl.src="images/neera_walk2.png";
    }
    else{
        girl.src="images/neera_walk1.png";
    }
}

function stopWalking(){
    clearInterval(picture);
    girl.src="images/neera_idle.png";
    setTimeout(showBubble,500);
}

function showBubble(){
    changeText();
    bubble.style.display="block";
    showNotification();
}

function yesButton(){
    document.getElementById("yesButton").disabled=true;
    girl.src="images/neera_happy.png";
    message.innerHTML="Yay! Thanks!";
    setTimeout(goHome,1000);
}

function laterButton(){
    girl.src="images/neera_happy.png";
    message.innerHTML="Okay!";
    setTimeout(remindLater,1000);
}

function walkOut(){
    picture=setInterval(changePicture,300);
    neera.style.right="-220px";
    setTimeout(stopOustide, 2000);
}

function remindLater(){
    bubble.style.display="none";
    walkOut();
    setTimeout(walkIn,300000);
}

function stopOustide(){
    clearInterval(picture);
    girl.src="images/neera_idle.png";
}

function goHome(){
    bubble.style.display="none";
    walkOut();
}

function changeText(){
    var number;
    number=Math.floor(Math.random()*texts.length);
    message.innerHTML=texts[number];
}

document.getElementById("yesButton").onclick=yesButton;
document.getElementById("laterButton").onclick=laterButton;

setTimeout(walkIn,2000)

setInterval(walkIn,7200000);

function showNotification(){
    if(Notification.permission=="granted"){
        new Notification("NEERA",{
            body:"Had water?"
        });
    }
}

Notification.requestPermission();