const _ = require('lodash');

let users = [
 {'user' : 'fred'}, 
 {'user' : 'nadeem'}];

let sortedUsers = _.sortBy(users, ['user'])
console.log(sortedUsers);
