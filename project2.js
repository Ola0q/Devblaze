const input = document.getElementById("myChecker")

function reverseString(str) {
  return str.split("").reverse().join("")
}

function check() {
  const value = input.value;
  alert(value);
  const reverse = reverseString(value);
  
  if (value === reverse) {
    alert("THE TEXT INPUT IS A PALINDROME")
  } else {
    alert("DELETE THIS!!!!!")
  }
  input.value = ""
}