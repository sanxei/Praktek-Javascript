let BeratMadan = 60
let TinggiMadan = 1.60

let BeratJoan = 75
let TinggiJoan = 170

let ImtMadan = BeratMadan / TinggiMadan ** 2
let ImtJoan = BeratJoan / TinggiMadan ** 2

const madanHigherIMT = ImtMadan > ImtJoan

console.log("Berat Madan  : "+BeratMadan)
console.log("Tinggi Madan : "+TinggiMadan)

console.log("Berat Joan   : "+BeratJoan)
console.log("Tinggi Joan  : "+TinggiJoan)

console.log("Imt madan : "+ImtMadan)
console.log("Imt madan : "+ImtJoan)

console.log("apakah imt adan lebih tingi dari joan")
console.log(`hasilnya adalah ${madanHigherIMT}`)