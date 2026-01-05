import { sleep, updateVisuals, updateStats } from '../utils.js';

export async function quickSort(array, left = 0, right = array.length - 1) {
  let comparisons = 0;
  let swaps = 0;
  const startTime = performance.now();

  async function partition(l, r) {
    const pivot = array[r];
    let i = l - 1;
    
    for (let j = l; j < r; j++) {
      comparisons++;
      await updateVisuals(array, [j, r]);
      await sleep(50);
      
      if (array[j] < pivot) {
        i++;
        [array[i], array[j]] = [array[j], array[i]];
        swaps++;
      }
    }
    
    [array[i + 1], array[r]] = [array[r], array[i + 1]];
    swaps++;
    return i + 1;
  }

  async function sort(l, r) {
    if (l < r) {
      const pi = await partition(l, r);
      await sort(l, pi - 1);
      await sort(pi + 1, r);
    }
  }

  await sort(left, right);
  updateStats(comparisons, swaps, Math.round(performance.now() - startTime));
  await updateVisuals(array, [], Array.from(Array(array.length).keys()));
  return array;
}
