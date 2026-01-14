# The Solution

## SuperCluster: Liquid Saving Protocol for Stablecoins

SuperCluster introduces a new DeFi primitive: a **Liquid Saving Protocol**.

**Think of it as "Lido for stablecoins"** — applying the liquidity and composability principles of liquid staking to stablecoins, but without the market volatility risk.

By focusing exclusively on stable assets and battle-tested lending protocols, SuperCluster provides:

- **Principal stability** — No volatile asset exposure
- **Sustainable yield** — Real returns from lending activity
- **Full liquidity** — Transferable, composable receipt tokens
- **Native composability** — Use across DeFi without restrictions

**SuperCluster eliminates the fundamental trade-off** between yield, liquidity, and composability.

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

**Integrated Yield Sources (Lisk Hackathon Scope):**

| Protocol | Category            | Risk Profile | Purpose                  |
| -------- | ------------------- | ------------ | ------------------------ |
| Compound | Optimized lending   | Low–Medium   | Primary yield generation |
| Dolomite | Established lending | Low          | Diversified exposure     |

Allocation decisions are handled by the **Pilot Strategy**, which balances yield, liquidity, and risk across these protocols.

_Additional protocols may be integrated in production deployments._

### 3. Full Liquidity

**Objective:** Maintain access and composability while earning yield.

**Approach:**

- Mint liquid receipt tokens for all deposits
- Tokens remain fully transferable and usable across DeFi
- No forced lock-ups at the protocol level
- Dual-token system for maximum flexibility

Users can access liquidity through:

- **Instant liquidity:** DEX swaps (sUSDC/USDC or wsUSDC/USDC pairs)
- **Protocol withdrawal:** Two-step request-and-claim process with deterministic redemption

Unlike vaults that trap funds, SuperCluster's liquid tokens provide **immediate access** to value.

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

```
┌─────────────────────────────────────────────┐
│              User Layer                      │
│      (Deposit USDC → Receive sUSDC)         │
└──────────────────┬──────────────────────────┘
                   │
┌──────────────────▼──────────────────────────┐
│         SuperCluster Core                    │
│  • Mint/burn logic                          │
│  • Rebase mechanism                         │
│  • Wrapping/unwrapping (sToken ↔ wsToken)  │
└──────────────────┬──────────────────────────┘
                   │
┌──────────────────▼──────────────────────────┐
│          Pilot Strategy                      │
│  • Portfolio allocation logic               │
│  • Risk-adjusted optimization               │
│  • Dynamic rebalancing                      │
└──────────────────┬──────────────────────────┘
                   │
        ┌──────────┴──────────┐
        │                     │
┌───────▼────────┐   ┌────────▼────────┐
│Compound Adapter│   │ Dolomite Adapter│
└───────┬────────┘   └────────┬────────┘
        │                     │
┌───────▼────────┐   ┌────────▼────────┐
│Compound Protocol│  │Dolomite Protocol│
└────────────────┘   └─────────────────┘
```

**Key Benefits:**

- Clear separation of concerns
- Modular and upgradeable design
- Easy integration of new yield sources
- Risk isolation between components

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

The Pilot Strategy functions as an intelligent portfolio manager that automatically optimizes capital allocation across lending protocols.

**Core Functions:**

- Allocates capital across Compound and Dolomite
- Balances yield, liquidity, and risk in real-time
- Dynamic rebalancing based on market conditions
- Designed for future governance or user-selectable strategies

**Strategy Examples** _(Flexible architecture supports multiple approaches)_

| Strategy Type         | Focus                         | Best For                      |
| --------------------- | ----------------------------- | ----------------------------- |
| Conservative Yield    | Stable returns, lower risk    | Risk-averse users, treasuries |
| Moderate Balanced     | Balanced yield and safety     | Most users                    |
| Optimized Performance | Maximum risk-adjusted returns | Yield maximizers              |

**Allocation Factors:**

| Factor          | Purpose                 | Weight |
| --------------- | ----------------------- | ------ |
| Yield (APY)     | Return optimization     | High   |
| Liquidity Depth | Withdrawal readiness    | High   |
| Risk Score      | Protocol safety         | Medium |
| Diversification | Systemic risk reduction | Medium |

The Pilot Strategy continuously monitors these factors and rebalances when optimization thresholds are met (e.g., APY differential >2%).

### Rebase & Accounting Model

- sToken: supply rebases to reflect yield
- wsToken: supply remains constant, exchange rate increases
- Both represent the same underlying ownership

**Rebase Frequency:**

- Hackathon MVP: event-based
- Production target: automated daily rebase

## Comparison

| Feature               | Vaults  | Liquid Staking | SuperCluster |
| --------------------- | ------- | -------------- | ------------ |
| Stable Principal      | Yes     | No             | Yes          |
| Yield                 | Yes     | Yes            | Yes          |
| Liquidity             | No      | Partial        | Yes          |
| Composability         | Limited | High           | High         |
| Market Risk           | None    | High           | None         |
| Works in Bear Markets | Yes     | No             | Yes          |

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

## Why Lisk Network?

SuperCluster is built on **Lisk Network** for the following strategic reasons:

### Optimal Infrastructure for Liquid Savings

| Feature                     | Why It Matters for SuperCluster                                 |
| --------------------------- | --------------------------------------------------------------- |
| **Low Transaction Costs**   | Enables frequent rebalancing & daily rebasing without high fees |
| **High Throughput**         | Supports large-scale capital operations efficiently             |
| **Ethereum-Grade Security** | Built on OP Stack for robust security guarantees                |
| **Growing DeFi Ecosystem**  | Access to expanding lending protocols (Compound, Dolomite)      |
| **Capital-Intensive Focus** | Infrastructure designed for financial applications              |

**Key Advantage:** Low costs make micro-optimizations and frequent yield distribution economically viable — critical for a liquid saving protocol.

---

## Development Roadmap

### Phase 1: Hackathon MVP (Current)

- Core contracts (Vault, sToken, wsToken)
- Pilot Strategy with basic allocation logic
- Compound and Dolomite adapters
- Event-based rebase mechanism
- Frontend interface (NextJS + Privy)
- Documentation and demo

**Scope:** Lisk Network testnet deployment for hackathon submission

### Phase 2: Alpha - Security & Testing

- Comprehensive test coverage
- Internal security audit
- Bug fixes and optimizations
- Community testing program (closed beta)
- Enhanced frontend UX

### Phase 3: Beta - Audit & Risk Management

- Professional smart contract audit (2+ firms)
- Bug bounty program launch
- Risk management framework implementation
- Daily automated rebase
- Multi-sig governance setup

### Phase 4: Production Launch - Mainnet

- Lisk Network mainnet deployment
- DEX integration (sUSDC/USDC pools)
- Performance fee implementation
- Algorithm-driven Pilot Strategy
- Monitoring and alerting systems

### Phase 5: Expansion

- Additional yield sources
- Multi-chain support (Ethereum, Base, Arbitrum)
- Governance framework and DAO transition
- User-selectable strategies

## Summary

SuperCluster addresses the core limitations of existing DeFi yield solutions by introducing a stablecoin-native, liquid, and composable saving protocol.

**Key Outcomes:**

**Stable principal** — Stablecoin-only strategy eliminates market volatility  
**Full liquidity** — Transferable, composable receipt tokens (sToken/wsToken)  
**Sustainable yield** — Real returns from Compound and Dolomite lending activity  
**Native composability** — Use across DeFi without restrictions  
**Built on Lisk** — Low-cost infrastructure for optimal capital efficiency

**SuperCluster = "Lido for Stablecoins"**

SuperCluster is designed as **infrastructure, not a single strategy** — providing a foundation for programmable, yield-bearing stablecoins across DeFi.

| Aspect        | Description                                  |
| ------------- | -------------------------------------------- |
| Network       | Lisk Network                                 |
| Protocols     | Compound, Dolomite                           |
| Token Model   | sToken (rebasing) / wsToken (non-rebasing)   |
| Architecture  | Modular with Pilot Strategy + Yield Adapters |
| Current Phase | Hackathon MVP                                |
| Tech Stack    | Solidity, TypeScript, Foundry, NextJS, Privy |
