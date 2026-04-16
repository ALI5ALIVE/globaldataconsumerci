

# Fix PPTX Download — Client-Side Blob Download

## Problem

The `<a href="/downloads/...pptx" download>` pattern gets intercepted by the Lovable Preview proxy, redirecting the user instead of downloading the file.

## Solution

Replace the anchor link with a `fetch()` + blob download approach. This fetches the file as a blob and triggers a programmatic download via `URL.createObjectURL`, which bypasses the proxy issue.

## Changes

### `src/components/DeckDownloadButton.tsx`
- Remove the `<a>` wrapper
- Add an `onClick` handler that:
  1. Fetches `/downloads/GlobalData-Connected-Intelligence.pptx` as a blob
  2. Creates an object URL
  3. Programmatically clicks a temporary anchor element with `download` attribute
  4. Revokes the object URL
- Add loading state to disable the button during download

