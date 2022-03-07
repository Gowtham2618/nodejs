const lists = [1, 1, 2, 3, 4, 5, 2];
// 1. Remove Duplicate Values Using Spread OPerator in Javascript:

var value = new Set(lists)

console.log('1.spread', ...value);


// ************************************************ //

// 2. ES6 Map Functions:

// Is Used to create New Array:

var mapValue = lists.map(e => e * 2);
console.log('2.MapValue', mapValue);

// ************************************************ //

// 3. ES6 Filter Functions:

// Is Used to check the condition in that Array:

var filterValue = lists.filter(e => e > 2);
console.log('3.filterValue', filterValue);

// ************************************************ //

// 4. ES6 forEach Functions:

// Is Used to loop Array:
var eachValue = lists.forEach(e => {
    console.log('4.eachValue',e);
});

// ************************************************ //

// 5. ES6 Find Index Functions:

// Is Used to find the  Array index:

var findIndex = lists.findIndex(e=>e == 6);
console.log('5.findIndex',findIndex);

// ************************************************ //

// 6. ES6 Find  Functions:

// Is Used to find the value:

var find = lists.find((e,i)=>{
    console.log('find value',e);
    console.log('find index',i);
})




