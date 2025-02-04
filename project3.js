const quotes =  [
  "Success is not final, failure is not fatal: It is the courage to continue that counts.",
  "In the middle of every difficulty lies opportunity",  
   "Do what you can, with what you have, where you are.",
  "Happiness is not something ready-made. It comes from your own actions.",
  "Don’t watch the clock; do what it does. Keep going.",  
  "The best way to predict the future is to invent it.",
  "Believe you can and you're halfway there.",
  "It always seems impossible until it’s done.",
  "The only limit to our realization of tomorrow will be our doubts of today.",
  "Your time is limited, so don’t waste it living someone else’s life.",  
  "Dream big and dare to fail.",
  "Success usually comes to those who are too busy to be looking for it.",  
  "What lies behind us and what lies before us are tiny matters compared to what lies within us.",
  "The only way to do great work is to love what you do.", 
  "Courage is resistance to fear, mastery of fear—not absence of fear."  
  ]

  const useIndexes = new Set()
  const quoteElement = document.getElementById("qoute")

  function generateQuote() {
    if (useIndexes.size == quotes.length) {
      useIndexes.clear()
    }

    while (true) {
      const randomIdx = Math.floor(Math.random() * quotes.length);

      if (useIndexes.has(randomIdx)) continue

      const quote = quotes[randomIdx];
      quoteElement.innerHTML = quote;
      useIndexes.add(randomIdx)
      break

    }
    }

    // The line const useIndexes = new Set() creates a Set in JavaScript. A Set is a special type of collection that allows you to store unique values, meaning no duplicates are allowed.

    // useIndexes.size: size is a property of a Set that tells you how many unique items it contains.
    // For example:
    // const useIndexes = new Set([1, 2, 3]); 
    // console.log(useIndexes.size); // Output: 3

    // Resetting After Completion: Once all indexes are used, you might want to reset the Set or perform another action, like reshuffling or restarting a process.

    // Example:

    // if (useIndexes.size === quotes.length) { useIndexes.clear(); // Reset, rerun, restart the Set
    //   console.log("Resetting for a new cycle!");


    // while (true): This creates an infinite loop, meaning the code inside will keep running until a break statement is encountered or the program is terminated.

    // useIndexes.has(randomIdx): This checks whether the randomIdx (a randomly generated index) already exists in the useIndexes set.

// If it does, it means the index has already been "used" or "processed."

// Example:

// const useIndexes = new Set([1, 2, 3]);
// console.log(useIndexes.has(2)); // Output: true
// console.log(useIndexes.has(4)); // Output: false
// continue:

// The continue statement skips the rest of the current loop iteration and moves to the next one.

// quotes[randomIdx]: This accesses the element in the quotes array at the position randomIdx.

// Arrays in JavaScript are zero-indexed, so quotes[0] gives the first element, quotes[1] gives the second, and so on.



  // const quotes = ["Be yourself!", "Dream big!", "Never give up!"];
  // const button = document.getElementById("newQuoteButton");
  // const display = document.getElementById("quoteDisplay");

  // button.addEventListener("click", function () {
  //   const randomIdx = Math.floor(Math.random() * quotes.length);
  //   const quote = quotes[randomIdx];
  //   display.textContent = quote; // Update the paragraph with the quote
  // });


//   const quotes = ["Quote 1", "Quote 2", "Quote 3"];
// const useIndexes = new Set();
// const quoteElement = document.getElementById("quoteDisplay");

// while (true) {
//   const randomIdx = Math.floor(Math.random() * quotes.length);

//   // Skip if the index has already been used
//   if (useIndexes.has(randomIdx)) continue;

//   // Update the HTML element with the selected quote
//   const quote = quotes[randomIdx];
//   quoteElement.innerHTML = quote;

//   // Mark the index as used
//   useIndexes.add(randomIdx);

//   // Exit the loop
//   break;
// }

// // Reset if all quotes have been shown
// if (useIndexes.size === quotes.length) {
//   console.log("All quotes shown. Resetting...");
//   useIndexes.clear(); // Clear the set for a new round
// }



/* <div id="quoteDisplay">Click the button for a quote!</div>
<button id="newQuoteButton">New Quote</button>

<script>
  const quotes = ["Be happy!", "Keep going!", "You are awesome!"];
  const useIndexes = new Set();
  const quoteElement = document.getElementById("quoteDisplay");
  const button = document.getElementById("newQuoteButton");

  button.addEventListener("click", function () {
    while (true) {
      const randomIdx = Math.floor(Math.random() * quotes.length);

      if (useIndexes.has(randomIdx)) continue;

      const quote = quotes[randomIdx];
      quoteElement.innerHTML = quote;
      useIndexes.add(randomIdx);
      break;
    }

    if (useIndexes.size === quotes.length) {
      console.log("All quotes shown. Resetting...");
      useIndexes.clear();
    }
  });
</script>
 */
