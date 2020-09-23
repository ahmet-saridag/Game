const text = 'Ne yani böylesine korkunç bir dünyanın bir de cehennemi mi var?       ';
 let index = 0;



 function writeText(){
document.body.innerText = text.slice
(0,index);

index++;

if (index > text.length){
index = 0;


}


 }
setInterval(writeText, 100);



