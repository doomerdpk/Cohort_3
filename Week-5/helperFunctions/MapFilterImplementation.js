//Implementation of Map Function
class MapFunc {
  constructor(arr) {
    this.arr = arr;
  }

  Map(transform) {
    const newArr = [];
    for (let i = 0; i < this.arr.length; i++) {
      newArr.push(transform(this.arr[i]));
    }
    return newArr;
  }
}

function transform(value) {
  return value * 2;
}

const arr = new MapFunc([1, 2, 3, 4, 5]);
const mappedArr = arr.Map(transform);
console.log(mappedArr);

//Implementation of Filter Function
class FilterFunc {
  constructor(arr) {
    this.arr = arr;
  }

  Filter(transform) {
    const newArr = [];
    for (let i = 0; i < this.arr.length; i++) {
      if (transform(this.arr[i]) == true) {
        newArr.push(this.arr[i]);
      }
    }
    return newArr;
  }
}

function filterValue(value) {
  return value % 2 == 0;
}

const arr2 = new FilterFunc([1, 2, 3, 4, 5]);
const filteredArr = arr2.Filter(filterValue);
console.log(filteredArr);
