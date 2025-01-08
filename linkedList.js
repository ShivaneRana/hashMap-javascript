class node{
	constructor(key = null,value = null,nextNode = null){
		this.key = key;
		this.value = value;
		this.nextNode = nextNode;
	}
}

class linkedList{
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
			++this.size;
		}else{
			this.tail.nextNode = newNode;
			this.tail = newNode;
			++this.size;
		}
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
		return size;
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

const list = new linkedList();
list.append("shivane",21);
list.append("Anuj",212);
list.append("Priyanshu",356);
list.append("Akshit",676);