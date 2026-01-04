# Modular Yield Adapters

The adapter layer connects SuperCluster to external lending markets so the core protocol stays protocol-agnostic and easily extensible.

## Why the Adapter Layer Exists

- Diversifies yield sources across multiple venues without coupling core logic to any single protocol.
- Standardizes deposits, withdrawals, and yield harvesting behind a common interface.
- Makes it simple to add or remove integrations as better opportunities appear.

## Current and Target Integrations

- Aave Adapter
- Morpho Adapter

Adapters share the same responsibilities, regardless of the underlying protocol.

## Adapter Responsibilities

- **Deposit and withdraw:** move stablecoins in and out of lending markets per allocation targets.
- **Harvest yield:** report earned interest back to the core for exchange-rate updates.
- **Health checks:** surface liquidity and risk signals used by the Pilot Strategy.
- **Fail-safe behavior:** support orderly unwinds when liquidity needs to be prepared for withdrawals.

## How Allocation Flows

1. Pilot Strategy computes target weights across protocols.
2. Adapters execute deposits or withdrawals to hit those targets.
3. Yield harvested by adapters updates total assets under management, driving the exchange rate.

## Extending to New Protocols

- Build a new adapter that implements deposit, withdraw, and accounting hooks.
- Include checks for liquidity depth, rate stability, and integration-specific risks.
- Validate with staged rollouts (sandbox → testnet → mainnet) before routing user funds.
