# Website revisions

- **rev0**: Original website, preserved by Git tag `rev0`.
- **rev01**: Approved homepage and service redesign, preserved by Git tag `rev01`.

Separate complete source folders are maintained beside the working repository:

- `../rev0/`
- `../rev01/`

Local ZIP copies are also stored in this directory. Archives and revision folders contain source and public assets, without dependencies, generated builds, or private environment files. The existing working repository retains its environment settings.

To run a separate revision, install dependencies with `npm ci`, configure environment settings, and use `npm run dev`. Either version is also available from its GitHub tag.

The main `/` route serves rev01. `/preview` routes remain available for review and are marked noindex.
