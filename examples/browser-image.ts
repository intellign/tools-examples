import { images } from '@intellign/tools';

// Browser example: pass a File from an input or drag-and-drop interaction.
export async function makeWebsiteReady(file: File) {
  const resized = await images.resize(file, { width: 1600 });
  const intermediate = new File([resized.blob], file.name, { type: resized.format });
  return images.convert(intermediate, { format: 'webp' });
}
