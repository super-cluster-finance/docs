# Liquid Saving Token

SuperCluster mints Liquid Saving Tokens for every USDC deposit. They prove ownership of the underlying principal and continuously accrue yield through the protocol exchange rate.

## What They Represent

- Minted 1:1 with deposited USDC and redeemable for principal plus earned yield.
- Transferable and composable across DeFi; ownership stays with the holder.
- Remain liquid even while the protocol allocates funds into lending markets.

## Two-Token System

- **sUSDC (rebasing):** balance grows as yield is distributed. Wallets show increasing token counts over time.
- **wsUSDC (non-rebasing):** fixed balance whose value increases with the exchange rate. Safer choice for protocols that do not support rebasing.

Wrapping and unwrapping between sUSDC and wsUSDC is lossless and can be done at any time based on integration needs.

## How Value Accrues

- Yield harvested by adapters flows into the exchange rate managed by the core contract.
- sUSDC balances rise with each rebase; wsUSDC keeps balance constant while value per token increases.
- Exchange rate reference: Exchange Rate = Total Assets Under Management / Total sUSDC Supply.
- Example: deposit 1,000 USDC → mint 1,000 sUSDC. After yield accrues, 1,000 sUSDC could be worth 1,050 USDC. The equivalent wsUSDC position keeps the same token count while each unit is worth more.

## User Benefits

- Principal stability through a stablecoin-only strategy.
- Continuous yield without sacrificing liquidity.
- Integration flexibility via rebasing and non-rebasing formats.

## Lifecycle at a Glance

1. **Deposit:** user approves and deposits USDC.
2. **Mint:** protocol issues sUSDC 1:1 as proof of ownership.
3. **Optional wrap:** user converts to wsUSDC for integrations that need static balances.
4. **Earn:** exchange rate increases as adapters generate yield (manual during hackathon, daily in production).
5. **Exit:** request-and-claim withdrawal through the protocol or swap sUSDC/wsUSDC on a DEX for instant liquidity.
