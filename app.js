let data = [[1, 0, 1], 
            [1, 1, 0], 
            [0, 0, 1]]

const visitedIndexes = new Set()

function getGroups(arr) {
  const formatedArr = [...arr[0], ...arr[1], ...arr[2]]
  let count = 0
  
  for (let indx = 0; indx < formatedArr.length; indx++) {
    if (formatedArr[indx] && !visitedIndexes.has(indx)) {
      traverse(indx, formatedArr)
      count = count + 1
    }
  }
  return count
}
//helper
function traverse(index, arr) {
  visitedIndexes.add(index)  
  if(arr[index+1] && !visitedIndexes.has(arr[index+1])) traverse(index+1, arr)
  if(arr[index+3] && !visitedIndexes.has(arr[index+3])) traverse(index+3, arr)
}

console.log(getGroups(data))
