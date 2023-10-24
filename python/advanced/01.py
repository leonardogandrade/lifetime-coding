import os

filename = "video"
extension = "tar"

# file = os.extsep.join([filename, extension])
# print(file)


def _get_gull_path(*subfolders, filename, extension="tar"):
    root_folder = os.getcwd()
    full_path = os.path.join(
        root_folder, *subfolders, os.extsep.join([filename, extension])
    )
    return full_path


result = _get_gull_path("leo", "gerheim", "andrade", filename="video")
print(result)
