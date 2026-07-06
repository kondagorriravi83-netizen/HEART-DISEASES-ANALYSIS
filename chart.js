let pieChartInstance;
let barChartInstance;

function drawCharts(yes, no, patients) {

    // Destroy old charts (IMPORTANT FIX)
    if (pieChartInstance) pieChartInstance.destroy();
    if (barChartInstance) barChartInstance.destroy();

    // PIE CHART
    pieChartInstance = new Chart(document.getElementById("pieChart"), {
        type: "pie",
        data: {
            labels: ["Disease", "Healthy"],
            datasets: [{
                data: [yes, no],
                backgroundColor: ["red", "green"]
            }]
        }
    });

    // BAR CHART
    barChartInstance = new Chart(document.getElementById("barChart"), {
        type: "bar",
        data: {
            labels: patients.map(p => "P" + p.id),
            datasets: [{
                label: "Blood Pressure",
                data: patients.map(p => p.bp),
                backgroundColor: "blue"
            }]
        }
    });
}
a;