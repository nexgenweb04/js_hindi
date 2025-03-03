const accountId = 144553
let accountEmail = "skmdsaifuddin@gmail.com"
var accountPassword = "12345"
accountCity = "Jaipur"
let accountState;

// accountId = 2 not allowed

accountEmail = "skmdsaifu@gmail.com"
accountPassword = "212121"
accountCity = "Bengaluru"
console.log(accountId);

/*
    Prefer not use var
    because of issue in block scope and functional scope
*/

console.table([accountId, accountPassword,accountCity,accountState])