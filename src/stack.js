/* 
Det här importerar modulen Underscore.js, som vi pratade om tidigare. 
Det här fungerar inte rakt av i webbläsaren, men det löser vi med hjälp av Webpack. 
*/
var _ = require('underscore');

let stack = [];

// Lägger ett element överst i stacken
exports.push = function (x) {
    stack.push(x);
};

// Returnerar det översta elementet i stacken och tar bort det
exports.pop = function () {
    return stack.pop();
}

// Returnerar det översta elementet i stacken
exports.peek = function () {
    return stack[0]; // Det här är medvetet felaktigt
}
