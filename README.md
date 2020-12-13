# altostra-login-action
GitHub Action to login against an Altostra account.

## Inputs

### `api-token`

**Required** Your Altostra API token from https://app.altostra.com/settings/tokens.

## Example usage

uses: actions/altostra-login-action@v1.1
with:
  api-token: ${{ secrets.ALTO_API_TOKEN }}