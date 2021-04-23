import React from "react";

interface  CounterProps{
    initialNumber?:number;
}
const Counter:React.FC<CounterProps> = (props) =>{
    let [counternumber,setCounterNumber]=React.useState(props.initialNumber||0);
    const addnumber =()=>{
        setCounterNumber(counternumber+1);
    }
    const  decreaseNumber=()=>{
        setCounterNumber(counternumber-1);
    }
    const constNumber=()=>
    {
        setCounterNumber(counternumber=10);
    }
    const text =()=>
    {
        if(counternumber>10 && counternumber<15)
        {
            return(
            <p>Liczba jest większa od 10</p>
            );
        }
        else if(counternumber<-10)
        {
            return(
            <p>Liczba jest mniejsza od -10</p>
            );
        }
        else if(counternumber>=15)
        {
            return(
                <p>Liczba przekroczona</p>
            );
        }



    }

return(
    <div>
        <button onClick={addnumber} >+</button>
        {counternumber}
        <button onClick={decreaseNumber}>-</button>
        <button onClick={constNumber}>domyslna</button>
        {text()}



    </div>
);
};
export default  Counter;
