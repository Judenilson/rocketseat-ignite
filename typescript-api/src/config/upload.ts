import crypto from "crypto";
import multer from "multer";
import { resolve } from "path";



export default {
  upload(folder: string){
    return {
      storage: multer.diskStorage({ //função do multer q permite passar algumas infos. Destino e file name.
        destination: resolve(__dirname, "..", "..", folder),
        filename: ( request, file, callback) => {
          const fileHash = crypto.randomBytes(16).toString("hex"); //criando um hash em hexadecimal para evitar arquivos com nomes duplicados
          const fileName = `${fileHash}-${file.originalname}`; // concatenando o hash com o nome original

          return callback(null, fileName);
        }
      })
    }
  }
}
