/* Event emitters take in an event name as an argument for an event and a specific callback function to execute for that event name 
as the second argument. This is the on method which in addition to defining an eventName will also define how the callback is executed for that
specific event name.

Event emmitters also have a trigger method so that when you call that method, the method also takes in the event name for the 1st argument,
then calls all the callback functions for that specific event name
*/

/* Pseudocode for creating event emitter:

EventEmitter class: 
1. Create an EventEmitter class which has just one attribute which is a this.events object. 

EventEmitter 'on' method:
1. Create a method called 'on' in the EventEmitter class which takes in 2 arguments, eventName and callback
2. Make an if statement, check if eventName already exists in the events object as a key (with values of array of callbacks) and if it does then 
just push the new input callback argument into the array of callbacks as values to the eventName key into the events object.
3. If eventName doesn't already exist in the events object as a key then just set the eventName as a key to the events object with a value of 
the input callback as an array

EventEmitter 'trigger' method: 
1. Create a method called 'trigger' in the EventEmitter class which takes in 2 arguments, eventName and rest parameter with spread operator for 
arguments
2. In the trigger method, take the array value (array of callbacks) of the eventName key from events object and run a forEach method on that array
of callback functions. In the forEach method, name each array element of callbacks, cb and use the apply method to each cb callback function to 
pass in the arguments of rest
*/

class EventEmitter {
  constructor() {
    this.events = {};
  }

  on(eventName, callback) {
    if (this.events[eventName]) {
      this.events[eventName].push(callback);
    } else {
      this.events[eventName] = [callback];
    }
  };

  trigger(eventName, ...rest) {
    //   console.log('rest: ', rest);
    // console.log('this.events[eventName]: ', this.events[eventName]); // [ [Function] ]
    if (this.events[eventName]) {
      this.events[eventName].forEach(cb => {
        // cb.apply(null, [rest]);
        return cb(rest);
      });
    }
  }
};

let oldFunc = () => {
    console.log('I have changed');
}

let newFunc = () => {
    console.log('I am new');
}

let ee = new EventEmitter();

ee.on('change', (nameOfEvent) => {
    console.log(`I have changed according to ${nameOfEvent}`);    
});

ee.trigger('change', 'firstParam', 'secondParam');

