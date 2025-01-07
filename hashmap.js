/* if (index < 0 || index >= buckets.length) {
  throw new Error("Trying to access index out of bounds");
} */

  const hashMap = (function(){
	let capacity = 0;
	let loadFactor = 0;
	const hashArray = [];
	
	//hashes input into corresponding output
	function hash(key){
		let code = 0;
		const primeNumber = 17;
		for(let i = 0;i < key.length;i++){
			code = primeNumber * (code + key.charCodeAt(i));
			code = code%16;
		}
		return code;
	}
	
	//check for key and insert key and value
	function set(key,value){
		const code = hash(key); //generate hash code from given key
		if(hashArray[code] !== undefined){
			
		}
	}
	
	//return value at index or null 
	function get(key){
		
	}
	
	//
	//check for

	return{
		hash,
	}
})();

console.log(hashMap.hash("Shineav"))