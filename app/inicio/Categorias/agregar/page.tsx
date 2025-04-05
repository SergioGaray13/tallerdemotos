"use client";
import { useState } from "react";
import AddCategoryDrawer from "../components/AddCategoryDrawer";

// Definimos la interfaz para los valores del formulario
interface CategoriaFormValues {
  nombre: string;
  descripcion: string;
  activo: boolean;
}

export default function AgregarCategoriaPage() {
  const [visible, setVisible] = useState(true);

  const handleClose = () => setVisible(false);

  // Aseguramos que 'values' tiene el tipo 'CategoriaFormValues'
  const handleAdd = async (values: CategoriaFormValues) => {
    // Aquí puedes enviar datos a tu API o Supabase
    console.log("Agregando categoría:", values);
  };

  return (
    <div>
      <AddCategoryDrawer
        visible={visible}
        onClose={handleClose}
        onAdd={handleAdd}
      />
    </div>
  );
}
