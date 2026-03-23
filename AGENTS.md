<!-- BEGIN:nextjs-agent-rules -->

# This is NOT the Next.js you know

This version has breaking changes — APIs, conventions, and file structure may all differ from your training data. Read the relevant guide in `node_modules/next/dist/docs/` before writing any code. Heed deprecation notices.

<!-- END:nextjs-agent-rules -->

## Agent Workflow

1. Antes de proponer cambios, verifica si la API de Next.js que planeas usar sigue vigente en la v16.
2. Si vas a crear un componente nuevo, revisa @components/ui para reutilizar lo existente.
3. Mantén las respuestas concisas: solo código y una breve explicación de por qué elegiste ese enfoque.

### Reglas de Desarrollo para este Proyecto:

- **Tecnologías:** Next.js 16+, Tailwind CSS, Lucide React.
- **Componentes:** Todos los componentes deben ser 'use client' por defecto
- **TypeScript:** Strict mode siempre. No usar `any`.
- **Estilo de código:** Preferir funciones de flecha y exportaciones nombradas.
