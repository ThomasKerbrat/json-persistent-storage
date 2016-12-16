(function (exports) {

    function JsonPersistentStorage() {
        if (!(this instanceof JsonPersistentStorage)) {
            return new JsonPersistentStorage();
        }

        var length = 0;
        var keys = [];

        Object.defineProperty(this, 'length', { get: get_length });
        Object.assign(this, {
            key: key,
            getItem: getItem,
            setItem: setItem,
            removeItem: removeItem,
            clear: clear,
        });

        function get_length() {
            return length;
        }

        function key(index) { }
        function getItem(key) { }
        function setItem(key, value) { }
        function removeItem(key) { }
        function clear() { }
    }

    // NodeJS
    if (typeof exports !== 'undefined') {
        exports.JsonPersistentStorage = JsonPersistentStorage;
    }

})(exports);
