[![npm (scoped)](https://img.shields.io/npm/v/@0xc/maverick)](https://www.npmjs.com/package/@0xc/maverick) [![npm](https://img.shields.io/npm/dt/@0xc/maverick)](https://www.npmjs.com/package/@0xc/maverick) [![Build Status](https://travis-ci.org/tcarrio/maverick.svg?branch=master)](https://travis-ci.org/tcarrio/maverick) [![GitHub issues](https://img.shields.io/github/issues/tcarrio/maverick)](https://github.com/tcarrio/maverick/issues) [![GitHub pull requests](https://img.shields.io/github/issues-pr/tcarrio/maverick)](https://github.com/tcarrio/maverick/pulls) [![Greenkeeper badge](https://badges.greenkeeper.io/tcarrio/maverick.svg)](https://greenkeeper.io/) ![Libraries.io dependency status for GitHub repo](https://img.shields.io/librariesio/github/tcarrio/maverick)

# Maverick

## Usage

```
Usage: maverick [action]

Command your arsenal of Docker containers for ultimate development

Options:
  -V, --version                         output the version number
  -b, --build                           build all or certain services in the docker-compose.yml
  -d, --down                            take down all or certain services in the docker-compose.yml
  -u, --up                              launch a certain or all of the database, redis, and services
  -r, --restart                         restart service name(s)
  -R, --reload                          reload services with updates to env_file and docker-compose.yml
  -s, --setup                           runs the setup script provided by the project (default: false)
  -l, --list [filter]                   list services currently defined for local development
  -p, --ps                              List existing containers
  -n, --ngrok [subdomain] [auth_token]  Persist your subdomain and auth token to the Maverick config
  -g, --generate                        Generate a new Docker Compose using the maverick.yml config
  -i, --init                            Initialize a Maverick configuration in the current directory
  -h, --help                            output usage information
```

## Description

This project offers a configurable and dynamic solution for a local development environment driven
by containerized technologies. This version institutes an optional `maverick.yml` configuration
that goes in the root directory of the project. The `maverick.yml` offers functionality into the
dynamically generated `docker-compose.yml` buffer that is used for the internal `docker.compose`
commands. It segments Docker Compose services into the following categories:

- images
- infrastructure
- batch
- packages
- services

## Images

Images exist only as a means of generating a required Docker image that can be referenced later.

## Infrastructure

Infrastructure automatically connects to the global generated network, and should be used for
definitions that orient around databases, message buses, etc. There are also certain infrastructure
services that are supported out of the box. To use the default configuration for a builtin infrastructure,
simply specific the key with a null, e.g. `mysql:`. Any provided configurations will be joined with
the defaults, so to set up a database with a specific root password, you only need to specify the
environment variable for the password under the `mysql.environment:` entry.

## Batch

Some operations only need to be done once. The batch category is a good location for putting in
one-off operations such as database updates, migrations, and more.

## Packages / Services

Packages are Docker Compose services that serve only to watch for source code changes to transpile.
On the other hand, services incorporate the transpiled source of dependencies. Only direct dependencies
are mounted to a service, providing a central location for packages to watch for changes and update when
a direct dependency is impacted by a source code change.

Most importantly, the best way to get started with your project is to include the supported commands
for automatic detection of packages/services by Maverick. Just add an `npm` script to get started.
With packages, add `maverick:watch`. For services, add `maverick:start`. These will be detected when
processing your monorepository for packages and automatically fulfilled as packages and services to be
included in the Docker Compose.

## Features

Initialize your project with `maverick -i`. This will generate the default Maverick configuration.

Launch the fleet of containers with `maverick -u`. This can also receive individual service names.

Restart a service or the entire fleet with `maverick -r`. For changes to environment variables, use
the reload (`-R`) option. Since the environment variables are bound at the creation of the container, only
destroying the existing container and creating a new one will provide the updated environment variables.

Tear everything down with `maverick -d`. Applies to individual services as well.

Build any or all image again with `maverick -b`. Because the image themselves contain the dependencies,
Maverick performs some deterministic magic using the dependencies specified in the `package.json` and image
tags. Thus, a rebuild will happen automatically whenever you are _reloading_ services. An easy way to make
sure you have the latest dependencies is to reload your services.

## Future Goals

- Separate major features into separate subcommands of `maverick`
- More robust `package` and `service` declarations in the project config
