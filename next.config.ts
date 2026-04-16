import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  /* Autorizamos a Next.js a optimizar imágenes de Unsplash */
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "images.unsplash.com",
        port: "",
        pathname: "/**", // Permite cualquier ruta dentro de este dominio
      },
    ],
  },
  /* Mantenemos la redirección automática al idioma italiano */
  async redirects() {
    return [
      {
        source: "/",
        destination: "/it",
        permanent: true,
      },
    ];
  },
};

export default nextConfig;
