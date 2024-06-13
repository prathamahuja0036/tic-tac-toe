function updatevalue(){
    const locationvalue = document.getElementById("location").value;
    const servicevalue = document.getElementById("services").value;

    // if(locationvalue==0 || servicevalue==0)
    // {
    //     document.getElementById("printvalue").innerHTML="0";
    //     document.getElementById("servces").value=0;
    // }
    // else{
    //     const price = calculate(locationvalue,servicevalue);
    //     if(price==0)
    //     {
    //         document.getElementById("printvalue").innerHTML=`for pricing -contact us`
    //     }
    //     else{
    //         document.getElementById('printvalue').innerHTML=`your price${price.tofixed(2)}`;
    //     }
    // }
    
    const a=calculateprice(locationvalue,servicevalue);
    console.log(a);
}

function calculateprice(location,servces){
    const prices={
        '1':{'1':1999,'2':1499,'3':1799,'4':2099,'5':1599,'6':1599,'7':1599,'8':1599},
        '2':{'1':2199,'2':1699,'3':1999,'4':2299,'5':1799,'6':1599,'7':1599,'8':1599},
        '3':{'1':2399,'2':1899,'3':2199,'4':2499,'5':1999,'6':1599,'7':1599,'8':1599},
        '4':{'1':2599,'2':2099,'3':2399,'4':2699,'5':2199,'6':1599,'7':1599,'8':1599},
        '5':{'1':2799,'2':2299,'3':2599,'4':2899,'5':2399,'6':1599,'7':1599,'8':1599},
        '6':{'1':2799,'2':2299,'3':2599,'4':2899,'5':2399,'6':1599,'7':1599,'8':1599},
    };
    return prices[location][servces];
}