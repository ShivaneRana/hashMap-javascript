import { linkedList, node } from "./linkedList.js";

class hashFunction{
	constructor(capacity = 16){
		this.capacity = capacity;
		this.loadFactor = 0.75;
		this.length = 0;
	}

	hash(key){
		let code = 0;
		let primeNumber = 11;
		for(let i = 0;i < key.length;i++){
			code = primeNumber * (code + key.charCodeAt(i));
		}

		return code % this.capacity;
	}
}
