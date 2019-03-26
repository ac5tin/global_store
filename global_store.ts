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
	
	
	constructor(initialState:Object = {}){
		if(Object.keys(initialState).length){
			this.__proxystate = initialState;
			this.state = new Proxy(this.__proxystate,this.proxy_handler);
		}
		
	}

	
	/** resets all global store values */
	reset_globals = () : void =>{
		this.store = {};
	};

    // ========== STORE ==========
	
	
	/** sets value to global store, similar to this.setState in react
	 * @param {string} key
	 * @param {string} value
	 */
	setStore = (key:string,value:any) : void =>this.store[key] = value;


	/** returns value from store
	 * @param {string} key
	 * @returns {any} value 
	 */
	fetchStore = (key:string = '') : any => {
        if(!key)return this.store;
        const DELIMITER:string = '>';
        key = key.trim();
        const splitted_keys:string[] = key.split(DELIMITER);
        if(splitted_keys.length > 0){
            let value:any= JSON.parse(JSON.stringify(this.store));
            // go down layers
            splitted_keys.forEach(k => value = value[k.trim()]);
            return value;
        }else{
            return this.store[key];
        }
    }

    // ========== STATE ==========

	/** sets value to global store state, similar to this.setState in react
	 * @param {string} key
	 * @param {string} value
	 */
	setState = (key,value) : void => this.state[key] = value;

	/** returns value from state
	 * @param {string} key
	 * @returns {any} value 
	 */
	fetchState = (key) : any => this.state[key];

    // ========== OTHER HELPER FUNCTIONS ==========
	
}

export default global_store; 
