"use strict";(self.webpackChunkblog=self.webpackChunkblog||[]).push([[450],{6029:function(e){e.exports=JSON.parse('{"blogPosts":[{"id":"my-docker-clis","metadata":{"permalink":"/my-docker-clis","source":"@site/blog/2021-10-15-my-docker-clis.md","title":"My docker CLI\'s","description":"A collection of custom docker images as CLI\'s","date":"2021-10-15T00:00:00.000Z","formattedDate":"October 15, 2021","tags":[{"label":"docker","permalink":"/tags/docker"},{"label":"bash","permalink":"/tags/bash"},{"label":"python","permalink":"/tags/python"},{"label":"dotNetCore","permalink":"/tags/dot-net-core"},{"label":"node-js","permalink":"/tags/node-js"}],"truncated":true,"authors":[{"name":"Sneaky Koder","title":"Software Developer","url":"https://github.com/sneakykoder","imageURL":"https://github.com/sneakykoder.png","key":"sneakykoder"}]},"content":"## A collection of custom docker images as CLI\'s\\n\\nI had the need to run different technologies in my local dev environment, such as .net-core, node js, python, ruby, etc. without install them.\\n\\nSo I took the decision to create a set of docker images with some pre-installed apps/plugins/extensions according to the technology to help with the development process.\\n\\n\x3c!--truncate--\x3e\\n\\n## python:3\\n### Docker image:\\n> [https://hub.docker.com/r/sneakykoder/python-cli](https://hub.docker.com/r/sneakykoder/python-cli).\\n### Repository: \\n> [https://github.com/sneakykoder/python-cli](https://github.com/sneakykoder/python-cli)\\n### How to use it:\\n```bash\\ndocker run --rm --interactive --tty --volume ${PWD}:/app sneakykoder/python-cli:3 bash\\n```\\n\\n## dotnet core with entity framework\\n### Docker image:\\n> [https://hub.docker.com/r/sneakykoder/dotnet-cli/tags](https://hub.docker.com/r/sneakykoder/dotnet-cli/tags)\\n### Repository:\\n> [https://github.com/sneakykoder/dotnet-cli](https://github.com/sneakykoder/dotnet-cli) \\n### How to use it\\n```bash\\ndocker run --rm --interactive --tty --volume ${PWD}:/app sneakykoder/dotnet-cli bash\\n```\\n\\n## dotnet core with entity framework and node-js\\n### Docker image:\\n> [https://hub.docker.com/r/sneakykoder/dotnet-node-cli](https://hub.docker.com/r/sneakykoder/dotnet-node-cli)\\n### Repository:\\n> [https://github.com/sneakykoder/dotnet-node-cli](https://github.com/sneakykoder/dotnet-node-cli)\\n### How to use it:\\n```bash\\ndocker run --rm --interactive --tty --volume ${PWD}:/app sneakykoder/dotnet-node-cli bash\\n```"}]}')}}]);