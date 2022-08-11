function merge(leftSide, rightSide) {
  if (leftSide.length > 0 && rightSide.length > 0) {
    if (leftSide[0] <= rightSide[0]) {
      return [leftSide[0], ...merge(leftSide.slice(1), rightSide)];
    } else {
      return [rightSide[0], ...merge(leftSide, rightSide.slice(1))];
    };
  } else return [...leftSide, ...rightSide];
}

function mergeSort(array) {
  if (array.length <= 1) {
    return array;
  } else {
    const half = parseInt(array.length / 2);
    return merge(mergeSort(array.slice(0, half)), mergeSort(array.slice(half)));
  }
}

const test = mergeSort([3, 4, 1, 5, 2, 6, 1, 7, 7, 8, 9]);
console.log(test);