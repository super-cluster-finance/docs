# Key Assets

## USDC

USDC is the primary deposit asset accepted by SuperCluster. Users deposit USDC into the protocol and receive liquid receipt tokens in return. The protocol maintains USDC as the underlying collateral, allocating it across lending markets to generate yield.

## sUSDC (Rebasing Token)

sUSDC is a rebasing receipt token that automatically increases in balance as yield accrues. When users deposit USDC, they receive an equivalent amount of sUSDC. Over time, the balance of sUSDC in the user's wallet grows proportionally to the yield earned by the protocol.

**Characteristics:**

- Balance increases automatically with yield distribution
- 1 sUSDC always represents 1 unit of underlying value plus accumulated returns
- Suitable for users who prefer to see their balance grow directly
- Can be wrapped into wsUSDC for enhanced DeFi compatibility

## wsUSDC (Non-Rebasing Token)

wsUSDC is a wrapped, non-rebasing version of sUSDC. The token balance remains constant, but the exchange rate between wsUSDC and USDC increases as yield accumulates. This design makes wsUSDC compatible with DeFi protocols that do not support rebasing token mechanics.

**Characteristics:**

- Balance remains static
- Value per token increases over time
- Better suited for use as collateral in lending protocols
- Compatible with liquidity pools and AMMs
- Can be unwrapped back to sUSDC at any time

**Exchange Mechanism:**

```
wsUSDC Value = sUSDC Balance × Exchange Rate
```

The exchange rate is calculated based on the total assets under management divided by the total supply of sUSDC.
