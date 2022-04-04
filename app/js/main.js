let textBlock = document.getElementsByClassName('main__content');

let mainTitle = document.getElementsByClassName('main__title');

for(let i = 0; i < mainTitle.length; i++){
    mainTitle[i].onclick = () =>{
        console.log(mainTitle[i].classList.toggle('arrow-rotate'));
        textBlock[i].classList.toggle('active');
    }; 
}








