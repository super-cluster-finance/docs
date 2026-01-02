# Mint sUSDC

## Overview

After you deposit USDC into SuperCluster, the protocol automatically mints **sUSDC** (SuperCluster USDC) tokens to your wallet. These are your liquid saving tokens that represent ownership of your deposited USDC plus accumulated yield.

## What is sUSDC?

**sUSDC** is a **rebasing token** - a liquid receipt token that automatically increases in balance as yield is distributed through the rebase mechanism.

### Key Characteristics

| Feature              | Description                        |
| -------------------- | ---------------------------------- |
| **Type**             | Rebasing ERC-20 Token              |
| **Initial Ratio**    | 1 USDC = 1 sUSDC                   |
| **Balance Behavior** | Increases automatically with yield |
| **Transferable**     | ✅ Yes, freely tradable            |
| **Composable**       | ✅ Yes, usable across DeFi         |
| **Analogous To**     | stETH from Lido                    |

## How sUSDC Works

### The Rebasing Mechanism

Unlike regular tokens where your balance stays constant, sUSDC uses a **rebasing mechanism**:

```
Your sUSDC Balance = Your Shares × Current Exchange Rate
```

**Example:**

- You deposit 1,000 USDC
- You receive 1,000 sUSDC (1:1 ratio)
- After 1 year at 5% APY:
  - Your sUSDC balance: **1,050 sUSDC**
  - Your shares: Still the same percentage of total supply
  - Exchange rate: Increased to reflect yield

### Visual Representation

```
Day 1:   Deposit 1,000 USDC → Receive 1,000 sUSDC
         Balance: 1,000 sUSDC = 1,000 USDC

Day 30:  Rebase occurs (5% annual yield)
         Balance: 1,004.17 sUSDC = 1,004.17 USDC

Day 365: After 1 year
         Balance: 1,050 sUSDC = 1,050 USDC
```

## Minting Process

### Automatic Minting

When you deposit USDC, sUSDC is minted automatically in the same transaction:

```
Deposit Transaction:
├─ Transfer USDC to SuperCluster
├─ Calculate shares based on current exchange rate
├─ Mint sUSDC to your address
└─ Emit Deposit event
```

### Exchange Rate Calculation

```solidity
// Initial deposit (first time)
Exchange Rate = 1.0
sUSDC Minted = USDC Deposited × 1.0

// Subsequent deposits (after yield accrual)
Exchange Rate = Total Assets / Total Supply
sUSDC Minted = USDC Deposited / Exchange Rate
```

**Example with Accrued Yield:**

| Scenario    | Total Assets | Total Supply | Exchange Rate | Your Deposit | sUSDC Minted |
| ----------- | ------------ | ------------ | ------------- | ------------ | ------------ |
| Initial     | 1,000 USDC   | 1,000 sUSDC  | 1.0           | 1,000 USDC   | 1,000 sUSDC  |
| After Yield | 1,050 USDC   | 1,000 sUSDC  | 1.05          | 1,000 USDC   | 952.38 sUSDC |

**Note:** Later depositors receive fewer sUSDC tokens, but each token is worth more USDC.

## What Can You Do With sUSDC?

### 1. Hold and Earn

- Simply hold in your wallet
- Balance automatically increases with rebase
- Watch your savings grow

### 2. Transfer

- Send to other addresses
- Gift or payment
- Fully transferable

### 3. Wrap to wsUSDC

- Convert to non-rebasing token
- Better for DeFi integrations
- See [Wrap to wsUSDC](./wrap_ws_usdc.md)

### 4. Use in DeFi

- Provide liquidity on DEX
- Use as collateral (with compatible protocols)
- Participate in DeFi strategies
- See [Use in DeFi](./use_in_defi.md)

### 5. Withdraw

- Request withdrawal to get USDC back
- Or swap directly on DEX
- See [Two-Step Withdrawal](./two_step_withdrawal.md)

## Technical Details

### Token Standard

**sUSDC** implements a modified ERC-20 with rebasing functionality:

```solidity
interface IsUSDC {
    // Standard ERC-20 functions
    function balanceOf(address account) external view returns (uint256);
    function transfer(address to, uint256 amount) external returns (bool);
    function approve(address spender, uint256 amount) external returns (bool);

    // Rebasing-specific functions
    function sharesOf(address account) external view returns (uint256);
    function getSharesByAmount(uint256 amount) external view returns (uint256);
    function getAmountByShares(uint256 shares) external view returns (uint256);
}
```

### Shares vs Balance

**Internal Accounting:**

- **Shares:** Your fixed percentage of the total supply
- **Balance:** Your shares converted to token amount

```
User's sUSDC Balance = User's Shares × (Total Assets / Total Shares)
```

**Example:**

```
User owns: 10 shares
Total shares: 100
Total assets: 1,100 USDC

User's balance = 10 × (1,100 / 100) = 110 sUSDC
```

## Rebasing Events

### When Rebase Occurs

**Hackathon Phase:**

- Event-based (manual trigger by team)
- Triggered after yield collection

**Production Phase:**

- Daily automated rebase
- Consistent schedule (e.g., 00:00 UTC)

### What Happens During Rebase?

1. **Yield Collection**

   - Adapters collect yield from lending protocols
   - Aggregate total returns

2. **Exchange Rate Update**

   - Calculate new exchange rate
   - Update global state

3. **Balance Update**

   - All sUSDC holders see balance increase
   - Proportional to their share ownership

4. **Event Emission**
   ```solidity
   event Rebase(uint256 totalAssets, uint256 totalSupply, uint256 exchangeRate);
   ```

## Example Scenarios

### Scenario 1: Early Depositor

**Alice deposits 10,000 USDC on Day 1:**

```
Day 1:    Deposit 10,000 USDC
          Receive 10,000 sUSDC
          Balance: 10,000 sUSDC

Day 30:   First rebase (0.4% monthly yield)
          Balance: 10,040 sUSDC
          Value: 10,040 USDC

Day 365:  After 12 rebases (5% annual yield)
          Balance: 10,500 sUSDC
          Value: 10,500 USDC
```

### Scenario 2: Later Depositor

**Bob deposits 10,000 USDC on Day 180 (after yield has accrued):**

```
Day 180:  Protocol state:
          - Total Assets: 105,000 USDC
          - Total Supply: 100,000 sUSDC
          - Exchange Rate: 1.05

          Bob deposits: 10,000 USDC
          Bob receives: 10,000 / 1.05 = 9,523.81 sUSDC
          Bob's value: 9,523.81 × 1.05 = 10,000 USDC ✓

Day 365:  After more rebases
          Bob's balance: ~10,238 sUSDC
          Bob's value: ~10,250 USDC
          Bob's yield: ~2.5% (6 months)
```

### Scenario 3: Transfer Between Users

**Charlie transfers sUSDC to Diana:**

```
Before Transfer:
Charlie: 5,000 sUSDC (worth 5,250 USDC at 1.05 rate)
Diana:   1,000 sUSDC (worth 1,050 USDC at 1.05 rate)

Charlie transfers 1,000 sUSDC to Diana:

After Transfer:
Charlie: 4,000 sUSDC (worth 4,200 USDC)
Diana:   2,000 sUSDC (worth 2,100 USDC)

Next Rebase (rate becomes 1.06):
Charlie: 4,000 sUSDC (worth 4,240 USDC)
Diana:   2,000 sUSDC (worth 2,120 USDC)
```

## Advantages of sUSDC

### ✅ Automatic Yield Accumulation

- No need to claim or compound
- Balance grows automatically
- Gas-efficient for users

### ✅ Transparent Value

- Balance reflects total value directly
- Easy to track earnings
- No complex calculations needed

### ✅ Full Liquidity

- Instantly transferable
- Tradable on DEX
- No lock-up period

### ✅ Composable

- Use in other DeFi protocols
- Maintain yield while deployed elsewhere
- Build advanced strategies

## Limitations & Considerations

### ⚠️ DeFi Integration Challenges

Some DeFi protocols don't support rebasing tokens:

- Lending protocols (Aave, Compound)
- Some AMMs
- Certain yield aggregators

**Solution:** Wrap to wsUSDC for full compatibility

### ⚠️ Wallet Display

Some wallets may not update rebasing balances in real-time:

- Refresh wallet to see updated balance
- Check on blockchain explorer for accurate amount
- Use protocol dashboard for real-time data

### ⚠️ Tax Implications

Rebasing may have tax implications:

- Automatic balance increase could be taxable
- Consult tax professional
- Regulations vary by jurisdiction

## Comparison: sUSDC vs wsUSDC

| Feature         | sUSDC (Rebasing)    | wsUSDC (Non-Rebasing) |
| --------------- | ------------------- | --------------------- |
| Balance         | Increases over time | Stays constant        |
| Value per token | Stays ~1 USDC       | Increases over time   |
| Best for        | Direct holding      | DeFi integrations     |
| Wallet display  | Shows total value   | Shows token count     |
| Analogous to    | stETH               | wstETH                |
| Convertible     | Can wrap → wsUSDC   | Can unwrap → sUSDC    |

## Smart Contract Reference

```solidity
// Mint function (called internally on deposit)
function _mint(address account, uint256 amount) internal {
    uint256 shares = getSharesByAmount(amount);
    _mintShares(account, shares);
    emit Transfer(address(0), account, amount);
}

// Balance calculation
function balanceOf(address account) public view returns (uint256) {
    uint256 shares = sharesOf(account);
    return getAmountByShares(shares);
}

// Rebase function
function rebase() external {
    uint256 totalAssets = calculateTotalAssets();
    uint256 totalSupply = totalSupply();
    _exchangeRate = totalAssets / totalSupply;
    emit Rebase(totalAssets, totalSupply, _exchangeRate);
}
```

## Monitoring Your sUSDC

### Check Balance

- View in your wallet
- Check on block explorer
- Use SuperCluster dashboard

### Track Yield

```
Yield Earned = Current Balance - Initial Deposit
APY = (Yield Earned / Initial Deposit) × (365 / Days Held) × 100%
```

### View Shares

- Call `sharesOf(yourAddress)` on contract
- Shares remain constant
- Balance changes with exchange rate

## Next Steps

1. **[Wrap to wsUSDC](./wrap_ws_usdc.md)** - Convert for DeFi compatibility
2. **[Understand Yield Accrual](./yield_accrual.md)** - Learn how rebasing works
3. **[Use in DeFi](./use_in_defi.md)** - Deploy your tokens productively
4. **[Withdraw](./two_step_withdrawal.md)** - Get your USDC back when ready

## FAQ

**Q: Do I need to do anything to receive sUSDC?**  
A: No, sUSDC is automatically minted when you deposit USDC.

**Q: Why does my sUSDC balance increase?**  
A: Your balance increases automatically through the rebase mechanism as yield is distributed.

**Q: Can I transfer sUSDC to another wallet?**  
A: Yes, sUSDC is fully transferable like any ERC-20 token.

**Q: Will my sUSDC work in all DeFi protocols?**  
A: Some protocols don't support rebasing tokens. Use wsUSDC for full compatibility.

**Q: What happens if I transfer sUSDC before a rebase?**  
A: The recipient receives the shares and will benefit from future rebases.

**Q: Is there a fee to hold sUSDC?**  
A: No holding fees. Performance fees (5-10%) are taken from yield generated, not from your balance.

---

**Congratulations!** You now hold liquid, yield-bearing sUSDC tokens. Watch your savings grow automatically.
