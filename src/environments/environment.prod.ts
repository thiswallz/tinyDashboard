export const environment = {
  production: true,
  intervalTime: 50000,
  //baseUrl: document.getElementsByTagName('base')[0].href,
  baseUrl: 'http://localhost:50004/api/',
  // version: `${require('package.json').version}t`,
  location: {
    cfrom: -1000 * 60 * 60 * 48,
    cto: 1000 * 60 * 60 * 2
  }
};
