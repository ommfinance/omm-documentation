---
id: swap-assets
title: Swap assets
description: Learn how to swap assets on the Balanced decentralised exchange.
slug: /swap-assets
sidebar_position: 3
---
# Swap assets
Learn how to swap assets on the Balanced decentralised exchange.

You can exchange your tokens for a variety of cryptoassets, and even move between blockchains in a single trade.

Go to the [Trade page](https://app.balanced.network/trade/) and sign in with your wallet(s). Then use the Swap tab to:

<div className="row">
  <div className="col col--7">
1. Choose an asset to swap, and another to receive.
2. Choose which blockchains to send and receive on, if applicable. (Unless stated, all assets are on ICON.)
3. Enter an amount for one of the assets. The other will update to reflect the current rate, with fees factored in.
4. Adjust the slippage tolerance if necessary, then click Swap and complete the transaction.

You can view pending cross-chain transactions from the Bridge tab. If you need to confirm or revert them, you’ll see an option to do so.
  </div>
  <div className="col col--5">
    <img src="/img/cross-chain-swap.png" alt="The Swap tab set to a cross-chain swap on the Trade page" width="400px" /> 
  </div>
</div>

:::note About the swap fees

The fee you pay for a swap varies depending on the assets:

- **ICX -> sICX:** 0% fee
- **sICX -> ICX:** 1% (a 0.3% fee, and an exchange rate 0.7% less than the true value of sICX)
- **All other assets:** 0.3% fee
	- If there’s no liquidity pool for the assets you want to swap, Balanced will route the trade through several other pools to get the best price. You’ll pay a 0.3% fee for each step in the trade route.

Cross-chain swaps that don’t originate on ICON also include a transfer fee.
:::

---

## Add custom tokens {#custom-tokens}
<div className="row">
	<div className="col col--6">
To swap assets that aren’t listed by default, click any asset selector on the Trade page, then click ‘Add community token list’.

If the token you want isn’t on the community token list:

1. Paste the asset’s contract address in the search box.
2. Click Import, check that the details are correct, then add it to Balanced.

You can remove it from the asset selector at any time.
	</div>
	<div className="col col--6">
		<img src="/img/community-token-list.png" alt="The community token list option in the asset selector" width="400px" /> 
	</div>
</div>

---

## About the Stability Fund {#stability-fund}
If your swap involves bnUSD and another stablecoin, you may see an option to interact with the Stability Fund. To maintain the price of bnUSD, you can trade it 1:1 with approved stablecoins, minus a 0.5% fee.

How to use the Stability Fund:

<ul>
	<li><strong>If bnUSD is above $1:</strong> send approved stablecoins to the Stability Fund to mint an equivalent amount of bnUSD (minus a 0.5% fee). Sell the bnUSD at a premium for more stablecoins, and repeat until it’s no longer profitable.</li>
	<li><strong>If bnUSD is below $1:</strong> send bnUSD to the Stability Fund to burn it, and receive an equivalent amount in another stablecoin (minus a 0.5% fee). Use it to buy cheap bnUSD, and repeat until it’s no longer profitable.</li>
</ul>



To reduce Balanced’s risk exposure, the Stability Fund has a maximum limit for each stablecoin and restricts the amount that can be withdrawn every 24 hours. The DAO can vote to adjust the limits or support additional stablecoins at any time.

You can check the current balance on the [Performance Details page](https://stats.balanced.network/performance-details), or via the [Stability Fund smart contract](https://tracker.icon.community/contract/cxa09dbb60dcb62fffbd232b6eae132d730a2aafa6#readcontract).