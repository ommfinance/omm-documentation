---
id: liquidation-bot
title: Liquidation bot
description: Learn how to cover the debt of under-collateralised positions and earn up to a 10% profit.
slug: /liquidation-bot
sidebar_position: 3
---

# Liquidation bot
Learn how to cover the debt of under-collateralised positions and earn up to a 10% profit.

Set up a liquidation bot to earn even more from Balanced. There are 2 ways to profit from liquidation events:

1. Trigger a liquidation by calling the `liquidate` method. You’ll earn 0.67% of the borrower’s collateral.
2. Pay off bad debt by calling the `returnAsset` method and set `repay` to `FALSE`. You’ll purchase collateral at up to a 10% discount from market price.

You can set up your own bot by looking at the [smart contract code](https://docs.balanced.network/technical/smart-contracts).