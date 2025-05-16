const { EventEmitter } = require("events");

const birthdayEventListener = (name) => {
  console.log(`Happy birthday ${name}!`);
};

const myEmiter = new EventEmitter();

myEmiter.on("birthday", birthdayEventListener);
myEmiter.emit("birthday", "zaki");
