const news11 = document.querySelector('.num1')
const news12 = document.querySelector('.num2')
const news13 = document.querySelector('.num3')
const news14 = document.querySelector('.num4')
const news15 = document.querySelector('.num5')
const news16 = document.querySelector('.num6')
const news17 = document.querySelector('.num7')

const page0 = document.querySelector('.page0')
const page1 = document.querySelector('.page1')
const page2 = document.querySelector('.page2')
const page3 = document.querySelector('.page3')

const icon = document.querySelector('.icon')

function onepage(){
  news11.textContent = '22/5/18 [NEWS] 건파이어-리본 모바일 출시 FAQ'
  news12.textContent = '22/5/18 [NEWS] 업데이트 이슈 공지사항'
  news13.textContent = '22/5/18 [NEWS] 건파이어-리본 서버관련 유지 공지사항'
  news14.textContent = '22/5/18 [NEWS] 건파이어-리본 모바일 이벤트 -"FIRST Impression of GRM"'
  news15.textContent = '22/5/18 [NEWS] 건파이어-리본 모바일 이벤트 -"Veteran mark" '
  news16.textContent = '22/4/20 [NEWS] Update Notes'
  news17.textContent = '22/4/17 [NEWS] Update Notes'
}

function twopage(){
  news11.textContent = '22/4/14 [NEWS] 건파이어-리본 모바일 이벤트 -"Share your Gunfire story"'
  news12.textContent = '22/4/14 [NEWS] Android 사용자를 위한 구매 알림'
  news13.textContent = '22/4/10 [NEWS] Gunfire Reborn Mobile, 유럽에서 공식 출시'
  news14.textContent = '22/4/5 [NEWS] 아시아 태평양 및 북미 사전 등록 시작!'
  news15.textContent = '22/4/1 [NEWS] "Gunfire Reborn" 영웅 프로필 - Ao Bai'
  news16.textContent = '22/4/1 [NEWS] “Gunfire Reborn” 영웅 프로필 - Crown Prince'
  news17.textContent = '22/3/20 [NEWS] Gunfire Reborn Mobile 사전 등록/예약 구매 준비 완료'
}

page2.addEventListener('click',function(){
  twopage()
})

page1.addEventListener('click',function(){
  onepage()
})  

page3.addEventListener('click',function(){
  twopage()
})
page0.addEventListener('click',function(){
  onepage()
})

news13.addEventListener('click',function(){
  window.location = 'https://supersmc1.github.io/project-newsreborn/'
})

news11.addEventListener('click',function(){
  window.location = 'https://supersmc1.github.io/project-newsreborn2/'
})

news12.addEventListener('click',function(){
  window.location = 'https://supersmc1.github.io/project-newsreborn3/'
})


icon.addEventListener('click',function(){
  window.location = 'https://supersmc1.github.io/project-reborn/'
})