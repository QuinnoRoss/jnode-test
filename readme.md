# NODE JS

## Open Hello World in server 

* Open terminal
* Make directory by using the command `mkdir %NAME%`
* Go inside the made directory by typing the name of your directory
* Enter the command `npm init` to create a package json file
* Just keep on pressing enter until "Is this ok" question to skip 
* Open the sublime text editor by typing `subl .`
* Make a new file named "HelloWorld.js"
* Open your browser 
* Go to https://nodejs.org/es/docs/guides/getting-started-guide/
* Copy the code and paste it inside the "HelloWorld.js" file.
* Go back to the terminal
* Enter the command `node HelloWorld.js`
* Click or ctrl+click the link that will be displayed


## Open Hello world directly from the terminal

* Go back to "HelloWorld.js"
* Comment out all of the codes and just type `console.log(`Hello World`);`
* Go back to terminal
* Click ctrl+c
* Type `node HelloWorld.js`

## Typing webdriver from google 

* Go back to the terminal
* Enter the command `subl .`
* Make a new file and name it `%NAME%.js`
* Open your browser
* Go to https://www.npmjs.com/package/selenium-webdriver 
* Copy the code under "usage" and paste it to your `%NAME%.js`
* Remove the " ; " in line 7 of your code after ` await driver.findElement(By.name('q')) `
* Save your code
* Go back to the terminal
* Enter the command `npm install selenium-webdriver`
* Enter the command `npm install geckodriver`
* Enter the command  `subl .`
* Open your "package.json" file
* Save your "package.json" file
* Go back to the terminal
* Enter the command `npm start`

## Locating text in the website
  - Open Terminal
  - Enter the command `mkdir %NAME%`
  - Enter the newly made directory by entering the command `%NAME%` 
  - Enter the command `subl .` to open sublime editor
  - Make a new file 
  - Copy the code 
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
  - Paste the code inside the newly made file
  - Save the code and name it `%NAME%.js`
  - Go back to terminal
  - Click `ctrl + c`
  - Enter the command `node %NAME%.js`
   
 

