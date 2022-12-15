function validasi(){
    let nama_ = document.getElementById("nama").value;

    if(nama_ == ""){
        document.getElementById("valid-nama").innerHTML = ("nama wajib diisi!");
    }
    else{
        document.getElementById("valid-nama").innerHTML = (" ");
    }
//----- validasi email ------
    let email_ = document.getElementById("email").value;

    if(email_.indexOf("@")!=-1 && email_.indexOf(".")!=-1){
        document.getElementById("valid-email").innerHTML = (" ");
    }
    else if(email_ == ""){
        document.getElementById("valid-email").innerHTML = ("email wajib diisi!");
    }
    else{
        document.getElementById("valid-email").innerHTML = ("email tidak valid");
    }
//----- validasi jam ------
    let jam_ = document.getElementById("jam").value;
    if (jam_ == ""){
        document.getElementById("valid-jam").innerHTML = ("jam keberangkatan wajib diisi!");
    }
    else{
        document.getElementById("valid-jam").innerHTML = (" ");
    }
//----- validasi tujuan ------
    let tujuan_ = document.getElementById("tujuan").value;
    if(tujuan_ == ""){
        document.getElementById("valid-tujuan").innerHTML = ("Tujuan Keberangkatan wajib diisi!");
    }
    else{
        document.getElementById("valid-tujuan").innerHTML = (" ");
    }
//----- validasi tiket -----
    let jumlah_ = document.getElementById("jumlah").value;
    if(jumlah_ == ""){
        document.getElementById("valid-jumlah").innerHTML = ("pilih jumlah tiket!");
    }
    else{
        document.getElementById("valid-jumlah").innerHTML = (" ");
    }

// ---- hasil inputan -----

    let konf_Nama = document.getElementById("nama").value;
    let konf_Email = document.getElementById("email").value;
    let konf_Jam = document.getElementById("jam").value;
    let konf_Tujuan = document.getElementById("tujuan").value;
    let konf_Jumlah = document.getElementById("jumlah").value;

    document.getElementById("konfNama").innerHTML = konf_Nama;
    document.getElementById("konfEmail").innerHTML = konf_Email;
    document.getElementById("konfJam").innerHTML = konf_Jam;
    document.getElementById("konfTujuan").innerHTML = konf_Tujuan;
    document.getElementById("konfJumlah").innerHTML = konf_Jumlah;
}