// Api/categorias/[id]/route.ts
import { NextResponse, NextRequest } from "next/server";
import { createClient } from "@/utils/supabase/server";

export async function DELETE(
  request: NextRequest,
  context: { params: Promise<{ id: string }> }
) {
  const supabase = await createClient();

  const { id } = await context.params;
  const idNumber = Number(id);

  if (isNaN(idNumber)) {
    return NextResponse.json({ error: "ID inválido" }, { status: 400 });
  }

  const { error } = await supabase
    .from("categoria")
    .delete()
    .eq("id_categoria", idNumber);

  if (error) {
    return NextResponse.json({ error: error.message }, { status: 500 });
  }

  return NextResponse.json({ message: "Categoría eliminada" }, { status: 200 });
}
