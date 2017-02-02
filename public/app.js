
/*
var time = 0;
var timer = setInterval(function (){
  time += 2;
  console.log(time + " seconds have passed");
  if (time > 10){
    clearInterval(timer);
  }
}, 2000);

console.log(__dirname);
console.log(__filename);
*/

function sayHi(){
  console.log('hi');
}

sayHi();

var sayBye = function(){
  console.log('bye');
}
sayBye();



var arr = ['1', '2', '3'];
var stuff = require('./stuff')
console.log(stuff.counter(arr));
console.log(stuff.adder(stuff.pi, 4));

//lesson 8
var events = require('events');

var myEmitter = new events.EventEmitter();
myEmitter.on('someEvent', function(mssg){
  console.log(mssg);
})
myEmitter.emit('someEvent','the event was emitted')
