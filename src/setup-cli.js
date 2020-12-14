const core = require('@actions/core');
const github = require('@actions/github');
const exec = require('@actions/exec');

async function setupCli() {
    try {
        console.log(`Installing @altosra/cli`)
        await exec.exec('sudo npm i -g @altostra/cli');

        const token = core.getInput('api-token', { required: true });
        // Register secret to ensure it's masked in logs
        core.setSecret(token)

        console.log(`Setting up credentials`)

        await exec.exec(`alto api-key set ${token}`);
    } catch (error) {
        core.setFailed(error.message);
    }

}

setupCli()
