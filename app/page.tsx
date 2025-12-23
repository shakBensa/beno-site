import Image from "next/image";

export default function Home() {
  const noteBlips = [
    { left: "8%", delay: "0s", duration: "14s" },
    { left: "22%", delay: "1.2s", duration: "16s" },
    { left: "34%", delay: "2.4s", duration: "15s" },
    { left: "46%", delay: "3.6s", duration: "18s" },
    { left: "58%", delay: "4.2s", duration: "17s" },
    { left: "72%", delay: "2.8s", duration: "16s" },
    { left: "84%", delay: "1.6s", duration: "15s" },
  ];

  const pianoBars = [
    { height: 60, delay: "0s", duration: "4.4s", variant: "white" }, // C
    { height: 40, delay: "0.2s", duration: "4.8s", variant: "black" }, // C#
    { height: 60, delay: "0.4s", duration: "4.5s", variant: "white" }, // D
    { height: 40, delay: "0.6s", duration: "4.9s", variant: "black" }, // D#
    { height: 60, delay: "0.8s", duration: "4.6s", variant: "white" }, // E
    { height: 60, delay: "1s", duration: "5s", variant: "white" }, // F
    { height: 40, delay: "1.2s", duration: "4.7s", variant: "black" }, // F#
    { height: 60, delay: "1.4s", duration: "4.6s", variant: "white" }, // G
    { height: 40, delay: "1.6s", duration: "4.3s", variant: "black" }, // G#
    { height: 60, delay: "1.8s", duration: "4.5s", variant: "white" }, // A
    { height: 40, delay: "2s", duration: "4.2s", variant: "black" }, // A#
    { height: 60, delay: "2.2s", duration: "4.6s", variant: "white" }, // B
  ];

  const portfolioLinks = [
    {
      title: "Short Film",
      href: "https://www.youtube.com/watch?v=3Z8WNX_wyXk",
      label: "Film & TV",
      desc: "Layered arrangements and live takes built for picture.",
      thumb: "https://img.youtube.com/vi/3Z8WNX_wyXk/hqdefault.jpg",
    },
    {
      title: "Dialogue & Drama",
      href: "https://www.youtube.com/watch?v=CHZBo87pBQc",
      label: "Film & TV",
      desc: "Melodic cues with electronic textures and hand-played parts.",
      thumb: "https://img.youtube.com/vi/CHZBo87pBQc/hqdefault.jpg",
    },
    {
      title: "Opening Title",
      href: "https://www.youtube.com/watch?v=FDV5LosxK6c",
      label: "Film & TV",
      desc: "Percussive beds and atmospheric leads for screen moments.",
      thumb: "https://img.youtube.com/vi/FDV5LosxK6c/hqdefault.jpg",
    },
  ];

  return (
    <div className="relative min-h-screen overflow-hidden bg-zinc-950 text-zinc-100">
      <div className="pointer-events-none absolute inset-0 overflow-hidden">
        <div className="absolute -left-12 top-6 h-64 w-64 rounded-full bg-amber-300/20 blur-3xl" />
        <div className="absolute right-10 top-28 h-80 w-80 rounded-full bg-amber-300/20 blur-3xl" />
        <div className="absolute left-1/3 bottom-0 h-72 w-72 rounded-full bg-lime-300/10 blur-3xl" />
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_top,_rgba(255,255,255,0.05),_transparent_50%)]" />
        <div className="beat-grid" />
        <div className="absolute inset-0">
          {noteBlips.map((note) => (
            <span
              key={note.left}
              className="note-blip"
              style={{
                left: note.left,
                animationDelay: note.delay,
                animationDuration: note.duration,
              }}
            >
              ♪
            </span>
          ))}
        </div>
        <div className="absolute inset-x-6 bottom-10 flex justify-center gap-1 md:gap-2.5">
          {pianoBars.map((bar) => (
            <span
              key={`${bar.height}-${bar.delay}`}
              className={`piano-bar ${bar.variant === "black" ? "piano-bar--black" : ""}`}
              style={
                {
                  height: `${bar.height}px`,
                  animationDelay: bar.delay,
                  ["--bar-speed"]: bar.duration,
                } as React.CSSProperties
              }
            />
          ))}
        </div>
      </div>

      <main className="relative z-10 mx-auto max-w-6xl px-6 py-16 sm:px-10 lg:px-12">
        <header className="flex flex-col items-center gap-8 text-center">
          <p className="text-xs font-semibold uppercase tracking-[0.3em] text-amber-200">
            Ben Rijkmans — Beno
          </p>

          <div
            className="relative w-full max-w-4xl overflow-hidden rounded-[28px] border border-white/10 bg-white/5 shadow-2xl"
            style={{ aspectRatio: "16 / 9" }}
          >
            <div className="absolute inset-0 bg-gradient-to-t from-zinc-950 via-zinc-950/10 to-transparent" />
            <Image
              src="/image/a.jpeg"
              alt="Ben Rijkmans performing"
              fill
              sizes="(min-width: 1024px) 900px, 100vw"
              className="object-cover"
              priority
            />
          </div>

            <div className="space-y-4 text-center">
              <h1 className="font-display text-4xl font-semibold leading-tight sm:text-5xl">
                Ben Rijkmans
              </h1>
            </div>

          <div className="flex flex-wrap justify-center gap-4 text-center">
            <a
              href="mailto:Benrijkmans@gmail.com?subject=Booking%20inquiry%20for%20Beno"
              className="rounded-full bg-amber-300 px-6 py-3 text-sm font-semibold uppercase tracking-wide text-zinc-900 transition hover:-translate-y-0.5 hover:shadow-[0_10px_40px_-15px_rgba(255,214,102,0.9)]"
            >
              Book Beno
            </a>
            <a
              href="#filmTV"
              className="rounded-full border border-white/20 px-6 py-3 text-sm font-semibold uppercase tracking-wide text-zinc-100 transition hover:-translate-y-0.5 hover:border-amber-200 hover:text-amber-200"
            >
              Watch & listen
            </a>
          </div>
        </header>
        <section className="mt-16 text-center">
          <div className="rounded-3xl border border-white/10 bg-white/5 p-8 shadow-xl">
            <p className="text-xs font-semibold uppercase tracking-[0.25em] text-amber-200">
              Story
            </p>
            <div className="mt-4 space-y-4 text-lg text-zinc-200">
              <p>
                Ben Rijkmans is a multi-instrumentalist with two decades in the
                trenches—keys, guitars, bass, and drums always within reach,
                writing with his hands before a laptop even powers on.
              </p>
              <p>
                He trusts muscle memory and feel over theory—obsessing over
                chord colors, progressions, and rhythm pockets. Sampling,
                building from scratch, and synth dives keep every cue tactile
                but cinematic.
              </p>
              <p>
                Live drums, guitar layers, and synth leads get stitched into
                grooves that stay human and hooky—fit for film, TV, or any room
                that needs to move.
              </p>
            </div>
          </div>
        </section>

        <section
          id="filmTV"
          className="mt-16 scroll-mt-24 rounded-3xl border border-white/10 bg-white/5 p-8 shadow-xl"
        >
          <div className="flex flex-wrap items-center justify-center gap-3 text-center">
            <p className="text-xs font-semibold uppercase tracking-[0.25em] text-amber-200">
              Film & TV
            </p>
          </div>

          <div className="mt-6 space-y-10">
            <div className="space-y-3">
              <p className="text-sm text-center text-zinc-300">
                Selected work for screen—video reels and soundtrack cues.
              </p>
            </div>

            <div className="space-y-4">
              <div className="grid gap-4 md:grid-cols-3">
                {portfolioLinks.map((item) => (
                  <a
                    key={item.title}
                    href={item.href}
                    className="flex flex-col justify-between rounded-2xl border border-white/10 bg-zinc-900/60 p-5 transition hover:-translate-y-1 hover:border-amber-200/70"
                    rel="noopener noreferrer"
                    target="_blank"
                  >
                    <div>
                      {item.thumb && (
                        <div className="relative mb-4 h-40 overflow-hidden rounded-xl border border-white/10">
                          <Image
                            src={item.thumb}
                            alt={`${item.title} thumbnail`}
                            fill
                            sizes="(min-width: 768px) 300px, 100vw"
                            className="object-cover"
                          />
                        </div>
                      )}
                      <h4 className="text-xl font-semibold text-zinc-100">
                        {item.title}
                      </h4>
                      <p className="mt-2 text-sm text-zinc-300">{item.desc}</p>
                    </div>
                  </a>
                ))}
              </div>
            </div>

            <div className="space-y-3 rounded-2xl p-5 shadow-inner">
              <p className="text-sm text-center font-semibold uppercase tracking-[0.25em] text-amber-200">
                Audio
              </p>
              <p className="text-sm text-center text-zinc-300">
                Music for TV and Film — curated cues and beds built for picture.
              </p>
              <div className="overflow-hidden rounded-xl border border-white/10 bg-black">
                <iframe
                  title="SoundCloud — Music for TV and Film"
                  width="100%"
                  height="520"
                  scrolling="no"
                  frameBorder="no"
                  allow="autoplay"
                  src="https://w.soundcloud.com/player/?url=https%3A//soundcloud.com/benrijkmans/sets/music-for-tv-and-film&color=%23facc15&inverse=false&auto_play=false&show_user=true&show_reposts=false&show_teaser=true"
                />
              </div>
              
            </div>
          </div>
        </section>

        <section
          id="music"
          className="mt-16 scroll-mt-24 rounded-3xl border border-white/10 bg-white/5 p-8 shadow-xl"
        >
          <div className="flex flex-wrap items-center justify-center gap-3 text-center">
            <p className="text-xs font-semibold uppercase tracking-[0.25em] text-amber-200">
              Music
            </p>
          </div>
          <div className="mt-4 space-y-4 text-center">
            <p className="text-sm text-zinc-300">
              Spotify highlights — stream Ben&apos;s releases and see current
              top tracks.
            </p>
            <div className="overflow-hidden rounded-2xl border border-white/10 bg-black shadow-inner">
              <iframe
                title="Spotify — Ben Rijkmans"
                src="https://open.spotify.com/embed/artist/16E5TsWDBVkGBFM2AftSFI?utm_source=generator"
                width="100%"
                height="520"
                frameBorder="0"
                allow="autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture"
                loading="lazy"
              />
            </div>
            <a
              href="https://open.spotify.com/artist/16E5TsWDBVkGBFM2AftSFI"
              className="inline-flex items-center gap-2 text-sm font-semibold text-amber-200 underline-offset-4 hover:underline"
            >
              Open on Spotify
              <span className="inline-flex h-2 w-2 animate-pulse rounded-full bg-amber-300" />
            </a>
          </div>
        </section>

        <section className="mt-16 grid gap-6 lg:grid-cols-[1.4fr_1fr]">
          <div className="rounded-3xl border border-white/10 bg-gradient-to-br from-amber-200 via-white to-amber-100 p-8 text-zinc-900 shadow-xl text-center">
            <p className="text-xs font-semibold uppercase tracking-[0.25em] text-zinc-700">
              Sound in one line
            </p>
            <h3 className="mt-4 text-3xl font-semibold leading-tight">
              Hand-played melodies, drum-machine grit, and synth color that
              stay human, heavy, and cinematic.
            </h3>
{/* 
            <div className="relative mx-auto mt-8 h-52 w-full max-w-xl overflow-hidden rounded-2xl border border-white/30 shadow-lg">
              <Image
                src="/image/c.jpg"
                alt="Beno in session"
                fill
                sizes="(min-width: 1024px) 500px, 100vw"
                className="object-cover"
                priority={false}
              />
            </div> */}
          </div>

          <div className="rounded-3xl border border-white/10 bg-white/5 p-8 text-center shadow-xl">
            <p className="text-xs font-semibold uppercase tracking-[0.25em] text-amber-200">
              Booking / press
            </p>
            <p className="mt-3 text-sm text-zinc-300">
              Send a date, budget, and technical setup. We respond within 24h
              with routing and stage plan options.
            </p>
            <div className="mt-5 space-y-2 text-base font-semibold text-zinc-100">
              <a
                href="mailto:Benrijkmans@gmail.com"
                className="block rounded-2xl border border-white/10 bg-white/5 px-4 py-3 transition hover:border-amber-200/70"
              >
                Benrijkmans@gmail.com
              </a>
            </div>

          </div>
        </section>

        <footer className="mt-16 flex flex-col gap-3 border-t border-white/10 pt-6 text-sm text-zinc-400 sm:flex-row sm:items-center sm:justify-between">
          <div className="flex items-center gap-3">
            <span className="flex h-9 w-9 items-center justify-center rounded-2xl bg-white/5 text-sm font-bold text-amber-200">
              B
            </span>
            <div>
              <p className="font-semibold text-zinc-100">Ben Rijkmans</p>
              <p className="text-xs uppercase tracking-[0.25em] text-zinc-500">
                Multi-instrumentalist 
              </p>
            </div>
          </div>
          <div className="flex items-center justify-center gap-3 text-zinc-100">
            <a
              href="https://www.instagram.com/beno_beats/"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex h-10 w-10 items-center justify-center rounded-full border border-white/10 bg-white/5 transition hover:border-amber-200 hover:text-amber-200"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 24 24"
                className="h-5 w-5"
                fill="currentColor"
              >
                <path d="M7.75 2h8.5A5.75 5.75 0 0 1 22 7.75v8.5A5.75 5.75 0 0 1 16.25 22h-8.5A5.75 5.75 0 0 1 2 16.25v-8.5A5.75 5.75 0 0 1 7.75 2Zm0 2A3.75 3.75 0 0 0 4 7.75v8.5A3.75 3.75 0 0 0 7.75 20h8.5A3.75 3.75 0 0 0 20 16.25v-8.5A3.75 3.75 0 0 0 16.25 4h-8.5ZM12 7.25A4.75 4.75 0 1 1 7.25 12 4.75 4.75 0 0 1 12 7.25Zm0 2A2.75 2.75 0 1 0 14.75 12 2.75 2.75 0 0 0 12 9.25Zm5.5-3.5a1.25 1.25 0 1 1-1.25 1.25A1.25 1.25 0 0 1 17.5 5.75Z" />
              </svg>
            </a>
            <a
              href="https://open.spotify.com/artist/16E5TsWDBVkGBFM2AftSFI?si=I7bHmNiwSuie6VgC5j55cw"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex h-10 w-10 items-center justify-center rounded-full border border-white/10 bg-white/5 transition hover:border-amber-200 hover:text-amber-200"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 24 24"
                className="h-5 w-5"
                fill="currentColor"
              >
                <path d="M12 2.25a9.75 9.75 0 1 1-9.75 9.75A9.76 9.76 0 0 1 12 2.25Zm0 1.5a8.25 8.25 0 1 0 8.25 8.25A8.26 8.26 0 0 0 12 3.75Zm3.87 10.52a.75.75 0 0 0-.6-1.38 14.82 14.82 0 0 1-6.77.84.75.75 0 0 0-.16 1.48 16.33 16.33 0 0 0 7.53-.94Zm.18-2.76a.75.75 0 0 0-.57-1.39 13.33 13.33 0 0 1-7.79.6.75.75 0 1 0-.32 1.47 14.84 14.84 0 0 0 8.68-.68Zm.15-2.78a.75.75 0 0 0-.5-1.41 12.14 12.14 0 0 1-8.63.41.75.75 0 1 0-.49 1.42 13.64 13.64 0 0 0 9.62-.42Z" />
              </svg>
            </a>
          </div>
        </footer>
      </main>
    </div>
  );
}
