const videoProofLinks = [
  { url: 'https://youtu.be/xF0EOAfciao', title: 'Runtime Gurus client results — channel growth proof 1' },
  { url: 'https://youtu.be/WnmGxazwK1w', title: 'Runtime Gurus client results — channel growth proof 2' },
  { url: 'https://youtu.be/A3qqOae4xLE', title: 'Runtime Gurus client results — channel growth proof 3' },
  { url: 'https://youtu.be/zf0JgHDkd14', title: 'Runtime Gurus client results — channel growth proof 4' },
  { url: 'https://youtu.be/RkKDcCY59cw', title: 'Runtime Gurus client results — channel growth proof 5' },
];

function toEmbedUrl(url: string): string {
  const youtubeMatch = url.match(
    /(?:youtube\.com\/(?:watch\?v=|shorts\/)|youtu\.be\/)([A-Za-z0-9_-]{11})/
  );
  if (youtubeMatch) return `https://www.youtube.com/embed/${youtubeMatch[1]}`;

  const vimeoMatch = url.match(/vimeo\.com\/(\d+)/);
  if (vimeoMatch) return `https://player.vimeo.com/video/${vimeoMatch[1]}`;

  const loomMatch = url.match(/loom\.com\/share\/([a-f0-9]+)/);
  if (loomMatch) return `https://www.loom.com/embed/${loomMatch[1]}`;

  return url;
}

export default function VideoProofs() {
  return (
    <section className="py-24 bg-[#06091C]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-14">
          <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-[var(--primary)]/10 border border-[var(--primary)]/30 text-purple-300 text-xs font-medium mb-4">
            <span className="w-1.5 h-1.5 rounded-full bg-purple-400 animate-pulse" />
            Video Proof
          </div>
          <h2 className="text-4xl sm:text-5xl font-bold tracking-tight text-white mb-4">
            Proof That Speaks for Itself
          </h2>
          <p className="text-[#94A3B8] text-lg max-w-xl mx-auto">
            Watch real proof, results, and client wins before making your decision.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {videoProofLinks.map(({ url, title }) => (
            <div
              key={url}
              className="rounded-2xl overflow-hidden bg-[#0B1230] border border-[#1A2548] hover:border-[var(--primary)]/40 transition-all duration-300 hover:shadow-lg hover:shadow-[var(--primary-glow)]"
            >
              <div className="relative w-full" style={{ paddingTop: '56.25%' }}>
                <iframe
                  src={toEmbedUrl(url)}
                  title={title}
                  className="absolute inset-0 w-full h-full"
                  allow="accelerometer; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                  allowFullScreen
                  loading="lazy"
                />
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
