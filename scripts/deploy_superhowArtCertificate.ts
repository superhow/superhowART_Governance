import hre from "hardhat";

async function main() {
    // deployment
    const superhowArtCertificate = await hre.viem.deployContract("superhowArtCertificate", []);


    const adminAddress: string = "0x";
    const minterAddress: string = "0x";

    // initialization
    await superhowArtCertificate.write.initialize([adminAddress, minterAddress]);
    console.log(`superhowArtCertificate deployed to: ${superhowArtCertificate.address}`);
    
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