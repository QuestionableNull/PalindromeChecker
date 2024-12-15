function check() {
    // Get the value from the input field
    var input = document.getElementById("palindrome").value;
    
    // Clean the input and convert to lowercase
    var cleanInput = input.toLowerCase().replace(/[^a-zA-Z0-9]/g, '');

    // Reverse the cleaned string
    var reverse = cleanInput.split('').reverse().join('');

    // Check if the reversed string matches the original cleaned input
    if (reverse === cleanInput) {
        alert("True: It's a palindrome!");
    } else {
        alert("False: Not a palindrome.");
    }
}