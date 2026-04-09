import { createConfig } from './lib/configHelpers';

/**
 * Configuration interface for the conversation
 */
export interface ConversationConfig {
  topic: string;
  description: string;
  whatIs: string;
  why: string;
  polisConversationId: string;
  ogImage: string;
  siteUrl: string;
  siteName: string;
  twitterCardType: string;
  pageTitle: string;
  ogTitle: string;
  learnMoreLink: string;
  learnMoreText: string;
  imageCreditLink: string;
  imageCreditText: string;
  educationDiagramName: string;
  githubRepoUrl: string;
  contributors: {
    displayName: string;
    handle: string;
  }[];
}

export const config: ConversationConfig = createConfig({
  topic: "EOF",
  description: "EVM Object Format (EOF) is a proposed change to Ethereum's EVM. It is planned for Fusaka, but there is lots of push in both directions.",
  whatIs: "EOF (EVM Object Format) is a proposed restructuring of EVM bytecode into a more formalized container format with separate sections for code and data. It aims to make the EVM more efficient, secure, and easier to analyze.",
  why: "Productive conversation is crucial for Ethereum's progress. EOF is a contentious topic, and we want to find out ways to move forward through discovering common ground. This Polis conversation seeks to identify areas of agreement and thoughtful disagreements, providing insights that could help shape the future of planned upgrades like EOF.",
  polisConversationId: "6ah2kbkpct",
  siteUrl: "https://dionysuzx.github.io/polis-experiments/eof",
  learnMoreLink: "https://inevitableeth.com/en/home/ethereum/upgrades/execution-updates/eof",
  learnMoreText: "detailed technical overview",
  imageCreditLink: "https://inevitableeth.com/en/home/ethereum/upgrades/execution-updates/eof",
  imageCreditText: "Inevitable ETH",
  educationDiagramName: "eof-diagram.png",
  githubRepoUrl: "https://github.com/dionysuzx/polis-experiments",
  contributors: [
    { displayName: "chaskin.eth", handle: "chaskin.eth" },
    { displayName: "dionysuz.eth", handle: "dionysuz.eth" },
    { displayName: "joshdavis.eth", handle: "joshdavis.eth" },
    { displayName: "raymondz.eth", handle: "rz" }
  ]
});
