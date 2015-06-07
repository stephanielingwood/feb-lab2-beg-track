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

 TODO: First, make a constructor function, called Blob, that makes blobs.

 TODO: Next, create an instance of Blob named blob.

 TODO: Then, use a loop to calculate how long it took the blob to finish
 with Dowington.
*/

function Blob() {
  this.lifespan = 0;
  this.rate = 0;
}

Blob.prototype.consumption = function() {
  var time = 1;
  var i = 0;
  while (i <= 1000) {
    time++;
    i = i + time;
  }
  return time;
};

var blob = new Blob();

var hoursSpentInDowington = blob.consumption(); // TODO: assign me the value of the
                           // above calculation

// Now, write a method that takes a population for an arbitrary
// town, and the starting consumption rate, and returns the number
// of hours the blob needs to ooze its way through that town.

function hoursToOoze(population, peoplePerHour) {
  // TODO: implement me based on the instructions above. Be sure to then assign me to the Blob's prototype.
  var timeToEat = 0;
  i = 0;
  while ((population > 0) && (i < population)) {
    timeToEat++;
    i = (peoplePerHour * timeToEat) + i;
  }
  return timeToEat;
}

Blob.prototype.hoursToOoze = hoursToOoze;

assert(blob.hoursToOoze(0, 1) === 0, "no people means no time needed.");
assert(blob.hoursToOoze(1000, 1) === hoursSpentInDowington,
  "hoursSpentInDowington should match hoursToOoze\"s result for 1000");
// TODO: write three more assertions like the two above, testing out
// the hoursToOoze method.

assert(blob.hoursToOoze(2, 2) === 1, "this should be 1 hour to ooze.");
assert(blob.hoursToOoze(30, 5) === 3, "this should be 3 hours");
assert(blob.hoursToOoze(100, 10) === 4, "this should be 4 hours");

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

function SentientBeing(homePlanet, language) {
  // TODO: specify a home planet and a language
  // you'll need to add parameters to this constructor
  this.homePlanet = homePlanet;
  this.language = language;
}

// sb is a SentientBeing object
function sayHello(sb) {
    // TODO: say hello prints out (console.log's) hello in the
    // language of the speaker, but returns it in the language
    // of the listener (the sb parameter above).
    // use the 'hello' object at the beginning of this exercise
    // to do the translating

    console.log("hello");
    return hello[sb.language];

    //TODO: put this on the SentientBeing prototype
  }
SentientBeing.prototype.sayHello = sayHello;
// TODO: create three SentientBeings, one for each language in the
// 'hello' object above.
var klingon = new SentientBeing("Qo\'noS", "klingon"); // TODO: fix me
var romulan = new SentientBeing("Romulus", "romulan"); // TODO: fix me
var human = new SentientBeing("Earth", "federation standard"); // TODO: fix me

assert(human.sayHello(klingon) === "nuqneH", "the klingon should hear nugneH");

// TODO: write five more assertions, to complete all the possible
// greetings between the three types of sentient beings you created above.

assert(human.sayHello(romulan) === "Jolan\"tru", "the romulan should hear Jolan\"tru");
assert(klingon.sayHello(human) === "hello", "the human should hear hello");
assert(klingon.sayHello(romulan) === "Jolan\"tru", "the romulan should hear Jolan\"tru");
assert(romulan.sayHello(klingon) === "nuqneH", "the klingon should hear nugneH");
assert(romulan.sayHello(human) === "hello", "the human should hear hello");

//*********************************************************
// PROBLEM 3: Moar Loops. 20 points.
//
// Implement the following functions. Write at least 3
// assertions for each one
//*********************************************************
function max(array) {
  // TODO: return the largest number in the given array
  array.sort(function(a, b) {
    return b - a;
  });
  return array[0];
}

// TODO: write three more assertions
assert(max([ 1, 3, 2 ]) === 3, "[1,3,2]");
assert(max([ 19, 11, 2 ]) === 19, "should be 19");
assert(max([ 10, 20, 30 ]) === 30, "should be 30");
assert(max([ 14, 420, 3324 ]) === 3324, "should be 3324");

function variablify(string) {
  // TODO: you are given a string with several words in it
  // return a corresponding variable name that follows
  // javascript conventions
  // HINT:
  // you might want to use these string methods:
  //  split(), charAt(), toUpperCase()
  // and this array method: join()
  var lowerCaseString = string.toLowerCase();
  var splitString = lowerCaseString.split(" ");

  for (i = 1; i < splitString.length; i++) {
    splitString[i] = splitString[i].charAt(0).toUpperCase() + splitString[i].substr(1);
  }
  return splitString.join("");
}

// TODO: write three more assertions
assert(variablify("one two three") === "oneTwoThree",
  "variablify(\"one two three\")");
assert(variablify("CATS and DOGS") === "catsAndDogs", "not quite right");
assert(variablify("for 3 DaYs and dogs") === "for3DaysAndDogs", "not quite right");
assert(variablify("Join the javascript fun") === "joinTheJavascriptFun", "not quite right");
//*********************************************************
// PROBLEM 4: Cleanup: 10 points
// Makes sure this file passes jshint and jscs
//
// ./node_modules/.bin/grunt jshint
// ./node_modules/.bin/grunt jscs
//*********************************************************
