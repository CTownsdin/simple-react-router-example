Create React App  
with  
https://medium.com/@pshrmn/a-simple-react-router-v4-tutorial-7f23ff27adf  
  
And some small fixes to get everything working nicely.  Enjoy. 
  
More react browser router reading at: https://reacttraining.com/react-router/web/guides/philosophy

Start app via:
$ yarn install
$ yarn start
and observe clicking around browser router behavior
code starts in index.js with  

```
ReactDOM.render((
  <BrowserRouter>
    <App />
  </BrowserRouter>
  ), document.getElementById('root'));
```