var boolVal = false;

function test(time) {
  return new Promise((resolve, reject) => {
    if (boolVal) {
      return resolve("I got resolved");
    }
    if (time < 1) {
      return reject("time ran out");
    }
    //console.log(Math.round(new Date().getTime() / 1000));
    pause(10).then(() => {
      console.log("invoked");
      console.log("time ", time - 10);
      return test(time - 10).then(resolve, reject);
    });
  });
}

function pause(ms) {
  return new Promise(resolve => {
    setTimeout(resolve, ms);
  });
}

function print(val) {
  console.log(val);
}

//console.log(new Date().getTime);
test(150).then(print, print);

setTimeout(() => {
  boolVal = true;
}, 100);
