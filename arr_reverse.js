const colors = ['red', 'blue', 'green', 'yellow', 'orange'];
const colorReverse = [];
// console.log(colorReverse)
for(let i = colors.length -1; i >= 0; i--){
    const arrValue = colors[i];
    colorReverse.push(arrValue);
}
console.log(colorReverse);
