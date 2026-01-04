# The Solution

## SuperCluster: Liquid Saving Protocol for Stablecoins

SuperCluster introduces a new DeFi primitive: a Liquid Saving Protocol.  
It applies the liquidity and composability principles of liquid staking to stablecoins, enabling yield generation without exposure to market volatility.

By focusing exclusively on stable assets, SuperCluster provides:

- Principal stability
- Sustainable yield
- Full liquidity
- Native composability across DeFi

## Design Principles

### 1. Principal Stability

**Objective:** Remove market risk from yield generation.

**Approach:**

- Accept only stablecoin deposits (e.g. USDC)
- No exposure to volatile assets
- Asset value remains anchored to the underlying stablecoin
- Yield represents net value increase, not price appreciation

As a result, users earn yield without needing to manage market cycles or price movements.

### 2. Consistent Yield

**Objective:** Generate sustainable returns without speculative incentives.

**Approach:**

- Allocate funds to established lending protocols
- Diversify exposure across multiple markets
- Optimize allocation based on risk-adjusted returns
- Avoid reliance on short-term token emissions

**Initial Yield Sources:**

| Protocol  | Category              | Risk Profile |
|----------|-----------------------|--------------|
| Aave     | Established lending   | Low          |
| Morpho   | Optimized lending     | Low–Medium   |
| Centauri | Cross-chain lending   | Medium       |
| Tumbuh   | Emerging markets      | Medium       |

Allocation decisions are handled by the **Pilot Strategy**, which balances yield, liquidity, and risk.

### 3. Full Liquidity

**Objective:** Maintain access and composability while earning yield.

**Approach:**

- Mint liquid receipt tokens for all deposits
- Tokens remain transferable and usable across DeFi
- No forced lock-ups at the protocol level

Users can access liquidity through:

- Secondary markets (DEX swaps)
- Native protocol withdrawals with deterministic redemption

## Protocol Flow

### Deposit and Yield Lifecycle

1. User deposits stablecoins
2. SuperCluster mints sToken at 1:1
3. Pilot Strategy allocates capital to lending protocols
4. Yield accrues from borrower activity
5. Protocol updates total assets
6. Rebase or exchange rate adjustment reflects yield

User ownership is represented entirely through tokens, not vault shares.

## Architecture Overview

User  
└─ Deposits stablecoins  
&nbsp;&nbsp;&nbsp;&nbsp;└─ Receives sToken / wsToken  
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;└─ SuperCluster Core  
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;├─ Mint / burn logic  
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;├─ Rebase & accounting  
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;└─ Wrapping mechanism  
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;└─ Pilot Strategy  
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;├─ Allocation logic  
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;└─ Risk controls  
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;└─ Yield Adapters  
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;└─ External Lending Protocols  

This separation ensures modularity, upgradeability, and risk isolation.

## Dual-Token Model

### sToken (Rebasing)

- Balance increases as yield accrues
- Represents proportional ownership of total assets
- Suitable for direct holding and savings use cases

**Use case:** Users who prefer balance-based growth.

### wsToken (Non-Rebasing)

- Fixed balance
- Value increases via exchange rate
- Compatible with protocols that do not support rebasing tokens
- Fully convertible back to sToken

**Use case:** DeFi integrations, collateral, liquidity provision.

## Key Innovations

### Modular Adapter Layer

Each yield source is integrated through a dedicated adapter responsible for:

- Deposits and withdrawals
- Protocol-specific interactions
- Yield accounting

**Benefits:**

- Easy addition or removal of yield sources
- Reduced blast radius in case of issues
- Protocol-agnostic design

### Pilot Strategy Layer

The Pilot Strategy functions as a portfolio manager:

- Allocates capital across lending protocols
- Balances yield, liquidity, and risk
- Designed for future governance or automation upgrades

**Example Allocation Factors:**

| Factor          | Purpose                     |
|-----------------|-----------------------------|
| Yield           | Return optimization         |
| Liquidity       | Withdrawal readiness        |
| Risk            | Exposure control            |
| Diversification | Systemic risk reduction     |

### Rebase & Accounting Model

- sToken: supply rebases to reflect yield
- wsToken: supply remains constant, exchange rate increases
- Both represent the same underlying ownership

**Rebase Frequency:**

- Hackathon MVP: event-based
- Production target: automated daily rebase

## Comparison

| Feature               | Vaults | Liquid Staking | SuperCluster |
|-----------------------|--------|----------------|--------------|
| Stable Principal      | Yes    | No             | Yes          |
| Yield                | Yes    | Yes            | Yes          |
| Liquidity             | No     | Partial        | Yes          |
| Composability         | Limited| High           | High         |
| Market Risk           | None   | High           | None         |
| Works in Bear Markets | Yes    | No             | Yes          |

## Use Cases

### Individual Users

- Earn yield on idle stablecoins
- Maintain instant access via liquid tokens
- Use savings across DeFi without interruption

### DeFi Protocols

- Accept yield-bearing stablecoins as collateral
- Improve capital efficiency for users
- Integrate standardized saving primitives

### DAO Treasuries

- Generate yield on treasury assets
- Maintain operational liquidity
- Reduce idle capital without lock-ups

### Liquidity Providers

- Combine LP fees with underlying yield
- Increase capital efficiency of stable pools

## Safety and Risk Management

### Hackathon Scope

- Core functionality
- Limited scale deployment
- Focus on correctness and clarity

### Production Roadmap

- External audits
- Bug bounty program
- Emergency controls and circuit breakers
- Multi-signature governance
- Reserve buffer funded from protocol fees

## Economic Model

### Fees

- Hackathon phase: No fees
- Production: Performance fee on generated yield only

**Fee Characteristics:**

- No deposit fees
- No withdrawal fees
- No management fees

Fee distribution is designed to support protocol sustainability, risk reserves, and strategy operations.

## Roadmap

### MVP

- Core contracts
- Pilot Strategy
- Initial adapters

### Audit & Testing

- Security reviews
- Community validation

### Production Launch

- Mainnet deployment
- Fee activation

### Expansion

- Additional yield sources
- Multi-chain support
- Governance framework

## Summary

SuperCluster addresses the core limitations of existing DeFi yield solutions by introducing a stablecoin-native, liquid, and composable saving protocol.

**Key Outcomes:**

- Stable principal through asset selection
- Liquid ownership via tokenization
- Sustainable yield from real lending activity
- Modular architecture for long-term evolution

SuperCluster is designed as infrastructure, not a single strategy—providing a foundation for programmable, yield-bearing stablecoins across DeFi.
