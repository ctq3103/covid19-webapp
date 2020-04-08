import moment from 'moment';

export function getDate (arr) { 
    let newArr = arr.map(item => 
        moment(item.Date)
            .utc()
            .format("YYYY-MM-DD"))
    return newArr;
}

export function getCases(arr) { 
    let newArr = arr.map(item => item.Cases)
    return newArr;
}

export function numReformat(num) {
    return num.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",");
}