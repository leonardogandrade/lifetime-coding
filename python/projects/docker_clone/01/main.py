import os
import sys
import subprocess
import requests

args = sys.argv


def main():
    completed_proccess = subprocess.run(["/bin/echo"], capture_output=True)
    print(completed_proccess.stdout.decode("utf-8"))
    download_file("v18")


def download_file(version):
    url = f"https://github.com/codecrafters-io/docker-explorer/releases/download/{version}/{version}_linux_amd64"
    data = requests.get(url)
    image_path = os.path.join(os.getcwd(), "images")
    os.chroot(image_path)
    open(os.path.join(os.getcwd(), "images", "file"), "wb").write(data.content)


def pull_image():
    root_folder = os.getcwd()
    os.chroot(os.path.join(root_folder, "images"))
    finished_proccess = subprocess.run(["nerdctl.lima run ubuntu"])
    pass


if __name__ == "__main__":
    main()
