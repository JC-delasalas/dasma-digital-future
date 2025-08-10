# 1) Build your Vite app
FROM registry.access.redhat.com/ubi9/nodejs-18 AS build
WORKDIR /opt/app-root/src
COPY package*.json ./
RUN npm ci
COPY . .
RUN npm run build

# 2) Serve the built files on port 8080
FROM registry.access.redhat.com/ubi9/nodejs-18
WORKDIR /opt/app-root/src
RUN npm i -g http-server
COPY --from=build /opt/app-root/src/dist ./dist
ENV PORT=8080
EXPOSE 8080
USER 1001
CMD ["http-server", "dist", "-p", "8080", "-a", "0.0.0.0", "-c-1"]
