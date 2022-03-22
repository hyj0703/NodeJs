#!/bin/bash
echo '
      _ ____    _____ ____  _____ _   _ ____   __        _____  ____  ____       _    _   _    _    _  __   ______ ___ ____  
     | |  _ \  |_   _|  _ \| ____| \ | |  _ \  \ \      / / _ \|  _ \|  _ \     / \  | \ | |  / \  | | \ \ / / ___|_ _/ ___| 
  _  | | | | |   | | | |_) |  _| |  \| | | | |  \ \ /\ / / | | | |_) | | | |   / _ \ |  \| | / _ \ | |  \ V /\___ \| |\___ \ 
 | |_| | |_| |   | | |  _ <| |___| |\  | |_| |   \ V  V /| |_| |  _ <| |_| |  / ___ \| |\  |/ ___ \| |___| |  ___) | | ___) |
  \___/|____/    |_| |_| \_\_____|_| \_|____/     \_/\_/  \___/|_| \_\____/  /_/   \_\_| \_/_/   \_\_____|_| |____/___|____/
'

echo -e '############################'
echo -e '#                          #'
echo -e '#     DEPLPYMENT START     #'
echo -e '#                          #'
echo -e '############################'

echo -e ''
echo -e '##### update source code #####\n'
cd /opt/service/jd-trend-word-analysis
git pull -a origin
git checkout develop && git pull
echo -e ''
echo -e '##### update succeed #####\n'
echo -e ''

echo -e '##### create dist package #####\n'
npm install
npm run fat
echo -e ''
echo -e '##### create succeed #####\n'

echo -e '##### pull out & copy package #####\n'
forever stopall
rm -rf /opt/service/dist
mv /opt/service/jd-trend-word-analysis/dist /opt/service/dist
cp -rf /opt/service/jd-trend-word-analysis/node_modules /opt/service/dist/node_modules
echo -e ''
echo -e '##### execute succeed #####\n'

echo -e '##### fire application #####\n'
cd /opt/service/dist
forever start -a -l /opt/service/logs/main.log -e /opt/service/logs/error.log -o /opt/service/logs/out.log index.js
echo -e ''
echo -e '##### fire succeed #####\n'

echo -e '############################'
echo -e '#                          #'
echo -e '#     DEPLPYMENT ENDED     #'
echo -e '#                          #'
echo -e '############################'

echo '
 _____  _   _  _____  _____  _____  _____ ______ 
/  ___|| | | |/  __ \/  __ \|  ___||  ___||  _  \
\ `--. | | | || /  \/| /  \/| |__  | |__  | | | |
 `--. \| | | || |    | |    |  __| |  __| | | | |
/\__/ /| |_| || \__/\| \__/\| |___ | |___ | |/ / 
\____/  \___/  \____/ \____/\____/ \____/ |___/  
'
