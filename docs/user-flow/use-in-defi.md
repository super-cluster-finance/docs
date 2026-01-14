# Use in DeFi

One of SuperCluster's most powerful features is the **composability** of sUSDC and wsUSDC tokens. You can use these liquid saving tokens across DeFi protocols while continuously earning yield from SuperCluster.

**Key Benefit:** Double-dip yield strategies - earn SuperCluster base yield PLUS returns from other protocols.

## What is Composability?

**Composability** means your SuperCluster tokens can be freely used in other DeFi protocols as:

- Collateral for borrowing
- Liquidity in decentralized exchanges
- Assets in yield strategies
- Collateral in derivatives
- And more...

**All while maintaining your SuperCluster yield!**

## Token Compatibility Matrix

| DeFi Category        | sUSDC Compatible? | wsUSDC Compatible? | Recommended |
| -------------------- | ----------------- | ------------------ | ----------- |
| **Compound Lending** | Not supported     | Full               | wsUSDC      |
| **Dolomite Lending** | May have issues   | Full               | wsUSDC      |
| **Stablecoin Swaps** | OK                | OK                 | Either      |
| **Simple Holding**   | Perfect           | OK                 | sUSDC       |
| **NFT Purchases**    | OK                | OK                 | Either      |

**General Rule:** Use **wsUSDC** for maximum DeFi compatibility.

## Use Case 1: Collateral for Borrowing (Compound)

### Overview

Use wsUSDC as collateral on Compound to borrow other assets without selling your position.

### How It Works

```
1. You have: 10,000 wsUSDC (worth 10,500 USDC at 1.05 rate)
2. Deposit wsUSDC to Compound as collateral
3. Borrow: 6,000 USDC (60% LTV)
4. Your wsUSDC continues earning SuperCluster yield
5. As wsUSDC value increases, health factor improves
```

### Step-by-Step Example

**Initial State:**

```
You own: 10,000 sUSDC
Exchange rate: 1.05
Value: 10,500 USDC
```

**Step 1: Wrap to wsUSDC**

```
Wrap 10,000 sUSDC → Get 9,524 wsUSDC
Value: 9,524 × 1.05 = 10,000 USDC
```

**Step 2: Deposit to Compound**

```
Deposit: 9,524 wsUSDC
Collateral value: 10,500 USDC
Max borrow (60% LTV): 6,300 USDC
```

**Step 3: Borrow**

```
Borrow: 6,000 USDC
LTV: 57% (safe)
Health Factor: 1.75 (healthy)
```

**Step 4: Yield Continues**

```
After 1 year:
Exchange rate: 1.10 (5% SuperCluster yield)
wsUSDC value: 9,524 × 1.10 = 10,476 USDC

New LTV: 6,000 / 10,476 = 57.3%
Health Factor: Improved!
```

### Benefits

- **Maintain SuperCluster yield**
- **Borrow without selling**
- **Self-improving collateral** (value increases over time)
- **Capital efficiency**

### Risks

- **Liquidation risk** if borrowed asset appreciates significantly
- **Interest on borrowed amount**
- **Smart contract risk** from both protocols

## Use Case 2: Additional Lending (Dolomite)

### Overview

Deposit wsUSDC in Dolomite lending protocol to earn additional lending interest while maintaining SuperCluster yield.

### Strategy: wsUSDC as Collateral or Lending in Dolomite

**Optimal Use:** Deposit wsUSDC directly to Dolomite lending markets

```
┌──────────────────────┋
│  Dolomite Lending    │
│                       │
│  Deposit wsUSDC      │
│  (10,000)            │
│                       │
│  Your Position       │
└──────────────────────┘
         │
         v
  Dual Yield Source:
  1. SuperCluster yield on wsUSDC
  2. Dolomite lending APY
```

### Example Calculation

**Initial Position:**

```
Deposit wsUSDC:
- 10,000 wsUSDC (worth 10,500 USDC at 1.05 rate)
- Dolomite lending APY: 4%
```

**After 1 Year:**

```
SuperCluster yield: 5% APY
Dolomite lending APY: 4% APY

wsUSDC value: 10,000 × 1.05 = 10,500 USDC
Dolomite interest earned: ~420 USDC (4% of average balance)

Total value: ~10,920 USDC
Total APY: ~9.2%
```

## Use Case 3: Borrowing Against wsUSDC (Dolomite)

### Overview

Use wsUSDC as collateral on Dolomite to borrow other assets without selling your position, while continuing to earn yield.

### Example: Borrowing Against wsUSDC on Dolomite

```
1. Deposit wsUSDC to Dolomite as collateral
2. Borrow: USDC or other assets
3. You earn:
   - SuperCluster base yield (5%)
   - Interest on wsUSDC collateral (potential)
   - Strategic use of borrowed assets

Net APY: 5-7% (depending on borrowed asset usage)
```

### Strategy Stacking

**Conservative Stack:**

```
Base: SuperCluster yield (5%)
 + Dolomite lending APY (3%)
 + Compound integration (1%)
------------------------
Total: ~9% APY
```

**Moderate Stack:**

```
Base: SuperCluster yield (5%)
 + Dolomite lending (4%)
------------------------
Total: ~9% APY (moderate risk)
```

### Risk Warning

- **Complexity risk** - Multiple protocols = multiple failure points
- **Smart contract risk** - Each layer adds exposure
- **Yield sustainability** - Aggressive strategies may not be sustainable

## Use Case 4: Stable Swap Arbitrage

### Overview

Trade between wsUSDC and USDC to capture small price discrepancies.

### Arbitrage Opportunity

**Scenario:** wsUSDC trades below peg on DEX

```
Exchange rate: 1.05 (on SuperCluster)
DEX price: 1.04 USDC per wsUSDC

Arbitrage:
1. Buy wsUSDC on DEX for 1.04 USDC each
2. Unwrap to sUSDC
3. Withdraw or sell sUSDC for 1.05 USDC each
4. Profit: 0.01 USDC per wsUSDC (0.96% gain)
```

### Automated Arbitrage

**Bot Strategy:**

```
IF DEX_price < Exchange_rate * 0.99:
    Buy wsUSDC on DEX
    Unwrap to sUSDC
    Sell sUSDC
    Profit

ELSE IF DEX_price > Exchange_rate * 1.01:
    Buy sUSDC
    Wrap to wsUSDC
    Sell wsUSDC on DEX
    Profit
```

**Benefits:**

- Helps maintain peg
- Provides liquidity
- Risk-free profit opportunities

## Use Case 5: Cross-Chain Strategies

### Overview

Bridge wsUSDC to other chains for cross-chain yield opportunities.

### Future Multi-Chain Deployment

**Phase 5 Roadmap:**

```
Lisk Network
       │
       │ Bridge wsUSDC
       │
   ┌───┼───────┐
   │   │       │
   v   v       v
Ethereum Base  Arbitrum

Use wsUSDC on each chain independently
```

**Cross-Chain Use Cases:**

- Arbitrage between chains
- Access chain-specific protocols
- Optimize gas costs
- Diversify smart contract risk

## Use Case 6: Advanced Strategies with Compound

### Overview

Use wsUSDC for advanced lending strategies on Compound.

### Compound Advanced Lending

```
Platform: Compound Protocol

Deposit: 10,000 wsUSDC
Strategy: Supply to optimized market
Earnings:

Benefits:
- wsUSDC continues earning SuperCluster yield
- Compound optimization for better rates
- Access to efficient lending markets
```

### Multi-Protocol Stacking

```
Advanced Strategy:
- Deposit wsUSDC to Compound
- Borrow USDC
- Deposit additional wsUSDC to Dolomite
- Earn multiple yields simultaneously

Strategy: Generate income from base yield, lending, and protocol APYs
```

## Use Case 7: DAO Treasury Management

### Overview

DAOs can use SuperCluster for productive treasury management.

### DAO Strategy

**Traditional DAO Problem:**

```
DAO Treasury: 10M USDC sitting idle
Opportunity cost: Lost yield
Risk: Inflation erodes value
```

**SuperCluster Solution:**

```
1. Deposit: 10M USDC → 10M sUSDC/wsUSDC
2. Earn: 5% APY = 500K USDC/year
3. Use:
   - 50% wsUSDC as collateral for operations
   - 50% sUSDC as liquid reserve
4. Benefits:
   - Generate sustainable revenue
   - Maintain liquidity
   - Grow treasury automatically
```

### Multi-Strategy Treasury

```
DAO Treasury Allocation:
├─ 50% SuperCluster + Compound lending
├─ 30% SuperCluster + Dolomite lending
└─ 20% Reserve (immediate liquidity)

Expected combined APY: 8-10%
Annual revenue on 10M: 800-1000K USDC
```

## Comparison: DeFi Usage vs Simple Holding

| Scenario             | Base APY | Additional Yield | Total APY | Risk Level |
| -------------------- | -------- | ---------------- | --------- | ---------- |
| **Hold sUSDC**       | 5%       | 0%               | 5%        | Low        |
| **Hold wsUSDC**      | 5%       | 0%               | 5%        | Low        |
| **Compound Lending** | 5%       | 1-2%             | 6-7%      | Medium     |
| **Dolomite Lending** | 5%       | 2-3%             | 7-8%      | Medium     |
| **Multi-Protocol**   | 5%       | 3-5%             | 8-10%     | High       |
| **Advanced Stack**   | 5%       | 4-6%             | 9-11%     | Very High  |

**Unlock DeFi's full potential!** Use your SuperCluster tokens to build advanced yield strategies while maintaining liquidity.
