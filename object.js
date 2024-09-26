let mobil = { merk: 'Toyota', warna: 'merah'};

//Create
mobil.tahun = 2022;

//Read
console.log(mobil); // { merk: 'Toyota', warna: 'merah', tahun: 2022 }
console.log(mobil.merk); //Toyota

//Update
mobil.warna = 'biru';
console.log(mobil); // { merk: 'Toyota', warna: 'biru', tahun: 2022 }

//Delete
delete mobil.tahun;
console.log(mobil); // { merk: 'Toyota', warna: 'merah' }


//Spread operator
let mobilBaru = {...mobil, tahun:2023};
console.log(mobilBaru); // { merk: 'Toyota', warna: 'merah', tahun: 2023 }