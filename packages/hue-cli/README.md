# cli

A Command Line Interface to control Philips Hue lightning system.

[![oclif](https://img.shields.io/badge/cli-oclif-brightgreen.svg)](https://oclif.io)
[![Version](https://img.shields.io/npm/v/cli.svg)](https://npmjs.org/package/cli)
[![CircleCI](https://circleci.com/gh/creal73/cli/tree/master.svg?style=shield)](https://circleci.com/gh/creal73/cli/tree/master)
[![Downloads/week](https://img.shields.io/npm/dw/cli.svg)](https://npmjs.org/package/cli)
[![License](https://img.shields.io/npm/l/cli.svg)](https://github.com/creal73/cli/blob/master/package.json)

<!-- toc -->

- [Usage](#usage)
- [Commands](#commands)
<!-- tocstop -->

# Usage

<!-- usage -->

```sh-session
$ npm install -g hue-cli
$ hue COMMAND
running command...
$ hue (-v|--version|version)
hue-cli/0.0.0 linux-x64 node-v13.11.0
$ hue --help [COMMAND]
USAGE
  $ hue COMMAND
...
```

<!-- usagestop -->

# Commands

<!-- commands -->

- [`hue config [RESET]`](#hue-config-reset)
- [`hue help [COMMAND]`](#hue-help-command)
- [`hue lights`](#hue-lights)
- [`hue off [FILE]`](#hue-off-file)
- [`hue on [DEVICEID]`](#hue-on-deviceid)

## `hue config [RESET]`

set up the configuration needed to access Hue API

```
USAGE
  $ hue config [RESET]

OPTIONS
  -b, --bridge=bridge  address of the Hue Bridge
  -h, --help           show CLI help
  -t, --token=token    Hue API token
```

_See code: [src/commands/config.ts](https://github.com/creal73/hue-cli/blob/v0.0.0/src/commands/config.ts)_

## `hue help [COMMAND]`

display help for hue

```
USAGE
  $ hue help [COMMAND]

ARGUMENTS
  COMMAND  command to show help for

OPTIONS
  --all  see all commands in CLI
```

_See code: [@oclif/plugin-help](https://github.com/oclif/plugin-help/blob/v2.2.3/src/commands/help.ts)_

## `hue lights`

list all available lights

```
USAGE
  $ hue lights

OPTIONS
  -h, --help  show CLI help
```

_See code: [src/commands/lights.ts](https://github.com/creal73/hue-cli/blob/v0.0.0/src/commands/lights.ts)_

## `hue off [FILE]`

describe the command here

```
USAGE
  $ hue off [FILE]

OPTIONS
  -f, --force
  -h, --help       show CLI help
  -n, --name=name  name to print
```

_See code: [src/commands/off.ts](https://github.com/creal73/hue-cli/blob/v0.0.0/src/commands/off.ts)_

## `hue on [DEVICEID]`

describe the command here

```
USAGE
  $ hue on [DEVICEID]

OPTIONS
  -h, --help  show CLI help
```

_See code: [src/commands/on.ts](https://github.com/creal73/hue-cli/blob/v0.0.0/src/commands/on.ts)_

<!-- commandsstop -->
