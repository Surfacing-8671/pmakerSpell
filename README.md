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


- The debt ceiling will be decreased to **5,000,000,000**, as detailed below.
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
- MKR amount set to 100.
- The beg amount, or the amount that MKR will decrease per bid will remain the same at 3%.
---
### Debt Ceiling Limit Decrease
- The Debt Ceiling global line will be set to **5,000,000,000** DAI tokens. This ensures that a majority of the debt will have to be paid back before and new collateral positions get opened. This is important because with an updated price oracle, the system can read that vaults are over collateralized and give out more debt that can be used to leverage short pDai harming the entire ecosystem. We do not want to incentivise more collateral into the system, we want to pay back bad debt, not create more of it. This number is in alignemt with future total supply expectations but up for discussion as a **0** debt cieling currently would not hurt and also can be updated in the future with another spell. This ceiling is advised to be raised or changed in the future depending on the health of the entire system because once we are over peg we want to fill those vaults again with collateral to re establish the equilibrium of the system.


## Review
The entire spell and this github are up for review and scrutiny for safety and debate. This is an enormous change to the ecosystem and peer review is needed to ensure the safety of the protocol and its users. You are more than welcome to submit a pull request if you think that any changes need to be made to the contract before we deploy the spell. Any and all help is greatly appreciated. You may also voice your concerns or opinions of the proposal in the pMaker Telegram channel [here](t.me/PulseChainMKR)


---


## Resources


Additional information about the Governance process can be found in the [Governance](https://community-development.makerdao.com/en/learn/governance) section of the MakerDAO community portal.


To participate in future Governance calls, please [join us](https://github.com/makerdao/community/tree/master/governance/governance-and-risk-meetings) every Thursday at 17:00 UTC.


To add current and upcoming votes to your calendar, please see the [MakerDAO Public Events Calendar](https://calendar.google.com/calendar/embed?src=makerdao.com_3efhm2ghipksegl009ktniomdk%40group.calendar.google.com&ctz=UTC&mode=week&showCalendars=0&showPrint=0).



