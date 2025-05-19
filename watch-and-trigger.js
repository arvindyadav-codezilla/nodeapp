const chokidar = require('chokidar');
const fetch = require('node-fetch');

// --- Configuration ---
const PROJECT_DIR = '/home/czm040/projects/nodejs-local-pipeline';
const JENKINS_URL = 'http://localhost:8080';
const JOB_NAME = 'nodejs-local-pipeline';
const USER = 'arvindyadav51200';
const API_TOKEN = '11c99caac09dc40390809b4be766116659';

// --- Watcher Setup ---
console.log(`👀 Watching for changes in: ${PROJECT_DIR}`);

const watcher = chokidar.watch(PROJECT_DIR, {
  ignored: /(^|[\/\\])\../, // ignore dotfiles
  persistent: true,
  ignoreInitial: true,
});

watcher.on('all', async (event, path) => {
  console.log(`🔁 Change detected in: ${path}`);
  console.log('🚀 Triggering Jenkins build...');

  const triggerUrl = `${JENKINS_URL}/job/${JOB_NAME}/build`;

  try {
    const response = await fetch(triggerUrl, {
      method: 'POST',
      headers: {
        'Authorization': 'Basic ' + Buffer.from(`${USER}:${API_TOKEN}`).toString('base64'),
      },
    });

    if (response.ok) {
      console.log('✅ Build triggered successfully!');
    } else {
      console.error(`❌ Failed to trigger build. Status: ${response.status}`);
    }
  } catch (error) {
    console.error('❌ Error triggering Jenkins build:', error.message);
  }
});
