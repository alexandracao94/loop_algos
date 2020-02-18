// Take your previous solutions and write them using the other kind of loop.  
// I.E.  If you wrote both of your algorithms using for loops, now write them out with while loops


// YOUR CODE HERE

var x = 0;
while(x<=30){ 
    x++;
    if (x%15==0){
        console.log("FizzBuzz")
    }
    else if(x%3==0){
        console.log("Fizz");
    } 
    else if(x%5==0){
        console.log("Buzz");
    } else{
            console.log(x);
}
}
