const title = document.querySelector("#title")
console.dir(title)


title.style.color = "blue"
document.querySelector("#title").style.color = "red"


title.addEventListener("mousewheel", handleTitleClick)

function handleTitleClick () {
  title.innerText = "Oh!"
  title.style.transition = "3s"
  title.style.color = "blue"
  title.style.marginLeft = "150px"
}

console.dir(title)