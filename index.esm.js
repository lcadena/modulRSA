import { modPow, bitLenght, primeSync, modInv } from 'bigint-crypto-utils';
import 'bigint-conversion';

const _ONE = BigInt(1);

function _two() {
    return BigInt(2);
}

const twoModPow = function (exponent=BigInt(7), modulus = BigInt(5)) {
    return modPow(_two(), exponent, modulus)
};

/**
 * Generate the random keys of RSA
 * @param {number} bitLenght 
 */
const rsaKeyGeneration = function (bitLenght$1  = 3072) {
    let n, phi;

    // Generate the public modulus n = p * q
    do {
        this.p = primeSync(Math.round(bitLength / 2) + 1);
        this.q = primeSync(Math.round(bitLength / 2));
        this.n = this.p * this.q;

        phi = (this.p - _ONE) * (this.q - _ONE);
    } while (this.p === this.q || bitLenght(this.n) != bitLenght$1);

    let e = BigInt(65537);
    let d = modInv(this.e, this.phi);

    //Generar clave publica y privada
    const publicKey = new PublicKey(e, n);
    const privateKey = new PrivateKey(d, publicKey);

    return {publicKey: publicKey, privateKey: privateKey}

};

/**
 * 
 * RSA publicKey class
 * 
 */
const publicKey = class PublicKey {
    /**
     * 
     * @param {bigint | number} e public exponent
     * @param {bigint | number} n public modulus
     */
    constructor(e, n) {
        this.e = BigInt(e);
        this.n = BigInt(n);
    }
    
    /**
     * 
     * @param {bigint} m messge to encrypt
     * @returns {bigint|null} message encrypted
     */
    encrypt(m) {
        return modPow(m, this.e, this.n)
    }

    /**
     * 
     * @param {binint} s signed message
     * @returns {bigint} m bigint message
     */
    verify(s) {
        return modPow(s, this.e, this.n)
    }
    
    //hacer la verificación con la firma
};

/**
 * 
 * RSA privateKey class
 * 
 */
const privateKey = class PrivateKey {
    /**
     * 
     * @param {bigint | number} d private exponent
     * @param {publicKey} publicKey
     */
    constructor(d, publicKey) {
        this.d = BigInt(d);
        this.publicKey = publicKey;
    }

    /**
     * @param {binint} c signemessage
     * @returns {bigint} m bigint message
     */
    decrypt(c) {
        return modPow(c, this.d, this.publicKey.n);
    }

    sign() {
        return modPow(m, this.d, this.publicKey.n)
    }

};

export { privateKey, publicKey, rsaKeyGeneration, twoModPow };
