---
slug: /governance
---

# 🗳 治理流程

目前的治理过程有以下内容：

- [Snapshot space](https://snapshot.org/#/nation3.eth"): $veNATION持有人可以对提案进行投票。在不久的将来，公民（Nation3护照NFT的持有者）将是能够提出治理提案并投票的人。
- [Aragon DAO](https://client.aragon.org/#/nation3): 实际持有资金的DAO。这个DAO由$veNATION持有人管理。
- 提案委员会。一个由公民选举并由$veNATION持有人批准的委员会（将来由公民批准），负责将通过的快照投票提交给Aragon DAO，让veNATION持有人批准这些提案。

一项提案将经过以下步骤：

1. 作者将其作为论坛帖子发表。
2. 作者在快照上提出。
3. 公民投票（持续时间为48小时）。目前是$veNATION的持有者投票，直到公民护照被推出。
4. 如果被批准，提案委员会的任何成员将提案提交给阿拉贡DAO。
5. 币种持有者批准它（普通提案的持续时间为24小时，敏感提案的持续时间为一周）。

我们可以认为这个系统是两院制，公民是最积极的治理者，但需要与$veNATION持有者保持一致。激励措施很一致，因为公民也需要锁定veNATION来获得公民身份。

这个治理过程是为了启动社区内的治理过程，但它绝不是最终的。

## DAO权限

该DAO是一个阿拉贡DAO，具有：
- 两个[代理应用实例](https://aragon.org/agent "代理应用实例")：一个--下面称为代理--旨在持有资金和控制非敏感行动，另一个--下面称为代理（veNATION超级多数）--旨在控制特殊或敏感行动，如铸造新的$NATION或对DAO本身进行重大修改。
- 两个Voting应用实例。每个代理应用一个。第一个是由$veNATION持有者以简单多数投票方式管理，另一个是以超级多数（66%）和最低法定人数（20%）管理。后者是用来决定敏感行动的。

下面是与权限结构的明细：
![](https://user-images.githubusercontent.com/718208/164224949-10b3c522-9016-4ad8-98e3-c214635237e4.png)
![](https://user-images.githubusercontent.com/718208/164223663-1781297a-a82d-4fc3-a9d1-8cb0b25bba60.png)

## 目前由DAO管辖的是什么？

- 通过正常的代理实例：

    它的国库，由$NATION的大部分初始供应组成
    用于推特投放的[MerkleDistributor](https://etherscan.io/address/0xcab2B7614351649870e4DCC3490Ab692bf3beD60 "MerkleDistributor")智能合约
    `PassportIssuer`智能合约，将用于铸造和刻录护照
    `LiquidityRewards`智能合约，可能用于分配流动性奖励&#x20;

- 通过代理（veNATION超级多数）实例：

    $NATION代币（DAO可以决定铸币时间表，或限制供应量）
    它自己的投票参数和其他关键的DAO参数

## 最初的提案委员

- [Luis Cuende:](https://twitter.com/licuende "Luis Cuende:") Nation3的核心贡献者，曾是Aragon的创始人。
- [Carlos Juarez:](https://twitter.com/0xPaella "Carlos Juarez:") Nation3的核心贡献者，曾是Guesser（被Gemini收购）的创始人。
- [Uxio Pinheiro:](https://twitter.com/0xgallego "Uxio Pinheiro:") Nation3的核心贡献者，智能合约开发者。
- [Anastasiya Belyaeva:](https://twitter.com/anastasiya_vc "Anastasiya Belyaeva:") Nation3的核心贡献者，曾是Fabric Ventures的创始人。
