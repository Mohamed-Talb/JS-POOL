function pronoun(str)
{
    let pronounObj = {};
    let currPronoun , currPronounArg;
    let pronounInfos;
    let regex = /\b(i|you|he|she|it|they|we)\b(\s+(?!(i|you|he|she|it|they|we)\b)\w*)?/gi;
    let allpronoun = str.match(regex);
    if (allpronoun === null)
        return {};
    allpronoun = allpronoun.map((arg) => arg.split(/\s/));
    for (let Curr of allpronoun)
    {
        currPronoun = Curr[0].toLowerCase();
        currPronounArg = Curr.slice(1,);
        if (!Object.hasOwn(pronounObj,currPronoun))
            pronounObj[currPronoun] = {word: [...currPronounArg], count: 1};
        else
        {
            pronounObj[currPronoun].word = pronounObj[currPronoun].word.concat(currPronounArg);
            pronounObj[currPronoun].count += 1;
        }
    }
    return pronounObj;
}
