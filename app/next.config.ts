const isProd = process.env.NEXT_PUBLIC_DEPLOY_ENV === "production";

const nextConfig = {
  assetPrefix: isProd
    ? "https://indianapoly.github.io/react-animation-typing-text/"
    : undefined,
  basePath: isProd ? "/react-animation-typing-text" : undefined,
  output: isProd ? "export" : undefined,
  trailingSlash: true,
};

export default nextConfig;
