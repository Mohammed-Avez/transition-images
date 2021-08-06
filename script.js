

const allPanels = document.querySelectorAll('.panel');

const expand = function(){
    this.classList.toggle('open');
}
const trans = function(e){
    console.log(e.propertyName);
    e.propertyName.includes('flex') ? this.classList.toggle('open-active') : '';
    
}


allPanels.forEach( panel => panel.addEventListener('click', expand));
allPanels.forEach( panel => panel.addEventListener('transitionend', trans ));











































// const panels = document.querySelectorAll('.panel');


// const open = function(){
//     this.classList.toggle('open');
// }

// const toggleActive = function(e){
//     console.log(e.propertyName);
//     if(e.propertyName.includes('flex')){
//         console.log(e.propertyName);

//         this.classList.toggle('open-active');
//     }
// }


// panels.forEach( panel => {
//     return panel.addEventListener('click', open)
// })

// panels.forEach( panel => panel.addEventListener('transitionend', toggleActive));