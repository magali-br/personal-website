import fs from 'fs/promises';

const generateFileListsSmart = async () => {

  let prefixes = ['blog', 'recipes'];

  for (let i in prefixes) {
    let prefix = prefixes[i]
    try {
      const files = await fs.readdir('./md/' + prefix);
      const fileList = JSON.stringify(files, null, 2);
      await fs.writeFile('./src/' + prefix + 'Files.json', fileList);
      console.log(prefix + ' file list was generated successfully.');
    } catch (error) {
      console.error('Error generating' + prefix + ' file list:', error.message);
    }
  }
};

// const generateFileLists = async () => {

//   try {
//     const files = await fs.readdir('./md/blog');
//     const fileList = JSON.stringify(files, null, 2);
//     await fs.writeFile('./src/blogFiles.json', fileList);
//     console.log('Blog file list was generated successfully.');
//   } catch (error) {
//     console.error('Error generating blog file list:', error.message);
//   }

//   try {
//     const files = await fs.readdir('./md/recipes');
//     const fileList = JSON.stringify(files, null, 2);
//     await fs.writeFile('./src/recipeFiles.json', fileList);
//     console.log('Recipe file list was generated successfully.');
//   } catch (error) {
//     console.error('Error generating recipe file list:', error.message);
//   }
// };

generateFileListsSmart();