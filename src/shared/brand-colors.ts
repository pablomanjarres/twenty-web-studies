import type { Brand } from "./types";

export function luminance(hex: string) {
  const channels = hex
    .replace("#", "")
    .match(/.{2}/g)!
    .map((value) => {
      const channel = parseInt(value, 16) / 255;
      return channel <= 0.04045
        ? channel / 12.92
        : ((channel + 0.055) / 1.055) ** 2.4;
    });
  return channels[0] * 0.2126 + channels[1] * 0.7152 + channels[2] * 0.0722;
}

export function presentationColors(brand: Brand) {
  const ordered = [...brand.colors].sort(
    (a, b) => luminance(a.hex) - luminance(b.hex),
  );
  return { ink: ordered[0].hex, paper: ordered[ordered.length - 1].hex };
}
