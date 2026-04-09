<script lang="ts">
  import { onMount } from 'svelte';
  import { base } from '$app/paths';
  import { config } from '../config';

  let expandedSection: string | null = null;

  const toggleSection = (section: string): void => {
    expandedSection = expandedSection === section ? null : section;
  };

  onMount(() => {
    // Ensure Polis script loads properly
    const existingScript = document.querySelector('script[src="https://pol.is/embed.js"]');
    if (!existingScript) {
      const script = document.createElement('script');
      script.src = 'https://pol.is/embed.js';
      script.async = true;
      document.body.appendChild(script);
    }
  });
</script>

<main>
  <div class="glitch-container">
    <div class="glitch-bg"></div>
  </div>

  <div class="hero">
    <div class="container">
      <div class="hero-content">
        <div class="neon-badge">An Ethereum Social Experiment</div>
        <h1>Let's talk about <span class="glitch-text" data-text={config.topic}>{config.topic}</span></h1>
        <div class="description">
          <p>
            {config.description}
          </p>
          <p>
            This Polis conversation seeks to find common ground.
          </p>
        </div>
      </div>
    </div>
  </div>

  <div class="container">
    <div class="accordion-section">
      <button class="accordion-button {expandedSection === 'what' ? 'active' : ''}" on:click={() => toggleSection('what')}>
        <span class="accordion-icon">❓</span>
        What is {config.topic}?
        <span class="toggle-icon">{expandedSection === 'what' ? '−' : '+'}</span>
      </button>
      <div class="accordion-content" style="max-height: {expandedSection === 'what' ? '500px' : '0'}">
        <p>{config.whatIs}</p>
        <div class="education-diagram">
          <img src="{base}/{config.educationDiagramName}" alt="{config.topic} Structure Diagram" />
          <div class="image-credit">Image source: <a href="{config.imageCreditLink}" target="_blank">{config.imageCreditText}</a></div>
        </div>
        <p class="learn-more">Want to learn more? Check out this <a href="{config.learnMoreLink}" target="_blank">{config.learnMoreText}</a>.</p>
      </div>

      <button class="accordion-button {expandedSection === 'why' ? 'active' : ''}" on:click={() => toggleSection('why')}>
        <span class="accordion-icon">🔍</span>
        Why This Conversation?
        <span class="toggle-icon">{expandedSection === 'why' ? '−' : '+'}</span>
      </button>
      <div class="accordion-content" style="max-height: {expandedSection === 'why' ? '500px' : '0'}">
        <p>{config.why}</p>
        <p>This is a v1 experiment created by Ethereum community members. We'll use the results of this experiment to learn how we can promote more productive conversations on Ethereum.</p>
      </div>

      <button class="accordion-button {expandedSection === 'polis' ? 'active' : ''}" on:click={() => toggleSection('polis')}>
        <span class="accordion-icon">🗣️</span>
        How Does Polis Work?
        <span class="toggle-icon">{expandedSection === 'polis' ? '−' : '+'}</span>
      </button>
      <div class="accordion-content" style="max-height: {expandedSection === 'polis' ? '300px' : '0'}">
        <p>Polis uses AI to identify patterns of agreement across different viewpoints. Your votes and statements help shape the conversation.</p>
        <p class="learn-more">Want to learn more? Check out the <a href="https://compdemocracy.org/Polis/" target="_blank">official Polis documentation</a>.</p>
      </div>
    </div>

    <div class="polis-container">
      <div class="terminal-header">
        <div class="terminal-buttons">
          <span></span>
          <span></span>
          <span></span>
        </div>
        <div class="terminal-title">evm_discuss.sh --topic={config.topic}</div>
      </div>
      <div class="polis-cta">
        <div class="polis-cta-content">
          <span class="polis-cta-icon">💭</span>
          <div class="polis-cta-text">
            <h3>Join the Conversation</h3>
            <p>Vote on statements (agree/disagree/pass) and add your own thoughts to help shape the future of {config.topic}. Should L2s inherit L1 security through native execution?</p>
          </div>
        </div>
      </div>
      <div class='polis' data-conversation_id={config.polisConversationId} data-ucsf="false"></div>
    </div>

    <div class="results-section">
      <button class="results-button {expandedSection === 'results' ? 'active' : ''}" on:click={() => toggleSection('results')}>
        <span class="results-icon">📊</span>
        View Conversation Results
        <span class="toggle-icon">{expandedSection === 'results' ? '−' : '+'}</span>
      </button>
      <div class="results-content" style="max-height: {expandedSection === 'results' ? '300px' : '0'}">
        <p>Coming soon! We'll share the Polis report here shortly after the conversation gets going.</p>
      </div>
    </div>
  </div>

  <footer>
    <div class="container">
      <div class="footer-message-container">
        <p class="footer-message">This is a v1 experiment created by Ethereum community members. We'd love to hear your thoughts and work together to build more productive conversations on Ethereum. Let's chat!</p>
        <p class="pointer">↓</p>
      </div>
      <div class="social-links">
        {#each config.contributors as contributor, i}
          <a href="https://warpcast.com/{contributor.handle}" target="_blank">@{contributor.displayName}</a>{#if i < config.contributors.length - 1}<span class="bullet">•</span>{/if}
        {/each}
      </div>
      <div class="code-line">
        <div class="horizontal-line"></div>
      </div>
      <div class="github-link">
        <a href="{config.githubRepoUrl}" target="_blank">Edit this site on GitHub</a>
      </div>
    </div>
  </footer>
</main>

<style>
  :global(body) {
    margin: 0;
    padding: 0;
    font-family: 'JetBrains Mono', monospace, 'Segoe UI', Roboto, Oxygen, Ubuntu, Cantarell;
    background-color: #0a0d14;
    color: #ecf0ff;
    line-height: 1.6;
    overflow-x: hidden;
    width: 100%;
  }

  :global(html) {
    overflow-x: hidden;
    width: 100%;
  }

  main {
    display: flex;
    flex-direction: column;
    min-height: 100vh;
    position: relative;
    width: 100%;
    box-sizing: border-box;
    overflow-x: hidden;
  }

  .container {
    width: 100%;
    max-width: 1200px;
    margin: 0 auto;
    padding: 0 20px;
    box-sizing: border-box;
  }

  /* Animated Background */
  .glitch-container {
    position: fixed;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    z-index: -1;
    overflow: hidden;
  }

  .glitch-bg {
    position: absolute;
    top: -50%;
    left: -50%;
    right: -50%;
    bottom: -50%;
    width: 200%;
    height: 200%;
    background: transparent url('data:image/svg+xml,%3Csvg viewBox="0 0 512 512" xmlns="http://www.w3.org/2000/svg"%3E%3Cfilter id="noiseFilter"%3E%3CfeTurbulence type="fractalNoise" baseFrequency="0.65" numOctaves="3" stitchTiles="stitch"/%3E%3C/filter%3E%3Crect width="100%25" height="100%25" filter="url(%23noiseFilter)" opacity="0.15"/%3E%3C/svg%3E');
    z-index: -1;
    opacity: 0.2;
    animation: glitch-background 30s linear infinite;
  }

  @keyframes glitch-background {
    0% {
      transform: translate(0, 0);
    }
    50% {
      transform: translate(-5%, 5%);
    }
    100% {
      transform: translate(0, 0);
    }
  }

  /* Hero Section */
  .hero {
    position: relative;
    background: linear-gradient(135deg, rgba(41, 20, 76, 0.8), rgba(13, 32, 64, 0.8));
    padding: 80px 0 60px;
    margin-bottom: 40px;
    border-bottom: 1px solid rgba(62, 221, 189, 0.3);
    box-shadow: 0 0 30px rgba(62, 221, 189, 0.2);
  }

  .hero::before {
    content: '';
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    background-image:
      radial-gradient(rgba(62, 221, 189, 0.1) 1px, transparent 1px),
      radial-gradient(rgba(62, 221, 189, 0.1) 1px, transparent 1px);
    background-size: 30px 30px;
    background-position: 0 0, 15px 15px;
    z-index: -1;
  }

  .hero-content {
    max-width: 800px;
  }

  .neon-badge {
    display: inline-block;
    background: rgba(62, 221, 189, 0.1);
    color: #3eddbd;
    font-size: 0.8rem;
    font-weight: 500;
    letter-spacing: 0.1em;
    text-transform: uppercase;
    padding: 8px 16px;
    border-radius: 4px;
    margin-bottom: 1.5rem;
    border: 1px solid rgba(62, 221, 189, 0.3);
    box-shadow: 0 0 10px rgba(62, 221, 189, 0.2);
  }

  h1 {
    font-size: 3.5rem;
    margin-bottom: 1.5rem;
    font-weight: 800;
    line-height: 1.1;
    position: relative;
    text-shadow: 0 0 10px rgba(62, 221, 189, 0.3);
  }

  .glitch-text {
    position: relative;
    display: inline-block;
    color: #3eddbd;
  }

  .glitch-text::before,
  .glitch-text::after {
    content: attr(data-text);
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
  }

  .glitch-text::before {
    color: #ff00e1;
    z-index: -1;
    animation: glitch-animation 3s infinite alternate-reverse;
  }

  .glitch-text::after {
    color: #3eddbd;
    z-index: -2;
    animation: glitch-animation2 2s infinite alternate-reverse;
  }

  @keyframes glitch-animation {
    0%, 100% { transform: translate(0, 0); opacity: 0.8; }
    20% { transform: translate(-2px, 2px); opacity: 0; }
    40% { transform: translate(-2px, -2px); opacity: 0.8; }
    60% { transform: translate(2px, 2px); opacity: 0; }
    80% { transform: translate(2px, -2px); opacity: 0.8; }
  }

  @keyframes glitch-animation2 {
    0%, 100% { transform: translate(0, 0); opacity: 0.8; }
    25% { transform: translate(2px, -2px); opacity: 0; }
    50% { transform: translate(-2px, 2px); opacity: 0.8; }
    75% { transform: translate(-2px, -2px); opacity: 0; }
  }

  .description {
    font-size: 1.1rem;
    margin-bottom: 2rem;
    color: rgba(236, 240, 255, 0.8);
    text-shadow: 0 0 10px rgba(0, 0, 0, 0.5);
    max-width: 700px;
  }

  /* Accordion Section */
  .accordion-section {
    margin-bottom: 40px;
  }

  .accordion-button {
    width: 100%;
    display: flex;
    align-items: center;
    background: rgba(25, 30, 45, 0.8);
    border: 1px solid rgba(62, 221, 189, 0.3);
    color: #ecf0ff;
    font-family: inherit;
    font-size: 1.1rem;
    text-align: left;
    padding: 15px 20px;
    margin-bottom: 10px;
    cursor: pointer;
    border-radius: 4px;
    transition: all 0.3s ease;
    position: relative;
    overflow: hidden;
    box-shadow: 0 0 10px rgba(0, 0, 0, 0.2);
  }

  .accordion-button::before {
    content: '';
    position: absolute;
    top: 0;
    left: 0;
    width: 4px;
    height: 100%;
    background: #3eddbd;
    transition: all 0.3s ease;
  }

  .accordion-button:hover {
    background: rgba(30, 35, 50, 0.9);
  }

  .accordion-button.active {
    background: rgba(35, 40, 55, 0.9);
    box-shadow: 0 0 15px rgba(62, 221, 189, 0.2);
  }

  .accordion-icon {
    margin-right: 15px;
    font-size: 1.2rem;
  }

  .toggle-icon {
    margin-left: auto;
    font-size: 1.5rem;
    line-height: 1;
  }

  .accordion-content {
    background: rgba(20, 25, 40, 0.7);
    border-radius: 4px;
    padding: 0 20px;
    margin-bottom: 15px;
    overflow: hidden;
    transition: max-height 0.5s ease;
    max-height: 0;
    border-left: 1px solid rgba(62, 221, 189, 0.3);
    border-right: 1px solid rgba(62, 221, 189, 0.3);
    border-bottom: 1px solid rgba(62, 221, 189, 0.3);
  }

  .education-diagram {
    margin: 1rem 0;
    text-align: center;
    max-width: 600px;
    margin-left: auto;
    margin-right: auto;
  }

  .education-diagram img {
    max-width: 100%;
    width: 90%;
    height: auto;
    border-radius: 4px;
    box-shadow: 0 0 15px rgba(62, 221, 189, 0.2);
  }

  .image-credit {
    font-size: 0.8rem;
    color: rgba(236, 240, 255, 0.6);
    margin-top: 0.5rem;
  }

  .image-credit a {
    color: #3eddbd;
    text-decoration: none;
  }

  .image-credit a:hover {
    text-decoration: underline;
  }

  .learn-more {
    margin-top: 1rem;
    font-size: 0.9rem;
  }

  .learn-more a {
    color: #3eddbd;
    text-decoration: none;
  }

  .learn-more a:hover {
    text-decoration: underline;
  }

  /* Polis Container */
  .polis-container {
    margin-bottom: 80px;
    background: rgba(15, 20, 35, 0.5);
    border-radius: 8px;
    overflow: hidden;
    border: 1px solid rgba(62, 221, 189, 0.3);
    box-shadow:
      0 0 20px rgba(0, 0, 0, 0.3),
      0 0 30px rgba(62, 221, 189, 0.2);
    display: flex;
    flex-direction: column;
  }

  .polis {
    display: block;
    line-height: 0;
    border-radius: 4px 4px 0 0;
    overflow: hidden;
  }

  .terminal-header {
    background: rgba(10, 15, 30, 0.8);
    padding: 12px 15px;
    display: flex;
    align-items: center;
    border-bottom: 1px solid rgba(62, 221, 189, 0.3);
  }

  .terminal-buttons {
    display: flex;
    gap: 8px;
    margin-right: 15px;
  }

  .terminal-buttons span {
    width: 12px;
    height: 12px;
    border-radius: 50%;
  }

  .terminal-buttons span:nth-child(1) {
    background: #ff5f57;
  }

  .terminal-buttons span:nth-child(2) {
    background: #febc2e;
  }

  .terminal-buttons span:nth-child(3) {
    background: #28c840;
  }

  .terminal-title {
    font-family: 'JetBrains Mono', monospace;
    font-size: 0.9rem;
    color: rgba(236, 240, 255, 0.7);
  }

  .polis-cta {
    background: linear-gradient(135deg, rgba(62, 221, 189, 0.1), rgba(62, 221, 189, 0.05));
    border-bottom: 1px solid rgba(62, 221, 189, 0.3);
    padding: 20px 25px;
  }

  .polis-cta-content {
    display: flex;
    align-items: center;
    gap: 20px;
  }

  .polis-cta-icon {
    font-size: 2rem;
  }

  .polis-cta-text {
    flex: 1;
  }

  .polis-cta-text h3 {
    margin: 0;
    color: #3eddbd;
    font-size: 1.2rem;
    font-weight: 600;
  }

  .polis-cta-text p {
    margin: 5px 0 0;
    color: rgba(236, 240, 255, 0.8);
    font-size: 0.95rem;
  }

  /* Results Section */
  .results-section {
    margin: 40px 0;
  }

  .results-button {
    width: 100%;
    display: flex;
    align-items: center;
    background: linear-gradient(135deg, rgba(62, 221, 189, 0.1), rgba(62, 221, 189, 0.05));
    border: 2px solid rgba(62, 221, 189, 0.3);
    color: #3eddbd;
    font-family: inherit;
    font-size: 1.2rem;
    text-align: left;
    padding: 20px 25px;
    cursor: pointer;
    border-radius: 8px;
    transition: all 0.3s ease;
    position: relative;
    overflow: hidden;
    box-shadow: 0 0 20px rgba(62, 221, 189, 0.1);
  }

  .results-button:hover {
    background: linear-gradient(135deg, rgba(62, 221, 189, 0.15), rgba(62, 221, 189, 0.1));
    box-shadow: 0 0 30px rgba(62, 221, 189, 0.2);
  }

  .results-button.active {
    background: linear-gradient(135deg, rgba(62, 221, 189, 0.2), rgba(62, 221, 189, 0.1));
    box-shadow: 0 0 40px rgba(62, 221, 189, 0.3);
  }

  .results-icon {
    margin-right: 15px;
    font-size: 1.4rem;
  }

  .results-content {
    background: rgba(20, 25, 40, 0.7);
    border-radius: 8px;
    padding: 0 25px;
    margin-top: 15px;
    overflow: hidden;
    transition: max-height 0.5s ease;
    max-height: 0;
    border: 1px solid rgba(62, 221, 189, 0.3);
  }

  .results-content p {
    padding: 20px 0;
    margin: 0;
    color: rgba(236, 240, 255, 0.8);
    font-size: 1.1rem;
  }

  /* Footer */
  footer {
    background: linear-gradient(135deg, rgba(13, 32, 64, 0.9), rgba(41, 20, 76, 0.9));
    padding: 45px 0 20px;
    margin-top: auto;
    border-top: 1px solid rgba(62, 221, 189, 0.3);
  }

  .footer-message-container {
    text-align: center;
    padding-bottom: 10px;
  }

  .footer-message {
    color: rgba(236, 240, 255, 0.8);
    font-size: 0.95rem;
    margin-bottom: 0.25rem;
  }

  .pointer {
    color: #3eddbd;
    font-size: 1.2rem;
    margin: 0;
    animation: float 2s ease-in-out infinite;
    opacity: 0.8;
  }

  @keyframes float {
    0%, 100% {
      transform: translateY(0);
    }
    50% {
      transform: translateY(5px);
    }
  }

  .social-links {
    text-align: center;
    font-family: 'JetBrains Mono', monospace;
    font-size: 0.9rem;
    color: rgba(236, 240, 255, 0.6);
    margin-top: 10px;
    margin-bottom: 40px;
    display: flex;
    flex-wrap: wrap;
    justify-content: center;
    gap: 16px;
  }

  .social-links a {
    color: rgba(236, 240, 255, 0.7);
    text-decoration: none;
    transition: all 0.2s ease;
  }

  .social-links a:hover {
    color: #3eddbd;
    text-shadow: 0 0 8px rgba(62, 221, 189, 0.4);
  }

  .bullet {
    margin: 0 6px;
    color: rgba(236, 240, 255, 0.6);
    display: none;
  }

  @media (min-width: 768px) {
    .bullet {
      display: inline;
    }
    
    .social-links {
      gap: 4px;
    }
  }

  .code-line {
    text-align: center;
    font-family: 'JetBrains Mono', monospace;
    font-size: 0.9rem;
    color: rgba(236, 240, 255, 0.6);
    margin: 0 0 5px 0;
  }

  .horizontal-line {
    border-top: 1px solid rgba(62, 221, 189, 0.2);
    padding-top: 15px;
  }

  .github-link {
    text-align: center;
    margin-top: 5px;
  }

  .github-link a {
    color: rgba(236, 240, 255, 0.6);
    text-decoration: none;
    font-size: 0.9rem;
    transition: all 0.2s ease;
  }

  .github-link a:hover {
    color: #3eddbd;
    text-shadow: 0 0 8px rgba(62, 221, 189, 0.4);
  }

  @keyframes btn-anim1 {
    0% { left: -100%; }
    50%, 100% { left: 100%; }
  }

  @keyframes btn-anim2 {
    0% { top: -100%; }
    50%, 100% { top: 100%; }
  }

  @keyframes btn-anim3 {
    0% { right: -100%; }
    50%, 100% { right: 100%; }
  }

  @keyframes btn-anim4 {
    0% { bottom: -100%; }
    50%, 100% { bottom: 100%; }
  }

  /* Responsive Adjustments */
  @media (max-width: 768px) {
    h1 {
      font-size: 2.5rem;
    }

    .hero {
      padding: 60px 0 40px;
    }

    .description {
      font-size: 1rem;
    }

    .accordion-button {
      padding: 12px 15px;
      font-size: 1rem;
    }
    
    .social-links {
      padding: 0 15px;
    }
  }

  @media (max-width: 480px) {
    h1 {
      font-size: 2rem;
    }

    .neon-badge {
      font-size: 0.7rem;
      padding: 6px 12px;
    }

    .accordion-icon {
      font-size: 1rem;
      margin-right: 10px;
    }
  }
</style>
