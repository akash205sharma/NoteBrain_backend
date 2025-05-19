FROM node:20-alpine

RUN apk add --no-cache coreutils

WORKDIR /app

COPY runner.js .
COPY runner.sh .
COPY user_code.js .

RUN chmod +x runner.sh

CMD ["sh", "./runner.sh"]
