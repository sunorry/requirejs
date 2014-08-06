require.config({
  baseUrl: './scripts',
  paths : {
    jquery: 'libs/jquery.1.8.3.min',
    underscore: 'libs/underscore',
    text: 'libs/text',
    tpl: 'tpls'

  }
});

// define(['jquery', 'underscore','text', 'tpl1'], function($, _ , test, a) {
//   // console.log($);
//   // require('tpl1');
//   console.log(a)
// })
// require(['jquery', 'text'])
require('tpl/tpl1');