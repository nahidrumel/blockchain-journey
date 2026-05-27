// 1. Mock User Profile Object (Simulating an on-chain wallet account state)
let userProfile = {
    name: "Arif",
    walletAddress: "0x71C...39",
    balance: 100 // Initial wallet balance in mock tokens
};

// 2. Core Protocol Logic: Automated 15% Revenue Splitter Function
function processTollFee(user, sendAmount) {
    const tollRate = 0.15;           // Fixed 15% protocol fee rate
    let fee = sendAmount * tollRate; // Calculate the absolute protocol fee
    
    // Deduct total transaction cost (Send Amount + Protocol Fee) from user's balance
    user.balance = user.balance - (sendAmount + fee); 
    
    // Output execution logs to the console (Simulating smart contract Event Logs)
    console.log("🎉 Success! " + user.name + " charged a protocol fee of " + fee + " tokens.");
    console.log("💰 Updated Wallet Balance: " + user.balance + " tokens.");
}

// 3. Mock Transaction Queue (Array representing users interacting with the protocol)
let userLine = ["Arif", "Zayan", "Eshan"];

// 4. Triggering the Protocol Execution (Simulating a real-world transaction call)
processTollFee(userProfile, 40);