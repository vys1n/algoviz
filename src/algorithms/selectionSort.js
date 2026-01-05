import { sleep, updateVisuals, updateStats } from '../utils.js';

export async function selectionSort(array) {
  let comparisons = 0;
  let swaps = 0;
  const startTime = performance.now();
  const n = array.length;
  
  for (let i = 0; i < n - 1; i++) {
    let minIdx = i;
    
    for (let j = i + 1; j < n; j++) {
      comparisons++;
      await updateVisuals(array, [minIdx, j]);
      await sleep(50);
      
      if (array[j] < array[minIdx]) {
        minIdx = j;
      }
    }
    
    if (minIdx !== i) {
      [array[i], array[minIdx]] = [array[minIdx], array[i]];
      swaps++;
    }
    await updateVisuals(array, [], Array.from(Array(i + 1).keys()));
  }
  
  updateStats(comparisons, swaps, Math.round(performance.now() - startTime));
  await updateVisuals(array, [], Array.from(Array(n).keys()));
  return array;
}
