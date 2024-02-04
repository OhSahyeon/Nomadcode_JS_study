const title = document.querySelector("#title")
console.dir(title)

function handleTitleClick () {
  const titleColor = title.style.color; 
  let newColor;
  if(titleColor === "blue") { 
    newColor = "red"
  } else {
    newColor = "blue"
  }
  title.style.color = newColor
  console.log(title.style.color)
}

title.addEventListener("click", handleTitleClick)

// 4. (참고) 함수 내에서 선언된 변수는 함수 밖에서는 존재하지 않습니다.
//그렇기 때문에 const currentColor로 변수 선언을 하더라도,
//함수가 호출될 때 마다 새로운 값을 받을 수 있습니다.