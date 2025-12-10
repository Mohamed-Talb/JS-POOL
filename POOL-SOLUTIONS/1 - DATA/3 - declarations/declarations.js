// console.log({'awsome key': 'great value'});
// console.log({'second key': 25});

// console.log({
//     'first key':1,
//     'second key': 22,
//     'third key': 333,
//     'fourth key': 4444,
//     'the last key': 5555,
// });

// const myStreet = {
//     number: 175,
//     label: 'boulvard',
//     name: 'matabiau',
// }

// const address = {
//   country: 'France',
//   town: 'Toulouse',
//   postalCode: 31000,
//   street: myStreet,
// }

// // console.log(myStreet);

// // const address = {
// //     country: 'France',
// //     town: 'paris',
// //     postalCode: 31000,
// //     street: myStreet,
// // }

// // console.log({
// //     firstname: 'clement',
// //     lastname: 'denis',
// //     email: 'mo7amed.talb@gmail.com',
// //     age: 24,
// //     address : address,
// // })


// const user =  
// {
//     firstname: 'clement',
//     lastname: 'denis',
//     email: 'mo7amed.talb@gmail.com',
//     age: 24,
//     address,
// }

// const random = {
//     head:
//     [
//         {x: 5, y: 5},
//         {x: 6, y: 4},
//         {x: 7, y: 3},
//     ],
//     tail: 
//     [
//         {x : 3, y: 7},
//         {x : 4, y: 6},
//         {x : 5, y: 5},
//     ]
// }
// console.log(random.head);
// console.log(user);

const escapeStr = "`\\/\"'";
console.log(escapeStr);

const arr = [4, '2'];

const nested =
{
    arr: [4, undefined, '2'],
    obj: 
    {
        str: "taleb",
        num: 44,
        bool: false,
    }
}

const obj =
{
    str: "mohamed",
    num: 42,
    bool: true,
    undef: undefined,
    nested,
}

Object.freeze(obj);

