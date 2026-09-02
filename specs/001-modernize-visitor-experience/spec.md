# Feature Specification: Modernize Visitor Experience

**Feature Branch**: `001-modernize-visitor-experience`

**Created**: 2026-09-02

**Status**: Draft

**Input**: Incrementally modernize the existing church website's design foundation, header,
navigation, homepage, footer, and Plan Your Visit experience while preserving WordPress content,
URLs, integrations, and legacy-page access.

## Feature Overview

The first modernization release creates a small, coherent visitor-facing experience across the
site's shared navigation, homepage, footer, and first-visit information. It makes the most important
church information understandable and reachable on desktop, tablet, and mobile while allowing
legacy pages to coexist with redesigned areas.

The release does not rebuild the website or replace its content-management model or working
services. It changes only the surfaces needed to make the first visit useful and trustworthy.

## Business Objective

Help prospective visitors quickly decide whether and how to attend, while keeping the destinations
and services used by members available and keeping routine content manageable by church staff. The
release must reduce confusion caused by the current mobile navigation, dense homepage, and
inconsistent visitor information without increasing operational burden.

## Personas and Needs

### New Visitors

People unfamiliar with the church need plain-language church identity, service time, address,
directions, visit expectations, family and accessibility information, events, ministries, contact
details, and access to services or sermons. The experience must not assume knowledge of church terms.

### Existing Church Members

Members need continued access to the calendar, announcements, ministries, giving, sermons or videos,
resources, service information, volunteer opportunities, and contact information throughout the
modernization.

### Church Staff

Staff need to update frequently changing page, event, visitor, ministry, service, and sermon/video
information through the existing content-management experience where practical and without editing
code.

### Website Administrators

Administrators need to retain existing navigation, user, site-configuration, integration,
troubleshooting, backup, and security capabilities without acquiring unnecessary new systems or
maintenance responsibilities.

## User Scenarios & Testing *(mandatory)*

### User Story 1 - Find When and Where to Attend (Priority: P1)

As a new visitor, I want to see when and where Sunday worship takes place so that I can decide
whether and how to attend.

**Persona impact**: New Visitors — PRIMARY; Existing Members — SECONDARY; Church Staff — OPERATIONAL;
Website Administrators — N/A.

**Why this priority**: Time and location are the minimum information required for an in-person visit.

**Independent Test**: A person unfamiliar with the church can start on the homepage and state the
current service time and address without using search or opening an unrelated page.

**Acceptance Scenarios**:

1. **Given** a visitor opens the homepage, **When** the initial page content is available, **Then**
   the confirmed Sunday service time and church location are clearly presented.
2. **Given** a visitor wants more arrival details, **When** the visitor follows the first-visit call
   to action, **Then** the visitor reaches the Plan Your Visit experience in one interaction.
3. **Given** church staff have not confirmed a visitor detail, **When** the page is published,
   **Then** the page omits that detail instead of presenting invented information.

---

### User Story 2 - Navigate on Any Supported Screen (Priority: P1)

As a new visitor or member, I want clear navigation that works on desktop, tablet, and mobile so that
I can reach the information I need without horizontal scrolling or hidden choices.

**Persona impact**: New Visitors — PRIMARY; Existing Members — PRIMARY; Church Staff — SECONDARY;
Website Administrators — OPERATIONAL.

**Why this priority**: Navigation is shared by every first-release journey, and the current mobile
experience prevents reliable use.

**Independent Test**: On representative desktop, tablet, and phone sizes, a user can open, operate,
and close the navigation using pointer and keyboard input and reach every retained primary
destination.

**Acceptance Scenarios**:

1. **Given** a supported screen size, **When** a user views and operates the primary navigation,
   **Then** all controls and labels remain visible, understandable, and usable without horizontal
   page scrolling.
2. **Given** a keyboard user, **When** focus moves through the header and navigation, **Then** focus
   follows a logical order, remains visible, and can operate every navigation control.
3. **Given** an existing member wants Events, Ministries, Giving, Sermons/Videos, Resources, or
   Contact, **When** the member uses the redesigned navigation, **Then** each existing destination
   remains reachable.

---

### User Story 3 - Plan a First Visit (Priority: P1)

As a new visitor, I want one plain-language visit guide so that I know what has been confirmed about
the service, location, arrival, children, accessibility, online attendance, and contacting the
church.

**Persona impact**: New Visitors — PRIMARY; Existing Members — SECONDARY; Church Staff — OPERATIONAL;
Website Administrators — N/A.

**Why this priority**: Reducing uncertainty is the principal visitor outcome of the first release.

**Independent Test**: A first-time visitor can reach the visit guide from the homepage or primary
navigation and distinguish confirmed information from details that are not offered.

**Acceptance Scenarios**:

1. **Given** a visitor opens Plan Your Visit, **When** confirmed content is available, **Then** the
   page presents service time, location, what to expect, contact information, and relevant family,
   accessibility, and online-attendance information in understandable sections.
2. **Given** directions are offered, **When** the visitor activates them, **Then** the visitor reaches
   a usable directions destination for the confirmed church address.
3. **Given** parking, childcare, or another church-specific detail remains unconfirmed, **When** the
   page is reviewed for release, **Then** no claim about that detail is published.

---

### User Story 4 - Understand and Engage with the Church (Priority: P1)

As a new visitor, I want a focused homepage that explains the church and provides clear next steps so
that I can explore a visit, ministries, events, contact options, or recent services without reading
an unstructured announcement archive.

**Persona impact**: New Visitors — PRIMARY; Existing Members — SECONDARY; Church Staff — OPERATIONAL;
Website Administrators — N/A.

**Why this priority**: The homepage must orient visitors while still providing direct paths to
confirmed, existing destinations.

**Independent Test**: A user can identify the church, find the primary visit action, and reach each
approved featured destination from the homepage.

**Acceptance Scenarios**:

1. **Given** a visitor opens the homepage, **When** the page is read in visual or document order,
   **Then** church identity, service information, location, and a Plan Your Visit action precede
   secondary promotional material.
2. **Given** staff have approved ministries, events, or sermon/service content for promotion,
   **When** that content appears on the homepage, **Then** each item has an accurate heading, concise
   context, and a clear path to its existing destination.
3. **Given** no current item is approved for an optional homepage section, **When** the homepage is
   published, **Then** the page remains coherent without placeholder, stale, or fabricated content.

---

### User Story 5 - Continue Essential Member Tasks (Priority: P1)

As an existing member, I want the redesign to retain the church destinations and external services I
already use so that I can continue participating without learning a replacement system.

**Persona impact**: New Visitors — SECONDARY; Existing Members — PRIMARY; Church Staff — OPERATIONAL;
Website Administrators — OPERATIONAL.

**Why this priority**: Modernization is unsuccessful if it interrupts giving, events, services, or
other existing participation paths.

**Independent Test**: From a redesigned surface, a member can reach the existing calendar, giving,
ministries, sermons/videos, resources, and contact destinations, and affected external handoffs open
the intended service.

**Acceptance Scenarios**:

1. **Given** a member starts on a redesigned page, **When** the member selects an essential existing
   destination, **Then** the current destination or approved equivalent remains reachable.
2. **Given** an affected journey hands off to an existing external service, **When** the member
   follows the link, **Then** it reaches the correct existing calendar, giving, video, mailing-list,
   or social destination.
3. **Given** a legacy page has not been redesigned, **When** a user follows its retained link,
   **Then** the legacy page remains accessible and functional.

---

### User Story 6 - Maintain Changing Information (Priority: P2)

As church staff, I want to update frequently changing first-release content through the existing
content-management experience where practical so that routine changes do not require a developer.

**Persona impact**: New Visitors — SECONDARY; Existing Members — SECONDARY; Church Staff — PRIMARY;
Website Administrators — OPERATIONAL.

**Why this priority**: Maintainability protects content accuracy, but it follows delivery of the
minimum visitor experience and must not create a new administration product.

**Independent Test**: An authorized staff member can update each designated changing content area
using the existing content-management access and the published page reflects the approved change
without source-code editing.

**Acceptance Scenarios**:

1. **Given** an authorized staff member needs to change service, visitor, ministry, event, or
   sermon/video information designated as staff-managed, **When** the member uses the existing
   editing workflow, **Then** the relevant published content can be updated without code changes.
2. **Given** a field or section is not intended for routine staff changes, **When** the release is
   documented, **Then** responsibility and the safe update path are clear.

---

### User Story 7 - Maintain the Modernized Site Safely (Priority: P3)

As a website administrator, I want the modernization to reuse existing administration and
integrations so that I can maintain and troubleshoot the site without unnecessary new operational
burden.

**Persona impact**: New Visitors — N/A; Existing Members — N/A; Church Staff — SECONDARY; Website
Administrators — PRIMARY.

**Why this priority**: Administrative efficiency matters over the life of the site, but the initial
release does not create new administrative features.

**Independent Test**: The administrator can perform existing navigation, user, configuration, and
integration-management tasks affected by the release without a replacement dashboard or duplicate
system.

**Acceptance Scenarios**:

1. **Given** the first release is active, **When** an administrator performs an affected existing
   maintenance task, **Then** the task remains available through the current administrative model.
2. **Given** the administrator troubleshoots an affected integration or destination, **When** the
   relevant existing configuration is inspected, **Then** the modernization has not introduced a
   duplicate source of truth.

### Primary User Journeys

- **New visitor:** Home → Plan Your Visit; Home → Service Times; Home → Location/Directions; Home →
  About; Home → Ministries; Home → Events; Home → Contact; Home → Sermons/Services.
- **Existing member:** Home → Events/Calendar; Home → Ministries; Home → Giving; Home →
  Sermons/Videos; Home → Church Resources; Home → Contact.
- **Church staff:** Existing administration → Update Page Content, Events, Visitor Information,
  Ministry Information, Service Information, or Sermon/Video information where currently supported.
- **Website administrator:** Existing administration → Manage Navigation, Users, Site Configuration,
  Existing Integrations, and Troubleshooting where currently supported.

### Edge Cases

- Optional homepage content is missing, expired, or not approved.
- Two existing pages contain conflicting service, office-hour, contact, or social information.
- A long navigation label or increased text size no longer fits the available width.
- The mobile menu is opened and the viewport orientation or size changes.
- A user navigates only by keyboard or uses a screen reader.
- An image is unavailable or has no appropriate alternative text.
- An external calendar, giving, video, mailing-list, directions, or social service is unavailable.
- A retained legacy destination has a different visual design from the redesigned surface.
- A requested visitor detail such as parking or childcare has not been confirmed.
- A current announcement or featured event expires without a replacement.

## Requirements *(mandatory)*

### Functional Requirements

- **FR-001**: The homepage MUST clearly present the confirmed church identity, Sunday service time,
  church location, and a Plan Your Visit action before secondary promotional content.
- **FR-002**: Users MUST be able to reach Plan Your Visit from both the homepage and primary
  navigation in one interaction.
- **FR-003**: Plan Your Visit MUST organize confirmed service, location, directions, expectations,
  contact, family, accessibility, and online-attendance information; unconfirmed details MUST be
  omitted or explicitly resolved before publication.
- **FR-004**: The shared header MUST provide understandable site identity and primary navigation on
  desktop, tablet, and mobile.
- **FR-005**: The shared navigation MUST retain reachable paths to every existing primary destination
  affected by the release, including Events/Calendar, Ministries, Giving, Sermons/Videos, Resources,
  About, and Contact where those destinations exist.
- **FR-006**: The navigation MUST be operable with pointer and keyboard input, expose current control
  state, preserve visible focus, and avoid trapping focus.
- **FR-007**: Redesigned pages MUST provide a consistent, finite presentation foundation for type,
  color, spacing, links, buttons, headings, and common content patterns needed by this release.
- **FR-008**: The homepage MUST provide clear paths to approved existing ministry, event, contact,
  giving, and sermon/service destinations without requiring every destination to appear as a
  homepage section.
- **FR-009**: Optional or changing homepage sections MUST remain coherent when no current approved
  content is available and MUST NOT display placeholders or known-expired content.
- **FR-010**: The shared footer MUST present confirmed church name, location, contact information,
  important destinations, and approved social or external links appropriate to the first release.
- **FR-011**: Existing URLs and permalinks MUST continue to resolve to their current content or an
  approved equivalent destination.
- **FR-012**: Legacy pages outside the release scope MUST remain accessible from retained destinations
  and may retain their existing visual presentation.
- **FR-013**: Existing giving, calendar/events, sermon/video, forms, mailing-list, analytics, social,
  and other affected external integrations MUST continue to use their approved existing destinations
  and behavior.
- **FR-014**: Affected existing forms MUST remain usable and MUST retain their established submission
  purpose and destination.
- **FR-015**: Routine changing content designated for staff maintenance MUST remain editable through
  the existing content-management model where practical and MUST NOT require source-code changes.
- **FR-016**: The release MUST NOT create new staff or administrator roles, dashboards, portals,
  authentication behavior, or duplicate integration-management workflows.
- **FR-017**: Each changed page MUST use a logical page title and heading order, descriptive links and
  buttons, appropriate image alternatives, and labels for form controls.
- **FR-018**: Conflicting church information affecting a redesigned surface MUST be resolved by an
  authorized church content owner before publication.
- **FR-019**: Every church-specific claim added to a redesigned surface MUST be traceable to current
  existing content or explicit stakeholder confirmation.
- **FR-020**: The first release MUST be independently releasable while the remainder of the website
  continues operating as legacy content.

### Non-Functional User Requirements

- **NFR-001 — Usability**: The primary visitor information and calls to action MUST use plain language
  and MUST NOT require familiarity with church terminology.
- **NFR-002 — Responsive experience**: Changed surfaces MUST remain readable and operable across
  representative phone, tablet, and desktop sizes without horizontal page scrolling.
- **NFR-003 — Accessibility**: Changed surfaces MUST support keyboard access, visible focus, semantic
  structure, text alternatives, labeled controls, and sufficient visual distinction for content and
  controls.
- **NFR-004 — Continuity**: Modernization MUST NOT interrupt existing member services or staff content
  maintenance affected by the release.
- **NFR-005 — Performance**: The changed visitor journey MUST not add delays or media behavior that
  prevents primary information or navigation from becoming usable promptly on a typical mobile
  connection.
- **NFR-006 — Maintainability**: Frequently changing content MUST have one clear, existing source of
  truth and MUST not require duplicate updates across redesigned components where practical.
- **NFR-007 — Recoverability**: The release MUST have a verified pre-release backup and documented
  rollback path before production publication.

### Key Entities

- **Church Profile**: Confirmed public identity, service time, location, contact details, and approved
  visitor-facing summary.
- **Visit Information**: Confirmed expectations, directions, family, accessibility, online-attendance,
  and contact information used to plan a first visit.
- **Navigation Destination**: An existing or approved destination with a user-facing label, audience,
  priority, and location in the shared navigation or footer.
- **Homepage Feature**: An optional approved ministry, event, announcement, or sermon/service item with
  current content, destination, and publication relevance.
- **External Integration**: An existing calendar, giving, video, mailing-list, directions, social, or
  analytics service whose destination and behavior must be preserved.
- **Legacy Page**: An existing page outside the first release that remains reachable and functional
  with its current presentation.

## Scope

### In Scope

- A release-sized visual foundation for typography, colors, links, buttons, spacing, headings, and
  common presentation patterns used by redesigned surfaces.
- Shared site identity, header, primary navigation, navigation hierarchy, and mobile navigation.
- A focused homepage containing confirmed identity and visitor essentials plus approved paths to
  relevant ministries, events, contact, giving, and sermons/services.
- A shared footer with confirmed church, contact, location, navigation, service, and approved social
  or external information.
- A Plan Your Visit experience using confirmed service, location, directions, expectations, family,
  accessibility, online-attendance, and contact content.
- Preservation and regression verification of affected existing destinations and integrations.
- Existing content-management access for routinely changing content affected by the release.

### Out of Scope

- A full-site redesign or rebuild of every existing page.
- Migration away from WordPress, headless operation, a new CMS, or cloud migration.
- Redesign of WordPress administration or new staff/member portals, authentication, roles, or
  dashboards.
- Replacement of working giving, event/calendar, sermon/video, form, mailing-list, social, analytics,
  or other integrations.
- URL or permalink restructuring, SEO migration, database restructuring, or broad content migration.
- Broad technical-debt remediation, unrelated plugin replacement or updates, and unrelated content
  cleanup.
- Site-wide accessibility remediation beyond changed surfaces and directly affected shared elements.
- Redesign of legacy internal pages unless separately approved.

## Existing Behavior to Preserve

- Existing URLs, permalinks, content, and navigation destinations remain available.
- Existing forms and their submission destinations continue functioning.
- Existing giving, event/calendar, sermon/video, mailing-list, social, analytics, and external
  integrations continue functioning when affected by the release.
- Existing content-management, user, and administration capabilities remain available.
- Existing data structures and content models remain unchanged unless separately specified.
- Legacy pages remain reachable while redesigned and legacy presentation coexist.

## Acceptance Criteria

- **AC-001**: A first-time visitor can identify the confirmed Sunday service time and church location
  from the homepage within 10 seconds in moderated testing.
- **AC-002**: A visitor can reach Plan Your Visit from the homepage or primary navigation in one
  interaction.
- **AC-003**: A visitor can find every confirmed first-visit detail published for the release without
  encountering conflicting information on redesigned surfaces.
- **AC-004**: Primary navigation is usable by pointer and keyboard on representative desktop, tablet,
  and mobile sizes without horizontal page scrolling.
- **AC-005**: Existing members can reach Events/Calendar, Ministries, Giving, Sermons/Videos,
  Resources, and Contact wherever those destinations currently exist.
- **AC-006**: Every affected existing external integration reaches the approved existing destination
  and completes the same user-facing handoff as before the release.
- **AC-007**: Staff can update each designated routinely changing content area through the existing
  content-management model where practical, without source-code editing.
- **AC-008**: All pre-release legacy-page and affected-URL checks resolve successfully or have an
  explicitly approved exception.
- **AC-009**: Changed pages pass release review for logical headings, keyboard operation, visible
  focus, descriptive controls, labeled forms, and appropriate image alternatives.
- **AC-010**: No unconfirmed parking, childcare, accessibility, schedule, ministry, event, or other
  church-specific statement is published.
- **AC-011**: A verified backup and documented rollback procedure exist before production release.

## Evidence Register

### Known Information

- The existing public site is a WordPress website and must remain the content-management system.
- The public site currently states Sunday in-person and online worship at 9:30 a.m.
- The public site currently lists 35450 Newark Blvd., Newark, California 94560 and
  (510) 371-8309.
- The site currently provides Sunday/visitor information, ministries, a calendar, contact
  information, giving, YouTube services, church documents, and social destinations.
- Existing integrations observed during assessment include Google Calendar, Vanco giving, YouTube,
  Mailchimp, social accounts, uploaded documents, and email links.
- The public site states that a hearing-loop system is available in the sanctuary and provides
  existing children/family information; wording and current accuracy require content-owner approval.
- Current pages show conflicting office hours, inconsistent social destinations, and conflicting
  sermon copy; redesigned surfaces cannot publish these conflicts.
- The current phone-sized experience exhibits horizontal overflow and unusable navigation.

### Assumptions

- The current public service time, address, and phone number are treated as working source content
  for drafting, but an authorized church representative will confirm them before publication.
- Plan Your Visit will reuse an existing relevant page or approved current URL where practical rather
  than require a new permalink.
- Optional homepage ministries, events, and sermon/service features will be limited to content that
  already exists and is approved by a church content owner.
- Existing integrations remain the source of truth for giving, calendar/events, videos, subscriptions,
  and other external services.
- Staff will continue using current WordPress permissions and editing workflows unless inspection
  demonstrates that a first-release content area cannot be maintained that way.
- Legacy pages may look different from redesigned pages, provided they remain usable and reachable.

### Unknowns Requiring Resolution Before Publication

- The authoritative office hours and correct social-account destinations.
- Confirmed parking instructions, entrance/arrival guidance, childcare details, and the precise
  accessibility statements the church wants to publish.
- Which existing ministries, current events, and sermon/service items are approved for homepage
  promotion at launch.
- The approved logo or identity assets and final public wording for the church summary.
- Named church content owners responsible for confirming visitor information and time-sensitive
  homepage content.

These unknowns do not change the release boundary. If an item remains unresolved, the affected
optional claim or promotion MUST be omitted rather than invented.

## Dependencies

- Authorized church review and approval of identity, schedule, location, contact, family,
  accessibility, parking, and time-sensitive content.
- Continued availability of the existing website content and current external destinations.
- Read-only inspection of the existing content-management structure sufficient to identify affected
  content and maintenance paths.
- A safe non-production review environment.
- A verified backup and rollback procedure before production publication.
- Access appropriate to validate affected URLs, forms, navigation, content updates, and integrations.

## Success Criteria *(mandatory)*

### Measurable Outcomes

- **SC-001**: At least 90% of representative first-time users can correctly identify the Sunday
  service time and church location from the homepage within 10 seconds.
- **SC-002**: At least 90% of representative first-time users can reach Plan Your Visit without
  assistance on their first attempt.
- **SC-003**: 100% of retained primary navigation destinations are reachable by pointer and keyboard
  at representative phone, tablet, and desktop sizes.
- **SC-004**: Changed surfaces exhibit no horizontal page scrolling at tested widths from 320 to
  1440 CSS pixels at default text size.
- **SC-005**: 100% of affected existing URLs and critical integration journeys pass pre-release
  continuity checks or have a documented, stakeholder-approved exception.
- **SC-006**: 100% of redesigned pages pass the release accessibility review defined in AC-009.
- **SC-007**: All confirmed church information shown across redesigned surfaces is consistent, with
  zero unresolved contradictory values at release approval.
- **SC-008**: Authorized staff can complete each designated routine content update without editing
  source code or maintaining a duplicate source of truth.
- **SC-009**: The first release can be rolled back using the documented procedure if release
  verification fails.

