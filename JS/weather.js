const API_KEY = "aeac64190fd598556a7df782f6898c8f"

function Ok(p) {
  const lat= p.coords.latitude;
  const lng= p.coords.longitude;
  console.log(lat, lng)
  const URL = `https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lng}&appid=${API_KEY}&units=metric`
  fetch(URL).then(response => response.json()).then(data => {
    console.log(data.name, data.weather[0].main)
    const citySpan = document.querySelector("#weather span:first-child")
    const weatherSpan = document.querySelector("#weather span:last-child")
    const name = data.name;
    const weather = data.weather[0].main;
    citySpan.innerText = name
    weatherSpan.innerText = weather
  });
}

function No() {
  alert("날씨를 불러올 수 없습니다.")
}

navigator.geolocation.getCurrentPosition(Ok, No)
