
import React from 'react';

const testimonials = [
  {
    name: "Alex Rivera",
    handle: "@arivera_creative",
    text: "Lumina has completely removed the guesswork from my thumbnail design. The AI analysis is spooky accurate!",
    img: "https://picsum.photos/100/100?random=1"
  },
  {
    name: "Sarah Chen",
    handle: "@schen_visuals",
    text: "Being able to compare my work against competitors in real YouTube UI has bumped my CTR by 4% in just a month.",
    img: "https://picsum.photos/100/100?random=2"
  },
  {
    name: "Marcus Thorne",
    handle: "@thornegaming",
    text: "The collaboration tools are top-tier. My editor and I communicate 5x faster now. Highly recommended.",
    img: "https://picsum.photos/100/100?random=3"
  },
  {
    name: "Elena Rossi",
    handle: "@rossi_vlogs",
    text: "Finally, a tool that respects a creator's workflow. It's clean, fast, and gorgeous in dark mode.",
    img: "https://picsum.photos/100/100?random=4"
  },
  {
    name: "Jake Miller",
    handle: "@jmiller_tech",
    text: "The ROI on the Business plan was immediate. My team is more aligned than ever.",
    img: "https://picsum.photos/100/100?random=5"
  },
  {
    name: "Sophie Park",
    handle: "@sophie_edit",
    text: "I use Lumina every single day. It's the secret weapon in my creative arsenal.",
    img: "https://picsum.photos/100/100?random=6"
  }
];

const Testimonials: React.FC = () => {
  return (
    <section id="testimonials" className="py-32 px-6 max-w-7xl mx-auto">
      <div className="text-center mb-20">
        <h2 className="text-[60px] font-bold mb-6">Loved by Creators</h2>
        <p className="text-xl text-white/50">Join thousands of professional creators elevating their game.</p>
      </div>

      <div className="columns-1 md:columns-2 lg:columns-3 gap-6 space-y-6">
        {testimonials.map((t, i) => (
          <div key={i} className="break-inside-avoid bg-gray-900/50 border border-white/5 rounded-3xl p-8 hover:border-primary/30 transition-all group">
            <div className="flex items-center gap-4 mb-6">
              <img src={t.img} alt={t.name} className="w-12 h-12 rounded-full border-2 border-white/10" />
              <div>
                <p className="font-bold">{t.name}</p>
                <p className="text-primary text-sm font-semibold">{t.handle}</p>
              </div>
            </div>
            <p className="text-white/60 leading-relaxed mb-6">"{t.text}"</p>
            <div className="flex gap-1 text-secondary">
              {[...Array(5)].map((_, j) => (
                <svg key={j} className="w-4 h-4 fill-current" viewBox="0 0 20 20">
                  <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                </svg>
              ))}
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Testimonials;
