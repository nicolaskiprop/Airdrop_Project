const { 
    Connection, 
    PublicKey, 
    clusterApiUrl, 
    Keypair, 
    LAMPORTS_PER_SOL 
} = require ("@solana/web3.js")


const wallet = new Keypair()


//credentials of a wallet (public and privare key)


//public key
const publicKey = new PublicKey(wallet._keypair.publicKey)
const secretKey = wallet._keypair.secretKey


///function to print wallet balance
const getWalletBalance = async() => {
    try {
        const connection = new Connection(clusterApiUrl('devnet'), 'confirmed')
        const walletBalance = await connection.getBalance(publicKey)
        console.log(`wallet balance is, ${walletBalance}`);
    } catch(err) {
        console.error(err);
    }
}
const airDropSol = async() => {
    try {
        const connection = new Connection(clusterApiUrl('devnet'), 'confirmed')
        const fromAirDropSignature = await connection.requestAirdrop(publicKey, 2 * LAMPORTS_PER_SOL)
        console.log('--------------minting airdrop------------');
        await connection.confirmTransaction(fromAirDropSignature)
        
    } catch (error) {
        console.log(err);
    }
}
const main = async() => {
    await getWalletBalance()
    await airDropSol()
    await getWalletBalance()

}
main()
