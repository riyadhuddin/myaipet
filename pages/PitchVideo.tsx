import MuxPlayer from "@mux/mux-player-react";

export default function PitchVideo() {
  return (
    <section className="max-w-3xl mx-auto px-6 py-20">
      <h2 className="text-2xl font-semibold mb-4">
        1-Minute Project Overview
      </h2>

      <MuxPlayer
        playbackId="YOUR_PLAYBACK_ID"
        streamType="on-demand"
        controls
        className="rounded-xl"
        metadata={{
          video_title: "AI Pet – Project Pitch",
          viewer_user_id: "judge"
        }}
      />

      <p className="mt-4 text-sm text-gray-500">
        Hosted with Mux for fast, reliable playback across devices.
      </p>
    </section>
  );
}
