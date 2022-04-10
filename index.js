function convert(valNum) {
  if (valNum == "") {
    valNum = 0;
  }

  document.getElementById("feet").innerHTML = `${valNum} meters = ${(
    valNum * 3.2808
  ).toFixed(3)} feets`;
  document.getElementById("meter").innerHTML = `${valNum} feets = ${(
    valNum / 3.2808
  ).toFixed(3)} meters`;
  document.getElementById("litre").innerHTML = `${valNum} gallons = ${(
    valNum * 3.78541
  ).toFixed(3)} litres`;
  document.getElementById("gallon").innerHTML = `${valNum} litres = ${(
    valNum / 3.78541
  ).toFixed(3)} gallons`;
  document.getElementById("kilogram").innerHTML = `${valNum} pounds = ${(
    valNum / 2.2046
  ).toFixed(3)} kilograms`;
  document.getElementById("pound").innerHTML = `${valNum} kilograms = ${(
    valNum * 2.2046
  ).toFixed(3)} pounds`;
  console.log(valNum);
}
