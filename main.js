const ImgWrapper = document.querySelector (".imageWcontainer")
const ImgParent = document.querySelector (".imageWrapper")
//Do smth 10 times
for(let i = 0; i < 5; i++){
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