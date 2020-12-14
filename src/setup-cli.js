const core = require('@actions/core');
const github = require('@actions/github');
const exec = require('@actions/exec');

async function setupCli() {
    try {
        console.log(`Installing @altosra/cli`)
        await exec.exec('sudo npm i -g @altostra/cli');

        const token = core.getInput('api-tokenx', { required: true });
        // Register secret to ensure it's masked in logs

        //TODO: just for testing
        console.log(`Setting up credentials - 1: ${token}`)
        core.setSecret(token)
        console.log(`Setting up credentials - 2: ${token}`)

        await exec.exec(`alto api-key set ${token}`);
    } catch (error) {
        core.setFailed(error.message);
    }

}

setupCli()
