# Algorithm Visualizer 🎯

An interactive **Algorithm Visualizer** built using **Vanilla JavaScript, HTML, CSS**.  
This project visually demonstrates how common **sorting and searching algorithms** work step by step.

---

## 🔗 Live Demo

- **Netlify:** https://fancy-gumption-1a5d8a.netlify.app/  
- **GitHub Pages:** https://vys1n.github.io/algoviz/

---

## 🚀 Getting Started (Local Setup)

Follow these steps to get the project running locally:

### 1️⃣ Clone the repository
```bash
git clone https://github.com/username/algoviz.git
cd algoviz```

### 2 Install Dependencies
```bash
npm install```

### 3 Run Development Server
```bash
npm run dev```

### 4 Build for Production
```bash
npm run build```

---

## 📌 Features

- 🎲 Generate random arrays of customizable size
- ✍️ Input custom arrays manually
- 📊 Visualize sorting and searching algorithms
- ⏱️ Step-by-step animation with delays
- 🔢 Real-time statistics:
  - Comparisons
  - Swaps
  - Execution time
- 🛑 Start / Stop visualization
- 📘 Dynamic algorithm information (time & space complexity)

---

## 🧠 Algorithms Implemented

### 🔍 Searching Algorithms
- Linear Search
- Binary Search

### 🔃 Sorting Algorithms
- Bubble Sort
- Selection Sort
- Merge Sort
- Quick Sort
- Heap Sort

---

## 🗂️ Project Structure

```text
algoviz/
├── index.html
├── style.css
├── package.json
├── package-lock.json
├── .gitignore
└── src/
    ├── main.js
    ├── utils.js
    ├── visualizer.js
    ├── eventListeners.js
    ├── algorithmInfo.js
    └── algorithms/
        ├── bubbleSort.js
        ├── selectionSort.js
        ├── mergeSort.js
        ├── quickSort.js
        ├── heapSort.js
        └── searching.js```

---

## ⚙️ How It Works

The Algorithm Visualizer follows a **modular, event-driven architecture** where each responsibility is handled by a separate module.

### 🔹 Application Flow
1. When the page loads, a default random array is generated.
2. The array is rendered as vertical bars whose heights represent values.
3. User interactions (buttons, sliders, dropdowns) trigger events.
4. The selected algorithm runs step-by-step with visual updates.
5. Statistics (comparisons, swaps, time) update in real time.

---

### 🔹 Module Responsibilities

#### `main.js`
- Entry point of the application
- Initializes the array on page load
- Connects all modules together

#### `utils.js`
- Generates random arrays
- Parses custom user input
- Creates and resets array bars in the DOM

#### `visualizer.js`
- Handles animation delays
- Updates bar colors during comparisons and swaps
- Controls rendering updates for smooth visualization

#### `eventListeners.js`
- Manages UI interactions:
  - Generate new array
  - Use custom array
  - Start / stop visualization
  - Algorithm selection
- Routes execution to the selected algorithm

#### `algorithmInfo.js`
- Dynamically displays:
  - Algorithm name
  - Time complexity
  - Space complexity
  - Short description

#### `algorithms/`
- Each algorithm is implemented in its own file
- Algorithms are written using `async/await` to allow step-by-step animation
- Visualization updates occur after each key operation

---

### 🔹 Visualization Strategy

- Array values are represented as bars with proportional heights
- Different colors indicate:
  - Current comparison
  - Swapped elements
  - Final sorted state
- `async/await` and timed delays are used to slow down execution for clarity
- A stop flag allows users to halt execution mid-visualization

---

### 🔹 Searching vs Sorting Behavior

- **Searching algorithms** highlight the current element being checked
- **Sorting algorithms** show comparisons and swaps until the array is fully sorted

---

## 🧪 Possible Enhancements

- Speed control slider for animations
- Step-by-step manual execution mode
- Code highlighting during visualization
- Additional algorithms (Insertion Sort, BFS, DFS)
- Mobile responsiveness improvements

---

## 📄 License

This project is intended for educational purposes.  
You are free to use, modify, and extend it.
