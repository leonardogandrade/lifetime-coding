def format(fn):
    def wrapper(data):
        return map(fn, sorted(data))

    return wrapper


@format
def pronoum_data(users):
    return f'{"Mr." if users[2] == "M" else "Ms."} {users[0]} {users[1]}'


if __name__ == "__main__":
    users = [input().split() for i in range(int(input()))]
    print(*pronoum_data(users), sep="\n")
