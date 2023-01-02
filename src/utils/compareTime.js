exports.compareTime = (depature, arrival) => {

    let x  = new Date(depature);
    let y = new Date(arrival);

    if(x.getTime() >= y.getTime()){
        return false;
    }
    return  true;
}