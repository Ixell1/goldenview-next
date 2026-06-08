// Apartment teaser videos live on Vercel Blob (a separate CDN), NOT in the
// git repo or /public. This means deploys via `git push` AND `vercel --prod`
// both serve the videos — they no longer disappear when a plain git deploy
// ignores the gitignored /public/apt-videos folder.
//
// To re-upload / add a video: put the .mp4 in /public/apt-videos locally and
// run the blob upload (npm pkg @vercel/blob + BLOB_READ_WRITE_TOKEN), then add
// its id here. The /public copies stay gitignored and are only the source for
// uploads.
const BLOB_BASE = 'https://nii8iw9w4iaqm1ot.public.blob.vercel-storage.com/apt-videos';

export const APT_VIDEOS: Record<string, string> = {
  a1: `${BLOB_BASE}/a1.mp4`,
  a2: `${BLOB_BASE}/a2.mp4`,
  b2: `${BLOB_BASE}/b2.mp4`,
  b3: `${BLOB_BASE}/b3.mp4`,
  b4: `${BLOB_BASE}/b4.mp4`,
  b5: `${BLOB_BASE}/b5.mp4`,
  b6: `${BLOB_BASE}/b6.mp4`,
  b7: `${BLOB_BASE}/b7.mp4`,
  c1: `${BLOB_BASE}/c1.mp4`,
  c2: `${BLOB_BASE}/c2.mp4`,
  c3: `${BLOB_BASE}/c3.mp4`,
  c4: `${BLOB_BASE}/c4.mp4`,
};

// Resolve a video by apartment id (case-insensitive). Returns undefined if none.
export function videoFor(id: string): string | undefined {
  return APT_VIDEOS[id.toLowerCase()];
}
