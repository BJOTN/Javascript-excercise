function repeatHello(callback) {
    setInterval(() => {
         callback()
        }, 1000)
}
repeatHello(() => console.log('Hello'))
//perchè non viene specificata il valore di 'this' della funzione e essendo in un contesto globale non avrebbe senso usare una funzione normale