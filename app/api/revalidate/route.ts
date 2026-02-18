import { revalidatePath } from "next/cache";
import { NextRequest, NextResponse } from "next/server";

export async function POST(request: NextRequest) {
  const token = request.headers.get("x-revalidate-token");

  if (token !== process.env.REVALIDATE_SECRET) {
    return NextResponse.json({ error: "Unauthorized" }, { status: 401 });
  }

  const { slug } = await request.json().catch(() => ({}));

  revalidatePath("/");

  if (slug) {
    revalidatePath(`/news/${slug}`);
  }

  return NextResponse.json({ revalidated: true });
}
