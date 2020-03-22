import { Command, flags } from '@oclif/command';
import { prompt } from 'enquirer';

import config from '../configuration';

export default class Config extends Command {
  static description = 'set up the configuration needed to access Hue API';

  static flags = {
    help: flags.help({ char: 'h' }),
    bridge: flags.string({
      char: 'b',
      description: 'address of the Hue Bridge',
    }),
    token: flags.string({
      char: 't',
      description: 'Hue API token',
    }),
  };

  static args = [
    {
      name: 'reset',
    },
  ];

  async run() {
    const { args, flags } = this.parse(Config);

    if (args && args.reset) {
      config.clear();
      return;
    }

    await this.configureBridgeAddress(flags);
    await this.configureAPIToken(flags);
  }

  private async configureBridgeAddress(flags: any) {
    let bridge = '';

    if (flags.bridge) {
      bridge = flags.bridge;
      config.set('bridge', flags.bridge);
    } else {
      await prompt({
        type: 'input',
        name: 'bridge',
        message: 'What is the address of your Bridge ?',
        required: true,
        initial: config.get('bridge'),
      })
        .then((result: any) => {
          bridge = result.bridge;
          config.set('bridge', result.bridge);
        })
        .catch(console.error)
        .finally(() =>
          console.log('You can specify this with --bridge flag in future')
        );
    }

    return bridge;
  }

  private async configureAPIToken(flags: any) {
    let token = '';

    if (flags.token) {
      token = flags.token;
      config.set('token', flags.token);
    } else {
      await prompt({
        type: 'input',
        name: 'token',
        message: 'What is your Hue API token ?',
        required: true,
        initial: config.get('token'),
      })
        .then((result: any) => {
          token = result.token;
          config.set('token', result.token);
        })
        .catch(console.error)
        .finally(() =>
          console.log('You can specify this with --token flag in future')
        );
    }

    return token;
  }
}
