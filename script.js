function addNewWEField(){
    let newNode=document.createElement('textarea');
    newNode.classList.add('form-control');
    newNode.classList.add('weField');
    newNode.classList.add("mt-2");
    newNode.setAttribute("rows",3);
    newNode.setAttribute("placeholder","enter here");

    let weOb=document.getElementById("we")
    let weAddButtonOb=document.getElementById("weAddButton");
    weOb.insertBefore(newNode,weAddButtonOb);
}
function addNewAQField(){
    let newNode=document.createElement('textarea');
    newNode.classList.add('form-control');
    newNode.classList.add('aqField');
    newNode.classList.add("mt-2");
    newNode.setAttribute("rows",3);
    newNode.setAttribute("placeholder","enter here");

    let aqOb=document.getElementById("aq");
    let aqAddButtonOb=document.getElementById("aqAddButton");
    aqOb.insertBefore(newNode,aqAddButtonOb);   
}







//generate CV//
function generateCV() {
   

    let nameField=document.getElementById("nameField").value;

    let nameT1=document.getElementById("nameT1")

    nameT1.innerHTML=nameField;

//direct//

document.getElementById("nameT2").innerHTML=nameField;
document.getElementById("contactT").innerHTML=document.getElementById("contactField").value;
document.getElementById("address").innerHTML=document.getElementById("addressField").value;
document.getElementById("fbT").innerHTML=document.getElementById("fbField").value;
document.getElementById("instaT").innerHTML=document.getElementById("instaField").value;
document.getElementById("linkedT").innerHTML=document.getElementById("linkedinField").value;
//objective
document.getElementById('objective').innerHTML=document.getElementById('objectiveField').value;
// we
let wes=document.getElementsByClassName('weField')
let str=''
for(let e of wes)
{
    str= str + '<li> ${e,value} </li>';
}
document.getElementById('weT').innerHTML= str;
//aq
let aqs=document.getElementsByClassName('aqField')
let str1=''
for(e of aqs){
    str1+='<li> ${e,value} </li>';
}
document.getElementById('aqT').innerHTML=str1;
document.getElementById('cv-form').style.display='none';
document.getElementById('cv-template').style.display='block';
}
//print
function printcv(){
    window.print();
}