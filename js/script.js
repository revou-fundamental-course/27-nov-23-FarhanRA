document.getElementById("alas").addEventListener('input', function inputField(){
    var textInput = inputField.value
    if(validateInput(textInput)){
        console.log("false")
    }else{
        console.log("true")
    }
})

function validateInput(inputValue){
    inputValue.value = inputValue.value.replace(/\D/,'')
}

function hitungLuasSegitiga(){
    
    var alas = document.getElementById("alas").value
    var tinggi = document.getElementById("tinggi").value

    if(alas !== '' && tinggi !== ''){
        var hasilHitung = 1/2 * parseInt(alas) * parseInt(tinggi)
        var hasil = document.getElementById("result-luas-segitiga")

        // menampilkan output ke elemen hasil
        hasil.innerHTML = "<p>L = 1/2 x a x t</p>" + "<p>L = 1/2 x "+alas+" x "+tinggi+"</p>" +"<p>L = "+ hasilHitung +"</p>"
    }else{
        alert('Semua input harus diisi!')
    }
  
   
}

function resetLuas(){
    document.getElementById("alas").value = ""
    document.getElementById("tinggi").value = ""
    document.getElementById("result-luas-segitiga").innerHTML=""
}

function hitungKelilingSegitiga(){
    var sisi1 = document.getElementById("sisi1").value
    var sisi2 = document.getElementById("sisi2").value
    var sisi3 = document.getElementById("sisi3").value
    if(sisi1 !== '' && sisi2 !== '' && sisi3 !== ''){
        var hasilHitung =  parseInt(sisi1) + parseInt(sisi2) + parseInt(sisi3)
        var hasil = document.getElementById("result-keliling-segitiga")
        // menampilkan output ke elemen hasil
        hasil.innerHTML = "<p>K = S1 + S2 + S3</p>" + "<p>K = "+sisi1+" + "+sisi2+" + "+sisi3+"</p>" +"<p>K = "+ hasilHitung +"</p>"
    }else{
        alert('Semua input harus diisi!')
    }
   
   
}

function resetKeliling(){
    document.getElementById("sisi1").value = ""
    document.getElementById("sisi2").value = ""
    document.getElementById("sisi3").value = ""
   
    document.getElementById("result-keliling-segitiga").innerHTML=""
}