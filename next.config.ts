import type { NextConfig } from "next";
import { PHASE_DEVELOPMENT_SERVER } from "next/constants";

const createNextConfig = (phase: string): NextConfig => ({
  output: 'export',
  allowedDevOrigins: ["172.20.10.3", "192.168.1.101", "192.168.1.104", "192.168.1.105"],
  distDir: phase === PHASE_DEVELOPMENT_SERVER ? ".next-dev" : ".next",
  htmlLimitedBots: /.*/,
  poweredByHeader: false,
  experimental: {
    devtoolSegmentExplorer: false,
  },
  images: {
    unoptimized: true,
    remotePatterns: [
      {
        protocol: "https",
        hostname: "ozlemagdasalonu.com",
      },
    ],
  },
});

export default createNextConfig;
