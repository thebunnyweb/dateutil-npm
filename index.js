module.exports = {
    mapper(data, type, format){
        const months = [ "January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December" ];
        const days = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];
        if(type === 'month') return format === 'long' ? months[data] : months[data].substring(0, 3);
        if(type === 'day') return format === 'long' ? days[data] : days[data].substring(0, 3);
    },
    getParams(date, args, type, eval){
        if(args.length > 2 ){
            if(type === 'year'){
                return `${+date.getFullYear()}`;
            }else if(type === 'month'){ 
                return args.indexOf("MMMM") > -1 ? eval === 'false' ? this.mapper(+date.getMonth()-1, 'month', 'long') : this.mapper(+date.getMonth(), 'month', 'long') :`${+date.getMonth()}`;
            }
            return args.indexOf("DDDD") > -1 ? this.mapper(+date.getDay(), 'day', 'long') :`${+date.getDate()}`;
        }else{
            if(type === 'year'){
                return `${+date.getYear().toString().split("").slice(1).join("")}`;
            }else if(type === 'month'){
                return args.indexOf("MM") > -1 ? eval === 'false' ? this.mapper(+date.getMonth()-1, 'month', 'short') : this.mapper(+date.getMonth(), 'month', 'short'):`${+date.getMonth()}`;
            }
            return args.indexOf("DD") > -1 ? this.mapper(+date.getDay(), 'day', 'short') :`${+date.getDate()}`;
        }
    },
    applyIndex(data){
        let indexing = {}
        data.forEach(element => {
            if(element.toLowerCase().indexOf('y') > -1){
                indexing['year'] = data.indexOf(element)
            }else if(element.toLowerCase().indexOf('m') > -1){
                indexing['month'] = data.indexOf(element)
            }else{
                indexing['day'] = data.indexOf(element)
            }
        });
        return indexing;
    },
    evaluate(type, args){
        let config = args,
            eval = config['today'] || true
            dataFormat =  eval !== 'false' ? type.split('-') : config['format'].split('-') || ["YYYY", "MM", "DD"] ,
            typeSplit = type.split("-") || [],
            date = eval !== 'false' ? new Date() : new Date(+typeSplit[0] , +typeSplit[1], +typeSplit[2]),
            dateIndex = this.applyIndex(dataFormat),
            today = {};
        for(let key in dateIndex){
            today[key] = this.getParams(date,dataFormat[dateIndex[key]], key, eval);
        }
        return Object.values(today).join(config['separator'] || '-')
    },
    calculateTime(dateExtract, todayDate, time='days'){
        let minutes = 1000 * 60,
            hours = 60,
            days =  24,
            years = 365,
            weeks = 7,
            months = 30,
            timediff = dateExtract.getTime() > todayDate.getTime() ? dateExtract.getTime() - todayDate.getTime() : todayDate.getTime() - dateExtract.getTime();

        if(time === 'months'){
            return Math.floor((((timediff/minutes)/hours)/days)/months);
        }else if(time === 'weeks'){
            return Math.round((((timediff/minutes)/hours)/days)/weeks);
        }else if(time === 'days'){
            return Math.round(((timediff/minutes)/hours)/days);
        }else if(time === 'hours'){
            return Math.round(((timediff/minutes)/hours));
        }else if(time === 'minutes'){
            return Math.round(((timediff/minutes)));
        }else if (time === 'absolute'){
            let daysPeriod = Math.round(((timediff/minutes)/hours)/days)
            if(daysPeriod < months) {
                return `${daysPeriod} days ago`
            }else{
                let monthsPeriod = Math.floor((((timediff/minutes)/hours)/days)/months);
                return `${monthsPeriod} months ago`
            }
        }  
        return Math.round(((timediff/minutes)/hours)/days);
    },
    comparer(date, args){
        let config = args,
            dateIndex = date.split("-"),
            dateExtract = new Date(+dateIndex[0], +dateIndex[1]-1, +dateIndex[2]+1),
            todayDate = new Date();
        return this.calculateTime(dateExtract, todayDate, args) 
    },
    dateLog(data){
        console.log(`${new Date()} : ${data}`)
    }
}

