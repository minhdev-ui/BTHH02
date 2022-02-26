const qualified = document.querySelectorAll(".qualified-item-inner");
const qualifiedContents = document.querySelectorAll(".qualified-content");
for(let i = 0; i<qualified.length;i++){
    qualified[i].onclick = () => {
        if(qualifiedContents[i].className == "qualified-content"){
            qualifiedContents[i].classList.add('active')
        }else{
            qualifiedContents[i].classList.remove('active')
        }
        for(let j = 0; j < qualified.length; j++){
            if(j!=i){
                qualifiedContents[j].classList.remove('active')
            }
        }
    }
}
