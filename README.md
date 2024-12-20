# Silent AsyncStorage Failure in Expo

This repository demonstrates a common, yet often silent, error when using AsyncStorage in Expo applications.  AsyncStorage only supports string values; attempting to store other data types (like objects or numbers) leads to data corruption without throwing an explicit error.  This can be very difficult to debug.

The `bug.js` file shows the problematic code, while `bugSolution.js` provides the corrected version.

## How to reproduce:
1. Clone this repository.
2. Run `npm install`.
3. Run the `bug.js` example (you'll need to have an Expo development environment set up).
4. Observe that the stored data is not what you expect.  There will be no visible error.
5. Then run the `bugSolution.js` example to see the correct implementation.

## Solution:
Always stringify your data before storing it in AsyncStorage, and parse it back when retrieving it.