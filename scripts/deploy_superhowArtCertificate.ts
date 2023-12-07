import hre from "hardhat";

async function main() {
    // deployment
    const superhowArtCertificate = await hre.viem.deployContract("superhowArtCertificate", []);


    const adminAddress: string = "0x";
    const minterAddress: string = "0x";

    // initialization
    await superhowArtCertificate.write.initialize([adminAddress, minterAddress]);
    console.log(`superhowArtCertificate deployed to: ${superhowArtCertificate.address}`);

    // Example of sending a transaction (adjust according to your contract's methods)
    const toAddress: string = "recipient_address_here"; // Replace with the recipient's address
    const uri: string = "token_uri_here"; // Replace with the token URI
    await superhowArtCertificate.write.safeMint([toAddress, uri]);
    
    // Wait for transaction receipt
    const publicClient = await hre.viem.getPublicClient();
    await publicClient.waitForTransactionReceipt({ hash });

    console.log("Token minted successfully");
}

main()
    .then(() => process.exit(0))
    .catch((error) => {
        console.error(error);
        process.exit(1);
    });