def transform_date_format(dates):
    formated = []
    for date in dates:
        if date.find("/") > 0:
            y = date.split("/")[0]
            m = date.split("/")[1]
            d = date.split("/")[2]
            _d = [y] + [d] + [m]

            formated.append("".join(_d))
        elif date.find("p") > 0:
            y = date.split("p ")[0]
            m = date.split("p ")[1]
            d = date.split("p ")[2]
            _d = [y] + [m] + [d]

            formated.append("".join(_d).replace(" ", ""))
        elif date.find(" ") > 0:
            y = date.split(" ")[0]
            d = date.split(" ")[1]
            m = date.split(" ")[2]
            _d = [y] + [d] + [m]

            formated.append("".join(_d))
        elif date.find("-") > 0:
            m = date.split("-")[0]
            d = date.split("-")[1]
            y = date.split("-")[2]
            _d = [y] + [d] + [m]

            formated.append("".join(_d))

        else:
            y = date[:4]
            d = date[4:6]
            m = date[6:]
            _d = [y] + [d] + [m]

            formated.append("".join(_d))

    return formated


if __name__ == "__main__":
    dates = transform_date_format(
        ["2010/02/20", "2 016p 19p 12", "11-18-2012", "2018 12 24", "20130720"]
    )
    print(*dates, sep="\n")
