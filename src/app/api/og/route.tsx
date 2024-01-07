import { ImageResponse } from "next/og";
import { BsGithub, BsLinkedin, BsGlobeAmericas } from "react-icons/bs";

export const runtime = "edge";

const getFont = async (url: URL): Promise<ArrayBuffer> => {
    const res = await fetch(url);
    return await res.arrayBuffer();
};

export async function GET() {
    return new ImageResponse(
        (
            <div
                style={{
                    fontSize: 40,
                    color: "#F4F3EE",
                    background: "#6C5585",
                    width: "100%",
                    height: "100%",
                    padding: "50px 200px",
                    textAlign: "center",
                    justifyContent: "center",
                    alignItems: "center",
                    fontFamily: "Prata",
                    display: "flex",
                    flexDirection: "column",
                }}
            >
                <h1
                    style={{
                        fontSize: "72px",
                        fontFamily: '"Prata"',
                    }}
                >
                    Alliyah Joyce Sarip
                </h1>
                <p
                    style={{
                        marginTop: "-32px",
                        fontSize: "28px",
                        fontFamily: "Helvetica",
                        maxWidth: "564px",
                    }}
                >
                    A Software Developer specializing in building full-stack web
                    applications.
                </p>

                <div
                    style={{
                        display: "flex",
                        marginTop: "32px",
                        justifyContent: "center",
                    }}
                >
                    <div
                        style={{
                            display: "flex",
                            flexDirection: "row",
                            alignItems: "center",
                        }}
                    >
                        <div style={{ display: "flex", fontSize: "24px" }}>
                            <BsGithub />
                        </div>

                        <div
                            style={{
                                marginLeft: "10px",
                                fontSize: "20px",
                                display: "flex",
                                fontFamily: "Helvetica",
                            }}
                        >
                            <p>alliyah95</p>
                        </div>
                    </div>

                    <div
                        style={{
                            display: "flex",
                            flexDirection: "row",
                            alignItems: "center",
                            marginLeft: "32px",
                        }}
                    >
                        <div style={{ display: "flex", fontSize: "24px" }}>
                            <BsLinkedin />
                        </div>
                        <div
                            style={{
                                marginLeft: "10px",
                                fontSize: "20px",
                                display: "flex",
                                fontFamily: "Helvetica",
                            }}
                        >
                            <p>alliyahjoyce</p>
                        </div>
                    </div>

                    <div
                        style={{
                            display: "flex",
                            flexDirection: "row",
                            alignItems: "center",
                            marginLeft: "32px",
                        }}
                    >
                        <div style={{ display: "flex", fontSize: "24px" }}>
                            <BsGlobeAmericas />
                        </div>

                        <div
                            style={{
                                marginLeft: "10px",
                                fontSize: "20px",
                                display: "flex",
                                fontFamily: "Helvetica",
                            }}
                        >
                            <p>alliyah.dev</p>
                        </div>
                    </div>
                </div>
            </div>
        ),
        {
            width: 1200,
            height: 630,
            fonts: [
                {
                    name: "Prata",
                    data: await getFont(
                        new URL("./fonts/Prata-Regular.ttf", import.meta.url)
                    ),
                    style: "normal",
                },
                {
                    name: "Helvetica",
                    data: await getFont(
                        new URL(
                            "./fonts/HelveticaNeue-Light.otf",
                            import.meta.url
                        )
                    ),
                    style: "normal",
                },
            ],
        }
    );
}
