const form = document.getElementById("transaction-form");
const transactionList = document.getElementById("transaction-list");
const descriptionInput = document.getElementById("description");
const amountInput = document.getElementById("amount");
const categoryInput = document.getElementById("category");

let transactions = JSON.parse(localStorage.getItem("transactions")) || [];

// Add transaction
form.addEventListener("submit", function (e) {
    e.preventDefault();
    
    const transaction = {
        id: Date.now(),
        description: descriptionInput.value,
        amount: parseFloat(amountInput.value),
        category: categoryInput.value
    };

    transactions.push(transaction);
    localStorage.setItem("transactions", JSON.stringify(transactions));

    descriptionInput.value = "";
    amountInput.value = "";

    updateUI();
});

// Update UI
function updateUI() {
    transactionList.innerHTML = "";
    
    transactions.forEach(transaction => {
        const li = document.createElement("li");
        li.innerHTML = `${transaction.description} - ₹${transaction.amount} 
                        <span style="color:${transaction.category === 'income' ? 'green' : 'red'}">
                        ${transaction.category.toUpperCase()}
                        </span>`;
        transactionList.appendChild(li);
    });

    updateChart();
}

// Initial UI update
updateUI();