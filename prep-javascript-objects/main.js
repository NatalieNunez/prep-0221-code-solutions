var person = {
  firstName: 'Natalie',
  lastName: 'Nunez',
  hobby: 'painting'
};

console.log(person);

var fullName = `${person.firstName} ${person.lastName}`;

console.log('The person\'s name is:', fullName);

person.job = 'future coder';

console.log('The person\'s job is:', person.job);

person.previousJob = 'babysitter';

console.log('The person\'s previous job is:', person.previousJob);

console.log('The complete person object:', person);

var myCar = {
  make: 'Buick',
  model: 'Encore',
  year: '2020'
};

console.log('Car information:', myCar);

myCar['owner'] = fullName;

var string = `My name is ${myCar['owner']} and I drive a ${myCar['year']} ${myCar['make']} ${myCar['model']}.`;

console.log(string);

myCar['color'] = 'white';

console.log('My full car info:', myCar);
