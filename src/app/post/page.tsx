/* eslint-disable react/no-unescaped-entities */
export default function Home() {
  return (
    <>
    <main className="px-8 flex flex-col justify-center text-center py-8">
      <div className="flex justify-center gap-2 mb-6">
        <p className="py-2 px-4 border-2 border-black rounded-3xl font-bold text-xs">Next.JS</p>
        <p className="py-2 px-4 border-2 border-black rounded-3xl font-bold text-xs">FrontEnd</p>
        <p className="py-2 px-4 border-2 border-black rounded-3xl font-bold text-xs">Programação</p>
      </div>
      <h1 className="text-4xl font-extrabold py-2 w-3/4 text-center m-auto">Introdução ao Next.js: Acelerando o Desenvolvimento Web com Poder e Eficiência</h1>
      <div>
              <div className="flex gap-2 justify-center">
              <img className="rounded-full w-4 h-4" src="https://images.unsplash.com/photo-1438761681033-6461ffad8d80?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=870&q=80" alt="" />
              <p  className="font-medium text-xs">Tiago G. Cordeiro</p>
              <p className="font-extrabold text-xs">·</p>
              <p  className="font-medium text-xs">28/07/2023</p>
            </div>
      </div>
      <h4 className="text-sm m-auto w-3/4 font-normal py-2">Se você é um desenvolvedor web em busca de uma estrutura moderna e poderosa para a construção de aplicativos web, então o Next.js pode ser a escolha perfeita para você. Com recursos incríveis e uma comunidade ativa de desenvolvedores, o Next.js tem se destacado como uma das principais opções para o desenvolvimento de aplicativos React.js.</h4>
      <img className="rounded-xl w-full h-72 py-2" src="https://images.unsplash.com/photo-1661956600684-97d3a4320e45?ixlib=rb-4.0.3&ixid=M3wxMjA3fDF8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=870&q=80" alt="" />
      <div className="mt-8 grid grid-cols-3 gap-24">
        <div className="col-span-2 text-left text-sm gap-3 grid">
          <h2 className="text-2xl font-extrabold pt-4">O que é o Next.js?</h2>

          <p>Em poucas palavras, o Next.js é um framework do lado do servidor (server-side) para React.js. Ele foi criado com a ideia de tornar o desenvolvimento web mais fácil, permitindo que você se concentre em escrever código e criando aplicativos incríveis, em vez de lidar com complexidades de configuração.</p>

          <p>Uma das principais características do Next.js é o suporte para renderização híbrida, o que significa que você pode renderizar páginas do lado do servidor (SSR), do lado do cliente (CSR) ou uma combinação dos dois (SSG), tudo dentro da mesma estrutura.</p>

          <h2 className="text-2xl font-extrabold pt-4">Configurando o Ambiente de Desenvolvimento</h2>

          <p>Antes de começar a trabalhar com Next.js, você precisará configurar o ambiente de desenvolvimento. Certifique-se de que o Node.js esteja instalado em seu sistema. O Node.js é essencial, pois é a plataforma que permite executar o JavaScript fora do navegador.</p>

          <p>Para verificar se o Node.js já está instalado, abra seu terminal ou prompt de comando e digite o seguinte comando:</p>

          <pre className="bg-black text-white p-3 rounded-sm">node -v</pre>

          <p>Se o Node.js estiver instalado, você verá a versão instalada sendo exibida no terminal. Caso não esteja instalado, você pode baixá-lo no site oficial do Node.js (https://nodejs.org/) e seguir as instruções de instalação para o seu sistema operacional.</p>

          <p>Além do Node.js, você também pode optar por usar o gerenciador de pacotes npm ou o Yarn. Ambos são utilizados para instalar e gerenciar as dependências do projeto. O npm vem instalado junto com o Node.js, mas caso você prefira usar o Yarn, pode instalá-lo seguindo as instruções em https://yarnpkg.com/.</p>

          <p>Com o Node.js e o gerenciador de pacotes instalados, estamos prontos para criar nosso primeiro projeto Next.js!</p>

          <h2 className="text-2xl font-extrabold pt-2">Criando um Projeto Next.js</h2>

          <p>O Next.js oferece uma ferramenta de linha de comando (CLI) para facilitar a criação de novos projetos. Abra o terminal ou prompt de comando e execute o seguinte comando para criar um novo projeto Next.js:</p>

          <pre className="bg-black text-white p-3 rounded-sm">npx create-next-app nome-do-seu-projeto</pre>

          <p>Isso criará uma nova pasta com o nome "nome-do-seu-projeto" contendo a estrutura básica do projeto Next.js.</p>

          <h2 className="text-2xl font-extrabold pt-2">Projetos para Começar no Next.js: Inspirando seu Aprendizado em Desenvolvimento Web</h2>

          <p>Se você é um desenvolvedor web em busca de projetos práticos e envolventes para aprimorar suas habilidades com o Next.js, você está no lugar certo! Neste artigo, vamos listar alguns projetos interessantes que você pode criar usando o Next.js. Estes projetos são ideais para desenvolver suas habilidades e conhecer os recursos poderosos desta estrutura moderna.</p>

          <h4 className="text-lg font-extrabold pt-2">1. Site Pessoal ou Portfólio</h4>
          <p>Criar um site pessoal ou portfólio é uma maneira fantástica de explorar o desenvolvimento de páginas estáticas (SSG) com o Next.js. Neste projeto, você pode apresentar suas habilidades, experiência e trabalhos anteriores em um site bem projetado. Aprenda a criar seções, exibir projetos e informações pessoais, além de usar estilos para dar vida ao seu site.</p>

          <h4 className="text-lg font-extrabold pt-2">2. Blog Pessoal</h4>
          <p>Desenvolver um blog pessoal é uma oportunidade para praticar a criação de páginas estáticas (SSG) e renderizar dinamicamente conteúdo de postagens usando rotas dinâmicas do Next.js. Dê vida às suas ideias compartilhando suas experiências, conhecimentos e interesses em artigos atrativos.</p>

          <h4 className="text-lg font-extrabold pt-2">3. Loja Online</h4>
          <p>Crie uma loja online simples para praticar a criação de páginas dinâmicas (SSR) com o Next.js. Neste projeto, você pode listar produtos, adicionar funcionalidade de carrinho de compras e exibir detalhes de produto. Aprenda a interagir com os dados do servidor para fornecer uma experiência de compra fluida.</p>

          <h4 className="text-lg font-extrabold pt-2">4. Aplicativo de Tarefas (To-Do List)</h4>
          <p>Um aplicativo de tarefas (to-do list) é um projeto clássico para entender a lógica do estado do aplicativo e a interação entre componentes em uma aplicação Next.js. Crie, edite e remova tarefas para organizar suas atividades diárias de forma eficiente.</p>

          <h4 className="text-lg font-extrabold pt-2">5. Aplicativo de Clima (Weather App)</h4>
          <p>Desenvolva um aplicativo que consuma uma API de previsão do tempo para exibir informações climáticas em tempo real. Integre a API de clima e aprenda a exibir os dados de forma amigável e interativa.</p>

          <h4 className="text-lg font-extrabold pt-2">6. Galeria de Fotos</h4>
          <p>Construa uma galeria de fotos para praticar a criação de componentes reutilizáveis e a exibição de imagens de forma responsiva. Deixe sua criatividade fluir ao criar uma experiência visualmente atraente para os visitantes do seu site.</p>

          <h4 className="text-lg font-extrabold pt-2">7. Rede Social Simples</h4>
          <p>Aprenda a implementar a autenticação de usuário e crie um aplicativo de rede social básica. Neste projeto, os usuários podem criar postagens, seguir outros usuários e interagir com as postagens de maneira simples e intuitiva.</p>

          <h4 className="text-lg font-extrabold pt-2">8. Aplicativo de Notícias (News App)</h4>
          <p>Consumir uma API de notícias é uma ótima maneira de aprender como exibir e filtrar informações de fontes externas. Crie um aplicativo que exiba as principais notícias e permita que os usuários pesquisem tópicos de interesse.</p>

          <h4 className="text-lg font-extrabold pt-2">9. Aplicativo de Chat em Tempo Real</h4>
          <p>Implemente um aplicativo de chat em tempo real usando WebSockets. Neste projeto, os usuários podem trocar mensagens instantâneas e experimentar a interatividade em tempo real.</p>

          <h4 className="text-lg font-extrabold pt-2">10. Aplicativo de Quiz</h4>
          <p>Crie um aplicativo de quiz interativo, permitindo que os usuários respondam perguntas e exibindo os resultados em tempo real. Desenvolva uma experiência envolvente para testar o conhecimento dos usuários em diversos temas.</p>

          <h3 className="text-2xl font-extrabold pt-6">Conclusão</h3>

          <p>O Next.js é uma ferramenta poderosa para o desenvolvimento web moderno. Neste artigo, apenas arranhamos a superfície de tudo que o Next.js tem a oferecer. A partir de agora, você pode explorar mais recursos e funcionalidades, como páginas estáticas e dinâmicas, layout, gerenciamento de estado e muito mais.</p>

          <p>Espero que este artigo tenha lhe dado uma introdução sólida ao Next.js e o inspire a criar aplicativos incríveis. Divirta-se codificando e continue aprendendo para se aprofundar nesse empolgante mundo do desenvolvimento web com Next.js!</p>
          
        </div>
        <aside className="rounded-xl p-4 drop-shadow-2xl bg-gray-100">
          <div className="text-left">
            <h3 className="font-bold text-left mb-2">
              Conteudos relacionados
            </h3>

            <div className="flex flex-col gap-2">
              <img className="rounded-xl" src="https://images.unsplash.com/photo-1661956602944-249bcd04b63f?ixlib=rb-4.0.3&ixid=M3wxMjA3fDF8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=870&q=80" alt="" />
              <h3 className="font-medium">Titulo</h3>
              <p className="font-light text-sm">Lorem ipsum dolor sit amet consectetur adipisicing elit. Iste, expedita! Illo eos blanditiis reprehenderit non vero magnam impedit ab ullam esse voluptatum dolor enim, temporibus et, amet id quaerat. </p>
              <div className="flex gap-2 border-b-4 pb-4 border-gray-500">
                <img className="rounded-full w-4 h-4" src="https://images.unsplash.com/photo-1438761681033-6461ffad8d80?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=870&q=80" alt="" />
                <p  className="font-medium text-xs">Autor do Post</p>
                <p className="font-extrabold text-xs">·</p>
                <p  className="font-medium text-xs">28/07/2023</p>
              </div>

            
            </div>

            <div className="flex flex-col gap-2 mt-4">
              <img className="rounded-xl" src="https://images.unsplash.com/photo-1661956602944-249bcd04b63f?ixlib=rb-4.0.3&ixid=M3wxMjA3fDF8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=870&q=80" alt="" />
              <h3 className="font-medium">Titulo</h3>
              <p className="font-light text-sm">Lorem ipsum dolor sit amet consectetur adipisicing elit. Iste, expedita! Illo eos blanditiis reprehenderit non vero magnam impedit ab ullam esse voluptatum dolor enim, temporibus et, amet id quaerat. </p>
              <div className="flex gap-2 border-b-4 pb-4 border-gray-500">
                <img className="rounded-full w-4 h-4" src="https://images.unsplash.com/photo-1438761681033-6461ffad8d80?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=870&q=80" alt="" />
                <p  className="font-medium text-xs">Autor do Post</p>
                <p className="font-extrabold text-xs">·</p>
                <p  className="font-medium text-xs">28/07/2023</p>
              </div>

            
          </div>

          <div className="flex flex-col gap-2 mt-4">
              <img className="rounded-xl" src="https://images.unsplash.com/photo-1661956602944-249bcd04b63f?ixlib=rb-4.0.3&ixid=M3wxMjA3fDF8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=870&q=80" alt="" />
              <h3 className="font-medium">Titulo</h3>
              <p className="font-light text-sm">Lorem ipsum dolor sit amet consectetur adipisicing elit. Iste, expedita! Illo eos blanditiis reprehenderit non vero magnam impedit ab ullam esse voluptatum dolor enim, temporibus et, amet id quaerat. </p>
              <div className="flex gap-2 border-b-4 pb-4 border-gray-500">
                <img className="rounded-full w-4 h-4" src="https://images.unsplash.com/photo-1438761681033-6461ffad8d80?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=870&q=80" alt="" />
                <p  className="font-medium text-xs">Autor do Post</p>
                <p className="font-extrabold text-xs">·</p>
                <p  className="font-medium text-xs">28/07/2023</p>
              </div>

            
          </div>
            
          </div>
        </aside>
        

      </div>
    </main>
    </>
  )
}