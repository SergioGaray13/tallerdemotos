// Api/compras/buscar/[id]/route.ts
import { NextResponse, NextRequest } from "next/server";
import { createClient } from "@/utils/supabase/server";

export async function GET(
  request: NextRequest,
  context: { params: Promise<{ id: string }> }
) {
  const supabase = await createClient();

  const { id } = await context.params;

  const { data, error } = await supabase
    .from("compras")
    .select("*")
    .eq("id_historial", id);

  if (error) {
    return NextResponse.json({ error: error.message }, { status: 500 });
  }

  return NextResponse.json(data?.[0] ?? null, { status: 200 });
}
