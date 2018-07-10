# Demo: JSON.stringify with Cycles

Demonstrates JSON serialization with cycles

### Usage

- Run `npm install`
- Run `npm test`

> Note:  
> 1. Adding `products` to `Category` creates a cycle.  
> 2. You need to convert `Set` to `Array` in order to serialize.  
> 3. `TrackableSet` behaves the same way as `Set`.
