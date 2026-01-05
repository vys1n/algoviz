import { generateRandomArray, createArrayBars, stopVisualization, startVisualization, resetStats } from './utils.js';
import { startVisualization as runVisualization } from './visualizer.js';
import { algorithmInfo } from './algorithmInfo.js';

export function initializeEventListeners() {
  const arraySizeInput = document.getElementById('arraySize');
  const currentSizeSpan = document.getElementById('currentSize');
  const generateArrayBtn = document.getElementById('generateArray');
  const customArrayInput = document.getElementById('customArray');
  const useCustomArrayBtn = document.getElementById('useCustomArray');
  const startVisualizeBtn = document.getElementById('startVisualization');
  const stopVisualizeBtn = document.getElementById('stopVisualization');
  const algorithmSelect = document.getElementById('algorithm');
  const searchInput = document.getElementById('searchInput');

  function updateAlgorithmInfo(algorithmKey) {
    const info = algorithmInfo[algorithmKey];
    const infoContainer = document.querySelector('.algorithm-info');
    
    if (!info) return;
    
    infoContainer.innerHTML = `
      <h3>${info.name}</h3>
      <div class="complexity-grid">
        <div class="complexity-item">
          <h4>Time Complexity</h4>
          <p>Best: ${info.timeComplexity.best}</p>
          <p>Average: ${info.timeComplexity.average}</p>
          <p>Worst: ${info.timeComplexity.worst}</p>
        </div>
        <div class="complexity-item">
          <h4>Space Complexity</h4>
          <p>${info.spaceComplexity}</p>
        </div>
      </div>
      <p class="algorithm-description">${info.description}</p>
    `;
  }

  // Show/hide search input and update algorithm info
  algorithmSelect.addEventListener('change', () => {
    const isSearchAlgorithm = ['linearSearch', 'binarySearch'].includes(algorithmSelect.value);
    searchInput.style.display = isSearchAlgorithm ? 'inline-block' : 'none';
    updateAlgorithmInfo(algorithmSelect.value);
  });

  // Initialize with default algorithm info
  updateAlgorithmInfo(algorithmSelect.value);

  // Update array size
  arraySizeInput.addEventListener('input', (e) => {
    const size = parseInt(e.target.value);
    currentSizeSpan.textContent = size;
    const array = generateRandomArray(size);
    createArrayBars(array);
  });

  // Generate new random array
  generateArrayBtn.addEventListener('click', () => {
    const size = parseInt(arraySizeInput.value);
    const array = generateRandomArray(size);
    createArrayBars(array);
  });

  // Use custom array
  useCustomArrayBtn.addEventListener('click', () => {
    const customArray = customArrayInput.value
      .split(',')
      .map(num => parseInt(num.trim()))
      .filter(num => !isNaN(num));
    
    if (customArray.length > 0) {
      createArrayBars(customArray);
      arraySizeInput.value = customArray.length;
      currentSizeSpan.textContent = customArray.length;
    }
  });

  // Start visualization
  startVisualizeBtn.addEventListener('click', async () => {
    const bars = document.querySelectorAll('.array-bar');
    const array = Array.from(bars).map(bar => 
      parseInt(bar.getAttribute('data-value'))
    );
    
    const algorithm = algorithmSelect.value;
    const targetNumber = parseInt(document.getElementById('targetNumber').value);
    
    startVisualizeBtn.disabled = true;
    stopVisualizeBtn.disabled = false;
    resetStats();
    startVisualization();

    try {
      await runVisualization(algorithm, array, targetNumber);
    } catch (error) {
      if (error.message === 'Visualization stopped') {
        console.log('Visualization was stopped by user');
      } else {
        console.error('Error during visualization:', error);
      }
    }
    
    startVisualizeBtn.disabled = false;
    stopVisualizeBtn.disabled = true;
  });

  // Stop visualization
  stopVisualizeBtn.addEventListener('click', () => {
    stopVisualization();
    stopVisualizeBtn.disabled = true;
    startVisualizeBtn.disabled = false;
  });
}
