function add(nb1,nb2)
{
    return nb1+nb2;
}

function subtract(nb1,nb2)
    return nb1-nb2;

function multiply(nb1,nb2)
    return nb1*nb2;

function divide(nb1,nb2)
{
    if(b != 0)
        return nb1/nb2;
    return "ERROR";
}

let nb1;
let operator;
let nb2;

function operate(operator,nb1,nb2)
{
    if(operator == '+')
        return add(nb1,nb2);
    if(operator == '-')
        return subtract(nb1,nb2);
    if(operator == '*')
        return multiply(nb1,nb2);
    if(operator == '/')
        return divide(nb1,nb2);
}

