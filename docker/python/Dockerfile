FROM python:3.10-slim

RUN apt-get update && apt-get install -y coreutils

WORKDIR /app
COPY runner.py .
COPY user_code.py .
COPY runner.sh .

RUN chmod +x runner.sh

CMD ["./runner.sh"]
