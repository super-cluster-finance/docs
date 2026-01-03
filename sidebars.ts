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
        "introduction/who_is_this_for",
      ],
    },
    {
      type: "category",
      label: "Core Concept",
      link: {
        type: "doc",
        id: "core_concept/protocol_overview",
      },
      items: [
        "core_concept/protocol_overview",
        "core_concept/key_assets",
        "core_concept/core_principles",
        "core_concept/yield_abstraction_model",
      ],
    },
    {
      type: "category",
      label: "Protocol Mechanic",
      link: {
        type: "doc",
        id: "protocol_mechanic/how-supercluster-works",
      },
      items: [
        "protocol_mechanic/how-supercluster-works",
        "protocol_mechanic/fund-management-strategy",
        "protocol_mechanic/multiple-yield-sources",
        "protocol_mechanic/how-your-funds-are-protected",
      ],
    },
    {
      type: "category",
      label: "User Flow",
      link: {
        type: "doc",
        id: "user_flow/deposit_stablecoin",
      },
      items: [
        "user_flow/deposit_stablecoin",
        "user_flow/mint_s_usdc",
        "user_flow/yield_accrual",
        "user_flow/wrap_ws_usdc",
        "user_flow/use_in_defi",
        "user_flow/two_step_withdrawal",
        "user_flow/final_withdraw",
      ],
    },
    {
      type: "category",
      label: "Key Features",
      link: {
        type: "doc",
        id: "key_features/liquid_saving_token",
      },
      items: [
        "key_features/liquid_saving_token",
        "key_features/pilot_strategy_layer",
        "key_features/modular_yield_adapters_feature",
        "key_features/two_step_withdrawal_feature",
        "key_features/composability_in_defi",
      ],
    },
    {
      type: "category",
      label: "Smart Contract (Soon)",
      link: {
        type: "doc",
        id: "smart_contract/contract_architecture",
      },
      items: [
        "smart_contract/contract_architecture",
        "smart_contract/core_contracts",
        "smart_contract/upgradeability_model",
        "smart_contract/permission_and_roles",
        "smart_contract/deployment_notes",
      ],
    },
    {
      type: "category",
      label: "Get Started",
      link: {
        type: "doc",
        id: "get_started/quick_start",
      },
      items: [
        "get_started/quick_start",
        "get_started/example_flows",
        "get_started/contract_addresses",
        "get_started/integration_notes",
      ],
    },
    {
      type: "category",
      label: "Conclusion",
      link: {
        type: "doc",
        id: "conclusion/design_philosophy",
      },
      items: ["conclusion/design_philosophy", "conclusion/whats_next"],
    },
    "support",
  ],
};

export default sidebars;
