let moment = require('moment');

let getCurrentDate = () => {
    let wrapped = moment(new Date());
    console.log(wrapped.format('LLLL'));
}

getCurrentDate();
