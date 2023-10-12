function printAsyncName(callback, string) {
    setTimeout(() => {
        const sayHi = 'Hello';
        callback(sayHi)
    }
        , 1000);
    setTimeout(() => {
        console.log(string)
    }
        , 2000)
}
const stringName = 'Bjorn'
printAsyncName((result) => {
    console.log(result)
}, stringName)
