const startWord = () => {
  let myword = document.querySelector('#myword').value;
  let word = document.querySelector('#word').innerText;

  let lastword = word[word.length - 1];
  let firstword = myword[0];

  if(lastword === firstword) {
    document.querySelector('#result').innerText = "정답입니다!";
    document.querySelector('#word').innerText = myword;
    document.querySelector('#myword').value = "";
  } else {
    document.querySelector('#result').innerText = "틀렸습니다!";
    document.querySelector('#myword').value = "";
  }
}

// 내가 한 lotto 랜덤번호 발급 js
const lottoNum = () => {
  let btn = document.querySelector('.wrapper-lotto-btn');
  let rdmNum1 = document.querySelector('.num1');
  let rdmNum2 = document.querySelector('.num2');
  let rdmNum3 = document.querySelector('.num3');
  let rdmNum4 = document.querySelector('.num4');
  let rdmNum5 = document.querySelector('.num5');
  let rdmNum6 = document.querySelector('.num6');
  
  let arr = [];

  while(arr.length < 6) {
    let num1 = String(Math.floor(Math.random()*45+1));
    if(arr.indexOf(num1) == -1) {
      arr.push(num1);
    }
  }

  rdmNum1.innerText = arr[0];
  rdmNum2.innerText = arr[1];
  rdmNum3.innerText = arr[2];
  rdmNum4.innerText = arr[3];
  rdmNum5.innerText = arr[4];
  rdmNum6.innerText = arr[5];
}
// 강사님 lotto 랜덤번호 발급 js
// const result = document.querySelector(".game-lotto-number");
// const button = document.querySelector(".wrapper-lotto-btn");

// const luckyNumber = {
//   digitCount : 6,
//   maxNumber : 45
// };

// button.addEventListener('click', () => {
//   let {digitCount, maxNumber} = luckyNumber;
//   let myNumber = new Set();
//   for(let i = 0; i < digitCount; i++) {
//     myNumber.add(Math.floor(Math.random() * maxNumber + 1));
//   }
//   result.innerText = `${[...myNumber]}`
// });