const ctx = document.getElementById("financeChart").getContext("2d");

let financeChart;

// Update Chart
function updateChart() {
    const income = transactions
        .filter(t => t.category === "income")
        .reduce((sum, t) => sum + t.amount, 0);

    const expense = transactions
        .filter(t => t.category === "expense")
        .reduce((sum, t) => sum + t.amount, 0);

    if (financeChart) financeChart.destroy();

    financeChart = new Chart(ctx, {
        type: "doughnut",
        data: {
            labels: ["Income", "Expenses"],
            datasets: [{
                data: [income, expense],
                backgroundColor: ["green", "red"]
            }]
        }
    });
}
