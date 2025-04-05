// Api/ventas/obtenerVentaDetalleById/[id]/route.ts
import { NextResponse, NextRequest } from "next/server";
import { createClient } from "@/utils/supabase/server";

export async function GET(
  request: NextRequest,
  context: { params: Promise<{ id: string }> }
) {
  const { id } = await context.params;

  const supabase = await createClient();

  // Obtener todas las ventas con sus detalles usando JOIN
  const { data, error } = await supabase
    .from("venta")
    .select(`*, detalles_venta(*)`)
    .eq("id_venta", id);

  if (error) {
    return NextResponse.json({ error: error.message }, { status: 500 });
  }

  return NextResponse.json(data, { status: 200 });
}
