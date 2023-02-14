# Find Deployment

[![CI][CI]][CI-status]
[![GitHub Marketplace][MarketPlace]][MarketPlace-status]
[![Mergify Status][mergify-status]][mergify]

A GitHub Action that find a GitHub deployment by hash, ref or environment name.

## Usage

This is the basic usage.

```yml
on:
  issues: [opened]
  pull_request: [opened]

steps:
    - uses: KekeHub/find-deployment@v1
      with:
        sha: ${{ github.sha }}
```

Note that this can be used for either organization or user projects.
Please see the following sections for details.

## Inputs

|         NAME         |                                      DESCRIPTION                                       |   TYPE   | REQUIRED |                                 DEFAULT                                      |
| -------------------- | -------------------------------------------------------------------------------------- | -------- | -------- | --------------------------------------------------------------------------------- |
| `base-url`           | URL of the GItHUb enterprise URL.                                                      | `number` | `false`  |                                                                                   |
| `environment` | Name of the enviroment.                                                  | `number` | `false`  |                                                                                   |
| `ref`    | Private key of the GitHub App.                                                         | `string` | `false`  |                                                                                   |
| `issue-id`           | ID  of the issue.                                                                      | `string` | `true`   | `${{ github.event.issue.node_id }}` or `${{ github.event.pull_request.node_id }}` |
| `owner`              | Organization or the user e.g. `KekeHub`                                                | `string` | `false`  | The workflows GitHub organization                                                 |
| `token`              | A GitHub token. If GitHub App arguments are configured, this argument will be ignored. | `string` | `false`  | `${{ github.token }}`                                                             |
| `project-id`         | ID (Number) of the project. e.g.) `1`                                                  | `number` | `true`   |                                                                                   |

## Outputs

| NAME              | DESCRIPTION                                                                                                                                                                                                                                                | TYPE     |
|-------------------|------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------|----------|
| `project-item-id` | ID of the item (issue or pull request) that was added to the project. Useful for later use if you want to update the fields. You can use [KekeHub/update-project-item-fields](https://github.com/KekeHub/update-project-item-fields) to update the fields. | `string` |

## Related Actions

* [KekeHub/update-project-item-fields](https://github.com/KekeHub/update-project-item-fields)
  * GitHub Action to update project item fields

## License

[MIT](LICENSE)

<!-- Badge links -->
[CI]: https://github.com/KekeHub/find-deploymentworkflows/CI/badge.svg
[CI-status]: https://github.com/KekeHub/find-deploymentactions?query=workflow%3Abuild-test

[MarketPlace]: https://img.shields.io/badge/Marketplace-Find%20Deployment-blue.svg?colorA=24292e&colorB=0366d6&style=flat&longCache=true&logo=data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAA4AAAAOCAYAAAAfSC3RAAAABHNCSVQICAgIfAhkiAAAAAlwSFlzAAAM6wAADOsB5dZE0gAAABl0RVh0U29mdHdhcmUAd3d3Lmlua3NjYXBlLm9yZ5vuPBoAAAERSURBVCiRhZG/SsMxFEZPfsVJ61jbxaF0cRQRcRJ9hlYn30IHN/+9iquDCOIsblIrOjqKgy5aKoJQj4O3EEtbPwhJbr6Te28CmdSKeqzeqr0YbfVIrTBKakvtOl5dtTkK+v4HfA9PEyBFCY9AGVgCBLaBp1jPAyfAJ/AAdIEG0dNAiyP7+K1qIfMdonZic6+WJoBJvQlvuwDqcXadUuqPA1NKAlexbRTAIMvMOCjTbMwl1LtI/6KWJ5Q6rT6Ht1MA58AX8Apcqqt5r2qhrgAXQC3CZ6i1+KMd9TRu3MvA3aH/fFPnBodb6oe6HM8+lYHrGdRXW8M9bMZtPXUji69lmf5Cmamq7quNLFZXD9Rq7v0Bpc1o/tp0fisAAAAASUVORK5CYII=
[MarketPlace-status]: https://github.com/marketplace/actions/find-deployment

[mergify]: https://mergify.io
[mergify-status]: https://img.shields.io/endpoint.svg?url=https://gh.mergify.io/badges/KekeHub/find-deployment&style=flat
