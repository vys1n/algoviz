import { sleep, updateVisuals, updateStats } from '../utils.js';

export async function heapSort(array) {
  let comparisons = 0;
  let swaps = 0;
  const startTime = performance.now();
  const n = array.length;

  async function heapify(n, i) {
    let largest = i;
    const left = 2 * i + 1;
    const right = 2 * i + 2;
    
    if (left < n) {
      comparisons++;
      await updateVisuals(array, [largest, left]);
      await sleep(50);
      if (array[left] > array[largest]) {
        largest = left;
      }
    }
    
    if (right < n) {
      comparisons++;
      await updateVisuals(array, [largest, right]);
      await sleep(50);
      if (array[right] > array[largest]) {
        largest = right;
      }
    }
    
    if (largest !== i) {
      [array[i], array[largest]] = [array[largest], array[i]];
      swaps++;
      await heapify(n, largest);
    }
  }

  for (let i = Math.floor(n / 2) - 1; i >= 0; i--) {
    await heapify(n, i);
  }
  
  for (let i = n - 1; i > 0; i--) {
    [array[0], array[i]] = [array[i], array[0]];
    swaps++;
    await heapify(i, 0);
    await updateVisuals(array, [], Array.from(Array(i + 1).keys()));
  }
  
  updateStats(comparisons, swaps, Math.round(performance.now() - startTime));
  await updateVisuals(array, [], Array.from(Array(n).keys()));
  return array;
}
