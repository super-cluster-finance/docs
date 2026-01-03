# Yield Accrual (Rebase)

## Overview

Yield accrual in SuperCluster happens through a **rebase mechanism** - a process that distributes earned yield proportionally to all token holders by updating the exchange rate between sUSDC and USDC.

## What is a Rebase?

A **rebase** is the event where SuperCluster:

1. Collects yield from all lending protocols
2. Updates the exchange rate
3. Distributes yield to all sUSDC holders proportionally

**Result:**

- sUSDC holders see balance increase automatically
- wsUSDC holders see value per token increase
- No action required from users

## How Yield is Generated

### Multi-Protocol Yield Sources

Your deposited USDC generates yield from multiple lending protocols:

```
Your Deposit (10,000 USDC)
       │
       v
Pilot Strategy Allocation
       │
   ┌───┴───┐
   │       │
   v       v
 60%     40%
Aave   Morpho
 5%      6%
 │       │
 └───┬───┘
     │
     v
Blended APY: ~5.4%
```

### Yield Calculation

**Blended APY Formula:**

```
Blended APY = Σ (Allocation % × Protocol APY)

Example:
(60% × 5%) + (40% × 6%)
= 3.0% + 2.4%
= 5.4% APY
```

## Rebase Mechanism Explained

### Before Rebase

```
Protocol State:
- Total Assets: 1,000,000 USDC
- Total sUSDC Supply: 1,000,000 sUSDC
- Exchange Rate: 1.00

Your Holdings:
- sUSDC Balance: 10,000 sUSDC
- Value: 10,000 USDC
```

### During Rebase

**Step 1: Yield Collection**

```
Adapters harvest yield from protocols:
- Aave:     +3,000 USDC
- Morpho:   +2,400 USDC
-----------------------
Total Yield: +5,400 USDC
```

**Step 2: Exchange Rate Update**

```
New Total Assets = 1,000,000 + 5,400 = 1,005,400 USDC
Total Supply = 1,000,000 sUSDC (unchanged)

New Exchange Rate = 1,005,400 / 1,000,000 = 1.0054
```

**Step 3: Balance Update**

```
Your new balance = Your shares × New Exchange Rate
                 = 10,000 × 1.0054
                 = 10,054 sUSDC
```

### After Rebase

```
Protocol State:
- Total Assets: 1,005,400 USDC
- Total sUSDC Supply: 1,000,000 sUSDC (supply number unchanged)
- Exchange Rate: 1.0054

Your Holdings:
- sUSDC Balance: 10,054 sUSDC (+54 sUSDC)
- Value: 10,054 USDC (+54 USDC yield)
```

## Rebase Schedule

### Hackathon Phase (MVP)

**Frequency:** Event-based (manual trigger)  
**Trigger:** Core team initiates rebase after yield collection  
**Notification:** Announced in advance

**Process:**

```
1. Team collects yield from protocols
2. Team verifies total assets
3. Team calls rebase() function
4. Exchange rate updates
5. Balances adjust automatically
```

### Production Phase

**Frequency:** Daily automated  
**Schedule:** Fixed time (e.g., 00:00 UTC)  
**Automation:** Smart contract automation (Chainlink Keepers or similar)

**Process:**

```
1. Automated trigger at scheduled time
2. Contract collects yield automatically
3. Exchange rate updates
4. Balances adjust automatically
5. Event emitted on-chain
```

## How Rebase Affects You

### If You Hold sUSDC

**Your Balance Increases:**

```
Before Rebase:
sUSDC Balance: 1,000 sUSDC
Value: 1,000 USDC

After Rebase (1% yield):
sUSDC Balance: 1,010 sUSDC (+10 sUSDC)
Value: 1,010 USDC (+10 USDC)
```

**Wallet Display:**

- Most wallets show updated balance immediately
- Some may require refresh
- Check block explorer for accurate amount

### If You Hold wsUSDC

**Your Balance Stays Constant, Value Increases:**

```
Before Rebase:
wsUSDC Balance: 1,000 wsUSDC
Exchange Rate: 1.00
Value: 1,000 USDC

After Rebase (1% yield):
wsUSDC Balance: 1,000 wsUSDC (unchanged)
Exchange Rate: 1.01
Value: 1,010 USDC (+10 USDC)
```

**To Check Value:**

```solidity
wsUSDC.balanceOf(yourAddress) × wsUSDC.exchangeRate()
```

## Rebase Mathematics

### Share-Based System

Super Cluster uses a **share-based** system to ensure fair yield distribution:

```
User Balance = User Shares × (Total Assets / Total Shares)
```

**Example:**

| User  | Shares | Assets | Supply | Exchange Rate | Balance   |
| ----- | ------ | ------ | ------ | ------------- | --------- |
| Alice | 100    | 1,000  | 1,000  | 1.0           | 100 sUSDC |
| Bob   | 50     | 1,000  | 1,000  | 1.0           | 50 sUSDC  |

**After Rebase (10% yield):**

| User  | Shares | Assets | Supply | Exchange Rate | Balance   |
| ----- | ------ | ------ | ------ | ------------- | --------- |
| Alice | 100    | 1,100  | 1,000  | 1.1           | 110 sUSDC |
| Bob   | 50     | 1,100  | 1,000  | 1.1           | 55 sUSDC  |

**Key Point:** Shares never change, but balance increases proportionally.

### Proportional Distribution

Yield is always distributed **proportionally**:

```
Your Yield = (Your Shares / Total Shares) × Total Yield
```

**Example:**

```
You own: 10,000 shares
Total shares: 1,000,000 shares
Your ownership: 1%

Total yield: 5,400 USDC

Your yield = 1% × 5,400 = 54 USDC
```

## Real-World Example

### Year 1 Rebase Timeline

**Initial Deposit:**

```
Day 0: Deposit 10,000 USDC
       Receive 10,000 sUSDC
       Exchange Rate: 1.000
```

**Monthly Rebases (5% Annual APY):**

| Month | Yield  | New Balance | Exchange Rate | Total Value |
| ----- | ------ | ----------- | ------------- | ----------- |
| 0     | -      | 10,000.00   | 1.0000        | 10,000 USDC |
| 1     | +41.67 | 10,041.67   | 1.0042        | 10,042 USDC |
| 2     | +41.84 | 10,083.51   | 1.0084        | 10,084 USDC |
| 3     | +42.01 | 10,125.52   | 1.0126        | 10,126 USDC |
| 6     | +43.05 | 10,253.15   | 1.0253        | 10,253 USDC |
| 12    | +45.65 | 10,500.00   | 1.0500        | 10,500 USDC |

**Total Yield After 1 Year:** 500 USDC (5% APY)

### Compound Growth

Yield compounds automatically through rebase:

```
Year 1: 10,000 → 10,500 (+500)
Year 2: 10,500 → 11,025 (+525)
Year 3: 11,025 → 11,576 (+551)

Total: +1,576 USDC (15.76% over 3 years)
```

## Technical Implementation

### Rebase Function (Hackathon)

```solidity
function rebase() external onlyAuthorized {
    // 1. Calculate total assets
    uint256 totalAssets = calculateTotalAssets();

    // 2. Get total supply
    uint256 totalSupply = totalSupply();

    // 3. Update exchange rate
    exchangeRate = totalAssets * 1e18 / totalSupply;

    // 4. Emit event
    emit Rebase(
        totalAssets,
        totalSupply,
        exchangeRate,
        block.timestamp
    );
}
```

### Calculate Total Assets

```solidity
function calculateTotalAssets() internal view returns (uint256) {
    uint256 total = 0;

    // Sum from all adapters
    total += aaveAdapter.getTotalAssets();
    total += morphoAdapter.getTotalAssets();

    return total;
}
```

### Rebase Event

```solidity
event Rebase(
    uint256 totalAssets,
    uint256 totalSupply,
    uint256 exchangeRate,
    uint256 timestamp
);
```

## Monitoring Rebase Activity

### On-Chain Monitoring

**Listen for Rebase Events:**

```javascript
superCluster.on(
  "Rebase",
  (totalAssets, totalSupply, exchangeRate, timestamp) => {
    console.log("Rebase occurred!");
    console.log("New exchange rate:", exchangeRate);
    console.log("Total assets:", totalAssets);
  }
);
```

### Check Your Yield

**Calculate Earned Yield:**

```
Current Balance - Initial Deposit = Total Yield

Example:
Current: 10,500 sUSDC
Initial: 10,000 sUSDC
Yield: 500 sUSDC (500 USDC worth)
```

**Calculate APY:**

```
APY = (Current Value / Initial Deposit - 1) × (365 / Days Held) × 100%

Example:
Current: 10,500 USDC
Initial: 10,000 USDC
Days held: 365

APY = (10,500 / 10,000 - 1) × (365 / 365) × 100%
    = 0.05 × 1 × 100%
    = 5%
```

## Yield Optimization

### Pilot Strategy Rebalancing

The Pilot Strategy optimizes yield by rebalancing allocations:

**Before Rebalance:**

```
Protocol APY:
- Aave:     5.0%  (60% allocation)
- Morpho:   6.5%  (40% allocation)

Blended APY: 5.6%
```

**After Rebalance (Morpho APY increased):**

```
New Allocation:
- Aave:     40%  (5.0% APY)
- Morpho:   60%  (6.5% APY) ← Increased!

New Blended APY: 5.9%
```

**Result:** Higher yield for all users through automatic optimization.

## Factors Affecting Yield

### 📈 Positive Factors

1. **High Protocol APYs**

   - Increased lending demand
   - Protocol incentives
   - Market conditions

2. **Optimal Allocation**

   - Pilot Strategy finds best yields
   - Diversification reduces risk
   - Automatic rebalancing

3. **Compound Growth**
   - Yield reinvested automatically
   - Exponential growth over time

### 📉 Negative Factors

1. **Low Protocol APYs**

   - Decreased lending demand
   - Market downturn
   - Excess liquidity

2. **Protocol Fees**

   - Underlying protocol fees
   - Reduces net APY

3. **Performance Fees**
   - SuperCluster fee (5-10% of yield in production)
   - Applied before distribution

## Fee Structure Impact

### Hackathon Phase

**No Fees:** 100% of yield distributed to users

```
Gross Yield: 500 USDC
Fees: 0 USDC
Net Yield to Users: 500 USDC
```

### Production Phase

**Performance Fee:** 5-10% of yield

```
Gross Yield: 500 USDC
Performance Fee (10%): 50 USDC
Net Yield to Users: 450 USDC
```

**Effective APY:**

```
Gross APY: 5.0%
After 10% performance fee: 4.5% net APY
```

## Comparison with Other Protocols

| Feature          | SuperCluster      | Traditional Staking | Yield Aggregators      |
| ---------------- | ----------------- | ------------------- | ---------------------- |
| **Rebase**       | Yes (automatic)   | Varies              | No (claim needed)      |
| **Frequency**    | Daily             | Varies              | Manual claim           |
| **Compound**     | Automatic         | Automatic           | Manual                 |
| **Liquidity**    | Full (via tokens) | Limited             | Limited (vault shares) |
| **Asset Type**   | Stablecoin        | Volatile            | Mixed                  |
| **Yield Source** | Multi-protocol    | Single              | Multi-strategy         |

## Safety & Security

### ✅ Built-in Protections

1. **Diversification**

   - Multiple protocol allocation
   - Risk spread across venues

2. **Conservative Strategy**

   - Focus on established protocols
   - Risk-adjusted allocation

3. **Transparent Calculation**
   - On-chain verification
   - Auditable rebase logic

### ⚠️ Risk Considerations

1. **Protocol Risk**

   - Underlying protocol exploits
   - Smart contract vulnerabilities

2. **Yield Variability**

   - APY not guaranteed
   - Market-dependent returns

3. **Rebase Delay**
   - Hackathon: Manual trigger
   - May not capture real-time yields

## Advanced Topics

### Negative Rebase (Loss Events)

In case of protocol losses:

```
Before Loss:
Total Assets: 1,000,000 USDC
Total Supply: 1,000,000 sUSDC
Exchange Rate: 1.00
Your Balance: 10,000 sUSDC = 10,000 USDC

After 5% Loss:
Total Assets: 950,000 USDC (-50,000)
Total Supply: 1,000,000 sUSDC
Exchange Rate: 0.95
Your Balance: 10,000 sUSDC = 9,500 USDC (-500 USDC)
```

**Loss Socialization:** All holders bear proportional losses.

### Rebase and Transfers

**If you transfer sUSDC before rebase:**

```
Alice has: 1,000 sUSDC
Alice transfers 500 sUSDC to Bob

After Rebase (10% yield):
Alice: 550 sUSDC (500 × 1.1)
Bob: 550 sUSDC (500 × 1.1)

Both benefit from rebase on their current holdings.
```

## Example Use Cases

### Use Case 1: Long-Term Savings

**Goal:** Save for 5 years

```
Initial Deposit: 50,000 USDC
Average APY: 5%

Year 1: 52,500 USDC
Year 2: 55,125 USDC
Year 3: 57,881 USDC
Year 4: 60,775 USDC
Year 5: 63,814 USDC

Total Gain: +13,814 USDC (27.6%)
```

### Use Case 2: Emergency Fund

**Goal:** Maintain liquid emergency savings with yield

```
Deposit: 20,000 USDC → 20,000 sUSDC
Earn: ~5% APY while maintaining full liquidity
Access: Can withdraw anytime via protocol or DEX

After 6 months: ~20,500 USDC (500 gain)
Emergency occurs: Swap sUSDC for USDC on DEX instantly
```

### Use Case 3: Dollar-Cost Averaging

**Goal:** Regular deposits with compound growth

```
Monthly Deposit: 1,000 USDC
APY: 5%

Month 1: 1,000 USDC deposited
Month 2: 2,004 USDC total (1,000 + 1,004 from yield)
Month 3: 3,013 USDC total
...
Month 12: 12,330 USDC total

Deposited: 12,000 USDC
Yield Earned: 330 USDC
```

## Next Steps

1. **[Use in DeFi](./use_in_defi.md)** - Deploy your yield-bearing tokens
2. **[Withdraw](./two_step_withdrawal.md)** - Access your funds when needed
3. **[Monitor Performance](../protocol_mechanic/architecture.md)** - Track your yields

## FAQ

**Q: Do I need to do anything to receive yield?**  
A: No, yield is distributed automatically through rebase.

**Q: How often does rebase occur?**  
A: Hackathon: Event-based (manual). Production: Daily automated.

**Q: Can I see historical rebases?**  
A: Yes, check on-chain Rebase events or protocol dashboard.

**Q: What if I miss a rebase?**  
A: You don't miss it - rebase applies to all holders automatically.

**Q: Is yield guaranteed?**  
A: No, yield depends on lending protocol performance and market conditions.

**Q: What happens in a negative rebase?**  
A: Losses are socialized proportionally among all holders.

**Q: Do rebases cost gas?**  
A: No, users don't pay gas for rebase - protocol handles it.

**Q: Can I predict next rebase amount?**  
A: Estimate based on current protocol APYs and allocation, but not guaranteed.

---

**Sit back and earn!** Your balance grows automatically with every rebase.
