const fs = require('fs');
const https = require('https');
const path = require('path');

const filePath = path.resolve(__dirname, 'monacoshield-logo.png'); // Placez votre logo ici
const fileName = path.basename(filePath);

function uploadToTransferSh(filePath, fileName) {
  const fileStream = fs.createReadStream(filePath);
  const options = {
    method: 'PUT',
    hostname: 'transfer.sh',
    path: `/${fileName}`,
    headers: {
      'Content-Type': 'application/octet-stream',
    },
  };

  const req = https.request(options, (res) => {
    let data = '';
    res.on('data', (chunk) => {
      data += chunk;
    });
    res.on('end', () => {
      if (res.statusCode === 200) {
        console.log('Logo uploadé avec succès ! URL publique :');
        console.log(data.trim());
      } else {
        console.error('Erreur l’upload:', res.statusCode, data);
      }
    });
  });

  req.on('error', (e) => {
    console.error('Erreur réseau :', e);
  });

  fileStream.pipe(req);
}

if (fs.existsSync(filePath)) {
  uploadToTransferSh(filePath, fileName);
} else {
  console.error('Fichier logo introuvable :', filePath);
  console.log('Placez votre logo sous le nom "monacoshield-logo.png" dans le dossier :', __dirname);
} 