const deacreaseBtn = document.getElementById("deacreaseBtn");
const resetBtn  = document.getElementById("resetBtn");
const increasebtn = document.getElementById("increasebtn")
const countlabel = document.getElementById("countlabel");
const increseby10 = document.getElementById("increaseby10");
const decreaseby10 = document.getElementById("decreaseby10");


let count = 0;

increasebtn.onclick = function() {
    count++;
    countlabel.textContent = count;
}

deacreaseBtn.onclick = function() {
    count--;
    countlabel.textContent = count;
}
resetBtn.onclick = function() {
    count = 0;
    countlabel.textContent = count;
}

increseby10.onclick=function(){
    count = count+10;
    countlabel.textContent = count;
}

decreaseby10.onclick=function(){
    count = count-10;
    countlabel.textContent = count;
}