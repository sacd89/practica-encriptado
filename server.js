
// RSA

const NodeRSA = require('node-rsa');

cryptRSA();


function cryptRSA() {
    console.log("========================= METODO DE CIFRADO RSA ===========================");

    const key = new NodeRSA({b: 512});

    key.generateKeyPair();
    
    const publicKey = key.exportKey('public');
    const privateKey = key.exportKey('private');
    
    console.log(publicKey);
    console.log(privateKey);

    console.log("====================== INICIO PROCESO DE CIFRADO =========================");
    console.log("==========================================================================");
    const text = "Esta es la información secreta.";
    console.log("=========================== TEXTO ORIGINAL ===============================");
    console.log(text);

    const encrypted = key.encrypt(text, 'base64');
    console.log("========================= MENSAJE ENCRIPTADO =============================");
    console.log(encrypted);

    const textDecrypt = key.decrypt(encrypted, 'utf8');
    console.log("======================== MENSAJE DESENCRIPTADO ===========================");
    console.log(textDecrypt);
    console.log("======================== FIN PROCESO DE CIFRADO ==========================");

}

// AES

const crypto = require('crypto');
const key = "MySecretKeyUltimate";
let value = encode("Mensaje ultra secreto", key);

function encode(text, key) {
    console.log("========================= ENCRIPTAR AES ===========================");
	const mykey = crypto.createCipher('aes-128-cbc', key);
	let mystr = mykey.update(text, 'utf8', 'hex');
	mystr += mykey.final('hex');
	return(mystr);
}

console.log('El mensaje cifrado es: ' + value );

function decode(message, key) {
    console.log("========================= DESENCRIPTAR AES ===========================");
	const mykey = crypto.createDecipher('aes-128-cbc', key);
	let mystr = mykey.update(message, 'hex', 'utf8');
	mystr += mykey.final('utf8');
	return(mystr);
}

value = decode(value, key);
console.log('El mensaje original es: ' + value);