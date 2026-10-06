import { audio } from '@intellign/tools';

const file = new File([], 'master.wav', { type: 'audio/wav' });

console.log('kind:', audio.kind(file));
console.log('is audio:', audio.isAudio(file));

// For a real WAV file:
// const wav = audio.inspectWav(await file.arrayBuffer());
// console.log(wav);

const peak = audio.samplePeakDbfs([
  new Float32Array([0, 0.25, -0.5]),
  new Float32Array([0, 0.2, -0.4])
]);

console.log(peak);
