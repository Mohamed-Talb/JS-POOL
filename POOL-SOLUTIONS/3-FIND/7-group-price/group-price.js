function groupPrice(str)
{
    const filter = (Arg) => [Arg[0], Arg[2], Arg[3]];
    const reg = /(USD|\$)(\d+)\.(\d+)/g;
    let infoArr = [...str.matchAll(reg)]
    return [...infoArr.map(filter)];
    // return infoArr;
}

// console.log(groupPrice("$24.44 and USD12.32"));
// console.log(groupPrice("Hello World"));