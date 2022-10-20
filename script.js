function onHandleSubmit(e) {
  e.preventDefault();
  let product = 0.0;
  let creditSum = 0;
  for (var i = 0; i < 7; i++) {
    product +=
      parseFloat(e.path[0].children[i].children[0].value) *
      parseFloat(e.path[0].children[i].children[1].value);
    creditSum += parseFloat(e.path[0].children[i].children[1].value);
  }
  console.log(product / creditSum);
  e.path[0].children[8].innerText = `your sgpa is : ${product / creditSum}`;
}
