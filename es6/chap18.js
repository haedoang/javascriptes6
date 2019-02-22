"use strict"

//document 시작해 DOM 전체를 순회하며 콘솔에 출력하는 함수.
// function printDOM(node, prefix){
//   console.log(prefix + node.nodeName);
//   for(let i=0; i<node.childNodes.length;i++){
//     printDOM(node.childNodes[i],prefix + '\t');
//   }
// }
// printDOM(document,'');


console.log(document.querySelectorAll('.callout'));


//18.6 DOM 요소 조작 콘텐츠 수정

const para1 = document.getElementsByTagName('p')[0];
//console.log(para1);
//console.log(para1.textContent);
//console.log(para1.innerHTML);
para1.textContent = "Modified HTLM file";
para1.innerHTML="modified HTML files";


//18.7 새 DOM 요소 만들기

 const p1 = document.createElement('p');
 const p2 = document.createElement('p');

p1.textContent = "I was created dynamically!";
p2.textContent = "I was also created dynamically!";


//엘레멘트 삽입 메서드
//1) insertBefore(삽입요소, 삽입위치);
//2) 선택자.appendChild(삽입요소) 항상 마지막에 삽입.
const parent = document.getElementById('content');
const firstChild = parent.childNodes[0];

parent.insertBefore(p1,firstChild);
parent.appendChild(p2);

//특정 클래스를 하이라이트 하기
function highlightParas(containing){
  if(typeof containing === 'string')
    containing = new RegExp(`\\b${containing}\\b`,'i');

  const paras = document.getElementsByTagName('p');
  console.log(paras);
  for(let p of paras){
    if(!containing.test(p.textContent)) continue;
    p.classList.add('highlight');
  }
}
//highlightParas('unique');

// 클래스 제거 classList.remove
function removeParaHighlights(){
  const paras = document.querySelectorAll('p.highlight');
  for(let p of paras){
    p.classList.remove('highlight');
  }
}
//removeParaHighlights();

//18.9 데이터 속성 data-
const highlightActions = document.querySelectorAll('[data-action="highlight"]');

//dataset
console.log(highlightActions[0].dataset);

//18.10  이벤트
for(let a of highlightActions){
  a.addEventListener('click',evt=>{
    evt.preventDefault();//기본핸들러막기
    highlightParas(a.dataset.containing);
  });
}

const removehighlightActions = document.querySelectorAll('[data-action="removeHighlights"]');
for(let a of removehighlightActions){
  a.addEventListener('click',evt =>{
    evt.preventDefault();
    removeParaHighlights();
  });
}
