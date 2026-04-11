import React from 'react';

interface PrintPreviewMultiPageProps {
  logoProfesional: string | null;
  numeroMatricula: string;
  nombreProfesional: string;
  nombreCliente: string;
  fechaEmision: string;
  fechaValidez: string;
  itemsPresupuesto: any[];
  totalPresupuesto: number;
  divisa: string;
  formaPago: string;
  terminosCondiciones: string;
}

const formatearMoneda = (valor: number, decimales: number = 2): string => {
  return valor.toLocaleString('es-AR', {
    minimumFractionDigits: decimales,
    maximumFractionDigits: decimales,
  });
};

export default function PrintPreviewMultiPage({
  logoProfesional,
  numeroMatricula,
  nombreProfesional,
  nombreCliente,
  fechaEmision,
  fechaValidez,
  itemsPresupuesto,
  totalPresupuesto,
  divisa,
  formaPago,
  terminosCondiciones,
}: PrintPreviewMultiPageProps) {
  return (
    <div className="hidden print:block w-full bg-white">
      <style>{`
        @page { size: A4; margin: 0; }
        @media print {
          body { margin: 0; padding: 0; background: white; }
          .print-page {
            width: 210mm; height: 297mm; margin: 0; padding: 15mm 20mm;
            background: white; box-sizing: border-box;
            font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif;
            color: #333; page-break-after: always; display: flex; flex-direction: column;
          }
          .print-page:last-child { page-break-after: avoid; }
          .print-header {
            display: flex; justify-content: space-between; align-items: flex-start;
            margin-bottom: 15mm; border-bottom: 3px solid #0891b2; padding-bottom: 10mm;
          }
          .print-logo { max-width: 100px; height: auto; object-fit: contain; }
          .print-title-section { flex: 1; text-align: center; }
          .print-title { font-size: 24px; font-weight: bold; color: #164e63; margin: 0; }
          .print-subtitle { font-size: 11px; color: #0891b2; margin: 3px 0 0 0; }
          .print-info-section { display: grid; grid-template-columns: 1fr 1fr; gap: 12mm; margin-bottom: 15mm; font-size: 10px; }
          .print-info-box { background-color: #f0f9fa; padding: 8mm; border-left: 4px solid #0891b2; }
          .print-info-label { font-weight: bold; color: #164e63; margin-bottom: 2mm; }
          .print-info-value { color: #555; word-break: break-word; }
          .print-table { width: 100%; border-collapse: collapse; margin-bottom: 10mm; font-size: 9px; }
          .print-table th { background-color: #f0f9fa; border: 1px solid #06b6d4; padding: 5mm; text-align: left; font-weight: bold; color: #164e63; }
          .print-table td { border: 1px solid #cffafe; padding: 5mm; color: #555; }
          .print-table tr:nth-child(even) { background-color: #f9fdfe; }
          .print-total-section { background: linear-gradient(135deg, #f0f9fa 0%, #e0f7fa 100%); border: 2px solid #06b6d4; padding: 10mm; margin-bottom: 15mm; text-align: right; border-radius: 4px; }
          .print-total-label { font-size: 13px; font-weight: bold; color: #164e63; }
          .print-total-amount { font-size: 20px; font-weight: bold; color: #0891b2; margin-top: 3mm; }
          .print-text-section { font-size: 9px; color: #555; line-height: 1.5; margin-bottom: 10mm; white-space: pre-wrap; word-break: break-word; }
          .print-signatures { display: grid; grid-template-columns: 1fr 1fr; gap: 20mm; margin-top: 20mm; }
          .print-signature-box { text-align: center; border-top: 2px solid #333; padding-top: 25mm; min-height: 50mm; }
          .print-signature-label { font-size: 10px; font-weight: bold; color: #164e63; margin-top: 5mm; }
          .print-signature-name { font-size: 9px; color: #666; margin-top: 3mm; }
          .page-content { flex: 1; }
        }
      `}</style>

      {/* PAGE 1 */}
      <div className="print-page">
        <div className="page-content">
          <div className="print-header">
            {logoProfesional && (
              <div className="print-logo-container">
                <img src={logoProfesional} alt="Logo" className="print-logo" />
              </div>
            )}
            <div className="print-title-section">
              <h1 className="print-title">PRESUPUESTO</h1>
              <p className="print-subtitle">Colegio de Diseñadores Gráficos de Misiones</p>
            </div>
          </div>
          <div className="print-info-section">
            <div className="print-info-box">
              <div className="print-info-label">Profesional/Agencia</div>
              <div className="print-info-value">{nombreProfesional || 'No especificado'}</div>
              {numeroMatricula && (
                <>
                  <div className="print-info-label" style={{ marginTop: '5mm' }}>Matrícula</div>
                  <div className="print-info-value">{numeroMatricula}</div>
                </>
              )}
            </div>
            <div className="print-info-box">
              <div className="print-info-label">Cliente/Comitente</div>
              <div className="print-info-value">{nombreCliente || 'No especificado'}</div>
            </div>
            <div className="print-info-box">
              <div className="print-info-label">Fecha de Emisión</div>
              <div className="print-info-value">
                {new Date(fechaEmision).toLocaleDateString('es-AR', { year: 'numeric', month: 'long', day: 'numeric' })}
              </div>
            </div>
            <div className="print-info-box">
              <div className="print-info-label">Válido hasta</div>
              <div className="print-info-value">
                {fechaValidez ? new Date(fechaValidez).toLocaleDateString('es-AR', { year: 'numeric', month: 'long', day: 'numeric' }) : 'No especificado'}
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* PAGE 2 */}
      <div className="print-page">
        <div className="page-content">
          <div className="print-header">
            <div className="print-title-section">
              <h1 className="print-title">DETALLE DE SERVICIOS</h1>
            </div>
          </div>
          <table className="print-table">
            <thead>
              <tr>
                <th style={{ width: '40%' }}>Descripción</th>
                <th style={{ width: '20%' }}>Categoría</th>
                <th style={{ width: '10%' }}>Horas</th>
                <th style={{ width: '15%' }}>Precio/Hora</th>
                <th style={{ width: '15%' }}>Total</th>
              </tr>
            </thead>
            <tbody>
              {itemsPresupuesto.map((item, index) => (
                <tr key={index}>
                  <td>{item.nombre}</td>
                  <td>{item.categoria}</td>
                  <td style={{ textAlign: 'center' }}>{item.horas}</td>
                  <td style={{ textAlign: 'right' }}>${formatearMoneda(item.precioHora, 2)}</td>
                  <td style={{ textAlign: 'right', fontWeight: 'bold' }}>${formatearMoneda(item.subtotal, 2)}</td>
                </tr>
              ))}
            </tbody>
          </table>
          <div className="print-total-section">
            <div className="print-total-label">TOTAL DEL PRESUPUESTO</div>
            <div className="print-total-amount">${formatearMoneda(totalPresupuesto, 2)} {divisa}</div>
          </div>
        </div>
      </div>

      {/* PAGE 3 */}
      <div className="print-page">
        <div className="page-content">
          <div className="print-header">
            <div className="print-title-section">
              <h1 className="print-title">CONDICIONES Y FIRMAS</h1>
            </div>
          </div>
          {formaPago && (
            <div style={{ marginBottom: '10mm' }}>
              <div className="print-info-label" style={{ fontSize: '12px', marginBottom: '5mm' }}>Forma de Pago</div>
              <div className="print-text-section">{formaPago}</div>
            </div>
          )}
          {terminosCondiciones && (
            <div style={{ marginBottom: '10mm' }}>
              <div className="print-info-label" style={{ fontSize: '12px', marginBottom: '5mm' }}>Términos y Condiciones</div>
              <div className="print-text-section">{terminosCondiciones}</div>
            </div>
          )}
          <div className="print-signatures">
            <div className="print-signature-box">
              <div className="print-signature-label">Firma del Profesional</div>
              <div className="print-signature-name">{nombreProfesional}</div>
            </div>
            <div className="print-signature-box">
              <div className="print-signature-label">Firma del Cliente</div>
              <div className="print-signature-name">{nombreCliente}</div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
