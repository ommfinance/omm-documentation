---
id: transfer-cross-chain
title: Transfer assets cross-chain
description: Learn how to move assets between ICON and supported blockchains.
slug: /transfer-cross-chain
sidebar_position: 5
---
# Transfer assets cross-chain
Learn how to move assets between ICON and supported blockchains.

Balanced includes support for xCall, ICON’s cross-chain messaging service, so you can transfer assets to a wallet on another blockchain. For cross-chain swaps, see [Swap assets](/swap-assets).

<div className="row">
	<div className="col col--7">
Connect your wallets, then open the Bridge tab on the [Trade page](https://app.balanced.network/trade/bridge) and:
1. Choose which blockchains to transfer between.
2. Choose an asset, then enter the amount.
3. Click Transfer and follow the prompts to complete the transaction.

If you need to confirm or revert a cross-chain transaction, you’ll see an option to do so from the Bridge tab.
</div>
	<div className="col col--5">
		<img src="/img/bridge.png" alt="The Bridge tab on the Trade page, set to transfer bnUSD from ICON to Archway" width="500px" /> 
	</div>
</div>

:::info About xCall
xCall is a cross-chain messaging service that can work with any interoperability protocol. It relays messages between connected blockchains, and includes multi-protocol verification to reduce dependency on a single bridge.

xCall has one messaging standard for all cross-chain communication, so Balanced can take advantage of every chain that connects to it.

[Learn more about xCall.](https://www.xcall.dev/what-is-xcall)
:::


---

## Transfer via ICON Bridge (legacy) {#icon-bridge}
Balanced also supports [ICON Bridge](https://github.com/icon-project/icon-bridge), a lightweight, centralised version of [BTP](https://github.com/icon-project/btp), ICON’s secure and trustless interoperability solution. Use this option to transfer crypto from BNB Chain to ICON in order to trade or deposit as collateral.

To transfer assets through the legacy bridge:

<div className="row">
	<div className="col col--6">
1. Go to the [Trade page](https://app.balanced.network/trade/), then click ‘Transfer assets between blockchains’.
2. Choose which blockchain to transfer assets from (BNB Chain or ICON), then choose a wallet (Ledger is accessible through both).
3. Choose which blockchain to transfer to, then choose an asset and the amount.
4. Enter a compatible wallet address.
5. Click Transfer and follow the prompts to complete the transaction.
</div>
	<div className="col col--6">
		<img src="/img/icon-bridge.png" alt="The legacy transfer modal for ICON Bridge, set to transfer ICX from ICON to BNB Smart Chain" width="500px" /> 
	</div>
</div>

A transfer fee will be added to the total amount, and you’ll also need to pay a blockchain transaction fee.


:::note Retrieve stuck assets
If you transfer an asset like sICX, bnUSD, or BALN from ICON to BSC, the funds will be moved to the smart contract in the initial approval transaction.

If you fail to complete the transfer, go back to the transfer modal. After you choose the correct wallet and asset, you’ll see a balance awaiting transfer.
:::
