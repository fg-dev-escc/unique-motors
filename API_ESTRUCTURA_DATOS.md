# Estructura de Datos para la API - Detalles del Vehículo

## Tabs Implementados

### 1. **Detalles del vehículo** (Solo listas de especificaciones)

La API debe retornar estos campos en el objeto `car` para mostrar las especificaciones técnicas:

#### Especificaciones técnicas:
- `modeloAnio` - Año del vehículo
- `modelo` - Modelo del vehículo  
- `marca` - Marca del vehículo
- `transmision` - Tipo de transmisión
- `tipoCombustible` - Tipo de combustible
- `kilometraje` - Kilometraje actual
- `motor` - Especificaciones del motor
- `cilindros` - Número de cilindros
- `potencia` - Potencia del motor

#### Características adicionales:
- `capacidad` - Capacidad de pasajeros
- `color` - Color exterior
- `colorInterior` - Color interior
- `puertas` - Número de puertas
- `rendimiento` - Rendimiento de combustible
- `estado` - Estado del vehículo
- `tipoVehiculo` - Tipo de vehículo (Sedán, SUV, etc.)
- `version` - Versión específica
- `placa` - Número de placa

### 2. **Información adicional** (Solo párrafos de texto)

La API debe retornar estos campos como strings para mostrar información detallada:

- `descripcion` - Descripción general del vehículo
- `informacionAdicional` - Información técnica adicional
- `observaciones` - Observaciones importantes sobre el estado
- `historialMantenimiento` - Historia de mantenimiento
- `condicionesVenta` - Términos y condiciones de venta
- `garantia` - Información de garantía

### 3. **Historial de pujas** (Funcionalidad existente)

### 4. **Comentarios** (Funcionalidad existente)

## Comportamiento

- **Si un campo no existe en la API**: No se muestra esa línea/sección
- **Si no hay datos**: Se muestra mensaje "No hay información disponible"
- **Renderizado condicional**: Solo aparecen los datos que realmente existen

## Ejemplo de respuesta de API:

```json
{
  "car": {
    "modeloAnio": "2020",
    "modelo": "Corolla",
    "marca": "Toyota", 
    "transmision": "Automático",
    "tipoCombustible": "Híbrido",
    "kilometraje": "45,000",
    "motor": "1.8L Híbrido",
    "cilindros": "4",
    "potencia": "122 HP",
    "capacidad": "5",
    "color": "Blanco Perla",
    "colorInterior": "Negro",
    "puertas": "4",
    "rendimiento": "18.5km / 1-litro",
    "estado": "Excelente",
    "tipoVehiculo": "Sedán",
    "version": "XEI CVT",
    "placa": "ABC-123",
    "descripcion": "Vehículo en excelente estado...",
    "informacionAdicional": "Tecnología híbrida avanzada...",
    "observaciones": "Rayones menores en carrocería...",
    "historialMantenimiento": "Mantenimiento cada 10,000 km...",
    "condicionesVenta": "Venta en subasta pública...",
    "garantia": "Garantía mecánica de 6 meses..."
  }
}
```

**Nota**: Si la API no retorna algún campo, simplemente no se mostrará esa información en la interfaz.