FROM node:16-alpine

WORKDIR /usr/src/app

COPY . .

RUN yarn install --prod

RUN yarn add webpack webpack-node-externals tsconfig-paths-webpack-plugin -D

RUN yarn build

RUN yarn remove webpack webpack-node-externals tsconfig-paths-webpack-plugin

COPY ./dist ./dist

EXPOSE 8080

CMD [ "yarn", "start" ]
