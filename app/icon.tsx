import { ImageResponse } from "next/og";

export const size = { width: 32, height: 32 };
export const contentType = "image/png";

export default function Icon() {
  return new ImageResponse(
    (
      <div
        style={{
          width: "100%",
          height: "100%",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          background: "#241a12",
          color: "#e0a72e",
          fontSize: 24,
          fontFamily: "Georgia, serif",
          fontWeight: 700,
        }}
      >
        D
      </div>
    ),
    { ...size }
  );
}
