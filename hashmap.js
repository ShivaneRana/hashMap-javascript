import { linkedList, node } from "./linkedList.js";

class hashMap{
	constructor(capacity = 5){
		this.capacity = capacity;
		this.loadFactor = 0.75;
		this.length = 0;
		this.arr = new Array(this.capacity).fill(null).map(() => new linkedList());
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
		if(this.getLength() >= (this.capacity*this.loadFactor)){
			console.log('');
			console.log("*".repeat(50));
			console.log("Entry limit exceeded hence, resizing and rehashing the hashmap");
			this.resizingHash();
		}
	
		const hashcode = this.hash(key);
		if(!(this.arr[hashcode].contains(key))){ //if the value is not contained 
			this.arr[hashcode].append(key,value);
			++this.length;
			console.log("New value was added~");
		}else{
			const index = this.arr[hashcode].findIndex(key); //if the value is already present
			this.arr[hashcode].insertValueAt(value,index);
			console.log("Old value was overwritten~");
		}
	}

	resizingHash(){
		const newCapacity = this.capacity*2;
		const newArray = new Array(newCapacity).fill(null).map(item => new linkedList()); //double the capacity of the old array
		this.length = 0;
		this.capacity = newCapacity;

		//go through each bucket and rehash the keys
		this.arr.forEach(item => {
			if(item.size !== 0){
				let temp = item.head;
				while(temp !== null){
					const hashcode = this.hash(temp.key) % newCapacity;
					newArray[hashcode].append(temp.key,temp.value);
					++this.length;
					temp = temp.nextNode;
				}
			}
		})

		this.arr = newArray;
	}

	remove(key){
		const hashcode = this.hash(key);
		if(this.arr[hashcode].contains(key)){
			
		}
		return false;
	}

	//return the numner of stored keys
	getLength(){
		return this.length;
	}


	//clear the entire hashmap
	clear(){
		this.capacity = 5;
		this.length = 0;
		this.arr = new Array(this.capacity).fill(null).map(item => new linkedList());
		console.log("hashmap cleared");
	}



	display(){
		return this.arr;
	}
}

const test = new hashMap();
test.set("shivane",1);
test.set('anuj',123);
test.set("sameer",32);
test.set("manas",90);
console.log(test.remove("salkdjfl"));