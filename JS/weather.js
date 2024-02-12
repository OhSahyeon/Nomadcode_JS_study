function Ok(p) {
  const lat= p.coords.latitude;
  const lng= p.coords.longitude;
  console.log(lat, lng)
}

function No() {
  alert("날씨를 불러올 수 없습니다.")
}

navigator.geolocation.getCurrentPosition(Ok, No)