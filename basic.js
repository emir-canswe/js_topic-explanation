// *************** JavaScript Temel Konu Anlatımı ***************

// 1. Değişkenler (Variables)
// var, let, const ile değişken tanımlanır.
// let ve const ES6 ile geldi; var eskisi.
// let => değeri değişebilir.
// const => sabit, değiştirilemez.
let isim = "Emir";           // String türünde değişken
const yas = 21;              // Sabit sayı
var sehir = "Diyarbakir";    // Eski değişken tanımlama yöntemi

// 2. Veri Tipleri (Data Types)
// String, Number, Boolean, Null, Undefined, Object, Symbol
let str = "Merhaba";         // Metin (String)
let num = 123;               // Sayı (Number)
let bool = true;             // Doğru veya yanlış (Boolean)
let bos = null;              // Boş değer (Null)
let tanimsiz;                // Tanımlanmamış (Undefined)
let obje = { ad: "Ali", yas: 30 };  // Nesne (Object)
let sembol = Symbol("id");   // Benzersiz sembol (Symbol)

// 3. Operatörler (Operators)
// Matematiksel, karşılaştırma ve mantıksal operatörler
let toplam = 5 + 3;          // Toplama: 8
let fark = 10 - 7;           // Çıkarma: 3
let carpim = 4 * 2;          // Çarpma: 8
let bolum = 20 / 4;          // Bölme: 5
let mod = 10 % 3;            // Mod alma (kalan): 1

// Karşılaştırma
console.log(5 == "5");       // true (değer eşitliği)
console.log(5 === "5");      // false (tip ve değer eşitliği)

// Mantıksal
console.log(true && false);  // false (VE)
console.log(true || false);  // true (VEYA)
console.log(!true);          // false (DEĞİL)

// 4. Koşullar (If - Else)
let not = 75;
if(not >= 90) {
  console.log("Harika, AA aldın!");
} else if(not >= 70) {
  console.log("İyi, BB aldın.");
} else {
  console.log("Daha çok çalışmalısın.");
}

// 5. Döngüler (Loops)

// For döngüsü (belirli sayıda tekrar)
for(let i=0; i<5; i++){
  console.log("Sayı: " + i);
}

// While döngüsü (şarta bağlı)
let j = 0;
while(j < 3){
  console.log("While sayısı: " + j);
  j++;
}

// Do-While döngüsü (en az 1 kere çalışır)
let k = 0;
do {
  console.log("Do-While sayısı: " + k);
  k++;
} while(k < 2);

// 6. Fonksiyonlar (Functions)

// Fonksiyon tanımlama ve çağırma
function topla(a, b) {
  return a + b;
}
console.log(topla(5, 7));  // 12

// ES6 arrow function
const carp = (a, b) => a * b;
console.log(carp(3, 4));   // 12

// 7. Diziler (Arrays)
let meyveler = ["Elma", "Armut", "Muz"];
console.log(meyveler[0]);      // "Elma"

// Diziye eleman ekleme
meyveler.push("Çilek");

// Dizi uzunluğu
console.log(meyveler.length);  // 4

// Dizi döngüsü
for(let i=0; i < meyveler.length; i++){
  console.log(meyveler[i]);
}

// 8. Nesneler (Objects)
let kisi = {
  isim: "Ali",
  yas: 30,
  konus: function() {
    console.log("Merhaba ben " + this.isim);
  }
};

console.log(kisi.isim);  // "Ali"
kisi.konus();            // "Merhaba ben Ali"

// 9. DOM Manipülasyonu (Document Object Model)
// Web sayfasındaki elementleri JS ile kontrol etmek için
// (Tarayıcıda çalıştırman lazım)

let baslik = document.getElementById("baslik");  // id ile seçme
baslik.textContent = "Yeni Başlık";              // yazı değiştirme

// 10. Olaylar (Events)
// Butona tıklanınca çalışan fonksiyon
/*
<button id="btn">Tıkla</button>
*/

document.getElementById("btn").addEventListener("click", function(){
  alert("Butona tıkladın!");
});

// 11. Promise ve Async/Await (Asenkron işlemler)

// Promise örneği (zaman alan işlem)
let soz = new Promise((resolve, reject) => {
  setTimeout(() => {
    resolve("Başarılı oldu");
  }, 2000);
});

soz.then((mesaj) => {
  console.log(mesaj);  // 2 saniye sonra "Başarılı oldu"
});

// Async/Await ile kullanım
async function bekleVeYaz() {
  let sonuc = await soz;
  console.log("Sonuç: " + sonuc);
}
bekleVeYaz();

// 12. Hata Yönetimi (Try - Catch)
try {
  let a = 5;
  let b = a.toUpperCase();  // Hata! sayıya string metot uygulanamaz
} catch(hata) {
  console.log("Hata yakalandı: " + hata);
}

// 13. Sınıflar (Classes) - ES6 ile geldi
class Insan {
  constructor(isim, yas) {
    this.isim = isim;
    this.yas = yas;
  }

  selamla() {
    console.log("Merhaba, ben " + this.isim);
  }
}

let kisi1 = new Insan("Ayşe", 25);
kisi1.selamla();  // Merhaba, ben Ayşe

// 14. Modüller (Modules)
// Bir dosyada export, diğer dosyada import edilir.
// export const pi = 3.14;
// import { pi } from './dosya.js';

// 15. Template Literals (Şablon Dizeleri)
let ad = "Emir";
let mesaj = `Merhaba, benim adım ${ad}`;  // Backtick ile yazılır
console.log(mesaj);

// 16. Spread ve Rest Operatörleri

// Spread - diziyi açar
let arr1 = [1, 2, 3];
let arr2 = [...arr1, 4, 5];
console.log(arr2);  // [1,2,3,4,5]

// Rest - fonksiyonda parametreleri toplar
function toplaRest(...sayilar) {
  return sayilar.reduce((toplam, s) => toplam + s, 0);
}
console.log(toplaRest(1,2,3,4));  // 10

// 17. Destructuring (Yıkıcı Atama)
// Dizi veya nesneden kolay veri çıkarma
let [x, y] = [10, 20];
console.log(x, y);  // 10 20

let {isim: ad2, yas: yas2} = {isim: "Zeynep", yas: 22};
console.log(ad2, yas2);  // Zeynep 22

// 18. Nullish Coalescing Operator (??) ve Optional Chaining (?.)

let kullanici = null;
let isim2 = kullanici ?? "Anonim";  // null veya undefined ise sağdaki değer
console.log(isim2);  // "Anonim"

let kisi3 = { adres: { sehir: "Istanbul" } };
console.log(kisi3.adres?.semt ?? "Bilinmiyor");  // Optional chaining + default

// 19. SetTimeout ve SetInterval

setTimeout(() => {
  console.log("3 saniye sonra çalıştı");
}, 3000);

let sayac = 0;
let intervalId = setInterval(() => {
  sayac++;
  console.log("Sayaç: " + sayac);
  if(sayac === 5) clearInterval(intervalId);
}, 1000);

// 20. JSON (JavaScript Object Notation)

// JSON string => JS objesi
let jsonStr = '{"isim":"Ahmet","yas":40}';
let objFromJson = JSON.parse(jsonStr);
console.log(objFromJson.isim);  // "Ahmet"

// JS objesi => JSON string
let jsObj = {isim: "Mehmet", yas: 35};
let jsonString = JSON.stringify(jsObj);
console.log(jsonString);  // '{"isim":"Mehmet","yas":35}'

// ************** Burada JavaScript'in temel konuları bitti! **************

