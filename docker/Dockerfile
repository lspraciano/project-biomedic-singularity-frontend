FROM node:20-alpine as BUILD_IMAGE
WORKDIR /app/front

COPY ../package*.json .

RUN npm install

COPY .. .

RUN npm run build

EXPOSE 8001

CMD [ "npm", "run", "preview"]