// File: @uniswap\v2-core\contracts\interfaces\IUniswapV2Factory.sol

pragma solidity ^0.8.24;

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

contract MakerAuctionOracle {
    using FixedPointMathLib for uint256;

    mapping(address => uint256) public wards;

    function rely(address usr) external auth {
        wards[usr] = 1;
    }

    function deny(address usr) external auth {
        wards[usr] = 0;
    }

    modifier auth() {
        require(wards[msg.sender] == 1, "MakerAuctionOracle/not-authorized");
        _;
    }

    uint256 zzzz = 6 hours;

    uint256 lastTime;

    address public constant LOG = 0xdA0Ab1e0017DEbCd72Be8599041a2aa3bA7e740F;
    uint256 internal constant WAD = 10 ** 18;
    uint256 internal constant RAY = 10 ** 27;
    uint256 internal constant RAD = 10 ** 45;

    address public constant DAIEDAI =
        0xfC64556FAA683e6087F425819C7Ca3C558e13aC1;
    address public constant DAI = 0x6B175474E89094C44Da98b954EedeAC495271d0F;

    IPulsexV1OracleFactory public oracleFactory =
        IPulsexV1OracleFactory(0x646Daa135c6cd060573Ef5957C1DA3CeF735837E);

    constructor() public {
        wards[msg.sender] = 1;
    }

    function sub(uint x, uint y) internal pure returns (uint z) {
        require((z = x - y) <= x);
    }

    function getChangelogAddress(bytes32 _key) internal view returns (address) {
        return ChainlogLike(LOG).getAddress(_key);
    }

    function vow() public view returns (address) {
        return getChangelogAddress("MCD_VOW");
    }

    function setValue(address _base, bytes32 _what, uint256 _amt) internal {
        Fileable(_base).file(_what, _amt);
    }

    /**
        @dev Set the DAI amount for system debt to be covered by each debt auction. Amount will be converted to the correct internal precision.
        @param _amount The amount to set in DAI (ex. 10m DAI amount == 10000000)
    */
    function setDebtAuctionDAIAmount(uint256 _amount) public {
        require(_amount < WAD); // "LibDssExec/incorrect-vow-sump-precision"
        setValue(vow(), "sump", _amount * RAD);
    }

    function updateable() external view returns (bool) {
        if (sub(block.timestamp, lastTime) > zzzz) {
            return true;
        }
        return false;
    }

    // poke to get the new dai debt auction price
    function poke() external {
        require(
            sub(block.timestamp, lastTime) > zzzz,
            "Not enough time elapsed"
        );
        lastTime = block.timestamp;
        //price of dai vs eDAI
        uint quoteDai = oracleFactory.quote(DAIEDAI, DAI, 10 ** 18);
        // find the token amount for 1000 usd.
        uint tokenAmount = uint(1000 * 10 ** 18).mulDivDown(1, quoteDai);
        setDebtAuctionDAIAmount(tokenAmount);
    }
}
