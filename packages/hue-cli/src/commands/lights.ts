import { Command, flags } from '@oclif/command';
import { getAllLights } from '../service-api';

export default class Lights extends Command {
  static description = 'list all available lights';

  static flags = {
    help: flags.help({ char: 'h' }),
  };

  static args = [];

  async run() {
    const lights = await getAllLights();
    lights.forEach((light) => {
      console.log(`● [${light.id}] ${light.name}`);
    });
  }
}
