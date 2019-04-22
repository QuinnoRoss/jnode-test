# NODE JS

# Open Hello World in server 

## Installation
Enter commands
* ``` mkdir %NAME% ```
* ```npm init ```

## Code
* Go to https://nodejs.org/es/docs/guides/getting-started-guide/

## Run the code
* `node HelloWorld.js`


# Open Hello World in server 

## Installation

Enter commands
* ``` mkdir %NAME% ```
* ```npm init ```

## Code
* `console.log(`Hello World`);`

## Run the code
* `node %NAME%.js`


# Typing webdriver from google 

## Installation

Enter commands
* ``` mkdir %NAME% ```
* ```npm init ```
* `npm install selenium-webdriver`
* `npm install geckodriver`

## Code
```const {Builder, By, Key, until} = require('selenium-webdriver');

(async function example() {
  let driver = await new Builder().forBrowser('firefox').build();
  try {
    await driver.get('http://www.google.com/ncr');
    await driver.findElement(By.name('q')).sendKeys('webdriver', Key.RETURN);
    await driver.wait(until.titleIs('webdriver - Google Search'), 1000);
  } finally {
    await driver.quit();
  }
})();
```
## Run the code
* `node %NAME%.js`

        
# Locating text in the website
Enter commands
* ``` mkdir %NAME% ```
* ```npm init ```
* `npm install selenium-webdriver`
* `npm install geckodriver`
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
 
 
 # Asserting values per page (Activity)

## Installation

Enter commands
* ``` mkdir %NAME% ```
* ```npm init ```
* `npm install selenium-webdriver`
* `npm install geckodriver`

## Code
```
const { Builder, By, Key, until } = require("selenium-webdriver")
let driver = new Builder().forBrowser("firefox").build()

async function main() {
  await driver.get("https://www.carmudi.co.id/")
  await driver
    .findElement(
      By.xpath(
        '//div[@class="card py-2 price-range d-flex align-items-center justify-content-center" and @data-label="< 100 Juta" and @data-category="cars"]'
      )
    )
    .click()

  driver.getCurrentUrl().then(function(value) {
    //console.log(value)
    if (
      value.match(
        "https://www.carmudi.co.id/cars/condition:all/price:-100000000*"
      )
    ) {
      console.log("URL Asserted")
    }
  })
  var number = await driver.findElements(
    By.xpath('//p[@class="item-price type-xs price"]')
  )
  var count = await number.length
  //await console.log(count);
  if (count == 30) {
    console.log("There are " + count + " listings in page 1!")
  } else {
    console.log("Error")
  }

  for (var i in number) {
    var ite = await number[i].getText()
    var splite = ite.split(" ")

    var rsplite = parseInt(splite[0])
    //console.log(rsplite);
  }

  if (rsplite < 101) {
    console.log("All values in the listing are less than 100 in page 1!")
  } else {
    console.log("Error")
  }

  driver.findElement(By.xpath('//a[@title="Halaman Selanjutnya"]')).click()

  //START OF PAGE 2
  setTimeout(function() {
    driver.getCurrentUrl().then(function(UrlPage2) {
      console.log(UrlPage2)
    })
    //COUNT
    driver
      .findElements(By.xpath('//p[@class="item-price type-xs price"]'))
      .then(function(value3) {
        var count2 = value3.length
        // console.log(count);
        if (count2 == 30) {
          console.log("There are " + count2 + " listings in page 2!")
        } else {
          console.log("Error")
        }
      })
    //
    driver
      .findElements(By.xpath('//p[@class="item-price type-xs price"]'))
      .then(function(value) {
        var rsplite2

        var isShown = false
        for (var i2 in value) {
          value[i2].getText().then(function(value4) {
            var splite2 = value4.split(" ")

            rsplite2 = parseInt(splite2[0])

            if (rsplite2 < 101 && !isShown) {
              isShown = true

              console.log("All values in the listing are less than 100")
            }
          })
        } //end of for loop
      })
    //

    driver.findElement(By.xpath('//a[@title="Halaman Selanjutnya"]')).click()
  }, 5000) // SET TIMEOUT

  setTimeout(function() {
    driver.getCurrentUrl().then(function(title) {
      console.log(title)
    })

    //COUNT
    driver
      .findElements(By.xpath('//p[@class="item-price type-xs price"]'))
      .then(function(number3) {
        var count3 = number3.length

        if (count3 == 30) {
          console.log("There are " + count3 + " listings in page 3!")
        } else {
          console.log("Error")
        }
        //DIVIDER
        driver
          .findElements(By.xpath('//p[@class="item-price type-xs price"]'))
          .then(function(value3) {
            var rsplite2

            var isShown = false
            for (var i2 in value3) {
              value3[i2].getText().then(function(value4) {
                var splite2 = value4.split(" ")

                rsplite2 = parseInt(splite2[0])

                if (rsplite2 < 101 && !isShown) {
                  isShown = true

                  console.log("All values in the listing are less than 100")
                }
              })
            } //end of for loop
          })
      })
    driver.findElement(By.xpath('//a[@title="Halaman Selanjutnya"]')).click()
  }, 10000)

  //GOING TO PAGE 4

  setTimeout(async function() {
    await driver.getCurrentUrl().then(function(UrlPageFour) {
      console.log(UrlPageFour)
    })

    driver
      .findElements(By.xpath('//p[@class="item-price type-xs price"]'))
      .then(function(count5) {
        var CountLength = count5.length

        if (CountLength == 30) {
          console.log("There are " + CountLength + " listings in page 4")
        } else {
          console.log("Error")
        }
      })

    //DIVIDER
    driver
      .findElements(By.xpath('//p[@class="item-price type-xs price"]'))
      .then(function(value3) {
        var rsplite2

        var isShown = false
        for (var i2 in value3) {
          value3[i2].getText().then(function(value4) {
            var splite2 = value4.split(" ")

            rsplite2 = parseInt(splite2[0])

            if (rsplite2 < 101 && !isShown) {
              isShown = true
              //console.log(rsplite2)
              console.log("All values in the listing are less than 100")
            }
          })
        } //end of for loop
      })

    driver.findElement(By.xpath('//a[@title="Halaman Selanjutnya"]')).click()
  }, 15000)

  //GOING TO PAGE 5

  setTimeout(function() {
    driver.getCurrentUrl().then(function(UrlPageFive) {
      console.log(UrlPageFive)

      driver
        .findElements(By.xpath('//p[@class="item-price type-xs price"]'))
        .then(function(count6) {
          var CountLength2 = count6.length

          if (CountLength2 == 30) {
            console.log("There are " + CountLength2 + " listings in page 5")
          } else {
            console.log("Error")
          }
        })
    })

    //divider

    driver
      .findElements(By.xpath('//p[@class="item-price type-xs price"]'))
      .then(function(value3) {
        var rsplite2

        var isShown = false
        for (var i2 in value3) {
          value3[i2].getText().then(function(value4) {
            var splite2 = value4.split(" ")

            rsplite2 = parseInt(splite2[0])

            if (rsplite2 < 101 && !isShown) {
              isShown = true
              //console.log(rsplite2)
              console.log("All values in the listing are less than 100")
            }
          })
        } //end of for loop
      })

    //divider
  }, 20000)
} // MAIN

main()
```
## Run the code
* `node %NAME%.js`

        