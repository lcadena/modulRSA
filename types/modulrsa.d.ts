export type keys = {
    /**
     * - a RSA public key
     */
    publicKey: {
        e: bigint;
        n: bigint;
        /**
         *
         * @param {bigint} m messge to encrypt
         * @returns {bigint} message encrypted
         */
        encrypt(m: bigint): bigint;
        /**
         *
         * @param {bigint} s signed message
         * @returns {bigint} m bigint message
         */
        verify(s: bigint): bigint;
    };
    /**
     * - the associated RSA private key
     */
    privateKey: {
        d: bigint;
        publicKey: {
            e: bigint;
            n: bigint;
            /**
             *
             * @param {bigint} m messge to encrypt
             * @returns {bigint} message encrypted
             */
            encrypt(m: bigint): bigint;
            /**
             *
             * @param {bigint} s signed message
             * @returns {bigint} m bigint message
             */
            verify(s: bigint): bigint;
        };
        /**
         * @param {bigint} c sign message
         * @returns {bigint} m bigint message
         */
        decrypt(c: bigint): bigint;
        /**
         *
         * @param {bigint} m
         * @returns {bigint} s
         */
        sign(m: bigint): bigint;
    };
};
/**
 *
 * RSA privateKey class
 *
 */
export const PrivateKey: {
    new (d: number | bigint, publicKey: {
        e: bigint;
        n: bigint;
        /**
         *
         * @param {bigint} m messge to encrypt
         * @returns {bigint} message encrypted
         */
        encrypt(m: bigint): bigint;
        /**
         *
         * @param {bigint} s signed message
         * @returns {bigint} m bigint message
         */
        verify(s: bigint): bigint;
    }): {
        d: bigint;
        publicKey: {
            e: bigint;
            n: bigint;
            /**
             *
             * @param {bigint} m messge to encrypt
             * @returns {bigint} message encrypted
             */
            encrypt(m: bigint): bigint;
            /**
             *
             * @param {bigint} s signed message
             * @returns {bigint} m bigint message
             */
            verify(s: bigint): bigint;
        };
        /**
         * @param {bigint} c sign message
         * @returns {bigint} m bigint message
         */
        decrypt(c: bigint): bigint;
        /**
         *
         * @param {bigint} m
         * @returns {bigint} s
         */
        sign(m: bigint): bigint;
    };
};
/**
 *
 * RSA publicKey class
 *
 */
export const PublicKey: {
    new (e: number | bigint, n: number | bigint): {
        e: bigint;
        n: bigint;
        /**
         *
         * @param {bigint} m messge to encrypt
         * @returns {bigint} message encrypted
         */
        encrypt(m: bigint): bigint;
        /**
         *
         * @param {bigint} s signed message
         * @returns {bigint} m bigint message
         */
        verify(s: bigint): bigint;
    };
};
export function rsaKeyGeneration(bitLenght?: number): {
    publicKey: {
        e: bigint;
        n: bigint;
        /**
         *
         * @param {bigint} m messge to encrypt
         * @returns {bigint} message encrypted
         */
        encrypt(m: bigint): bigint;
        /**
         *
         * @param {bigint} s signed message
         * @returns {bigint} m bigint message
         */
        verify(s: bigint): bigint;
    };
    privateKey: {
        d: bigint;
        publicKey: {
            e: bigint;
            n: bigint;
            /**
             *
             * @param {bigint} m messge to encrypt
             * @returns {bigint} message encrypted
             */
            encrypt(m: bigint): bigint;
            /**
             *
             * @param {bigint} s signed message
             * @returns {bigint} m bigint message
             */
            verify(s: bigint): bigint;
        };
        /**
         * @param {bigint} c sign message
         * @returns {bigint} m bigint message
         */
        decrypt(c: bigint): bigint;
        /**
         *
         * @param {bigint} m
         * @returns {bigint} s
         */
        sign(m: bigint): bigint;
    };
};
export function twoModPow(exponent?: bigint, modulus?: bigint): any;
