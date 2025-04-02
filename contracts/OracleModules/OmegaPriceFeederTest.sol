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

interface MeadianLike {
    function poke(uint256[] calldata val_, uint256[] calldata age_) external;
}

interface IERC20 {
    function decimals() external view returns (uint8);
}

contract OmegaPokerFeedTest {
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

    HitchensUnorderedAddressSetLib.Set private medianSet;

    address public constant WPLS = 0xA1077a294dDE1B09bB078844df40758a5D0f9a27;
    address public constant WPLSEDAI =
        0xE56043671df55dE5CDf8459710433C10324DE0aE;

    IPulsexV1OracleFactory public oracleFactory =
        IPulsexV1OracleFactory(0x646Daa135c6cd060573Ef5957C1DA3CeF735837E);

    address[] public _oracles;
    address[] public _pairs;

    constructor() public {
        wards[msg.sender] = 1;
    }

    // poke to feed all the values form the oracles to the respective median feeds

    function poke() external view returns (uint[] memory, uint[] memory) {
        uint length = medianSet.count();
        address lp;
        address token;
        uint[] memory quotes = new uint[](length);
        uint[] memory timeStamps = new uint[](length);

        for (uint i; i < length; ++i) {
            address median = medianSet.keyAtIndex(i);
            lp = medians[median];
            token = tokenIn[median];
            // uint[] memory quotes = new uint[](length);
            // uint[] memory timeStamps = new uint[](length);
            //price of wpls vs eDAI
            uint quoteWpls = oracleFactory.quote(WPLSEDAI, WPLS, 10 ** 18);
            if (token == WPLS) {
                quoteWpls = quoteWpls;
                quotes[i] = quoteWpls;
                timeStamps[i] = block.timestamp;
                //MeadianLike(median).poke(quotes, timeStamps);
            } else {
                // quote the token price in terms of WPLS [wad]
                uint decimals = IERC20(token).decimals();
                uint quoteToken = oracleFactory.quote(
                    lp,
                    token,
                    10 ** decimals
                );

                uint tokenPrice = quoteToken.mulDivUp(quoteWpls, 10 ** 18);
                quotes[i] = tokenPrice;
                timeStamps[i] = block.timestamp;
                //MeadianLike(median).poke(quotes, timeStamps);
            }
        }
        return (quotes, timeStamps);
    }

    // add a median, lp, and tokenin to the price feeder

    function add(address _median, address _lp, address _token) external auth {
        if (medianSet.exists(_median)) return;
        medianSet.insert(_median);
        medians[_median] = _lp;
        tokenIn[_median] = _token;
    }

    //remove a median
    function remove(address _median) external auth {
        if (medianSet.exists(_median)) {
            medianSet.remove(_median);
        }
    }
}
