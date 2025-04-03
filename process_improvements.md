# Process Improvement Proposal

## Workflow Observation
Currently, associates receive periodic updates from founders with business metrics embedded in varying formats. Associates manually read, parse, and input these into the system. This introduces friction and increases the chance of errors or incomplete data capture.

---

## Suggested Improvements (Implemented)

### Notes Field
Associates often need to include context (e.g., "MRR estimated from narrative", "Missing Q2 burn"). Adding an optional notes field allows them to capture relevant commentary directly with each metric entry.

### Draft Toggle
Not all updates arrive fully complete. By introducing a "Draft" toggle, associates can now mark entries as incomplete and return to finalize them later without disrupting their workflow.

### Status Field (New)
In addition to Notes and Draft status, I introduced a lightweight *Status* dropdown to formalize common patterns associates encounter when entering data:
- ✅ Complete
- ⚠️ Estimated
- ⏳ Incomplete
- 📌 Needs Follow-Up
- 🟣 Flagged

This allows associates to quickly tag the nature of an entry, making it easier to filter, audit, and summarize later without relying on unstructured notes.

---

## Further Suggested Improvements (Not Yet Implemented)
- **Paste to Extract:** The future tool can allow associates to paste raw text from founder emails and highlight detected metrics for quick verification.
- **Metrics History Notes:** Maintain small annotations on entries for future context (potentially automate if time allowed).
- **Dashboard View:** Surface companies missing metrics or with too many drafts.
- **Needs Follow-Up Notifications:** Associates could receive reminders if an entry marked as "Needs Follow-Up" remains unresolved for a defined period of time.

---

## Impact
- Reduced friction for associates capturing incomplete or uncertain data.
- More consistent documentation of assumptions or estimations.
- Lays the foundation for future workflow automation.

---

## Personal Note
The pattern of metric visualization and input closely reflects tooling I’ve contributed to in my professional experience, which made it natural to approach this project with Ant Design components and Ant Design Plots for visualization. Familiarity with these tools, frameworks and patterns allowed me to focus more on the user flow and thoughtful UX details rather than solving the mechanics of charting or layout.