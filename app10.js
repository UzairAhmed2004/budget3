//First input box
const totalAmount = document.getElementById("write-amount1");
const firstButton = document.getElementById("button-1");
//second input box
const writeExpense = document.getElementById("write-expense");
const costExpense = document.getElementById("cost-expense");
const inputDate = document.getElementById("date-1");
const secondButton = document.getElementById("button-2");
//Balance list;
const currentBalance = document.getElementById("current-balance");
const expenseBalance = document.getElementById("expense-balance");
const remainingBalance = document.getElementById("remaining-balance");
//Expense List;
const explist = document.getElementById("expenselist")

let localAmount = 0;
firstButton.addEventListener("click" , ()=> {
  localAmount = totalAmount.value;
 currentBalance.innerHTML = localAmount;
 remainingBalance.innerHTML = localAmount- expenseBalance.innerText;
 totalAmount.value = "";
});
// create list
function listAppend( expenseName , expenseValue , expDate ){
    let contentDiv = document.createElement("div");
    contentDiv.classList.add("contentDiv" , "decorate1");
    explist.appendChild(contentDiv);
    contentDiv.innerHTML = `<h3 class="product">${expenseName}</h3>
      <h3 class="amount">${expenseValue}</h3><h3 class="date">${expDate}</h3>`;
    //  create delete button 
      let btn = document.createElement("button");
      btn.innerHTML=`<i class="fa-solid fa-trash-can"></i>`
      contentDiv.appendChild(btn);

      document.getElementById("expenselist").appendChild(contentDiv);
      btn.addEventListener("click" , function(){
        contentDiv.remove();
      
    });
}
   secondButton.addEventListener("click" , ()=>{ 
    let expenditure = parseInt(costExpense.value);
    let sum = parseInt(expenseBalance.innerText) + expenditure;
    expenseBalance.innerText = sum;
    const totalBalance = tempAmount - sum;
   remainingBalance.innerText = totalBalance;
    listAppend( writeExpense.value , costExpense.value , inputDate.value );
    writeExpense.value = "";
    costExpense.value="";
    inputDate.value="";
  })
