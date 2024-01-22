// let nilaiAkhir = prompt("Masukan Nilai Akhir")

// if (nilaiAkhir >= 80 && nilaiAkhir <- 100) {
//     document.write(`Nilai Akhir Anda A (${nilaiAkhir})`)
// }else if (nilaiAkhir >= 70 && nilaiAkhir <= 80) {
//     document.write(`Nilai Akhir Anda B (${nilaiAkhir})`)
// }else if (nilaiAkhir > 0 && nilaiAkhir <= 70) {
//     document.write(`Nilai Akhir Anda C (${nilaiAkhir})`)
// }else{
//     document.write("Anda Belum Mengikuti Ujian!!")
// }



// let url = location.href
// let userRole = prompt("Login Sebagai: ")
// if (userRole == 'Admin') {
//     document.write("Selamat Datang Admin")
// }else if (userRole == 'Operator') {
//     document.write("Selamat Datang Operator")
// }else{
//     document.write("Anda Dilarang Mengakses Halaman Ini")
// }

let timA = (96 + 108 + 89)/ 3
let timB = (88 + 91 + 110)/ 3

console.log(`Skor Rata-Rata Tim A: ${timA.toFixed(2)}`)
console.log(`Skor Rata-Rata Tim B: ${timB.toFixed(2)}`)

console.log("")

if (timA > timB) {
    console.log(`Tim A Menang Dengan  Rata-Rata Skor ${timA.toFixed(2)}`)
}else if(timB > timA){
    console.log(`Tim B Menang Dengan Rata-Rata Skor ${timB.toFixed(2)}`)
}else{
    console.log("Pertandingan Seri")
}
