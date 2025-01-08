---
id: icx-delegation-script
title: ICX delegation script
description: Learn how ICON validators can use the ICX delegation script to track the votes they receive through Omm.
slug: /icx-delegation-script
sidebar_position: 5
---

# ICX delegation script
Learn how ICON validators can use the ICX delegation script to track the votes they receive through Omm.


sICX and bOMM holders have ICX voting power, which they can [delegate to ICON validators](/vote-validators).

The [delegation script](https://github.com/openmoneymarket/openmoneymarket-mono/tree/development/scripts/prep-icx-delegations) fetches the wallet addresses that use bOMM to vote for a specific validator, and their voting power in ICX. The output is saved to a JSON file using this format:

```
{
    "hx04c8c5e5f412aa7c1986514bbbef2d269a2733fc": 466204891016976169228621,
    "hx989fa78200b23ca042e52e370128ee141187f443": 438638739301371746761613,
    "hx1be60841025db1b22126ba08ba519326603029c9": 342672743228696263962315,
    "hx5933fba534f5152ab435e02f7067e4729affa92e": 250278905329592107143901,
    "hx90899b65c16139ad4983a7a570c17db84c5162c4": 217572371437773081042390,
    "hx1747aeab5afbdabd85af027ae249897cd5165146": 199561909138062903960000,
    "hxa777652bb82b6e6a88678f2b5ccda93e3163ebc2": 156338462634667962819797
}
```

## Run the ICX delegation script
First, make sure you have Python 3 and PIP installed on your device. Then:

1. Install the required libraries:

```pip3 install -r requirements.txt```

2. Run the script to fetch a list of wallet addresses and their voting power for a specific validator (also known as a P-Rep):

```
python3 prep-icx-delegations.py -prep PREP_ADDRESS
python3 prep-icx-delegations.py -prep hx0000000000000000000000000000000000000000
```

3. Open the `timestamp_prepaddress_delegations.json` file the script created, then divide the number beside each wallet address by 1,000,000,000,000,000,000 (10^18) to get the ICX amount.


## Verify the votes
Community trackers don't pick up the votes cast with bOMM, because the votes are routed through the staking contract before they're assigned to a validator.

To verify how much ICX the [liquid staking contract](https://tracker.icon.community/contract/cx43e2eec79eb76293c298f2b17aec06097be606e0) has delegated to a validator via bOMM:

1. Go to the [staking contract](https://tracker.icon.community/contract/cx43e2eec79eb76293c298f2b17aec06097be606e0), then click the Contract tab.
2. Find `getActualUserDelegationPercentage`, then query Omm's lending pool contract: `cxfb312bbd0a244b9e7bb5794c91f4e4acc41dea94`.
3. Locate your validator address, then copy the hex value beside it.
4. [Convert the hex value to decimal](https://www.rapidtables.com/convert/number/hex-to-decimal.html), then divide it by 1,000,000,000,000,000,000 (10^18). Save this result as `percentage`.
5. Find `getUndelegatedICX` under the Contract tab, then [convert the hex value to decimal](https://www.rapidtables.com/convert/number/hex-to-decimal.html) and divide by 10^18. Save the value as `undelegatedICX`.
6. Calculate the ICX delegated to your validator address with ```(percentage ÷ 100) x undelegatedICX```

You can also verify your bOMM votes from the [Vote page](https://app.omm.finance/#/vote/) if you sign in with a validator-associated wallet.