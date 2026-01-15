import type { SidebarsConfig } from "@docusaurus/plugin-content-docs";

// This runs in Node.js - Don't use client-side code here (browser APIs, JSX...)

/**
 * Creating a sidebar enables you to:
 - create an ordered group of docs
 - render a sidebar for each doc of that group
 - provide next/previous navigation

 The sidebars can be generated from the filesystem, or explicitly defined here.

 Create as many sidebars as you want.
 */
const sidebars: SidebarsConfig = {
  tutorialSidebar: [
    {
      type: "category",
      label: "Introduction",
      link: {
        type: "doc",
        id: "introduction/overview",
      },
      items: [
        "introduction/overview",
        "introduction/problem",
        "introduction/solution",
        "introduction/who-is-this-for",
      ],
    },
    {
      type: "category",
      label: "Core Concept",
      link: {
        type: "doc",
        id: "core-concept/protocol-overview",
      },
      items: [
        "core-concept/protocol-overview",
        "core-concept/key-assets",
        "core-concept/core-principles",
        "core-concept/yield-abstraction-model",
      ],
    },
    {
      type: "category",
      label: "Protocol Mechanic",
      link: {
        type: "doc",
        id: "protocol-mechanic/how-supercluster-works",
      },
      items: [
        "protocol-mechanic/how-supercluster-works",
        "protocol-mechanic/fund-management-strategy",
        "protocol-mechanic/multiple-yield-sources",
        "protocol-mechanic/how-your-funds-are-protected",
      ],
    },
    {
      type: "category",
      label: "User Flow",
      link: {
        type: "doc",
        id: "user-flow/deposit-stablecoin",
      },
      items: [
        "user-flow/deposit-stablecoin",
        "user-flow/mint-s-usdc",
        "user-flow/yield-accrual",
        "user-flow/wrap-ws-usdc",
        "user-flow/two-step-withdrawal",
        "user-flow/final-withdraw",
      ],
    },
    {
      type: "category",
      label: "Key Features",
      link: {
        type: "doc",
        id: "key-features/liquid-saving-token",
      },
      items: [
        "key-features/liquid-saving-token",
        "key-features/pilot-strategy-layer",
        "key-features/modular-yield-adapters-feature",
        "key-features/two-step-withdrawal-feature",
        "key-features/composability-in-defi",
      ],
    },
    {
      type: "category",
      label: "Smart Contract (Soon)",
      link: {
        type: "doc",
        id: "smart-contract/contract-architecture",
      },
      items: [
        "smart-contract/contract-architecture",
        "smart-contract/core-contracts",
        "smart-contract/upgradeability-model",
        "smart-contract/permission-and-roles",
        "smart-contract/deployment-notes",
      ],
    },
    {
      type: "category",
      label: "Get Started",
      link: {
        type: "doc",
        id: "get-started/quick-start",
      },
      items: [
        "get-started/quick-start",
        "get-started/example-flows",
        "get-started/contract-addresses",
        "get-started/integration-notes",
      ],
    },
    {
      type: "category",
      label: "Conclusion",
      link: {
        type: "doc",
        id: "conclusion/design-philosophy",
      },
      items: ["conclusion/design-philosophy", "conclusion/whats-next"],
    },
    "support",
  ],
};

export default sidebars;
