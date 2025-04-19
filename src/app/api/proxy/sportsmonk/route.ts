import { NextResponse, NextRequest } from "next/server";

const BASE_API_URL =
  process.env.SM_BASE_URL || "https://api.footballfeeds.com/json";
const API_KEY: any = process.env.SM_API_KEY;

export async function GET(request: NextRequest) {
  try {
    const { searchParams } = new URL(request.url);
    let path = searchParams.get("path");

    if (!path) {
      return NextResponse.json(
        { error: "No path parameter provided" },
        { status: 400 }
      );
    }

    // Remove leading slash if present
    path = path.startsWith("/") ? path.slice(1) : path;

    // Create base URL object
    const baseUrl = new URL(BASE_API_URL);

    // Split path and query parameters
    const [pathOnly, queryString] = path.split("?");
    const fullPath = `${baseUrl.pathname}/${pathOnly}`.replace(/\/+/g, "/");
    const fullUrl = new URL(fullPath, baseUrl.origin);

    // Add API key
    fullUrl.searchParams.append("api_token", API_KEY);

    // Add original query parameters if they exist (without duplicates)
    if (queryString) {
      new URLSearchParams(queryString).forEach((value, key) => {
        if (!fullUrl.searchParams.has(key)) {
          // Only add if not already present
          fullUrl.searchParams.append(key, value);
        }
      });
    }

    const response = await fetch(fullUrl.toString(), {
      method: "GET",
      headers: { Accept: "application/json" },
      next: { revalidate: 60 },
    });

    if (!response.ok) {
      const errorData = await response.json().catch(() => ({}));
      return NextResponse.json(
        {
          error: "API request failed",
          status: response.status,
          apiError: errorData,
        },
        { status: response.status }
      );
    }

    const data = await response.json();
    return NextResponse.json(data, { status: 200 });
  } catch (error) {
    console.error("Proxy error:", error);
    return NextResponse.json(
      {
        error: "Internal server error",
        details: error instanceof Error ? error.message : String(error),
      },
      { status: 500 }
    );
  }
}
