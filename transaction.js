// Simulating a real blockchain network transaction delay
function sendCryptoTokens(amount) {
    return new Promise((resolve) => {
        console.log("⏳ Processing transaction on the Ethereum network...");
        setTimeout(() => {
            resolve("✅ Success! " + amount + " tokens safely deposited to the wallet.");
        }, 3000); // Simulating a 3-second network delay
    });
}

// Using Async/Await to make the code wait for the blockchain response
async function runTransaction() {
    console.log("🚀 Transaction initiated by user...");
    
    // The code will strictly wait here for 3 seconds before moving to the next line
    let result = await sendCryptoTokens(50); 
    
    console.log(result);
    console.log("🎉 All process done! UI updated.");
}

runTransaction();