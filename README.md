# Polis Experiments

Ethereum social experiments using [Polis](https://compdemocracy.org/Polis/) to find common ground on contentious topics.

## Experiments

| Experiment | Status | Polis Link |
|---|---|---|
| [Native Rollups](experiments/native-rollups/) | Active | [Join](https://dionysuzx.github.io/polis-experiments/native-rollups/) |
| [EOF](experiments/eof/) | Archive | [View](https://dionysuzx.github.io/polis-experiments/eof/) |

## Adding a New Experiment

1. Copy an existing experiment folder
2. Update `src/config.ts` with your topic, description, and Polis conversation ID
3. Replace static assets (diagram, og-image, favicon)
4. Add a build step in `.github/workflows/deploy.yml`

## Development

```bash
cd experiments/native-rollups  # or experiments/eof
bun install
bun dev
```

## Deployment

Deployed automatically to GitHub Pages on push to `main`.

## License

MIT License
