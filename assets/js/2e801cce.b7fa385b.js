"use strict";(self.webpackChunkblog=self.webpackChunkblog||[]).push([[9450],{6029:e=>{e.exports=JSON.parse('{"blogPosts":[{"id":"coding-problem-2022-09-09","metadata":{"permalink":"/coding-problem-2022-09-09","source":"@site/blog/2022-09-09-daily-coding-problem.md","title":"Coding Problem 2022-09-09 (hard)","description":"Problem (hard):","date":"2022-09-09T00:00:00.000Z","formattedDate":"September 9, 2022","tags":[{"label":"coding-problem","permalink":"/tags/coding-problem"},{"label":"hard","permalink":"/tags/hard"}],"hasTruncateMarker":false,"authors":[{"name":"p0nch0 d3v","title":"Software Developer","url":"https://github.com/p0nch0d3v","imageURL":"https://github.com/p0nch0d3v.png","key":"p0nch0d3v"}],"frontMatter":{"title":"Coding Problem 2022-09-09 (hard)","slug":"coding-problem-2022-09-09","tags":["coding-problem","hard"],"authors":["p0nch0d3v"]},"nextItem":{"title":"Coding Problem 2022-09-08 (easy)","permalink":"/coding-problem-2022-09-08"}},"content":"### Problem (hard):\\n*Given an array of integers, return a new array such that each element at index `i` of the new array is the product of all the numbers in the original array except the one at `i`.*\\n\\n*For example, if our input was `[1, 2, 3, 4, 5]`, the expected output would be `[120, 60, 40, 30, 24]`. If our input was `[3, 2, 1]`, the expected output would be `[2, 3, 6]`.*\\n\\n*Follow-up: what if you can\'t use division?*\\n\\n<details>\\n<summary>Proposed solution (Python)</summary>\\n<p>\\n\\n```python\\ndef main(the_list, expected):\\n    print(\'List: \', the_list)\\n    print(\'Expected:\', expected)\\n\\n    factor = 1\\n    for item in the_list:\\n        factor = factor * item\\n    print(\'Factor:\', factor)    \\n    \\n    result = []\\n    for item in the_list:\\n        i = 0\\n        while (i < factor):\\n            i = i + 1\\n            if (i * item == factor):\\n                result.append(i)\\n                \\n    print(\'Result:\', result)\\n\\n    return 0\\n\\nif __name__ == \\"__main__\\":\\n    main([1, 2, 3, 4, 5], [120, 60, 40, 30, 24])\\n    main([3, 2, 1], [2, 3, 6])\\n```\\n\\n</p>\\n</details>"},{"id":"coding-problem-2022-09-08","metadata":{"permalink":"/coding-problem-2022-09-08","source":"@site/blog/2022-09-08-daily-coding-problem.md","title":"Coding Problem 2022-09-08 (easy)","description":"Problem (easy):","date":"2022-09-08T00:00:00.000Z","formattedDate":"September 8, 2022","tags":[{"label":"coding-problem","permalink":"/tags/coding-problem"},{"label":"easy","permalink":"/tags/easy"}],"hasTruncateMarker":false,"authors":[{"name":"p0nch0 d3v","title":"Software Developer","url":"https://github.com/p0nch0d3v","imageURL":"https://github.com/p0nch0d3v.png","key":"p0nch0d3v"}],"frontMatter":{"title":"Coding Problem 2022-09-08 (easy)","slug":"coding-problem-2022-09-08","tags":["coding-problem","easy"],"authors":["p0nch0d3v"]},"prevItem":{"title":"Coding Problem 2022-09-09 (hard)","permalink":"/coding-problem-2022-09-09"},"nextItem":{"title":"After Install Mint 21","permalink":"/after-install-mint-21"}},"content":"### Problem (easy):\\n*Given a list of numbers and a number `k`, return whether any two numbers from the list add up to `k`.*\\n\\n*For example, given `[10, 15, 3, 7]` and `k` of `17`, return true since `10 + 7` is `17`.*\\n\\n*Bonus: Can you do this in one pass?*\\n\\n<details>\\n<summary>Proposed solution (Python)</summary>\\n<p>\\n\\n```python\\ndef main (the_list, k):\\n    i = 0\\n    j = 0\\n    success = False\\n    while (i < len(the_list)):\\n        while (j < len(the_list)):\\n            if (i != j):\\n                if (the_list[i] + the_list[j] == k):\\n                    print(the_list[i])\\n                    print(the_list[j])\\n                    success = True\\n            j = j + 1\\n            if (success):\\n                break\\n        j = 0\\n        i = i + 1\\n        if (success):\\n            break\\n    print(success)\\n\\nif __name__ == \\"__main__\\":\\n    main([10, 15, 3, 7], 17)\\n```\\n\\n</p>\\n</details>"},{"id":"after-install-mint-21","metadata":{"permalink":"/after-install-mint-21","source":"@site/blog/2022-08-30-after-install-mint.md","title":"After Install Mint 21","description":"Some packages","date":"2022-08-30T00:00:00.000Z","formattedDate":"August 30, 2022","tags":[{"label":"linux","permalink":"/tags/linux"},{"label":"mint","permalink":"/tags/mint"},{"label":"neovim","permalink":"/tags/neovim"},{"label":"docker","permalink":"/tags/docker"}],"hasTruncateMarker":false,"authors":[{"name":"p0nch0 d3v","title":"Software Developer","url":"https://github.com/p0nch0d3v","imageURL":"https://github.com/p0nch0d3v.png","key":"p0nch0d3v"}],"frontMatter":{"title":"After Install Mint 21","slug":"after-install-mint-21","tags":["linux","mint","neovim","docker"],"authors":["p0nch0d3v"]},"prevItem":{"title":"Coding Problem 2022-09-08 (easy)","permalink":"/coding-problem-2022-09-08"},"nextItem":{"title":"Change Docker storage location","permalink":"/change-docker-storage-location"}},"content":"### Some packages\\n\\n```bash\\nsudo apt install -y zsh \\\\\\n     neofetch \\\\\\n     neovim \\\\\\n     git \\\\\\n     openssh-server \\\\\\n     curl \\\\\\n     bat \\\\\\n     chromium \\\\\\n     wget \\\\\\n     curl \\\\\\n     htop\\n```\\n\\n### ohmyzsh\\n\\n```bash\\nsh -c \\"$(curl -fsSL https://raw.github.com/ohmyzsh/ohmyzsh/master/tools/install.sh)\\"\\n```\\n\\n### SpaceVim\\n```bash\\ncurl -sLf https://spacevim.org/install.sh | bash -s -- --install neovim\\n```\\n\\n### Docker\\n```bash\\nsudo mkdir -p /etc/apt/keyrings\\n```\\n```bash\\ncurl -fsSL https://download.docker.com/linux/ubuntu/gpg | sudo gpg --dearmor -o /etc/apt/keyrings/docker.gpg\\n```\\n```bash\\necho \\"deb [arch=$(dpkg --print-architecture) signed-by=/etc/apt/keyrings/docker.gpg] https://download.docker.com/linux/ubuntu $(lsb_release -cs) stable\\" | sudo tee /etc/apt/sources.list.d/docker.list > /dev/null\\n```\\n```bash\\nsudo apt-get update && \\\\\\nsudo apt-get install -y docker-ce \\\\\\n     docker-ce-cli \\\\\\n     containerd.io \\\\\\n     docker-compose \\\\\\n     docker-compose-plugin\\n```\\n```bash\\nsudo usermod -aG docker $USER\\n```\\n[Change Docker Storage Location](/change-docker-storage-location)\\n\\n### Google Chrome\\n```bash\\nwget https://dl.google.com/linux/direct/google-chrome-stable_current_amd64.deb --output-document /tmp/google-chrome-stable_current_amd64.deb\\n```\\n```bash\\nsudo dpkg -i /tmp/google-chrome-stable_current_amd64.deb\\n```\\n\\n### Sublime Text & Merge\\n```bash\\nwget -qO - https://download.sublimetext.com/sublimehq-pub.gpg | gpg --dearmor | sudo tee /etc/apt/trusted.gpg.d/sublimehq-archive.gpg\\n```\\n```bash\\necho \\"deb https://download.sublimetext.com/ apt/stable/\\" | sudo tee /etc/apt/sources.list.d/sublime-text.list\\n```\\n```bash\\nsudo apt-get update && \\\\\\nsudo apt-get install --yes sublime-text sublime-merge\\n```\\n\\n### Visual Studio Code\\n```bash\\nwget -qO- https://packages.microsoft.com/keys/microsoft.asc | gpg --dearmor > packages.microsoft.gpg\\n```\\n```bash\\nsudo install -D -o root -g root -m 644 packages.microsoft.gpg /etc/apt/keyrings/packages.microsoft.gpg\\n```\\n```bash\\nsudo sh -c \'echo \\"deb [arch=amd64,arm64,armhf signed-by=/etc/apt/keyrings/packages.microsoft.gpg] https://packages.microsoft.com/repos/code stable main\\" > /etc/apt/sources.list.d/vscode.list\'\\n```\\n```bash\\nrm -f packages.microsoft.gpg\\n```\\n```bash\\nsudo apt install --yes apt-transport-https && \\\\\\nsudo apt update && \\\\\\nsudo apt install --yes code \\n```\\n\\n### Virtualbox\\n\\n```bash\\nsudo echo \\"deb [arch=amd64 signed-by=/usr/share/keyrings/oracle-virtualbox-2016.gpg] https://download.virtualbox.org/virtualbox/debian jammy contrib\\" | sudo tee /etc/apt/sources.list.d/virtualbox.list > /dev/null\\n```\\n```bash\\nwget -O- https://www.virtualbox.org/download/oracle_vbox_2016.asc | sudo gpg --dearmor --yes --output /usr/share/keyrings/oracle-virtualbox-2016.gpg\\n```\\n```bash\\nsudo apt-get update && \\\\\\nsudo apt-get install --yes virtualbox-6.1\\n```\\n\\n### Skype\\n```bash\\nsudo apt install software-properties-common apt-transport-https wget ca-certificates gnupg2 -y\\n```\\n```bash\\nwget -O- https://repo.skype.com/data/SKYPE-GPG-KEY | sudo gpg --dearmor | sudo tee /usr/share/keyrings/skype.gpg\\n```\\n```bash\\necho \\"deb [arch=amd64 signed-by=/usr/share/keyrings/skype.gpg] https://repo.skype.com/deb stable main\\" | sudo tee /etc/apt/sources.list.d/skype-stable.list\\n```\\n```\\nsudo apt-get update && \\\\\\nsudo apt install skypeforlinux -y\\n```\\n\\n### Auto mount external drive\\n#### List drives\\n```bash\\nls -l /dev/disk/by-uuid\\n```\\n#### Edit File System Table\\n```bash\\nsudo nano /etc/fstab\\n```\\n#### Add the corresponding unique id, as the following\\n`\\nUUID=00000000-0000-0000-0000-000000000000 /mnt/{location}  ext4    user,rw,exec   0       3\\n`\\n#### Ensure the locations exists\\n```bash\\nsudo mkdir --parents /mnt/{location}\\n```\\n#### Change the owner and/or group of the directory\\n```bash\\nsudo chown -R $USER:$USER /mnt/{location}/\\n```\\n#### Mount device\\n```bash\\nmount /dev/{device}\\n```\\n\\n### Add the following cron job\\n```bash\\ncrontab -e\\n```\\n\\n`*/15 * * * * /bin/sh /mnt/{location}/development/copy_to_backup.sh`"},{"id":"change-docker-storage-location","metadata":{"permalink":"/change-docker-storage-location","source":"@site/blog/2022-08-29-change-docker-storage-location.md","title":"Change Docker storage location","description":"Stop docker service and socket","date":"2022-08-29T00:00:00.000Z","formattedDate":"August 29, 2022","tags":[{"label":"docker","permalink":"/tags/docker"}],"hasTruncateMarker":false,"authors":[{"name":"p0nch0 d3v","title":"Software Developer","url":"https://github.com/p0nch0d3v","imageURL":"https://github.com/p0nch0d3v.png","key":"p0nch0d3v"}],"frontMatter":{"title":"Change Docker storage location","slug":"change-docker-storage-location","tags":["docker"],"authors":["p0nch0d3v"]},"prevItem":{"title":"After Install Mint 21","permalink":"/after-install-mint-21"},"nextItem":{"title":"Use Jenkins on Dokku","permalink":"/use-jenkins-on-dokku"}},"content":"#### Stop docker service and socket\\n```bash\\nsudo systemctl stop docker.service && \\\\\\nsudo systemctl stop docker.socket\\n```\\n#### Edit the current configuration\\n```bash\\nsudo nano /lib/systemd/system/docker.service\\n```\\n#### Locate: `ExecStart` \\n#### and add the follwing line: `-g /some/other/location`\\n\\n#### Ensure that the directory exits\\n```bash\\nsudo mkdir -p /some/other/location\\n```\\n\\n#### Sync pre-existing content\\n```bash\\nsudo rsync -aqxP /var/lib/docker/ /some/other/location\\n```\\n\\n#### Start docker service and socket\\n```bash\\nsudo systemctl daemon-reload && \\\\\\nsudo systemctl start docker\\n```"},{"id":"use-jenkins-on-dokku","metadata":{"permalink":"/use-jenkins-on-dokku","source":"@site/blog/2022-05-05-deploy-jenkins-in-dokku.md","title":"Use Jenkins on Dokku","description":"Create the app on dokku.","date":"2022-05-05T00:00:00.000Z","formattedDate":"May 5, 2022","tags":[{"label":"jenkins","permalink":"/tags/jenkins"},{"label":"dokku","permalink":"/tags/dokku"}],"hasTruncateMarker":false,"authors":[{"name":"p0nch0 d3v","title":"Software Developer","url":"https://github.com/p0nch0d3v","imageURL":"https://github.com/p0nch0d3v.png","key":"p0nch0d3v"}],"frontMatter":{"title":"Use Jenkins on Dokku","slug":"use-jenkins-on-dokku","tags":["jenkins","dokku"],"authors":["p0nch0d3v"]},"prevItem":{"title":"Change Docker storage location","permalink":"/change-docker-storage-location"},"nextItem":{"title":"Host domain on local network","permalink":"/host-domain-local-net"}},"content":"Create the app on dokku.\\n```bash\\ndokku apps:create j\\n```\\n\\nGet `Jenkins` docker image\\n```bash\\ndocker pull jenkins/jenkins:lts-jdk11\\n```\\n\\nTag the pulled image as the current application image\\n```bash\\ndocker tag jenkins/jenkins:lts-jdk11 dokku/j:latest\\n```\\n\\nDeploy the tagged image to the application\\n```bash\\ndokku tags:deploy j latest\\n```\\n\\nMap the exposed port `8080` from Jenkins to `80` port\\n```bash\\ndokku proxy:set j http:80:8080\\ndokku proxy:ports-add j 80:8080\\n```\\n\\nOptional, create a mount point for the whole jenkins configurations.\\n```bash\\ndokku storage:mount j /home/sneakykoder/jenkins_home:/var/jenkins_home\\n```"},{"id":"host-domain-local-net","metadata":{"permalink":"/host-domain-local-net","source":"@site/blog/2022-03-02-domain-in-local-network.md","title":"Host domain on local network","description":"Prefer used a domain parked on namecheap.","date":"2022-03-02T00:00:00.000Z","formattedDate":"March 2, 2022","tags":[],"hasTruncateMarker":false,"authors":[{"name":"p0nch0 d3v","title":"Software Developer","url":"https://github.com/p0nch0d3v","imageURL":"https://github.com/p0nch0d3v.png","key":"p0nch0d3v"}],"frontMatter":{"title":"Host domain on local network","slug":"host-domain-local-net","tags":[],"authors":["p0nch0d3v"]},"prevItem":{"title":"Use Jenkins on Dokku","permalink":"/use-jenkins-on-dokku"},"nextItem":{"title":"Linux Shell snippets","permalink":"/linux-shell-snippets"}},"content":"Prefer used a domain parked on <a href=\\"https://www.namecheap.com/\\" target=\\"_blank\\">namecheap</a>.\\n\\n> Install `ddclient`, debian base linux distro:\\n\\n```bash \\nsudo apt-get install ddclient -y\\n```\\n```bash\\nsudo vim /etc/ddclient.conf\\n```\\nUse the following content\\n```\\nssl=yes\\nuse=web, web=dynamicdns.park-your-domain.com/getip\\nprotocol=namecheap\\nserver=dynamicdns.park-your-domain.com\\nlogin=dummy-domain.tld\\npassword=\'\'\\n@\\n*\\n```\\nGet IP info:\\n```bash\\nsudo ddclient -query\\n```\\nRestart service:\\n```bash\\nsudo service ddclient restart\\n```\\n\\nReferences:\\n* https://www.namecheap.com/support/knowledgebase/article.aspx/43/11/how-do-i-set-up-a-host-for-dynamic-dns/\\n* https://www.namecheap.com/support/knowledgebase/article.aspx/583/11/how-do-i-configure-ddclient/"},{"id":"linux-shell-snippets","metadata":{"permalink":"/linux-shell-snippets","source":"@site/blog/2022-02-20-linux-shell-snippets.md","title":"Linux Shell snippets","description":"Here is a set of some git snippets, useful in some way.","date":"2022-02-20T00:00:00.000Z","formattedDate":"February 20, 2022","tags":[{"label":"linux","permalink":"/tags/linux"},{"label":"bash","permalink":"/tags/bash"},{"label":"sh","permalink":"/tags/sh"}],"hasTruncateMarker":false,"authors":[{"name":"p0nch0 d3v","title":"Software Developer","url":"https://github.com/p0nch0d3v","imageURL":"https://github.com/p0nch0d3v.png","key":"p0nch0d3v"}],"frontMatter":{"title":"Linux Shell snippets","slug":"linux-shell-snippets","tags":["linux","bash","sh"],"authors":["p0nch0d3v"]},"prevItem":{"title":"Host domain on local network","permalink":"/host-domain-local-net"},"nextItem":{"title":"Some scripts","permalink":"/some-scripts"}},"content":"> Here is a set of some git snippets, useful in some way.\\n\\n### List files/directories\\n```bash\\nls -a -l -h --color=always\\n```\\nWhere:\\n```bash\\n-a      = show all files included the dots(.)\\n-l      = show in long format\\n-h      = Show in units in humat readable format\\n--color = Output colored\\n```\\n\\n### Find forlders recursively\\n```bash\\nfind . -name \\"node_modules\\" -type d -prune | xargs du -chs\\n```"},{"id":"some-scripts","metadata":{"permalink":"/some-scripts","source":"@site/blog/2022-01-24-some-scripts.mdx","title":"Some scripts","description":"Here is a set of (useful in some way) scripts in different languages such as bash, powershell, etc.","date":"2022-01-24T00:00:00.000Z","formattedDate":"January 24, 2022","tags":[{"label":"bash","permalink":"/tags/bash"},{"label":"powershell","permalink":"/tags/powershell"}],"hasTruncateMarker":false,"authors":[{"name":"p0nch0 d3v","title":"Software Developer","url":"https://github.com/p0nch0d3v","imageURL":"https://github.com/p0nch0d3v.png","key":"p0nch0d3v"}],"frontMatter":{"title":"Some scripts","slug":"some-scripts","tags":["bash","powershell"],"authors":["p0nch0d3v"]},"prevItem":{"title":"Linux Shell snippets","permalink":"/linux-shell-snippets"},"nextItem":{"title":"Git snippets","permalink":"/git-snippets"}},"content":"import CodeFilePreview from \'@site/src/components/CodeFilePreview\';\\n\\n> Here is a set of (useful in some way) scripts in different languages such as bash, powershell, etc.\\n\\n## Docker\\n\\n### Clean up docker\\n#### Shell\\n<CodeFilePreview url=\'https://raw.githubusercontent.com/p0nch0d3v/scripts-labs/master/docker_clean_up.sh\' urlDescription=\\"Download\\" lang=\\"bash\\" />\\n\\n---\\n#### Powershell\\n<CodeFilePreview url=\'https://raw.githubusercontent.com/p0nch0d3v/scripts-labs/master/docker_clean_up.ps1\' urlDescription=\\"Download\\" lang=\\"shell\\" />\\n\\n### Purge docker\\n#### Shell\\n<CodeFilePreview url=\'https://raw.githubusercontent.com/p0nch0d3v/scripts-labs/master/docker_purge_all.sh\' urlDescription=\\"Download\\" lang=\\"shell\\" />\\n\\n---\\n#### Powershell\\n<CodeFilePreview url=\'https://raw.githubusercontent.com/p0nch0d3v/scripts-labs/master/docker_purge_all.ps1\' urlDescription=\\"Download\\" lang=\\"shell\\" />"},{"id":"git-snippets","metadata":{"permalink":"/git-snippets","source":"@site/blog/2022-01-17-git-snippets.md","title":"Git snippets","description":"Here is a set of some git snippets, useful in some way.","date":"2022-01-17T00:00:00.000Z","formattedDate":"January 17, 2022","tags":[{"label":"git","permalink":"/tags/git"},{"label":"bash","permalink":"/tags/bash"},{"label":"sh","permalink":"/tags/sh"}],"hasTruncateMarker":false,"authors":[{"name":"p0nch0 d3v","title":"Software Developer","url":"https://github.com/p0nch0d3v","imageURL":"https://github.com/p0nch0d3v.png","key":"p0nch0d3v"}],"frontMatter":{"title":"Git snippets","slug":"git-snippets","tags":["git","bash","sh"],"authors":["p0nch0d3v"]},"prevItem":{"title":"Some scripts","permalink":"/some-scripts"},"nextItem":{"title":"Docker CLI\'s","permalink":"/docker-clis"}},"content":"> Here is a set of some git snippets, useful in some way.\\n\\n### Git log\\n```bash\\ngit log --pretty=oneline --abbrev-commit --graph\\ngit log --pretty --oneline --graph --abbrev-commit --relative-date\\n```\\n#### Create alias \\n```bash\\ngit config --global alias.graph-log \'log --pretty=oneline --abbrev-commit --graph\'\\ngit config --global alias.graph-log \'git log --pretty --oneline --graph --abbrev-commit --relative-date\'\\n```\\n---\\n### Git config user\\n```bash\\ngit config --local user.email \\"\\"\\ngit config --local user.name \\"\\"\\n```\\n\\n### Git hook\\n#### Git hook to validate branch name\\n```bash\\n#!/bin/sh\\nremote=\\"$1\\"\\nurl=\\"$2\\"\\nLC_ALL=C\\nlocal_branch=\\"$(git rev-parse --abbrev-ref HEAD)\\"\\nvalid_branch_regex=\\"^(main|master|develop|development|((feature|bugfix|bug-fix|bug|fix|release|hotfix|hot-fix)+\\\\/{1,1}[a-zA-Z0-9_.-]+))$\\"\\nmessage=\\"The branch name \\\\\\"$local_branch\\\\\\" is not correct. Branch names must accomplish the following convention: \\\\\\"$valid_branch_regex\\\\\\". The branch should be renamed a valid name and try again.\\"\\nif [[ ! $local_branch =~ $valid_branch_regex ]]\\nthen\\n    echo \\"$message\\"\\n    exit 1\\nfi\\nexit 0\\n```"},{"id":"docker-clis","metadata":{"permalink":"/docker-clis","source":"@site/blog/2021-10-15-my-docker-clis.md","title":"Docker CLI\'s","description":"A collection of custom docker images as CLI\'s","date":"2021-10-15T00:00:00.000Z","formattedDate":"October 15, 2021","tags":[{"label":"docker","permalink":"/tags/docker"},{"label":"bash","permalink":"/tags/bash"},{"label":"python","permalink":"/tags/python"},{"label":"dotNetCore","permalink":"/tags/dot-net-core"},{"label":"node-js","permalink":"/tags/node-js"}],"hasTruncateMarker":true,"authors":[{"name":"p0nch0 d3v","title":"Software Developer","url":"https://github.com/p0nch0d3v","imageURL":"https://github.com/p0nch0d3v.png","key":"p0nch0d3v"}],"frontMatter":{"title":"Docker CLI\'s","slug":"docker-clis","tags":["docker","bash","python","dotNetCore","node-js"],"authors":["p0nch0d3v"]},"prevItem":{"title":"Git snippets","permalink":"/git-snippets"}},"content":"## A collection of custom docker images as CLI\'s\\n\\nThere was a need to run different technologies in local dev environment, such as .net-core, node js, python, ruby, etc. without install them.\\n\\nA decision mas made to create a set of docker images with some pre-installed apps/plugins/extensions according to the technology to help with the development process.\\n\\n\x3c!--truncate--\x3e\\n\\n## dotnet core with entity framework\\n### Docker image:\\n> [https://hub.docker.com/r/p0nch0d3v/dotnet-sdk/tags](https://hub.docker.com/r/p0nch0d3v/dotnet-sdk/tags)\\n### Repository:\\n> [https://github.com/p0nch0d3v/docker-images/blob/master/dotnet-sdk/Dockerfile](https://github.com/p0nch0d3v/docker-images/blob/master/dotnet-sdk/Dockerfile)\\n### How to use it\\n```bash\\ndocker run --rm --interactive --tty --volume ${PWD}:/app p0nch0d3v/dotnet-sdk bash\\n```\\n\\n## dotnet core with entity framework and node-js\\n### Docker image:\\n> [https://hub.docker.com/r/p0nch0d3v/dotnet-sdk-node/tags](https://hub.docker.com/r/p0nch0d3v/dotnet-sdk-node/tags)\\n### Repository:\\n> [https://github.com/p0nch0d3v/docker-images/blob/master/dotnet-sdk-node/Dockerfile](https://github.com/p0nch0d3v/docker-images/blob/master/dotnet-sdk-node/Dockerfile)\\n### How to use it:\\n```bash\\ndocker run --rm --interactive --tty --volume ${PWD}:/app p0nch0d3v/dotnet-sdk-node bash\\n```"}]}')}}]);