FROM node:12-alpine3.12 as build

# Change working directory
WORKDIR "/app"

# Install npm production packages npm run build; 
COPY package.json /app 

RUN npm install

COPY . .

RUN npm run build

ENV PORT 3000

EXPOSE 3000

CMD ["node", "server.js"]

FROM nginx:1.19-alpine AS prod-stage

COPY --from=build /app/build /usr/share/nginx/html

EXPOSE 80

CMD ["nginx", "-g", "daemon off;"]