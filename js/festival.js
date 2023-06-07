let modal = document.getElementById('modal');
let modalClose = document.getElementById('close');
let prev = document.getElementById('prev');//이전버트
let next = document.getElementById('next');//다음버튼
let slideContents = document.querySelectorAll('.content');//슬라이드
let slideContentslength = slideContents.length - 2; //넘어가는 수
let currentSlide = 0;
const SLIDE_WIDTH = 23.729166666666666;
let contentBoxs = document.querySelectorAll('.contents_box');
//전체 월 닫기버튼 만들려고 
let contentMonth = document.querySelectorAll('.contentMonth');
// 각 월별
const contentMarch = document.getElementById('contentMarch');
// 이너 외 전체 닫기로 만들기
let outsideclose = document.querySelector('#modalclose')




//모달 닫기버튼

outsideclose.addEventListener('click', function(){
    modal.style.display ='none';
    moveSlide(0);
     for(i = 0; i < contentMonth.length; i++){
         contentMonth[i].style.display = 'none';
         next.classList.remove(i);
         prev.classList.remove(i);
    }//월별 슬라이드 닫기버튼 초기화

});
modalClose.addEventListener('click', function(){
    modal.style.display ='none';
    moveSlide(0);
    for(i = 0; i < contentMonth.length; i++){
        contentMonth[i].style.display = 'none';
        next.classList.remove(i);
        prev.classList.remove(i);
    }//월별 슬라이드 닫기버튼 초기화

});


//모달 열기 버튼
function monthClick(e){
    let monthId = document.getElementById(e.getAttribute('id')).getAttribute('id');
    modal.style.display = 'block';
    let monthContent = document.querySelectorAll('.contentMonth');
    monthContent[monthId].style.display = 'block';
    next.classList.add(monthId);
    prev.classList.add(monthId);
}
// console.log(monthClick(e))
//슬라이드 움직이기
function moveSlide(num){

    for(var i = 0; i < contentBoxs.length; i++){
        var contentBox = contentBoxs.item(i);
        contentBox.style.transform = 'translateX(-'+ num * SLIDE_WIDTH +'vw)';
        currentSlide = num;
    }
};


function nextBtn(e){
    let nextBtnClass = next.getAttribute('class');
    let contentLength = contentBoxs[nextBtnClass].querySelectorAll('.content').length;
    if(currentSlide <= contentLength - 4){
        moveSlide(currentSlide + 1);
    }else{
        moveSlide(0);}
}
function prevBtn(e){
    let prevBtnClass = prev.getAttribute('class');
    let contentLength = contentBoxs[prevBtnClass].querySelectorAll('.content').length;
    if(currentSlide > 0){
        moveSlide(currentSlide - 1);
    }else{
        moveSlide(contentLength - 3);
    }
}







