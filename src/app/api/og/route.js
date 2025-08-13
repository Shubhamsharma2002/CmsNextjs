import { ImageResponse } from "next/og";
import { NextResponse } from "next/server";

export const runtime = "edge";

export async function GET(request) {
  try {
    const { searchParams } = new URL(request.url);
    const titleParam = searchParams.get("title") || "Blogify";
    const title = titleParam.charAt(0).toUpperCase() + titleParam.slice(1);

    return new ImageResponse(
      (
        <div
          style={{
            display: "flex",
            flexDirection: "column",
            justifyContent: "space-between",
            width: "100%",
            height: "100%",
            padding: "60px 80px",
            background: "linear-gradient(135deg, #4f46e5, #7c3aed, #ec4899)",
            color: "#fff",
            fontFamily: "sans-serif",
          }}
        >
          {/* Title */}
          <h1
            style={{
              fontSize: 72,
              fontWeight: 800,
              lineHeight: 1.1,
              textShadow: "2px 2px 8px rgba(0,0,0,0.5)",
              marginBottom: 20,
            }}
          >
            {title}
          </h1>

          {/* Subtitle */}
          <p
            style={{
              fontSize: 32,
              fontWeight: 500,
              marginBottom: 40,
              textShadow: "1px 1px 4px rgba(0,0,0,0.3)",
            }}
          >
            Read this post on
          </p>

          

          {/* Logo */}
          <img
            src={`${process.env.NEXT_PUBLIC_BASE_URL}/thumbnails/BlogifyLogo.png`}
            width={140}
            height={60}
            alt="website logo"
            style={{ borderRadius: 12, marginTop: 40, marginBottom: 40 }}
          />

          {/* Footer */}
          <h2
            style={{
              fontSize: 28,
              fontWeight: 500,
              opacity: 0.85,
              textShadow: "1px 1px 3px rgba(0,0,0,0.4)",
            }}
          >
            Powered by Blogify
          </h2>
        </div>
      ),
      {
        width: 500,
        height: 630,
      }
    );
  } catch (error) {
    console.log(error.message);
    return NextResponse.json(
      { message: "Failed to generate the OG Image" },
      { status: 500 }
    );
  }
}
