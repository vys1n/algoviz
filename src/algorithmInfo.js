export const algorithmInfo = {
  linearSearch: {
    name: 'Linear Search',
    timeComplexity: {
      best: 'O(1)',
      average: 'O(n)',
      worst: 'O(n)'
    },
    spaceComplexity: 'O(1)',
    description: 'Sequentially checks each element until a match is found.'
  },
  binarySearch: {
    name: 'Binary Search',
    timeComplexity: {
      best: 'O(1)',
      average: 'O(log n)',
      worst: 'O(log n)'
    },
    spaceComplexity: 'O(1)',
    description: 'Requires sorted array. Repeatedly divides search interval in half.'
  },
  bubbleSort: {
    name: 'Bubble Sort',
    timeComplexity: {
      best: 'O(n)',
      average: 'O(n²)',
      worst: 'O(n²)'
    },
    spaceComplexity: 'O(1)',
    description: 'Repeatedly steps through the list, compares adjacent elements and swaps them if in wrong order.'
  },
  selectionSort: {
    name: 'Selection Sort',
    timeComplexity: {
      best: 'O(n²)',
      average: 'O(n²)',
      worst: 'O(n²)'
    },
    spaceComplexity: 'O(1)',
    description: 'Divides array into sorted and unsorted regions, repeatedly selects smallest element from unsorted region.'
  },
  mergeSort: {
    name: 'Merge Sort',
    timeComplexity: {
      best: 'O(n log n)',
      average: 'O(n log n)',
      worst: 'O(n log n)'
    },
    spaceComplexity: 'O(n)',
    description: 'Divide and conquer algorithm that recursively divides array in half and merges sorted subarrays.'
  },
  quickSort: {
    name: 'Quick Sort',
    timeComplexity: {
      best: 'O(n log n)',
      average: 'O(n log n)',
      worst: 'O(n²)'
    },
    spaceComplexity: 'O(log n)',
    description: 'Divide and conquer algorithm that picks a pivot element and partitions array around it.'
  },
  heapSort: {
    name: 'Heap Sort',
    timeComplexity: {
      best: 'O(n log n)',
      average: 'O(n log n)',
      worst: 'O(n log n)'
    },
    spaceComplexity: 'O(1)',
    description: 'Builds max heap and repeatedly extracts maximum element to sort array.'
  }
};
