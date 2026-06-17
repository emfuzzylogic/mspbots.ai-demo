# Frontend Architecture Notes

## Package Structure

- `index.html`: compiled single-page app with all seven required modules.
- `full-prd.html`: standalone full original PRD HTML generated from the PRD DOCX for complete PRD review.
- `styles.css`: enterprise B2B SaaS visual system using deep blue, teal, slate, and white surfaces.
- `app.js`: local access gate, accordion behavior, metric tabs, role selector, architectural map interactions, and protection handlers.

## Content Architecture

The site follows the required module order:

1. Landing, access gate, disclaimer, CTA, and executive summary.
1a. Required deliverables launchpad for PRD, Prototype, GTM Plan, Revenue Projection, Decision Log, and Full PRD.
2. Integrated PRD with problem framing, customer segments, personas, scenarios, requirements, and user flow.
3. Prototype embed and interactive architectural workspace.
4. Platform success metrics with formulas and action matrix.
5. GTM execution engine.
6. Financial revenue projections.
7. Product decision log and AI usage notes.

## Sandbox Limitations

- A static frontend cannot provide true security against browser developer tools. It can deter casual copying through local gates, disabled selection, disabled protected right-click, watermarking, and source-file exclusion.
- The access form stores data only in `sessionStorage`; it does not authenticate reviewers or transmit registration data.
- The iframe depends on the Lovable prototype permitting embedding. If blocked by frame headers, the adjacent "Open in new tab" link remains the reliable path.
- Math is rendered with browser-supported HTML text rather than an external MathJax dependency, keeping the package self-contained.

## Production Enhancements

- Add authenticated review access with expiring signed links.
- Add server-side access logs and consent capture.
- Add watermark personalization using reviewer name/email.
- Add Content Security Policy and frame-ancestor rules based on the final hosting domain.
- Add analytics events for module completion, prototype launch, and CTA engagement.
