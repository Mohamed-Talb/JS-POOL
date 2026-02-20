
function forEach(arr, callback) 
{
    for (let i = 0; i < arr.length; i++) 
    {
        callback(arr[i], i, arr);
    }
}

const ratings = [5, 4, 5];
forEach(ratings, (num) => console.log(num));