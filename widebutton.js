var flag = true;
var timeOut = 0;

window.onload = function(){
    let intervalId = setInterval(function() {
        var wideScreenElement = document.querySelectorAll('[class*="nng_btn_control.wide"]')[0]

        if(!wideScreenElement){
            var wideScreenElement = document.querySelectorAll('[class*="pzp-pc-viewmode-button"]')[0];
        }
        timeOut = timeOut + 1;
        if(timeOut > 20){
            clearInterval(intervalId);
            console.log("time out")
        }
        if (wideScreenElement) {
            console.log("WideScreenElement is Exist")
            // console.log(wideScreenElement)
            wideScreenElement.addEventListener("click", function(){
                if(flag){
                    setPageWatchChat();
                    flag = false;
                }
                else{
                    setOriginalChat();
                    flag = true;
                }
            });
          clearInterval(intervalId);
        }
      }, 500);
}

function onMouseOverHandler() {
    var element = document.getElementById("header");
    element.style.opacity = "1";
}
  
function onMouseOutHandler() {
    var element = document.getElementById("header");
    element.style.opacity = "0";
}

function setPageWatchChat() {
    var windowWidth = window.innerWidth - 20;
    var windowHeight = window.innerHeight;
    var videoWidth = windowWidth - 360

    // 헤더를 마우스 올릴때만 보이게
    const header = document.getElementById("header");
    header.style.opacity = "0";
    header.style.width = videoWidth + "px";
    
    header.addEventListener("mouseover", onMouseOverHandler);
    header.addEventListener("mouseout", onMouseOutHandler);
    
    // 잡다한거 지움
    var elements = document.querySelectorAll('[class*="lounge_cover"]');
    var element = elements[0]
    element?.remove();
    
    // live_container__vlznp에서 padding-top을 0px
    var elements = document.querySelectorAll('[class*="live_container"]');
    elements[0].style.paddingTop = "0px"
    
    //live_player_wrap 비디오 width 조절
    var elements = document.querySelectorAll('[class*="live_player_wrap"]');
    var element = elements[0]
    
    element.style.width = (windowWidth + 50) + "px";
    
    //live_video_wrap__1LuN7 에서 크기조절
    //live_video_wrap__1LuN7 에서 마진 조절
    var elements = document.querySelectorAll('[class*="live_video_wrap"]');
    var element = elements[0]
    
    element.style.width = videoWidth + "px";
    element.style.height = (videoWidth/1.7) + "px";
    element.style.margin = "0px"
    
    if((videoWidth/1.7) > windowHeight){
        element.style.width = (windowHeight*1.7) + "px";
        element.style.height = windowHeight + "px";
    }

    //live_inView 에서 크기조절
    var elements = document.querySelectorAll('[class*="live_inView"]');
    var element = elements[0]
    
    element.style.width = videoWidth + "px";
    element.style.height = (videoWidth/1.7) + "px";
    
    if((videoWidth/1.7) > windowHeight){
        element.style.width = (windowHeight*1.7) + "px";
        element.style.height = windowHeight + "px";
    }
    
    //live_pc_content width 조절
    var elements = document.querySelectorAll('[class*="live_pc_content"]');
    var element = elements[0]
    
    element.style.width = windowWidth + "px";
    element.style.margin = "0px";
    
    var elements = document.querySelectorAll('[class*="live_content_left"]');
    var element = elements[0]
    
    element.style.marginTop = "0px";
    
    //live_content_right__16wTl 에서 탑 마진 조절
    var elements = document.querySelectorAll('[class*="live_content_right"]');
    var element = elements[0]
    
    element.style.marginTop = (-videoWidth/1.7) + "px";
    
    var elements = document.querySelectorAll('[class*="chat_chatting_area"]');
    var element = elements[0]

    element.style.maxHeight = (videoWidth/1.7) + "px";

    var elements = document.querySelectorAll('[class*="chat_content"]');
    var element = elements[0]

    element.style.height = (videoWidth/1.7) + "px";
}

function setOriginalChat() {
    // 헤더를 마우스 올릴때만 보이게
    
    const header = document.getElementById("header");
    
    header.removeEventListener("mouseover", onMouseOverHandler);
    header.removeEventListener("mouseout", onMouseOutHandler);
    header.removeAttribute('style');
    
    // 잡다한거 지움
    var elements = document.querySelectorAll('[class*="lounge_cover"]');
    var element = elements[0]
    element?.remove();
    
    // live_container__vlznp에서 padding-top을 0px
    var elements = document.querySelectorAll('[class*="live_container"]');
    elements[0].removeAttribute('style');
    
    //live_player_wrap 비디오 width 조절
    var elements = document.querySelectorAll('[class*="live_player_wrap"]');
    var element = elements[0]
    
    element.removeAttribute('style');
    
    //live_video_wrap__1LuN7 에서 크기조절
    //live_video_wrap__1LuN7 에서 마진 조절
    var elements = document.querySelectorAll('[class*="live_video_wrap"]');
    var element = elements[0]
    
    element.removeAttribute('style');

    //live_inView 에서 크기조절
    var elements = document.querySelectorAll('[class*="live_inView"]');
    var element = elements[0]
    
    element.removeAttribute('style');

    //live_pc_content width 조절
    var elements = document.querySelectorAll('[class*="live_pc_content"]');
    var element = elements[0]
    
    element.removeAttribute('style');
    
    var elements = document.querySelectorAll('[class*="live_content_left"]');
    var element = elements[0]
    
    element.removeAttribute('style');
    
    //live_content_right__16wTl 에서 탑 마진 조절
    var elements = document.querySelectorAll('[class*="live_content_right"]');
    var element = elements[0]
    
    element.removeAttribute('style');
    
    var elements = document.querySelectorAll('[class*="chat_chatting_area"]');
    var element = elements[0]

    element.removeAttribute('style');

    var elements = document.querySelectorAll('[class*="chat_content"]');
    var element = elements[0]

    element.removeAttribute('style');
}