const str=document.getElementById('answer').value;
function putValue(value){
    document.getElementById('answer').value+=value;
}
function clearScreen(){
    const btr="";
    document.getElementById('answer').value =btr;
}
function makeDel(){
   const a= document.getElementById('answer').value;
   document.getElementById('answer').value=a.substr(0,a.length-1);
}
function getAns(){
const str =document.getElementById('answer').value;
const b =eval(str);
    document.getElementById('answer').value=b;
}