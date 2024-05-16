// Define a type alias for clarity and reusability
type MixedData = string | boolean | number;

// Create an array with mixed data types using the defined type alias
const mixedData2: MixedData[] = ["bye", true, 77];

// Function to process the mixed data array elements
function processMixedData(data: MixedData[]): void {
  data.forEach((element) => {
    if (typeof element === 'string') {
      console.log(`String: ${element}`);
    } else if (typeof element === 'boolean') {
      console.log(`Boolean: ${element}`);
    } else if (typeof element === 'number') {
      console.log(`Number: ${element}`);
    }
  });
}

// Call the function with the mixed data array
processMixedData(mixedData2);
