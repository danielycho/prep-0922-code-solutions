// create your loops here.
for (let i = 0; i < 10; i++) {
  console.log(i);
}

var start = -2;
for (let i = 0; i <= 9; i++) {
  start = start + 2;
  console.log(start);
}

var countdown = 100;
for (let i = 100; i > 0; i--) {
  countdown = countdown - 1;
  console.log('Time till explosion ' + i + '!');
}
