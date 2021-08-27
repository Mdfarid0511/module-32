const products = [
 
   {Names:'Samsung', price : 3000, color: 'Red', quality:'good', quantity: 25},
   {Names:'iphone', price : 30000, color: 'gray', quality:'very-good', quantity: 20},
   {Names:'symphony', price : 15000, color: 'yellow', quality:'good', quantity: 5},
   {Names:'Samsung', price : 3000, color: 'Red', quality:'good', quantity: 25},
   {
      good:{
         tag:'nice',
         address: 'road',
         now: 25,
      }
   }
]

const productPrice = JSON.stringify(products);
// console.log(products);
// console.log('The new one is :',productPrice);
const convert = JSON.parse(productPrice);
console.log(convert);
