import { ethers } from 'ethers';
import BigNumber from '../bignumber';

export const pad32 = (val: string) => {
    return ethers.zeroPadValue(val, 32);
};

export const concat = (prefix: string, postfix: string) => {
    return ethers.concat([prefix, postfix]);
};

export const stripZeros = (val: string) => {
    return ethers.dataSlice(val, 0);
};

export const roundUpToFirstSignificantDecimal = (number: BigNumber) => {
    const power = Math.abs(number.e || 0);
    return new BigNumber(number.toFixed(power + 1, BigNumber.ROUND_UP));
};

export const roundDownToFirstSignificantDecimal = (number: BigNumber) => {
    const power = Math.abs(number.e || 0);
    return new BigNumber(number.toFixed(power + 1, BigNumber.ROUND_DOWN));
};

export const getMethodSignature = (methodString: string) => {
    return ethers.id(methodString).substring(0, 10);
};
