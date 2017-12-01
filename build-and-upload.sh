#!/bin/bash

ng build
scp -r api/ assosponso@ssh-assosponso.alwaysdata.net:~/
cd dist
scp -r ./ assosponso@ssh-assosponso.alwaysdata.net:~/www

