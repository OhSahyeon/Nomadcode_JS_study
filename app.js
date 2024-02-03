//나이 값 가져오기
let age = parseInt(prompt("만 나이를 입력해주세요"));

if(isNaN(age)){
  alert("숫자를 입력해주세요.")
} else if ( age < 0) {
  alert("장난하지마세요^^.")
} else if (age < 19 ){
  alert("만 19세 아니면 술 못사요.")
} else if(age < 19 || age > 70){
  alert("건강 생각하셔야지요...")
} else {
  alert("감사합니다.")
}

// or = || , && 
// || 하나만 참이면 OK
// && 둘다 참이여야 OK

console.log(age)