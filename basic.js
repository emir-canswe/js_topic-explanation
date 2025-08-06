// ************ JavaScript Derin Konu Anlatımı ************

// 1. Değişken Tanımlama ve Kapsam (Scope)

// var ile tanımlanan değişken fonksiyon scope'a sahiptir
function testVar() {
  if(true) {
    var x = 10;
  }
  console.log(x);  // 10 (block scope yok var'da)
}
testVar();

// let ve const block scope'a sahiptir
function testLet() {
  if(true) {
    let y = 20;
    const z = 30;
  }
  // console.log(y); // ReferenceError: y is not defined
  // console.log(z); // ReferenceError: z is not defined
}
testLet();

// Hoisting (Yukarı çekilme)
// var değişkenleri tanımlamadan önce kullanılabilir (undefined)
// let ve const ise kullanılmadan önce tanımlanmalı
console.log(aVar); // undefined
// console.log(aLet); // ReferenceError
var aVar = 5;
let aLet = 10;

// 2. Veri Tipleri ve Tür Dönüşümleri

// Primitifler: string, number, boolean, null, undefined, symbol, bigint
// Referans tipler: object, array, function

let num = 42;
let str = "42";

console.log(num == str);   // true  (değer kontrolü yapar)
console.log(num === str);  // false (tip ve değer kontrolü)

// Tür dönüşümü otomatik (coercion) yapılabilir
console.log('5' + 2);    // "52" (string concatenation)
console.log('5' - 2);    // 3 (number conversion)

// String to number
console.log(Number("123")); // 123
console.log(parseInt("123abc")); // 123
console.log(parseFloat("123.45abc")); // 123.45

// 3. Fonksiyonların İleri Kullanımı

// Fonksiyonlar birer değerdir, değişkene atanabilir
const fonk = function(a, b) {
  return a + b;
};
console.log(fonk(2,3)); // 5

// Callback fonksiyonları (başka bir fonksiyona argüman olarak geçme)
function islemYap(a, b, callback) {
  return callback(a,b);
}
console.log(islemYap(5, 10, (x,y) => x * y)); // 50

// Immediately Invoked Function Expression (IIFE)
// Anında kendini çağıran fonksiyon
(function(){
  console.log("Hemen çalıştırıldı");
})();

// 4. Closure (Kapanış)

// Bir fonksiyon kendi dışındaki değişkenlere eriştiğinde closure oluşur
function sayacYap() {
  let sayac = 0;
  return function() {
    sayac++;
    console.log(sayac);
  }
}
const sayac1 = sayacYap();
sayac1();  // 1
sayac1();  // 2
// sayac değişkeni dışarıdan erişilemez, ama fonksiyon içinde canlı kalır.

// 5. Prototipler ve Kalıtım

// JavaScript'te nesneler prototip zinciri ile özellik alır
const hayvan = {
  konus: function() { console.log("Ses çıkarıyor"); }
};

const kedi = Object.create(hayvan);
kedi.miyav = function() { console.log("Miyav!"); }

kedi.konus(); // "Ses çıkarıyor" (prototipten)
kedi.miyav(); // "Miyav!"

// ES6 ile class sentaksı geldi (prototip tabanlıdır)
// Kalıtım örneği:
class Arac {
  constructor(model) {
    this.model = model;
  }
  calistir() {
    console.log(this.model + " çalıştı.");
  }
}

class Araba extends Arac {
  calistir() {
    super.calistir();   // üst sınıf fonksiyonunu çağırır
    console.log("Araba motor sesi");
  }
}

const bmw = new Araba("BMW");
bmw.calistir();
// Output:
// BMW çalıştı.
// Araba motor sesi

// 6. Asenkron Programlama

// Callback hell (çok iç içe callback)
// Örnek: setTimeout içinde setTimeout...

// Promise ile daha temiz yönetim
let veriGetir = new Promise((resolve, reject) => {
  setTimeout(() => {
    resolve("Veri geldi");
  }, 1000);
});

veriGetir.then((mesaj) => {
  console.log(mesaj);
}).catch((hata) => {
  console.error("Hata: ", hata);
});

// Async / Await (Promise kullanımını daha senkron gösterir)
async function veriAl() {
  try {
    let sonuc = await veriGetir;
    console.log("Sonuç: ", sonuc);
  } catch(e) {
    console.error("Hata: ", e);
  }
}
veriAl();

// 7. Event Loop ve JavaScript'in Tek İplikli Yapısı

console.log("Başladı");

setTimeout(() => {
  console.log("Timeout bitti");
}, 0);

Promise.resolve().then(() => {
  console.log("Promise bitti");
});

console.log("Bitti");

// Çıktı sırası:
// Başladı
// Bitti
// Promise bitti   (microtask kuyruğu)
// Timeout bitti   (task kuyruğu)

// 8. Yüksek Seviyeli Diziler Metodları (Array Methods)

// map: her elemana fonksiyon uygular ve yeni dizi döner
let sayilar = [1, 2, 3];
let kareler = sayilar.map(x => x * x);
console.log(kareler); // [1,4,9]

// filter: koşula uyanları döner
let ciftSayilar = sayilar.filter(x => x % 2 === 0);
console.log(ciftSayilar); // [2]

// reduce: diziyi tek değere indirger
let toplam = sayilar.reduce((acc, val) => acc + val, 0);
console.log(toplam);  // 6

// find: koşula uyan ilk elemanı döner
let ilkCift = sayilar.find(x => x % 2 === 0);
console.log(ilkCift); // 2

// some / every: koşulu kısmen / tamamen sağlama kontrolü
console.log(sayilar.some(x => x > 2));  // true
console.log(sayilar.every(x => x > 0)); // true

// 9. Destructuring İleri Kullanımı

const kisi = {
  isim: "Veli",
  yas: 32,
  adres: {
    sehir: "İzmir",
    postaKodu: 35200
  }
};

// İç içe nesnelerde kolay erişim
const {isim, adres: {sehir}} = kisi;
console.log(isim, sehir);  // Veli İzmir

// Fonksiyon parametrelerinde destructuring
function yazdir({isim, yas}) {
  console.log(`İsim: ${isim}, Yaş: ${yas}`);
}
yazdir(kisi);

// 10. Spread ve Rest ile Derinlik

// Dizilerde Spread
const dizi1 = [1, 2];
const dizi2 = [...dizi1, 3, 4];
console.log(dizi2);  // [1, 2, 3, 4]

// Nesnelerde Spread
const obje1 = {a:1, b:2};
const obje2 = {...obje1, c:3};
console.log(obje2);  // {a:1, b:2, c:3}

// Rest parametre (fonksiyon)
function toplam(...sayilar) {
  return sayilar.reduce((a,b) => a+b, 0);
}
console.log(toplam(1,2,3,4)); // 10

// 11. Optional Chaining ve Nullish Coalescing

const kullanici = {
  isim: "Ahmet",
  adres: null
};

console.log(kullanici.adres?.sehir);  // undefined, hata vermez
console.log(kullanici.adres?.sehir ?? "Bilinmiyor");  // Bilinmiyor

// 12. Symbol ve Unique Değerler

const s1 = Symbol("id");
const s2 = Symbol("id");
console.log(s1 === s2); // false (her Symbol eşsizdir)

// Nesnelerde Symbol key olarak kullanılabilir
const obje = {
  [s1]: "benzersiz değer"
};
console.log(obje[s1]);

// 13. Proxy ve Reflect (İleri Seviye Nesne Kontrolü)

const hedef = {
  isim: "Emir"
};

const proxy = new Proxy(hedef, {
  get(target, prop) {
    console.log(`${prop} özelliği çağrıldı`);
    return target[prop];
  },
  set(target, prop, value) {
    console.log(`${prop} özelliği değiştiriliyor: ${value}`);
    target[prop] = value;
    return true;
  }
});

console.log(proxy.isim);  // Emir, konsolda uyarı mesajı
proxy.isim = "Can";       // setter uyarısı

// 14. Memory Leak Nedir ve Nasıl Önlenir?

// Closure içinde gereksiz tutulursa bellek sızıntısı olur.
// DOM elementlerine referans tutmak da sorun yaratabilir.

// 15. Garbage Collection (Çöp Toplama)

// JavaScript otomatik hafıza yönetimi yapar.
// Kullanılmayan nesneler bellekten temizlenir.

// 16. Modüller (ES6 Modules)

// export ve import kullanımı:
// export const pi = 3.14;
// import { pi } from './math.js';

// 17. Template Literals (Şablon Dizeleri) - İleri Kullanım

const ad = "Emir";
const mesaj = `Merhaba, 
benim adım ${ad}.
Bugün tarih: ${new Date().toLocaleDateString()}`;
console.log(mesaj);

// 18. JavaScript'te Tür Güvenliği ve Tip Kontrolleri

console.log(typeof 123);          // "number"
console.log(typeof "metin");      // "string"
console.log(typeof undefined);    // "undefined"
console.log(typeof null);         // "object" (bu JavaScript'in bilinen garipliği)
console.log(typeof []);           // "object"
console.log(Array.isArray([]));   // true (diziyi kontrol için doğru yöntem)

// 19. JSON Web Token (JWT) ve Güvenlik (Kavram olarak)

// JWT, JSON formatında bir güvenlik token'ıdır.
// Kimlik doğrulama ve yetkilendirme için kullanılır.

// 20. Event Delegation (Olay Delege Etme)

// Birden fazla benzer eleman varsa, üst elemana olay dinleyici koyarak performans artırılır.
/*
<ul id="liste">
  <li>1</li>
  <li>2</li>
  <li>3</li>
</ul>
*/

document.getElementById("liste").addEventListener("click", (e) => {
  if(e.target && e.target.nodeName === "LI") {
    console.log("Tıklanan: " + e.target.textContent);
  }
});

// ************** Daha ileri derinlik istersen devam ederiz kral! **************
