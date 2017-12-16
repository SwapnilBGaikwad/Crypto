#!/usr/bin/env bash
echo 'Deploying Crypto project to Heroku'

npm run build

heroku login

heroku git:remote -a encrypiton-calc

git push heroku master

