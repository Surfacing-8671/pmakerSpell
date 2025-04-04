---
title: Template - [Executive Vote] Oracle, Flop, New DsChief, and Debt ceiling update.
summary: Updating Oracle feeds to v2 lp trustless system, changing the flop auction parameters, authorizing a new Chief, and lowering the debt ceiling.
date: 2025-04-02T00:00:00.000Z
address: ""
---


# [Executive Proposal] Oracle, Flop, New DsChief, and Debt ceiling update - April 2, 2025


MKR Holders should vote for this proposal if they support the following alterations to the Maker Protocol.


If you are new to voting in the Maker Protocol, please see the [voting guide](https://github.com/makerdao/community/blob/master/content/en/learn/governance/how-voting-works.mdx) to learn how voting works, and this [wallet setup guide](https://github.com/makerdao/community/blob/master/content/en/learn/governance/voting-setup.mdx) to set up your wallet to vote.


---


## Executive Summary


If this executive proposal passes, the following **changes** will occur within the Maker Protocol:


- The debt ceiling will be decreased to **0**, as detailed below.
- The oracles will be updated to a Uniswap V2 lp price feed.
- The flop auction parameters will be changed, as detailed below.
- Ownership change on the DsPause contract to the zero address **0x0000000000000000000000000000000000000000**.
- Authorization of a new DsChief.




**Voting for this executive proposal will place your MKR in support of the changes and additions outlined above.**


Unless otherwise noted, the changes and additions listed above are subject to the [GSM Pause Delay](https://manual.makerdao.com/parameter-index/core/param-gsm-pause-delay). This means that if this executive proposal passes, the changes and additions listed above will only become active in the Maker Protocol after the GSM Pause Delay has expired. The GSM Pause Delay is currently set to **0 hours**.


This proposal will be castable at any given time after the delay.


If this executive proposal does not pass within 180 days, then it will expire and can no longer have any effect on the Maker Protocol.


---


## Proposal Details


### Ownership change on the DsPause
- In the early days of pulsechain, and actor had acquired a large amount of maker, enough to vote in the new hat, and proposed a spell and voted it in as the hat. The purpose of the spell was to change the DsPauses, the main governance contract that can modify the system, to the EOA address of **0x208266c96F9A4e61856EFe2417eaB3b9EF59B22f**. He thus then was able to plot another spell without changing the hat with votes and cast a spell draining the protocol of all the WBTC collateral that was currently in there at time of fork. As we cannot revoke the DsPauses ability to modify the vat, as then this would mean no more collateral or changes can be made to the system, we can remove the ownership of the DsPause back to the aero address **0x0000000000000000000000000000000000000000** eliminating the actors ability to modify the system as they wish. We cannot remove the spell from the DsChief and it does not appear to have any expiration time so we must replace the current DsChief.
---
### New DsChief
- There is a problem with the current chief. As soon as votes shift around to pick a new hat there is the chance that the previous spell that changes ownership of the DsPause can regain the hat and be scheduled and cast in to regain ownership of the system. Because there is no expiration of the malicious spell there is a chance that it can be re-activated and we are in the same problem that we were in to begin with. To prevent this we must authorize a new Chief to be authorized to call the DsPause. Users will be able to withdraw from the old DsChief with no problems. The new DsChief will have a launch limit of 80k MKR before it can be launched and new spells to be voted in.
---
### Change Oracles to Uniswap V2 price feeds.
- All prices will be fetched on-chain in a trustless manner. 19 OSM will be updated to read from the new median feed and 3 new OSM will be changed out as well.
- The oracles are 1 hour based TWAP price oracles that are flash resistant. They are battle tested and forked from Yern Finance. They are all accessible via the oracle Factory and anyone can poke it to update the price if it is updateable.
- There is an omega poker that is used to collect all of the price feeds and file them into the respected medians. This as well is pokeable by anyone.
- The OmegaPriceFeeder.sol is a novel contract and needs to be reviewed. This repo contains a unit testing of the contract as an internal audit. It is the main contract that extrapolates the USD value from every TWAP oracle and feeds into the median contracts that the spotter uses to update the spot rate. This by no mean a full test coverage as it does not cover the file to the median, I have covered and tested the median reads but since deleted and due to lack of time they are not recreated in here now. But will re-create and update soon. The spell test tho prints out all of the ilk data from the vat and you can extrapolate from the spot prices that they are indeed filing and reading the correct values. 


### Methodology and Reasoning
The current price feed oracles depend on whitelisted actors to update the price in a timely manner using off chain price read data. Pulsechain has no reliable off-chain data feed that is available. Also the reliance on 3rd party actors to update the price accordingly is what has caused the price oracle failure in the first place. Those whitelisted actors decided to not update the prices on pulsechain leading to stale outdated prices that are susceptible to relay attacks. Depending on whitelisted actors has many flaws to the system. They could go rogue and update the prices in a malicious manner or update them inaccurately. Also if they stop updating the prices then they thus become stale. Moving to this system removes the human element in the system and allows for the prices to be updated in a trustless manner as contracts do not have any malicious intent, they are immutable code. The one downside is that it too needs to be poked hourly or the price may become stale but this is mitigated by allowing any user to poke the oracles and the omega price feeder at any given time (unless the individual oracle itself is not updateable due to time delay for the TWAP). 


---


### Flop Auction adjustments
- Auction time is 1 hour.
- Bid time to 30 minutes.
- The DAI amount will be updateable via the MakerAuctionOracle so that the amount of Dai per auction will always reflect roughly 1000 USD. This can be updated every 6 hours by any user that decides to poke it.
- MKR amount set to 10.
- The beg amount, or the amount that MKR will decrease per bid will remain the same at 3%.
---
### Debt Ceiling Limit Decrease
- The Debt Ceiling global line will be set to **0** DAI tokens. This ensures that a majority of the debt will have to be paid back before and new collateral positions get opened. This is important because with an updated price oracle, the system can read that vaults are over collateralized and give out more debt that can be used to leverage short pDai harming the entire ecosystem. We do not want to incentivise more collateral into the system, we want to pay back bad debt, not create more of it. This ceiling is advised to be raised or changed in the future depending on the health of the entire system because once we are over peg we want to fill those vaults again with collateral to re establish the equilibrium of the system.

## Review
The entire spell and this github are up for review and scrutiny for safety and debate. This is an enormous change to the ecosystem and peer review is needed to ensure the safety of the protocol and its users. You are more than welcome to submit a pull request if you think that any changes need to be made to the contract before we deploy the spell. Any and all help is greatly appreciated. You may also voice your concerns or opinions of the proposal in the pMaker Telegram channel [here](t.me/PulseChainMKR)


---


## Resources


Additional information about the Governance process can be found in the [Governance](https://community-development.makerdao.com/en/learn/governance) section of the MakerDAO community portal.


To participate in future Governance calls, please [join us](https://github.com/makerdao/community/tree/master/governance/governance-and-risk-meetings) every Thursday at 17:00 UTC.


To add current and upcoming votes to your calendar, please see the [MakerDAO Public Events Calendar](https://calendar.google.com/calendar/embed?src=makerdao.com_3efhm2ghipksegl009ktniomdk%40group.calendar.google.com&ctz=UTC&mode=week&showCalendars=0&showPrint=0).



### New Contracts added to the system 
- The names of the median are displayed in the verified contracts
- The individual oracles are deployed via the Oracle factory and can be retrieved, updated, or quoted from there.

| Contract        | Address        |  
|---------------|------------------
| Chief |    [0x21EDd6f4542423737075E674624C0F6596c629C1](https://bafybeicb2hlad6zs4kc4yvn5xbbzti6krjtpoxrysg42d4e5s5oubbipum.ipfs.dweb.link/#/address/0x21EDd6f4542423737075E674624C0F6596c629C1)   |
| Oracle Factory  |  [0x646Daa135c6cd060573Ef5957C1DA3CeF735837E](https://bafybeicb2hlad6zs4kc4yvn5xbbzti6krjtpoxrysg42d4e5s5oubbipum.ipfs.dweb.link/#/address/0x646Daa135c6cd060573Ef5957C1DA3CeF735837E)            |
| Omega Poker  |  [0x7c142f113a9a173FFd835E27fDEDDA00e5a45675](https://bafybeicb2hlad6zs4kc4yvn5xbbzti6krjtpoxrysg42d4e5s5oubbipum.ipfs.dweb.link/#/address/0x7c142f113a9a173FFd835E27fDEDDA00e5a45675)  |
| Maker Auction Poker |  [0xFB6A63B465D04151DE94C5E3F52ACC0C37EF5003](https://bafybeicb2hlad6zs4kc4yvn5xbbzti6krjtpoxrysg42d4e5s5oubbipum.ipfs.dweb.link/#/address/0xFB6A63B465D04151DE94C5E3F52ACC0C37EF5003)           |
| Dai Referance Poker | [0xCe5d1c4613f113fB8abFb9415e1F0D947B120Bf2](https://bafybeicb2hlad6zs4kc4yvn5xbbzti6krjtpoxrysg42d4e5s5oubbipum.ipfs.dweb.link/#/address/0xCe5d1c4613f113fB8abFb9415e1F0D947B120Bf2)            |
| Median    |  [0x613433AE2B8d3Ae6371CA6eC26bCe0A73c005bA2](https://bafybeicb2hlad6zs4kc4yvn5xbbzti6krjtpoxrysg42d4e5s5oubbipum.ipfs.dweb.link/#/address/0x613433AE2B8d3Ae6371CA6eC26bCe0A73c005bA2)       |
| Median    |  [0x82e5e259Ed1569586FCCa571ce50A7D1D6786Bad](https://bafybeicb2hlad6zs4kc4yvn5xbbzti6krjtpoxrysg42d4e5s5oubbipum.ipfs.dweb.link/#/address/0x82e5e259Ed1569586FCCa571ce50A7D1D6786Bad)       |
| Median    |  [0xf11B5fd3839516DE7ac53755eaF277A74EcEf327](https://bafybeicb2hlad6zs4kc4yvn5xbbzti6krjtpoxrysg42d4e5s5oubbipum.ipfs.dweb.link/#/address/0xf11B5fd3839516DE7ac53755eaF277A74EcEf327)       |
| Median    |  [0x6E088B573694F1958C2FAdB2d4e926fD8FFF4f2C](https://bafybeicb2hlad6zs4kc4yvn5xbbzti6krjtpoxrysg42d4e5s5oubbipum.ipfs.dweb.link/#/address/0x6E088B573694F1958C2FAdB2d4e926fD8FFF4f2C)       |
| Median    |  [0x2BD28b9C8B3B1ACDA7ad8e189Bc02e615A0a3C7c](https://bafybeicb2hlad6zs4kc4yvn5xbbzti6krjtpoxrysg42d4e5s5oubbipum.ipfs.dweb.link/#/address/0x2BD28b9C8B3B1ACDA7ad8e189Bc02e615A0a3C7c)       |
| Median    |  [0x623fE3720C94Ab42CE31CB255780E4d0e1D04a1b](https://bafybeicb2hlad6zs4kc4yvn5xbbzti6krjtpoxrysg42d4e5s5oubbipum.ipfs.dweb.link/#/address/0x623fE3720C94Ab42CE31CB255780E4d0e1D04a1b)       |
| Median    |  [0x4b9aD4401CBDe1ADa6adD90aC40f326fB88dDF4E](https://bafybeicb2hlad6zs4kc4yvn5xbbzti6krjtpoxrysg42d4e5s5oubbipum.ipfs.dweb.link/#/address/0x4b9aD4401CBDe1ADa6adD90aC40f326fB88dDF4E)       |
| Median    |  [0x31df188997E1Fe0C7fb29b43C0D8148D83e1C584](https://bafybeicb2hlad6zs4kc4yvn5xbbzti6krjtpoxrysg42d4e5s5oubbipum.ipfs.dweb.link/#/address/0x31df188997E1Fe0C7fb29b43C0D8148D83e1C584)      |
| Median    |  [0x5Cf7B83c17B70D2a06c592b91ad4F5C3cCa7c0Dd](https://bafybeicb2hlad6zs4kc4yvn5xbbzti6krjtpoxrysg42d4e5s5oubbipum.ipfs.dweb.link/#/address/0x5Cf7B83c17B70D2a06c592b91ad4F5C3cCa7c0Dd)       |
| Median    |  [0x6f34A64C5bcd197F200E974C2B8180c97bC308ef](https://bafybeicb2hlad6zs4kc4yvn5xbbzti6krjtpoxrysg42d4e5s5oubbipum.ipfs.dweb.link/#/address/0x6f34A64C5bcd197F200E974C2B8180c97bC308ef)       |
| Median    |  [0x1694676AA992D3C6aB859D6d9D2e7bc448f4332b](https://bafybeicb2hlad6zs4kc4yvn5xbbzti6krjtpoxrysg42d4e5s5oubbipum.ipfs.dweb.link/#/address/0x1694676AA992D3C6aB859D6d9D2e7bc448f4332b)      |
| Median    |  [0x8f8cDd12d5F0Ec99B1314c37446ebC50481a16C5](https://bafybeicb2hlad6zs4kc4yvn5xbbzti6krjtpoxrysg42d4e5s5oubbipum.ipfs.dweb.link/#/address/0x8f8cDd12d5F0Ec99B1314c37446ebC50481a16C5)       |
| Median    |  [0xB11eDc36668F5509EFE8A563CFA9E7a5A302003e](https://bafybeicb2hlad6zs4kc4yvn5xbbzti6krjtpoxrysg42d4e5s5oubbipum.ipfs.dweb.link/#/address/0xB11eDc36668F5509EFE8A563CFA9E7a5A302003e)      |
| Median    |  [0x3882c9a2D251a972312e411BcB7E0D9c79788e8A](https://bafybeicb2hlad6zs4kc4yvn5xbbzti6krjtpoxrysg42d4e5s5oubbipum.ipfs.dweb.link/#/address/0x3882c9a2D251a972312e411BcB7E0D9c79788e8A)       |
| Median    |  [0x5bdF3B8fB8476f8250420B95e09c5c900a67EBe8](https://bafybeicb2hlad6zs4kc4yvn5xbbzti6krjtpoxrysg42d4e5s5oubbipum.ipfs.dweb.link/#/address/0x5bdF3B8fB8476f8250420B95e09c5c900a67EBe8)      |
| Median    |  [0xa4a1388473267f73F74141bcdF62426761e6C5C2](https://bafybeicb2hlad6zs4kc4yvn5xbbzti6krjtpoxrysg42d4e5s5oubbipum.ipfs.dweb.link/#/address/0xa4a1388473267f73F74141bcdF62426761e6C5C2)       |
| Median    |  [0x7B64f61f9C30c1A2979AE78ff00D3D1F6d8E51Fc](https://bafybeicb2hlad6zs4kc4yvn5xbbzti6krjtpoxrysg42d4e5s5oubbipum.ipfs.dweb.link/#/address/0x7B64f61f9C30c1A2979AE78ff00D3D1F6d8E51Fc)       |
| Median    |  [0x1662712Eb3C4bF961D58a0E118C567343Ac218fC](https://bafybeicb2hlad6zs4kc4yvn5xbbzti6krjtpoxrysg42d4e5s5oubbipum.ipfs.dweb.link/#/address/0x1662712Eb3C4bF961D58a0E118C567343Ac218fC)       |
| Median    |  [0x75aeb7a72200241E66d843926B5d584928e89011](https://bafybeicb2hlad6zs4kc4yvn5xbbzti6krjtpoxrysg42d4e5s5oubbipum.ipfs.dweb.link/#/address/0x75aeb7a72200241E66d843926B5d584928e89011)      |
| Median    |  [0x5E08F4239847792dC6f65d0E178F7e544c119E77](https://bafybeicb2hlad6zs4kc4yvn5xbbzti6krjtpoxrysg42d4e5s5oubbipum.ipfs.dweb.link/#/address/0x5E08F4239847792dC6f65d0E178F7e544c119E77)       |
| Median    |  [0x9B2722BE6488ee2d2C6862eE316286522aFb9D5b](https://bafybeicb2hlad6zs4kc4yvn5xbbzti6krjtpoxrysg42d4e5s5oubbipum.ipfs.dweb.link/#/address/0x9B2722BE6488ee2d2C6862eE316286522aFb9D5b)       |
| Median    |  [0xc6111BFCE7A59d3F86d8227DBEcb5255318dd2ad](https://bafybeicb2hlad6zs4kc4yvn5xbbzti6krjtpoxrysg42d4e5s5oubbipum.ipfs.dweb.link/#/address/0xc6111BFCE7A59d3F86d8227DBEcb5255318dd2ad)      |
