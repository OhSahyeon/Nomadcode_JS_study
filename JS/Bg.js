const bgImg = ["눈.jpg", "비.jpg", "흐림.jpg", "맑음.jpg"]

const chosenImg = bgImg[Math.floor(Math.random() * bgImg.length)]

const imgage = document.createElement("img")
imgage.src = `./IMG/${chosenImg}`;

document.body.querySelector("#bgImg").appendChild(imgage)