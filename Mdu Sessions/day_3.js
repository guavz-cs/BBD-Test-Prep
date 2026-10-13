// edge cases
// introduce validation by throwing errors -- 
// Missing values -- 
// Non - numeric values -- 
// decimal values -- 
// Division by Zero -- 
// invalid operator with spaces -- 
// case sensitivity for the operator --

function calculate(value1, value2, operator){
    if(value1 === undefined || value2 === undefined || operator === undefined){
        throw new Error("Missing required field.");
    }

    if(typeof value1 !== "number" || typeof value2 !== "number") {
        throw new TypeError("Values must be numbers.")
    }

    operator = operator.trim().toLowerCase();

    switch(operator) {
        case "add":
            return value1 + value2;
            break;
        case "subtract":
            return value1 - value2;
            break;
        case "multiply":
            return value1 * value2;
            break;
        case "divide":
            if(value2 === 0){
                throw new Error("Cannot divide by a zero.")
            }
            return value1 / value2;
            break;
    }
}

console.log(calculate(50, 20, "add"));
