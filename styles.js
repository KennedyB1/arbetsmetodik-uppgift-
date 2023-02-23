let sida = window.location.href;
console.log(sida);
let pattern = 'google';
let result = sida.match(pattern);

setTimeout(function () {
  document.querySelector('input[type="text"][name="q"]').blur();
}, 100);



