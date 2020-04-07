const express = require('express');
const cors = require('cors');
const ytdl = require('ytdl-core');
const app = express();

app.use(cors());

app.listen(4000, () => {
  console.log('Server Works !!! At port 4000');
});

async function getInfo(URL) {
   const info = await ytdl.getInfo(URL, (err, info) => info);
   return info;
}

 app.get('/download', async (request, response) => {
  let URL = request.query.URL;

   let title = (await getInfo(URL)).title.replace(/[^\x20-\x7E]/g, '');

   response.header('Content-Disposition', `attachment; filename="${title.toString()}.mp3"`);

  ytdl(URL, {
    format: 'mp3'
  }).pipe(response);
});