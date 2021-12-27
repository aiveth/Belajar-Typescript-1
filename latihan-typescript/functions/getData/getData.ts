import { data as article, Article, Comments } from "../../article.response";

const getData = (data: Article[]) => {
  let body: string = '';
  data.map((item: Article) => {
    body += `
      Data Artikel :
      Judul: ${item.attributes.title}
      Isi: ${item.attributes.body}
      Dipublish : ${item.attributes.published ? 'Ya' : 'Tidak'}

      Data Author :
      Nama: ${item.author.name}
      Umur: ${item.author.age}
    `;
    item.comments.map((comment: Comments) => {
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

export default getData;