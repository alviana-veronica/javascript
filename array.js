let buah = ['apel', 'mangga', 'jeruk'];

//Create array
buah.push('pisang');

//Read
console.log(buah); //[ 'apel', 'mangga', 'jeruk', 'pisang' ]

// Update
buah[1] = 'anggur';
console.log(buah); //[ 'apel', 'anggur', 'jeruk', 'pisang' ]

// Delete
buah.splice(2,1);
console.log(buah); //[ 'apel', 'anggur', 'pisang' ]


//Spread operator

let array1 = [1,2,3];
let array2 = [4,5,6];
let gabungan = [...array1, ...array2];
console.log(gabungan); // [ 1, 2, 3, 4, 5, 6 ]

