// /app/inicio/Categorias/editar/page.tsx
"use client";
import { useState, useEffect } from "react";
import EditCategoryDrawer from "../components/EditCategoryDrawer";

export default function EditCategoryPage() {
  const [visible, setVisible] = useState(false);
  const [category, setCategory] = useState<any>(null);

  // Simulando obtener una categoría desde una API o base de datos
  useEffect(() => {
    // Esta sería la lógica para obtener los datos de la categoría
    setCategory({
      nombre: "Categoría 1",
      descripcion: "Descripción de la categoría",
      activo: true,
    });
  }, []);

  const handleSave = async (values: any) => {
    console.log("Guardar categoría", values);
    // Lógica de guardado, por ejemplo, llamar a una API o actualizar el estado global
  };

  return (
    <div>
      <button onClick={() => setVisible(true)}>Editar Categoría</button>

      <EditCategoryDrawer
        visible={visible}
        onClose={() => setVisible(false)}
        category={category}
        onSave={handleSave}
      />
    </div>
  );
}
