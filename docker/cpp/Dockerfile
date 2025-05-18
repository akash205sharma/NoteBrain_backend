FROM gcc:12

WORKDIR /app
COPY runner.cpp .
COPY user_code.cpp .
COPY runner.sh .

RUN chmod +x runner.sh
RUN g++ runner.cpp -o runner

CMD ["./runner.sh"]
