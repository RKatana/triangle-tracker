function result(){
var side1=parseInt(document.getElementById('side1').value);
var side2=parseInt(document.getElementById('side2').value);
var side3=parseInt(document.getElementById('side3').value);
var answer=document.getElementById('answer');
if (side1==side2&&side1==side3) {
  answer.textContent='Equilateral: All sides are equal!';
}
}
