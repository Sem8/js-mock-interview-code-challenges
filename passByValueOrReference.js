let num = 10,
    name = "Addy Osmani",
    obj1 = {
      value: "first value"
    },
    obj2 = {
     value: "second value"
    },
    obj3 = obj2;
 
function change(num, name, obj1, obj2) {
    num = num * 10;
    name = "Paul Irish";
    obj1 = obj2;
    obj2.value = "new value";
}
 
change(num, name, obj1, obj2);
 
console.log(num); // 10
console.log(name); // "Addy osmani"
console.log(obj1.value); // "first value"
console.log(obj2.value); // "new value"
console.log(obj3.value); // "new value"