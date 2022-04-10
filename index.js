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
const publicKey = wallet._keypair.publicKey
const secretKey = wallet._keypair.secretKey

console.log(publicKey);
console.log(secretKey);
