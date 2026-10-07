# Bhuvan Chandra — AI and data engineering portfolio

React + TypeScript profile page with existing experience and selected work, plus ten clearly labeled planned AI/FDE builds. New plans are not represented as shipped projects.

- [Research and project ranking](docs/RESEARCH-AND-ROADMAP.md)
- [Low-cost Python, AI and multi-cloud learning plan](docs/LOW-COST-LEARNING-PLAN.md)
- Individual specifications in `docs/projects/` include data, architecture, evaluation, deployment, teaching steps and draft resume/LinkedIn copy.

## Development

Node 24+ recommended. Run `npm ci`, then `npm run dev`. Verify with `npm run lint` and `npm run build`.

## Deployment

GitHub Actions builds with `GITHUB_PAGES=true` and publishes `dist` to GitHub Pages on pushes to master. Public URL: https://bchamp21.github.io/bhuvan-portfolio/. The Vite base is /bhuvan-portfolio/ for Pages; ordinary builds retain / for custom-domain hosts. No backend or model credentials belong in this static site.

The cloud/API plans are specifications only; no paid cloud resources are provisioned. External demo and historical experience claims inherited from the original portfolio have not been independently validated in this update.
