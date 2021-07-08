
/** Classess in ES6 */
class Companyines6 {
    constructor() {
        this.company = "Rajesh Stark Industries"
    }
    printCompany() {
        document.writeln(this.company)
    }
}

class Car6 extends Companyines6 {
    constructor(p, q, r) {
        super();
        this.carName = p,
            this.carPrice = q,
            this.carDescription = r,
            this.company = "Stark Industies" // overriding
    }
    carDetail() {
        document.write(`Car name is ${this.carName} and price: ${this.carPrice}. ${this.carDescription}. <br/>`)
    }

}

const Cars6 = new Car6("lamborgini", 100000, "it's a rich car")

Cars6.carDetail()
Cars6.printCompany() // when child extends parent component it can access and over ride parent class methods



/** Classess in ES7 */
class Companyines7 {
    company = "Rajesh Stark Industries"
    printCompany = () => document.write(this.company)
}

class Car7 extends Companyines7 {
    carName = "lambo";
    carPrice = 1000000;
    carDescription = "it's a rich car";
    company = "Stark Industies" // overriding
    carDetail = () => document.write(`Car name is ${this.carName} and price: ${this.carPrice}. ${this.carDescription}. <br/>`)

}

const Cars7 = new Car7("lamborgini", 100000, "it's a rich car")

Cars7.carDetail()

/** javascript spreadoperater */
set1 = [1, 2, 3, 4, 5, 6]
set2 = [...set1, 7, 8, 9, 10]


document.writeln(set2)

/** Destructuring */

 values = {
    firstname: "Rajesh",
    age: 23,
    email: "Rajesh@gmail.com"
}

const {firstname, email} = values;

document.write("<br/> firstname: ",firstname, " email: ", email);

/** Rest Operator */

const array = (...arr) => document.write("<br/>",arr)

array("Rajesh", "Rakesh", "Raj", "Raz",)

const arraynames = (a,...arr) => document.write("<br/>","My School Name: ", a, " and nicknames: "+arr)

arraynames("Rajesh", "Rakesh", "Raj", "Raz",)

