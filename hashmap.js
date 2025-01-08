import { linkedList, node } from "./linkedList.js";

class hashMap{
	constructor(capacity = 16){
		this.capacity = capacity;
		this.loadFactor = 0.75;
		this.length = 0;
		this.arr = new Array(this.capacity).fill(null).map(() => new linkedList())
	}

	hash(key){
		let code = 0;
		let primeNumber = 11;
		for(let i = 0;i < key.length;i++){
			code = primeNumber * (code + key.charCodeAt(i));
		}

		return code % this.capacity;
	}

	set(key,value){
		const hashcode = this.hash(key);
		if(!(this.arr[hashcode].contains(key))){
			this.arr[hashcode].append(key,value);
			++this.length;
			console.log("the value did was nor present in the bucket so value was created");
		}else{
			const index = this.arr[hashcode].findIndex(key);
			this.arr[hashcode].insertValueAt(value,index);
			console.log("key with similar name already exist in the bucket so overwritting");
		}
	}

	display(){
		console.log(this.arr);
	}

}

const h1 = new hashMap();
h1.set("shivane",20);
h1.set("anuj",900);
h1.display();
h1.set("shivane",201);
h1.display();