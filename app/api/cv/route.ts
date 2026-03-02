import { NextResponse } from "next/server";
import { readFile } from "fs/promises";
import path from "path";

const filename = "Prod_Design_Danil_Gorbunov.pdf";

export async function GET() {
  try {
    const filePath = path.join(process.cwd(), "public", filename);
    const buffer = await readFile(filePath);
    return new NextResponse(buffer, {
      status: 200,
      headers: {
        "Content-Type": "application/pdf",
        "Content-Disposition": `attachment; filename="${filename}"`,
        "Content-Length": String(buffer.length),
      },
    });
  } catch (err) {
    console.error("CV download error:", err);
    return new NextResponse("File not found", { status: 404 });
  }
}
