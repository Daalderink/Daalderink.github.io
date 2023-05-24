// hieronder is de uitwerking
const playButton = document.querySelector(".play-button");
const sound = document.querySelector(".victory-sound")

function playVictorySound(){
  sound.play()
}

playButton.addEventListener("click", playVictorySound)

// hieronder is er gewerkt met chart js

const chartCanvas = document.querySelector("canvas.chart");

function createChart(canvasElement) {
  new Chart(canvasElement, {
      
      type: 'line',
      data: {
          labels: ["Voorbeeld 1", "Voorbeeld 2", "Voorbeeld 3", "Voorbeeld 4", "Voorbeeld 5", "Voorbeeld 6"],
          datasets: [{
              label: 'Resultaat van chartjs',
              data: [5, 15, 40, 20, 90, 10],
              borderWidth: 1
          }]
      },
      options: {
          responsive: true,
          maintainAspectRatio: true,
          scales: {
              y: {
                  beginAtZero: true
              }
          }
      }
  });
}

createChart(chartCanvas)