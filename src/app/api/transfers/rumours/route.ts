import { NextResponse } from "next/server";

export async function GET() {
  const baseUrl = process.env.FF_BASE_URL;
  const key = process.env.FF_API_KEY;
  const url = `${baseUrl}/transfers/rumours?key=${key}`;
  try {
    const response = await fetch(url, {
      method: "GET",
      headers: {
        Accept: "application/json",
      },
    });

    if (!response.ok) {
      throw new Error(`HTTP error! Status: ${response.status}`);
    }

    const data = await response.json();
    return NextResponse.json(data, { status: 200 });
  } catch (error) {
    console.error("API Fetch Error:", error);
    return NextResponse.json(
      { error: "Failed to fetch data" },
      { status: 500 }
    );
  }
}
