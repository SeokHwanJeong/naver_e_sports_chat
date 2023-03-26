let isolateButton = document.getElementById('isolate-button');

var flag = true;
// 버튼을 클릭했을때, 현재 페이지 설정을 바꿉니다.
isolateButton.addEventListener("click", async () => {
    let [tab] = await chrome.tabs.query({ active: true, currentWindow: true });
    if(flag){
        flag = false;
        chrome.scripting.executeScript({
        target: { tabId: tab.id },
        function: setPageWatchChat,
        });
    }
    else{
        flag = true;
        chrome.scripting.executeScript({
        target: { tabId: tab.id },
        function: setOriginalChat,
        });
    }
});

// 이 함수의 본문은 컨텐츠 스크립트로 실행됩니다.
// 현재 페이지
// test------------------
  
function setPageWatchChat() {
    var windowWidth = window.innerWidth - 10;
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
    element.style.backgroundColor  = "rgb(0, 0, 0)";
    
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
    
    element.style.width = (videoWidth+2.5) + "px";
    element.style.height = (videoWidth/1.7) + "px";
    
    if((videoWidth/1.7) > windowHeight){
        element.style.width = (windowHeight*1.7) + "px";
        element.style.height = windowHeight + "px";
    }
    
    //live_pc_content width 조절
    var elements = document.querySelectorAll('[class*="live_pc_content"]');
    var element = elements[0]
    
    element.style.width = (videoWidth+2.5) + "px";
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