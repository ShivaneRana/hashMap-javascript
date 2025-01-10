import { linkedList, node } from "./linkedList.js";

class hashMap{
	constructor(capacity = 16){
		this.capacity = capacity;
		this.loadFactor = 0.75;
		this.length = 0;
		this.keysArray = [];
		this.valuesArray = []
		this.keysValuesArray = [];
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
			this.keysArray.push(key);
			this.valuesArray.push(value);
			this.keysValuesArray.push([key, value]);
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
		this.keysArray = [];
		this.valuesArray = [];
		this.keysValuesArray = [];
		this.capacity = newCapacity;

		//go through each bucket and rehash the keys
		this.arr.forEach(item => {
			if(item.size !== 0){
				let temp = item.head;
				while(temp !== null){
					const hashcode = this.hash(temp.key) % newCapacity;
					newArray[hashcode].append(temp.key,temp.value);
					this.keysArray.push(temp.key);
					this.valuesArray.push(temp.value);
					this.keysValuesArray.push([temp.key, temp.value]);
					++this.length;
					temp = temp.nextNode;
				}
			}
		})

		this.arr = newArray;
	}

	// if the hashMap contains the key return true else false
	has(key){
		const hashCode = this.hash(key);
		if(this.arr[hashCode].contains(key)) return true;
		return false;
	}

	//return the value of the key
	get(key){
		if(this.has(key) === false){
			return null;
		}
		const hashCode = this.hash(key);
		const bucket = this.arr[hashCode];
		let temp = bucket.head;
		while(temp !== null){
			if(temp.key === key){
				return temp.value;
			}
			temp = temp.nextNode;
		}

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

	//return all the keys present in the hashmap
	keys(){
		return this.keysArray;
	}
	
	//return all the values present in the hashmap
	values(){
		return this.valuesArray;
	}

	//return all the keys and values in the hashmap in pair
	entries(){
		return this.keysValuesArray;
	}

	display(){
		return this.arr;
	}
}

const test = new hashMap();
test.set('apple', 'red')
test.set('banana', 'yellow')
test.set('carrot', 'orange')
test.set('dog', 'brown')
test.set('elephant', 'gray')
test.set('frog', 'green')
test.set('grape', 'purple')
test.set('hat', 'black')
test.set('ice cream', 'white')
test.set('jacket', 'blue')
test.set('kite', 'pink')
test.set('lion', 'golden')
console.log(test.keys());
console.log(test.values());
console.log(test.entries());