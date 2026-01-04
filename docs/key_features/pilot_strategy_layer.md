# Pilot Strategy Layer

The Pilot Strategy is SuperCluster's portfolio manager. It decides how deposits are spread across lending protocols to balance yield, liquidity, and risk.

## Role in the Architecture

- Sits between the core contract and the adapter layer.
- Consumes signals (APY, liquidity depth, risk scores) and outputs allocation targets.
- Rebalances positions to keep a healthy mix of yield and withdrawal readiness.

## Allocation Inputs

- **Yield rate:** current APY across supported protocols.
- **Liquidity depth:** ability to unwind positions without slippage or delay.
- **Risk score:** protocol security posture and incident history.
- **Diversification:** spread exposure to avoid concentration risk.

## Rebalancing Triggers

- Meaningful APY deltas that justify moving capital.
- Liquidity constraints or withdrawal demand.
- Risk events or parameter updates.
- Scheduled maintenance cycles.

## Operating Modes

- **Hackathon phase:** manually operated by the core team with event-based rebalancing and rebases.
- **Production target:** automated, algorithm-driven allocation with daily rebases, parameterized safeguards, and potential governance controls.

## User Impact

- Higher likelihood of stable, competitive yields without yield-chasing extremes.
- Liquidity prepared for withdrawals via the two-step process.
- Transparent, repeatable allocation logic that can be audited and improved over time.
