const title = document.querySelector("#title")
console.dir(title)

function handleTitleClick () {
  const status = title.className; 
  const offClassName = "off";
  const onClassName = "on";
  if(title.classList.contains(offClassName)) {
    title.classList.remove(offClassName)
    title.classList.add(onClassName)
  } else {
    title.classList.remove(onClassName)
    title.classList.add(offClassName)
  }
  console.log(title.className)
}

title.addEventListener("click", handleTitleClick)

// 4. (참고) 함수 내에서 선언된 변수는 함수 밖에서는 존재하지 않습니다.
//그렇기 때문에 const currentColor로 변수 선언을 하더라도,
//함수가 호출될 때 마다 새로운 값을 받을 수 있습니다.