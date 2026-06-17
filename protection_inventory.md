# Protection and Attribution Inventory

| Mechanism | Status | Implementation |
| --- | --- | --- |
| Access registration gate | Active | Local-only name/email form gates the content hub through browser state. |
| Legal disclaimer | Active | Visible in the entry gate before content access. |
| Sticky footer attribution | Active | Global fixed footer: "Prepared by Emily Fan | MSPBots PM Case Study | Not for redistribution". |
| Watermark canvas | Active | Low-opacity diagonal text layer: "Emily Fan - PM Case Study". |
| Right-click suppression | Active | `contextmenu` handler suppresses right-click on protected content and revenue matrices. |
| Text-selection suppression | Active | `.protected { user-select: none; }` across core PRD, metrics, GTM, revenue, and decision sections. |
| Raw source file exposure | Blocked from bundle | No source PDFs, DOCX, Markdown, extracted text, or local source paths are copied into the public package. |
| Prototype attribution | Active | Prominent CTA and iframe link to the specified Lovable prototype. |

