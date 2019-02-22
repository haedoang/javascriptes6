//정규식

'use strict'

//String.prototype 메서드로 검색하기.

// const input ="As I was going to Saint Ives";
// console.log(input.startsWith("As"));  //시작문자열 확인 boolean
// console.log(input.endsWith("Ives")); //끝문자열 확인 boolean
// console.log(input.startsWith("going",9)); // 인덱스9번에서시작하는 문자열 확인 boolean
// console.log(input.endsWith("going",14)); //인덱스 14를 문자열의 끝을 기준으로 확인 boolean
// console.log(input.includes("going")); //문자열 포함 boolean
// console.log(input.includes("going",10))//인덱스10에서시작하는 문자열 포함 확인 boolean
// console.log(input.indexOf("going")); // 해당문자열의 시작 인덱스 반환
// console.log(input.indexOf("going",10)); //불일치 -1 return;
//console.log(input.indexOf("nope"));

//String.prototype.toLowerCase 기존 문자열을 소문자의 새 문자열로 반환

//문자열 교체 : String.prototype.replace
// const input = "As I was going to Saint Ives";
// const output = input.replace("going","walking");
// console.log(output);

//정규식 만들기. 정규식클래스 : RegExp , 정규식 리터럴 /문자열/ 형태.
//const re1 = /going/;
//const re2 = new RegExp("going"); //동일합니다.

//정규식 검색 예제
// const input = "As I was going to Saint Ives";
// const re = /\w{3,}/ig; //세글자이상인단어에모두일치하고,대소문자를가리지 않는 정규식
//
// //문자열input의 메서드 사용의 경우
// console.log(input.match(re)); //[ 'was', 'going', 'Saint', 'Ives' ] : 배열 리턴
// console.log(input.search(re)); //5 : 정규표현식에 맞는 첫 단어의인덱스 리턴
//
// //정규식 메서드 사용하기
// console.log(re.exec(input)); //[ 'was', index: 5, input: 'As I was going to Saint Ives' ]  //처음일치하는 것 리턴
// console.log(re.exec(input)); //[ 'going', index: 9, input: 'As I was going to Saint Ives' ] // exec는 마지막 위치를기억함. 다음일치하는 값 리턴
// console.log(re.exec(input)); //[ 'Saint', index: 18, input: 'As I was going to Saint Ives' ]
// console.log(re.exec(input)); //[ 'Ives', index: 24, input: 'As I was going to Saint Ives' ]
// console.log(re.exec(input)); // null.
// console.log(re.test(input)); //정규식 해당하는지 검사하기. 일치하는것이1개이상일경우 true 리턴
//
//
// //정규리터럴로 바꿔 표현하기
// console.log(input.match(/\w{3,}/ig)); //[ 'was', 'going', 'Saint', 'Ives' ]
// console.log(input.search(/\w{3,}/ig)); //5
// console.log(/\w{3,}/ig.test(input)); //true
// console.log(/\w{3,}/ig.exec(input)); //[ 'was', index: 5, input: 'As I was going to Saint Ives' ]
// console.log(typeof /\w{3,}/ig); // type object
// console.log(/\w{3,}/ig instanceof RegExp); // true

//정규식 사용하여 문자열 교체하기
// const input = "As I was going to Saint Ives";
// const output = input.replace(/\w{4,}/ig,'****'); //replace(정규식,대체문자열);
// console.log(output); //As I was **** to **** ****


 /*
정규표현식에서의 입력 소비
1) 문자열 왼쪽에서 오른쪽으로 진행
2) 소비한 글자는 다시돌아가지 않는다.
3) 한번에 한글자씩 움직이며 일치하는 것을 확인한다.
4) 일치하지 않는경우 해당 문자를 소비하고 다음문자로 넘어간다.
5) 일치하는 경우 해당글자들을 한꺼번에 소비한 후 다음 문자로 넘어간다.
 */

//대체  | 대체를 뜻하는 매타문자. ig(i:대소문자가리지않음 g 전체를검색) g플래그가없으면 일치하는 것 중 첫번째만 반환함.
// const html = 'HTML with <a href="/one">one link</a>, and some JavaScript. ' + '<script src="stuff.js">';
// const matches = html.match(/area|a|link|script|source/ig); //[ 'a', 'link', 'a', 'a', 'a', 'a', 'Script', 'script' ]
// console.log(matches);

//HTML찾기
// const html = '<br>[!CDATA[[<br>]]';
// const matches = html.match(/<br>/ig);
// console.log(matches);  //정규표현식으로 계층적 구조인 HTML 태그 찾기는 알맞지 않다.

//문자셋 : 글자 하나를 다른 것으로 대체하는 방법

//문자셋 사용안하는 경우
// const beer99 = "99 bottles of beer on the wall" + "take 1 down and pass it around -- " + "98 bottles of beer on the wall.";
// const matches = beer99.match(/0|1|2|3|4|5|6|7|8|9/g);
// console.log(matches);
//
// //문자셋을 사용하는 경우
// const m1 = beer99.match(/[0123456789]/g);
// const m2 = beer99.match(/[0-9]/g);
// console.log(m1,m2);
//
// //const match = beer99.match(/[\-0-9a-z.]/ig);
// //console.log(match);
// //문자열 제외 ^(캐럿)시용
// const match = beer99.match(/[^\-0-9a-z.]/);
// console.log(match);

/*
자주 쓰이는 문자셋 = 클래스
\d ; [0-9] : 숫자 포함
\D ; [^0-9] : 숫자 미포함
\s ; [\t\v\n\r] : 탭,스페이스,세로탭,줄바꿈 포함
\S ; [^\t\v\n\r] : 탭,스페이스,세로탭,줄바꿈 미포함
\w ; [a-zA-Z_] : 영문문자열과 _ 포함
\W ; [^a-zA-Z_] :영문문자열과 _ 미포함

*/


//공백문자셋 \s 사용하기
// const stuff =
//   'hight :   9\n' +
//   'medium : 5\n' +
//   'low : 2\n';
//
// console.log(stuff); //hight : 9
//                     //medium : 5
//                     //low : 2
// const levels = stuff.match(/:\s*[0-9]/g);  // : 공백(개수제한X) *(숫자는 상관X 있으면 가져오기)
// console.log(levels);

// \D 사용하여 전화번호 저장하기
// const messyPhone = '(010) 2277 - 3524';
// const neatPhone = messyPhone.replace(/\D/g,''); //01022773524 // 숫자제외한거 다 미포함하기..
// console.log(neatPhone);

// \S 공백이 아닌 필드의 데이터 검사
// const field= '   something   ';
// const valid = /\S/.test(field);
// console.log(valid);

//반복 : 얼마나 많이 일치해야 하는지 지정할 때 사용한다.
const beer99 = "999 asfwe123 lkj22 4jkllkj112 4241";
const match = beer99.match(/[0-9][0-9][0-9]|[0-9][0-9]|[0-9]/g);
console.log(match);
// //정규식 재설정
//const match2 = beer99.match(/[0-9]+/);
//console.log(match2);

/*반복 메타 문자
1) {n} :정확히 n개
2) {n,} : 최소한 n개
3) {n,m} : n개 이상. m개 이하
4) ? : 0개 또는 1개.{0,1}과 같음
5) * : 숫자는 상관없으며 없어도 됨 /[a-z]\d*"/i 글자가 있고 다음에 숫자가 없거나 있는 경우 "임의 표기
6) + : 하나 이상 /[a-z]\d+/i 글자가 있고 그다음 숫자가 한개 이상 있는 경우
// */
// const test = "a12345";
// console.log(test.match(/\d{3}/)); //123
// console.log(test.match(/\d{3,}/)); //12345
// console.log(test.match(/[a-z]\d?/i)); //a1
// console.log(test.match(/[a-z]\d*/i)); //a12345
// console.log(test.match(/[a-z]\d+/i)); //a12345

//마침표와 이스케이프
//const input = "Address: 333 Main St., Anywhere, NY, 55532. Phone: 555-555-2525.";
//const match = input.match(/\d{5}.*/); // '55532. Phone: 555-555-2525.'
//console.log(match);

// const equation = "(2 + 3.5) * 7";
// const match = equation.match(/\(\d \+ \d\.\d\) \* \d/);
// console.log(match);


//그룹 (?:[subexpression]) 의 형태.

// const text = "Visit oreilly.com today!";
// const match = text.match(/[a-z]+(?:\.com|\.org|\.edu)/i);
// console.log(match);  //'oreilly.com'.

//그룹의 반복
//
// const html = '<link rel="stylesheet" href="http://insecure.com/stuff.css">\n'+
//              '<link rel="stylesheet" href="https://secure.com/securestuff.css">\n' +
//              '<link rel="stylesheet" href="//anything.com/flexible.css">';
// const matches = html.match(/(?:http?)?\/\/[a-z][a-z0-9-]+[a-z0-9]+/ig);
// console.log(matches);

//소극적일치, 적극적일치
//태그변환하기
//적극적일치 : <i>를 찾으면 문자소비를하지 않고 </i>를 찾을때까지 소비한다. 마지막</i>를 소비하고 변경하기 때문에 오류 !!!
// const input = "Regex pros know the difference between\n"+
//               "<i>greedy</i> and <i>lazy</i> matching.";
// //console.log(input.replace(/<i>(.*)<\/i>/ig, '<strong>$1</strong>'));
//
// //소극적일치로 변경
// console.log(input.replace(/<i>(.*?)<\/i>/ig, '<strong>$1m</strong>'))

//역참조 : XYYX형태의 밴드 이름찾기..
// const promo = "Opening for XAAX is the dynamic GOOG! At the box office now!";
// const bands = promo.match(/([A-Z])([A-Z])\2\1/g);
//console.log(bands);

//역참조로 따옴표 찾기.
// const html = `<img alt='A "simple" example.'>` +
//              `<img alt="Don't abuse it!">`;
// const matches = html.match(/<img alt=(['"]).*?\1/g);
// console.log(matches);
// //'<img alt=\'A "simple" example.\'',
// //  '<img alt="Don\'t abuse it!"' ]

//그룹 교체
// let html = '<a class="nope" href="/yep">Yep</a>';
// console.log(html.match(/<a .*?(href=".*?").*?>/g));
// html = html.replace(/<a .*?(href=".*?").*?>/,'<a $1>');
//
// console.log(html);
//
// let html = '<a class="yep" href="/yep" id="nope">Yep</a>';
// html = html.replace(/<a .*?(class=".*?").*?(href=".*?").*?>/,'<a $2 $1>')
// console.log(html);

/*
$` : 일치하는것 앞에 전부
$& : 일치하는것 자체
$' : 일치하는것 뒤 전부
$$ : $ 기호
*/
// const input ="One two three";
// console.log(input.replace(/two/,'($`)'));  //일치하는거 앞 참조 two 자리에 (One )
// console.log(input.replace(/two/,'($&)'));   //일치하는 값 참조 two 자리에 (two)
// console.log(input.replace(/two/,"($')"));  //일치하는거 뒤에 two 자리에 ( three)
// console.log(input.replace(/two/,'($$)'));  //tow 자리에 ($)


//함수를 이용한 교체
// const html =
//   `<a class="foo" href="/foo" id="foo">Foo</a>
//   <A href ='/bar' Class="bar">Bar</a>
//   <a href="/baz">Baz</a>
//   <a onclick="javascript:alert('qux!')" href="/qux">Qux</a>`
// //console.log(html);
//
// const aTag = `<a class="foo" href="/foo" id="foo">Foo</a>`;
// sanitizeATag(aTag);
//
//
// //속성분해하기
// function sanitizeATag(aTag){
//   //태그에서 원하는 부분 가져오기
//   const parts = aTag.match(/<a\s+(.*?)>(.*?)<\/a>/i);
//   //console.log(parts); index0 문자열 index1 a여는태그 index2 innerText
//
// }

//단어경계일치 : 입력소비하지 않음
const inputs = [
  "john@doe.com",
  "john@doe.com is my email",
  "my email is john@doe.com",
  "use john@doe.com, my email",
  "my email:john@doe.com."
];

//console.log(input);
const emailMatcher =/\b[a-z][a-z0-9._-]*@[a-z][a-z0-9_-]+\.[a-z]+(?:\.[a-z]+)?\b/ig;

inputs.map(s=> console.log(s.replace(emailMatcher,'<a href="mailto:$&">$&</a>')));
