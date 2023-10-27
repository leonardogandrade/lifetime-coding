import os
from threading import Thread, current_thread
from multiprocessing import current_process
import time


def task(id, stop_time):
    # time.sleep(stop_time)
    result = []

    for i in range(1000):
        for j in range(1000):
            line = i * j
            result.append(line)

    print(
        "PID: {}\tthread name: {}\tProcess Name: {}".format(
            os.getpid(), current_thread().name, current_process().name
        )
    )


queue = []

for i in range(20):
    thread = Thread(target=task, args=(1, 2))
    thread.start()
    queue.append(thread)

start = time.time()

for job in queue:
    job.join()

time_elapsed = time.time() - start
print(f"Time elapsed: {time_elapsed:.2f}")
