// File: @uniswap\v2-core\contracts\interfaces\IUniswapV2Factory.sol

pragma solidity ^0.8.24;

import "./unorderedAddress.sol";
import "./FixedPointMathLib.sol";

interface IPulsexV1OracleFactory {
    function quote(
        address _pair,
        address tokenIn,
        uint amountIn
    ) external view returns (uint amountOut);
}

interface ChainlogLike {
    function setVersion(string calldata) external;

    function setIPFS(string calldata) external;

    function setSha256sum(string calldata) external;

    function getAddress(bytes32) external view returns (address);

    function setAddress(bytes32, address) external;

    function removeAddress(bytes32) external;
}

interface Fileable {
    function file(bytes32, address) external;

    function file(bytes32, uint256) external;

    function file(bytes32, bytes32, uint256) external;

    function file(bytes32, bytes32, address) external;
}

contract DaiPoker {
    using HitchensUnorderedAddressSetLib for HitchensUnorderedAddressSetLib.Set;
    using FixedPointMathLib for uint256;

    mapping(address => uint256) public wards;

    function rely(address usr) external auth {
        wards[usr] = 1;
    }

    function deny(address usr) external auth {
        wards[usr] = 0;
    }

    modifier auth() {
        require(wards[msg.sender] == 1, "Flipper/not-authorized");
        _;
    }

    mapping(address => address) public tokenIn;
    mapping(address => address) public medians;
    address public constant LOG = 0xdA0Ab1e0017DEbCd72Be8599041a2aa3bA7e740F;
    uint256 internal constant WAD = 10 ** 18;
    uint256 internal constant RAY = 10 ** 27;
    uint256 internal constant RAD = 10 ** 45;
    uint256 internal constant THOUSAND = 10 ** 3;
    uint256 internal constant MILLION = 10 ** 6;

    address public constant DAIEDAI =
        0xfC64556FAA683e6087F425819C7Ca3C558e13aC1;
    address public constant DAI = 0x6B175474E89094C44Da98b954EedeAC495271d0F;

    IPulsexV1OracleFactory public oracleFactory =
        IPulsexV1OracleFactory(0x646Daa135c6cd060573Ef5957C1DA3CeF735837E);

    constructor() public {}

    function rdiv(uint256 x, uint256 y) internal pure returns (uint256 z) {
        z = (x * RAY + y / 2) / y;
    }

    function getChangelogAddress(bytes32 _key) internal view returns (address) {
        return ChainlogLike(LOG).getAddress(_key);
    }

    function spotter() internal view returns (address) {
        return getChangelogAddress("MCD_SPOT");
    }

    function setValue(address _base, bytes32 _what, uint256 _amt) internal {
        Fileable(_base).file(_what, _amt);
    }

    /**
        @dev Set the value of DAI in the reference asset (e.g. $1 per DAI). Value will be converted to the correct internal precision.
        @dev Equation used for conversion is value * RAY / 1000
        @param _value The value to set as integer (x1000) (ex. $1.025 == 1025)
    */
    function setDAIReferenceValue(uint256 _value) internal {
        require(_value < WAD); // "LibDssExec/incorrect-par-precision"
        setValue(spotter(), "par", rdiv(_value, 1000));
    }

    // poke to feed all the values form the oracles to the respective median feeds

    function poke() external  {
        //price of dai vs eDAI
        uint quoteDai = oracleFactory.quote(DAIEDAI, DAI, 10 ** 18);
      

        //change to format
        quoteDai = quoteDai.mulDivDown(1000, 10 ** 18);
    
        setDAIReferenceValue(quoteDai);
    }
}
