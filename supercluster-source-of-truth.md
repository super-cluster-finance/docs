# SuperCluster: Source of Truth Documentation

**Version:** 1.0  
**Last Updated:** January 1, 2026  
**Status:** MVP Development (Mantle Hackathon)  
**Document Type:** Technical & Product Source of Truth

---

## Table of Contents

1. [Executive Summary](#executive-summary)
2. [Project Overview](#project-overview)
3. [Problem Statement & Solution](#problem-statement--solution)
4. [Core Value Proposition](#core-value-proposition)
5. [Product Architecture](#product-architecture)
6. [Token Model](#token-model)
7. [Core Features](#core-features)
8. [User Flow](#user-flow)
9. [Technical Implementation](#technical-implementation)
10. [Risk Management & Security](#risk-management--security)
11. [Economics & Fee Structure](#economics--fee-structure)
12. [Competitive Positioning](#competitive-positioning)
13. [Development Roadmap](#development-roadmap)
14. [Appendix](#appendix)

---

## Executive Summary

**SuperCluster** is a DeFi Liquid Saving Protocol that brings liquid staking principles to stablecoin savings. Built on Mantle Network, SuperCluster enables users to deposit USDC and earn consistent yield from established lending protocols while maintaining full liquidity through composable receipt tokens.

### Key Highlights

- **Category:** Liquid Saving Protocol (not a vault or yield aggregator)
- **Network:** Mantle Network
- **Primary Asset:** USDC
- **Target Market:** Global, all user segments
- **Core Innovation:** Liquid, composable stablecoin savings primitive

### Mission Statement

*"Transform stablecoins into productive, liquid assets that generate sustainable yield without market timing risk or loss of ownership rights."*

---

## Project Overview

### What is SuperCluster?

SuperCluster is a next-generation DeFi savings protocol designed specifically for stablecoins. Inspired by Lido's liquid staking model, SuperCluster applies the same principle of liquidity and ownership to stablecoin savings—but with a crucial difference: **principal stability**.

Instead of exposing users to market volatility, SuperCluster allocates deposited stablecoins into battle-tested lending protocols like Morpho and Aave, generating consistent yield without the downside risk of price fluctuations.

### Why SuperCluster?

Traditional liquid staking protocols like Lido offer great yields during bull markets, but struggle in bear markets where APY cannot offset asset depreciation. SuperCluster solves this by:

- **Preserving principal value** through stablecoin-only strategies
- **Generating sustainable yield** via established lending protocols
- **Maintaining full liquidity** so you can use your deposit rights anytime
- **Eliminating market timing risk** from your savings strategy

### Definition

**SuperCluster = Smart Savings + DeFi Liquidity + Flexible Strategies**

SuperCluster is a DeFi Liquid Saving Protocol—a stablecoin-based saving system that allows users to earn sustainable yields without losing liquidity or ownership of their assets.

Unlike traditional staking protocols that expose users to market volatility (e.g., ETH price changes), SuperCluster focuses entirely on stablecoins, enabling users to:

- Save stablecoins and earn passive yield
- Preserve the value of their principal without market exposure
- Maintain full liquidity through tokenized representations usable across DeFi

**In short:** SuperCluster turns stablecoins into productive yet liquid assets.

---

## Problem Statement & Solution

### The Problem

Over the past few years, liquid staking has transformed decentralized finance (DeFi), enabling users to stake assets and maintain liquidity through receipt tokens like stETH or rETH. However, these protocols share a fundamental weakness: **market volatility**.

When the underlying asset's value drops, even strong staking yields cannot offset the loss, leaving users exposed to market risk. In bear markets, the promise of "liquid" staking often collapses as asset prices fall faster than yields accumulate.

**Pain Points:**

1. **Market Exposure Risk** - Volatile assets lose value faster than yields accumulate
2. **Timing Dependency** - Returns depend heavily on bull/bear market cycles
3. **Principal Uncertainty** - No guarantee of maintaining initial deposit value
4. **Illiquid Savings** - Traditional savings lock funds or provide no yield

### The Solution

SuperCluster introduces a **Liquid Saving Protocol for the stablecoin era**, combining:

- **Principal Stability** - Stablecoin-based deposits maintain constant value
- **Consistent Yield** - Sustainable returns from proven lending protocols
- **Full Liquidity** - Instant access via liquid receipt tokens

By focusing on stable assets (USDC), SuperCluster ensures your deposit's value remains constant while generating on-chain yield from verified, low-risk strategies such as Aave, Morpho, Centauri, and Tumbuh.

Users receive liquid receipt tokens (sToken / wsToken) that represent both their deposit and accrued interest—fully composable and usable across DeFi. Regardless of market conditions, users can withdraw anytime with their original principal intact plus earned yield.

**In essence:** SuperCluster eliminates market timing from DeFi savings, creating a truly stable, yield-generating, and liquid savings solution that performs in both bull and bear markets.

---

## Core Value Proposition

### Unique Value Proposition

> **"A stable, liquid, yield-bearing stablecoin primitive—not a vault."**

SuperCluster is fundamentally different from existing yield aggregators because it issues **liquid, composable receipt tokens** that can be freely used across DeFi while continuously accruing yield.

### Three Pillars

#### 1. Principal Stability
- No exposure to volatile asset prices
- Stablecoin-only strategy preserves capital
- Consistent 1:1 redemption value (plus yield)

#### 2. Consistent Yield
- Diversified allocation across battle-tested protocols
- Algorithm-driven optimization
- Sustainable returns without speculation

#### 3. Full Liquidity
- Instant liquidity via DEX swap
- Composable tokens usable as collateral
- No lock-up periods or withdrawal penalties

### Target Users

**All Segments:**
- **Retail Users** - Safe, stable savings with better returns than traditional stablecoins
- **DeFi Power Users** - Composable yield-bearing primitive for advanced strategies
- **Institutions** - Predictable, stable returns with full liquidity
- **DAOs & Treasuries** - Productive treasury management without market risk

---

## Product Architecture

### High-Level Architecture

```
┌─────────────────────────────────────────────────────────────┐
│                         User Layer                           │
│                    (Deposit USDC, Receive sUSDC)            │
└──────────────────────────┬──────────────────────────────────┘
                           │
┌──────────────────────────▼──────────────────────────────────┐
│                    SuperCluster Core                         │
│              (Minting, Rebasing, Wrapping Logic)            │
└──────────────────────────┬──────────────────────────────────┘
                           │
┌──────────────────────────▼──────────────────────────────────┐
│                     Pilot Strategy                           │
│            (Portfolio Management & Allocation Logic)         │
└──────────────────────────┬──────────────────────────────────┘
                           │
        ┌──────────────────┼──────────────────┐
        │                  │                  │
┌───────▼────────┐ ┌──────▼──────┐ ┌─────────▼────────┐
│ Aave Adapter   │ │Morpho Adapter│ │ Centauri Adapter │
└───────┬────────┘ └──────┬──────┘ └─────────┬────────┘
        │                  │                  │
┌───────▼────────┐ ┌──────▼──────┐ ┌─────────▼────────┐
│ Aave Protocol  │ │Morpho Protocol│ │Centauri Protocol│
└────────────────┘ └─────────────┘ └──────────────────┘
```

### Core Components

#### 1. SuperCluster Core Contract
- Token minting/burning logic
- Rebase mechanism for sToken
- Wrapping/unwrapping logic for wsToken
- Withdrawal request management

#### 2. Pilot Strategy
- **Purpose:** Portfolio management layer that determines fund allocation
- **Scope:** 
  - **Hackathon:** Managed by core team
  - **Production:** Fully automated, algorithm-driven
- **Function:** Balances yield, liquidity, and risk across lending protocols

#### 3. Adapter Layer
- **Modular design** for each lending protocol
- Handles deposits, withdrawals, and yield collection
- Protocol-specific logic encapsulation
- Easily extensible for new integrations

**Current Adapters:**
- AaveAdapter
- MorphoAdapter
- CentauriAdapter
- TumbuhAdapter

#### 4. Rebase Mechanism
- **Hackathon:** Event-based, triggered manually
- **Production:** Daily automated rebase
- Updates exchange rate as yield accrues
- Proportional distribution to all sToken holders

---

## Token Model

### Two-Token System

SuperCluster introduces two complementary token types to maximize flexibility and composability.

#### sToken (SuperCluster Token)

**Type:** Rebasing Token  
**Example:** sUSDC

**Characteristics:**
- Balance automatically increases as yield is distributed
- 1 sToken always represents 1 unit of stablecoin plus accumulated returns
- Ideal for users who prefer to see their balance grow directly in their wallet
- Can be wrapped into wsToken for external DeFi integrations

**Analogy:** Like stETH from Lido—the balance increases over time.

**Use Cases:**
- Direct holding for yield accumulation
- Simple savings without complexity
- Wallet balance reflects total value

#### wsToken (Wrapped SuperCluster Token)

**Type:** Non-Rebasing Token  
**Example:** wsUSDC

**Characteristics:**
- Balance remains static, but exchange value rises
- Better suited for DeFi protocols that do not support rebasing tokens
- Can be unwrapped back to sToken at any time
- Maintains constant token count for integration compatibility

**Analogy:** Like wstETH—nominal amount stays constant, but value appreciates over time.

**Use Cases:**
- Collateral in lending platforms
- Liquidity provision in DEXs
- Integration with non-rebasing DeFi protocols

### Exchange Rate Mechanism

```
Exchange Rate = Total Assets Under Management / Total sToken Supply

wsToken Value = sToken Balance × Exchange Rate
```

**Example:**
- User deposits 1,000 USDC → Receives 1,000 sUSDC
- After yield accrual: 1,000 sUSDC → worth 1,050 USDC
- If wrapped: User has constant wsUSDC amount, but each token worth more USDC

---

## Core Features

### 1. Liquid Saving Tokens

Every deposit into SuperCluster mints Liquid Saving Tokens (sUSDC) at a 1:1 ratio with the deposited asset. These tokens represent the user's share in the protocol and automatically accrue yield via an increasing exchange rate.

**Benefits:**
- Transferable and composable across DeFi
- Can be wrapped into non-rebasing tokens (wsUSDC) for protocol integrations
- Maintains liquidity while earning yield

### 2. Yield Allocation via Smart Adapters

SuperCluster connects to multiple lending markets through a modular adapter layer. Each adapter handles deposits, withdrawals, and yield collection from its respective protocol.

**Advantages:**
- Diversified and optimized yield sourcing
- Risk-managed allocation between multiple protocols
- Supports future integration with any on-chain yield source
- Protocol-agnostic design

**Supported Protocols:**
- **Aave** - Established lending market
- **Morpho** - Optimized lending protocol
- **Centauri** - Cross-chain lending
- **Tumbuh** - Emerging yield opportunities

### 3. Pilot Strategy Layer

The Pilot Strategy determines how user funds are allocated across lending markets. It acts as a portfolio management layer that balances yield, liquidity, and risk.

**Features:**
- Automated optimization based on real-time conditions
- Strategy-driven distribution of stablecoin liquidity
- Expandable for governance-based or user-selected strategies

**Allocation Logic:**
- Monitors APY across all connected protocols
- Assesses liquidity depth and withdrawal capacity
- Dynamically rebalances to optimize risk-adjusted returns

### 4. Two-Step Withdrawal Process

SuperCluster uses a request-and-claim withdrawal model to ensure stable liquidity management. When a user requests to withdraw, the protocol prepares the underlying stablecoins from its lending positions. Once available, the user can claim their funds directly on-chain.

| Step | Action | Description |
|------|--------|-------------|
| 1 | Request Withdrawal | User submits withdrawal for their Liquid Saving Tokens |
| 2 | Liquidity Preparation | Funds are recalled from lending protocols |
| 3 | Claim Withdrawal | User redeems the prepared stablecoins |

**Timeline:** Depends on liquidity in lending markets

**Alternative:** Emergency withdrawal possible via DEX swap (sToken/wsToken) - not protocol-guaranteed

This structure ensures smooth redemption even during periods of high liquidity demand.

### 5. Composable Yield Assets

Tokens like sUSDC and wsUSDC remain fully usable across DeFi—meaning yield continues to accumulate even when used elsewhere.

**Use Cases:**
- Use as collateral in lending protocols
- Provide liquidity in AMMs or stable pools
- Trade, swap, or integrate into yield strategies
- Participate in governance with wrapped tokens
- Build complex DeFi strategies on top

---

## User Flow

### Core User Journey

```
Deposit → Mint → Wrap (Optional) → Earn → Withdraw/Swap
```

#### Step 1: Deposit Stablecoin
**Action:** User deposits stablecoins (USDC) into the SuperCluster contract

**Process:**
1. User approves USDC spending
2. User calls `deposit(amount)` function
3. SuperCluster receives USDC

#### Step 2: Mint sToken
**Action:** System mints sToken at a 1:1 ratio as proof of ownership

**Process:**
1. Protocol mints sUSDC tokens
2. Allocates funds to Pilot Strategy
3. Strategy distributes to lending protocols via adapters

#### Step 3: Wrap (Optional)
**Action:** Users can wrap their sToken into wsToken for DeFi compatibility

**Process:**
1. User calls `wrap(sTokenAmount)`
2. sToken is locked in contract
3. wsToken is minted based on current exchange rate

#### Step 4: Yield Accrual (Rebase)
**Action:** Protocol collects yield and distributes to holders

**Process:**
1. Adapters harvest yield from lending protocols
2. Rebase event updates exchange rate
3. sToken balances increase proportionally
4. wsToken exchange rate increases (balance stays same)

**Frequency:**
- **Hackathon:** Event-based (manual trigger)
- **Production:** Daily automated

#### Step 5: Withdraw or Swap
**Action:** Users access their funds + yield

**Option A - Protocol Withdrawal:**
1. Request withdrawal via protocol
2. Wait for liquidity preparation
3. Claim USDC when ready

**Option B - DEX Swap:**
1. Swap sUSDC or wsUSDC on DEX (e.g., Uniswap)
2. Instant liquidity
3. Market-determined price (should track 1:1 + yield)

---

## Technical Implementation

### Technology Stack

**Blockchain:** Mantle Network  
**Smart Contract Language:** Solidity  
**Primary Asset:** USDC  
**Token Standards:** ERC-20 (rebasing & non-rebasing variants)

### Smart Contract Architecture

#### Core Contracts

**1. SuperClusterVault.sol**
- Main entry point for deposits/withdrawals
- Token minting and burning logic
- Rebase mechanism implementation
- Integration with Pilot Strategy

**2. sToken.sol (e.g., sUSDC)**
- Rebasing ERC-20 token
- Balance calculation based on shares
- Transfer and approval logic

**3. wsToken.sol (e.g., wsUSDC)**
- Wrapped non-rebasing token
- Wrapping/unwrapping logic
- Standard ERC-20 implementation

**4. PilotStrategy.sol**
- Allocation logic across protocols
- Rebalancing mechanisms
- Risk parameter management

**5. Adapter Contracts**
- AaveAdapter.sol
- MorphoAdapter.sol
- CentauriAdapter.sol
- TumbuhAdapter.sol

### Rebase Implementation

**Hackathon Scope:**
```solidity
// Event-based rebase triggered by authorized caller
function rebase() external onlyAuthorized {
    uint256 totalAssets = calculateTotalAssets();
    uint256 totalSupply = totalSupply();
    
    // Update exchange rate
    exchangeRate = totalAssets / totalSupply;
    
    emit Rebase(totalAssets, totalSupply, exchangeRate);
}
```

**Production Target:**
```solidity
// Automated daily rebase
function rebase() external {
    require(block.timestamp >= lastRebaseTime + 1 days, "Too soon");
    
    uint256 totalAssets = calculateTotalAssets();
    uint256 totalSupply = totalSupply();
    
    exchangeRate = totalAssets / totalSupply;
    lastRebaseTime = block.timestamp;
    
    emit Rebase(totalAssets, totalSupply, exchangeRate);
}
```

### Pilot Strategy Logic

**Hackathon:** Manual allocation by core team

**Production:** Algorithm-driven optimization

**Allocation Factors:**
1. **Yield Rate** - Current APY from each protocol
2. **Liquidity Depth** - Available capacity for withdrawals
3. **Risk Score** - Protocol security and track record
4. **Diversification** - Spread risk across multiple venues

**Rebalancing Triggers:**
- Significant APY differential (>2% advantage)
- Liquidity concerns in any protocol
- Risk events or security incidents
- Scheduled periodic rebalancing

---

## Risk Management & Security

### Hackathon Scope

**Current Status:**
- No formal risk management system
- No insurance fund
- Focus on MVP functionality

**Known Limitations:**
- Smart contract risk from unaudited code
- Reliance on external protocol security
- No formal incident response plan

### Production Roadmap

#### Risk Management Framework

**1. Stop New Deposits**
- Circuit breaker mechanism
- Triggered by anomaly detection
- Prevents further exposure during incidents

**2. Withdraw Remaining Liquidity**
- Emergency withdrawal from affected protocols
- Preserve maximum recoverable assets
- Prioritize user fund safety

**3. Loss Socialization**
- Proportional distribution of losses
- Standard DeFi model
- Transparent calculation and communication

**Formula:**
```
User Loss = (User Share / Total Supply) × Total Loss
Remaining Balance = Original Deposit - User Loss
```

#### Insurance Fund

**Components:**
1. **Reserve Buffer** - Protocol-owned safety reserve
2. **Optional Coverage** - Integration with DeFi insurance protocols (e.g., Nexus Mutual)

**Funding:**
- Percentage of protocol fees
- Initial capitalization from treasury
- Community contributions

### Security Measures

#### Hackathon Phase
- Internal code review
- Basic testing coverage
- Limited deployment (testnet/small scale)

#### Pre-Production Requirements
- **Smart Contract Audit** - Multiple reputable auditors
- **Bug Bounty Program** - Community-driven security
- **Formal Verification** - Critical function verification
- **Incident Response Plan** - Clear procedures for emergencies

#### Operational Security
- Multi-sig governance for admin functions
- Timelocks on critical parameter changes
- Emergency pause functionality
- Monitoring and alerting systems

---

## Economics & Fee Structure

### Fee Model

#### Hackathon Scope
**Fee:** 0% (optional/none)  
**Rationale:** Focus on product validation and user testing

#### Production Model
**Fee Type:** Performance fee only  
**Range:** 5-10% of yield generated  
**No additional fees:** No deposit fees, no withdrawal fees

**Example:**
```
User deposits: 10,000 USDC
Yield generated: 500 USDC (5% APY)
Performance fee (10%): 50 USDC
User receives: 10,450 USDC
```

### Fee Distribution

**Allocation:**
1. **Protocol Treasury** (60%) - Development and operations
2. **Strategy Operators** (30%) - Incentivize optimal management
3. **Reserve Buffer** (10%) - Insurance fund and risk mitigation

**Governance:**
- Fee parameters adjustable via governance (future)
- Transparent on-chain distribution
- Regular reporting to community

### Revenue Model Sustainability

**Revenue Sources:**
- Performance fees from yield generation
- Potential lending protocol incentives (protocol tokens)
- Partnership integrations

**Cost Structure:**
- Development and maintenance
- Security audits and monitoring
- Gas optimization for operations
- Community and marketing

**Goal:** Self-sustaining protocol with positive unit economics

---

## Competitive Positioning

### Market Landscape

**Not Direct Competitors:**
- **Yearn Finance** - Vault-based yield aggregator, not liquid tokens
- **Beefy Finance** - Auto-compounding vaults, no receipt tokens
- **Morpho Vaults** - Single-protocol optimization, not multi-source

### Key Differentiators

#### 1. Liquid Receipt Tokens
**SuperCluster:** Issues sToken/wsToken that are freely composable  
**Others:** Vaults lock funds or provide limited liquidity

#### 2. Focus on Stable Savings
**SuperCluster:** Designed for principal stability, not yield chasing  
**Others:** Often optimize for highest APY regardless of risk

#### 3. Two-Token Architecture
**SuperCluster:** Rebasing (sToken) + Non-rebasing (wsToken) options  
**Others:** Single token model or no receipt tokens

#### 4. Modular Adapter System
**SuperCluster:** Protocol-agnostic, easily extensible  
**Others:** Often tightly coupled to specific protocols

### Unique Value Proposition

> **"A stable, liquid, yield-bearing stablecoin primitive—not a vault."**

**What This Means:**
- SuperCluster is infrastructure, not just a product
- Can be built upon by other protocols
- Enables new DeFi primitives and strategies
- Focuses on composability over absolute yield

### Target Market Position

**Primary Position:** Liquid Saving Protocol  
**Secondary Position:** Stablecoin Infrastructure  
**Tertiary Position:** Yield Optimization Platform

**User Perception Goal:**
- "Lido for stablecoins"
- "The stable, liquid savings layer of DeFi"
- "Turn your stablecoins productive without losing liquidity"

---

## Development Roadmap

### Phase 1: MVP - Hackathon (Current)

**Timeline:** Mantle Hackathon Submission  
**Status:** In Development

**Deliverables:**
- Core smart contracts (Vault, sToken, wsToken)
- Basic Pilot Strategy (manual allocation)
- Adapter integration (at least 2 protocols)
- Event-based rebase mechanism
- Simple frontend interface
- Basic documentation

**Scope Limitations:**
- Manual strategy management
- No formal risk management
- Zero fees
- No audit
- Limited testing
- Testnet deployment only

**Success Metrics:**
- Working deposit/withdrawal flow
- Successful yield generation
- Token wrapping/unwrapping functionality
- Hackathon submission complete

### Phase 2: Alpha - Post-Hackathon

**Timeline:** 1-2 months post-hackathon  
**Focus:** Security and testing

**Deliverables:**
- Comprehensive test coverage
- Internal security audit
- Bug fixes and optimizations
- Enhanced documentation
- Community testing program (closed beta)
- Testnet deployment with real user feedback

**Improvements:**
- Automated rebalancing logic (semi-automated)
- Basic risk parameters
- Enhanced frontend UX
- Initial DEX integration planning

**Success Metrics:**
- 90%+ test coverage
- Zero critical bugs in testing
- Positive user feedback
- Stable performance under load

### Phase 3: Beta - Security Hardening

**Timeline:** 2-3 months  
**Focus:** Audit and risk management

**Deliverables:**
- Professional smart contract audit (2+ firms)
- Bug bounty program launch
- Risk management framework implementation
- Insurance fund establishment
- Daily automated rebase
- Multi-sig governance setup

**Improvements:**
- Circuit breaker mechanisms
- Emergency pause functionality
- Loss socialization logic
- Reserve buffer accumulation

**Success Metrics:**
- Clean audit reports
- Active bug bounty with no critical findings
- Risk framework tested in simulations
- Community confidence established

### Phase 4: Production Launch

**Timeline:** 3-4 months  
**Focus:** Mainnet deployment and growth

**Deliverables:**
- Mainnet deployment on Mantle
- Full DEX integration (Uniswap + others)
- Performance fee implementation (5-10%)
- Algorithm-driven Pilot Strategy
- Comprehensive monitoring and alerting
- Marketing and community launch

**Integrations:**
- Uniswap sUSDC/USDC and wsUSDC/USDC pools
- Lending protocol integrations for wsUSDC
- Analytics and dashboards
- Block explorers and tracking

**Success Metrics:**
- $1M+ TVL in first month
- 500+ unique depositors
- 95%+ uptime
- Positive yield generation
- Zero security incidents

### Phase 5: Expansion & Governance

**Timeline:** 6+ months  
**Focus:** Scale and decentralization

**Roadmap:**
- Multi-chain expansion (Ethereum, Base, Arbitrum)
- Additional stablecoin support (USDT, DAI, etc.)
- Governance token launch
- DAO transition
- Advanced strategies (user-selectable)
- Institutional partnerships

**Long-term Vision:**
- Become the standard for liquid stablecoin savings
- Enable ecosystem of applications built on top
- Full community governance
- Multi-billion dollar TVL
- Cross-chain liquidity network

---

## Appendix

### Glossary

**AUM (Assets Under Management)**  
Total value of all stablecoins deposited in the protocol

**Adapter**  
Smart contract that interfaces with external lending protocols

**Composability**  
Ability to use tokens in multiple DeFi protocols simultaneously

**DEX (Decentralized Exchange)**  
Platform for swapping tokens without centralized intermediary

**Liquid Saving**  
Savings approach that maintains liquidity through transferable receipt tokens

**Pilot Strategy**  
Portfolio management system that allocates funds across protocols

**Rebase**  
Mechanism that adjusts token balances to reflect yield accumulation

**Receipt Token**  
Token representing ownership of deposited assets plus accrued yield

**sToken**  
Rebasing token that increases in balance over time (e.g., sUSDC)

**TVL (Total Value Locked)**  
Total value of assets deposited in a protocol

**wsToken**  
Wrapped non-rebasing token with increasing exchange rate (e.g., wsUSDC)

**Yield**  
Returns generated from lending deposited stablecoins

### Technical References

**Inspiration & Similar Protocols:**
- Lido Finance: Liquid staking for ETH
- Rocket Pool: Decentralized ETH staking
- Wrapped Staked ETH (wstETH): Non-rebasing wrapped token

**Integrated Protocols:**
- Aave: Decentralized lending protocol
- Morpho: Lending optimizer
- Centauri: Cross-chain lending
- Tumbuh: Emerging DeFi protocol

**Standards:**
- ERC-20: Fungible token standard
- ERC-4626: Tokenized vault standard (reference)

### Contact & Resources

**Development Team:**
- Core team managing hackathon development
- Transitioning to algorithm-driven management

**Network:**
- Mantle Network
- Testnet: [To be added]
- Mainnet: [Future deployment]

**Documentation:**
- Technical docs: [To be published]
- API reference: [To be published]
- User guides: [To be published]

**Community:**
- Discord: [To be created]
- Twitter: [To be created]
- GitHub: [To be created]

### Document Change Log

| Version | Date | Changes | Author |
|---------|------|---------|--------|
| 1.0 | January 1, 2026 | Initial Source of Truth document | Core Team |

---

## Conclusion

SuperCluster represents a paradigm shift in DeFi savings infrastructure. By combining the liquidity innovations of liquid staking with the stability of stablecoins, SuperCluster creates a new primitive for decentralized finance: **stable, liquid, yield-bearing stablecoin deposits**.

Unlike yield aggregators that simply optimize returns, SuperCluster provides fundamental infrastructure—receipt tokens that can be freely composed across DeFi while maintaining stable principal value and generating consistent yield.

The modular architecture, powered by Pilot Strategies and Yield Adapters, ensures flexibility, scalability, and security as the protocol evolves from hackathon MVP to production-grade DeFi infrastructure.

With a clear roadmap from manual strategy management to fully automated, algorithm-driven optimization, SuperCluster is positioned to become the standard for liquid stablecoin savings in the decentralized finance ecosystem.

---

**Document Status:** ✅ Final - Ready for Team Alignment  
**Next Steps:** Review → Approve → Begin Development

---

*This document serves as the single source of truth for the SuperCluster project. All team members should refer to this document for project understanding, scope, and direction. Any updates or changes should be documented in the change log above.*
