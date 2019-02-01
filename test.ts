// @ts-ignore
import GS from './global_store.ts';

// instantiate global store object
const gs = new GS();

// setting store
gs.setStore('test0',{a:'b'});
// fetching from store
console.log("===== fetch store =====");
console.log(gs.fetchStore('test0 > a'));


// setting state
gs.setState('test1','hello');
// fetch from state
console.log("===== fetch state =====");
console.log(gs.fetchState('test1'));


// upon state change
gs.onStateUpdate = (target,key,value) =>{
    console.log("===== upon state change =====")
    console.log(value);
}

gs.setState('test1','changed');
