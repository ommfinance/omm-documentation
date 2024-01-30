---
id: participate-governance
title: Participate in governance
description: Learn how to vote on proposals, discuss potential changes, and submit a proposal of your own.
slug: /participate-governance
sidebar_position: 5
---

# Participate in governance
Learn how to vote on proposals, discuss potential changes, and submit a proposal of your own.

bOMM holders have the power to vote on changes to Omm and decide where money is spent. To participate in discussions about the future of Omm, visit the [Omm Discord channel](https://discord.com/invite/zZcQUGbpVk) and [forum.omm.finance](https://forum.omm.finance/).


## Vote on proposals {#vote}
To view all proposals submitted on Omm, go to the [Vote page](https://app.omm.finance/#/vote/).

Click a proposal to view a short summary of the changes, then review the forum discussion to gain a full understanding of the changes.

If the voting period is active, you can vote:

1. Sign in with a wallet that holds [locked OMM (bOMM)](/lock-omm).
2. Choose to approve or reject the proposal, then confirm the transaction.

<img src="/img/governance-vote.png" alt="The top section of an active proposal, with the option to approve or reject it" width="100%" /> 

Each vote will be open for 5 days, and your voting weight is based on the amount of bOMM you had when the vote began.

For a proposal to be approved, at least 20% of the total bOMM needs to participate in the vote, and 66.67% need to be in favour.

---

## Submit a proposal {#submit-proposal}
If you want to make changes to Omm, start a discussion on the forum to validate your idea, then submit a proposal for bOMM holders to vote on.

To submit a proposal, you'll need to pay a fee of 1,000 OMM and have at least 0.1% of the total bOMM in your wallet. If the proposal is approved, the fee will be returned to your wallet. If it's rejected, the fee is sent to the DAO Fund.

### 1. Discuss your proposed changes {#discuss-proposal}
If you have an idea for a proposal:

1. Submit your initial proposal on the [forum](https://forum.omm.finance/c/proposal-discussion/), under the Proposal Discussion category.
2. Receive feedback from the community and adjust your proposal if necessary.
3. Submit your final proposal under the ‘OIPs’ (Omm improvement proposals) category.

### 2. Submit your proposal on Omm {#submit-on-chain}
Go to the [Vote page](https://app.omm.finance/#/vote/), click 'New proposal', then:

1. Choose a proposal type: Text or Contract.
2. Enter a title of up to 100 characters. It should lead with the OIP number, and be as clear and concise as possible (e.g. `OIP3: Increase the borrow limit to 75%`).
3. Provide the link to the OIP you posted on [forum.omm.finance](https://forum.omm.finance/).
4. Add a summary of up to 500 characters to the Description field. Note that formatting will be ignored.
5. For Contract proposals: Choose a smart contract to interact with and the method to call, then enter the values you'd like to use for the parameters.
6. Click Submit, then pay 1,000 OMM to complete the transaction.

Your proposal will be added to the Vote page, and voting will begin immediately.

---

## About the Contract proposal type

You can use the Contract proposal type for actions that require smart contract interaction. For example, you can create a proposal to transfer OMM from the DAO Fund to a specific wallet. Once approved, anyone can enact it to trigger the distribution of assets.

**Parameters**
The parameters vary depending on the smart contract and method you choose.

- **_value:** The amount to transfer, x 10^18 (i.e. 5,000 -> 5,000,000,000,000,000,000,000).
- **_address:** The wallet or contract address to transfer assets to.
- **_data:** An optional field for anything else that should be included, [converted into Hex Code](https://www.rapidtables.com/convert/number/ascii-to-hex.html). (i.e. `{"method": "funding"}` -> `0x7b226d6574686f64223a202266756e64696e67227d`)







