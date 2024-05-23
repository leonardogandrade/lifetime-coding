import { createWriteStream, createReadStream, existsSync, mkdir } from "fs";
import path from "path";
import {
  S3Client,
  PutObjectCommand,
  ListObjectsCommand,
  DeleteObjectCommand,
} from "@aws-sdk/client-s3";

const client = new S3Client({});
const BUCKET_NAME = process.env.BUCKET_NAME;

const createFile = (filename: string): void => {
  const folderName = "files-to-upload";

  if (!existsSync(path.join(__dirname, folderName))) {
    mkdir(path.join(__dirname, folderName), (error) => {
      if (error) {
        console.error(error);
      }
    });
  }

  const fileContent = createWriteStream(
    path.join(__dirname, folderName, filename),
    {
      encoding: "utf-8",
    }
  );

  for (let idx = 0; idx < 100; idx++) {
    fileContent.write(
      "Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.\n",
      (error) => {
        if (error) {
          console.error(`${error}`);
        }
      }
    );
  }
};

const createSampleFiles = (): void => {
  for (let file of files) {
    createFile(file);
  }
};

const createAndUploadFileToS3 = async (files: string[]) => {
  for (const filename of files) {
    const command = new PutObjectCommand({
      Bucket: BUCKET_NAME,
      Key: filename,
      Body: "file body",
    });

    client.send(command);
  }
};

const uploadStreamFileToS3 = async () => {
  const stream = createReadStream(
    path.join(__dirname, "files-to-upload", "file-1.txt")
  );

  // for (const filename of files) {
  const command = new PutObjectCommand({
    Bucket: BUCKET_NAME,
    Key: "file-1.txt",
    Body: stream,
  });

  client.send(command);
  // }
};

const listObjectsFromS3 = async () => {
  const command = new ListObjectsCommand({
    Bucket: BUCKET_NAME,
  });

  const result = await client.send(command);
  const files = result.Contents?.map((filename) => {
    return filename;
  });
  return files;
};

const deleteFileFromS3 = async (files: string[]) => {
  for (const filename of files!) {
    const command = new DeleteObjectCommand({
      Bucket: BUCKET_NAME,
      Key: filename,
    });
    console.log(`file: ${filename} deleted successfully`);
    client.send(command);
  }
  console.log("deletion done!");
};

const createBucketFolder = async (folderName: string) => {
  const command = new PutObjectCommand({
    Bucket: BUCKET_NAME,
    Key: `${folderName}/`,
  });

  client.send(command);
};

const copyFiles = async (filesPath: string[]) => {
  try {
    for (let filename of filesPath) {
      const stream = createReadStream(filesPath[0]);

      let command = new PutObjectCommand({
        Bucket: BUCKET_NAME,
        Key: `test-folder/${filename}`,
        Body: stream,
      });

      client.send(command);
    }
  } catch (error) {
    throw new Error(`Error: ${error}`);
  }
};

const files = [
  "file-1.txt",
  "file-2.txt",
  "file-3.txt",
  "file-4.txt",
  "file-5.txt",
];

// uploadStreamFileToS3();

// uploadFileToS3(files);

// createBucketFolder("test-folder");

// copyFiles(["files-to-upload/file-2.txt"]);

// listObjectsFromS3().then((resolve) => {
//   console.log(resolve);
// });

// deleteFileFromS3(files.slice(0, 1));
