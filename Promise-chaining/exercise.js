const isLogged = true;

const first = (isLogged) => {
    return new Promise((resolve, reject) =>{
        if(isLogged === true){
            resolve(Math.random())
        }else{
            reject('The user is not logged')
        }
    })
}

const second = (num) => {
    return new Promise((resolve, reject) => {
        if(num > 0.5){
            resolve(`{name: "John", age: 24}`)
        }else{
            reject('error')
        }
    })
}

first(isLogged)
    .then((num) => second(num))
    .then((result) => console.log(result))
    .catch((error) => console.log(error))