const patients = [
    { id: 1, age: 45, gender: "Male", bp: 130, chol: 230, hr: 85, disease: "Yes" },
    { id: 2, age: 52, gender: "Female", bp: 145, chol: 250, hr: 92, disease: "Yes" },
    { id: 3, age: 39, gender: "Male", bp: 120, chol: 180, hr: 75, disease: "No" },
    { id: 4, age: 61, gender: "Female", bp: 155, chol: 270, hr: 95, disease: "Yes" },
    { id: 5, age: 48, gender: "Male", bp: 125, chol: 210, hr: 80, disease: "No" }
];

function analyzeData() {

    let total = patients.length;
    let diseaseYes = 0;
    let diseaseNo = 0;

    let ageSum = 0;
    let bpSum = 0;
    let cholSum = 0;

    let table = "";

    for (let p of patients) {

        ageSum += p.age;
        bpSum += p.bp;
        cholSum += p.chol;

        if (p.disease === "Yes") diseaseYes++;
        else diseaseNo++;

        table += `
        <tr>
            <td>${p.id}</td>
            <td>${p.age}</td>
            <td>${p.gender}</td>
            <td>${p.bp}</td>
            <td>${p.chol}</td>
            <td>${p.hr}</td>
            <td>${p.disease}</td>
        </tr>`;
    }

    document.getElementById("tableData").innerHTML = table;

    document.getElementById("total").innerText = total;
    document.getElementById("diseaseYes").innerText = diseaseYes;
    document.getElementById("diseaseNo").innerText = diseaseNo;

    document.getElementById("avgAge").innerText = (ageSum / total).toFixed(2);
    document.getElementById("avgBP").innerText = (bpSum / total).toFixed(2);
    document.getElementById("avgChol").innerText = (cholSum / total).toFixed(2);
}

window.onload = analyzeData;
const patients = [
    { id: 1, age: 45, gender: "Male", bp: 130, chol: 230, hr: 85, disease: "Yes" },
    { id: 2, age: 52, gender: "Female", bp: 145, chol: 250, hr: 92, disease: "Yes" },
    { id: 3, age: 39, gender: "Male", bp: 120, chol: 180, hr: 75, disease: "No" },
    { id: 4, age: 61, gender: "Female", bp: 155, chol: 270, hr: 95, disease: "Yes" },
    { id: 5, age: 48, gender: "Male", bp: 125, chol: 210, hr: 80, disease: "No" },
    { id: 6, age: 36, gender: "Female", bp: 118, chol: 170, hr: 72, disease: "No" },
    { id: 7, age: 58, gender: "Male", bp: 160, chol: 290, hr: 98, disease: "Yes" }
];

function analyzeData() {

    let total = patients.length;
    let yes = 0,
        no = 0;

    let ageSum = 0;
    let bpSum = 0;
    let cholSum = 0;

    let table = "";

    for (let p of patients) {

        ageSum += p.age;
        bpSum += p.bp;
        cholSum += p.chol;

        if (p.disease === "Yes") yes++;
        else no++;

        table += `
        <tr>
            <td>${p.id}</td>
            <td>${p.age}</td>
            <td>${p.gender}</td>
            <td>${p.bp}</td>
            <td>${p.chol}</td>
            <td>${p.hr}</td>
            <td>${p.disease}</td>
        </tr>`;
    }

    document.getElementById("tableData").innerHTML = table;

    document.getElementById("total").innerText = total;
    document.getElementById("diseaseYes").innerText = yes;
    document.getElementById("diseaseNo").innerText = no;
    document.getElementById("avgAge").innerText = (ageSum / total).toFixed(2);
    document.getElementById("avgBP").innerText = (bpSum / total).toFixed(2);
    document.getElementById("avgChol").innerText = (cholSum / total).toFixed(2);

    drawCharts(yes, no, patients);
}

/* ---------------- CHARTS ---------------- */

function drawCharts(yes, no, patients) {

    // PIE CHART
    new Chart(document.getElementById("pieChart"), {
        type: "pie",
        data: {
            labels: ["Heart Disease", "Healthy"],
            datasets: [{
                data: [yes, no],
                backgroundColor: ["red", "green"]
            }]
        }
    });

    // BAR CHART (BP)
    new Chart(document.getElementById("barChart"), {
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

window.onload = analyzeData;