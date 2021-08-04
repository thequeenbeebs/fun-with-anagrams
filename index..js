function funWithAnagrams(array) {

    // sort all strings in alphabetical order so you can compare if they are anagrams
    let sortedArray = array.map(string => string.split('').sort().join(''))
    // an array that contains the first instance of each anagram
    // the first string in the array will always be included 
    let firstAnagram = [sortedArray[0]]
    // an array that containes the indices of each anagram
    // index of 0 will always be included
    let indices = [0]
    // an empty array of the final results I want to return at the end
    let results = []

    // iterate through sortedArray
    for (let i = 1; i < sortedArray.length; i++) {
        // if string is not included in firstAnagram array, add to array and its index to indices array
       if (firstAnagram.includes(sortedArray[i])) {
       } else {
          firstAnagram.push(sortedArray[i])
          indices.push(i)
       }
    }

    //iterate through indices and push string from original array at that index onto results array
    indices.forEach(index => {
       results.push(array[index])
    })

    //sort results array in alphabetical order
    return results.sort()
 }