export const hashmap = (function(){

    let capacity = 16;
    let loadFactor = 0.75;

    // function for hashing key into corresponding output
    function hash(key){
        let code = 0;
        const primeNumber = 11;
        for(let i = 0;i < key.length;i++){
            code = primeNumber * (code + key.charCodeAt(i));
        }
        return code;
    }

    // set key,value pair in key index
    function set(key,value){

    }

    // return value at key index
    function get(key){

    }

    // length

    return{
        hash,
    }
})