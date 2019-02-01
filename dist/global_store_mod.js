var global_store = /** @class */ (function () {
    function global_store() {
        var _this = this;
        this.store = {};
        this.__proxystate = {};
        /** on value change */
        this.onStateUpdate = function (target, key, value) { };
        this.proxy_handler = {
            set: function (target, key, value) { _this.__proxystate[key] = value; _this.onStateUpdate(target, key, value); return true; },
            get: function (target, property, receiver) { return target[property]; }
        };
        this.state = new Proxy(this.__proxystate, this.proxy_handler);
        /** resets all global store values */
        this.reset_globals = function () {
            _this.store = {};
        };
        // ========== STORE ==========
        /** sets value to global store, similar to this.setState in react
         * @param {string} key
         * @param {string} value
         */
        this.setStore = function (key, value) { return _this.store[key] = value; };
        /** returns value from store
         * @param {string} key
         * @returns {any} value
         */
        this.fetchStore = function (key) {
            if (key === void 0) { key = ''; }
            if (!key)
                return _this.store;
            var DELIMITER = '>';
            key = key.trim();
            var splitted_keys = key.split(DELIMITER);
            if (splitted_keys.length > 0) {
                var value_1 = JSON.parse(JSON.stringify(_this.store));
                // go down layers
                splitted_keys.forEach(function (k) { return value_1 = value_1[k.trim()]; });
                return value_1;
            }
            else {
                return _this.store[key];
            }
        };
        // ========== STATE ==========
        /** sets value to global store state, similar to this.setState in react
         * @param {string} key
         * @param {string} value
         */
        this.setState = function (key, value) { return _this.state[key] = value; };
        /** returns value from state
         * @param {string} key
         * @returns {any} value
         */
        this.fetchState = function (key) { return _this.state[key]; };
    }
    return global_store;
}());
export default global_store;
