# Use in DeFi

## Overview

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

| DeFi Category         | sUSDC Compatible?  | wsUSDC Compatible? | Recommended |
| --------------------- | ------------------ | ------------------ | ----------- |
| **DEX Trading**       | ⚠️ Limited         | ✅ Full            | wsUSDC      |
| **Liquidity Pools**   | ⚠️ May have issues | ✅ Full            | wsUSDC      |
| **Lending Platforms** | ❌ Not supported   | ✅ Full            | wsUSDC      |
| **Yield Aggregators** | ⚠️ Complex         | ✅ Full            | wsUSDC      |
| **Stablecoin Swaps**  | ✅ OK              | ✅ OK              | Either      |
| **Simple Holding**    | ✅ Perfect         | ✅ OK              | sUSDC       |
| **NFT Purchases**     | ✅ OK              | ✅ OK              | Either      |

**General Rule:** Use **wsUSDC** for maximum DeFi compatibility.

## Use Case 1: Collateral for Borrowing

### Overview

Use wsUSDC as collateral to borrow other assets without selling your position.

### How It Works

```
1. You have: 10,000 wsUSDC (worth 10,500 USDC at 1.05 rate)
2. Deposit wsUSDC to Aave as collateral
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

**Step 2: Deposit to Aave**

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

✅ **Maintain SuperCluster yield**  
✅ **Borrow without selling**  
✅ **Self-improving collateral** (value increases over time)  
✅ **Capital efficiency**

### Risks

⚠️ **Liquidation risk** if borrowed asset appreciates significantly  
⚠️ **Interest on borrowed amount**  
⚠️ **Smart contract risk** from both protocols

### Recommended Platforms

- **Aave** - Established lending protocol
- **Compound** - Large liquidity pools
- **Radiant** - Cross-chain lending (if available on Mantle)

## Use Case 2: Liquidity Provision

### Overview

Provide liquidity in DEX pools to earn trading fees while maintaining SuperCluster yield.

### Strategy: wsUSDC/USDC Pool

**Optimal Pair:** wsUSDC + USDC (correlated assets, low impermanent loss)

```
┌───────────────────────┐
│  Uniswap V3 Pool       │
│                        │
│  50% wsUSDC (5,000)    │
│  50% USDC (5,000)      │
│                        │
│  Your LP Position      │
└───────────────────────┘
         │
         v
  Triple Yield Source:
  1. SuperCluster yield on wsUSDC
  2. Trading fees from swaps
  3. Potential LP incentives
```

### Example Calculation

**Initial Position:**

```
Provide liquidity:
- 4,762 wsUSDC (worth 5,000 USDC at 1.05 rate)
- 5,000 USDC
- Total value: 10,000 USDC
```

**After 1 Year:**

```
SuperCluster yield: 5% APY
Trading fees: 2% APY
LP incentives: 3% APY

wsUSDC value: 4,762 × 1.05 = 5,000 → 5,250 USDC
Trading fees earned: ~200 USDC
LP incentives: ~300 USDC

Total value: ~10,750 USDC
Total APY: ~7.5%
```

### Impermanent Loss Consideration

**Why wsUSDC/USDC is Safe:**

```
wsUSDC tracks USDC value closely:
- Both are stablecoin-based
- wsUSDC value slowly appreciates (1.00 → 1.05)
- Minimal price divergence
- Very low impermanent loss

Expected IL: < 0.1% (negligible)
```

### Recommended DEXs

- **Uniswap V3** - Concentrated liquidity
- **Curve** - Optimized for stable assets
- **Balancer** - Flexible pool ratios

## Use Case 3: Yield Aggregator Strategies

### Overview

Deposit wsUSDC into yield aggregators to stack multiple yield sources.

### Example: Yearn Finance Strategy

```
1. Deposit wsUSDC to Yearn Vault
2. Yearn deploys wsUSDC to optimized strategies
3. You earn:
   - SuperCluster base yield (5%)
   - Yearn strategy returns (3-5%)
   - Compounded automatically

Total APY: 8-10%
```

### Strategy Stacking

**Conservative Stack:**

```
Base: SuperCluster yield (5%)
 + Yearn optimization (2%)
 + Curve boost (1%)
------------------------
Total: ~8% APY
```

**Aggressive Stack:**

```
Base: SuperCluster yield (5%)
 + Leverage strategy (5%)
 + Incentive farming (3%)
------------------------
Total: ~13% APY (higher risk)
```

### Risk Warning

⚠️ **Complexity risk** - Multiple protocols = multiple failure points  
⚠️ **Smart contract risk** - Each layer adds exposure  
⚠️ **Yield sustainability** - Aggressive strategies may not be sustainable

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
Mantle Network (Base)
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

## Use Case 6: Collateral for Derivatives

### Overview

Use wsUSDC as margin for perpetual futures or options.

### Perpetual Futures Example

```
Platform: GMX (if available on Mantle)

Deposit: 10,000 wsUSDC as margin
Leverage: 5x
Position: Long ETH

Benefits:
- wsUSDC continues earning SuperCluster yield
- Margin value increases over time (self-improving)
- Access leveraged positions
```

### Options Strategy

```
Sell Put Options:
- Collateral: wsUSDC
- Collect premium
- If exercised: Acquire asset at strike
- wsUSDC earns yield while waiting

Strategy: Generate income from both premium and yield
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
├─ 40% SuperCluster (base yield + liquidity)
├─ 30% wsUSDC in lending (additional yield)
├─ 20% wsUSDC/USDC LP (trading fees)
└─ 10% Reserve (immediate liquidity)

Expected combined APY: 7-9%
Annual revenue on 10M: 700-900K USDC
```

## Advanced Strategies

### Strategy 1: Leveraged Yield Farming

```
Step 1: Deposit 10,000 USDC → Get 10,000 sUSDC
Step 2: Wrap to wsUSDC
Step 3: Deposit wsUSDC to Aave as collateral
Step 4: Borrow 6,000 USDC (60% LTV)
Step 5: Deposit borrowed USDC to SuperCluster
Step 6: Repeat (carefully!)

Effective APY: 7-10% (with 1.6x leverage)
Risk: Liquidation if SuperCluster has losses
```

### Strategy 2: Delta-Neutral Farming

```
Objective: Earn yield without market exposure

Step 1: Hold 10,000 wsUSDC
Step 2: Short 10,000 USDC worth of volatile asset
Step 3: Earn funding rate + SuperCluster yield
Step 4: Market-neutral position

Expected APY: 5-8% (depending on funding rates)
```

### Strategy 3: Recursive Collateral

```
Maximize capital efficiency:

1. Deposit: 10,000 USDC → wsUSDC
2. Use as collateral, borrow USDC
3. Deposit borrowed USDC → more wsUSDC
4. Use new wsUSDC as collateral
5. Repeat carefully

Max leverage: 2.5x (safe limit)
APY boost: 1.5-2x
```

## Gas Optimization Strategies

### Batch Operations

```
Inefficient:
1. Deposit USDC (gas: 100K)
2. Wrap to wsUSDC (gas: 80K)
3. Deposit to Aave (gas: 150K)
Total: 330K gas

Efficient:
1. Deposit, wrap, and transfer in one transaction
Total: 250K gas (24% savings)
```

### Optimal Timing

- Execute during low network activity
- Batch multiple actions together
- Use multicall contracts when available

## Integration Examples

### Example 1: Aave Integration

```solidity
// 1. Wrap sUSDC to wsUSDC
sUSDC.approve(address(wsUSDC), amount);
wsUSDC.wrap(amount);

// 2. Approve Aave
wsUSDC.approve(address(aavePool), wsUSDCAmount);

// 3. Supply as collateral
aavePool.supply(
    address(wsUSDC),
    wsUSDCAmount,
    msg.sender,
    0
);

// 4. Borrow USDC
aavePool.borrow(
    address(USDC),
    borrowAmount,
    2, // variable rate
    0,
    msg.sender
);
```

### Example 2: Uniswap V3 LP

```solidity
// 1. Prepare tokens
wsUSDC.approve(address(nonfungiblePositionManager), amount0);
USDC.approve(address(nonfungiblePositionManager), amount1);

// 2. Mint LP position
INonfungiblePositionManager.MintParams memory params =
    INonfungiblePositionManager.MintParams({
        token0: address(wsUSDC),
        token1: address(USDC),
        fee: 500, // 0.05%
        tickLower: -100,
        tickUpper: 100,
        amount0Desired: amount0,
        amount1Desired: amount1,
        amount0Min: 0,
        amount1Min: 0,
        recipient: msg.sender,
        deadline: block.timestamp
    });

nonfungiblePositionManager.mint(params);
```

## Monitoring Your DeFi Positions

### Track Multiple Positions

```
Your SuperCluster Holdings:
├─ Direct: 5,000 sUSDC (5,250 USDC value)
├─ Aave Collateral: 4,762 wsUSDC (5,000 USDC value)
├─ Uniswap LP: 2,381 wsUSDC + 2,500 USDC
└─ Yearn Vault: 1,000 wsUSDC (1,050 USDC value)

Total SuperCluster Exposure: 13,143 sUSDC equivalent
Total Value: ~13,800 USDC
```

### Use Portfolio Trackers

**Recommended Tools:**

- Zapper.fi
- DeBank
- Zerion
- Custom dashboards

## Risk Management

### Diversification Across Protocols

```
Don't put all wsUSDC in one protocol:

✅ Good:
- 40% Direct holding (sUSDC)
- 30% Aave collateral
- 20% Uniswap LP
- 10% Reserve

❌ Bad:
- 100% in one lending protocol
- Single point of failure
- Maximum risk exposure
```

### Monitor Health Factors

**For Collateralized Positions:**

```
Safe: Health Factor > 2.0
Caution: Health Factor 1.5 - 2.0
Danger: Health Factor < 1.5
Liquidation: Health Factor < 1.0

Action: Regularly add collateral or repay debt
```

### Emergency Exit Strategy

**If SuperCluster has issues:**

```
1. Stop new deposits
2. Withdraw collateral from DeFi protocols
3. Unwrap wsUSDC to sUSDC
4. Request withdrawal from SuperCluster
5. Or swap on DEX for immediate exit
```

## Comparison: DeFi Usage vs Simple Holding

| Scenario            | Base APY | Additional Yield  | Total APY | Risk Level |
| ------------------- | -------- | ----------------- | --------- | ---------- |
| **Hold sUSDC**      | 5%       | 0%                | 5%        | Low        |
| **Hold wsUSDC**     | 5%       | 0%                | 5%        | Low        |
| **Aave Collateral** | 5%       | -2% (borrow cost) | 3%        | Medium     |
| **Uniswap LP**      | 5%       | 2-4% (fees)       | 7-9%      | Medium     |
| **Yearn Vault**     | 5%       | 2-3%              | 7-8%      | Medium     |
| **Leveraged**       | 5%       | 3-5%              | 8-10%     | High       |
| **Recursive**       | 5%       | 5-7%              | 10-12%    | Very High  |

## Best Practices

### ✅ Do's

1. **Start simple** - Begin with direct holding before complex strategies
2. **Understand risks** - Know each protocol's risks
3. **Monitor positions** - Regular check-ins
4. **Diversify** - Don't concentrate in one protocol
5. **Use wsUSDC for DeFi** - Better compatibility
6. **Test small amounts** - Before large deployments

### ❌ Don'ts

1. **Don't over-leverage** - Stay within safe LTV ratios
2. **Don't ignore health factors** - Monitor collateralized positions
3. **Don't blindly chase yield** - High APY = High risk
4. **Don't forget about gas** - Factor in transaction costs
5. **Don't use sUSDC where incompatible** - Wrap first
6. **Don't forget tax implications** - Track all activity

## Next Steps

1. **[Request Withdrawal](./two_step_withdrawal.md)** - Exit DeFi positions when needed
2. **[Final Withdrawal](./final_withdraw.md)** - Get your USDC back
3. **[Risk Management](../protocol_mechanic/risk_and_safety_model.md)** - Understand protocol risks

## FAQ

**Q: Do I keep earning SuperCluster yield when using tokens in DeFi?**  
A: Yes! Both sUSDC and wsUSDC continue earning SuperCluster base yield.

**Q: Which is better for DeFi, sUSDC or wsUSDC?**  
A: wsUSDC is recommended for most DeFi protocols due to better compatibility.

**Q: Can I use sUSDC in Aave?**  
A: Not recommended. Rebasing tokens have complex interactions. Use wsUSDC instead.

**Q: What happens if the DeFi protocol I use gets hacked?**  
A: You may lose funds in that protocol, but your underlying SuperCluster position may be protected depending on the hack.

**Q: Can I leverage my position?**  
A: Yes, but carefully. Use conservative LTV ratios and monitor health factors.

**Q: How do I track all my positions?**  
A: Use portfolio trackers like Zapper, DeBank, or Zerion.

**Q: Is there a limit to how many protocols I can use?**  
A: No limit, but more protocols = more complexity and risk.

**Q: Can I provide liquidity with sUSDC?**  
A: Possible but not recommended. Use wsUSDC for stable liquidity provision.

---

**Unlock DeFi's full potential!** Use your SuperCluster tokens to build advanced yield strategies while maintaining liquidity.
