window.alert
  ("You are about to start W3school javascript offline class");
  // Today's class start from js objects;
    // Objects are variable that contains many values.
      // Check example below;

      let inval = document.getElementById("institutions")

const 
  school = 
      { federal:"Unilorin", 
        state:"Kwasu", 
        polytechnic:"Offa",
        Description: function() {
          return `Different type of institutions we have in Nigeria
           are federal, state, and the likes, few names of institutions
          in Nigeria include ${this["federal"]}, ${this.state}, 
          ${this.polytechnic}.`;
        }
      };

      school.federal = "Uniben";

  inval.innerHTML = 
      (school.Description());

// Everything listed in the braces above are known as objects.
/* we can modify the value of each property by assigning new value to it
  example: by changing the value of federal to Unibadan, 
    we say
      { school.federal = "Unibadan"; (by doing this we have assigned new
       value to federal )  
       by invoking federal the output will be Unibadan and not unilorin }

// Object literal are objects inside a curly braces, proposed in the sense of { keyvaluepair:value or property:value }

/* We can create an empty object and then assign value to it,
    check example below */

const departmentInSocialScience = {};
departmentInSocialScience.firstDepartment = "Economics";
departmentInSocialScience.secondDepartment = "Criminology";
departmentInSocialScience.thirdDepartment  = "Geography";

document.getElementById("department").innerHTML = 
    `Few out of the departments in social science are 
        ${departmentInSocialScience.firstDepartment}, 
            and ${departmentInSocialScience.secondDepartment}`;

/* We can also create new object using this statement
       { const car = new objects(); } 
         buh for readability and speed execution purpose we use
          object literal method,
            { const car = {};} */

/* We can access properties in an object in two ways 
        by = { object.Name.propertyName }
         or = { objectName["propertyName"] }

/* Method in object are known as the funcitons stored as property value
      eg
         Description: function() {
          return `Different type of institutions we have in Nigeria
           are federal, state, and the likes, few names of institutions
          in Nigeria include ${this.federal}, ${this.state}, 
          ${this.polytechnic}.`;
        }, */


  // Day 2
    // Javascript Display Objects { How to display Javascript Objects }

        // We can display Javascript Objects in four ways.

        // 1. By calling the name of the object properties
        // Example1

      const brother = {
          name:"Quadri",
          favDrink: "schweppes",
          personalty() {
            return `${this.name} favourite drink is ${this.favDrink}`;
          },
        };
        document.getElementById("collector").innerHTML = brother.personalty();

        // By calling ( blaze.personalty ) we have invoked the object properties ( this is the first method of calling object properties)


        // 2. By displaying the objects in a loop
          // Example 2

       const astray = {
          Name: "Quadri",
          FavDrink: "Schweppes"
        };
          let WhoseDrinks = "";
            for ( let b in astray )
                {
                  WhoseDrinks += astray[b] + " ";
                };
        document.getElementById("collecto").innerHTML = WhoseDrinks;

         const jumanji = {
          jname: "Jumain",
          jQuote: "Favourite drink is",
          jFavDrinks: "Pepsi"
        };
        let Drinkfor = "";
        for ( let p in jumanji )
        {
          Drinkfor += jumanji[p] + " ";
        };
        document.getElementById("collect").innerHTML = Drinkfor;

       const cruise = {
          Name: "Blessing",
          Fav: "Obssession"
        };
        let FavCruise = "";
        for ( let c in cruise )
        {
          FavCruise += cruise[c] + " ";
        };
        document.getElementById("collec").innerHTML = FavCruise;

        const country = {
          Name: "Thaiand",
          Continent: "Unknown",
          BoutCountry: function() {
            return `${this.Name} continent is ${this.Continent} to blaze`;
          },
        };
        let Information = "";
        for ( let k in country.BoutCountry() )
        {
          Information += country.BoutCountry()[k];
        };
        document.getElementById("colle").innerHTML = Information; 

       const Energy = {
          he: "Elt",
          moved: "To",
          she: "Trunil"
        };
        let booster = "";
        for ( let w in Energy ) {
          booster += Energy[w] + " ";
        };
        document.getElementById("coll").innerHTML = booster;

      // 3. By using [object.values()] method
          // This method will create an array from the property value, it means all the values in the object will be list in array.

      // Example 3

     const jjumanji = {
        Name: "Jumain",
        Quote: "Favourite drink is",
        FavDrinks: "Pepsi"
      };
     const descriptionboutjemin = Object.values(jjumanji)
      document.getElementById("col").innerHTML = descriptionboutjemin;

      const blaze =  {
        Name: "Quadri",
        Quote: "Is a folk from purple republic",
        Department: "Known as Social SCience"
      }
      const DesBoutBlaze = Object.values(blaze);
      document.getElementById("co").innerHTML = DesBoutBlaze;

      // 4. Using [ JSON.stringify() ] method
        // By using this method all objects will converted to string written in JSON notation.

      // Example
     const Jumain = {
        Nname: "Jemin",
        Fav: "Pepsi",
        Price: 500,
      };
      document.getElementById("c").innerHTML = JSON.stringify(Jumain)

      const Blaze = {
        Nname: "Astray",
        Fav: "Schweppes",
        Price: 700
      };
      document.getElementById("l").innerHTML =  JSON.stringify(Blaze);

      const bblaze = {
        nname: "Astray",
        fav: "Schweppes",
        price() {
         return `The price of ${this.fav} fluctuates`;
        }
      };
      document.getElementById("jemin").innerHTML = bblaze.price();
      

      // Day 3
      // Other method we can use to display js properties apart from the meethods we have talked about is,
      // [ object.entries() method ]

      // Example3
      const ablaze = {
        aFav: "Soda",
        aDislike: "Hypo",
        aManage: "Bama"
      };
      let desBoutaBlaaze = "";
      for ( let [ui, ux] of Object.entries(ablaze) ) {
        desBoutaBlaaze += ui + ": " + ux + "<br>";
      }
      document.getElementById("jemi").innerHTML = desBoutaBlaaze;

      const state =  {
        east: "Imo",
        west: "Oyo",
        north: "Kwara"
      };
      let stateInNigeria = "";
      for ( let [dState, dName] of Object.entries(state) )  {
        stateInNigeria += dState + ": " + dName + "<br>";
      }
      document.getElementById("jem").innerHTML = stateInNigeria;

      const continent = {
        continentA: "Asia",
        continentB: "Africa"
      };
      let worldContinent = "";
      for ( let [wrld, contnt] of Object.entries(continent) )
      {
        worldContinent += wrld + ": " +  contnt + "<br>";
      }
      document.getElementById("je").innerHTML = worldContinent;

      /* To use the [object.entries()] method we must call it with [for(let[] of object.entries()) with + sign between them] */


      // NEXT TOPIC JS OBJECT CONSTRUCTOR
        /* OBJECT CONSTRUCTOR: This is a way of using function to create structure for the objects that have similar properties, which allow the reuseable of same structure each object.

        Steps
        1. Declare a function (constructor)
        2. Name the function with capital letter
        3. use [this] keyword to assign properties to the function
        4. Creating of objects using (new) keyword */

        // Example1
        
        function Person(first, last, age, eye)  {
          this.first = first;
          this.last = last;
          this.age = age;
          this.eye = eye;
        };
        const myFather = new Person("John", "Walker", 50, "green");
        const myMother = new Person("Jesse", "Walter", 40, "green");

        document.getElementById("j").innerHTML = "My father age is " + myFather.age + ". My Mother age is " + myMother.age + ".";

        // Example 2
        function NigerianSchool(SchooolName, SchoolLocation, _SchoolPopulation) {
          this.SchooolName = SchooolName;
          this.SchoolLocation = SchoolLocation;
          this._SchoolPopulation = _SchoolPopulation;

          this.informationBoutNigerianSchool = function() {
            return `The population of students in ${this.SchooolName} which is located at ${this.SchoolLocation} is ${this._SchoolPopulation} according to descriptive statistics`
          }
        }
        const NigerianSchool1 = new NigerianSchool("Unilorin", "Kwara State", 75000);
        const NigerianSchool2 = new NigerianSchool("Unibadan", "Oyo State", 56000);

        document.getElementById("institution").innerHTML = (NigerianSchool1.informationBoutNigerianSchool());
        document.getElementById("institutio").innerHTML = (NigerianSchool2.informationBoutNigerianSchool());

        // Example3
        class Keynes {
          constructor(name, age, occupation) {
            this.name = name;
            this.age = age;
            this.occupation = occupation;
            this.introduce = function() {
            return `Hi, my name is ${this.name}. I am ${this.age} years old and work as a ${this.occupation}.`;
          }
        }
      }
        const Keynes1 = new Keynes("Alice", 25, "Engineer");
        document.getElementById("institute").innerHTML = (Keynes1.introduce()); 
        // Output: Hi, my name is Alice. I am 25 years old and work as an Engineer.

        // A value given to a property will be a default value for all objects created by the constructor

        // You can NOT add a new property to an object constructor

        // To add a new property, you must add it to the constructor function prototype

        // Example
        class RelationshipStatus {
          constructor(typpo, when, who, why) {
          this.typpo = typpo;
          this.when = when;
          this.who = who;
          this.why = why;
        }
      }
        const RelationshipStatus1 = new RelationshipStatus("Married", "Decade", "Jessica", "Dunno");
        const RelationshipStatus2 = new RelationshipStatus("Single", "Century", "None", "NoReason");
        
        // Add a new Property
        RelationshipStatus.prototype.tangibleReason = "Peace of mind";
        
        // Display new Property
        document.getElementById("institut").innerHTML =
        "The reason i am single till date is because of " + RelationshipStatus.tangibleReason;

        /* A constructor function can also have methods: By creating a function as a value. Go to example 3 to see more */

       /*  JavaScript has built-in constructors for all native objects:
        new Object()   // A new Object object
        new Array()    // A new Array object
        new Map()      // A new Map object
        new Set()      // A new Set object
        new Date()     // A new Date object
        new RegExp()   // A new RegExp object
        new Function() // A new Function object

        Use object literals {} instead of new Object().

        Use array literals [] instead of new Array().

        Use pattern literals /()/ instead of new RegExp().

        Use function expressions () {} instead of new Function().

        "";           // primitive string
        0;            // primitive number
        false;        // primitive boolean

        {};           // object object
        [];           // array object
        /()/          // regexp object
        function(){}; // function */

        function changeText() {
          document.getElementById("demo").innerHTML = "Button Clicked!";
        }
        
        // Day 4
        // HTML EVENTS
        /* Html Events are the things the user or the browser does, while js will execute the event anytime it detect an event. for instance [clicking the button, hovering over a button or text, etc.] */
        
        /* Here are some examples of HTML events:

        An HTML web page has finished loading
        An HTML input field was changed
        An HTML button was clicked
        Often, when events happen, you may want to do something.

        JavaScript lets you execute code when events are detected. */

        /*    EVENT HANDLER IS THE CODE OR FUNCTION THAT IS EXECUTED WHEN AN EVENT IS DETECTED

        Here is a list of some common HTML events: Research more on events and treat more examples

        Event	Description
        onchange = An HTML element has been changed
        onclick	= The user clicks an HTML element
        onmouseover	= The user moves the mouse over an HTML element
        onmouseout = The user moves the mouse away from an HTML element
        onkeydown =	The user pushes a keyboard key
        onload = The browser has finished loading the page 

        */

        // Example 1 [Onclick]

        function changeSize(button) {
          button.innerHTML = "You clicked!!"
        };

        function nickName(button) {
          button.innerHTML = "Blaze!!"
          button.style.padding = "10px"
        };

        function cueBlazzer(button) {
          button.innerHTML = "Blazzer button was clicked"
        };

        function deShine() {
          document.getElementById("blem").innerHTML = "Cannot Span";
        };


        // Day 5 [ continuation ]
        // STRING

        /*
        A JavaScript string is zero or more characters written inside quotes.

        You can use single or double quotes:

            let carName1 = "Volvo XC60";
            let carName2 = 'Volvo XC60';
       
        You can use quotes inside a string, as long as they don't match the quotes surrounding the string:
        
        */

        // String Length

        // To find the length of a string, use the built-in length property:

        // Example:

        let text = "I am on my way";
        document.getElementById("de").innerHTML = text.length;

        // An escape character is a special character used in programming and markup languages to indicate that the following character(s) should be treated differently than they normally would. In JavaScript and many other languages, the backslash (\) is the escape character.

        // Common Escape Sequences in JavaScript
        // Escape Sequence	Description	Example Output
        // \'	Single quote	'
        // \"	Double quote	"
        // \\	Backslash	\
        // \n	Newline	(line break)
        // \r	Carriage return	(used with \n)
        // \t	Tab	(horizontal tab)
        // \b	Backspace	(non-visible)
        // \f	Form feed	(non-visible)
        // \uXXXX	Unicode character (4 hex digits)	\u2764 → ❤️
        // \xXX	Hexadecimal character (2 hex digits)	\x41 → A

        //  Some of the escape characters above were originally designed to control typewriters, teletypes, and fax machines. They do not make any sense in HTML.

// Example
const singleQuote = 'It\'s a sunny day!';
document.getElementById("escape").innerHTML = singleQuote;

const doubleQuote = "He said, \"Hello!\"";
document.getElementById("escap").innerHTML = doubleQuote;

// For readability, programmers often like to avoid long code lines. A safe way to break up a statement is after an operator, A safe way to break up a string is by using string addition.

// Example

const breakingString  = "Hello " +
"Blaze!";
document.getElementById("esca").innerHTML = breakingString;

//  Template Strings: Templates were introduced with ES6 (JavaScript 2016). Templates are strings enclosed in backticks (`This is a template string`). Templates allow single and double quotes inside a string, Templates are not supported in Internet Explorer

//  Example
let backTickExample =
`The quick
brown fox
jumps over
the lazy dog`;
document.getElementById("esc").innerHTML = backTickExample;

//  In JavaScript, primitive values are basic, immutable data types that are not objects. They include:

    // String: "Hello"
    // Number: 42
    // Boolean: true or false
    // Null: null (intentional absence of value)
    // Undefined: A variable declared but not assigned a value
    // BigInt: Large integers, e.g., 123n
    // Symbol: Unique, immutable identifiers, e.g., Symbol('id')

    // Key traits:
    // Immutable: Cannot be changed after creation.
    // Stored by value: Copies are created when assigned or passed.

// The relationship between literals and primitives in JavaScript is that literals are the syntax used to create primitive values.

    // Explanation:
    // Primitive: A type of value in JavaScript (e.g., string, number, boolean, etc.).
    // Literal: The fixed notation used to represent a primitive value directly in code.

    // Examples:
    // Primitive Type	Literal Example
    // String	"Hello" or 'Hello'
    // Number	42 or 3.14
    // Boolean	true, false
    // Null	null
    // Undefined	(No literal; default for uninitialized variables)
    // BigInt	123n
    // Symbol	Symbol('key')

    // Key Relationship:
    // Literal is how you write or define a primitive value in code.
    // For instance, the string literal "Hello" represents the primitive string value.


  //  Normally, JavaScript strings are primitive values, created from literals:

    let j = "John";

// But strings can also be defined as objects with the keyword new:

    let y = new String("John");

// Do not create String objects: The new keyword complicates the code and slows down execution speed. String objects can produce unexpected results.

//  Example
let n = "John";
let h = new String("John");

//  When using the == operator, x and y are equal:
let o = "John";
let r = new String("John");

// When using the === operator, x and y are not equal:

let m = "John";
let k = new String("John");

// Comparing two JavaScript objects always returns false.
let x = new String("John");
let a = new String("John");

// JAVASCRIPT STRING METHOD
  // Basic String Methods: Javascript strings are primitive and immutable: 
  // All string methods produce a new string without altering the original string.

  // String length
  // String charAt()
  // String charCodeAt()
  // String at()
  // String [ ]
  // String slice()
  // String substring()
  // String substr()
  // String toUpperCase()
  // String toLowerCase()
  // String concat()
  // String trim()
  // String trimStart()
  // String trimEnd()
  // String padStart()
  // String padEnd()
  // String repeat()
  // String replace()
  // String replaceAll()
  // String split()


// JavaScript String Length: The length property returns the length of a string:

// Example
let toTheworld = "Astray to the ocean and sea";
document.getElementById("esci").innerHTML = toTheworld.length;



// Extracting String Characters
// There are 4 methods for extracting string characters:

// The at(position) Method
// The charAt(position) Method
// The charCodeAt(position) Method
// Using property access [] like in arrays

// str[index]	Access a character by index	"Hello"[1] → e
// str.charAt()	Returns character at a specific index	"Hello".charAt(1) → e
// str.substring()	Extracts part of a string (start to end-1)	"Hello".substring(1, 4) → ell
// str.slice()	Extracts part of a string (supports negatives)	"Hello".slice(-2) → lo
// str.split()	Converts string to an array of characters	"Hello".split("") → ['H', 'e', 'l', 'l', 'o']


// JavaScript String charAt(): The charAt() method returns the character at a specified index (position) in a string:

// Example
let charExample1 = "HELLO WORLD";
let char = charExample1.charAt(0);

document.getElementById("stringMethod").innerHTML = char;


// The charCodeAt() method returns the unicode of the character at a given position in a string: The method returns a UTF-16 code (an integer between 0 and 65535).

// Example
let charCodeAtExample = "HELLO WORLD";
let charCd = charCodeAtExample.charCodeAt(0);

document.getElementById("stringMetho").innerHTML = charCd;


// JavaScript String at() method returns an positioned element from a string

// Example
const name = "W3Schools";
let letter = name.at(2);

document.getElementById("stringMeth").innerHTML = letter;


// Note The at() method is a new addition to JavaScript. It allows the use of negative indexes while charAt() do not. Now you can use myString.at(-2)

// Example
const nameAt = "W3Schools";
let letterAt = nameAt.at(-2);

document.getElementById("stringMet").innerHTML = letterAt;


// The bracked notation [] returns an indexed element from a string

// Example
const nameEt = "W3Schools";
let letterEt = nameEt[2];

document.getElementById("stringMe").innerHTML = letterEt;

// If no character is found, [ ] returns undefined, while charAt() returns an empty string.

// let text = "HELLO WORLD";
// text[0] = "A"; : Gives no error, but does not work


// To extract a part of a string means to retrieve a specific portion or subset of characters from a larger string. This is commonly done to isolate or manipulate data, such as getting a substring, a single character, or a specific segment of text.



// Extracting String Parts
    // There are 3 methods for extracting a part of a string:

    // slice(start, end)
    // substring(start, end)
    // substr(start, length)


    // JavaScript String slice(): slice() extracts a part of a string and returns the extracted part in a new string, The method takes 2 parameters: start position, and end position (end not included).

    // Example 1 : Slice out a portion of a string from position 7 to position 13.

    let sliceXample = "Blaze, Canada, Astray";
    let part = sliceXample.slice(7,13);
    document.getElementById("stringM").innerHTML = part; 

    // Example 2: If you omit the second parameter, the method will slice out the rest of the string:

    let sliceXample2 = "Blaze, Canada, Astray";
    let part2 = sliceXample2.slice(7);
    document.getElementById("strin").innerHTML = part2;

    // Example 3: If a parameter is negative, the position is counted from the end of the string.

    let sliceXample3 = "Blaze, Canada, Astray";
    let part3 = sliceXample3.slice(-14);
    document.getElementById("stri").innerHTML = part3;

    // Example 4: This example slices out a portion of a string from position -14 to position -8:

    let sliceXample4 = "Blaze, Canada, Astray";
    let part4 = sliceXample4.slice(-14, -8);
    document.getElementById("str").innerHTML = part4;


    // JavaScript String SUBSTRING(): substring() is similar to slice().

    // The difference is that start and end values less than 0 are treated as 0 in substring().

    // Example1
    let sliceXample5 = "Blaze, Canada, Astray";
    //  document.getElementById("st").innerHTML = sliceXample5[7];
    document.getElementById("st").innerHTML = sliceXample5.substring(7, 13);


    // If you omit the second parameter, substring() will slice out the rest of the string.

    // Example2
    let sliceXample6 = "Blaze, Canada, Antenatal";
    // document.getElementById("st").innerHTML = sliceXample5[5];
    document.getElementById("s").innerHTML = sliceXample6.substring(7);


    // JavaScript String SUBSTR(): substr() is similar to slice().

    // The difference is that the second parameter specifies the length of the extracted part.

    // Example3
    let sliceXample7 = "Blaze, Canada, Astray";
    document.getElementById("subString").innerHTML = sliceXample7.substr(0,5);

    // If you omit the second parameter, substr() will also slice out the rest of the string.
    let sliceXample8 = "Blaze, Canada, Astray";
    document.getElementById("subStrin").innerHTML = sliceXample8.substr(5);

    // If the first parameter is negative, the position counts from the end of the string.
    let sliceXample9 = "Blaze, Canada, Astray";
    document.getElementById("subStri").innerHTML = sliceXample9.substr(-7);



// Converting to Upper and Lower Case
    // A string is converted to upper case with toUpperCase():
    // A string is converted to lower case with toLowerCase():

// Example10
  let sliceXample10 = "Blaze, Canada, Astray";
  document.getElementById("subStr").innerHTML = sliceXample10.toUpperCase();
  let sliceXample11 = "BLAZE";
  document.getElementById("subSt").innerHTML = sliceXample11.toLowerCase();


// JavaScript String concat(): concat() joins two or more strings;
    // let sliceXample12 = "Blaze and";
    // let sliceXample13 = "Astray";
    // let sliceXample14 = sliceXample12.concat(" ", sliceXample13);``
    // document.getElementById("subS").innerHTML = sliceXample14;

    let sliceXample12 = "Blaze and";
    let sliceXample13 = "Blake";

    document.getElementById("subS").innerHTML = sliceXample12.concat(" ", sliceXample13);

// The concat() method can be used instead of the plus operator. These two lines do the same:

    // Example
    // text = "Hello" + " " + "World!";
    // text = "Hello".concat(" ", "World!")

// Note: All string methods return a new string. They don't modify the original string. Formally said: Strings are immutable: Strings cannot be changed, only replaced.


// JavaScript String trim(): The trim() method removes whitespace from both sides of a string;

  // Example
  let sliceXample14 = "     Blaze et Astray!     ";
  let sliceXample15 = sliceXample14.trim();

  document.getElementById("skyScrapper").innerHTML =
  "Length sliceXample14 = " + sliceXample14.length + ", Length sliceXample15 = " + sliceXample15.length;

  // Example
  let sliceXample16 = "     Blaze et Astray!     ";
  document.getElementById("skyScrappe").innerHTML = sliceXample16.trim()



  // JavaScript String trimStart(): The trimStart() method works like trim(), but removes whitespace only from the start of a string.
      // Example
      let sliceXample17 = "     Blaze et Astray!     ";
      document.getElementById("skyScrapp").innerHTML = sliceXample17.trimStart();

// JavaScript String trimEnd() The trimEnd() method works like trim(), but removes whitespace only from the end of a string.
      let sliceXample18 = "     Blaze et Astray!     ";
      document.getElementById("skyScrap").innerHTML = sliceXample18.trimEnd();



// JavaScript String Padding: ECMAScript 2017 added two new string methods to JavaScript: padStart() and padEnd() to support padding at the beginning and at the end of a string.

    // JavaScript String padStart(): The padStart() method pads a string from the start. It pads a string with another string (multiple times) until it reaches a given length.

// Examples
  // Pad a string with "0" until it reaches the length 4:
    
    // let sliceXample19 = "5";
    // let sliceXample20 = sliceXample19.padStart(4,"0");
    // document.getElementById("skyScra").innerHTML = sliceXample20;

    let sliceXample19 = "5";
    let sliceXample20 = sliceXample19.padStart(6,"0");
    document.getElementById("skyScra").innerHTML = sliceXample20;

// Note: The padStart() method is a string method. To pad a number, convert the number to a string first.

// JavaScript String padEnd(): The padEnd() method pads a string from the end. It pads a string with another string (multiple times) until it reaches a given length.

// Note: The padEnd() method is a string method. To pad a number, convert the number to a string first.



// JavaScript String repeat()
    // The repeat() method returns a string with a number of copies of a string.

    // The repeat() method returns a new string.

    // The repeat() method does not change the original string.

// Examples
let sliceXample21 = "Modulo ";
    document.getElementById("skyScr").innerHTML = sliceXample21.repeat(5);



// Replacing String Content: The replace() method replaces a specified value with another value in a string;

  // The replace() method does not change the string it is called on.
  // The replace() method returns a new string.

function blazzer() {
  const element3 = document.getElementById("skySc");
  element3.innerHTML = element3.innerHTML.replace("Blaze", "Astray");
};

// The replace() method replaces only the first match, If you want to replace all matches, use a regular expression with the /g flag set.

  // Example
  function blazzing() {
    const element4 = document.getElementById("skyS");
    element4.innerHTML = element4.innerHTML.replace(/Blaze/g, "Astray");
  };

  // function myFunction() {
  //   let text = document.getElementById("demo").innerHTML; 
  //   document.getElementById("demo").innerHTML =
  //   text.replace("MICROSOFT","W3Schools");

// The replace() method is case sensitive. MICROSOFT (with upper-case) will not be replaced.

function blazzin() {
  const element5 = document.getElementById("sk");
  element5.innerHTML = element5.innerHTML.replace(/Blaze/i, "Astray");
};
  

function blazzi() {
  const element6 = document.getElementById("skchoolBoy");
  element6.innerHTML = element6.innerHTML.replace(/BLAZE/i, "Astray");
};



// JavaScript String ReplaceAll()
let replaceXample = "Blaze, I am yet to understand why Blaze is trying to replace blaze because blaze does not deserve that";
replaceXample = replaceXample.replaceAll(/Blaze/g,"Astray");
replaceXample = replaceXample.replaceAll(/blaze/g,"astray");
document.getElementById("skchoolBo").innerHTML = replaceXample;



// Converting a String to an Array, If you want to work with a string as an array, you can convert it to an array.

      // A string can be converted to an array with the split() method:

      let replaceXample1 = "I am, yet to, understand why";
      const rX3 = replaceXample1.split(", ");
      document.getElementById("skchoolB").innerHTML = rX3[1];

      const replaceXample3 = "JavaScript is awesome";
      const word3 = replaceXample3.split("");
      document.getElementById("skchool").innerHTML = word3;

      let replaceXample4 = "I am yet to understand why";
      const rX4 = replaceXample4.split("");
      rX5 = rX4.reverse().join(" ");
      if ( rX4.value === rX5.value) {
        alert("They are familiar")
      };


      // The indexOf() method returns the position of the first occurrence of a string in a string. or it returns -1 if the string is not found:

      // Example
      let textForIndexOf = "Please locate where 'locate' occurs!";
      const theLocationOfTheFIrstStringIs7 =  textForIndexOf.indexOf("locate");
      document.getElementById("skcho").innerHTML = theLocationOfTheFIrstStringIs7;

      let textIndex2 = "Please locate where 'locate' occurs!";
      const index2 = textIndex2.indexOf("locate", 8); // Start searching after index 7
      console.log(index2); 
      // Output: 21 (position of the second "locate")

      // The indexOf() method is case-sensitive:



      // The lastIndexOf() method in JavaScript is used to find the last occurrence of a specified value within a string. It searches the string from the end (right to left) and returns the index position of the last match. If the value is not found, it returns -1. 
      
      // The position in the string to start searching backward. Default is the length of the string (searches the entire string).

      let textIndex3 = "Please locate where 'locate' occurs!";
      const index3 = textIndex3.lastIndexOf("locate");
      console.log(index3); 
      // Output: 21 (position of the last "locate")

      // The lastIndexOf() method is case-sensitive;

     /* Key Differences Between indexOf() and lastIndexOf():
      Feature	indexOf()	lastIndexOf()

      Search Direction	Left to right (start to end)	Right to left (end to start)

      First or Last Match	Finds the first occurrence	Finds the last occurrence

      Start Position	Default is 0	Default is the string length */

      // Both methods accept a second parameter as the starting position for the search:

    let textIndex4 = "Please locate where 'locate' occurs!";
    const index4 = textIndex4.indexOf("locate", 15);



    // The search() method in JavaScript is used to find the position of the first match of a specified value within a string. Unlike indexOf() or lastIndexOf(), the search() method accepts a regular expression as its argument, making it more powerful for pattern-based searches. It Rerurns -1 if no match is found.

    let textSearch = "JavaScript is amazing!";
    const positionS = textSearch.search("amazing");
    console.log(positionS); 
    // Output: 13 (index where "amazing" starts)

    // Using a Regular Expression:
    let textSearch2 = "JavaScript is amazing!";
    const positionS2 = textSearch2.search(/amazing/);
    console.log(positionS2); 
    // Output: 13

    // The search() method is case-sensitive:


    // Using Regular Expressions with Flags: You can use regular expression flags like i(case-insensitive):
    let textFlag = "JavaScript is amazing!";
    const positionF = textFlag.search(/Amazing/i);
    console.log(positionF); 
    // Output: 13


    // Key Differences Between search() and indexOf():
    // Feature	search()	indexOf()
    // Argument Type	Regular expression or string	String only
    // Case Sensitivity	Depends on regex flags	Always case-sensitive
    // Advanced Patterns	Supports complex regex patterns	No regex support


    // 1. Check for a Pattern: You can use search() to quickly check if a string contains a specific pattern:

    let email = "user@example.com";
    if (email.search(/@/) !== -1) {
        console.log("Valid email format.");
    }

    // Find the First Numeric Character: Using a regex pattern to locate the first number in a string:


    let textSpCharacter = "The price is $123.45";
    const positionSp = textSpCharacter.search(/\d/); // Find the first digit
    console.log(positionSp); 
    // Output: 13

    // Case-Insensitive Search: erform a search without worrying about case:

    let textInsCase = "JavaScript is Fun!";
    const positionIns = textInsCase.search(/fun/i); 
    // Case-insensitive match
    console.log(positionIns); 
    // Output: 16

    // The search() method does not return the matched text itself; it only returns the index of the first match.

    // If you need to extract or replace the matched text, consider using methods like match() or replace().


    // The two methods, indexOf() and search(), are equal? They accept the same arguments (parameters), and return the same value?

    // The two methods are NOT equal. These are the differences:

    // The search() method cannot take a second start position argument.

    // The indexOf() method cannot take powerful search values (regular expressions).



    // The match() method in JavaScript is used to retrieve the matches of a string against a specified regular expression. It returns an array of matches or null if no match is found.

    // Returns:

    // If the regular expression has the [g flag]: Returns an array containing all matches.
    // If the regular expression does not have the g flag: Returns an array containing the first match and additional details.
    // If no match is found: Returns null.

  let textMatch = "The rain in Spain stays mainly in the plain.";
   const matches = textMatch.match(/ain/g);
    console.log(matches); 
    // Output: ["ain", "ain", "ain"]

  // First Match Without g Flag:
  let textMatch2 = "The rain in Spain stays mainly in the plain.";
  const match2 = textMatch2.match(/ain/);
    document.getElementById("skcho").innerHTML = match2;
  // Output: ["ain", index: 5, input: "The rain in Spain stays mainly in the plain.", groups: undefined]

// Case-Insensitive Match:
    let textMatch3 = "Hello, hello, HELLO!";
    const matches3 = textMatch3.match(/hello/gi);
    console.log(matches3); 
    // Output: ["Hello", "hello", "HELLO"]

// No Match Found:
    let textMatch4 = "JavaScript is amazing!";
    const matches4 = textMatch4.match(/python/);
    console.log(matches4); 
    // Output: null

// How match() Works with Regular Expression Flags: Global Search (g flag): Finds all matches and returns them in an array.

let textMatch5 = "Test test TEST.";
const matches5 = textMatch5.match(/test/gi);
console.log(matches5); 
// Output: ["Test", "test", "TEST"]


//  Case-Insensitive Search (i flag): Matches regardless of case.

let textMatch11 = "Hello, hello, HELLO!";
const matches11 = textMatch11.match(/hello/i);
console.log(matches11); 
// Output: ["Hello"]


// Search with Groups: You can use capturing groups to extract parts of the match.

let textMatch9 = "The price is $123.45.";
const match9 = textMatch9.match(/\$(\d+\.\d+)/);
console.log(match9); 
// Output: ["$123.45", "123.45"]

// Note: If a regular expression does not include the g modifier (global search), match() will return only the first match in the string.

// iterator: repeat.

// The matchAll() method in JavaScript is used to find all matches of a string against a regular expression, including detailed information about each match. It returns an iterator of match objects, which can be used to extract matches along with their groups and positions.

// Returns:
// An iterator of match objects. Each match object includes:
// The full matched string.
// Capturing groups (if any).
// The starting index of the match.
// The input string.


// Key Features:

// Unlike match(), which returns an array of matches, matchAll() provides an iterator with detailed match information.

// It is especially useful when working with capturing groups or when you need to extract additional details about each match.



// JavaScript String matchAll()
// The matchAll() method returns an iterator[repeating] containing the results of matching a string against a string (or a regular expression).

let textForAll = "I love cats. Cats are very easy to love. Cats are very popular."
const iterator = textForAll.matchAll("Cats");
document.getElementById("skcho").innerHTML = Array.from(iterator);

// Example2
let textForAllm = "The rain in Spain stays mainly in the plain.";
let regexForAllm = /ain/g; // Global search for "ain"
let matchesForm = textForAllm.matchAll(regexForAllm);

let resultText = ""; // To store the matched results

for (let match of matchesForm) {
  resultText += match[0] + " "; // match[0] is the matched string
}

document.getElementById("skch").innerHTML = resultText;


// If the parameter is a regular expression, the global flag (g) must be set, otherwise a TypeError is thrown.

// Example
let textMatchAll = "I love cats. Cats are very easy to love. Cats are very popular."
const iterator2 = textMatchAll.matchAll(/Cats/g);

document.getElementById("skc").innerHTML = Array.from(iterator2);

// If you want to search case insensitive, the insensitive flag (i) must be set;

// Example
let matchl = "I love cats. Cats are very easy to love. Cats are very popular."
const iterator3 = matchl.matchAll(/Cats/gi);
document.getElementById("ska").innerHTML = Array.from(iterator3);


// JavaScript includes(): The includes() method returns true if a string contains a specified value. Otherwise it returns false. Other word The includes() method in JavaScript is used to check if a string contains a specified substring or character. It returns a boolean value: true if the substring is found, and false if it is not.

const textInclude = "Hello world, welcome to the universe.";
document.getElementById("tyrantesperri").innerHTML = textInclude.includes("world");


// Check if a string includes "world". Start at position 12:
const textInclude3 = "Hello world, welcome to the universe.";
document.getElementById("tyrantesperr").innerHTML = textInclude3.includes("world", 12);

// includes() is case sensitive.

let textInclude4 = "JavaScript is awesome!";
const result44 = textInclude4.toLowerCase().includes("javascript");
console.log(result44); 
// Output: true


// Example
let textIncludeLoop = "JavaScript is powerful!";
const keywordsInc = ["JavaScript", "Python", "Ruby"];

keywordsInc.forEach(keyword => {
  if (textIncludeLoop.includes(keyword)) {
    console.log(`${keyword} is found in the text.`);
  } else {
    console.log(`${keyword} is not found in the text.`);
  }
});
// Output:
// JavaScript is found in the text.
// Python is not found in the text.
// Ruby is not found in the text.



// JavaScript String startsWith(): The startsWith() method returns true if a string begins with a specified value. Otherwise it returns false, case-sensitive, Uses the position Parameter 

// Example
let textWith = "Hello world, welcome to the universe.";
ifWith = textWith.startsWith("Hello");
console.log(ifWith);

// Example
let files = ["image1.png", "image2.jpg", "photo.png", "document.pdf"];const pngFiles = files.filter(file => file.startsWith("image"));
console.log(pngFiles); // Output: ["image1.png", "image2.jpg"]


// JavaScript String endsWith()
// The endsWith() method returns true if a string ends with a specified value, Otherwise it returns false, case-sensitive, Uses the position Parameter, If the string does not end with the specified substring, it returns false:

let textEnd = "Hello, world!";
const resultOfEnd = textEnd.endsWith("world!");
console.log(resultOfEnd); 
// Output: true

// Filter Strings Based on Ending:
let files2 = ["report.docx", "image.png", "notes.txt", "photo.png"];
const pngFiles2 = files2.filter(file => file.endsWith(".png"));
console.log(pngFiles2); 
// Output: ["image.png", "photo.png"]



// DAY 6
// String Templates, Template Strings, Template Literals
// Back-Tics Syntax [ Template Strings use back-ticks (``) rather than the quotes ("") to define a string ]

// Example
const textTemplate = `Hello World!`;

// Template Strings allow both single and double quotes inside a string
const textTemplate2 = `He's often called "Johnny"`;

// Template Strings allow multiline strings
const textTemplate3 =
`The quick
brown fox
jumps over
the lazy dog`;

// Interpolation: Template String provide an easy way to interpolate variables and expressions into strings. The method is called string interpolation.

// The syntax is: ${...}

// Variable Substitutions: Template Strings allow variables in strings:

// Example
let firstName = "Cole";
let lastName = "Doe";

const textVarSub = `Welcome ${firstName}, ${lastName}!`;
console.log(textVarSub);


// Expression Substitution: Template Strings allow expressions in strings:
let price = 10;
let VAT = 0.25;

const total = `Total: ${(price * (1 + VAT)).toFixed(2)}`;
console.log(total)

// .toFixed(2): The toFixed() method formats a number to a fixed number of decimal places. Specifies that the number should be rounded to 2 decimal places.

// Example: 120.456.toFixed(2) results in "120.46" (as a string).


// Automatic replacing of expressions with real values is called string interpolation.
let header = "Replacing Html";
let tags = ["template strings", "javascript", "es6"];

let html = `<h2>${header}</h2><ul>`;

for (const x of tags) {
  html += `<li>${x}</li>`;
}

html += `</ul>`;
document.getElementById("tyrantesper").innerHTML = html;


// The DOM (Document Object Model) is a programming interface for web documents. It represents the structure of a web page so that programming languages like JavaScript can interact with it. The DOM allows you to manipulate the content, structure, and styles of a webpage dynamically.

// DOM Nodes Everything in the DOM is a node. Some common types of nodes are: Element Node: Represents an HTML tag (e.g., <h1>, <p>)Text Node: Represents the text inside an element. Attribute Node: Represents attributes of an element (e.g., id, class).

// Why is the DOM Useful? Dynamic Content: Add, remove, or update HTML elements dynamically.Event Handling: Respond to user interactions like clicks, hovers, or keypresses. Styling: Modify CSS styles of elements on the fly.

// How JavaScript Interacts with the DOM, JavaScript provides several methods to interact with the DOM, such as: Selecting Elements
// document.getElementById("id"): Selects an element by its ID.
// document.querySelector("selector"): Selects the first element that matches a CSS selector.
// document.querySelectorAll("selector"): Selects all elements that match a CSS selector.

