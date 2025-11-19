function repeat(string, number)
{
    var newstr = "";
    try
    {
        if (typeof string !== "string" || typeof number !== "number") 
        {
            throw new Error("Invalid argument: expected (string, number)");
        }  
        while (number > 0)
        {
            newstr += string;
            number--;
        }
        return newstr;
    }
    catch (error)
    { 
        console.log(error.message);
        return "";
        // console.log(error.name);
        // console.log(error.stack);
    }
   
}

const string = "hello! ";
console.log(repeat(string, 3));
console.log(repeat(3, 3));