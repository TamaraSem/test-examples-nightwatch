# MIRO project

## To run e2e test use
./node_modules/.bin/nightwatch tests/signUp.js
```
### Need to see what will be easier to maintain
1 way - keep Page Object shorter and more general (all pages included) by specifying selectors in tests.
2 way - keep all selectors in Page object per every selector.
```
#### More can be tested
```
Only basic tests are covered, more tests for validation the sign up form(validation for email format, password requirements), navigation on sign up page can be added(all links and urls).