function funWithAnagrams(array) {
    let sortedArray = array.map(string =>       
       string.split('').sort().join(''))
    let firstAnagram = [sortedArray[0]]
    let indices = [0]
    let results = []
    for (let i = 1; i < sortedArray.length; i++) {
       if (firstAnagram.includes(sortedArray[i])) {
       } else {
          firstAnagram.push(sortedArray[i])
          indices.push(i)
       }
    }
    indices.forEach(index => {
       results.push(array[index])
    })
    return results.sort()
 }