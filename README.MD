# Date Util for Date Tweaks

Date Util manages to transform the Date to readable format.


# Install

    npm i --save dateutil
or 

    yarn add dateutil

## Examples

    import  dateUtil  from  'dateutil'
    dateUtil.evaluate("2019-9-15", { separator:  '-', today:  'false', format:  "dd-MMMM-YYYY"}) // Output : 15-September-2019
    dateUtil.evaluate("2019-9-29", { separator:  '--', today:  'false', format:  "dd-MM-YYYY"}) // Output : 29--Sep--2019
    dateUtil.evaluate("MM-YY-DD", { separator:  '-'}) // Output : Feb-20-Sat
    dateUtil.evaluate("DDDD-MM-YYYY", { separator:  '/'}) // Output : Saturday/Feb/2020
    

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