// Mengerti Cara Menggunakan If-Else
// Mengerti Logika If-Else
// Mengerti Cara Menggunakan Operator Evaluasi ===, !==

// Restrictions
// Tidak boleh menggunakan built-in function apapun
// Januari, Maret, April
// "member baru" member lama", "belum terdaftar"

var name= "Agus"
var role= "belum terdaftar"
var birthMonth= "Januari"

if(name===""){
    console.log("Nama tidak boleh kosong!")
}
else if(role==="member baru"){
    if(birthMonth==="Januari"){
    console.log("Selamat "+name+"!. Anda berhak mendapatkan voucher diskon sebesar 50%!")
    }
    else{
        console.log("Maaf "+name+", voucher diskon hanya untuk yang lahir di bulan Januari.")
    }
}
else if(role==="member lama"){
    if(birthMonth==="Januari"){
        console.log("Selamat "+name+"!. Anda berhak mendapatkan voucher diskon sebesar 30%!")
        }
        else{
            console.log("Maaf "+name+", voucher diskon hanya untuk yang lahir di bulan Januari.")
        }
}
else{
    console.log(`Selamat datang di Bikilipik, ${name}. Mohon maaf untuk mendapatkan voucher diskon, anda wajib mendaftar dahulu.`)
}
// if(birthMonth=Januari){
//     console.log('A')
// }
// else{
//     console.log('b')
// }