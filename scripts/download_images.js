import https from 'https';
import fs from 'fs';
import path from 'path';

const downloadImage = (url, filepath) => {
  return new Promise((resolve, reject) => {
    https.get(url, (res) => {
      if (res.statusCode === 200) {
        res.pipe(fs.createWriteStream(filepath))
           .on('error', reject)
           .once('close', () => resolve(filepath));
      } else {
        res.resume();
        reject(new Error(`Request Failed With a Status Code: ${res.statusCode}`));
      }
    }).on('error', reject);
  });
};

const images = [
  {
    name: 'electricite.jpg',
    url: 'https://upload.wikimedia.org/wikipedia/commons/c/cf/Men_working_on_an_electric_line.jpg'
  },
  {
    name: 'terrassement.jpg',
    url: 'https://upload.wikimedia.org/wikipedia/commons/1/18/Caterpillar_Excavator_in_Action.jpg'
  }
];

const dir = path.join(process.cwd(), 'public');

async function main() {
  for (const img of images) {
    try {
      console.log(`Downloading ${img.name}...`);
      await downloadImage(img.url, path.join(dir, img.name));
      console.log(`Successfully downloaded ${img.name}`);
    } catch (err) {
      console.error(`Error downloading ${img.name}:`, err.message);
    }
  }
}

main();
