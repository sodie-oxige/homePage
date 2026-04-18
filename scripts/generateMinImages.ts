import fs from "fs";
import path from "path";
import sharp from "sharp";

const inputDir = path.resolve(process.cwd(), "src/assets/illust");
const outputDir = path.resolve(process.cwd(), "src/assets/illust/min");

if (!fs.existsSync(outputDir)) {
  fs.mkdirSync(outputDir, { recursive: true });
}

(async () => {
  const files = fs.readdirSync(inputDir);

  await Promise.all(
    files.map(async (file) => {
      if (!file.endsWith(".png")) return;

      const inputPath = path.join(inputDir, file);
      const outputPath = path.join(outputDir, file);

      await sharp(inputPath)
        .resize(500)
        .webp({ quality: 70 })
        .toFile(outputPath.replace(/\.\w+$/, ".webp"));
    }),
  );

  console.log("done");
})();
