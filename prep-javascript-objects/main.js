const person = {
  firstName: 'Daniel',
  lastName: 'Cho',
  hobby: 'Rock Climbing'
};
console.log(person);

var fullName = "The person's name is: " + person.firstName + ' ' + person.lastName;
console.log(fullName);

person.job = 'student';

var currentJob = "The person's current job is: " + person.job;
console.log(currentJob);

person.previousJob = 'Warehouse Manager';
var oldJob = "The person's previous job is: " + person.previousJob;
console.log(oldJob);

console.log(person);
