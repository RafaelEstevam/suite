FROM cypress/base:16

WORKDIR /app

COPY ./package.json .

RUN npm install --save-dev cypress

RUN npx cypress open

EXPOSE 4000