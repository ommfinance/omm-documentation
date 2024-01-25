---
id: security
title: Security
description: Learn about the measures Balanced takes to keep its users safe.
slug: /security
sidebar_position: 11
---

# Security
Learn about the measures Balanced takes to keep its users safe.

## Risks of using Balanced {#balanced-risks}
Before you use Balanced, it’s a good idea to understand the risks:

**Smart contract risk.** Balanced smart contracts have been audited, but there’s always the possibility of a bug or vulnerability that compromises participants’ funds. It would not be possible to recover them.

**Liquidation risk.** If your collateralisation ratio drops below 118% (85% LTV), you’ll lose all your collateral, but you also get to keep any borrowed assets.

**Redemption risk.** If you borrow from Balanced, your collateral can be used as a last resort to keep bnUSD at $1. If the price of bnUSD falls below $0.90 and the [Stability Fund](/swap-assets#stability-fund) is empty, traders may choose to redeem bnUSD for borrower collateral. They’ll receive $0.90 of collateral and repay $0.995 of borrower debt for every bnUSD they redeem. Redemptions are only available via the Balanced Loans contract, and are spread across a group of borrowers to limit the impact.

---

## Smart contract audits {#smart-contract-audits}
The Balanced smart contracts were audited by [FYEO](https://www.fyeo.io) in 2023:

[Balanced Security Assessment | FYEO April 2023 (PDF)](../static/files/balanced-audit-fyeo-2023.pdf)

And by [SlowMist](https://www.slowmist.com/) in 2021:

[Balanced Security Audit | SlowMist March 2021 (PDF)](../static/files/balanced-audit-slowmist-2021.pdf)

---

## Withdrawal limits {#withdrawal-limits}
To protect funds in case of an exploit, Balanced has withdrawal limits in place for collateral, the Stability Fund, and the exchange.

A maximum of 15% of each asset can be withdrawn from one of these smart contracts every 24 hours. The limits can be changed via governance at any time. To see how close Balanced is to these limits, check the Withdrawal Limits section on the [Stats page](https://stats.balanced.network/).
