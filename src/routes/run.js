import express from 'express';
import { exec } from 'child_process';
import fs from 'fs';
import path from 'path';

const router = express.Router();

router.post('/', async (req, res) => {
  const { code, language } = req.body;
  const allowedLangs = ['python', 'cpp', 'javascript'];

  if (!allowedLangs.includes(language)) {
    return res.status(400).json({ error: 'Unsupported language' });
  }

  const codeFile = {
    python: 'user_code.py',
    cpp: 'user_code.cpp',
    javascript: 'user_code.js'
  }[language];

  const folder = path.join('docker', language);
  const codePath = path.join(folder, codeFile);

  // Save user code into language folder
  fs.writeFileSync(codePath, code);

  const imageName = `${language}-runner`;
  const buildCmd = `docker build -t ${imageName} ${folder}`;
 
  
  const runCmd = `docker run --rm --cpus=".5" --memory="128m" ${imageName}`;

  // Build the Docker image
  exec(buildCmd, (buildErr, buildStdout, buildStderr) => {
    if (buildErr) {
      console.error('Build failed:', buildStderr);
      return res.status(500).json({ error: 'Build failed' });
    }

    // Run the Docker container
    exec(runCmd, (runErr, stdout, stderr) => {
      if (runErr) {
        console.error('Run error:', stderr);
        return res.status(500).json({ error: stderr || 'Execution failed' });
      }

      return res.json({ output: stdout });
    });
  });
});

export default router;
