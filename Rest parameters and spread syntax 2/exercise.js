function sum(...num) {
    return num.reduce((count,now)=>count+now,0);
}

console.log(sum(1, 2, 3, 4, 5));