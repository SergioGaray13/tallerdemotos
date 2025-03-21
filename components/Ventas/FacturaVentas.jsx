import React from "react";
import { Document, Page, Text, View, StyleSheet, Image } from "@react-pdf/renderer";
import dayjs from "dayjs";

// Definición de estilos mejorados
const styles = StyleSheet.create({
  page: {
    padding: 40,
    fontSize: 11,
    fontFamily: "Helvetica",
    backgroundColor: "#fff",
  },
  headerContainer: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    marginBottom: 20,
    borderBottomWidth: 2,
    borderBottomColor: "#000",
    paddingBottom: 10,
  },
  logo: {
    width: 60,
    height: 60,
  },
  headerText: {
    fontSize: 22,
    fontWeight: "bold",
    textTransform: "uppercase",
    textAlign: "right",
  },
  infoSection: {
    marginBottom: 20,
  },
  infoRow: {
    flexDirection: "row",
    marginBottom: 6,
  },
  label: {
    fontWeight: "bold",
    width: 150,
    fontSize: 12,
  },
  value: {
    fontSize: 12,
    color: "#333",
  },
  sectionTitle: {
    fontSize: 14,
    fontWeight: "bold",
    marginBottom: 8,
    borderBottomWidth: 1,
    borderBottomColor: "#000",
    paddingBottom: 3,
  },
  table: {
    display: "table",
    width: "100%",
    marginTop: 10,
    borderWidth: 1,
    borderColor: "#ddd",
  },
  tableRow: {
    flexDirection: "row",
    borderBottomWidth: 1,
    borderBottomColor: "#ddd",
  },
  tableColHeader: {
    width: "33.33%",
    padding: 6,
    backgroundColor: "#f2f2f2",
    textAlign: "center",
    fontWeight: "bold",
  },
  tableCol: {
    width: "33.33%",
    padding: 6,
    textAlign: "center",
  },
});

// Función para formatear montos en Lempiras
const formatCurrency = (amount) => `L. ${parseFloat(amount).toFixed(2)}`;

const InvoiceDocument = ({ venta }) => (
  <Document>
    <Page style={styles.page}>
      {/* Encabezado */}
      <View style={styles.headerContainer}>
        <Image style={styles.logo} src="https://via.placeholder.com/60" />
        <Text style={styles.headerText}>Factura de Venta</Text>
      </View>

      {/* Datos de la venta */}
      <View style={styles.infoSection}>
        <Text style={styles.sectionTitle}>Detalles de la Venta</Text>
        <View style={styles.infoRow}>
          <Text style={styles.label}>Número de Factura:</Text>
          <Text style={styles.value}>{venta.numero_factura}</Text>
        </View>
        <View style={styles.infoRow}>
          <Text style={styles.label}>Fecha:</Text>
          <Text style={styles.value}>{dayjs(venta.fecha).format("DD/MM/YYYY HH:mm:ss")}</Text>
        </View>
        <View style={styles.infoRow}>
          <Text style={styles.label}>ID Cliente:</Text>
          <Text style={styles.value}>{venta.id_cliente}</Text>
        </View>
        <View style={styles.infoRow}>
          <Text style={styles.label}>Método de Pago:</Text>
          <Text style={styles.value}>{venta.metodo_pago}</Text>
        </View>
        <View style={styles.infoRow}>
          <Text style={styles.label}>Observaciones:</Text>
          <Text style={styles.value}>{venta.observaciones || "-"}</Text>
        </View>
        <View style={styles.infoRow}>
          <Text style={styles.label}>Subtotal:</Text>
          <Text style={styles.value}>{formatCurrency(venta.subtotal)}</Text>
        </View>
        <View style={styles.infoRow}>
          <Text style={styles.label}>Total:</Text>
          <Text style={styles.value}>{formatCurrency(venta.total)}</Text>
        </View>
      </View>

      {/* Tabla de detalles de la venta */}
      {venta.detalles_venta && venta.detalles_venta.length > 0 && (
        <>
          <Text style={styles.sectionTitle}>Detalles de Productos</Text>
          <View style={styles.table}>
            <View style={styles.tableRow}>
              <Text style={styles.tableColHeader}>Producto</Text>
              <Text style={styles.tableColHeader}>Cantidad</Text>
              <Text style={styles.tableColHeader}>Precio</Text>
            </View>
            {venta.detalles_venta.map((detalle, index) => (
              <View style={styles.tableRow} key={index}>
                <Text style={styles.tableCol}>{detalle.nombre}</Text>
                <Text style={styles.tableCol}>{detalle.quantity}</Text>
                <Text style={styles.tableCol}>{formatCurrency(detalle.precio_venta)}</Text>
              </View>
            ))}
          </View>
        </>
      )}
    </Page>
  </Document>
);

export default InvoiceDocument;
