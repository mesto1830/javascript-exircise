
async function addImageProcess(src) {
  let img = new Image();
  img.src = src;
  return new Promise((resolve, reject) => {
    img.onload = () => resolve(img);
    img.onerror = reject;
  });
}

async function generatePdf(imageUrls) {
  const doc = new jsPDF();
  for (const [i, url] of imageUrls.entries()) {
    const image = await addImageProcess(url);
    doc.addImage(image, "png", 5, 5, 0, 0);
    if (i !== imageUrls.length - 1) {
      doc.addPage();
    }
  }
  return doc;
}

const imageUrls = ["./img1.png", "./img2.png"];

async function savePdf() {
  const multiPng = await generatePdf(imageUrls);
  multiPng.output("save", "multiPng.pdf");
}

