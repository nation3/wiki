---
slug: /governance
---

# 🗳 Governance process

The current governance process has the following components:

- [Snapshot space](https://snapshot.org/#/nation3.eth): $veNATION holders can vote on proposals. In the near future, citizens (holders of a Nation3 passport NFT) will be the ones able to propose and vote on governance proposals.
- [Aragon DAO](https://client.aragon.org/#/nation3): The DAO that actually holds the funds. This DAO is governed by $veNATION holders.
- Proposals committee: A committee, elected by citizens and ratified by $veNATION holders (in the future by citizens), which has the responsibility of submitting the passed Snapshot votes to the Aragon DAO, for $veNATION holders to ratify such proposals.

A proposal would go through the following steps:

1. Author publishes it as a forum post.
2. Author proposes it on Snapshot.
3. Citizens vote (duration is 48h). Currently it is $veNATION holders who vote, until citizen passports are rolled out .
4. If approved, any of the members of the proposals committee submits the proposal to the Aragon DAO.
5. $veNATION holders ratify it (duration is 24h for normal proposals, one week for sensitive ones).

We can think of this system as bicameral, where citizens are the most active governance actors, but need to keep in tune with $veNATION holders. Incentives are well aligned, as citizens need to also lock $veNATION to get citizenship.

This governance process is meant to kickstart the governance process within the community, but it's by no means final.

## DAO permissions

The DAO is an Aragon DAO with:
- Two [Agent app instances](https://aragon.org/agent): One — called Agent below — is meant to hold funds and control non-sensitive actions, and the other one — called Agent ($veNATION supermajority) below — is meant to control extraordinary or sensitive actions, such as minting new $NATION or making significant changes to the DAO itself.
- Two Voting app instances: One per Agent app. The first one is governed by $veNATION holders with simple majority voting, and the other with supermajority (66%) and a minimum quorum (20%). The latter is the one used to decide on sensitive actions.

Here's a breakdown with the permission structure:
![](https://user-images.githubusercontent.com/718208/164224949-10b3c522-9016-4ad8-98e3-c214635237e4.png)
![](https://user-images.githubusercontent.com/718208/164223663-1781297a-a82d-4fc3-a9d1-8cb0b25bba60.png)

## What's currently governed by the DAO

- Via the normal Agent instance:
  - Its treasury, consisting of most of $NATION's initial supply
  - The [`MerkleDistributor`](https://etherscan.io/address/0xcab2B7614351649870e4DCC3490Ab692bf3beD60) smart contract used for the tweetdrop
  - The `PassportIssuer` smart contract that will be used to mint and burn passports
  - The [`BoostedLiquidityRewards`](https://etherscan.io/address/0x4f1e79793fd5f5805b285c3f29379b8056a4476b) smart contract used to distribute liquidity rewards

- Via the Agent (veNATION supermajority) instance:
  - The $NATION token (the DAO can decide on the minting schedule, or cap the supply)
  - Its own voting parameters and other key DAO parameters

## Who is the initial proposal committee

- [Luis Cuende](https://twitter.com/licuende): Nation3 core contributor, previously founder of Aragon.
- [Carlos Juarez](https://twitter.com/0xPaella): Nation3 core contributor, previously founder of Guesser (acquired by Gemini).
- [Uxio Piñeiro](https://twitter.com/0xgallego): Nation3 core contributor, smart contract developer.
- [Anastasiya Belyaeva](https://twitter.com/anastasiya_vc): Nation3 core contributor, previously founder of Fabric Ventures.
