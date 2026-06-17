# MSPBots AI Conversational Ticket Intake Microsite

Deployable single-page case-study microsite for Emily Fan's MSPBots PM evaluation package.

## Local Execution

Open `index.html` directly in a browser, or serve the folder with any static server:

```bash
python -m http.server 8080
```

Then visit:

```text
http://localhost:8080
```

## Deployment

Upload the contents of this folder to any static host such as Netlify, Vercel static output, GitHub Pages, or an internal review server.

Required files:

- `index.html`
- `full-prd.html`
- `styles.css`
- `app.js`
- `README.md`
- `protection_inventory.md`
- `architecture_notes.md`

## Required Deliverable Navigation

The microsite includes a prominent "Required Deliverables" launchpad immediately after the executive summary:

- PRD
- Prototype
- GTM Plan
- Revenue Projection
- Decision Log
- Full PRD File

The standalone complete PRD is available at:

```text
full-prd.html
```

## Source Handling

The public bundle does not include raw PDFs, DOCX files, extracted text files, Markdown logs, source paths, or downloadable research assets. Content is compiled into the page as curated product modules.

## Prototype Link

The microsite points to:

```text
https://mspbots-demo-emilyfan.lovable.app/
```
