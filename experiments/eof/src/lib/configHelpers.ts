import type { ConversationConfig } from '../config';

/**
 * Helper function to generate site name from topic
 */
export function generateSiteName(topic: string): string {
  return `${topic} Polis`;
}

/**
 * Helper function to generate page title from topic
 */
export function generatePageTitle(topic: string): string {
  return `Let's talk about ${topic}`;
}

/**
 * Helper function to generate OG title from topic
 */
export function generateOgTitle(topic: string): string {
  return `${topic} Polis — An Ethereum Social Experiment`;
}

/**
 * Helper function to create a config for a new topic
 */
export function createConfig(options: {
  topic: string;
  description: string;
  whatIs: string;
  why: string;
  polisConversationId: string;
  siteUrl: string;
  ogImage?: string;
  twitterCardType?: string;
  learnMoreLink: string;
  learnMoreText: string;
  imageCreditLink: string;
  imageCreditText: string;
  educationDiagramName: string;
  githubRepoUrl: string;
  contributors: { displayName: string; handle: string }[];
}): ConversationConfig {
  const {
    topic,
    description,
    whatIs,
    why,
    polisConversationId,
    siteUrl,
    ogImage = "/og-image.png",
    twitterCardType = "summary_large_image",
    learnMoreLink,
    learnMoreText,
    imageCreditLink,
    imageCreditText,
    educationDiagramName,
    githubRepoUrl,
    contributors
  } = options;

  return {
    topic,
    description, 
    whatIs,
    why,
    polisConversationId,
    ogImage,
    siteUrl,
    siteName: generateSiteName(topic),
    twitterCardType,
    pageTitle: generatePageTitle(topic),
    ogTitle: generateOgTitle(topic),
    learnMoreLink,
    learnMoreText,
    imageCreditLink,
    imageCreditText,
    educationDiagramName,
    githubRepoUrl,
    contributors
  };
} 