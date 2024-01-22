/* 
Object Oriented Programming in JS
everything in JS is an Obj(have properties and methods). for example an array is an obj that has a property which is length, method like sort,..
another built-in global obj: window
null, numbers, booleans, strings are not obj (primitive types)
window obj is the global obj 
*/
var userOne = {
    email: 'ryu@ninjas.com',
    name: 'Ryu',
    login(){
        console.log(this.email, 'has logged in');
    },
    logout(){
        console.log(this.email, 'has logged out');
    }
};

console.log(userOne.name);
userOne.login();
userOne.logout();

//2 ways to access
userOne.email;
userOne['email'];
//create a new prop or method for the obj already exits
userOne.age = 25;

// what if we want more than one of this obj
//** Classes **
class User {
    //create a constructor(just for properties)
    constructor(email, name){
        this.email = email;
        this.name = name;
        this.score = 0;
    }
    login(){
        console.log(this.email, 'just logged in');
        return this;
    }
    logout(){
        console.log(this.email, 'just logged out');
        return this;
    }
    updateScore(){
        this.score++;
        console.log(this.email, 'score is now', this.score);
        return this;
    }
}

var userTwo = new User('sam@gmail.com', 'Sam'); //obj1
var userThree = new User('rey@gmail.com', 'Rey'); //obj2

console.log(userTwo, userThree);
userTwo.login();
userThree.logout();
/*
the new keyword:
- creates a new empty object {}
- sets the value of 'this' to the new empty obj(new instance)
- calls the constructor method
*/

// method chaining: to do so we need to return this as the instance of the class in the methods and then when we call another method, it will be on the instance
userTwo.login().updateScore().updateScore().logout();

//inheritance
class Admin extends User {
    //we don't need constr here
    deleteUser(user) {
        //filter method will cycle through the array of users 
        user = user.filter(u => {
            //if return false it will filter out the user
            return u.email != user.email;
        })
    }
}
var admin = new Admin('boss@gmail.com', 'boss');
var users = [userTwo, userThree, admin];

admin.deleteUser(userTwo); //usertwo will be deleted
userThree.deleteUser(userOne); //not working coz userThree doesn't have access to admin class

//prototype instead of using class
function User1(email, name){ //like a constr
    this.email = email;
    this.name = name;
    this.online = false;
}

User1.prototype.login = function(){ //adding method to the prototype
    this.online = true;
    console.log(this.email, 'has logged in');
};

User1.prototype.logout = function(){
    this.online = false;
    console.log(this.email, 'has logged out');
};

//prototype inheritance
function Admin1(...args){ //getting all the args when calling Admin
    User1.apply(this, args); //inheriting from User proto to inherit the properties of the User
}
//Admin can have its own prototype property 
Admin1.prototype = Object.create(User1.prototype); //create an obj use the User prototype(inheriting User prototype)

//adding a method just for Admin prototype
Admin1.prototype.deleteUser = function(u){
    users = users.filter(user => {
        return user.email != u.email;
    });
};

var userOne = new User1('ryu@ninjas.com', 'Ryu');
var userTwo = new User1('yoshi@mariokorp.com', 'Yoshi');
var admin = new Admin1('shaun@ninjas.com', 'Shaun');

var users = [userOne, userTwo, admin];

