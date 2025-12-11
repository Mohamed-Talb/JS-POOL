const circular = 
{
    name:"mohamed",
    lastName: "Taleb",
}

circular.circular = circular;
console.log(circular);
console.log(circular.circular.lastName);