class global_store {
    constructor(initialState = {}) {
        this.store = {};
        this.__proxystate = {};
        /** on value change */
        this.onStateUpdate = (target, key, value) => { };
        this.proxy_handler = {
            set: (target, key, value) => { this.__proxystate[key] = value; this.onStateUpdate(target, key, value); return true; },
            get: (target, property, receiver) => target[property]
        };
        this.state = new Proxy(this.__proxystate, this.proxy_handler);
        /** resets all global store values */
        this.reset_globals = () => {
            this.store = {};
        };
        // ========== STORE ==========
        /** sets value to global store, similar to this.setState in react
         * @param {string} key
         * @param {string} value
         */
        this.setStore = (key, value) => this.store[key] = value;
        /** returns value from store
         * @param {string} key
         * @returns {any} value
         */
        this.fetchStore = (key = '') => {
            if (!key)
                return this.store;
            const DELIMITER = '>';
            key = key.trim();
            const splitted_keys = key.split(DELIMITER);
            if (splitted_keys.length > 0) {
                let value = JSON.parse(JSON.stringify(this.store));
                // go down layers
                splitted_keys.forEach(k => value = value[k.trim()]);
                return value;
            }
            else {
                return this.store[key];
            }
        };
        // ========== STATE ==========
        /** sets value to global store state, similar to this.setState in react
         * @param {string} key
         * @param {string} value
         */
        this.setState = (key, value) => this.state[key] = value;
        /** returns value from state
         * @param {string} key
         * @returns {any} value
         */
        this.fetchState = (key) => this.state[key];
        if (Object.keys(initialState).length) {
            this.__proxystate = initialState;
            this.state = new Proxy(this.__proxystate, this.proxy_handler);
        }
    }
}

