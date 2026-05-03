import { readdir, writeFile } from "node:fs/promises";

const generateFileListsSmart = async (): Promise<void> => {
  const prefixes: string[] = ["blog", "recipes"];

  for (const prefix of prefixes) {
    try {
      // Correct paths for your project structure
      const folderPath = `./public/md/${prefix}`;
      const files = await readdir(folderPath);

      const fileList = JSON.stringify(files, null, 2);
      const generatedFileName = `./src/${prefix}Files.json`;

      await writeFile(generatedFileName, fileList);

      console.log(`✅ ${prefix} list generated: ${generatedFileName}`);
    } catch (error) {
      if (error instanceof Error) {
        console.error(`❌ Error in ${prefix}:`, error.message);
      }
    }
  }
};

generateFileListsSmart();
