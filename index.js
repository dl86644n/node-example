let lodash = require('lodash');

let name = "dana";

name = lodash.upperFirst(name);

console.log(name);

const changeName = (caps) => {
    let result = caps.toLowerCase();
    result = lodash.upperFirst(result);
    return result;
}

// let name = "Dana"
// use these functions from lodash:
// lowerCase();
console.log(lodash.lowerCase(name));

// upperCase();
console.log(lodash.upperCase("dana"));

// startCase();
console.log(lodash.startCase("this is not so bad"));

