// Api/categorias/editar/[id]
import { NextResponse, NextRequest } from "next/server";
import { createClient } from "@/utils/supabase/server";

// El tipo Params está bien definido, pero asegúrate de que esté relacionado con el parámetro de la ruta
interface Params {
  id: string; // Cambié el tipo a string porque generalmente los parámetros de la URL son cadenas.
}

export async function PUT(request: NextRequest, context: { params: Params }) {
  const supabase = await createClient();
  const { id } = context.params; // Desestructuración de params desde el contexto
  const { nombre, descripcion, activo } = await request.json();

  // Convierte el 'id' a número si es necesario
  const idNumber = parseInt(id, 10);

  const { data, error } = await supabase
    .from("categoria")
    .update({ nombre, descripcion, activo })
    .eq("id_categoria", idNumber) // Usa idNumber como número
    .select();

  if (error) {
    return NextResponse.json({ error: error.message }, { status: 500 });
  }

  return NextResponse.json(data, { status: 200 });
}
