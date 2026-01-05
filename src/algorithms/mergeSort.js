import { sleep, updateVisuals, updateStats } from '../utils.js';

export async function mergeSort(array, left = 0, right = array.length - 1) {
  let comparisons = 0;
  let swaps = 0;
  const startTime = performance.now();

  async function merge(l, m, r) {
    const n1 = m - l + 1;
    const n2 = r - m;
    const L = array.slice(l, m + 1);
    const R = array.slice(m + 1, r + 1);
    
    let i = 0, j = 0, k = l;
    
    while (i < n1 && j < n2) {
      comparisons++;
      await updateVisuals(array, [l + i, m + 1 + j]);
      await sleep(50);
      
      if (L[i] <= R[j]) {
        array[k] = L[i];
        i++;
      } else {
        array[k] = R[j];
        j++;
      }
      swaps++;
      k++;
    }
    
    while (i < n1) {
      array[k] = L[i];
      i++;
      k++;
      swaps++;
    }
    
    while (j < n2) {
      array[k] = R[j];
      j++;
      k++;
      swaps++;
    }
  }

  async function sort(l, r) {
    if (l < r) {
      const m = Math.floor((l + r) / 2);
      await sort(l, m);
      await sort(m + 1, r);
      await merge(l, m, r);
    }
  }

  await sort(left, right);
  updateStats(comparisons, swaps, Math.round(performance.now() - startTime));
  await updateVisuals(array, [], Array.from(Array(array.length).keys()));
  return array;
}
