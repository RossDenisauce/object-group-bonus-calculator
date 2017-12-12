//0.1 - classes
//0.2 - function that accepts an employee
//0.3 - calculate review Bomus
//0.4 - employee #
//0.5 - max salary
//0.6 - max/min bonus
//0.7 - return object requested
//0.8 - review rating as a function
//0.9 employee # check as method on employee classes
//1.0 - repeat through each employee
//1.1 - on DOM


class Employee{
  constructor(name, employeeNumber, annualSalary, reviewRating){
    this.name = name;
    this.employeeNumber = employeeNumber;
    this.annualSalary = annualSalary;
    this.reviewRating = reviewRating;
  } // end constructor
} // end Employee class
var atticus = new Employee("Atticus", "2405", "47000", 3 );
var jem = new Employee("Jem", "62347", "63500", 4 );
var boo = new Employee( "Boo",  "11435", "54000", 3 );
var scout = new Employee( "Scout", "6243", "74750", 5 );
var robert = new Employee("Robert",  "26835", "66000", 1 );
var mayella = new Employee("Mayella",  "89068", "35000", 2 );

var employees = [ atticus, jem, boo, scout, robert, mayella ];

// YOU SHOULD NOT NEED TO CHANGE ANYTHING ABOVE THIS POINT

console.log(employees);

function calculateEmployee(employee){
  console.log('in calculateEmployee', employee);
  var bonusPercentage = 0;
  // calulate reviewRating
  if (employee.reviewRating == 3){
    bonusPercentage = 0.04;
  } //end 3
  else if (employee.reviewRating == 4){
    bonusPercentage = 0.06;
  } //end 4
  else if (employee.reviewRating == 5){
    bonusPercentage = 0.1;
  } //end 5
  else{
    bonusPercentage = 0;
  } //end other
  console.log('bonus after review rating check:', bonusPercentage);

  //employee number
  if(employee.employeeNumber.length === 4){
    console.log('oldschool cat');
    bonusPercentage += 0.05;
  } //end oldschool
console.log('bonusPercentage:', bonusPercentage);
  //max salary

  //min/max bonus

} //end calculateEmployee
