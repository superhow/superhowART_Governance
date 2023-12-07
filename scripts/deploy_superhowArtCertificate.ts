import hre from "hardhat";
import { Address } from 'viem';

async function main() {
    console.log("Starting deployment of SuperhowARTCertificate...");

    const adminAddress = process.env.ADMIN_ADDRESS as Address;
    const minterAddress = process.env.MINTER_ADDRESS as Address;

    // Deployment with constructor parameters
    const superhowArtCertificate = await hre.viem.deployContract("SuperhowArtCertificate", [adminAddress, minterAddress]);
    console.log(`SuperhowArtCertificate deployed to: ${superhowArtCertificate.address}`);

    console.log("Deployment of SuperhowARTCertificate completed successfully.");

    // Call the mintNft function to mint an NFT
    await mintNft(superhowArtCertificate.address);
}

async function mintNft(contractAddress: Address) {
    console.log("Starting the minting process...");


    const recipientAddress = process.env.RECIPIENT_ADDRESS as Address;
    const tokenURI = process.env.TOKEN_URI as string;

    // Get the contract instance
    const superhowArtCertificate = await hre.viem.getContractAt("SuperhowArtCertificate", contractAddress);

    console.log(`Minting NFT to ${recipientAddress}`);

    // Mint the NFT
    await superhowArtCertificate.write.safeMint([recipientAddress, tokenURI]);

    console.log(`NFT minted successfully to ${recipientAddress}`);
}

main()
    .then(() => process.exit(0))
    .catch((error) => {
        console.error("Error in deployment process:", error);
        process.exit(1);
    });