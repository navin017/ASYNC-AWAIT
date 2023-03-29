



// let a = new Promise((resolve,reject)=>{
//     let b = 2+2;
//     if(b==4){
//         resolve('kkk')
//     }
//     else{
//         reject()
//     }
// })
// a. then((message)=>{
//     console.log("yes "+ message)
// }).catch((message)=>{
//     console.log("no "+message)
// })
// .finally(()=>{
//     console.log("Completed")
// })

// let a = async((resolve,reject)=>{
//     let b = 2+2;
//     if(b==4){
//         resolve('kkk')
//     }
//     else{
//         reject()
//     }
// })
// a. then((message)=>{
//     console.log("yes "+ message)
// }).catch((message)=>{
//     console.log("no "+message)
// })
// .finally(()=>{
//     console.log("Completed")
// })
let present = [ 1,2,3];

(getName=()=>{
    setTimeout(()=>{
        let output = '';
        present.forEach((present)=>{
            output =+ `${present}`;
            console.log(output);
        })
    },1000);
})

function setName(none){
    return new Promise((resolve,reject)=>{
        setTimeout(()=>{
            present.push(none);
          
          const error= true;
          if(!error){
            resolve();
          }
          else{
            reject("wasted")
          }
        },500);
    })
   
}
setName(100)
.then(getName)
.catch(err => console.log(err));
