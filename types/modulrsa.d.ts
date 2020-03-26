export type keys = {
    /**
     * - a RSA public key
     */
    publicKey: {
        e: any;
        n: any;
        /**
         *
         * @param {bigint} m messge to encrypt
         * @returns {bigint|null} message encrypted
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
        d: any;
        publicKey: {
            e: any;
            n: any;
            /**
             *
             * @param {bigint} m messge to encrypt
             * @returns {bigint|null} message encrypted
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
        e: any;
        n: any;
        /**
         *
         * @param {bigint} m messge to encrypt
         * @returns {bigint|null} message encrypted
         */
        encrypt(m: bigint): bigint;
        /**
         *
         * @param {bigint} s signed message
         * @returns {bigint} m bigint message
         */
        verify(s: bigint): bigint;
    }): {
        d: any;
        publicKey: {
            e: any;
            n: any;
            /**
             *
             * @param {bigint} m messge to encrypt
             * @returns {bigint|null} message encrypted
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
        e: any;
        n: any;
        /**
         *
         * @param {bigint} m messge to encrypt
         * @returns {bigint|null} message encrypted
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
        e: any;
        n: any;
        /**
         *
         * @param {bigint} m messge to encrypt
         * @returns {bigint|null} message encrypted
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
        d: any;
        publicKey: {
            e: any;
            n: any;
            /**
             *
             * @param {bigint} m messge to encrypt
             * @returns {bigint|null} message encrypted
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
export function twoModPow(exponent?: any, modulus?: any): any;
