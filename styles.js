let sida = window.location.href;
console.log(sida);
let pattern = 'google';
let result = sida.match(pattern);

setTimeout(function () {
  document.querySelector('input[type="text"][name="q"]').blur();
}, 100);


if (sida = result) {

  document.head.insertAdjacentHTML("beforeend",
    `<style>
    body{
      
      background-repeat: no-repeat !important;
      background-size: cover !important;
      background-position: center !important;
    }
    .gb_Ea.gb_5d{
      background-color: transparent !important;
      padding-left: 0 !important;
    }
    .gb_3d{
      background-color: black !important;
      border-radius: 50px !important;
    }
    .gb_5d .gb_3d{
      padding-left: 0 !important;
    }
    .lnXdpd{
      display: none;
    }
    .c93Gbe{
      display: none !important  ;
    }
    .LLD4me{
      max-height: 230px !important;
    }
    .lJ9FBc input[type="submit"], .gbqfba{
      background-color: #30313400 !important;
      border: 1px solid white !important;
      color: white !important;
    }
    .lJ9FBc input[type="submit"]:hover{
      background-color:green !important;
    }
    .RNNXgb{
         background: #20212400 !important;
         border: 2px solid #ffffff !important;
    }
    .emcav .RNNXgb{
      background: black !important;
 }
 .WggQGd{
  color: white !important;
 }
 .aajZCb{
  background: green !important;
  }
 
 </style>`)
}


