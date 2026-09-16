import Hls from 'hls.js';

export function attachHls(video: HTMLVideoElement, source: string): () => void {
  if (Hls.isSupported()) {
    const hls = new Hls({ enableWorker: true });
    hls.loadSource(source);
    hls.attachMedia(video);
    return () => hls.destroy();
  }
  if (video.canPlayType('application/vnd.apple.mpegurl')) {
    video.src = source;
  }
  return () => undefined;
}
