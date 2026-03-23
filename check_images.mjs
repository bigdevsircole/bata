import fs from 'fs';
import https from 'https';

const checkUrl = (url) => new Promise((resolve) => {
    https.get(url, (res) => {
        resolve({url, status: res.statusCode});
    }).on('error', (e) => {
        resolve({url, status: 0});
    });
});

async function run() {
    let urls = [];
    
    // Check shoes
    const content = fs.readFileSync('./src/data/shoes.js', 'utf8');
    const matches = content.match(/https:\/\/images\.unsplash\.com[^"']+/g) || [];
    urls.push(...matches);
    
    // Check App.jsx
    const appContent = fs.readFileSync('./src/App.jsx', 'utf8');
    const appMatches = appContent.match(/https:\/\/images\.unsplash\.com[^"']+/g) || [];
    urls.push(...appMatches);
    
    const uniqueUrls = [...new Set(urls)];
    console.log(`Testing ${uniqueUrls.length} unique URLs...`);
    
    const maxConcurrent = 5;
    let broken = [];
    
    for (let i = 0; i < uniqueUrls.length; i += maxConcurrent) {
        const batch = uniqueUrls.slice(i, i + maxConcurrent);
        const results = await Promise.all(batch.map(checkUrl));
        for (const r of results) {
            if (r.status === 404 || r.status === 0 || r.status === 403 || r.status === 401) {
                console.log(`BROKEN [${r.status}]: ${r.url}`);
                broken.push(r.url);
            }
        }
    }
    
    console.log(`Finished. Found ${broken.length} broken images.`);
}

run();
