# Locating text in the website

### Code

```

const {Builder, By, Key, until} = require('selenium-webdriver');

  let driver = new Builder().forBrowser('firefox').build();


driver.get('http://www.carmudi.com.ph');


driver.findElement(By.xpath("//*[contains(text(), '< ₱ 500,000 ')]")).getText().then(function(txt0){
	console.log(txt0);
});

driver.findElement(By.xpath("//*[contains(text(), '₱ 500,000 - ₱ 1,000,000 ')]")).getText().then(function(txt1){
	console.log(txt1);
});

driver.findElement(By.xpath("//*[contains(text(), '₱ 1,000,000 - ₱ 2,000,000 ')]")).getText().then(function(txt2){
	console.log(txt2);
});

driver.findElement(By.xpath("//*[contains(text(), '> ₱ 2,000,000 ')]")).getText().then(function(txt3){
	console.log(txt3);
});
```
  ### Command

  - `node %NAME%.js`