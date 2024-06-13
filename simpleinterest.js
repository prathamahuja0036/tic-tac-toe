let calculatebtn=document.getElementById("calculate-btn");
let calculate=()=>{
    let p= Number(document.getElementById("Principle").value);
    let r= Number(document.getElementById("Rate").value);
    let t= Number(document.getElementById("Time").value);
    let simpleinterest=(p*r*t)/100
    console.log(simpleinterest);
    document.querySelector("#final").innerHTML = simpleinterest;
};
calculatebtn.addEventListener("click",calculate);
