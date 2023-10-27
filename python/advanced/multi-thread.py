from threading import Thread
import time


def task():
    time.sleep(2)
    print("I have waited 2 seconds to process...")


thread_1 = Thread(target=task)
thread_1.start()
thread_1.join()
