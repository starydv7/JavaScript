//Lexical Scope defines how varaible name are resolved in nested function
let x=3;
const parentFUnction = () => {
    //local scope
    let myValue = 2;
    console.log(x);
    console.log(myValue);

    const childFunction = () => {
        console.log(x += 5);
        console.log(myValue += 2);
    }
    childFunction();
}
parentFUnction();