function compoundInterest() {
  let principal = document.getElementById("principal").value;
  let annualRate = document.getElementById("annualRate").value;
  let compound = document.getElementById("compound").value;
  let time = document.getElementById("time").value;

  if (principal === "" || compound === 0 || time === "") {
    alert("Please enter all values");
    return;
  }
  document.querySelector("#results").innerHTML =
    Math.round(
      principal *
        Math.pow(1 + annualRate / 100 / compound, compound * time) *
        100
    ) / 100;
  document.getElementById("resultingBox").style.display = "block";
  document.getElementById("resultingDesc").style.display = "block";
}

function outputUpdate(rate) {
  document.querySelector("#rate").value = rate + "%";
}

document.getElementById("resultingBox").style.display = "none";

document.getElementById("resultingDesc").style.display = "none";
