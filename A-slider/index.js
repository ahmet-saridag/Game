const ftn = document.getElementById("fts")
  
let idx = 0;
const img = document.querySelectorAll('#fts img');

function run(){
    idx++; 


       if(idx > img.length -1 ) { 
        idx = 0;
        
    }
    fts.style.transform = `translateX(${-idx * 500}px)`;

}
setInterval(run, 2000);