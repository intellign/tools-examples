# Intellign Tools — Examples

Practical examples for **Intellign Tools**: local-first utilities and developer integrations for images, audio inspection, QR payloads, and embeddable everyday tools.

- Tools: https://tools.intellign.us
- Developers: https://tools.intellign.us/developers
- Docs: https://tools.intellign.us/docs
- Embeds: https://tools.intellign.us/embed
- npm: https://www.npmjs.com/package/@intellign/tools
- Flutter/Dart: https://pub.dev/packages/intellign_tools
- Python: https://pypi.org/project/intellign-tools/
- Intellign: https://intellign.us

## JavaScript / TypeScript

Current example target: `@intellign/tools@0.2.4`.

```bash
npm install @intellign/tools
```

### Images

```ts
import { images } from '@intellign/tools';

const compressed = await images.compress(file, { maxSize: '500kb' });
const resized = await images.resize(file, { width: 1200 });
const webp = await images.convert(file, { format: 'webp' });
const avatar = await images.prepare(file, { use: 'avatar' });
```

Image APIs run in the browser and require modern browser primitives including `File`, `createImageBitmap`, and Canvas. Compression keeps the original file unless processing produces a strictly smaller result.

### Audio SDK foundation

`@intellign/tools@0.2.4` includes dependency-free audio inspection helpers. It does **not** expose the hosted BPM/key estimator or FFmpeg converter/compressor as npm APIs.

```ts
import { audio } from '@intellign/tools';

const detected = audio.kind({ name: 'master.wav', type: 'audio/wav' });
const isAudio = audio.isAudio({ name: 'master.wav', type: 'audio/wav' });

const bytes = await file.arrayBuffer();
const wav = audio.inspectWav(bytes);

const peak = audio.samplePeakDbfs([
  new Float32Array([0, 0.25, -0.5]),
  new Float32Array([0, 0.2, -0.4])
]);

console.log({ detected, isAudio, wav, peak });
```

Hosted Audio V1 remains available at:

- BPM + Key Finder — https://tools.intellign.us/bpm-key-finder
- Audio Converter — https://tools.intellign.us/audio-converter
- Audio Compressor — https://tools.intellign.us/audio-compressor
- Master Check — https://tools.intellign.us/master-check

For compact hosted integrations, append `?compact` to a canonical tool URL. Working audio stays on-device; converter/compressor runtime codecs may be loaded when needed.

### QR payloads

```ts
import { qr } from '@intellign/tools';

const value = qr.payload({
  type: 'wifi',
  ssid: 'Studio',
  password: 'example',
  security: 'WPA'
});
```

QR payload generation is dependency-free. Artwork rendering is not part of the first SDK surface.

## Flutter / Dart

The Dart package is published as `intellign_tools`. Current prerelease: `0.1.0-dev.2`.

```yaml
dependencies:
  intellign_tools: ^0.1.0-dev.2
```

See the package documentation on pub.dev for the current Dart API and compatibility notes.

## Python / Kivy

The framework-neutral Python package is published as `intellign-tools`. Current prerelease: `0.1.0.dev3`.

```bash
pip install intellign-tools==0.1.0.dev3
```

It can be used from Kivy, Django, Flask, FastAPI, scripts, and other Python runtimes. “Local” for Python means processing in the Python runtime/workstation, not in the browser.

## Embed Intellign Tools

```html
<script src="https://tools.intellign.us/intellign-tool.js"></script>

<intellign-tool
  tool="compress-image"
  max-size="500"
  format="webp">
</intellign-tool>
```

See live integration guidance at https://tools.intellign.us/embed.

## Examples

- `examples/browser-image.ts` — browser image processing
- `examples/audio-sdk.ts` — npm audio inspection helpers
- `examples/qr-payload.mjs` — QR payload generation
- `examples/embed.html` — drop-in hosted tool
- `examples/audio-embed.html` — hosted Audio V1 compact integrations

## Capability boundary

The website, hosted embeds, and language SDKs do not necessarily expose identical capabilities. The canonical developer documentation at https://tools.intellign.us/docs describes the supported surface for each integration path. Examples here intentionally avoid presenting hosted-only capabilities as npm APIs.

## Repository boundary

This repository contains **examples and integration guidance**, not the proprietary Intellign Tools SDK source.

Intellign Tools SDK packages are proprietary software from **Intellign LLC**. Public availability on npm, pub.dev, or PyPI does not make the SDKs open source. Production, commercial, redistribution, embedding, or other use beyond evaluation requires permission or applicable terms from Intellign LLC.

The snippets here demonstrate integration and do not supersede the terms distributed with the SDK packages.

For permissions and licensing information, visit https://intellign.us.

---

Made in New York by **Intellign LLC**.  
**Experience inspiring technology.**
