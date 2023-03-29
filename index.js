const http = require('https');


const PORT = 3000;

const urls = [
  'https://balanbogdan94.github.io/ICGiraffes/'
]

const server = http.createServer(async (req, res) => {
    res.statusCode = 200;
    res.setHeader('Content-Type', 'text/plain');
    const errors = await checkUrls()
    res.end(errors
        .map(url => `Error: ${url} is not available`).join(","));
  });

  server.listen(PORT, () => {
    console.log(`Server running at http://localhost:${PORT}/`);
  });


const checkUrls = async () => {
    const errorList = [];
    await urls.forEach(url => {
    http.get(url, res => {
    }).on('error', err => {
        errorList.push(url);
    });
    });
    return errorList;
}
