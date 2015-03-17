/*********************************************************
LAB 2: LOOPY SCI-FI

Welcome to Lab 2 =)

Be sure to read all the comments!

All of the instructions are inline with the assignment below.
Look for the word TODO in comments.  Each TODO will have a
description of what is required.

To run this file (in the terminal) use: node lab2.js

*********************************************************/
// SETUP
//*********************************************************

// We're going to use this special assert method again to
// test our code
function assert(expression, failureMessage) {
  if (!expression) {
    console.log("assertion failure: ", failureMessage);
  }
}

//*********************************************************
// PROBLEM 1: The Blob. 20 points
//*********************************************************

/* Dowington, PA had 1000 citizens on the night the blob escaped
 its meteorite. At first, the blob could only find and consume
 Pennsylvanians at a rate of 1/hour. However, each time it digested
 someone, it became faster and stronger: adding to its consumption
 rate by 1 person/hour.

 persons consumed  |  rate of consumption
 ------------------|---------------------
        0          |       1/hour
        1          |       2/hour
        2          |       3/hour
        3          |       4/hour
        4   | 5/hour

 TODO: First, make a constructor function, called Blob, that makes blobs.
*/
function Blob(personsConsumed, rateOfConsumption){
// this.blob = "Dowington";
this.personsConsumed = personsConsumed;
this.rateOfConsumption = rateOfConsumption;
this.timeTotal=0;
}
// TODO: Next, create an instance of Blob named blob.
var blob = new Blob();
 //TODO: Then, use a loop to calculate how long it took the blob to finish
 //with Dowington.
var dowington = 1000;
//take blob expansion rate n + 1
function blobRate(hours){
  var humansEaten = hours + 1;
  return humansEaten;
}



var blob = new Blob(0,1);


for (var rateOfConsumption=1; rateOfConsumption <= 1001; rateOfConsumption++ ){
 this.timeTotal += (60 / rateOfConsumption);
}

blob.conversion = function(){
var result = (this.timeTotal / 60);
var hours = Math.floor(result);
return (hours);
};

var hoursSpentInDowington; // TODO: assign me the value of the
                           // above calculation
blob.conversion();
console.log(hoursSpentInDowington);
// Now, write a method that takes a population for an arbitrary
// town, and the starting consumption rate, and returns the number
// of hours the blob needs to ooze its way through that town.

// TODO: implement me based on the instructions above. Be sure to then assign me to the Blob's prototype.
  Blob.prototype.hoursToOoze = function(population, peoplePerHour) {
    for (peoplePerHour; peoplePerHour <= population; peoplePerHour++ ){
       this.timeTotal += (60 / peoplePerHour);
      }
  };


assert(blob.hoursToOoze(0, 1) === 0, "no people means no time needed.");
assert(blob.hoursToOoze(1000, 1) === hoursSpentInDowington,
  "hoursSpentInDowington should match hoursToOoze\"s result for 1000");
// TODO: write three more assertions like the two above, testing out
// the hoursToOoze method.
assert(blob.hoursToOoze(1000, 2) < hoursSpentInDowington, "This should take less time.");
assert(blob.hoursToOoze(5000, 1) > hoursSpentInDowington, "That should take a lot longer.");
//*********************************************************
// PROBLEM 2: Universal Translator. 20 points
//*********************************************************

var hello = {
  klingon: "nuqneH",  // home planet is Qo"noS
  romulan: "Jolan\"tru", // home planet is Romulus
  "federation standard": "hello" // home planet is Earth
};

// TODO: define a constructor that creates objects to represent
// sentient beings. They have a home planet, a language that they
// speak, and method called sayHello.

function SentientBeing (homePlanet, Language) {
  this.homePlanet = homePlanet;
  this.Language = Language;
}

// sb is a SentientBeing object
function sayHello (sb) {
    // TODO: say hello prints out (console.log's) hello in the
    // language of the speaker, but returns it in the language
    // of the listener (the sb parameter above).
    // use the 'hello' object at the beginning of this exercise
    // to do the translating
    console.log(hello[this.language]);
    return hello[sb.language];
    //TODO: put this on the SentientBeing prototype
  }
SentientBeing.prototype = {};
SentientBeing.prototype.sayHello = sayHello;
function Klingon() {
  this.parent = "SentientBeing";
}
function Romulan() {
  this.parent = "SentientBeing";
}
function Human() {
  this.parent = "SentientBeing";
}
// TODO: create three SentientBeings, one for each language in the
// 'hello' object above.
var Klingon = new SentientBeing("Qo\"noS", "nuqneH");
var Romulan = new SentientBeing("Romulus", "Jolan\"tru");
var Human = new SentientBeing("Earth", "hello");

assert((new Human()).sayHello(new Klingon()) === "nuqneH",
  "the klingon should hear nuqneH");
// TODO: write five more assertions, to complete all the possible
// greetings between the three types of sentient beings you created above.
assert((new Human()).sayHello(new Romulan()) === "Jolan\"tru",
  "the romulan should hear Jolan\"tru");
assert((new Romulan()).sayHello(new Klingon()) === "nuqneH",
  "the klingon should hear nuqneH");
assert((new Romulan()).sayHello(new Human()) === "hello",
  "the human should hear hello");
assert((new Klingon()).sayHello(new Romulan()) === "Jolan\"tru",
  "the romulan should hear Jolan\"tru");
assert((new Klingon()).sayHello(new Human()) === "hello",
  "the human should hear hello");

//*********************************************************
// PROBLEM 3: Moar Loops. 20 points.
//
// Implement the following functions. Write at least 3
// assertions for each one
//*********************************************************
function max(array) {
  // TODO: return the largest number in the given array
  return Math.max.apply( Math, array );
}

// TODO: write three more assertions
assert(max([ 1, 3, 2 ]) === 3, "[1,3,2]");
assert(max([ 1, 3, 20 ]) === 20, "[1,3,20]");
assert(max([ 1, 300, 2 ]) === 300, "[1,300,2]");


  // TODO: you are given a string with several words in it
  // return a corresponding variable name that follows
  // javascript conventions
  // HINT:
  // you might want to use these string methods:
  //  split(), charAt(), toUpperCase()
  // and this array method: join()

function variablify(string) {
var splitTheString = string.split(" ");
var values = [];
    for (i = 0; i < splitTheString.length; i++) {
        if (i!==0) {
            values.push(splitTheString[i].charAt(0).toUpperCase()+splitTheString[i].slice(1));
        } else {
            values.push(splitTheString[i]);
        }
    }
     var joinUpTheWerds = values.join('');
     return joinUpTheWerds;
}



// TODO: write three more assertions
assert(variablify("one two three") === "oneTwoThree",
  "variablify(\"one two three\")");
assert(variablify("word bird dog") === "wordBirdDog",
  "variablify(\"one two three\")");
assert(variablify("cat stick table") === "catStickTable",
  "variablify(\"one two three\")");
//*********************************************************
// PROBLEM 4: Cleanup: 10 points
// Makes sure this file passes jshint and jscs
//
// ./node_modules/.bin/grunt jshint
// ./node_modules/.bin/grunt jscs
//*********************************************************
