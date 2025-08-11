# Portfolio estático — Netlify + GitHub

Este proyecto es una plantilla minimalista para tu portafolio estático, pensada para desplegarse en **Netlify**.

## Estructura
```
portfolio-starter/
├─ assets/                # Imágenes, fuentes, favicon, etc.
├─ index.html             # Página principal
├─ style.css              # Estilos
├─ script.js              # JS opcional (menu móvil, año dinámico)
└─ README.md
```

## Requisitos opcionales
- Visual Studio Code
- Extensión **Live Server** (para ver cambios locales)

## Pasos (local → GitHub → Netlify)

1. **Clonar / copiar** esta carpeta a tu PC y abrirla en VS Code.
2. (Opcional) Ejecuta Live Server para previsualizar.
3. **Git & GitHub**:
   ```bash
   git init
   git add .
   git commit -m "Initial portfolio"
   git branch -M main
   git remote add origin https://github.com/TU_USUARIO/portfolio.git
   git push -u origin main
   ```
4. **Netlify**:
   - En el dashboard: *Add new site → Import from Git*.
   - Conecta GitHub y el repo `portfolio`.
   - Build command: *(vacío)* — Publish directory: `/`.
   - Deploy.

5. **Dominio**:
   - En *Site settings → Domain management* puedes elegir subdominio de Netlify o conectar uno propio.

## Personalización
- Reemplaza imágenes en `assets/`.
- Edita los enlaces de proyectos (Google Play, YouTube, GitHub).
- Actualiza `assets/CV_Jorge_Hernandez.pdf` con tu CV.
- Cambia colores en `:root` dentro de `style.css`.

¡Listo!