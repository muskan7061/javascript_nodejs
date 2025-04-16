// What is difference between let and var give practical example?

// var
// can reassign and redecleared and funtion scope 
{
    var a = 10
    function myFun() {
        var a = 20
        console.log("a:", a);

        if (a > 0) {
            console.log("a:", a);

        }

    }
    myFun()
}

// let block scoope only reassign 
{
    let a = 20
    function myLet(){
        console.log(a);
        a = 30 // can reassign 
        if(a>0)
        {
            let  c = 20
            console.log("value of a:",a);
            
        }
        // console.log(c); //ReferenceError: c is not defined
        
    }
    myLet()
}

// const 
{
    // cant reassign and redecleared and blocked scope 
    const a = 20 
    // const a = 30  //SyntaxError: Identifier 'a' has already been declared
    console.log(a);
    

}