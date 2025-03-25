// Api/categorias/editar/[id]
import { NextResponse, NextRequest } from "next/server";
import { createClient } from "@/utils/supabase/server";

interface Params {
  id: string; 
}

export async function PUT(request: NextRequest, context: { params: Params }) {
  const supabase = await createClient();
  const { id } = context.params; // Desestructuración de params desde el contexto
  const { nombre, descripcion, activo } = await request.json();

  const idNumber = parseInt(id, 10);
  const { data, error } = await supabase
    .from("categoria")
    .update({ nombre, descripcion, activo })
    .eq("id_categoria", idNumber)
    .select();

  if (error) {
    return NextResponse.json({ error: error.message }, { status: 500 });
  }

  return NextResponse.json(data, { status: 200 });
}