# 🌎global_store

## Quickstart
### Import
`<script src="dist/global_store.js"></script>`

### usage
`const gs = new global_store();
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
gs.setState('test1', 'changed');`
#### onStateUpdate is called whenever the state is changed



## Build

### Main File
`tsc --outDir dist --target es5 --module ES6 --lib esnext global_store.ts`

- The output file is a module than can be imported
- HTML script embed version : Remove the bottom line `export default global_store;`

### Testing file (not required)
`tsc --outDir dist --target es5 --module ES6 --lib esnext,dom test.ts`
