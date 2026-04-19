# Changelog

## [1.0.0] - 2026-04-19

### Added
- API documentation reference (`api.md`).
- Core models for `Client`, `Project`, `Enquiry`, and `Contact` in `src/app/core/models/api.model.ts`.
- `ApiService` in `src/app/core/services/api.service.ts` to handle all public and admin API interactions.
- Managed API URLs via environment files (`src/environments/`).
- Added `provideHttpClient` with `withFetch` to `src/app/app.config.ts`.
- Implemented **Console Panel** (`/console-panel`) with:
    - Admin Authentication & `AuthGuard`.
    - Dashboard layout with sidebar navigation.
    - Live CRUD for Clients, Projects, and Enquiries.

### Fixed
- Improved deployment workflow reliability by adding `delete-missing: true` and removing full URL from `base-href`.
- Resolved issue with console logs not showing in production by adding more descriptive logging and verifying deployment path.
