

function getHelloMessage(name){
    //do the magic
    return "Hello " + name + ". how is it going?"; 
}

function sum (num1, num2) {
    return num1 + num2;
}

// classes
class Car {
    constructor(make, model, year) {
        this.make = make;
        this.model = model;
        this.year = year;
        this.owner = "Student";
    }
}

function testClass() {
    let c1 = new Car("Form","A", "1934");
    console.log(c1);
}

// this is an object constructor
function Dog(name, age, color ) {
    this.name = name;
    this.age = age;
    this.color = color;
    this.owner = "Leo";
}

function createObjects() {
    // object literal
    let data = {
        name: 'Test1',
        speed: 111,
        color: "Red",
        size: 12
    };
    console.log(data);

    // object constructor
    let fido = new Dog("Fido", 2, 'white');
    console.log(fido);
    
    let lola = new Dog("Lola", 4, 'pink');
    console.log(lola);
}

function divide(num1, num2){
    if(num2 == 0){
        console.log("ErrorL division by zero isn't allowed!");
        return 0;
    }

    return num1/num2;
}



function runTests(){
    console.log("start test");

    let massage = getHelloMessage("Leo");
    console.log(message);

    let result= sum(12,49);
    console.log("The result is: " + result); //61

    //Homework 1
    /**
     * show an erorr if the user is trying to divide by zero and return zero as the result
     */
    let divRes = divide(9, 3);
    let divRes2 = divide(1, 8);
    let divRes3 = divide(10, 0);
    console.log("Division results", divRes, divRes2, divRes3);
}





function testAjaxGet(){
    $.ajac({
        url: "",
        type: "GET",
        success: function (response){
            console.log("Server says: ", response);
        },
        error: function(errorDetails){
            console.log("ERROR", errorDetails);
        }
    });
}