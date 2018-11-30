export function createNotification(){
    alert();
}

export function getDataFromService(v){
    console.log('in srv=' + v);
    return 'Hello ' + v + ' from service';
}