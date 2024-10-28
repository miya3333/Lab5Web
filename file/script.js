function validateForm() {
    // Ambil nilai dari form
    const name = document.getElementById("name").value;
    const phone = document.getElementById("phone").value;
    const email = document.getElementById("email").value;
    
    // Bersihkan pesan error sebelumnya
    document.getElementById("nameError").innerText = "";
    document.getElementById("phoneError").innerText = "";
    document.getElementById("emailError").innerText = "";
    
    // Cek validasi jika form kosong
    if (!name || !phone || !email) {
        alert("Semua field harus diisi!");
        return false;
    }

    // Validasi Nama
    if (name.length <= 6) {
        document.getElementById("nameError").innerText = "Nama harus lebih dari 6 huruf";
        return false;
    }

    // Validasi Nomor Telepon
    if (!/^\d{12,}$/.test(phone)) {
        document.getElementById("phoneError").innerText = "Nomor telepon harus berupa angka dan minimal 12 digit";
        return false;
    }

    // Validasi Email
    if (!email.endsWith("@gmail.com")) {
        document.getElementById("emailError").innerText = "Email harus menggunakan domain @gmail.com";
        return false;
    }

    // Jika validasi lolos, form akan dikirim
    return true;
}