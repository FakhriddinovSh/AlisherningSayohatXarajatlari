// Dollarni yaxlitlab olish
var dollar = 9433.34;
console.log (dollar.toFixed());
// 1$ = 9433 so'm

// Yevroni yaxlitlab olish 
var yevro = 10354.03;
console.log (yevro.toFixed());
// 1 Yevro = 10354 so'm

// Jami harajatlara dollarda 
var samalyotBileti = 500
var mehmonxonaTolovi = 250
console.log (samalyotBileti + mehmonxonaTolovi)
// Jami dollardagi harajat 750$

// Jami dollardagi harajatlarni so'mga aylantiramiz
var dollarda = 750
var somda = 9433
console.log (dollarda*somda);
// Dollardan so'mga o'tkazilgan pul miqdori 7.074.750 som

// Jami yevrodagi harajatlarni so'mga aylantiramiz
var yevroda = 120
var somda = 10354
console.log (yevroda*somda);
// Yevrodan so'mga o'tkazilgan pul miqdori 1.242.483 som

// Jami so'mdagi harajatlari 
var dollardagi = 7074750 
var yevrodagi = 1242483
console.log (dollardagi+yevrodagi);
// Jami somdagi harajatlari 8.317.233 som

// Alisherning jami puli tahminan 
var AlisherJamiPuli = prompt ("Menda jami 5.000.000 pul bor");
console.log (AlisherJamiPuli)
// Alisherning jami puli prompt orqali chiqarildi


// Alisherni sayohatga chiqishi yoki chiqmasligi korsatigan:
var AlisherMablagi = 5000000
if (AlisherMablagi == 8317233){
    console.log ("Oq yo’l, Alisher!")
}else{
    console.log ("Alisher, ozgina sabr qilish kerak bo’lar ekan")
}
// Alisher sayohatga chiqish yoki chiqmasligini hal qildi:)
