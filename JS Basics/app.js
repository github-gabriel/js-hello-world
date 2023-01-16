/*
* Ausgaben
 */
window.alert("Alarm!"); // Zeigt ein Fenster mit dem Text "Alarm!"
console.log("Hello World!"); // Schreibt "Hello World!" in die Konsole
/*
* Variablen
 */
var a = 5, b = 10; // Deklaration von Variablen
var c = a + b;
console.log(c);
var text = "Hello World!";
console.log(text);
/*
* Strings
 */
console.log(text.length); // Gibt die Länge des Strings aus
console.log(text.toUpperCase()); // Gibt den String in Großbuchstaben aus
console.log(text.toLowerCase()); // Gibt den String in Kleinbuchstaben aus
console.log(text.indexOf("World")); // Gibt die Position des Strings "World" aus
console.log(text.search("World")); // Gibt die Position des Strings "World" aus
/*
* Logik
 */
var bool = true;
var bool2 = 2 === 3;
console.log(bool2);
if (bool2 && bool) {
    console.log("True");
} else if (bool2 && !bool) {
    console.log("True and False");
} else {
    console.log("else");
}
bool2 ? console.log("True") : console.log("False"); // Kurzschreibweise
switch (new Date().getDay()) {
    case 0:
        console.log("Sonntag");
        break;
    case 1:
        console.log("Montag");
        break;
    case 2:
        console.log("Dienstag");
        break;
    case 3:
        console.log("Mittwoch");
        break;
    case 4:
        console.log("Donnerstag");
        break;
    case 5:
        console.log("Freitag");
        break;
    case 6:
        console.log("Samstag");
        break;
}
/*
* Arrays
 */
var users = ["Max", "Moritz", "Peter"];
console.log(users[0]);
users.push("Hans"); // Fügt ein Element ans Ende des Arrays an
console.log(users[3]);
users.pop(); // Entfernt das letzte Element des Arrays
console.log(users[3]);
users[10] = "Test"; // Fügt ein Element an der Stelle 10 an
console.log(users[10]);
users.unshift("Fritz"); // Fügt ein Element an den Anfang des Arrays an
console.log(users[0]);
users.shift(); // Entfernt das erste Element des Arrays
console.log(users[0]);
var numbers = [4, 2, 5, 1, 3];
numbers.sort();
console.log(numbers);
/*
* Schleifen
 */
for (var i = 0; i < numbers.length; i++) {
    console.log(numbers[i]);
}

for (var j in numbers) {
    console.log(numbers[j]);
}

var k = 0;
while (k < 5) {
    console.log("test");
    k++;
}

var l = 0;
do {
    console.log("do");
    l++;
} while (l < 2);
/*
* continue
 */
for (i in users) {
    if (i == 2) {
        continue; // Überspringen des restl. Codes
    }
    console.log(users[i]);
}
/*
* Math
 */
var x = Math.round(Math.random() * 100);
var y = Math.round(Math.random() * 100);
console.log(Math.min(x, y)); // Gibt den kleineren Wert aus
console.log(Math.max(x, y)); // Gibt den größeren Wert aus
Math.PI; // PI
console.log(Math.pow(2, 2)); // x hoch y
/*
* Funktionen
 */
var e = add(5, 6);
console.log("Ergebnis: " + e);

function add(a, b) {
    return a + b;
}

function fakultaet(n) {
    var o = 5;
    z = 10;
    if (n <= 2) {
        return n;
    }
    return n * fakultaet(n - 1);
}

console.log(fakultaet(5));

// console.log(o); Fehler, lokal
console.log(z); // kein Fehler, global

function helloWorld() {
    console.log("Hello World!");
}

helloWorld();
