
//diff_between_block_and_functional_scope();
diff_dtypes_operations();
//variabes declared with let and const have blocked scope 
//while those declared with var have functional scope

function diff_between_block_and_functional_scope(){
    if("a"=="a"){
        let testing_let=8;
        var testing_var=8
    }
    console.log(testing_var );
    console.log(testing_let);
    
}
// a blocked scope means the block in which the function is declared for eg. in here it is declared insid the 
//if block so its purpose is restricted till that block itself

//while var is accesible throughhout the function it is declared

//const once declared can't have its value changed
//you can redeclare var variable but you can't do it in case of let

//you can change/update the value assigned to let and var variables but not in case of const

function diff_dtypes_operations(){
    let a=3;
    console.log(a+" and type is "+typeof(a))
    //! When adding a number and a string, JavaScript will treat the number as a string.
    a=3+"3"
    console.log(a+" and type is "+typeof(a))
    a="3"+3
    console.log(a+" and type is "+typeof(a))
    a=3-"3"
    //! When substracting a number and a string, JavaScript will treat the string as a number.
    console.log(a+" and type is "+typeof(a))
    a= 16 + 4 + "Volvo";
    //!JavaScript evaluates expressions from left to right. Different sequences can produce different results
    console.log(a+" and type is "+typeof(a))
    
}


//*You can access var variables before initialisation but not let and const
console.log(y);
console.log(x)
let x;
var y=5;
