// Simulating MetaMask Wallet Connection Delay
function connectMetaMask() {
    return new Promise((resolve) => {
        console.log("🦊 Requesting MetaMask wallet connection... Please approve the pop-up.");
        
        setTimeout(() => {
            // Simulating a successful connection response after 4 seconds
            resolve({
                status: "Connected",
                walletAddress: "0x71C7656EC7ab88b098defB751B7401B5f6d8976F",
                network: "Ethereum Mainnet"
            });
        }, 4000); // 4 seconds network delay
    });
}

// Controlling the UI Flow with Async/Await
async function startDapp() {
    console.log("🌐 Welcome to your Web3 DApp!");
    console.log("---------------------------------------");
    
    // Code strictly waits here for 4 seconds until the wallet connects
    let walletInfo = await connectMetaMask();
    
    console.log("---------------------------------------");
    console.log("✅ Wallet " + walletInfo.status + " Successfully!");
    console.log("📦 Public Address: " + walletInfo.walletAddress);
    console.log("⚡ Network: " + walletInfo.network);
    console.log("🚀 DApp Features are now fully unlocked for Nahid Rumel.");
}

startDapp();