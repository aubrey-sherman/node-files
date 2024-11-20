import * as fs from 'fs/promises';

/** Reads file from filepath, and prints its contents.
 *
 * If the file path is invalid, prints and error and exits script.
*/
async function cat(path) {
  try {
    const fileContents = await fs.readFile(path, "utf8");
    console.log(fileContents);
  } catch(err) {
    console.log({err});
    process.exit(1);
  }
}

const filePath = process.argv[2];
await cat(filePath);