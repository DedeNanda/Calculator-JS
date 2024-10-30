const display = document.getElementById("display");

//inisiasi operator dan persen
function addOperator(operator) {
  if (operator === "%") {
    display.value = parseFloat(display.value) / 100; // mencari persen
  } else {
    display.value += operator; // operator + - / *
  }
}

//inisisasi number
function addNumber(number) {
  if (display.value === "0") {
    // untuk membuat angka 0 ke hapus saat klik angka lainnya
    display.value = number; //menampilkan angka 0 hilang
  } else {
    display.value += number; // menampilkan angka yang kita klik
  }
}

//untuk menghapus semua angka
function addClear() {
  display.value = "0";
}

//untuk mengapus angka satu persatu
function addDelete() {
  display.value = display.value.slice(0, -1);
}

//hasil dan persen
function hasil() {
  try {
    if (display.value.includes("%")) {
      display.value = display.value.replace((number) => number / 100); // menampilkan hasil dari persen
    }
    display.value = eval(display.value); // menampilkan angka hasil dari yang dibuat
  } catch (eror) {
    display.value("Eror"); //eror
  }
}
