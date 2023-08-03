import { useState } from 'react';

export default function WritePost() {
  // const [formData, setFormData] = useState({
  //   title: '',
  //   content: '',
  //   // Outros campos relevantes para o post
  // });

  // const handleChange = (e) => {
  //   const { name, value } = e.target;
  //   setFormData((prevData) => ({
  //     ...prevData,
  //     [name]: value,
  //   }));
  // };

  // const handleSubmit = (e) => {
  //   e.preventDefault();
  //   // Aqui você pode salvar os dados do post em um banco de dados ou arquivo
  //   console.log('Dados do post:', formData);
  //   // Lógica para salvar o post
  // };

  return (
    <div>
      <h1>Escrever Post</h1>
      <form /* onSubmit={handleSubmit}*/>
        <div>
          <label htmlFor="title">Título:</label>
          <input
            type="text"
            id="title"
            name="title"
            /* value={formData.title}
            onChange={handleChange} */
            required
          />
        </div>
        <div>
          <label htmlFor="content">Conteúdo:</label>
          <textarea
            id="content"
            name="content"
            /* value={formData.content}
            onChange={handleChange} */
            required
          />
        </div>
        {/* Outros campos do formulário, se necessário */}
        <button type="submit">Publicar</button>
      </form>
    </div>
  );
}
