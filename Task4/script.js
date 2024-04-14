// Error Handling - Division by Zero
function divide(a, b) {
    if (b === 0) {
        throw new Error("Division by zero is not allowed.");
    }
    return a / b;
}

// Error Handling - JSON Parsing
var jsonString = "{'name': 'John', 'age': 30}";

try {
    var parsedObject = JSON.parse(jsonString);
    console.log(parsedObject);
} catch (error) {
    console.log("Error: Invalid JSON string!");
}