import * as core from '@actions/core'
import {getOctokit} from '@actions/github'
import {inspect} from 'util'

interface Deployment {
  id: number
  description: string | null
  environment: string
  node_id: string
  sha: string
}

export interface Options {
  autoMerge: boolean
  baseUrl?: string
  environment?: string
  owner: string
  ref: string
  repo: string
  productionEnvironment: boolean
  transientEnvironment: boolean
  token: string
}

export class Agent {
  #github

  constructor(private opts: Options) {
    this.#github = getOctokit(opts.token, {
      baseUrl: opts.baseUrl
    })
  }

  async run(): Promise<Deployment> {
    const {
      ref,
      repo,
      owner,
      autoMerge,
      transientEnvironment,
      productionEnvironment
    } = this.opts

    core.debug('creating environment')
    const {data} = await this.#github.rest.repos.createDeployment({
      owner,
      repo,
      auto_merge: autoMerge,
      ref,
      transient_environment: transientEnvironment,
      production_environment: productionEnvironment
    })

    core.debug(`Created environment ${inspect(data)}`)
    return data as Deployment
  }
}
