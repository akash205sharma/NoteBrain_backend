FROM rust:1.74

WORKDIR /app
COPY runner.rs .
COPY user_code.rs .
COPY runner.sh .

RUN chmod +x runner.sh
RUN rustc runner.rs -o runner

CMD ["./runner.sh"]
