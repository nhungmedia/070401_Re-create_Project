const ImgWrapper = document.querySelector (".imageWrapper")
const ImgParent = document.querySelector (".fromEpicurious")
//Do smth 10 times
for(let i = 0; i < 10; i++){
const copy = ImgWrapper.cloneNode(true)
ImgParent.appendChild(copy)
}