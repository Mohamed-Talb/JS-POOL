function hasCity(country, Arr)
{
    return function(city)
    {
        const len = Arr.length;
        for (let i = 0; i < len; i++)
        {
            if (Arr[i] === city)
                return `${city} is a city from ${country}`
        }
        return `${city} is not a city from ${country}`
    }
}
