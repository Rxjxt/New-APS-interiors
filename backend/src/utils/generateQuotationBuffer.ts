import PDFDocument from "pdfkit";
import { Writable } from "stream";
import buildQuotationPDF from "./buildQuotationPDF";

class MemoryStream extends Writable {
  private chunks: Buffer[] = [];

  _write(
    chunk: any,
    encoding: BufferEncoding,
    callback: (error?: Error | null) => void
  ) {
    this.chunks.push(Buffer.from(chunk));
    callback();
  }

  getBuffer() {
    return Buffer.concat(this.chunks);
  }
}

const generateQuotationBuffer = (
  quotation: any
): Promise<Buffer> => {
  return new Promise((resolve, reject) => {
    try {
      const doc = new PDFDocument({
        size: "A4",
        margin: 40,
        bufferPages: true,
      });

      const stream = new MemoryStream();

      doc.pipe(stream);

      buildQuotationPDF(doc, quotation);

      doc.end();

      stream.on("finish", () => {
        resolve(stream.getBuffer());
      });

      stream.on("error", reject);
    } catch (err) {
      reject(err);
    }
  });
};

export default generateQuotationBuffer;