# Date Util for Date Tweaks

Date Util manages to transform the Date to readable format.


# Install

    npm i --save date-util-generic
or 

    yarn add date-util-generic

## Examples

    import  dateUtil  from  'date-util-generic'
    dateUtil.evaluate("2019-9-15", { separator:  '-', today:  'false', format:  "dd-MMMM-YYYY"}) // Output : 15-September-2019
    dateUtil.evaluate("2019-9-29", { separator:  '--', today:  'false', format:  "dd-MM-YYYY"}) // Output : 29--Sep--2019
    dateUtil.evaluate("MM-YY-DD", { separator:  '-'}) // Output : Feb-20-Sat
    dateUtil.evaluate("DDDD-MM-YYYY", { separator:  '/'}) // Output : Saturday/Feb/2020

    // Logging
    dateUtil.dateLog("Logging with timestamp") // Sun Feb 09 2020 22:40:58 GMT+0530 (IST) : Logging with timestamp


    // Date Comparers
    console.log(dateUtil.comparer("2019-9-15", "weeks")) 
    // 21
    console.log(dateUtil.comparer("2019-9-15", "days")) 
    // 147
    console.log(dateUtil.comparer("2019-9-15", "hours"))
    // 3527
    console.log(dateUtil.comparer("2019-9-15", "minutes"))
    // 211650
    console.log(dateUtil.comparer("2019-9-15", "absolute"))
    // 4 months ago
    

## Test

    yarn test

## Configs
| Parameter | Usage |
|--|--|
| separator | Provides separator for differentiating the readable date formate examples: '/', '--' |
| today | Default converts today's date / 'false' to provide any other date : check examples for usage|
| format | format only used when today is disabled. Provides date format examples: DD-MMMM-YYYY  MM-DD-YYYY dd-mm-YYYY |


## Short Months & Days

Short Day can be accessed by using "DD" in format  : example Tue
Long Day can be accessed by using "DDDD" in format: example Tuesday

Short Month can be accessed by using "MM" in format  : example Sep
Long Month can be accessed by using "MMMM" in format: example September

## Date Comparer

Previous Date can be compared to today by simply accessing dateUtil.comparer

    // Date Comparers
    console.log(dateUtil.comparer("2019-9-15", "weeks")) 
    // 21
    console.log(dateUtil.comparer("2019-9-15", "days")) 
    // 147
    console.log(dateUtil.comparer("2019-9-15", "hours"))
    // 3527
    console.log(dateUtil.comparer("2019-9-15", "minutes"))
    // 211650
    console.log(dateUtil.comparer("2019-9-15", "absolute"))
    // 4 months ago