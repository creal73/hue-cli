import { Command, flags } from '@oclif/command';
import { turnOff, getAllLights } from '../service-api';
import { prompt } from 'enquirer';

export default class Off extends Command {
  static description = 'describe the command here';

  static flags = {
    help: flags.help({ char: 'h' }),
    // flag with a value (-n, --name=VALUE)
    name: flags.string({ char: 'n', description: 'name to print' }),
    // flag with no value (-f, --force)
    force: flags.boolean({ char: 'f' }),
  };

  static args = [{ name: 'deviceId' }];

  async run() {
    const { args } = this.parse(Off);

    if (args && args.deviceId) {
      await turnOff(args.deviceId);
    } else {
      const choices = (await getAllLights()).map((device) => ({
        name: device.name,
        value: device.id,
      }));

      await prompt({
        type: 'multiselect',
        name: 'devices',
        choices: choices,
        message: 'Which device(s) would you like to turn on ?',
        // To get the value of the selected 'name'. see: https://github.com/enquirer/enquirer/blob/master/examples/multiselect/option-result.js
        result(devices) {
          return this.map(devices);
        },
      })
        .then((response: any) => {
          if (response && response.devices) {
            Object.values<string>(response.devices).map(async (value) => {
              await turnOff(value);
            });
          }
        })
        .catch(console.error);
    }
  }
}
