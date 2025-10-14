const { SitemapStream, streamToPromise } = require("sitemap");
const { createWriteStream } = require("fs");

async function generateSitemap() {
  const links = [
    { url: "/", changefreq: "daily", priority: 1.0 },
    { url: "/crypto-toolkit" },
    { url: "/json-formatter" },
    { url: "/url-encoder" },
    { url: "/base64-converter" },
    { url: "/code-diff" },
    { url: "/sha1-tool" },
    { url: "/privacy-policy" },
    { url: "/about" },
  ];

  const stream = new SitemapStream({ hostname: "https://techwebcode.in" });
  const writeStream = createWriteStream("./public/sitemap.xml");

  stream.pipe(writeStream);
  links.forEach(link => stream.write(link));
  stream.end();

  await streamToPromise(stream);
  console.log("✅ Sitemap generated at public/sitemap.xml");
}

generateSitemap();
