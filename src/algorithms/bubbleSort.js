import { sleep, updateVisuals, updateStats } from '../utils.js';

export async function bubbleSort(array) {
  let comparisons = 0;
  let swaps = 0;
  const startTime = performance.now();
  const n = array.length;
  
  for (let i = 0; i < n - 1; i++) {
    for (let j = 0; j < n - i - 1; j++) {
      comparisons++;
      await updateVisuals(array, [j, j + 1]);
      await sleep(50);
      
      if (array[j] > array[j + 1]) {
        [array[j], array[j + 1]] = [array[j + 1], array[j]];
        swaps++;
      }
    }
    await updateVisuals(array, [], [...Array(n - i - 1).keys()].map(x => n - x - 1));
  }
  
  updateStats(comparisons, swaps, Math.round(performance.now() - startTime));
  await updateVisuals(array, [], Array.from(Array(n).keys()));
  return array;
}
