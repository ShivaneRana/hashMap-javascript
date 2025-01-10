export class node{
	constructor(key = null,value = null,nextNode = null){
		this.key = key;
		this.value = value;
		this.nextNode = nextNode;
	}
}

export class linkedList{
	constructor(){
		this.head = null;
		this.tail = null;
		this.size = 0;
	}

	// add value to the linkedList
	append(key,value){
		const newNode = new node(key,value);
		if(this.head === null){
			this.head = newNode;
			this.tail = newNode;
		}else{
			this.tail.nextNode = newNode;
			this.tail = newNode;
		}
		++this.size;
	}

	//insert a value in a paticular index
	//utilized when the index and key are same
	insertValueAt(value,index){
		let temp = this.head;
		if(index === 0){
			this.head.value = value;
		}else{
			for(let i = 0;i < index;i++){
				temp = temp.nextNode;
			}
			temp.value = value;
		}
	}

	// check if a key exist
	contains(key){
		let temp = this.head;
		while(temp !== null){
			if(temp.key === key){
				return true;
			}
			temp = temp.nextNode;
		}
		return false;
	}

	//find the index of paticular key
	findIndex(key){
		let index = 0;
		if(this.head.key === key){
			return index;
		}else{
			let temp = this.head;
			while(temp !== null){
				if(temp.key === key) return index;
				temp = temp.nextNode;
				++index;
			}
		}
		console.log("the key does not exist");
		return null;
	}

	//return head
	getHead(){
		return this.head;
	}

	//return tail
	getTail(){
		return this.tail;
	}

	//return key at paticular index
	getKeyAtindex(index){

		if(index >= this.size || index < 0){
			return "out of scope";
		}else{
			let temp = this.head;
			if(index === 0){
				return this.getHead().key;
			}
	
			if(index === this.size-1){
				return this.getTail().key;
			}

			for(let i = 0;i < index;i++){
				temp = temp.nextNode;
			}
			return temp.key;
		}
	}

	// return value at paticular index
	getValueAtindex(index){
		if(index >= this.size || index < 0){
			return "out of scope";
		}else{
			let temp = this.head;
			if(index === 0){
				return this.getHead().value;
			}
	
			if(index === this.size-1){
				return this.getTail().value;
			}
			for(let i = 0;i < index;i++){
				temp = temp.nextNode;	
			}
			return temp.value;
		}
	}

	// get the size of the linkedlist
	getSize() {
		return this.size;
	}

	//display the entire linked list
	display(){
		let temp = this.head;
		while(temp !== null){
			console.log(`${temp.key}:${temp.value}`);
			temp = temp.nextNode;
		}
	}
}
