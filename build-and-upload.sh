#!/bin/bash

ng build
cd dist
scp -r ./ assosponso@ssh-assosponso.alwaysdata.net:~/www

