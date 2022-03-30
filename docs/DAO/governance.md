---
slug: /governance
---

# Governance process

The current governance process has the following components:

- [Snapshot space](https://snapshot.org/#/nation3.eth): Here citizens (holders of a Nation3 passport NFT) can propose and vote on governance proposals.
- [Aragon DAO](https://client.aragon.org/#/nation3): The DAO that actually holds the funds. This DAO is governed by $NATION holders with simple majority voting.
- Proposals committee: A committee, elected by citizens and ratified by $NATION holders, which has the responsibility of submitting the passed Snapshot votes to the Aragon DAO, for $NATION holders to ratify such proposals.

A proposal would go through the following steps:

1. Author publishes it as a forum post
2. Author proposes it on Snapshot
3. Citizens vote (duration is 24h)
4. If approved, any of the members of the proposals committee submits the proposal to the Aragon DAO
5. $NATION holders ratify it (duration is 24h)

We can think of this system as bicameral, where citizens are the most active governance actors, but need to keep in tune with $NATION holders. Incentives are well aligned, as citizens need to also lock $NATION to get citizenship.

This governance process is meant to kickstart the governance process within the community, but it's by no means final.

## What's currently governed by the DAO

- Its treasury, consisting of most of $NATION's initial supply
- The $NATION token (the DAO can mint more)
- Its own voting parameters
- The `MerkleDistributor` smart contract used for the tweetdrop
- The `PassportIssuer` smart contract used to mint and burn passports
- The `LiquidityRewards` smart contract that might be used to distribute liquidity rewards

## Who is the initial proposal committee

- [Luis Cuende](https://twitter.com/licuende): Nation3 core contributor, previously founder of Aragon.
- [Carlos Juarez](https://twitter.com/0xPaella): Nation3 core contributor, previously founder of Guesser (acquired by Gemini).
- [Anastasiya Belyaeva](https://twitter.com/anastasiya_vc): Nation3 core contributor, previously founder of Fabric Ventures.
