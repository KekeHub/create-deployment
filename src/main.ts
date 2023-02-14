import * as core from '@actions/core'
import {Agent, Options} from './agent'

async function run(): Promise<void> {
  try {
    const [owner, repo] = core
      .getInput('repository', {required: true})
      .split('/')

    const opts: Options = {
      owner,
      repo,
      autoMerge: core.getInput('auto-merge') === 'true' ? true : false,
      ref: core.getInput('ref', {required: true}),
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
