# Yield Abstraction Model

## What is a Pilot?

The Pilot is SuperCluster's automated strategy management layer that handles all aspects of yield optimization and capital allocation. It functions as a portfolio manager, making decisions about where and how to deploy deposited stablecoins across integrated lending protocols.

The Pilot operates based on predefined parameters and algorithms that balance multiple objectives:

- Maximizing risk-adjusted returns
- Maintaining sufficient liquidity for withdrawals
- Diversifying exposure across multiple protocols
- Responding to changing market conditions

Users interact with a single, unified interface while the Pilot manages the complexity of multi-protocol integration behind the scenes.

## What Users Do NOT Need to Manage

SuperCluster abstracts away the operational complexity of yield farming and protocol management. Users do not need to:

1. **Monitor APY Rates**<br/>
   The Pilot continuously tracks yields across all integrated lending protocols and automatically reallocates capital to optimize returns.

2. **Execute Rebalancing**<br/>
   Capital allocation adjustments happen automatically based on the Pilot's evaluation of market conditions. Users do not need to manually move funds between protocols.

3. **Harvest Yield**<br/>
   The protocol automatically collects accrued interest from lending positions and distributes it to token holders through the rebase mechanism or exchange rate updates.

4. **Select Protocols**<br/>
   Users do not choose which lending protocols to use. The Pilot manages protocol selection and allocation based on its optimization strategy.

5. **Manage Gas Costs**<br/>
   Individual users do not pay gas fees for yield harvesting, rebalancing, or strategy execution. These operations are performed at the protocol level and costs are socialized across all participants.

6. **Track Multiple Positions** <br/>
   Instead of managing separate deposits across different lending platforms, users hold a single receipt token (sUSDC or wsUSDC) that represents their aggregate position and accumulated yield.

This abstraction model allows users to benefit from sophisticated yield optimization strategies without requiring technical knowledge or active portfolio management.
