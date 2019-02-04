const numList = [1, 2, 3, 4, 5];

function sumFor(data) {
  let sum = 0;
  for (let i = 0; i < data.length; i++) {
    sum += data[i];
  }
  return sum;
}

console.log(sumFor(numList));

function sumWhile(data) {
  let sum = 0;
  let i = 0;
  while (i < data.length) {
    sum += data[i];
    i++;
  }
  return sum;
}

console.log(sumWhile(numList));

function sumRecursion(data, index) {
  if (index === data.length) {
    return 0;
  }
  return sumRecursion(data, index + 1) + data[index];
}

console.log(sumRecursion(numList, 0));

function sumTheSimpleWay(data) {
  const sum = _.reduce(data, (memo, num) => memo + num);
  return sum;
}

console.log(sumTheSimpleWay(numList));
