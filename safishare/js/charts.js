const firstChart = document.getElementById('firstChart');
const secondChart = document.getElementById('secondChart');
const thirdChart = document.getElementById('thirdChart');

const customFirstChart = new Chart(firstChart, {
  type: 'bar',
  data: {
    labels: ['Total de Tarefas', 'Tarefas Pendentes', 'Tarefas Concluídas'],
    datasets: [
      {
        label: '# de tarefas',
        data: [87, 60, 27],
        backgroundColor: [
          'rgba(54, 162, 235, 0.2)',
          'rgba(255, 99, 132, 0.2)',
          'rgba(75, 192, 192, 0.2)'
        ],
        borderColor: [
          'rgba(54, 162, 235, 1)',
          'rgba(255, 99, 132, 1)',
          'rgba(75, 192, 192, 1)'
        ],
        borderWidth: 1
      }
    ]
  },
  options: {
    responsive: true
  }
});

const customSecondChart = new Chart(secondChart, {
  type: 'line',
  data: {
    labels: ['Docs Recebidos', 'Docs Lidos', 'Docs Baixados'],
    datasets: [
      {
        label: '# de documentos',
        data: [87, 27, 60],
        backgroundColor: 'rgba(54, 162, 235, 0.2)',
        borderColor: 'rgba(54, 162, 235, 1)',
        fill: false,
        borderWidth: 2
      }
    ]
  },
  options: {
    responsive: true
  }
});

const customThirdChart = new Chart(thirdChart, {
  type: 'pie',
  data: {
    labels: [
      'Recebimento Pendentes',
      'Docs Recebidos',
      'Total de Docs a Receber'
    ],
    datasets: [
      {
        data: [60, 30, 10],
        backgroundColor: [
          'rgba(54, 162, 235, 0.2)',
          'rgba(255, 99, 132, 0.2)',
          'rgba(75, 192, 192, 0.2)'
        ],
        borderColor: [
          'rgba(54, 162, 235, 1)',
          'rgba(255, 99, 132, 1)',
          'rgba(75, 192, 192, 1)'
        ],
        borderWidth: 1
      }
    ]
  },
  options: {
    responsive: true
  }
});
