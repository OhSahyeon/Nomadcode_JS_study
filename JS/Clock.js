const clock = document.querySelector("h2#clock");

function getClock(){
  const date = new Date();
  const hours = String(date.getHours()).padStart(2, "0");
  const minutes = String(date.getMinutes()).padStart(2, "0");
  const seconds = String(date.getSeconds()).padStart(2, "0");
  clock.innerText = `${hours}:${minutes}:${seconds}`;
};

getClock();
setInterval(getClock, 1000);

//다음수업 준비자료

//큰 목표를 이루고 싶으면 허락을 구하지 마라. – 미상
//상황을 가장 잘 활용하는 사람이 가장 좋은 상황을 맞는다. – 존 우든
//창조적인 삶을 살려면 내가 틀릴지도 모른다는 공포를 버려야 한다. – 미상
//일반적인 것을 잃을 위험을 감수하지 않으면 평범한 것에 만족해야 한다. – 짐 론
//신뢰의 이유는 안전하거나 확실해서가 아니라, 위험을 감수할 용의가 있어서이다. – 미상
//추구할 수 있는 용기가 있다면 우리의 모든 꿈은 이뤄질 수 있다. – 월트 디즈니
//기다리는 사람에게 좋은 일이 생기지만, 찾아나서는 사람에게는 더 좋은 일이 생긴다. – 미상
//늘 하던 대로 하면 늘 얻던 것을 얻는다. – 미상
//열정을 잃지 않고 실패에서 실패로 걸어가는 것이 성공이다. – 윈스턴 처칠
//애벌레가 세상이 끝났다고 생각하는 순간 나비로 변했다. - 속담