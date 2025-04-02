import {getProvider} from '../contractUtils';
import detectProxyTarget from 'evm-proxy-detection';

const detectProxyTargetByContractAddress = async (network: string, contractAddress: string) => {
    const provider = await getProvider();
    return await detectProxyTarget(contractAddress, ({ method, params }) => provider.send(method, params));
};

export default detectProxyTargetByContractAddress;
