---
id: liquid-staking-pivot
title: About the liquid staking pivot
description: Omm is no longer a money market. Here’s what you need to know.
slug: /liquid-staking-pivot
sidebar_position: 1
---

# About the liquid staking pivot
Omm is no longer a money market. Here’s what you need to know.

Omm experienced a rocky start to 2023 when a hacker stole $1.9 million from the money markets.

While most of the funds weren’t recovered, Omm received numerous donations from the community, and a group of individuals & organisations stepped forward to cover the outstanding loss. In exchange, the community approved [OIP 17](https://app.omm.finance/#/vote/proposal/17) to compensate them with 50% of the OMM in the DAO Fund and 50% of the DAO Fund’s profits until the amount is repaid.

All funds were restored thanks to the community’s support, so no loss was borne by Omm users. Omm was able to resume repay/withdraw functionality for the money markets within a month, but you can no longer supply or borrow assets.

Read more about the exploit and how the DAO responded:

https://forum.omm.finance/t/omm-exploit-postmortem-january-2023/266

---
## Omm 2.0: The liquid staking pivot

In light of the exploit, the contributors gave a lot of thought to the future direction of Omm. We would need a security audit to restore full market functionality, but money market activity (and profitability) was low in the months leading up to the exploit. Omm enables people to borrow stablecoins against volatile cryptoassets, but the stablecoin supply has dropped by more than 77% since Omm resumed limited functionality. And going cross-chain would only magnify the complexity.

It was clear that the lending protocol would be difficult to sustain.

But, thanks to OIP 17, we had an obligation to keep the protocol generating value. To do that, we decided to double-down on Omm’s most popular feature: Staked ICX, and the ability to delegate votes to the ICON validators of your choice.

The team behind sICX agreed to a merger, which would see Omm transform into a liquid staking project, similar to Ethereum-based protocols like [Lido](https://lido.fi/) and [Rocket Pool](https://rocketpool.net/).

[OIP 18](https://app.omm.finance/#/vote/proposal/18) was proposed and approved, and work commenced on the liquid staking product, which we launched mid-2023.


### What is liquid staking?

Liquid staking converts staked tokens into a liquid form, so investors can earn staking rewards without sacrificing liquidity.

If you stake ICX traditionally, it’s inaccessible until you unstake it, a process that takes ~7 days. If you want to time the market or need instant liquidity, you’ll need to keep your ICX unstaked — and miss out on the staking rewards.

Staked ICX (sICX) is the liquid staking token (LST) for the ICON ecosystem. It earns ICX staking rewards, and you can unstake it instantly or after a small wait (based on the amount of ICX available on the Balanced exchange). You can hold sICX in your wallet, send it, trade it, or use it to participate in DeFi activities to earn additional yield.

Liquid staking is an important building block for a blockchain/DeFi ecosystem, and its popularity is growing. During April 2023, liquid staking overtook decentralised exchanges (in terms of TVL) to become the [largest sector in crypto](https://cointelegraph.com/news/liquid-staking-solutions-now-have-more-tvl-than-dexs-defi-llama).


### How will liquid staking work on Omm?

The Omm app will be reworked to focus on staking ICX, unstaking sICX, and voting for ICON validators.

OMM inflation will be halted once v2 launches, so to sustain the protocol, Omm will deduct 10% of the staking rewards from the sICX pool. 10% may sound like a lot for a token that’s currently fee-less, but it’s the standard amount charged by liquid staking protocols, like [Lido](https://help.lido.fi/en/articles/5230596-what-fee-is-applied-by-lido-what-is-this-used-for). The ICX staking rate is currently 7.34%, so you’d earn 6.6% through sICX.

What is the 10% fee used for?

- 50% will go to the DAO Fund (of which 50% goes toward repaying the exploit, as proposed in [OIP 17](https://app.omm.finance/#/vote/proposal/17)
- 40% will go to ICON validators based on the votes they receive from bOMM holders
- 10% will go to the sICX team wallet (as proposed in [OIP 18](https://app.omm.finance/#/vote/proposal/18))


bOMM holders will be able to vote for the validators of their choice, much as they do now. Only in v2, you’ll be able to vote for more than 5 validators, you’ll have more fine-grained control over the amounts, and validators will earn ICX based on their bOMM delegation.

bOMM holders dictate the default delegation preference of sICX, but sICX holders can override the defaults and choose which validators their staked tokens are directed towards. This only applies to sICX that’s held in your wallet: if it’s held in another smart contract, like on Balanced, it’s up to the contract owner to manage the delegation preferences.

---

## What the change means for you

### Money market and liquidity participants

The OMM incentives for markets and liquidity pools were halted after the approval of [OIP 19](https://app.omm.finance/#/vote/proposal/19). If you’ve participated in these activities, it’s best to remove your funds before Omm 2.0 launches.

We’ll deprecate the existing interface towards the end of 2023, after which you’ll have to interact with the smart contracts to withdraw your funds.

### bOMM holders
bOMM holders will earn OMM rewards until Omm 2.0 launches, when we’ll submit a proposal to halt OMM inflation completely.

Without staking rewards or boosted market/liquidity rewards, how do you benefit from the transition?

Halting OMM inflation will ease the sell pressure and help preserve the value of both OMM and bOMM.

bOMM rewards are paid out in OMM, the inflation and sell pressure of which have caused the bOMM APY to decline (currently 18% with a lock-up time of 4 years). But after the transition to liquid staking, the sICX fee will enable bOMM holders to provide validators with an equivalent APR of 50%. Some validators will share a portion of their rewards with bOMM delegators. If a validator shares 50% of their rewards, bOMM holders who vote for them would receive 25% APY in ICX (7% more than is currently offered via OMM).

The amount of ICX that bOMM holders can delegate will depend on sICX holders, who can customise their delegation preference. It’s unknown how many will choose to actively manage it.

Your voting power will also depend on:

- Total sICX not locked in smart contracts (instead of total ICX in the ICON money market)
- Your bOMM voting power
- Total bOMM voting power

Any change in voting power will largely depend on the total amount of floating sICX. Due to the benefits of liquid staking, we expect to see continued demand for sICX, but it will ultimately depend on ICX holders.

---

## Omm: a launchpad for the ICON ecosystem

bOMM holders determine which validators earn a share of the sICX fee, so Omm has the potential to become a launchpad for the ICON ecosystem.

If bOMM holders want a specific project to succeed because they hold or earn that project’s tokens, they can vote for the validators who work on it. And if they feel that the ICON ecosystem is lacking in certain areas, like marketing or design, they can vote for validators who offer those services.

Alongside the CPS, Omm will help ICON participants earn additional revenue, which they can use to improve and expand the ICON ecosystem — something that benefits all ICX holders.

If you have any questions, comments, or concerns about Omm’s liquid staking pivot, [join the Omm Discord channel](https://discord.com/invite/zZcQUGbpVk) for further discussion.