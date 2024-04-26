// Next.js API route support: https://nextjs.org/docs/api-routes/introduction

export default function handler(req, res) {
  res.status(200).json({ name: "John Doe" });
}

// Example API function to fetch transaction data
export async function fetchTransactionData() {
  // Assume this function fetches transaction data from an API endpoint
  // For demonstration purposes, we'll simulate fetching data from a static JSON file
  try {
      // Simulate fetching data from an API endpoint
      const response = await fetch('/api/transactions');
      if (!response.ok) {
          throw new Error('Failed to fetch transaction data');
      }
      const data = await response.json();
      // For simplicity, assume the API response contains an array of transactions
      return data.transactions;
  } catch (error) {
      console.error('Error fetching transaction data:', error);
      throw error;
  }
}
