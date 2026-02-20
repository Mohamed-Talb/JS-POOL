// HELPERS
const toCelsuis = (Fah) =>
{
    const fTmpr = Number(Fah.match(/-?\d+/));
    const cTmpr = (fTmpr - 32) * (5/9);
    return Math.floor(cTmpr) + "°C";
}

function fahrenheitToCelsius(Arr)
{
    return [...Arr.map(toCelsuis)]
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
            words[i] = words[i].charAt(0).toUpperCase() + words[i].slice(1);
        newStr += words[i];
    }
    return newStr;
}

function citiesOnly(objsArray)
{

  return [...objsArray.map((obj) => obj.city)];
}
function upperCasingStates(Arr)
{
   return [...Arr.map(Capitalizer)]
}

function trimFunc(obj)
{   
  let newObj = structuredClone(obj);
  const tmp = obj.temperature.split(" ");
  newObj.temperature = tmp.join("");
  return newObj;
}

function trimTemp(objArr)
{
  return [...objArr.map(trimFunc)];
}

function tempForecasts(Arr)
{
    const Forecasts = (Obj) =>
    {
        return `${toCelsuis(Obj.temperature)}elsius in ${Capitalizer(Obj.city)}, ${Capitalizer(Obj.state)}`
    }
    return [...Arr.map(Forecasts)]
}
