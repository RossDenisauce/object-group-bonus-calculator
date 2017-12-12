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
  /* calulate reviewRating
  Those who have a rating of a 2 or below should not receive a bonus.
  Those who have a rating of a 3 should receive a base bonus of 4% of their base annual income.
  Those who have a rating of a 4 should receive a base bonus of 6% of their base annual income.
  Those who have a rating of a 5 should receive a base bonus of 10% of their base annual income.
  */
  if (employee.reviewRating == 3){
    bonusPercentage = 0.04;
  } //end 3
  else if (employee.reviewRating == 4){
    bonusPercentage = 0.06;
  } //end 4
  else if (employee.reviewRating == 5){
    bonusPercentage = 0.1;
  } //end 5
  console.log('bonus after review rating check:', bonusPercentage);
} //end calculateEmployee
