#!/bin/bash

# --- Configuration ---
PROJECT_DIR="/home/czm040/projects/nodejs-local-pipeline"
JENKINS_URL="http://localhost:8080"
JOB_NAME="nodejs-local-pipeline"
USER="arvindyadav51200"
API_TOKEN="11c99caac09dc40390809b4be766116659"

# --- Watch for file changes ---
echo "Watching for changes in: $PROJECT_DIR"

inotifywait -m -r -e modify,create,delete --format '%w%f' "$PROJECT_DIR" | while read file
do
    echo "Change detected in: $file"
    echo "Triggering Jenkins build for job: $JOB_NAME"

    curl -X POST "$JENKINS_URL/job/$JOB_NAME/build" \
         --user "$USER:$API_TOKEN"

    echo "Build triggered!"
done

