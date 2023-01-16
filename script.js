alert(`Selamat datang di permainan tebak angka.
Anda diminta untuk menebak angka 1 - 3.
Permainan ini akan berlangsung selama 5 ronde.
Pemain yang mendapatkan skor terbanyak akan menang
SELAMAT BERMAIN.`);

let ronde = 1;
let scoreP1 = 0;
let scoreP2 = 0;

while (ronde <= 5) {
    alert(`Ronde ${ronde}`);
    
    let player1;
    let player2;
    let isValid;

    // Terus menerus meminta input dari user sampai input yang diberikan valid
    do {
        player1 = prompt("( Player 1 ) Masukan angka tebakan anda:");
        player2 = prompt("( Player 2 ) Masukan angka tebakan anda:");
        isValid = validator(player1, player2);
    } while (isValid == false);

    let angka = randomNum();

    if (player1 == angka){
        alert(`Tebakan Player 1 benar. \nAngka: ${angka}`);
        scoreP1++;
    } else if (player2 == angka) {
        alert(`Tebakan Player 2 benar. \nAngka: ${angka}`);
        scoreP2++;
    } else {
        alert("Tidak ada tebakan yang benar.")
    }

    alert(`Player 1: ${scoreP1} \nPlayer 2: ${scoreP2}`)

    ronde++;
}

// Fungsi untuk memastikan input yang diberikan bukanlah huruf atau angka yang diluar 1-3
function validator(input1, input2) {
    if (Number(input1) >= 1 && Number(input2) >= 1 && Number(input1) <= 3 && Number(input2) <= 3) {
        if (input1 != input2) {
            return true;
        } else {
            alert("Angka tidak boleh sama dengan player lainnya.");
            return false;
        }
    } else {
        alert("Invalid. Harap masukan angka antara 1 - 3!");
        return false;
    }
}

function randomNum() {
    return Math.floor(Math.random() * 3) + 1;
}
