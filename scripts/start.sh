#!/bin/bash

cd /home/ec2-user/aws-node-demo

pm2 delete aws-node-demo || true

pm2 start app.js --name aws-node-demo

pm2 save