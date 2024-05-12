#! /usr/bin/env node
import inquirer from "inquirer"
let mybalance = 10000;// 

let mypin = 1123;

let pinAnswer = await inquirer.prompt(
  [
    {
      name:"pin",
      message:"enter your pin",
      type:"number",
    } 
  ]
);
if(pinAnswer.pin === mypin )
  {
        console.log("corecct pin code !!!");
        
        let oprationAns =await inquirer.prompt(
          [
            {
                    name:"opration",
                    message:"please select a option",
                    type:"list",
                    choices:["withdraw","cheack balance"],
                  } 
                ]
              );
              console.log(oprationAns);

              if(oprationAns.opration === "withdraw")
                {
                let amountAns = await inquirer.prompt(
                  [
                    {
                    name:"amount",
                    message:"enter your amount",
                    type:"number",
                    }
                  ]
                );
                mybalance -= amountAns.amount;
                console.log("your remaining balance is:" + mybalance )
            }
            else if(oprationAns.opration === "cheack balance"

            ){
              console.log("your balance is:"+ mybalance)
            }


}

else{
  console.log("incorrect pin");
  }






























