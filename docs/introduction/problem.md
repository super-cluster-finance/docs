# The Problem

## The DeFi Yield Paradox

Liquid staking has significantly improved capital efficiency in DeFi. Protocols such as Lido introduced liquid receipt tokens that allow users to earn yield while retaining liquidity. This model successfully addresses the traditional trade-off between yield and asset lock-up.

However, liquid staking introduces a fundamental limitation: exposure to asset price volatility.

Yield generation remains tightly coupled to the market performance of the underlying asset, creating significant downside risk during unfavorable market conditions.

## Market Volatility as Structural Risk

### Liquidity Does Not Equal Stability

Liquid staking provides token liquidity, not value stability. While receipt tokens can be traded, their value remains fully exposed to price movements of the underlying asset.

### Illustrative Example

Initial deposit:  
10 ETH @ $4,000 = $40,000  

Staking yield:  
5% APY → 10.5 ETH after 1 year  

**Scenario A (Price Increase):**

- ETH price rises to $4,500  
- Portfolio value: $47,250  

**Scenario B (Price Decrease):**

- ETH price falls to $1,200  
- Portfolio value: $12,600  

In adverse market conditions, staking yield becomes negligible relative to capital loss.

## Structural Limitation

Liquid staking protocols:

- Solve liquidity through transferable receipt tokens
- Do not protect principal value
- Depend heavily on favorable market conditions
- Implicitly require market timing by users

## Stablecoin Yield Limitations

Stablecoins remove price volatility but introduce a different set of constraints.

### Current Options

#### Idle Stablecoins

- Stable principal
- No yield
- Purchasing power erosion over time

#### Direct Lending Protocols

- Stable principal
- Yield generation
- Limited liquidity of deposit positions
- Single protocol exposure

#### Yield Aggregators

- Automated strategy allocation
- Stable principal
- Vault-based positions with limited composability
- Funds effectively locked at the strategy level

Despite different implementations, the trade-off remains consistent.

Yield, liquidity, and composability cannot be achieved simultaneously.

## The Composability Gap

Most yield-generating stablecoin solutions lock deposits inside vaults or protocol-specific positions. These positions are difficult to reuse across the broader DeFi ecosystem.

### User and Protocol Requirements

- Stable principal
- Passive yield generation
- Immediate liquidity
- Interoperability across DeFi protocols

### Current State

- At best, solutions provide two of the four
- Composability is often sacrificed for yield
- Liquidity is constrained by withdrawal mechanics

## Market Timing Dependency

Yield strategies tied to volatile assets introduce implicit market timing decisions.

- Yield appears attractive during bull markets
- Capital exits during downturns
- Liquidity conditions deteriorate precisely when stability is most needed

This behavior amplifies systemic risk and creates inconsistent outcomes for average users and treasury managers.

## Limitations of Existing Approaches

### Liquid Staking Protocols

- Exposed to volatile asset prices
- Yield insufficient to offset large drawdowns
- Market timing risk
- High liquidity at the token level

### Yield Aggregators

- Stable principal
- Automated yield optimization
- Vault-based positions reduce composability
- Limited secondary liquidity

### Direct Lending

- Stable principal
- Yield from lending activity
- Non-transferable deposit positions
- Concentrated protocol risk

### Restaking Models

- Additional yield sources
- Increased complexity and slashing risk
- High volatility exposure

## The Core Problems

### 1. Market Risk in Yield Generation

Yield strategies are often coupled with asset price volatility.

### 2. Yield vs. Liquidity Trade-off

Users must choose between productive capital and immediate access.

### 3. Limited Composability

Yield-bearing positions are not standardized or transferable across DeFi.

## Market Opportunity

- Stablecoins represent over $150B in on-chain value
- A large portion remains idle or underutilized
- Protocols increasingly require yield-bearing, liquid collateral
- Demand exists for conservative, market-neutral yield products

Despite this, there is no widely adopted primitive for liquid, composable, yield-bearing stablecoins with preserved principal.

## What the Market Requires

A protocol that:

- Preserves principal via stablecoin-only strategies
- Generates yield from proven lending mechanisms
- Maintains liquidity through transferable receipt tokens
- Enables composability across DeFi
- Functions independently of market cycles

## Summary

The fundamental challenge in DeFi is not yield generation alone, but yield generation without sacrificing stability, liquidity, or composability.

Existing solutions introduce trade-offs:

- Volatility in liquid staking
- Lock-ups in yield aggregators
- Illiquidity in direct lending

A new primitive is required to resolve these constraints simultaneously.
