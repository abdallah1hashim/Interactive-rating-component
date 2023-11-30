const rate = document.querySelectorAll(".container li");
const btn = document.querySelector(".submit-btn");
const con = document.querySelector(".main-con");
const successCon = document.querySelector(".success-con");
const userRate = document.querySelector(".user-rate");
console.log(btn);

for (let i = 0; i < rate.length; i++) {
  rate[i].addEventListener("click", function() {
    // console.log(rate[i]);
    for (let x = 0; x < rate.length; x++) {
      rate[x].classList.remove("active");
    }
    rate[i].classList.add("active");
    console.log(rate[i].innerText);
    userRate.innerHTML = `You selected ${rate[i].innerText} out of 5`;
  })
}
btn.addEventListener("click", function(){
  for (let x = 0; x < rate.length; x++) {
    if (rate[x].classList.contains("active")){ 
      con.classList.add("hidden");
      successCon.classList.remove("hidden");
    } else {
      console.log("Error");
    }
  }
})