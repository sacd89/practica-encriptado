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