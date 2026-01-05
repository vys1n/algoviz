
import { sleep, updateVisuals, updateStats } from '../utils.js';

export async function linearSearch(array, target = 50) {
  let comparisons = 0;
  const startTime = performance.now();

  for (let i = 0; i < array.length; i++) {
    comparisons++;
    await updateVisuals(array, [i]);
    await sleep(100);

    if (array[i] === target) {
      updateStats(comparisons, 0, Math.round(performance.now() - startTime));
      await updateVisuals(array, [], [i]);
      return i;
    }
  }

  updateStats(comparisons, 0, Math.round(performance.now() - startTime));
  return -1;
}

export async function binarySearch(array, target = 50) {
  let comparisons = 0;
  const startTime = performance.now();
  
  // Sort array first (required for binary search)
  array.sort((a, b) => a - b);
  await updateVisuals(array);
  
  let left = 0;
  let right = array.length - 1;

  while (left <= right) {
    const mid = Math.floor((left + right) / 2);
    comparisons++;
    
    await updateVisuals(array, [left, mid, right]);
    await sleep(300);

    if (array[mid] === target) {
      updateStats(comparisons, 0, Math.round(performance.now() - startTime));
      await updateVisuals(array, [], [mid]);
      return mid;
    }

    if (array[mid] < target) {
      left = mid + 1;
    } else {
      right = mid - 1;
    }
  }

  updateStats(comparisons, 0, Math.round(performance.now() - startTime));
  return -1;
}
