import { NextResponse } from "next/server";

const allowedOrigins =
    process.env.NODE_ENV === "production"
        ? ["https://alliyah.dev", "https://alliyah.vercel.app"]
        : ["http://localhost:3000"];

export const config = {
    matcher: "/api/send",
};

export const middleware = (request: Request): NextResponse => {
    const origin = request.headers.get("origin");

    if ((origin && !allowedOrigins.includes(origin)) || !origin) {
        return new NextResponse(null, {
            status: 401,
            statusText: "Unauthorized",
            headers: {
                "Content-Type": "text/plain",
            },
        });
    }

    return NextResponse.next();
};
