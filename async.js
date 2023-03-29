//Example for callback and Async Await function
let present = [1, 2, 3];

(getName = () => {
    setTimeout(() => {
        let output = '';
        present.forEach((present) => {
            output = + `${present}`;
            console.log(output);
        })

    }, 2000);
})
//function to set a new number                             
function setNumber(none) {                                      //setNumber(none,callback)
    setTimeout(() => {                                          //callback()
        //push the new element to thee existing array            
        present.push(none)
    }, 1000)
}
// .......setNumber(56,getName);

//Asyn Await funtion
async function aa() {
    await setNumber(100)
    getName()
}
aa();
