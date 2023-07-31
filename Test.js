let arr = [1,2,3,4,5,6,7,8,9,10]
let K = 5		
// Output:3

function subsetOfSum(arr ,sub){
    let count = 0;
    for(let i = 0; i<arr.length; i++){
        // this is worst case when we are considering this
        // if(arr[i] === sub){
        //     count = count + 1
        // }
        for(let j = 0; j<i; j++ ){
            if(arr[i] + arr[j] === sub){
                count = count+1;
            }
        }
    }
    return count;

}

console.log(subsetOfSum(arr , K));

