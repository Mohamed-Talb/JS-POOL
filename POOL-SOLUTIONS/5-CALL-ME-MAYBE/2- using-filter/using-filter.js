function filterShortStateName(Arr)
{
    return [...Arr.filter((str) => str.length < 7)]
}

function filterStartVowel(Arr)
{
    return [...Arr.filter((str) => /^(a|e|i|o|u)/i.test(str))];
}

function filter5Vowels(Arr)
{
    const has5Vowels = (str) =>
    {
        const allVoils =  str.match(/[aeiou]/g);
        return allVoils && allVoils.length >= 5;
    }
    return [...Arr.filter(has5Vowels)];
}

function filter1DistinctVowel(Arr)
{
    const DistincVowel = (str) =>
    {
        const allVoils =  str.match(/[aeiou]/g);
        if (!allVoils) 
            return false
        const VLen = allVoils.length;
        let Vowels = "";
        for (let i = 0; i < VLen; i++)
        {
            if (/(a|e|i|o|u)/.test(allVoils[i]) && !Vowels.includes(allVoils[i]))
                    Vowels += allVoils[i];;
        }
        return Vowels.length === 1;
    }
    return [...Arr.filter(DistincVowel)];
}

function multiFilter(Arr)
{
    const Filter = (Obj) =>
    {
        let V1 = Obj.capital.length >= 8;
        let V2 = !(/^(a|e|i|o|u)/.test(Obj.name));
        let V3 = Obj.tag.match(/[aeiou]/g).length >= 1;
        let V4 = Obj.region.toLowerCase() !== "south";
        return V1 && V2 && V3 && V4;
    }
    return [...Arr.filter(Filter)]
}

console.log(filterShortStateName(["Texas","Alabama","Idaho","Ohio"]));
// ["Texas", "Idaho", "Ohio"]
console.log(filterStartVowel(["Alabama","Texas","ohio","utah","Colorado"]));
// ["Alabama","Ohio","Utah"]
console.log(filter5Vowels(["oooook","beautiful","queueing","Texas","ooooo"]));
// ["oooook","beautiful","queueing","ooooo"]
console.log(filter1DistinctVowel(["Alabama","Texas","Idaho","Alaska","Queue"]));
// ["Alabama","Alaska"]

console.log(multiFilter([
    {name:"Texas",capital:"Austin",tag:"Lone Star",region:"South"},
    {name:"Colorado",capital:"DenverCity",tag:"Rockies",region:"West"},
    {name:"Nevada",capital:"CarsonCity",tag:"Silver",region:"West"},
    {name:"Florida",capital:"Tallahassee",tag:"Sunshine",region:"South"},
    {name:"Virginia",capital:"RichmondVA",tag:"Old Dominion",region:"East"}
]));

/* 
[
    {name:"Nevada",capital:"CarsonCity",tag:"Silver",region:"West"},
    { name: "Colorado", capital: "DenverCity", tag: "Rockies", region: "West" },
    { name: "Virginia", capital: "RichmondVA", tag: "Old Dominion", region: "East" }
]
  */
