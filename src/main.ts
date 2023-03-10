import * as core from '@actions/core'
import {Agent, Options} from './agent'

async function run(): Promise<void> {
  try {
    const [owner, repo] = core
      .getInput('repository', {required: true})
      .split('/')

    const opts: Options = {
      baseUrl: core.getInput('base-url'),
      owner,
      repo,
      environment: core.getInput('environment'),
      autoMerge: core.getInput('auto-merge') === 'true' ? true : false,
      ref: core.getInput('ref', {required: true}),
      productionEnvironment:
        core.getInput('production-environment') === 'true' ? true : false,
      transientEnvironment:
        core.getInput('transient-environment') === 'true' ? true : false,
      token: core.getInput('token', {required: true})
    }

    const agent = new Agent(opts)
    const deployment = await agent.run()

    core.setOutput('deployment-id', deployment.id)
    core.setOutput('sha', deployment.sha)
    core.setOutput('node-id', deployment.node_id)
    core.setOutput('description', deployment.description)
  } catch (err: any) {
    core.setFailed(err.message)
    core.debug(err.stack)
  }
}

run()
