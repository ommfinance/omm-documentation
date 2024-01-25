---
id: borrow-bnusd
title: Borrow Balanced Dollars
description: Learn how to deposit collateral, borrow bnUSD, optimise your risk, and close your position.
slug: /borrow-bnusd
sidebar_position: 2
---
# Borrow Balanced Dollars

Learn how to deposit collateral, borrow bnUSD, optimise your risk, and close your position.

## About Balanced Dollars {#about-bnusd}

The Balanced Dollar (bnUSD) is a decentralised stablecoin that tracks the price of 1 US Dollar. It uses crypto as collateral to guarantee its value, with support for a variety of cross-chain assets.

bnUSD is over-collateralised, so the total supply cannot exceed the value that backs it.

bnUSD is native to the ICON blockchain, with cross-chain support for Archway and BNB Chain.

[Learn more about the bnUSD stablecoin.](https://balanced.network/stablecoin/)

---

## Borrow bnUSD
You can borrow bnUSD on ICON for 0% interest, and earn Balance Tokens (BALN) while your loan is active. But first, you’ll need to deposit cryptocurrency as collateral.

### 1. Deposit collateral {#deposit-collateral}

You can borrow bnUSD against multiple cryptocurrencies. Each collateral type is a separate position with its own risk profile.

From the Collateral section on the [Home page](https://app.balanced.network/):

<div className="row">
  <div className="col col--6">
      <ol>
        <li>Choose the asset you want to use, then click Deposit and enter the amount.</li>
        <li>Check the Loan section to see how many bnUSD will be available for you to borrow.</li>
        <li>Click Confirm and complete the transaction.</li>
      </ol>
  </div>
  <div className="col col--6">
    <img src="/img/collateral.jpg" alt="The Collateral section in the adjustable state" width="500px" /> 
  </div>
</div>

:::note About ICX collateral
If you deposit ICX, it will be converted to Staked ICX (sICX) so that you earn staking rewards. The deposited ICX value will grow over time to reflect the rewards that accrue.
:::

---

### 2. Take out a loan {#take-out-loan}
You can borrow bnUSD against your collateral for a 0.75% fee. It’s interest-free, and you’ll earn Balance Tokens (BALN) until you close your loan.

<div className="row">
  <div className="col col--6">
      <ol>
        <li>Click Borrow in the Loan section and choose the amount (10 bnUSD minimum).</li>
        <li>Use the Position Details section to assess your risk.</li>
        <li>Click Confirm and complete the transaction.</li>
      </ol>
  </div>
  <div className="col col--6">
      <img src="/img/loan.jpg" alt="The Loan section in the adjustable state" width="500px" /> 
  </div>
</div>

Some or all of your collateral will be locked until you reduce the size of your loan.

:::warning A loan puts your collateral at risk
When the USD value of your collateral falls, your risk increases. If your collateral is ever worth less than 118% of your loan (a loan-to-value ratio of 85%), it will be liquidated to repay your debt.

Keep a close eye on your risk ratio from the Position Details section.
:::

---

### 3. Monitor your position {#monitor-position}
Use the Position Details section to monitor your risk and make calculated adjustments. It includes the price each collateral type has to reach to trigger liquidation, so you can assess your risk against the market conditions.

<div> 
  <img src="/img/position-details.jpg" alt="The Position Details section" width="100%" /> 
</div>

- **All collateral locked.** The maximum amount you can borrow, which varies for each collateral type. To withdraw collateral, your risk must be below this threshold.

- **Liquidated.** You’ll lose all your collateral when your risk hits this level (loan = 85% of collateral value).

- **Redemptions.** If the price of bnUSD falls below $0.90 and the [Stability Fund](/swap-assets#stability-fund) is empty, traders may choose to redeem (burn) bnUSD in exchange for borrower collateral. For every bnUSD they redeem, they'll receive $0.90 of collateral and repay $0.995 of borrower debt. Redemptions are only available via the Balanced Loans contract, and are spread across a group of borrowers to limit the impact.

- **Expected return.** You’ll earn the amount of BALN shown each day, unless other borrowers dilute the share. To increase your BALN rewards, [lock up Balance Tokens](/lock-BALN).

To lower your risk ratio, [repay some of your loan](#repay-loan) or [deposit more collateral](#deposit-collateral).

If you’ve deposited multiple collateral types, make sure to check the status of each position regularly. You can swap between them from the Collateral section.

---

## Close your position {#close-position}

### 1. Repay your loan {#repay-loan}
To repay your loan, click Adjust or Repay in the Loan section and reduce the amount.

If you don’t have enough bnUSD in your wallet, you'll see a Used label to indicate the maximum amount you can repay. If you need to buy more bnUSD to close your position, go to the Trade page.


### 2. Withdraw collateral {#withdraw-collateral}
To withdraw collateral, click Adjust or Withdraw in the collateral section, then reduce the amount. If you still have a loan, you can only withdraw up to the Locked label.

If you withdraw ICX, you’ll get to choose whether to unstake it (takes up to 7 days) or receive sICX, which you can [swap for ICX](/swap-assets) or [unstake from your wallet](/manage-assets#icx-sicx).
