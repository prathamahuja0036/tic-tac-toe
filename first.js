// // console.log("hello world!");
// // //arihmetic operators
// // let a=5;
// // let b=2;
// // console.log("a=",a,"b=",b)
// // console.log("a+b=",a+b);
// // console.log("a-b=",a-b);
// // console.log("a*b=",a*b);
// // console.log("a/b=",a/b);
// // console.log("a%b=",a%b);
// // console.log("a**b=",a**b);

// // let number=prompt("enter a number");
// // if(number%5==0)
// // {
// //     console.log(number,"is multiple of 5")
// // }
// // else{
// //     console.log(number,"is not multiple of 5")
// // }
// // let score=prompt("enter ur marks:");
// // if(score>=90 && score<=100)
// // {
// //     console.log("A")
// // }
// // else if(score>=70 && score<=89)
// // {
// //     console.log("B")
// // }
// // else if(score>=60 && score<=69)
// // {
// //     console.log("C")
// // }
// // else if(score>=50 && score<=59)
// // {
// //     console.log("D")
// // }
// // else if(score>=0 && score<=49)
// // {
// //     console.log("F")
// // }

// //string length calculate

// // let str="pratham ahuja";
// // let length=0;
// // for(let i of str)
// // {
// //     console.log("i=",i);
// //     length++;
// // }
// // console.log("length=",length);

// //for in loop
// // let student={
// //     name:"pratham",
// //     age:25,
// //     ispass:true,
// // };
// // for(let i in student)
// // {
// //     console.log("i=",i,"value=",student[i]);
// // }
// //print all the even num from 0-100

// //for(let i=0;i<=100;i++)
// // {
// //     if(i%2==0)
// //     {
// //         console.log(i);
// //     }
// // }

// //create a game where u start with any number .ask user to enter the number untill user enters correct number

// // let num=36;
// // let usernum=prompt("Guess the number:");
// // while(num!=usernum){
// //     usernum=prompt("you entered a wrong number ,Guess the number again:");
// // }
// // console.log("congratulations ! u entered the correct number")

// //string
// //let i="helloworld";

// //template lterals
// // let obj={
// // item:"pen",
// // price:100,
// // }
// // //console.log("the cost of",obj.item,"is",obj.price,"ruppees")
// // let output=`the cost of ${obj.item} is ${obj.price} ruppess`;
// // console.log(output);/

//  //practise q
// // let fullname=prompt("Enter your Full Name without spaces:");
// // let username="@"+fullname+fullname.length;
// // console.log(username);

// //array practise avg marks of class

// // let marks=[85,97,44,37,76,60];
// // let sum=0;
// // for(let val of marks)
// // {
// //     sum=sum+val;
// // }
// // let avg=sum/marks.length;
// // console.log(`average marks of class is ${avg}`);

// //ques 2 for of loop
// // let items=[250,645,300,900,50];
// // let i=0;
// // for(let val of items)
// // {
// //     let offer=val / 10;
// //     items[i]=items[i]-offer;
// //     console.log(`value after discount =${items[i]}`)
// //   i++;
// // }

// //for loop
// // let items=[250,645,300,900,50];
// // for(let i=0;i<items.length;i++)
// // {
// // let offer=items[i]/10;
// // items[i]=items[i]-offer;
// // }
// // console.log(items);

// //ques 3

// // let companies=["bloomberg","microsoft","uber","google","IBM","netflix"];
// // //companies.shift();
// // //companies.splice(2,1,"ola");
// // companies.push("amazon");
// // console.log(companies);

// //functions pq1

// function countVowels(str)
// {
//     let count=0;
// for(const char of str)
// {
//     if(char=="a" || char=="e" || char=="i" || char=="o" || char=="u")
//     {
//         count++;
//     }
   
// }
// console.log(count);
// }

// const countVow=(str)=>
// {
//     let count=0;
//     for(const char of str)
//     {
//         if(char=="a" || char=="e" || char=="i" || char=="o" || char=="u")
//         {
//             count++;
//         }
       
//     }
//     console.log(count);
// }

// //for each loops in array
// // let arr=[1,2,3,4,5];
// // arr.forEach((val)=>{
// //     console.log(val);
// // }
// // )

// //practise q2
// // let arr=[2,3,4,5,6];
// // arr.forEach((val)=>{
// //   console.log(val*val);
// // })

// //practise q3
// // let marks=[70,95,93,80,89,54];
// // let toppersArr= marks.filter((value)=>
// // {
// //     return value>90;
// // }
// // )
// // console.log(toppersArr);

// //q4
// // let n=prompt("Enter a number:");
// // let arr=[];
// // for(let i=1;i<=n;i++)
// // {
// // arr[i-1]=i;
// // }
// // console.log(arr);
// // let sum=arr.reduce((res,curr)=>{
// //   return res+curr;
// // })
// // console.log(sum);
// //product of array
// let n=prompt("Enter a number:");
// let arr=[];
// for(let i=1;i<=n;i++)
// {
// arr[i-1]=i;
// }
// console.log(arr);
// let product=arr.reduce((res,curr)=>{
//   return res*curr;
// })
// console.log(product);
document.getElementById("myform");
addEventListener("submit",function(event){
    event.preventDefault();
    var username=document.getElementById("username").value;
    var password=document.getElementById("password").value;
    console.log("username:"+username);
    console.log("password:"+password);
});
