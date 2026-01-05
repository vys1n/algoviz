export let isVisualizationRunning = false;

export function generateRandomArray(size) {
  return Array.from({ length: size }, () => Math.floor(Math.random() * 100) + 1);
}

export function createArrayBars(array) {
  const container = document.getElementById('arrayContainer');
  container.innerHTML = '';
  
  const maxValue = Math.max(...array);
  array.forEach(value => {
    const barContainer = document.createElement('div');
    barContainer.className = 'bar-container';
    
    const bar = document.createElement('div');
    bar.className = 'array-bar';
    bar.style.height = `${(value / maxValue) * 100}%`;
    bar.setAttribute('data-value', value);
    
    const label = document.createElement('div');
    label.className = 'bar-label';
    label.textContent = value;
    
    barContainer.appendChild(bar);
    barContainer.appendChild(label);
    container.appendChild(barContainer);
  });
}

export function sleep(ms) {
  return new Promise((resolve, reject) => {
    if (!isVisualizationRunning) {
      reject(new Error('Visualization stopped'));
      return;
    }
    setTimeout(resolve, ms);
  });
}

export async function updateVisuals(array, comparing = [], sorted = []) {
  const bars = document.querySelectorAll('.array-bar');
  const labels = document.querySelectorAll('.bar-label');
  const maxValue = Math.max(...array);
  
  bars.forEach((bar, index) => {
    bar.style.height = `${(array[index] / maxValue) * 100}%`;
    bar.setAttribute('data-value', array[index]);
    bar.className = 'array-bar';
    labels[index].textContent = array[index];
    
    if (comparing.includes(index)) {
      bar.classList.add('comparing');
    }
    if (sorted.includes(index)) {
      bar.classList.add('sorted');
    }
  });
}

export function updateStats(comparisons, swaps, time) {
  document.getElementById('comparisons').textContent = `Comparisons: ${comparisons}`;
  document.getElementById('swaps').textContent = `Swaps: ${swaps}`;
  document.getElementById('time').textContent = `Time: ${time}ms`;
}

export function resetStats() {
  updateStats(0, 0, 0);
}

export function stopVisualization() {
  isVisualizationRunning = false;
}

export function startVisualization() {
  isVisualizationRunning = true;
}
