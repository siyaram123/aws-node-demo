#!/bin/bash

cd /home/ubuntu/aws-node-demo

pkill node || true

nohup node app.js > app.log 2>&1 &