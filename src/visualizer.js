import { linearSearch, binarySearch } from './algorithms/searching.js';
import { bubbleSort } from './algorithms/bubbleSort.js';
import { selectionSort } from './algorithms/selectionSort.js';
import { mergeSort } from './algorithms/mergeSort.js';
import { quickSort } from './algorithms/quickSort.js';
import { heapSort } from './algorithms/heapSort.js';

export async function startVisualization(algorithm, array, targetNumber = 50) {
  switch (algorithm) {
    case 'linearSearch':
      await linearSearch(array, targetNumber);
      break;
    case 'binarySearch':
      await binarySearch(array, targetNumber);
      break;
    case 'bubbleSort':
      await bubbleSort(array);
      break;
    case 'selectionSort':
      await selectionSort(array);
      break;
    case 'mergeSort':
      await mergeSort(array);
      break;
    case 'quickSort':
      await quickSort(array);
      break;
    case 'heapSort':
      await heapSort(array);
      break;
  }
}
