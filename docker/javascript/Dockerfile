FROM node:20-alpine

RUN apk add --no-cache coreutils

WORKDIR /app
COPY runner.js .
COPY user_code.js .
COPY runner.sh .

RUN chmod +x runner.sh

CMD ["./runner.sh"]
