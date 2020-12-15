![altostra-integration](./resources/img/github-actions-ci-cd-altostra.png)
## About

Use this Action to log into your Altostra account and store credentials for later use with other Altostra Actions.

**See also**
* [push-deploy-action](https://github.com/altostra/push-deploy-action)

## Usage

### Inputs
Following inputs can be used as step.with keys

| Name  | Type  | Required | Description  |
|:-:|:-:|:-:|:-:|
| api-token  | string  |  Yes |  Your Altostra API token from [Altostra settings](https://app.altostra.com/settings/tokens). |

## Example usage
```yaml
on: [push]

jobs:
  hello_world_job:
    runs-on: ubuntu-latest
    name: A basic Altostra job
    steps:
    - uses: actions/checkout@v2
    - id: Login
      uses: altostra/login-action@v1
      with:
        api-token: "${{ secrets.ALTO_API_TOKEN }}"
```
