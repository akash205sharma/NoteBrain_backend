FROM gcc:12

WORKDIR /app
COPY runner.c .
COPY user_code.c .
COPY runner.sh .

RUN chmod +x runner.sh
RUN gcc runner.c -o runner

CMD ["./runner.sh"]
