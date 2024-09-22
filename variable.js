// var , const, let

let nama = "Alviana Veronica";
    nama = "Alviana Veronica A";

let umur = 29;


function printDataNama(nama = "John", umur = "17"){
    //snack case
    var data_saya = `Nama saya adalah ${nama} dan umur saya adalah ${umur}`;
    console.log(data_saya);
}

//printDataNama();

//camel case
//let dataSaya = `Nama saya adalah ${nama} dan umur saya adalah ${umur}`;



// Object -> property -> nested variable (variabel yg bercabang)
// const bisa diubah jika tipe data object seperti dibawah ini
// const dataSaya = {
//     nama: 'Alviana Veronica',
//     umur: 29,
//     printDataNama: (nama = "John", umur = "Wajib diatas 17 tahun") => {
//         var data = `Nama saya adalah ${nama} dan umur saya adalah ${umur}`;
//         console.log(data);
//     }
// }
// dataSaya.nama = "Aprillia";
// console.log(dataSaya);
// dataSaya.printDataNama(dataSaya.nama, dataSaya.umur);

console.log(this);
// function printData2(){
//     // nama = "Alviana Veronica";
//     // umur = 25;
//     // console.log(this);
// }

// printData2();

// const printData3 = () =>{
//     console.log(this);
// }

// class printDataClass {
//     constructor(){
//         nama = "Aprillia";
//         umur = 28;
//     }

//     printDataNama = () => {
//         console.log(this.nama);
//     }
// }

// new printDataClass().printDataNama;