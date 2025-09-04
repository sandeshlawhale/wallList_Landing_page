"use client";

import { useEffect, useState } from "react";
import Image from "next/image";

export default function QuickInstall() {
  const [dataUrl, setDataUrl] = useState<string | null>(null);

  useEffect(() => {
    let mounted = true;
    async function gen() {
      try {
        const QR = await import("qrcode");
        const url =
          (typeof window !== "undefined"
            ? window.location.origin
            : "https://example.com") + "/download";
        const png = await QR.toDataURL(url, {
          margin: 1,
          scale: 6,
          color: { dark: "#000000", light: "#ffffff" },
        });
        if (mounted) setDataUrl(png);
      } catch (err) {
        console.log(
          "[v0] QR generation failed, falling back to placeholder:",
          (err as Error)?.message
        );
        if (mounted) setDataUrl(null);
      }
    }
    gen();
    return () => {
      mounted = false;
    };
  }, []);

  if (!dataUrl) {
    return (
      <Image
        src={
          "/placeholder.svg?height=200&width=200&query=qr%20code%20for%20walllist%20download"
        }
        alt="QR code placeholder"
        width={200}
        height={200}
        className="rounded border"
        priority
      />
    );
  }

  // eslint-disable-next-line @next/next/no-img-element
  return (
    <img
      src={dataUrl || "/placeholder.svg"}
      width={200}
      height={200}
      alt="QR code for WallList download link"
      className="rounded border"
    />
  );
}
