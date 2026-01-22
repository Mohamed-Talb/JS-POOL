// HELPERS
const toCelsuis = (Fah) =>
{
    const fTmpr = Number(Fah.match(/\d+/));
    const cTmpr = (fTmpr - 32) * (5/9);
    let Cel = Fah.replace(/\d+/, String(cTmpr.toFixed(2)));
    Cel = Cel.replace(/°F/, "°C");
    return Cel;
}

const Capitalizer = (Arg) =>
{
    let newStr = "";
    const words = Arg.split(/(?<=\S)(?=\s)|(?<=\s)(?=\S)/);
    const wordsLen = words.length;
    const regexCheck = /\S+/;
    for (let i = 0; i < wordsLen; i++)
    {
        if (regexCheck.test(words[i]))
            words[i] = words[i].charAt(0).toUpperCase()+words[i].slice(1);
        newStr += words[i];
    }
    return newStr;
} 
// ----------------------------

function citiesOnly(objsArray)
{
    return [...objsArray.map((obj) => obj.city)];
}
function upperCasingStates(Arr)
{
   return [...Arr.map(Capitalizer)]
}

function fahrenheitToCelsius(Arr)
{
    return [...Arr.map(toCelsuis)]
}

function trimTemp(Arr)
{
    const removeSpace = (Obj) => Obj.temperature.trim(); // we have also trimEnd and trimStart
    return [...Arr.map(removeSpace)];
}

function tempForecasts(Arr)
{
    const Forecasts = (Obj) =>
    {
        return `${toCelsuis(Obj.temperature)}elsius in ${Capitalizer(Obj.city)}, ${Capitalizer(Obj.state)}`
    }
    return [...Arr.map(Forecasts)]
}

const objs = [ {city: 'Los Angeles', temperature: '  101 °F   ',}, {city: 'San Francisco', temperature: ' 84 ° F   ',},]
console.log(citiesOnly(objs))
console.log(upperCasingStates(['alabama', 'new jersey'])) // -> ['Alabama', 'New Jersey']
console.log(fahrenheitToCelsius(['68°F', '59°F', '25°F'])) // -> ['20°C', '15°C', '-4°C']
console.log(trimTemp([
  { city: 'Los Angeles', temperature: '  101 °F   ' },
  { city: 'San Francisco', temperature: ' 84 ° F   ' },
]))

console.log(tempForecasts([{city: 'Pasadena',temperature: ' 101 °F',state: 'california',region: 'West',}]))
