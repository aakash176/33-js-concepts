Array.prototype.customForEach = function(callback) {
  for (let i = 0; i < this.length; i++) {
    callback(this[i], i, this); // Pass the current element, index, and the array to the callback
  }
};

// Example usage
const numbers = [1, 2, 3, 4, 5];

numbers.customForEach((number, index) => {
  console.log(`Element at index ${index}: ${number}`);
});
