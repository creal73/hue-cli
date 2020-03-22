import config from './configuration';
import fetch from 'node-fetch';

const baseUri = `http://${config.get('bridge')}/api/${config.get('token')}`;

const routes = {
  lights: () => `${baseUri}/lights`,
  on: (id: string) => `${baseUri}/lights/${id}/state`,
};

function getAllLights() {
  return fetch(routes.lights())
    .then((response) => response.json())
    .then((result) => Object.entries(result))
    .then((result) =>
      result.map(([id, value]: any) => ({ id, name: value.name }))
    );
}

function turnOn(id: string) {
  return fetch(routes.on(id), {
    method: 'PUT',
    body: JSON.stringify({ on: true }),
  });
}

function turnOff(id: string) {
  return fetch(routes.on(id), {
    method: 'PUT',
    body: JSON.stringify({ on: false }),
  });
}

export { getAllLights, turnOn, turnOff };
