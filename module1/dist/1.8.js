"use strict";
// destructuring
const user = {
    id: 345,
    name: {
        firstName: "Mosheur",
        middleName: "Rahman",
        lastName: "Mehedi",
    },
    contactNo: "+44 07000000",
    address: "UK",
};
const { contactNo, name: { middleName: midName }, } = user;
// array destructuring
const myFriends = ["chandler", "joey", "ross", "rachel", "monica", "phoebe"];
const [, , bestFriend, ...rest] = myFriends;
