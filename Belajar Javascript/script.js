// Ini Adalah Komentar
/*
    Komentar 1
    Komentar 2
*/
// console.log('Selamat Datang')

let kata = 'Selamat Datang';
let lorem = 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Inventore distinctio tenetur maxime animi eligendi aliquam fugit dolorum id. Necessitatibus vitae aspernatur dolorum mollitia vel eos vero illo sequi minima, numquam ducimus incidunt corporis eveniet, voluptas voluptatibus cupiditate, nam perspiciatis. Natus et itaque excepturi voluptates, perferendis numquam consectetur consequuntur dicta, facilis eum maxime reiciendis dolorem deleniti, laudantium architecto sapiente totam optio quibusdam incidunt facere blanditiis nisi temporibus repellat accusamus. Neque ullam facilis fugit tenetur consectetur necessitatibus accusamus architecto consequuntur cumque velit dolorum, perspiciatis explicabo? In dolore alias pariatur nobis. Ab vero nobis totam. Molestias totam dolor reprehenderit ea asperiores at facere?';

// var kalimat = 'Senangnya belajar bahasa pemrograman javascript';
// Aturan penulisan variable
// Variable digunakan untuk menampung sebuah nilai yang memiliki tipe data
/*
    1. Variabel bisa dituliskan menggunakan angka/huruf dan beberapa simbol tertentu
        underscore (_)
    2. Penulisan variabel harus diawali menggunakan huruf atau underscore (_)
    3. Case Sensitive
    4. Semisal ada 2 kata pada variable tidak boleh dipisah menggunakan spasi ( )
*/

// let 1angka; // Salah
// let angka2; // benar
// let _angka; // benar
// let selamat datang // salah
// let selamat_datang; // benar
// let selamatDatang; // benar

console.log(kata);
// console.log(kalimat);
console.clear();
// Tipe Data
let kalimat = "Lorem ipsum dolor sit amet consectetur adipisicing elit." // String
let angka = 100 // Number (integer)
let desimal = 20.5 // Number (float)
let kepastian = true // Boolean (true/false)
let kosong = null // Null
let belum // Undefined
console.log(belum);

let angka1, angka2, penjumlahan, pengurangan, perkalian, pembagian, sisaBagi

angka1 = 20
angka2 = 15

penjumlahan = angka1 + angka2
pengurangan = angka1 - angka2
perkalian = angka1 * angka2
pembagian = angka1 / angka2
sisaBagi = angka1 % angka2

console.log({
    penjumlahan, pengurangan, perkalian, pembagian, sisaBagi
});

console.log({ angka1, angka2 });
angka1 = 15
angka2 = 5
console.log({ angka1, angka2 });
console.clear()

const phi = 3.14
console.log(phi);

// OPERATOR PERBANDINGAN
let kurang_dari, sama_dengan, lebih_dari, lebih_dari_sama, kurang_dari_sama, tidak_sama_dengan

kurang_dari = 50 < 20   // false
sama_dengan = 20 == 20  // true 
lebih_dari = 30 > 15   // true
lebih_dari_sama = 20 >= 30  // false
kurang_dari_sama = 20 <= 20  // true
tidak_sama_dengan = 18 != 20  // true

console.log({
    kurang_dari, sama_dengan, lebih_dari, lebih_dari_sama, kurang_dari_sama, tidak_sama_dengan
});
console.clear()

// Operator Penugasaaan
angka1 = 20
console.log(angka1);
angka1++ // Increment
console.log(angka1);
angka1-- // Decrement
console.log(angka1);
angka1 += 2
console.log(angka1);
angka1 -= 5
console.log(angka1);
angka1 *= 10
console.log(angka1);
angka1 /= 5
console.log(angka1);

// Percabangan
if (true) {
    console.log('Kondisi sudah terpenuhi!')
}

if (5 < 2) {
    console.log('Kondisi sudah benar!')
}

if (false) {
    console.log('Kondisi terpenuhi!')
} else {
    console.log('Ini adalah kondisi jika tidak terpenuhi!')
}

let nilai = 80
if (nilai >= 80) {
    console.log('Nilai kamu memenuhi syarat!');
} else {
    console.log('Nilai kamu tidak memenuhi syarat!')
}

if (nilai > 80) {
    console.log('Nilai kamu diatas rata-rata');
} else if (nilai == 80) {
    console.log('Nilai kamu sudah memenuhi syarat')
} else {
    console.log('Nilai kamu dibawah rata-rata');
}
console.clear()
// Operator Logika
/*
1. AND (&&): Jika 2 kondisi benar maka nilai true
2. OR (||): Jika salah satu kondisi benar maka nilai true
3. XOR (!): Kebalikan dari kondisi
*/
let and, or, xor

and = (1 == 1) && (2 < 3) // (true) && (true) = true
or = (3 > 2) || (5 == 3) // (true) || (false) = true
xor = !(3 > 7) // (false) = true

console.log({ and, or, xor });
console.clear()
// Perulangan 
angka = 1

while (angka <= 5) {
    console.log('Angka', angka);
    angka++
}

do {
    console.log('Angka', angka);
    angka++
} while (angka <= 10);

for (let bilangan = 1; bilangan <= 10; bilangan++) {
    console.log('Bilangan', bilangan);
}

console.clear();

// Fungsi
function nama_fungsi() {

}

nama_fungsi() // Cara memanggil fungsi

function halo() {
    console.log('Halo Selamat Datang');
}

halo()

function sapaan(nama, alamat) {
    console.log('Halo', nama)
    console.log('Alamat', alamat)
}

sapaan('John', 'Malang')

function jumlah(bilangan1, bilangan2) {
    return bilangan1 + bilangan2
}

// console.log(jumlah(10, 20));
const hasil_jumlah = jumlah(10, 20)
console.log(hasil_jumlah);

console.clear()

// console.log(document);
// window.addEventListener('load', function () {
//     alert('Selamat Datang')
// })
const inputNama = document.getElementById('nama')
const resultNama = document.getElementById('result-nama')

inputNama.addEventListener('keyup', function () {
    const inputValue = this.value
    resultNama.value = inputValue
})

const inputAlamat = document.getElementById('alamat')
const resultAlamat = document.getElementById('result-alamat')

inputAlamat.addEventListener('keyup', function () {
    const inputValue = this.value
    resultAlamat.value = inputValue
})