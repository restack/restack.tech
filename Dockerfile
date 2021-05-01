### BASE
FROM node:lts-alpine AS base
WORKDIR /app
COPY package.json package-lock.json yarn.lock ./
RUN yarn install --frozen-lockfile
COPY . .

### DEPENDENCIES
FROM node:lts-alpine AS builder
ENV NODE_ENV=production
WORKDIR /app
COPY . .
COPY --from=base /app/node_modules ./node_modules
RUN yarn build

### RELEASE
FROM nginx:stable-alpine
WORKDIR /usr/share/nginx/html
RUN rm -rf ./*
COPY --from=builder /app/docs .
COPY --from=builder /app/node_modules .
ENTRYPOINT ["nginx", "-g", "daemon off;"]