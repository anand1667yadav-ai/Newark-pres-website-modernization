<!--
Sync Impact Report
- Version change: template (unratified) -> 1.0.0
- Modified principles:
  - Template placeholders -> I. Smallest Safe Change
  - Template placeholders -> II. WordPress-Native First
  - Template placeholders -> III. Preserve Existing Behavior
  - Template placeholders -> IV. Localized, Convention-Following Code
  - Template placeholders -> V. Accessible and Responsive by Default
  - Template placeholders -> VI. Production Safety
  - Template placeholders -> VII. Proportionate Verification
  - Template placeholders -> VIII. Stop at the Approved Requirement
- Added sections:
  - Engineering Constraints
  - Delivery Workflow and Quality Gates
- Removed sections: none
- Follow-up TODOs: none
-->
# Newark Presbyterian Website Modernization Constitution

## Core Principles

### I. Smallest Safe Change

Every change MUST use the simplest implementation that satisfies the approved requirement. A
small, targeted change is preferred to a larger or theoretically cleaner solution. New frameworks,
libraries, plugins, build processes, abstractions, architectures, and dependencies MUST NOT be
introduced unless the requirement cannot reasonably be delivered with the existing system. Each
new function, component, template, rule, script, dependency, configuration item, or file MUST have
a current and explicit requirement. Configuration MUST be preferred over custom code when it can
reliably deliver the same outcome.

This principle minimizes production risk, review burden, rollback cost, and long-term maintenance.

### II. WordPress-Native First

Solutions MUST be considered in this order:

1. Existing site configuration
2. Existing theme functionality
3. Existing editor or page-builder functionality
4. Existing approved plugins
5. Small child-theme or theme customization
6. Custom PHP, CSS, or JavaScript only when required

Functionality already provided reliably by WordPress, the active theme, or an approved plugin MUST
NOT be recreated. WordPress core MUST NOT be modified. Custom PHP MUST use WordPress APIs and hooks,
sanitize and validate inputs, escape outputs for their context, avoid direct database access where a
WordPress API exists, and contain no credentials or secrets. Simple procedural WordPress code is
preferred to service layers, repositories, dependency injection, factories, or custom frameworks
for ordinary theme behavior.

### III. Preserve Existing Behavior

Existing behavior MUST be treated as intentional unless an approved specification explicitly
changes it. Implementations MUST preserve URLs and permalinks, content, forms, integrations, SEO
metadata, analytics, events, giving, sermons and video, authentication, and existing data structures.
Database structures and content models MUST NOT change without an explicit requirement and migration
and rollback plan.

In particular, Vanco giving, Google Calendar, YouTube, Mailchimp, media documents, sermon data, and
other operational integrations identified during assessment MUST remain functional when affected by
a release. Legacy pages outside an approved redesign scope MUST remain usable and MUST NOT be
silently restyled or restructured by global changes.

### IV. Localized, Convention-Following Code

Before implementation, contributors MUST inspect the surrounding theme, plugin, template, PHP, CSS,
JavaScript, hook, naming, and directory conventions. New work MUST follow those conventions unless
the existing approach is unsafe or prevents delivery. Changes MUST touch the smallest reasonable
number of files and MUST be scoped to the approved feature.

Contributors MUST NOT refactor, rename, reorganize, rewrite, or clean up unrelated code. They MUST
NOT add speculative reusable components, generic utility libraries, duplicate styles or scripts,
placeholder architecture, unused code, commented-out code, unnecessary configuration, or excessive
comments. Files and functions MUST remain focused, readable, and understandable to a competent
WordPress developer. Comments MUST explain non-obvious reasons, not narrate obvious code.

### V. Accessible and Responsive by Default

Every new or redesigned interface MUST work on supported desktop, tablet, and mobile layouts. It MUST
use semantic HTML, a logical heading hierarchy, keyboard-operable controls, understandable link and
button labels, associated form labels, appropriate image alternatives, and communication that does
not depend on color alone. New work MUST NOT introduce obvious contrast failures.

CSS MUST be scoped, reuse existing styles or design tokens where practical, avoid duplicate
declarations and unnecessary `!important`, keep specificity low, and avoid unintended effects on
legacy pages. A CSS framework MUST NOT be added solely for the redesign. These requirements apply to
changed surfaces; site-wide remediation requires its own specification.

### VI. Production Safety

Production MUST NOT be used for experimentation or development. Work MUST follow the safest available
staging, review, deployment, backup, and rollback path. No contributor may change WordPress core,
hosting configuration, DNS, SSL, email configuration, unrelated plugins, or production dependencies
without explicit approval. Dependency updates MUST NOT be bundled into feature work unless they are
specifically approved and tested.

Secrets MUST never be committed, logged, exposed to the browser, or placed in source code. Each
production-bound change MUST have a clear blast radius and a practical rollback method. When several
solutions meet the requirement, the decision order is: least production risk, least code, fewest
dependencies, smallest blast radius, easiest rollback, easiest maintenance, then fastest delivery.

### VII. Proportionate Verification

Every implementation MUST verify the acceptance criteria, the affected behavior, and obvious
regression areas. At minimum, verification MUST confirm that requested behavior works, desktop and
mobile layouts remain usable, relevant navigation works, affected integrations still function, and
no obvious PHP or JavaScript errors were introduced.

Testing MUST be proportionate to risk and blast radius. A change affecting giving, forms, calendar,
sermons, navigation, authentication, URLs, shared templates, or global assets requires focused
integration or journey testing. Testing MUST NOT expand into unrelated areas without a reasonable
regression path. Verification evidence MUST be recorded in the implementing task or pull request.

### VIII. Stop at the Approved Requirement

Only work defined by the current approved specification and acceptance criteria may be implemented.
Contributors MUST NOT anticipate future requirements, create extensibility for hypothetical uses,
perform premature optimization, or continue polishing, refactoring, restructuring, documenting, or
extending after the requirement passes verification. YAGNI is the default.

The project objective is not architectural sophistication. The objective is the smallest safe change
that delivers the approved user experience without making the existing WordPress system harder to
maintain.

## Engineering Constraints

- **PHP:** Custom PHP MUST remain straightforward, use WordPress APIs, and avoid unnecessary
  object-oriented layers. Inputs MUST be validated and sanitized; outputs MUST be escaped by context.
- **CSS:** Existing theme styles and tokens MUST be evaluated first. New selectors MUST be
  feature-scoped, responsive, and no more specific than necessary. Global overrides require explicit
  scope and regression testing.
- **JavaScript:** HTML, CSS, WordPress, or existing builder behavior MUST be preferred. Necessary
  JavaScript MUST be small, feature-specific, free of new globals, and use existing approved site
  libraries where appropriate. A JavaScript framework MUST NOT be added for minor interactions.
- **Performance:** New work MUST avoid unnecessary fonts, large libraries, excessive or unoptimized
  images, duplicate assets, autoplay media, additional external requests, and plugins added solely
  for minor presentation behavior.
- **Data and integrations:** Existing schemas, identifiers, URLs, and third-party connections MUST
  remain stable unless a specification explicitly authorizes a migration.
- **Scope:** Legacy pages and unrelated technical debt remain untouched unless included in the
  approved specification.

## Delivery Workflow and Quality Gates

1. **Specify:** Each backlog item MUST have an approved specification with user value, explicit scope,
   acceptance criteria, affected integrations, and declared out-of-scope behavior.
2. **Inspect:** Before planning or coding, inspect the relevant WordPress configuration, theme,
   plugins, templates, content model, existing conventions, and current behavior. Unknown production
   dependencies MUST be surfaced rather than guessed.
3. **Choose:** Record the least-complex viable approach. Any new dependency, plugin, framework,
   schema change, global override, or broader refactor MUST include a written justification showing
   why the preceding WordPress-native options cannot meet the requirement.
4. **Plan safety:** Identify affected files and integrations, staging method, backup, rollback, and
   verification steps before production-bound implementation begins.
5. **Implement locally:** Change only what the approved item requires. Unrelated cleanup MUST be
   deferred to a separate specification.
6. **Verify:** Test the acceptance criteria at representative desktop and mobile sizes and exercise
   affected navigation and integrations. Check for obvious browser-console, JavaScript, and PHP
   errors where the environment permits.
7. **Review:** Pull-request review MUST confirm constitution compliance, scope containment,
   accessibility and responsive behavior, production safety, and verification evidence. Deviations
   MUST be called out and approved before merge.
8. **Release and stop:** Deploy through the approved safe workflow, confirm the changed journey, and
   stop once the acceptance criteria are met.

## Governance

This constitution governs all specifications, plans, tasks, implementation, reviews, and releases in
this repository. When another project document conflicts with it, this constitution takes precedence
unless an approved amendment changes the rule.

Amendments require a documented proposal explaining the reason, affected principles, migration or
workflow impact, and approval by the project owner or designated maintainer. The constitution version
MUST follow semantic versioning:

- **MAJOR:** Removes or incompatibly redefines a governing principle.
- **MINOR:** Adds a principle or materially expands mandatory guidance.
- **PATCH:** Clarifies wording without changing obligations.

Every feature plan MUST include a constitution check before design and again before implementation.
Every pull request MUST either comply or document a narrowly scoped exception, its risk, approving
authority, and removal or review date. Repeated exceptions require a constitution amendment rather
than an informal convention. Constitution compliance MUST be reviewed whenever the delivery workflow,
WordPress architecture, deployment method, or production risk profile materially changes.

**Version**: 1.0.0 | **Ratified**: 2026-09-02 | **Last Amended**: 2026-09-02
