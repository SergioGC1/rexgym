# Guía de estilo — RexGym

Breve guía con los tokens y normas básicas de diseño usados en el proyecto.

## Paleta principal
- **--brand**: color principal (acciones primarias) — `var(--brand)`
- **--brand-dark**: color para estados hover/activo — `var(--brand-dark)`
- **--brand-contrast**: color del texto sobre el brand — `var(--brand-contrast)`
- **--hero-1 / --hero-2**: degradado del hero — `var(--hero-1)`, `var(--hero-2)`
- **--surface / --surface-border**: superficies y bordes de tarjetas — `var(--surface)`, `var(--surface-border)`
- **--highlight**: color de acento para enlaces en banners — `var(--highlight)`
- **--footer-bg / --footer-text**: fondo y texto de footer

## Tipografía y espaciado
- **--fs-base**: tamaño base (16px)
- **--space-sm / --space-md**: espaciado reutilizable

## Componentes (resumen rápido)
- Botones primarios: `.btn` → fondo `var(--brand)`, texto `var(--brand-contrast)`, borde `1px solid var(--brand)`.
- Botones ghost: `.btn.ghost` → fondo transparente, color `var(--brand)`, hover con ligera capa usando `rgba(var(--brand-rgb), 0.08)`.
- Cabecera: `header` → fondo `var(--header-bg)`, borde inferior `1px solid var(--surface-border)`.
- Hero: fondo en degradado `linear-gradient(135deg, var(--hero-1), var(--hero-2))`.
- Tarjetas: fondo `var(--surface)`, borde `1px solid var(--surface-border)`.

## Accesibilidad y contraste
- Uso de `var(--brand-contrast)` para asegurar contraste suficiente sobre `--brand`.
- Evitar texto pequeño sobre colores de baja relación; si es necesario, usar `--brand-contrast` o aumentar tamaño/peso.

## Cómo contribuir
- Añadir nuevos colores como variables en `:root` en `css/style.css`.
- Reemplazar usos de hex directos por `var(--name)`.
- Mantener tokens semánticos (p. ej. `--highlight` en vez de `--pink-1`).

---

Si quieres, puedo generar un pequeño script (o lista de cambios) para reemplazar más hex distribuidos en otros archivos CSS, o aplicar comprobaciones automatizadas de contraste.
