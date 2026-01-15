---
pagination_next: user-flow/mint-s-usdc
---

# Deposit Stablecoin

Depositing stablecoin is the first step in the SuperCluster user journey. Users deposit USDC into the SuperCluster protocol to start earning yield while maintaining liquidity through receipt tokens.

## What Happens When You Deposit?

When you deposit USDC into SuperCluster:

1. **User Approves USDC Spending** - Grant permission to SuperCluster contract
2. **User Calls `deposit(amount)` Function** - Initiate the deposit transaction
3. **SuperCluster Receives USDC** - Your stablecoins are transferred to the protocol
4. **sUSDC is Minted** - You receive liquid saving tokens at 1:1 ratio
5. **Funds Are Allocated** - Your USDC is distributed to lending protocols via Pilot Strategy

## Step-by-Step Process

### Step 1: Connect Your Wallet

- Connect your wallet to the SuperCluster dApp
- Ensure you have USDC on Mantle Network
- Check you have sufficient ETH for gas fees

### Step 2: Approve USDC

```solidity
// The protocol will request approval to spend your USDC
USDC.approve(SuperClusterAddress, amount)
```

**Why?** This is a standard security measure in DeFi you must explicitly allow smart contracts to use your tokens.

### Step 3: Enter Deposit Amount

- Specify how much USDC you want to deposit
- Minimum deposit: [To be defined in production]
- Maximum deposit: No limit (subject to protocol capacity)

### Step 4: Confirm Transaction

- Review the transaction details
- Confirm the transaction in your wallet
- Wait for blockchain confirmation

### Step 5: Receive sUSDC

Once the transaction is confirmed:

- You receive sUSDC tokens at a 1:1 ratio
- Your sUSDC balance appears in your wallet
- Yield accrual begins immediately

## Transaction Flow Diagram

```mermaid
%%{init: {'theme':'base', 'themeVariables': { 'primaryColor':'#0b84ba','primaryTextColor':'#ffffff','primaryBorderColor':'#0a7098','lineColor':'#ffffff','secondaryColor':'#0a7098','tertiaryColor':'#08506e'}}}%%
flowchart TD
    A["User Wallet (USDC)"]
    B["SuperCluster Contract"]
    C["Mint sUSDC"]
    D["Pilot Strategy"]
    E["Compound (40%)"]
    F["Init (30%)"]
    G["Dolomite (30%)"]

    A --> B
    B --> C
    B --> D
    D --> E
    D --> F
    D --> G
```

## What You Get

| You Deposit  | You Receive   | Value     |
| ------------ | ------------- | --------- |
| 1,000 USDC   | 1,000 sUSDC   | 1:1 ratio |
| 10,000 USDC  | 10,000 sUSDC  | 1:1 ratio |
| 100,000 USDC | 100,000 sUSDC | 1:1 ratio |

**Note:** Initial deposit is always 1:1. As yield accrues, the value of your sUSDC increases through rebasing.

## Behind the Scenes

After you deposit:

### 1. SuperCluster Core Contract

- Receives your USDC
- Mints sUSDC tokens to your address
- Records your share in the protocol

### 2. Pilot Strategy Allocation

- Analyzes current APY across all protocols
- Assesses liquidity and risk parameters
- Determines optimal allocation strategy

### 3. Adapter Execution

- Sends USDC to selected lending protocols
- Executes deposits via protocol-specific adapters
- Begins earning yield immediately

### 4. Pilot Strategy Allocation Details

The Pilot Strategy divides your deposit across 3 protocols:

- **Compound (40%):** Optimized lending through Compound
- **Init (30%):** Capital deployment to the Init lending venue
- **Dolomite (30%):** Decentralized lending platform with advanced risk management

## Important Notes

### Benefits

- Instant liquidity via sUSDC tokens
- Yield accrual begins immediately
- No lock-up periods
- Composable across DeFi

### Things to Know

- You need USDC on Mantle Network
- Gas fees required for transaction
- Smart contract risk (see Risk Management)
- APY may vary based on market conditions

### Security

- Your USDC is allocated to audited lending protocols
- Pilot Strategy manages diversification
- No single point of failure
- Multi-protocol risk distribution

## Gas Costs

**Estimated Gas:**

- First-time deposit: Higher (approval + deposit)
- Subsequent deposits: Lower (deposit only)

**Tip:** Consider depositing larger amounts to optimize gas efficiency.

**Ready to deposit?** Connect your wallet and start earning stable, liquid yield today.
