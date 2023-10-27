import os
from multiprocessing import Process, current_process
import time


def task(id, freeze_time):
    # time.sleep(freeze_time)
    result = []

    for i in range(1000):
        for j in range(1000):
            line = i * j
            result.append(line)

    print("PID: {}\tCurrent Process: {}".format(os.getpid(), current_process().name))


if __name__ == "__main__":
    queue = []

    start_time = time.time()

    for i in range(20):
        proc = Process(target=task, args=(i, 2))
        proc.start()
        queue.append(proc)

    for job in queue:
        job.join()

    print("Time elapsed: {}".format(time.time() - start_time))
    # for q in queue:
    #     q.join()
