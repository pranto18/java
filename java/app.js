let numFan = Number(prompt("Please Enter the number of fan"));
let numLight = Number(prompt("Please Enter the number of light"));
let numFridge =Number(prompt("Please Enter the number of fridge"));

let perwattcost=4.14
let totalWatt=(numFan*30)+(numLight*15)+(numFridge*300)
totalBill=(totalWatt*4.14)

let user=`pranto`

function electricbill(numFan,numLight,numFridge){
    let totalWatt=(numFan*30)+(numLight*15)+(numFridge*300)
    totalBill=(totalWatt*4.14)

}
console.log(`${user},Your Total Use Wattage is${totalWatt} Watt, <br> Total Electricity Bill is ${totalBill} TK.`);
document.write(` ${user}, Your Total Use Wattage is ${totalWatt} Watt, <br>  Total Electricity Bill is ${totalBill} TK.`);