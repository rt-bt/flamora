import http from 'node:http';

const routes = ['/', '/menu', '/about', '/find-us', '/franchise', '/terms', '/sitemap.xml', '/robots.txt'];

async function testRoute(path) {
  return new Promise((resolve) => {
    http.get(`http://localhost:3000${path}`, (res) => {
      resolve({ path, status: res.statusCode });
    }).on('error', (err) => {
      resolve({ path, error: err.message });
    });
  });
}

async function main() {
  for (const r of routes) {
    const res = await testRoute(r);
    console.log(`${res.path.padEnd(15)} : ${res.status || res.error}`);
  }
}

main();
