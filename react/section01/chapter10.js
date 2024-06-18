for (let idx = 0; idx < 10; idx++) {
  // console.log("반복!")

  if (idx % 2 === 0) {
    continue;
  }
  
  console.log(idx);

  if (idx >= 5) {
    break;
  }
}
