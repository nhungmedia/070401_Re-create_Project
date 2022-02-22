const ImgWrapper = document.querySelector (".imageWrapper")
const ImgParent = document.querySelector (".fromEpicurious")
//Do smth 10 times
for(let i = 0; i < 10; i++){
const copy = ImgWrapper.cloneNode(true)
ImgParent.appendChild(copy)
}
const ImgGrid = document.querySelector (".imageContainer")
const Img2Parent = document.querySelector (".imageGrid")
//Do smth 10 times
for(let i = 0; i < 41; i++){
const copy = ImgGrid.cloneNode(true)
Img2Parent.appendChild(copy)
}