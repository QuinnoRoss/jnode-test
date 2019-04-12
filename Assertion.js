const {Builder, By, Key, until} = require('selenium-webdriver');

let driver = new Builder().forBrowser('firefox').build();

var url = driver.get('http://www.carmudi.com.ph');

var assert = require('assert');


// var expected = url.getText;



//var pageSource = driver.findElement(By.className("card py-2 price-range d-flex align-items-center justify-content-center")).getText();


//var PageSource = driver.findElementsByClassName("card py-2 price-range d-flex align-items-center justify-content-center").getText();


var PageSource = driver.findElements(By.className("card py-2 price-range d-flex align-items-center justify-content-center")).then(function(elements){
   elements.forEach(function (element) {
     element.getText().then(function(text){
        console.log(text);
 if (text.match(/500,000*/)){
 		console.log('nice');
 }

  if (text.match(/1,000,000*/)){
 		console.log('nice');
 }

  if (text.match(/200,000*/)){
 		console.log('nice');
 }
    //    assert.equal(text,'< ₱ 500,000 ');



        });
    });
});



var s = "hello world!";
if (s.match(/hello.*/)) {
  // do something
}

// divider 



