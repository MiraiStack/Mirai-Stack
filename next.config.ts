import type { NextConfig } from "next";
import { withSentryConfig } from "@sentry/nextjs";

const nextConfig: NextConfig = {
  /* config options here */
  reactCompiler: true,
};

export default withSentryConfig(nextConfig, {
  org: "mirai-stack",
  project: "javascript-nextjs",
  silent: true,
  widenClientFileUpload: true,
  // @ts-expect-error: requested by requirements
  hideSourceMaps: true,
  disableLogger: true,
});
