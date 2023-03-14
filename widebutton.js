setTimeout(function() {
    const wideScreenElement = document.querySelector('.nng_btn_control.wide');

    wideScreenElement.addEventListener("click", setPageWatchChat);
}, 2000);

// wideScreenElement.addEventListener("click", async () => {
//     let [tab] = await chrome.tabs.query({ active: true, currentWindow: true });

//     chrome.scripting.executeScript({
//     target: { tabId: tab.id },
//     function: setPageWatchChat,
//     });
// });

function setPageWatchChat() {
    var windowWidth = window.innerWidth - 20;
    var windowHeight = window.innerHeight;
    var videoWidth = windowWidth - 360

    console.log(videoWidth)
    
    // 헤더를 마우스 올릴때만 보이게
    var elements = document.querySelectorAll('[class*="header_content"]');
    header_content = elements[0];
    var elements = document.querySelectorAll('[class*="header_sub_menu"]');
    sub_menu = elements[0];
    
    const header = document.getElementById("header");
    header.style.opacity = "0";
    header.style.width = videoWidth + "px";
    
    header.addEventListener("mouseover", () => {
        header.style.opacity = "1";
    });
    
    header.addEventListener("mouseout", () => {
        header.style.opacity = "0";
    });
    
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
    
    // setTimeout(function() {
    //     var elements = document.querySelectorAll('[class*="chat_chatting_area"]');
    //     var element = elements[0]
    
    //     element.style.maxHeight = (videoWidth/1.7) + "px";
    
    //     var elements = document.querySelectorAll('[class*="chat_content"]');
    //     var element = elements[0]
    
    //     element.style.height = (videoWidth/1.7) + "px";
    // }, 2000);
    var elements = document.querySelectorAll('[class*="chat_chatting_area"]');
    var element = elements[0]

    element.style.maxHeight = (videoWidth/1.7) + "px";

    var elements = document.querySelectorAll('[class*="chat_content"]');
    var element = elements[0]

    element.style.height = (videoWidth/1.7) + "px";
}