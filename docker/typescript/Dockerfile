FROM node:20-alpine

WORKDIR /app
COPY . .

RUN npm install -g typescript
RUN tsc runner.ts user_code.ts --outDir dist

COPY runner.sh .
RUN chmod +x runner.sh

CMD ["./runner.sh"]
