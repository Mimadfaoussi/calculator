function add(nb1,nb2)
{
    return nb1+nb2;
}

function subtract(nb1,nb2)
{
    return (nb1-nb2);
}
    

function multiply(nb1,nb2)
{
    return nb1*nb2;
}
    

function divide(nb1,nb2)
{
    if(nb2 != 0)
    {
        return (nb1/nb2);
    }
        
    return "ERROR";
}


let nb1 = null;
let operator = '';
let nb2 = null;
let valnb2="";
let screen = "";
let boolequal = false;

function operate(operator,nb1,nb2)
{
    if(operator == '+')
        return add(nb1,nb2);
    if(operator == '-')
        return subtract(nb1,nb2);
    if(operator == 'x')
        return multiply(nb1,nb2);
    if(operator == '/')
        return divide(nb1,nb2);
}


const display = document.querySelector("#display");
let boolnb1 = false;

display.textContent = "";

const btns = document.querySelector(".btns");

btns.addEventListener("click",(event)=>{
    if (event.target.classList.contains("number")) {
        if(boolequal == true)
        {
            display.textContent = "";
            nb1 = null;
            nb2 = null;
            boolnb1 = false;
            valnb2 = "";
            boolequal = false;
        }

        if(boolnb1 == false)
        {
            let btnvalue = event.target.textContent;
            display.textContent = display.textContent + btnvalue;
            console.log("creating nb1");
            nb1 = Number(display.textContent);

        }
        else
        {
            let btnvalue = event.target.textContent;
            valnb2 = valnb2 + btnvalue;
            display.textContent = display.textContent + btnvalue;
            nb2 = Number(valnb2);
        }
    }


    if(event.target.classList.contains("operator"))
    {
        boolnb1 = true;
        operator = event.target.textContent;
        display.textContent = display.textContent + "   "+operator + "  "

    }

    if(event.target.classList.contains("equal"))
    {
        if(nb1 != null && nb2 != null)
        {
            console.log("this is it : ",nb1,nb2)
            display.textContent = operate(operator,nb1,nb2);
            let x = operate(operator,nb1,nb2);
            console.log(x);
            boolequal = true;
        }
    }

    if(event.target.classList.contains("clear"))
    {
        display.textContent = "";
        nb1 = null;
        nb2 = null;
        boolnb1 = false;
        valnb2 = "";
    }

});