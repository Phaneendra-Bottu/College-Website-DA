function getInputValue(){

    let inputVal=document.getElementById("uid").value;
    let a=1;

    if(inputVa%2 == 0)
    {
        document.getElementById("demo").innerHTML ="No Records Found";
        document.getElementById("demo1").innerHTML ="0";  
    }
    else if(inputVal%3 == 0)
    {
        document.getElementById("demo").innerHTML ="TRUPTKUMAR GIRISHBHAI BARIA";
        document.getElementById("demo1").innerHTML ="10000";   
    }

    else if(inputVal%5 == 0)
    {
        document.getElementById("demo").innerHTML ="JAY VIJAYKUMAR BHANUSHALI";
        document.getElementById("demo1").innerHTML ="10000";   
    }
    else if(inputVal%7 == 0)
    {
        document.getElementById("demo").innerHTML ="NIRAVKUMAR AMIRAMBHAI CHAUHAN";
        document.getElementById("demo1").innerHTML ="20000";   
    }
    else if(inputVal%11 == 0)
    {
        document.getElementById("demo").innerHTML ="JAYDIP VASANTKUMAR GOMTIVAL";
        document.getElementById("demo1").innerHTML ="0";   
    }
    else if(inputVal%13 == 0)
    {
        document.getElementById("demo").innerHTML ="TAUHID MAHAMMADTALHA JUNAKIYA";
        document.getElementById("demo1").innerHTML ="7500";   
    }  
    else{
        document.getElementById("demo").innerHTML ="No Records Found";
        document.getElementById("demo1").innerHTML ="0";
    }
    
}

