let BeratMadan = 60
let TinggiMadan = 1.6

let BeratJoan = 50
let TinggiJoan = 1.7

let ImtMadan = BeratMadan / TinggiMadan ** 2
let ImtJoan = BeratJoan / TinggiMadan ** 2

console.log("")

console.log("Berat Madan  : "+BeratMadan)
console.log("Tinggi Madan : "+TinggiMadan)

console.log("")

console.log("Berat Joan   : "+BeratJoan)
console.log("Tinggi Joan  : "+TinggiJoan)

console.log("")

console.log("Imt madan : "+ImtMadan.toFixed(2))
console.log("Imt madan : "+ImtJoan.toFixed(2))

console.log("")

if (ImtMadan > ImtJoan) {
    console.log(`Nilai IMT Madan (${ImtMadan.toFixed(2)}) Lebih Tinggi Dari Joan(${ImtJoan.toFixed(2)})`)
}else{
    console.log(`Nilai IMT Joan(${ImtJoan.toFixed(2)}) Lebih Tinggi Dari Madan(${ImtMadan.toFixed(2)})`)
}

console.log("")
