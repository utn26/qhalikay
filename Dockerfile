# ---- Etapa 1: Builder ----
# Usamos una imagen base de Node.js con Yarn preinstalado
FROM node:20-alpine AS builder
LABEL stage=builder

# Establecemos el directorio de trabajo dentro del contenedor
WORKDIR /app

# Copiamos los archivos de definición de dependencias y configuración de Lerna/Yarn
COPY package.json yarn.lock lerna.json ./
COPY packages/website/package.json ./packages/website/

# (Opcional pero recomendado si tienes dependencias cruzadas o scripts en otros paquetes que 'website' necesite en tiempo de build)
# Descomenta la siguiente línea si necesitas copiar otros package.json
# COPY packages/*/package.json ./packages/*/

# Instalamos TODAS las dependencias del monorepo usando yarn workspaces
# Esto asegura que Lerna pueda encontrar y enlazar todo correctamente.
# Usamos --frozen-lockfile para asegurar instalaciones reproducibles.
RUN yarn install --frozen-lockfile

# Copiamos el resto del código fuente del monorepo
# Es necesario copiar todo para que Lerna pueda resolver las dependencias internas si las hubiera.
COPY . .

# Ejecutamos el script de build específicamente para el paquete 'website'
# Asegúrate de que tu paquete 'website' tenga un script llamado "build" en su package.json
# Lerna se encargará de ejecutarlo en el contexto correcto.
RUN yarn lerna run build --scope=website

# ---- Etapa 2: Runner ----
# Usamos una imagen ligera de Nginx para servir los archivos estáticos
FROM nginx:stable-alpine AS runner

# Copiamos la configuración personalizada de Nginx (ver punto 3 más abajo)
# Esto es importante para que el enrutamiento de React funcione correctamente (Single Page Application)
COPY nginx.conf /etc/nginx/conf.d/default.conf

# Copiamos los archivos estáticos construidos desde la etapa 'builder'
# Asegúrate de que la ruta '/app/packages/website/dist' coincide con la carpeta de salida de tu build.
# Puede ser 'build', 'dist', u otra cosa según tu configuración (Create React App usa 'build').
COPY --from=builder /app/packages/website/dist /usr/share/nginx/html
# Si tu carpeta de build se llama 'build' en lugar de 'dist', usa:
# COPY --from=builder /app/packages/website/build /usr/share/nginx/html

# Exponemos el puerto 80 (puerto por defecto de Nginx)
EXPOSE 80

# Comando por defecto para iniciar Nginx en primer plano
CMD ["nginx", "-g", "daemon off;"]