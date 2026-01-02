# Wrap to wsUSDC

## Overview

Wrapping converts your **sUSDC** (rebasing token) into **wsUSDC** (wrapped SuperCluster USDC) - a non-rebasing token that maintains a constant token count while its exchange value increases over time.

## What is wsUSDC?

**wsUSDC** is a **wrapped, non-rebasing token** that represents your sUSDC holdings in a static balance format optimized for DeFi integrations.

### Key Characteristics

| Feature              | Description                       |
| -------------------- | --------------------------------- |
| **Type**             | Non-Rebasing ERC-20 Token         |
| **Balance Behavior** | Stays constant                    |
| **Value per Token**  | Increases over time               |
| **Transferable**     | ✅ Yes, freely tradable           |
| **Composable**       | ✅ Yes, better DeFi compatibility |
| **Analogous To**     | wstETH from Lido                  |
| **Convertible**      | Can unwrap back to sUSDC anytime  |

## Why Wrap to wsUSDC?

### DeFi Compatibility

Many DeFi protocols don't support rebasing tokens. wsUSDC solves this:

| Protocol Type            | sUSDC Compatible?      | wsUSDC Compatible?      |
| ------------------------ | ---------------------- | ----------------------- |
| DEX (Uniswap, Curve)     | ⚠️ Limited             | ✅ Full support         |
| Lending (Aave, Compound) | ❌ Not supported       | ✅ Full support         |
| Yield Aggregators        | ⚠️ May have issues     | ✅ Full support         |
| Collateral Systems       | ❌ Complex integration | ✅ Standard integration |
| NFT Protocols            | ⚠️ May not track       | ✅ Standard ERC-20      |

### Use Cases for wsUSDC

**1. Collateral in Lending Protocols**

```
Deposit wsUSDC → Borrow other assets → wsUSDC value appreciates
```

**2. Liquidity Provision**

```
Provide wsUSDC/USDC pair → Earn trading fees + yield appreciation
```

**3. Cross-Protocol Strategies**

```
Use wsUSDC in vault strategies → Maintain SuperCluster yield + strategy returns
```

**4. Accounting & Tracking**

```
Fixed token count → Easier accounting → Value appreciation tracked separately
```

## How Wrapping Works

### The Wrapping Mechanism

When you wrap sUSDC into wsUSDC:

```
┌──────────────┐
│   User       │
│ 1,000 sUSDC  │
└──────┬───────┘
       │ Wrap
       ▼
┌──────────────┐
│ SuperCluster │
│   Contract   │
│              │
│ • Lock sUSDC │
│ • Calculate  │
│   shares     │
│ • Mint wsUSDC│
└──────┬───────┘
       │
       ▼
┌──────────────┐
│   User       │
│ 952.38 wsUSDC│ (at 1.05 exchange rate)
└──────────────┘
```

### Exchange Rate Formula

```
wsUSDC Amount = sUSDC Amount / Exchange Rate

Exchange Rate = Total Assets / Total Supply
```

**Example:**

```
You have: 1,000 sUSDC
Current exchange rate: 1.05 (5% yield accrued)

You wrap:
wsUSDC received = 1,000 / 1.05 = 952.38 wsUSDC

Value check:
952.38 wsUSDC × 1.05 = 1,000 USDC equivalent ✓
```

## Step-by-Step Wrapping Process

### Step 1: Hold sUSDC

Ensure you have sUSDC in your wallet:

- Must have deposited USDC first
- Check your sUSDC balance
- Decide how much to wrap

### Step 2: Approve sUSDC

```solidity
sUSDC.approve(wsUSDCAddress, amount)
```

Grant permission to wrap contract to use your sUSDC.

### Step 3: Call Wrap Function

```solidity
wsUSDC.wrap(sUSDCAmount)
```

**Parameters:**

- `sUSDCAmount`: Amount of sUSDC to wrap

### Step 4: Receive wsUSDC

Transaction confirms:

- sUSDC is locked in contract
- wsUSDC is minted to your address
- You now hold non-rebasing tokens

### Step 5: Use wsUSDC in DeFi

Deploy your wsUSDC:

- Use as collateral
- Provide liquidity
- Participate in strategies

## Unwrapping Process

### Convert wsUSDC Back to sUSDC

Unwrapping is equally simple:

```
┌──────────────┐
│   User       │
│ 952.38 wsUSDC│
└──────┬───────┘
       │ Unwrap
       ▼
┌──────────────┐
│ SuperCluster │
│   Contract   │
│              │
│ • Burn wsUSDC│
│ • Calculate  │
│   amount     │
│ • Return     │
│   sUSDC      │
└──────┬───────┘
       │
       ▼
┌──────────────┐
│   User       │
│ 1,000 sUSDC  │ (value may have increased)
└──────────────┘
```

### Unwrap Function

```solidity
wsUSDC.unwrap(wsUSDCAmount)
```

**Returns:**

```
sUSDC Amount = wsUSDC Amount × Current Exchange Rate
```

**Example:**

```
You have: 952.38 wsUSDC
Current exchange rate: 1.10 (10% yield accrued)

You unwrap:
sUSDC received = 952.38 × 1.10 = 1,047.62 sUSDC

Value: 1,047.62 USDC equivalent
```

## Value Appreciation Over Time

### How wsUSDC Value Increases

Unlike sUSDC where balance increases, wsUSDC value per token increases:

```
Day 1:   Wrap 1,000 sUSDC → Get 1,000 wsUSDC (rate: 1.0)
         1 wsUSDC = 1.00 USDC

Day 30:  After rebase (rate: 1.004)
         Balance: Still 1,000 wsUSDC
         1 wsUSDC = 1.004 USDC
         Total value: 1,004 USDC

Day 365: After 1 year (rate: 1.05)
         Balance: Still 1,000 wsUSDC
         1 wsUSDC = 1.05 USDC
         Total value: 1,050 USDC
```

### Comparison Chart

| Time    | sUSDC Balance | wsUSDC Balance | Exchange Rate | sUSDC Value | wsUSDC Value |
| ------- | ------------- | -------------- | ------------- | ----------- | ------------ |
| Day 1   | 1,000         | 1,000          | 1.00          | 1,000 USDC  | 1,000 USDC   |
| Month 1 | 1,004.17      | 1,000          | 1.00417       | 1,004 USDC  | 1,004 USDC   |
| Month 6 | 1,025.00      | 1,000          | 1.025         | 1,025 USDC  | 1,025 USDC   |
| Year 1  | 1,050.00      | 1,000          | 1.05          | 1,050 USDC  | 1,050 USDC   |

**Key Insight:** Both have identical value, just represented differently!

## Technical Implementation

### Smart Contract Interface

```solidity
interface IwsUSDC {
    // Wrapping functions
    function wrap(uint256 sUSDCAmount) external returns (uint256 wsUSDCAmount);
    function unwrap(uint256 wsUSDCAmount) external returns (uint256 sUSDCAmount);

    // View functions
    function getWsUSDCBySUSDC(uint256 sUSDCAmount) external view returns (uint256);
    function getSUSDCByWsUSDC(uint256 wsUSDCAmount) external view returns (uint256);
    function exchangeRate() external view returns (uint256);

    // Standard ERC-20
    function balanceOf(address account) external view returns (uint256);
    function transfer(address to, uint256 amount) external returns (bool);
    function approve(address spender, uint256 amount) external returns (bool);
}
```

### Internal Mechanics

**Wrap Implementation:**

```solidity
function wrap(uint256 sUSDCAmount) external returns (uint256) {
    // Transfer sUSDC from user
    sUSDC.transferFrom(msg.sender, address(this), sUSDCAmount);

    // Calculate wsUSDC amount
    uint256 shares = sUSDC.getSharesByAmount(sUSDCAmount);

    // Mint wsUSDC
    _mint(msg.sender, shares);

    emit Wrap(msg.sender, sUSDCAmount, shares);
    return shares;
}
```

**Unwrap Implementation:**

```solidity
function unwrap(uint256 wsUSDCAmount) external returns (uint256) {
    // Burn wsUSDC
    _burn(msg.sender, wsUSDCAmount);

    // Calculate sUSDC amount
    uint256 sUSDCAmount = sUSDC.getAmountByShares(wsUSDCAmount);

    // Transfer sUSDC to user
    sUSDC.transfer(msg.sender, sUSDCAmount);

    emit Unwrap(msg.sender, wsUSDCAmount, sUSDCAmount);
    return sUSDCAmount;
}
```

## Example Scenarios

### Scenario 1: Liquidity Provider

**Elena wants to provide liquidity on Uniswap:**

```
1. Elena has: 10,000 sUSDC
2. Elena wraps: 10,000 sUSDC → 9,524 wsUSDC (at 1.05 rate)
3. Elena provides liquidity:
   - 9,524 wsUSDC
   - 10,000 USDC
   - Creates wsUSDC/USDC pool
4. Elena earns:
   - Trading fees from swaps
   - wsUSDC value appreciation
   - Double yield!
```

### Scenario 2: Collateral for Borrowing

**Marcus wants to borrow without selling:**

```
1. Marcus has: 50,000 sUSDC
2. Marcus wraps: 50,000 sUSDC → 47,619 wsUSDC (at 1.05 rate)
3. Marcus deposits wsUSDC as collateral on Aave
4. Marcus borrows: 30,000 USDC (60% LTV)
5. Benefits:
   - Maintains exposure to SuperCluster yield
   - Borrows for other opportunities
   - wsUSDC collateral value increases over time
   - Improves health factor automatically
```

### Scenario 3: Yield Strategy Stacking

**Sophia wants maximum returns:**

```
1. Sophia deposits: 100,000 USDC → 100,000 sUSDC
2. Sophia wraps: 100,000 sUSDC → 95,238 wsUSDC (at 1.05 rate)
3. Sophia stakes wsUSDC in yield aggregator
4. Total yields:
   - SuperCluster base yield: ~5% APY
   - Yield aggregator returns: ~3% APY
   - Combined: ~8% APY
5. After 1 year:
   - wsUSDC value: 100,000 × 1.05 = 105,000
   - Aggregator returns: 105,000 × 1.03 = 108,150
   - Total value: ~108,150 USDC
```

## Gas Costs

**Estimated Gas Usage:**

| Operation       | Gas Estimate     | Notes                        |
| --------------- | ---------------- | ---------------------------- |
| Wrap            | ~50,000 - 80,000 | First-time higher (approval) |
| Unwrap          | ~40,000 - 60,000 | No approval needed           |
| Transfer wsUSDC | ~21,000 - 30,000 | Standard ERC-20              |

**Optimization Tips:**

- Wrap larger amounts to optimize gas per token
- Batch operations when possible
- Consider gas prices on Mantle Network

## Advantages of wsUSDC

### ✅ Universal DeFi Compatibility

- Works with ALL standard DeFi protocols
- No special integration required
- Standard ERC-20 behavior

### ✅ Simplified Accounting

- Fixed token count
- Easy to track in portfolio
- Clear value appreciation

### ✅ Better for Trading

- Predictable token amount
- Easier for limit orders
- Standard DEX integration

### ✅ Collateral Optimization

- Value appreciation improves health factor
- Reduces liquidation risk over time
- Standard collateral calculations

### ✅ Tax Efficiency (Potentially)

- No automatic balance increase
- Value appreciation not realized until unwrap/sell
- Consult tax professional

## When to Use wsUSDC vs sUSDC

### Use sUSDC When:

- ✅ Holding for simple savings
- ✅ Want to see balance grow directly
- ✅ Not using in complex DeFi strategies
- ✅ Prefer transparent yield display

### Use wsUSDC When:

- ✅ Using as collateral in lending protocols
- ✅ Providing liquidity on DEXs
- ✅ Integrating with yield aggregators
- ✅ Need fixed token count for accounting
- ✅ Trading on exchanges
- ✅ Building on top of SuperCluster

## Comparison Table

| Feature                | sUSDC                      | wsUSDC                  |
| ---------------------- | -------------------------- | ----------------------- |
| **Balance**            | Increases (rebasing)       | Constant (non-rebasing) |
| **Value per token**    | ~1 USDC                    | Increases over time     |
| **Best for**           | Simple holding             | DeFi integration        |
| **Wallet display**     | Shows total value          | Shows token count       |
| **DeFi compatibility** | Limited                    | Universal               |
| **Gas cost**           | Lower (no wrap)            | Higher (wrap + unwrap)  |
| **Accounting**         | Complex (changing balance) | Simple (fixed balance)  |
| **Trading**            | May confuse traders        | Standard behavior       |
| **Analogous to**       | stETH                      | wstETH                  |

## Safety & Security

### ✅ Secure Design

- Wrapping is fully reversible
- No loss of value in wrap/unwrap
- Standard ERC-20 security model

### ⚠️ Considerations

- Always verify exchange rate before wrapping
- Understand DeFi protocol risks when using wsUSDC
- Unwrap back to sUSDC anytime
- Smart contract risk applies

## Monitoring wsUSDC

### Check Exchange Rate

```solidity
// Call contract to get current rate
wsUSDC.exchangeRate()  // Returns current USDC per wsUSDC
```

### Calculate Your Value

```
Total Value = wsUSDC Balance × Exchange Rate

Example:
1,000 wsUSDC × 1.05 = 1,050 USDC
```

### Track Yield

```
Yield = (Current Exchange Rate / Initial Exchange Rate) - 1

Example:
Initial rate: 1.00
Current rate: 1.05
Yield: (1.05 / 1.00) - 1 = 5%
```

## Next Steps

1. **[Use in DeFi](./use_in_defi.md)** - Deploy wsUSDC across protocols
2. **[Understand Yield Accrual](./yield_accrual.md)** - Learn how value increases
3. **[Withdraw](./two_step_withdrawal.md)** - Unwrap and withdraw when ready

## FAQ

**Q: Is there a fee to wrap/unwrap?**  
A: No wrapping or unwrapping fees. Only gas costs.

**Q: Do I lose yield when I wrap?**  
A: No, wsUSDC continues earning yield through exchange rate appreciation.

**Q: Can I wrap and unwrap multiple times?**  
A: Yes, unlimited times. No restrictions.

**Q: Which is better, sUSDC or wsUSDC?**  
A: Neither is "better" - they're equivalent in value. Choose based on your use case.

**Q: Will my wsUSDC value ever decrease?**  
A: Under normal operation, no. Exchange rate only increases as yield accrues. In extreme loss events, value could decrease.

**Q: Can I send wsUSDC to exchanges?**  
A: Yes, wsUSDC is a standard ERC-20 and can be listed on exchanges.

**Q: What happens if I forget to unwrap before withdrawing?**  
A: You can unwrap anytime. Or withdraw directly by swapping wsUSDC for USDC on a DEX.

---

**Ready to maximize DeFi compatibility?** Wrap your sUSDC to wsUSDC and unlock universal protocol integration.
