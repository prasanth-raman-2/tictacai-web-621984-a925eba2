#!/bin/bash
cd /tmp/kavia/workspace/code-generation/tictacai-web-621984-a925eba2/main_frontend
npm run build
EXIT_CODE=$?
if [ $EXIT_CODE -ne 0 ]; then
   exit 1
fi

