FROM openjdk:17-slim

WORKDIR /app
COPY runner.java .
COPY user_code.java .
COPY runner.sh .

RUN chmod +x runner.sh
RUN javac runner.java user_code.java

CMD ["./runner.sh"]
