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
