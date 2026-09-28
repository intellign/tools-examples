import { qr } from '@intellign/tools';

const payload = qr.payload({
  type: 'wifi',
  ssid: 'Studio',
  password: 'example',
  security: 'WPA'
});

console.log(payload);
