const decresebtn = document.getElementById('counting_Decrease_Btn');
const resetbtn = document.getElementById('counting_reset_btn');
const increasebtn = document.getElementById('counting_Increase_btn');
const countlabel = document.getElementById('counting_countLabel');
let count = 0;

increasebtn.onclick = function(){
    count++;
    countlabel.textContent = count;
}
decresebtn.onclick = function(){
    count--;
    countlabel.textContent = count;
}
resetbtn.onclick = function(){
    count = 0;
    countlabel.textContent = count;
}   