"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const getData = (data) => {
    let body = '';
    data.map((item) => {
        body += `
      Data Artikel :
      Judul: ${item.attributes.title}
      Isi: ${item.attributes.body}
      Dipublish : ${item.attributes.published ? 'Ya' : 'Tidak'}

      Data Author :
      Nama: ${item.author.name}
      Umur: ${item.author.age}
    `;
        item.comments.map((comment) => {
            body += `
      Data Komentar :
      Nama: ${comment.name}
      Isi: ${comment.body}

      ======================================================
      `;
        });
    });
    return body;
};
exports.default = getData;
