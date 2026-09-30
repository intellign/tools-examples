# Intellign Tools — Examples

Practical examples for **Intellign Tools**: browser-first utilities for images, audio, QR payloads, and embeddable everyday tools.

- Tools: https://tools.intellign.us
- Developers: https://tools.intellign.us/developers
- Embeds: https://tools.intellign.us/embed
- npm: https://www.npmjs.com/package/@intellign/tools
- Intellign: https://intellign.us

## Install

```bash
npm install @intellign/tools
```

## Images

```ts
import { images } from '@intellign/tools';

const compressed = await images.compress(file, { maxSize: '500kb' });
const resized = await images.resize(file, { width: 1200 });
const webp = await images.convert(file, { format: 'webp' });
const avatar = await images.prepare(file, { use: 'avatar' });
```

Image APIs run in the browser and require modern browser primitives including `File`, `createImageBitmap`, and Canvas. Compression keeps the original file unless processing produces a strictly smaller result.

## Audio

Audio V1 is available today as browser-first hosted tools. Audio is **not yet part of the `@intellign/tools` SDK API**, so these examples use the canonical Intellign Tools surfaces rather than pretending an npm export exists.

- BPM + Key Finder — https://tools.intellign.us/bpm-key-finder
- Audio Converter — https://tools.intellign.us/audio-converter
- Audio Compressor — https://tools.intellign.us/audio-compressor
- Master Check — https://tools.intellign.us/master-check

For compact integrations, append `?compact` to a canonical tool URL. The hosted audio implementation keeps the audio file on-device; the converter/compressor lazily loads its browser codec when needed.

## QR payloads

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
- `examples/qr-payload.mjs` — QR payload generation
- `examples/embed.html` — drop-in hosted tool\n- `examples/audio-embed.html` — hosted Audio V1 compact integrations

## Repository boundary

This repository contains **examples and integration guidance**, not the proprietary Intellign Tools SDK source.

`@intellign/tools` is proprietary software from **Intellign LLC**. Public availability on npm does not make the SDK open source. Production, commercial, redistribution, embedding, or other use beyond evaluation requires permission or applicable terms from Intellign LLC.

The snippets here demonstrate integration and do not supersede the terms distributed with `@intellign/tools`.

For permissions and licensing information, visit https://intellign.us.

---

Made in New York by **Intellign LLC**.  
**Experience inspiring technology.**
