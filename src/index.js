import "./styles/all";
import moment from "moment";
import { MDCDataTable } from "@material/data-table";
import students from "../students.json";
import {
    Chart,
    ArcElement,
    LineElement,
    BarElement,
    PointElement,
    BarController,
    BubbleController,
    DoughnutController,
    LineController,
    PieController,
    PolarAreaController,
    RadarController,
    ScatterController,
    CategoryScale,
    LinearScale,
    LogarithmicScale,
    RadialLinearScale,
    TimeScale,
    TimeSeriesScale,
    Decimation,
    Filler,
    Legend,
    Title,
    Tooltip,
    SubTitle
  } from 'chart.js';
  
  Chart.register(
    ArcElement,
    LineElement,
    BarElement,
    PointElement,
    BarController,
    BubbleController,
    DoughnutController,
    LineController,
    PieController,
    PolarAreaController,
    RadarController,
    ScatterController,
    CategoryScale,
    LinearScale,
    LogarithmicScale,
    RadialLinearScale,
    TimeScale,
    TimeSeriesScale,
    Decimation,
    Filler,
    Legend,
    Title,
    Tooltip,
    SubTitle
  );

let root = document.getElementById("root");

let container = document.createElement("div");
container.className = "container";
root.append(container);

container.innerHTML = `
<div class="mdc-data-table">
  <div class="mdc-data-table__table-container">
    <table class="mdc-data-table__table" aria-label="Dessert calories">
      <thead>
        <tr class="mdc-data-table__header-row">
          <th class="mdc-data-table__header-cell" role="columnheader" scope="col">Имя и фамилия студента</th>
          <th class="mdc-data-table__header-cell mdc-data-table__header-cell--numeric" role="columnheader" scope="col">Рейтинг</th>
          <th class="mdc-data-table__header-cell mdc-data-table__header-cell--numeric" role="columnheader" scope="col">Пол</th>
          <th class="mdc-data-table__header-cell" role="columnheader" scope="col">Дата рождения</th>
        </tr>
      </thead>
      <tbody class="mdc-data-table__content"></tbody>
    </table>
  </div>
</div>
`;
const dataTable = new MDCDataTable(document.querySelector(".mdc-data-table"));
console.log(dataTable);

students.forEach((student) => {
  const tableRow = document.createElement("tr");
  tableRow.className = "mdc-data-table__row";
  dataTable.content.append(tableRow);
  tableRow.innerHTML = `
    <th class="mdc-data-table__cell" scope="row">${student.name}</th>
    <td class="mdc-data-table__cell mdc-data-table__cell--numeric">${student.rating}</td>
    <td class="mdc-data-table__cell mdc-data-table__cell--numeric">${student.gender}</td>
    <td class="mdc-data-table__cell">${moment(student.birthday, "DD-MM-YYYY").format("YYYY-DD-MM")}</td>
  `;
});
let container_chart = document.createElement("div");
container_chart.className = "container_chart";
container.append(container_chart);
container_chart.innerHTML = `<canvas id="myChart"></canvas>`
var ctx = document.getElementById('myChart');
var rating =[];
var names =[];
students.forEach((student) =>{
    rating.push(student.rating) 
    names.push(student.name) 
})

rating.sort(function(a,b){
    return a - b;
});
const chart = new Chart(ctx, {
    type: 'bar',
    data: {
        labels: names,
        datasets: [{
            label: 'Рейтинг',
            data: rating,
            backgroundColor: [
                'rgba(255, 99, 132, 0.2)',
                'rgba(54, 162, 235, 0.2)',
                'rgba(255, 206, 86, 0.2)',
                'rgba(75, 192, 192, 0.2)',
                'rgba(153, 102, 255, 0.2)',
                'rgba(255, 159, 64, 0.2)'
            ],
            borderColor: [
                'rgba(255, 99, 132, 1)',
                'rgba(54, 162, 235, 1)',
                'rgba(255, 206, 86, 1)',
                'rgba(75, 192, 192, 1)',
                'rgba(153, 102, 255, 1)',
                'rgba(255, 159, 64, 1)'
            ],
            borderWidth: 1
        }]
    },
    options: {
        scales: {
            y: {
                beginAtZero: true
            }
        }
    }
});