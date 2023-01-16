/*
* Cookies
 */
console.log(navigator.cookieEnabled); // Sind Cookies aktiviert?
document.cookie = "isread=1; expires=Fri, 15 Jan 2023 12:00:00 UTC; path=/"; // Cookie setzen
console.log(document.cookie);
/*
* OOP
 */
var personHans = {
    name:"Hans",
    alter:19
}; // Objekt erstellen
console.log(personHans.name + " ist " + personHans.alter + " Jahre alt.")
function Person(name, alter){ // Konstruktor
    this.name = name;
    this.alter = alter;

    this.altern = function(alter){
        this.alter = alter;
    }
    this.sayHello = function(){
        console.log("Hallo, ich bin " + this.name + " und bin " + this.alter + " Jahre alt.");
    }
}
var personPeter = new Person("Peter", 20); // Objekt erstellen
console.log(personPeter.name + " ist " + personPeter.alter + " Jahre alt.")
for(var x in personPeter){ // Objekt durchlaufen
    console.log(x + ': ' + personPeter[x]);
}

Person.prototype.getAlter = function(){ // Prototyp
    return this.alter;
};
Person.prototype.einkommen = 0; // Prototyp

personPeter.altern(21); // Methode mit Parameter aufrufen
personPeter.sayHello(); // Methode aufrufen

personPeter.einkommen = 1000; // Prototyp
console.log(personPeter.einkommen); // Prototyp aufrufen
console.log(personPeter.getAlter()); // Prototyp aufrufen
/*
* Errorhandling
 */
try{
    test();
}catch (e){
    console.log(e.message); // Error: test is not defined
}

try{
    isNegative(-1);
}catch (e){
    console.log(e);
}

function isNegative(a){
    if(a < 0){
        throw "Zahl ist negativ!";
    }else{
        return true;
    }
}
/*
* Zeit
 */
var date = new Date().getTime(); // Aktuelle Zeit in Millisekunden
var futureDate = new Date(date + 7 * 24 * 60 * 60 * 1000); // + 7 Tage
var dateFromName = new Date("Januar 15, 2023 12:00:00"); // Datum vom Namen erstellen
var dateFromAttributes = new Date(2023, 1, 15, 12, 0, 0); // Datum von Attributen erstellen
console.log(futureDate);
console.log(dateFromName);
console.log(dateFromAttributes);
/*
* var, let, const
 */
(function(){ // Anonyme Funktion
    var a = 42; // Lokale Variable, function scope
    let b = 17; // Lokale Variable, block scope
    const c = 23; // Lokale Konstante
    if(true){
        a = 21;
        var a = 12; // Lokale Variable, function scope, überschreibt a
        let b = 10; // Lokale Variable, block scope, "überschattet" das außen definierte b, aber nur innerhalb des Blocks
        console.log("a: " + a); // 12
        console.log("b: " + b); // 10
        // c = 7; // Fehler
    }
    console.log("a: " + a); // 21
    console.log("b: " + b); // 5
}());
var array = [];
(function(){
    for(let i = 0; i < 10; i++){ // Funktioniert mit let, nicht mit var
        array.push(function(){
            return i; // Wenn i mit var definiert wird, wird immer 10 zurückgegeben, da die Bedingung i < 10 ist
        });
    }
}());
console.log(array.map(function (f){
    return f(); // Wendet die Funktion auf jedes Element des Arrays an
}));
/*
* Generatoren und Yield
 */
function* generator(){
    yield "Hello";
    yield "World";
}
function* eulerscheZahl(){ // * = Generator
    var e = 1;
    var zaehler = 1;
    var zaehler2 = 2;
    while(true) { // e = 1 + 1/1 + 1/1*2 + 1/1*2*3 + ...
        yield e;
        e += 1 / zaehler;
        zaehler *= zaehler2;
        zaehler2 = zaehler2 + 1;
    }
}
var gen = generator();
// next() = nächstes Element, value = Wert, done = Letztes yield? | Ähnlich wie bei einem Cursor der durch Text geht
console.log(gen.next().value); // Hello
console.log(gen.next().value); // World

var eul = eulerscheZahl();
while(eul.next().value < 2.718281824){
    console.log(eul.next().value); // Eulersche Zahl wird berechnet
}

function* foobar(name){
    if(name){
        yield "Hallo " + name;
    }
    var a = yield "Test";
    yield a + 5;
    yield* ['foo', 'bar']; // Array wird durchlaufen
}
var generator = foobar("Peter");
console.log(generator.next().value); // Hallo
console.log(generator.next().value); // Test
console.log(generator.next(2).value); // 2 + 5, da 2 als Parameter für a übergeben wurde
console.log(generator.next().value); // foo
console.log(generator.next().value); // bar

for(let i of foobar()){ // for of = Durchläuft alle Elemente
    console.log(i);
}
/*
* Arrow Functions
 */
const arrayA = [1, 2, 3, 4, 5];
const squareArray = arrayA.map(function (t) { // Funktion wird auf jedes Element angewendet
    return t * t
});
const squareArray2 = arrayA.map(t => t*t); // "Kurzschreibweise" mit Arrow Function
console.log(squareArray);
console.log(squareArray2);

function Player(health){
    this.health = health;
}

Player.prototype.getPowerUp = function (array) {
    return array.map(function (t) {return this.health * t}); // Funktioniert nicht, function definiert sich ein "eigenes" this
}

Player.prototype.getPowerUpArrowFunc = function (array) {
    return array.map(t => this.health * t); // Arrow Function definiert sich kein eigenes "this", weshalb es funktioniert
}

var player = new Player(100);
console.log(player.getPowerUp(arrayA));

console.log(player.getPowerUpArrowFunc(arrayA));

console.log((() => {return 42})()); // Arrow Function mit IIFE (Immediately Invoked Function Expression) -> Arrow Function wird sofort ausgeführt

console.log(((x=10,y=10,z=10) => {return x * y * z})()); // Arrow Function mit mehreren Parametern und Default-Werten
