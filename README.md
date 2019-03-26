# 🌎global_store

## Quickstart
### Import
`<script src="dist/global_store.js"></script>`

### usage
```javascript
const gs = new global_store();
// setting store
gs.setStore('test0', { a: 'b' });
// fetch from store
console.log(gs.fetchStore('test0 > a'));


// setting state
gs.setState('test1', 'hello');
// fetch from state
console.log(gs.fetchState('test1'));

gs.onStateUpdate = function (target, key, value) {
    console.log("===== upon state change =====");
    console.log(value);
};
gs.setState('test1', 'changed');
```
#### onStateUpdate is called whenever the state is changed


### persist storage
```
// store item in session storage
gs.onStateUpdate = target => sessionStorage.setItem('gs',JSON.stringify(target))


// retrieve it when page loads
const gs = new global_store(JSON.parse(sessionStorage.getItem('gs')))
```



## Build

### Main File
`tsc --outDir dist --target es5 --module ES6 --lib esnext global_store.ts`
#### output es6
`tsc --outDir dist --target es6 --module ESNext --lib esnext global_store.ts`

- The output file is a module than can be imported
- HTML script embed version : Remove the bottom line `export default global_store;`

### Testing file (not required)
`tsc --outDir dist --target es5 --module ES6 --lib esnext,dom test.ts`
