function onHandleSubmit(e) {
  e.preventDefault();
  let product = 0.0;
  let creditSum = 0;
  for (var i = 1; i < 7; i++) {
    product +=
      parseFloat(e.path[0].children[i].children[0].value) *
      parseFloat(e.path[0].children[i].children[1].value);
    creditSum += parseFloat(e.path[0].children[i].children[1].value);
  }
  console.log(product / creditSum);
  let appre = decide(product / creditSum);
  e.path[0].children[9].innerText = `your sgpa is : ${
    product / creditSum
  }   ${appre}`;
}
function decide(num) {
  if (num < 8.0) return "Need improvement";
  else if (num > 8.0 && num < 9) return "Keep it up lad";
  else if (num >= 9 && num < 10) return "Wooho u did it";
  else if (num === 10) return "U master";
}
