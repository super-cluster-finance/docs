# Two-Step Withdrawal

SuperCluster uses a request-and-claim withdrawal flow to keep liquidity stable while funds sit in external lending markets.

## Why Two Steps

- Protects day-to-day liquidity by recalling funds in an orderly way instead of forcing immediate unwinds.
- Aligns with the modular adapter design: liquidity is prepared first, then redeemed.
- Lets large withdrawals clear without harming remaining depositors.

## Process

| Step | Action | Description |
| --- | --- | --- |
| 1 | Request withdrawal | User submits sUSDC or wsUSDC to start the withdrawal queue. |
| 2 | Liquidity preparation | Protocol recalls stablecoins from adapters to fulfill the request. Timing depends on lending market liquidity. |
| 3 | Claim withdrawal | User redeems prepared USDC when ready. |

## Timelines and Expectations

- Duration depends on the liquidity of connected protocols and the amount requested.
- Rebases can continue while a request is pending; final redemption reflects the latest exchange rate.
- Emergency alternative: swap sUSDC or wsUSDC on a DEX for near-instant liquidity (subject to market pricing).

## User Guidance

- For predictable exits, initiate the protocol withdrawal and wait for the claim step.
- For speed-sensitive exits, consider DEX swaps, especially for smaller amounts.
- Keep wsUSDC if you plan to use positions as collateral while waiting; unwrap to sUSDC before claiming through the protocol.
