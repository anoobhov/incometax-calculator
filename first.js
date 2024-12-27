document.getElementById("tax-form").addEventListener("submit", (event) =>   {
    event.preventDefault();

    const income = parseFloat(document.getElementById("income").value);
    const result = document.getElementById("result");

    if (isNaN(income) || income < 0) {
        result.textContent = "Please enter a valid income.";
        return;
    }

    let tax = 0;
    if (income <= 250000) {
        tax = 0; 
    } else if (income <= 500000) {
        tax = (income - 250000) * 0.05; // 5% tax for income between 2,50,001 and 5,00,000
    } else if (income <= 1000000) {
        tax = (250000 * 0.05) + ((income - 500000) * 0.2); // 20% tax for income between 5,00,001 and 10,00,000
    } else {
        tax = (250000 * 0.05) + (500000 * 0.2) + ((income - 1000000) * 0.3); // 30% tax for income above 10,00,000
    }

    result.textContent = `Your calculated tax is: ₹${tax.toFixed(2)}`;
});

let darkmode = false
const container = document.querySelector('.calculator-container')
const h1=document.querySelector('.h1')
document.querySelector('.btn').addEventListener('click',()=>{
    if(darkmode==false)
    {
        darkmode=true
        document.body.style.backgroundColor='black'
        container.style.backgroundColor='rgb(65, 63, 63)'
        container.style.color='white'
        h1.style.color='white'
        result.style.color='white'
    }
    else
    {
        darkmode=false
        document.body.style.backgroundColor='#f9fafb'
        container.style.backgroundColor='#ffffff'
        container.style.color='black'
        h1.style.color='#444'
        result.style.color='black'
    }
})