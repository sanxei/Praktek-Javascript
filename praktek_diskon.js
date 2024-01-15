// const tagihan = 100000;
// const tip = 0.25;
// const nilaiTip = tagihan * tip;

// console.log(
//     `Tagihan sejumlah ${tagihan}, tip ${nilaiTip}, total bayar ${tagihan + nilaiTip}`
// )



const jumlahBeli = 4;
const harga = 50000;
const total = jumlahBeli * harga;

console.log("harga total : "+total)

if (jumlahBeli > 3) {
    const diskon = 0.35;
    console.log(`Diskon : ${total * diskon }`)
} else {
    const diskon2 = 0.05
    console.log("Diskon : "+total * diskon2)
}
