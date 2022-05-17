//Program 1-----------------------------------------
const age = 24;
console.log("Age is :",age);
try{
    console.log("Increased age is",++age);
}
catch(e){
    console.log("error in try blok was: ",e);
}

//Program 2----------------------------------------
const j = 20;
if(j>0){
    let i=10;
    i=i+j;
}
try{
    console.log("i is : ",i);
}
catch(e){
    console.log("error: ",e);
}

//Program 3----------------------------------------
function Order(){
    this.id = 1,
    this.title = 'Icecream',
    this.price =100
}
Order.prototype.printOrder =function(){
    return this.id+": " + this.title+": " + this.price
}
let obj1 = new Order();
console.log(obj1.printOrder());

Order.prototype.getPrice =function(){
    return this.price;
}
let obj2 = new Order();
console.log("The price is : ",obj2.getPrice());

let targetObject = new Order();
const source = Order;

const returnedTarget = Object.assign(targetObject, source);
console.log("returned target using object.assign  is",returnedTarget)


//Program 4--------------------------------------------------------
let names = ['Tom', 'Ivan', 'Jerry']
names.forEach(element => {
    console.log("name: ",element,"length: ",element.length);
});
