# Composability in DeFi

SuperCluster is built so its savings tokens stay useful everywhere in DeFi instead of being locked inside a vault. Composability is the design goal: sUSDC and wsUSDC should behave like money-legos that move across protocols without breaking yield accrual.

## Why Composability Matters

- Keep earning while in motion: holdings continue accruing yield even when they sit in other protocols.
- Instant optionality: users can borrow, lend, LP, or trade without unwinding their savings position.
- Infrastructure mindset: builders can treat sUSDC/wsUSDC as primitives to compose new strategies.

## Token Formats for Integration

- **sUSDC (rebasing):** balance increases as the exchange rate rises. Best for wallets and protocols that support rebasing.
- **wsUSDC (non-rebasing):** fixed balance with an appreciating exchange rate. Best for integrations that expect static balances (most lending and AMM setups).

Both formats map to the same underlying value. Wrapping and unwrapping is lossless and can be done at any time based on integration needs.

## DeFi Integration Patterns

- **Collateral in lenders:** supply wsUSDC to borrow while the underlying value grows via the exchange rate.
- **Liquidity provision:** pair wsUSDC with USDC or other stable pairs; LP fees stack on top of protocol yield.
- **DEX swaps:** market-driven exits for users who want immediate liquidity without waiting for the two-step withdrawal queue.
- **Structured products:** build leveraged, hedged, or tranching strategies on wsUSDC without handling rebasing complexity.

## Design Constraints That Preserve Composability

- **Protocol-agnostic receipt tokens:** no protocol-specific logic inside token contracts.
- **Predictable accounting:** Exchange Rate = Total Assets Under Management / Total sUSDC Supply. Simple for integrators to price and track.
- **Optional wrapping:** integrators choose rebasing vs non-rebasing behavior without changing ownership.
- **Non-custodial by default:** users never surrender ownership when moving tokens across ecosystems.

## Integration Tips for Builders

- Default to **wsUSDC** if your system does not support rebasing balances.
- Treat the exchange rate as the source of truth for pricing and health-factor calculations.
- For AMMs, consider stable-swap curves to minimize slippage around the 1:1 plus yield peg.
- Surface both symbols (sUSDC/wsUSDC) clearly in UI so users understand whether balances or exchange rates will move.
