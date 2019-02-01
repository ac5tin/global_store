### 🌎global_store

## Build

# Main File
tsc --outDir dist --target es5 --module ES6 --lib esnext global_store.ts

- The output file is a module than can be imported
- HTML script embed version : Remove the bottom line 'export default global_store;'

# Testing file (not required)
tsc --outDir dist --target es5 --module ES6 --lib esnext,dom test.ts
