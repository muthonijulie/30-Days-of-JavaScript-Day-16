function timeLimit(fn,t){
return async function(...args){
return new Promise((resolve,reject)=>{
    setTimeout(()=>{
        reject("Time Limit Exceeded");
    },t);
    fn(...args).then((results)=>resolve
(results)).catch((error)=>(error));

});
};
}
//example1
// const fn = async (n) => {
//        await new Promise(res => setTimeout(res, 100));
//         return n * n; };
//      const myFunc= timeLimit(fn,50);
//      myFunc([5]).then(results=>console.log(results))
//      .catch((error)=>console.log(error));

//example2
    //  const fn = async (n) => { 
    //       await new Promise(res => setTimeout(res, 100));
    //        return n * n; }
    //      const myFunc= timeLimit(fn,150);
    //  myFunc([5]).then(results=>console.log(results))
    //  .catch((error)=>console.log(error));

    //example 3
    // const fn = async ([a, b]) => { 
    //       await new Promise(res => setTimeout(res, 120));
    //        return a + b; }
    //      const myFunc= timeLimit(fn,150);
    //      myFunc([5,10]).then(results=>console.log(results))
    //      .catch((error)=>console.log(error));

    //example 4
         const fn = async () => {
               throw "Error"; } 
             const myFunc= timeLimit(fn,0);
         myFunc().then(results=>console.log(results))
         .catch((error)=>console.log(error));