import fs from 'fs/promises';

const generateFileListsSmart = async () => {

  let prefixes = ['blog', 'recipes'];

  for (let i in prefixes) {
    let prefix = prefixes[i]
    try {
      const files = await fs.readdir('./md/' + prefix);
      const fileList = JSON.stringify(files, null, 2);
      const generatedFileName = './src/' + prefix + 'Files.json';
      await fs.writeFile(generatedFileName, fileList);
      console.log(prefix + ' file list was generated successfully: ' + generatedFileName);
    } catch (error) {
      console.error('Error generating' + prefix + ' file list:', error.message);
    }
  }
};

generateFileListsSmart();