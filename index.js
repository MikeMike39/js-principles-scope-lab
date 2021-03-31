// declare customerName to be 'bob' in global scope
var customerName = "bob";

//modifies the customerName variable 'toUpperCase'

function upperCaseCustomerName() {
  return (customerName = customerName.toUpperCase());
}

// setBestCustomer "not Bob" also declaring a variable "bestCustomer"
var bestCustomer;
function setBestCustomer() {
  bestCustomer = "not bob";
}

//overwrites best customer  'maybe bob'

function overwriteBestCustomer() {
  return (bestCustomer = "maybe bob");
}

// declaring a const leastFavoriteCustomer 
const leastFavoriteCustomer ="Mike";

//Fails to reassign the least favorite customer
function changeLeastFavoriteCustomer() {
    return leastFavoriteCustomer = "John";
}