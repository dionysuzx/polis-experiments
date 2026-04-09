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

/**
 * Main configuration for the site
 * 
 * To create a new site for a different topic, just update these values:
 * - topic: The main topic of conversation (e.g. "EOF")
 * - description: A short description of the topic
 * - whatIs: A longer explanation of what the topic is
 * - why: Explanation of why this conversation matters
 * - polisConversationId: The Polis conversation ID
 * - siteUrl: The URL for the site
 * - learnMoreLink: Link to more detailed information about the topic
 * - learnMoreText: Text to display for the learn more link
 * - imageCreditLink: Link to the source of the diagram image
 * - imageCreditText: Text to display for the image credit
 * - educationDiagramName: Filename of the education diagram (located in the static directory)
 * - githubRepoUrl: URL to the GitHub repository
 * - contributors: List of contributors with display names and handles
 * 
 * Everything else (site titles, etc.) will be generated automatically
 * based on the topic.
 */
export const config: ConversationConfig = createConfig({
  topic: "Native Rollups",
  description: "Native rollups are a proposed endgame for scaling Ethereum blockspace.",
  whatIs: "Native rollups use an EXECUTE precompile that exposes the L1 EVM execution engine to Layer 2 solutions. This allows rollups to verify EVM state transitions for batches of transactions with the same security guarantees as Ethereum's L1. Think of them as programmable execution shards that wrap the precompile within a derivation function to handle system logic like sequencing, bridging, and governance.",
  why: "The Ethereum community is discussing whether native rollups represent the best path forward for L2 scaling. While they offer improved security by eliminating trusted intermediaries, several practical challenges remain. Some L2 designs require custom transaction types, different gas accounting, and precompiles not supported by Ethereum L1. This conversation seeks to find common ground on how native rollup technology should evolve.",
  polisConversationId: "2scakk4srj",
  siteUrl: "https://dionysuzx.github.io/polis-experiments/native-rollups",
  learnMoreLink: "https://ethresear.ch/t/native-rollups-superpowers-from-l1-execution/21517",
  learnMoreText: "detailed technical proposal",
  imageCreditLink: "https://ethresear.ch/t/native-rollups-superpowers-from-l1-execution/21517",
  imageCreditText: "Ethereum Research",
  educationDiagramName: "education-diagram.svg",
  githubRepoUrl: "https://github.com/dionysuzx/polis-experiments",
  contributors: [
    { displayName: "chaskin.eth", handle: "chaskin.eth" },
    { displayName: "dionysuz.eth", handle: "dionysuz.eth" },
    { displayName: "joshdavis.eth", handle: "joshdavis.eth" },
    { displayName: "raymondz.eth", handle: "rz" }
  ]
});