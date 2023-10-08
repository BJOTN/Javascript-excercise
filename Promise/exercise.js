const number = 15;
const promise = new Promise((result, reject) => {
    if (number > 10) {
        return result('Is greater then 10')
    } else {
        return reject('Error')
    }
});
promise
    .then((result) => console.log(result))
    .catch((error) => console.log(error))