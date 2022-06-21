
## Introduction


This repo contains simple tests for JavaScript functions, including promises and async-await.

Most of the information here is taken from the <a href="https://jestjs.io/docs/">Jest docs</a>

Also checkout the complete series of basic jest tutorial <a href="https://dev.to/abidullah786/">my dev.to profile</a> 

## Pre-Requests

Create a project using npm or yarn (I will be using npm throughout this tutorial)
```
npm init -y
```

After that run the following command to install the jest in your dev dependency.
```
npm install --save-dev jest
```
Now Let's get started by writing a test for a function that adds two numbers. 

First, create a sum.js file:
```
function sum(a, b) {
  return a + b;
}
module.exports = sum;
```

Now it is batter to have a separate directory of test cases for that follow the below-given steps

- First create the `__test__` repository
- Add your test files in that directory the file name should have .test.js means `<any_name>.test.js`
    - It will be batter to have different test files for different tests
- import the function module you want to test.
- before starting the test write the test script in package.js <br>
`Add the following section to your package.json:`
```
{
  "scripts": {
    "test": "jest"
  }
}
```
<br>

After reading the above guideline, create a file named **`sum.test.js`**. 
This will contain our actual test:

```
const sum = require('./sum');

test("add", () => {
  expect(sum(1, 2)).toBe(3);
});
```

Finally, run `yarn test` or `npm test` command and Jest will print this message:
```
PASS  ./sum.test.js
✓ adds 1 + 2 to equal 3 (5ms)
```

WOW! You just successfully wrote your first test using Jest!

Some Guidelines to be aware of it: <br>
**Create Test Suites:**
- Batter to have a separate test suite for each module. 
- A test suite is a file named like this: `my-module-name.test.js`
  - If we consider our previous example in that case the test suite name should be sum.test.js
- A suite can have 1 or more tests.


<br>

--------------------------------------------------------------

<br>
Before moving forward I would suggest that take please check the previous section for the basics of jest test and project configurations.

In this section, we will further deep dive in jest.

## Different Ways of Running test: <br>
The command `npm test` or `npm run test` will run all test suites available in the project. 

**Running 1 test case or 1 test suite**

**Method-I** <br>
To run a specific test suite (_test-file_) run this command `npm test -- <file_name>`. For that all the below three commands are correct.
```
npm test -- sum
```

```
npm test -- sum.test
```

```
npm test -- sum.test.js
```

To run a specific test (_test_case_) run this command 
```
npm test -- -t "<test_case_name>"
```
  - Considering our previous example, in that example, the test case name is `add` so for that we have to write a command like this 
    ```
    npm test -- -t add
    ```
  - this has one disadvantage, against the above command all the .test.js files will be searched for add and all tests will execute.
  - Also if any test case has the word add that will execute no matter which .test.js file it is.
  - these all because the command -t helps us to set the regular expression and it can math any test case string.

The batter solution for the above scenario is to combine the test suite name and test case name to restrict the command more like 
```
npm test -- sum.test.js -t add
```
  - But still, more than one test case can be run if there is any test case in a test_suite that has the word `add`.


**Method-II - Using `.only()`**  <br>
When you mark the single test_case with only() the jest will run only for test_cases that are defined with the method only() and skip all the other test_cases.

you can mark or define more than one test_cases with only().

This will help to more restrict the command for jest. now the previously discussed command will work correctly
```
npm test -- sum.test.js
```
Example
**sum.test.js file**
```
const sum = require("../sum")
test.only("2 + 2 equal 4, add",()=>{
    expect(sum(2,2)).toBe(4);
});

test("add",()=>{
    expect(sum(2,4)).toBe(6);
});
```
After running the command `npm test -- sum.test.js` you will get the following result.
```
 PASS  __test__/sum.test.js
  √ 2 + 2 to equal 4, add (5 ms)
  ○ skipped add
```

**Method-III - Watch Mode**<br>
Watch mode has advantages one of them is that it will look for changes in `.test.js` files and will re-test for changes.

Secondly, after starting testing or looking at changes in .tes.js files it will generate a menu to quickly select an action.

To do so run the following command 
```
npm test -- --watch
```
After running the above command you will get the menu as shown below:
```
Watch Usage
 › Press f to run only failed tests.
 › Press o to only run tests related to changed files.
 › Press p to filter by a filename regex pattern.
 › Press t to filter by a test name regex pattern.
 › Press q to quit watch mode.
 › Press Enter to trigger a test run.
```

Now select the option whatever you want.

**Getting the test report in a pretty form:** <br>
To get the pretty result of the test use the following command
```
npm test --coverage
```
The above command will give the result in the following form:
```
 PASS  __test__/index.test.js
 PASS  __test__/sum.test.js
----------|---------|----------|---------|---------|-------------------
File      | % Stmts | % Branch | % Funcs | % Lines | Uncovered Line #s 
----------|---------|----------|---------|---------|-------------------
All files |     100 |      100 |     100 |     100 |                   
 sum.js   |     100 |      100 |     100 |     100 |                   
----------|---------|----------|---------|---------|-------------------

Test Suites: 2 passed, 2 total
Tests:       1 skipped, 2 passed, 3 total
Snapshots:   0 total
Time:        2.27 s
Ran all test suites.
```
**Note:** as you may notice the in result that all the test suites (test_files) and the test cases in it are execute my jest.


**Conclusion:** <br>
**Note:** if you are the bagginer then i will suggest to not follow whatever suggested in the conlusion.

So try to use the short command for all the techniques you have seen so far. This will not only save your some time, but also improve the overall develper experience. 

Set the commands in your _`package.json`_ file.

```
{
...
  "scripts": {
    "test": "jest",
    "testw": "jest --watch",
    "testc": "jest --coverage",
...
  },
  "devDependencies": {
    "jest": "^18.1.0",
    ...
  },

}
```

And if you are using the vs code than install the jest runner extention to save more time.

For more instruction visit <a href="https://dev.to/abidullah786/">my dev.to profile</a> there i have series on jest 



