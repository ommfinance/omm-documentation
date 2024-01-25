---
id: white-paper
title: White paper
description: Learn about the token economics and technical details of Balanced.
slug: /white-paper
sidebar_position: 2
---

# White paper
Learn about the token economics and technical details of Balanced.

:::warning The white paper is incomplete
Many details have changed since Balanced launched in April 2021. The white paper no longer reflects Balanced’s full capabilities, but it will be updated soon.
:::


## Introduction
Balanced is a DAO (decentralised autonomous organisation) that consists of a decentralised balance sheet of cryptocurrency collateral, and a vision of creating a stablecoin backed by a variety of assets from different blockchain ecosystems.

Participants mint and borrow bnUSD, a stable asset designed to track the value of one US Dollar. Balanced provides traders with clearly defined arbitrage opportunities in order to maintain the stability of bnUSD, and holders of volatile blockchain-based assets with an opportunity for leverage.

There are two ways to mint bnUSD: one for the purpose of arbitrage and stability, and the other for the purpose of leverage.

- Participants interested in leverage (borrowers) may deposit volatile collateral (i.e. ICX) to mint and borrow bnUSD against their collateral. Borrowers will have debt denominated in bnUSD that must be repaid in order to withdraw their collateral. During periods of extreme volatility, borrowers’ collateral may also be [redeemed](#redemptions) for bnUSD and a higher quantity of debt repaid, in order to maintain a certain range of buying power for bnUSD on the Balanced decentralised exchange.

- Participants interested in stabilising the bnUSD price via arbitrage can mint bnUSD by swapping other types of stable assets (i.e. USDC) at a fixed ratio for bnUSD, and vice versa. This fixed ratio provides clear arbitrage opportunities to stabilise the value of bnUSD.

Balanced participants are also rewarded for their contributions. Participants using volatile collateral or market making on the decentralised exchange will be rewarded with Balance Tokens (BALN). This process will be referred to as “mining”. Balance Tokens represent ownership in the Balanced DAO and come with several benefits discussed in the [Balance Token economics](#balance-token-economics) section.

An excellent use case for blockchain-based tokens is as a form of collateral. Balanced can bring this use case to many blockchain-based assets, with the goal of building bnUSD into an over-collateralised, vastly diversified and stable form of payment running on fully decentralised infrastructure.


---

## Collateral management
Borrowers must over-collateralise their position by a loan to value (LTV) ratio specified by governance. Balanced launched with a 25% LTV requirement. For example, if a borrower deposits $100 worth of ICX, Balanced would give them the right to mint up to 25 bnUSD.

If a borrower exceeds the LTV requirement, the borrower no longer has the right to withdraw collateral from the network. The borrower will not have access to their collateral until they drop below the required LTV.

While exceeding the LTV requirement locks collateral, exceeding the liquidation ratio will result in permanent loss of the borrower’s collateral and the closing of their debt position. The liquidation ratio was 66.67% when Balanced launched, and is subject to change via governance. In 2022, the community increased it to 85% LTV, or a collateralisation ratio of 118%.

<br/>

### sICX
ICX has a built-in reward rate for staking and voting on the ICON Network. Because of this feature, participants would be reluctant to use their ICX as collateral and miss out on these rewards. To solve this problem, ICX collateral will first be deposited into a staking and voting smart contract (staking pool).

When someone deposits collateral into the Balanced collateral pool, the ICX first gets converted into sICX (staked ICX), then sICX is deposited as collateral. sICX is a public utility smart contract for the ICON Network and is used in various protocols.

The amount of sICX received is a function of the amount of ICX in the staking pool and the total sICX outstanding. The amount of sICX received for deposits into the staking pool will be based on this formula:

>**Exchange rate of sICX =** ICX in staking pool ÷ total sICX outstanding

<img src="/img/wp-sicx.png" alt="$400 of ICX being converted into sICX and sent to the collateral pool" width="790px" />

The ICX in the staking pool will be staked and delegated. I-Score will be claimed, ICX will be re-staked, and re-delegated every time someone deposits ICX into the staking pool.

1 sICX will always have the claim to its pro-rata share of the ICX in the staking pool. For example, if somebody holds 10% of all sICX, and there is 500,000 ICX in the staking pool, this person can convert their sICX into 50,000 ICX. When converting sICX into ICX, the ICX will not be received until the unstaking period is complete or new ICX deposits are added to the staking pool. The unstaking period varies on the ICON Network, and can range anywhere from 5 days to 20 days. Given the lengthy unstaking period, Balanced will also provide a decentralised exchange (DEX) to provide immediate liquidity for swapping between sICX and ICX for a nominal fee.

<br/>

### Stability Fund
The Stability Fund is a simple but powerful mechanism to create clear arbitrage opportunities for traders. These arbitrage opportunities incentivise traders to stabilise the value of 1 bnUSD. Balanced approves specific stable assets and offers a fixed exchange rate for bnUSD (and vice versa).

This process enables Borrowers to receive the benefits of leverage without relying on outside lenders. bnUSD can be minted and traded by borrowers of volatile collateral, all while knowing bnUSD will remain stable because of the arbitrage opportunities offered by the Stability Fund.

<br/>

### Redemptions
The Stability Fund can absorb most price fluctuations of bnUSD, but if it’s ever empty, the redemption mechanism can operate as a backup.

Borrower positions are used to ensure the buying power of bnUSD stays within a certain range of the outside market price, which comes from BAND oracles. This range is adjustable via governance action, but at time of writing the range is set to -10%.

If the price of bnUSD falls below the 10% threshold, traders can redeem (burn) bnUSD in exchange for borower collateral. For every bnUSD they redeem, they’ll receive $0.90 of collateral and repay $0.995 of borrower debt. Redemptions are only available via the Balanced Loans contract, and are spread across a group of borrowers to limit the impact.

<br/>

### Liquidation policy
**If a borrower drops below the liquidation ratio of 118% (above 85% LTV), the borrower will permanently lose access to their remaining collateral.** Their unpaid debt will be tracked and referred to as bad debt. The collateral will be held by Balanced to field redemptions of bnUSD and pay off the bad debt. This provides a clear incentive for borrowers to begin paying off their debt or depositing more collateral if the price of their collateral begins to fall.

Liquidated collateral will be set aside into a _forced liquidation pool_ and will be used to honour redemptions of bnUSD if bad debt exists.

<br/>

#### Gamified liquidation
Activating a liquidation must be handled by users because Balanced is structured as a DAO. If Balanced proprietary software activated liquidations, Balanced would be a single point of failure for the network. Therefore, Balanced offers a monetary incentive to those alerting the network that an individual borrower is eligible for liquidation.

Additionally, those that redeem the liquidated collateral by retiring bnUSD will receive the collateral at a fixed discount. Keep in mind that liquidated collateral will be approximately 118% of the bad debt. Here are the details for the gamified liquidation:

- The reward for triggering a forced liquidation will be 0.67% of the collateral
- The bonus for retiring bnUSD against the forced liquidation pool will be up to 10% of the bnUSD retired

<br/>

:::note Example
Bob has $235 of collateral, but 200 bnUSD of debt. Bob’s collateral ratio is currently 117.5%, which is below the forced liquidation ratio of 118%.

Alice notices Bob is below the forced liquidation ratio, and sends a transaction to Balanced to trigger a forced liquidation. In exchange for this work, Alice will receive $2 of Bob’s collateral (0.67% of Bob’s bad debt) before it goes into the forced liquidation pool.

The forced liquidation pool now has $233 of collateral, and Balanced now has 200 bnUSD of bad debt. Meanwhile, Charley has been holding bnUSD waiting to earn rewards for paying off the bad debt of others. Charley uses 200 bnUSD to retire the 200 bnUSD of bad debt, and in exchange, receives $220 worth of collateral, an extra 10% (200 x 1.10).

See [Liquidation bot](/liquidation-bot) to set up your own.
:::
<br/>

### Handling edge cases {#edge-cases}
While the economic design of Balanced is equipped to handle extreme fluctuations in the value of volatile collateral assets, Balanced must still be prepared for the worst case scenario. In order to handle edge cases, such as extreme price drops in short periods of time, Balanced employs an _emergency reserve fund_ and a concept known as _dead markets_.

#### Emergency Reserve Fund
In extreme circumstances where the value of bad debt of a particular pegged asset is greater than the value of the forced liquidation pool, an emergency reserve fund will be made available for outside traders to be compensated for paying off bad debt. A percentage of Balance Tokens mined on a daily basis are sent to the emergency reserve fund, along with leftover collateral from liquidations.

#### Dead markets
If the net bad debt, defined as bad debt minus the value of the forced liquidation pool, is greater than half the total supply of bnUSD, bnUSD will be marked as a dead market. Dead markets can be revived when the aforementioned situation is no longer true.

When marked as a dead market, the bad debt of bnUSD will be paid off over time by the emergency reserve fund, and no new originations of bnUSD can occur.

---

## Balance Token economics

Balance Tokens (BALN) represent ownership in the Balanced DAO. When locked, they’re entitled to governance and network fees, and are mined by providing liquidity on the Balanced exchange and/or borrowing bnUSD.

There will be no pre-mine of Balance Tokens, and there is no maximum supply. 100,000 tokens will be mined per day for the first 60 days of operation. On the 61st day, the amount mined per day will begin to decrease by .50% each day until reaching 1,250 tokens per day to perpetuity. This results in a sub 2% inflation rate and continued incentivisation to use Balanced.


### Distribution of Balance Tokens {#distribution-of-baln}

- 47% to liquidity providers
- 12.5% to borrowers
- 20% to the DAO Fund
- 20% to Balanced Worker Tokens
- 0.5% to the Emergency Reserve Fund

Balanced worker tokens (BALW) provide continued incentives to develop the platform and are explained in more detail in the [Governance](#governance) section. The DAO Fund will hold BALN and other assets, which BALN holders can vote on ohow to spend.

<br/>

#### Mining Balance Tokens by borrowing {#mine-borrow}
To mine BALN through borrowing, you must meet the following qualifications:

- Deposit collateral into Balanced
- Borrow bnUSD from Balanced

After meeting the above qualifications, the formula to calculate an individual’s mining rewards on any given day is a function of the amount of debt they have in Balanced relative to the total debt. Here’s the precise formula:

>**Mining rewards =** (your debt ÷ total debt on Balanced) x BALN allocation to borrowers

<br/>

#### Liquidity mining on the decentralised exchange {#mine-liquidity}
The Balanced DEX is an automated market maker, a style of decentralised exchange made popular by [Uniswap](https://uniswap.org/). To qualify for liquidity mining rewards, users must provide liquidity into the incentivised liquidity pools on the Balanced exchange, as detailed in the [Distribution of Balance Tokens](#distribution-of-baln) section. The liquidity provided by users is utilised to have an offer price available on both sides of the trading pair.

For example, liquidity provided to the sICX/bnUSD pair is used to buy and sell both sICX and bnUSD as trades are executed against the pool. The price offered by the pool is based on the ratio of assets within the pool. This is different from traditional order books, where traders place a specific limit order at a specific price.

To calculate the amount of mining rewards earned by a liquidity provider:

>**Liquidity rewards =** (your liquidity ÷ total liquidity) x BALN allocation for that pool

<br/>

### Entitlements of Balance Tokens {#baln-entitlements}
In order to receive any of the entitlements associated with holding Balance Tokens, one must first [lock up BALN](/lock-baln).

<br/>

#### Network fees
These are the fees associated with Balanced. All fees are adjustable via a vote by bBALN holders:

- **0.30% decentralised exchange fee.** Charged to users when trading on the Balanced decentralised exchange. Half of this is kept in the liquidity pool that supported the trade, and half is collected by the network.
- **0.75% origination fee.** Charged each time a borrower mints Balanced Dollars.
- **50% penalty fee.** Charged to users who withdraw their locked BALN early.


Network fee distribution can be adjusted by bBALN holders via governance. At time of writing, fee distributions are as follows:

- 30% to bBALN holders
- 70% to the DAO Fund, which is managed by bBALN holders

<br/>

#### Governance power
bBALN holders also have governance power, which allows them to propose and vote on changes to Balanced.

View the next section for more details.

---

## Governance
Balanced is a DAO owned and operated by bBALN holders. Although it is a DAO, it’s still important to ensure a group of people are dedicated to actively developing the product. With Balanced Worker Tokens (BALW), we can make this possible.

<br/>

### Balanced Worker Tokens
Balanced worker tokens are entitled to a certain portion of the daily Balance Token inflation. At launch, and unless bBALN holders vote otherwise, Balanced worker tokens will be entitled to 20% of the Balance Token inflation.

There will only be 100 BALW, with the allocation split between the initial workers: Lydia Labs, ICONOsphere, PARROT9, Mousebelt, ICON DAO, and sudoblock.

<br/>

### Governance process
The governance process of Balanced will start off simple, but is subject to change by bBALN holders:

- To propose a change, you must hold at least 0.1% of the total bBALN supply
- More than 66% of bBALN must vote in favour of any change or DAO Fund proposal
- All votes must meet a minimum quorum of 20% of bBALN

bBALN holders can propose and vote on a number of changes, such as:
- Adjusting fees
- Adjusting fee distributions
- Adjusting inflation allocations
- Adjusting Loan to Value (collateral ratio) requirements
- Adjusting the Balanced governance process
- Spending assets held in the DAO Fund
- Adding new collateral types
