FROM node:10.13.0-alpine as builder

WORKDIR /usr/src/app

# Installing dependencies
COPY package.json yarn.lock ./
RUN yarn

# Copying source files
COPY . .

EXPOSE 80

ENV NODE_ENV=production
# Building app
RUN yarn build

# Running the app
CMD [ "yarn", "start", "-p", "80", "-H", "0.0.0.0" ]
