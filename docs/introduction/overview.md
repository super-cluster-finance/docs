---
pagination_next: introduction/problem
---

# Overview

## What is SuperCluster?

SuperCluster is a **DeFi Liquid Saving Protocol** that brings liquid staking mechanics to stablecoin-based savings. Built on **Mantle Network**, SuperCluster enables users to deposit USDC and earn yield from established lending protocols while maintaining liquidity through composable receipt tokens.

**Think of it as "Lido for stablecoins"** but instead of staking volatile assets like ETH, SuperCluster focuses exclusively on stablecoins, allowing users to generate yield without exposure to market price fluctuations.

## Mission Statement

> _"Transform stablecoins into productive, liquid assets that generate sustainable yield without market timing risk or loss of ownership rights."_

---

## Core Concept

SuperCluster converts idle stablecoins into productive, liquid assets through a tokenized savings model:

- Users deposit USDC into the protocol
- Funds are allocated to selected lending protocols
- Yield is generated from real lending activity
- Returns accrue automatically to depositors
- Liquidity is preserved through transferable receipt tokens

In exchange for their deposits, users receive liquid receipt tokens **sUSDC** and **wsUSDC** that represent their principal plus accrued yield. These tokens remain fully transferable and composable across the DeFi ecosystem while continuing to earn yield. As a result, users do not need to choose between earning yield and maintaining liquidity.

## Key Principles

### 1. Principal Stability

SuperCluster accepts stablecoin-only deposits. Because the underlying assets are stablecoins, users are not exposed to the price volatility typically associated with liquid staking of volatile assets. Principal value is preserved by design, subject to protocol and smart contract risk.

### 2. Consistent Yield

Yield is sourced from established, battle-tested lending protocols and generated through real economic activity. The protocol prioritizes sustainable, risk-adjusted returns rather than speculative strategies or short-term APY optimization.

### 3. Full Liquidity

Deposits are represented by liquid receipt tokens that can be transferred, traded, or used across DeFi at any time. There are no lock-up periods, and liquidity is accessible through token transfers or secondary markets.

## How It Works

SuperCluster follows a simple, transparent flow that converts stablecoin deposits into liquid, yield-bearing assets:

1. **User deposits USDC**  
   Users supply USDC to the SuperCluster protocol.

2. **Protocol issues sUSDC**  
   In return, the protocol mints `sUSDC`, representing the user’s proportional ownership of the total pool.

3. **Capital is allocated to lending protocols**  
   Deposited USDC is allocated by the strategy layer to selected lending markets.

4. **Yield accrues from lending activity**  
   Borrowers pay interest, which accrues at the protocol level.

5. **sUSDC value increases over time**  
   Yield is reflected through rebasing (or exchange rate growth for `wsUSDC`).

6. **User exits or composes freely**  
   Users can withdraw USDC, trade `sUSDC`, or use it across DeFi at any time.

### Key Characteristics

- Yield accrues automatically at the protocol level
- No lock-up periods or withdrawal queues
- Value growth comes from real lending yield
- No token emissions or speculative incentives

Ownership is represented entirely by transferable tokens, not vault shares.

## Design Comparison

| Conventional Model        | SuperCluster Model        |
| ------------------------- | ------------------------- |
| Funds locked in vaults    | Tokenized deposits        |
| Liquidity or yield        | Liquidity and yield       |
| Single protocol exposure  | Strategy-based allocation |
| Manual repositioning      | Automated yield accrual   |
| Market timing sensitivity | Market-neutral savings    |

## Project Background

SuperCluster is developed as part of the Mantle Network Hackathon, with the goal of becoming production-grade infrastructure for stablecoin savings.

The protocol is designed with the following principles in mind:

- Modular and upgradeable architecture
- Security-first development practices
- Clear separation between core protocol and strategy logic
- Long-term sustainability through transparent fee mechanisms

## Use Cases

### For Users

- Earn yield on stablecoin holdings
- Maintain liquidity through transferable receipt tokens
- Use yield-bearing tokens as collateral
- Provide liquidity in DEX pools
- Build custom DeFi strategies using composable assets

### For Protocols

- Integrate **wsUSDC** as a yield-bearing stable asset
- Accept **sUSDC** or **wsUSDC** as productive collateral
- Build applications on top of liquid saving primitives
- Compose strategies using standardized receipt tokens

## Network and Assets

- **Network:** Mantle Network
- **Primary Asset:** USDC
- **Integrated Protocols:** Compound, Init, Dolomite

**Receipt Tokens:**

- **sUSDC:** Rebasing, yield-bearing token
- **wsUSDC:** Wrapped, non-rebasing token

## Why Mantle Network?

Mantle Network provides optimal infrastructure for SuperCluster's liquid saving protocol:

- **Low Transaction Costs** — Enables frequent rebalancing and daily rebasing without high fees
- **High Throughput** — Supports large-scale capital operations efficiently
- **Growing DeFi Ecosystem** — Access to expanding lending protocols on Mantle
- **Ethereum-Grade Security** — Built on OP Stack for robust security guarantees
- **Perfect for Capital-Intensive DeFi** — Infrastructure designed specifically for financial applications

---

## Current Status

SuperCluster is currently in MVP development as part of the Mantle Network Hackathon. Prior to mainnet deployment, the protocol will undergo iterative testing, security reviews, and audit processes.

**Planned Phases:**

Hackathon MVP → Alpha Testing → Beta (Audited) → Production Launch

## Further Reading

- **Problem** — Motivation and market gaps
- **Solution** — Protocol design and approach
- **Who Is This For** — Target users and integrations

## Summary

| Item               | Description                                  |
| ------------------ | -------------------------------------------- |
| Protocol Type      | Liquid Saving Protocol                       |
| Primary Asset      | USDC                                         |
| Network            | Mantle Network                               |
| Yield Sources      | Compound, Init, Dolomite                     |
| Token Model        | sToken / wsToken                             |
| Development Status | Hackathon MVP                                |
| Tech Stack         | Solidity, TypeScript, Foundry, NextJS, Privy |

_This is the hackathon scope for Mantle Network. Additional yield sources and features will be added in production._

---

## Vision

SuperCluster aims to provide standardized, liquid, and composable infrastructure for stablecoin savings in DeFi enabling users and protocols to generate yield without sacrificing liquidity or taking on market price risk.
