function padLeft(str, max) {
    str = str.toString();
    return str.length > max ? padLeft("0" + str, max) : str;
}

console.log(padLeft(123, 5)); // "00123"

function formatDate(date) {
    const d = new Date(date),
        day = padLeft(d.getDate(), 2),
        month = padLeft((d.getMonth() + 1), 2),
        year = "" + d.getFullYear().toString().slice(2, 4);
    
    // if(day.length < 2) day = "0" + day;
    // if(month.length < 2) month = "0" + month;

    return [year, month, day].join("");
}

console.log(formatDate("2023-06-15")); //230615