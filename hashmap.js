const hashMap = (function(){
	let capacity = 16;
	let loadFactor = 0.75;
	let length = 0;
	const hashArray = [];

	//hashes input into corresponding output
	function hash(key){
		let code = 0;
		const primeNumber = 17;
		for(let i = 0;i < key.length;i++){
			code = primeNumber * (code + key.charCodeAt(i));
			code = code%capacity;
		}
		return code;
	}

	function set(key,value){
		const index = hash(key);
		if(hashArray[index] === undefined){
			hashArray[index] = {key:key,value:value};
			++length;
		}
		else{
			hashArray[index] = {key:key,value:value};
		}
	}

	return{
		hash,
	}
})();

console.log(hashMap.hash("shivane"))