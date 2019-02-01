// @ts-ignore
import GS from './global_store.js';
// instantiate global store object
var gs = new GS();
// setting store
gs.setStore('test0', 'hi');
// fetching from store
console.log(gs.fetchStore('test0'));
// setting state
gs.setState('test1', 'hello');
// fetch from state
console.log(gs.fetchState('test1'));
// upon state change
gs.onStateUpdate = function (target, key, value) {
    console.log(value);
};
gs.setState('test1', 'changed');
