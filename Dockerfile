FROM node:alpine

WORKDIR /usr/app

COPY ./ ./

RUN npm intsall 

CMD ["npm","start"]