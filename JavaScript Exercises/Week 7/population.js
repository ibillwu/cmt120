function population(start, increase, additions, target) {
    // given a starting population, which increases by increase percent each year, and additions people arriving from outside town, how many years does it take to reach the target population?
    let current=start;
    let year=0;
    while(current<target)
    {
        year++;
        current=current*(1+increase*0.01)+additions;
    }
    return year;
}

module.exports = population;