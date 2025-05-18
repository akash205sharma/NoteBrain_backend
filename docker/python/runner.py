try:
    exec(open("user_code.py").read())
except Exception as e:
    print("Error:", e)
