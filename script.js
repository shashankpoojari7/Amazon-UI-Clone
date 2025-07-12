const imgs = document.getElementById("imgs");
const prebtn=document.getElementById("pre");
const nextbtn=document.getElementById("next");

const img = document.querySelectorAll("#imgs img");

let idx=0;
let interval=setInterval(run,3000);

function run(){
    idx++;
    slideshow();
}
function slideshow(){
    if(idx>=img.length){
        idx=0;
    }else if(idx<0){
        idx=img.length-1;
    }
    imgs.style.transform= `translate(${-idx*1500}px)`;
}
function resetInterval(){
    clearInterval(interval);
    interval=setInterval(run,3000);
}

nextbtn.addEventListener('click',()=>{
    idx++;
    slideshow();
    resetInterval();
})
prebtn.addEventListener('click',()=>{
    idx--;
    slideshow();
    resetInterval();
})