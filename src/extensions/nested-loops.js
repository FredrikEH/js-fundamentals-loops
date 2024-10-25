const START = 1
const END = 10

const simpleOne = []
const nestedOne = []
const nestedTwo = []
const deepOne = []
const deepTwo = []
const deepThree = []

//AI SOLUTIONS-----------------------------------------

// 1. Using a for loop from 1 to 10, add the value of the 'loop index' to the array 'simpleOne'
for (let i = START; i <= END; i++) {
  simpleOne.push(i)
}

// 2. Using nested for loops, add arrays to 'nestedOne' where each array has n copies of the outer 'loop index'
for (let i = START; i <= END; i++) {
  const innerArray = []
  for (let j = 0; j < i; j++) {
    innerArray.push(i)
  }
  nestedOne.push(innerArray)
}

// 3. As 2, but each array should contain the values from the outer 'loop index' to 1 inclusive. Update array 'nestedTwo'
for (let i = START; i <= END; i++) {
  const innerArray = []
  for (let j = i; j >= START; j--) {
    innerArray.push(j)
  }
  nestedTwo.push(innerArray)
}

// 4. As 2, but each array should contain arrays from 1 to the outer 'loop index' with the value of the outer 'loop index'. Update array 'deepOne'
for (let i = START; i <= END; i++) {
  const outerArray = []
  for (let j = START; j <= i; j++) {
    const innerArray = new Array(j).fill(i)
    outerArray.push(innerArray)
  }
  deepOne.push(outerArray)
}

// 5. As 4, update array 'deepTwo' so that the result is:
//       [[[1]],[[1],[1,2]],...]
for (let i = START; i <= END; i++) {
  const outerArray = []
  for (let j = START; j <= i; j++) {
    const innerArray = []
    for (let k = START; k <= j; k++) {
      innerArray.push(k)
    }
    outerArray.push(innerArray)
  }
  deepTwo.push(outerArray)
}

// 6. As 5, update the array 'deepThree', but the result should be the average of the sum of the squares of the numbers in each array
for (let i = START; i <= END; i++) {
  const outerArray = []
  for (let j = START; j <= i; j++) {
    const innerArray = []
    let sumOfSquares = 0
    for (let k = START; k <= j; k++) {
      sumOfSquares += k * k
      innerArray.push(k)
    }
    const average = sumOfSquares / j
    outerArray.push([average])
  }
  deepThree.push(outerArray)
}

module.exports = {
  START,
  END,
  simpleOne,
  nestedOne,
  nestedTwo,
  deepOne,
  deepTwo,
  deepThree
}
