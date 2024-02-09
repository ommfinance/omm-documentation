---
id: protocol-details
title: Protocol details
description: Learn about the token economics and technical details of Omm.
slug: /protocol-details
sidebar_position: 3
---

# Protocol details
Learn about the token economics and technical details of Omm.


## ICX delegation
sICX has the power to participate in the ICON blockchain's voting system:

- **sICX holders** manage the delegation preference for sICX in their wallet
- **bOMM holders** influence the default delegation for unmanaged sICX
- **Smart contracts** set the delegation preference for sICX they hold

Validators must set a commission rate of 10% or less to qualify for delegation.

---

## Protocol fee
To sustain the protocol, Omm collects 10% of the daily staking rewards and distributes it in these ratios:

- **50%** to the DAO Fund (50% of this repays the exploit, proposed in [OIP 17](https://app.omm.finance/#/vote/proposal/17))
- **40%** to ICON validators based on their bOMM delegation
- **10%** to the sICX team wallet (as proposed in [OIP 18](https://app.omm.finance/#/vote/proposal/18))

---

## Staking
ICX has a built-in reward rate for staking and voting on the ICON Network, but it requires you to lock up your tokens. To keep your funds in a liquid state, you can convert ICX to sICX (Staked ICX), which represents a share of ICX held in a staking contract.

All ICX held in the contract is staked, and delegated according to the preferences of sICX and bOMM holders. ICX staking rewards are claimed and restaked daily (minus the 10% protocol fee), so the ICX value of sICX increases over time.


---

## Unstaking
Omm offers two options to unstake sICX:
1. Unstake instantly for a 1% fee
2. Wait for the unstaking period

The instant unstake option swaps sICX for ICX via the ICX queue on [Balanced](https://balanced.network/).

If you choose to wait, your unstaking request gets added to the queue and your ICX will be ready to claim within ~7 days. Depending on demand for sICX, it may unstake much sooner.