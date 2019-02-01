class global_store {
	store: Object = {};
	
	private __proxystate:Object = {};

	/** on value change */
	onStateUpdate = (target,key,value) =>{}
	proxy_handler = {
		set: (target,key,value)=>{this.__proxystate[key] = value;this.onStateUpdate(target,key,value);return true},
    	get:(target,property,receiver)=>target[property]
	}

	state = new Proxy(this.__proxystate,this.proxy_handler);
	
	
	constructor(){
	}

	
	/** resets all global store values */
	reset_globals = () : void =>{
		this.store = {};
	};
	
	
	/** sets value to global store, similar to this.setState in react
	 * @param {string} key
	 * @param {string} value
	 */
	setStore = (key,value) : void =>this.store[key] = value;


	/** returns value from store
	 * @param {string} key
	 * @returns {any} value 
	 */
	fetchStore = (key) : any => this.store[key];

	/** sets value to global store state, similar to this.setState in react
	 * @param {string} key
	 * @param {string} value
	 */
	setState = (key,value) : any => this.state[key] = value;

	/** returns value from state
	 * @param {string} key
	 * @returns {any} value 
	 */
	fetchState = (key) : any => this.state[key];



	
	
	
}

export default global_store; 