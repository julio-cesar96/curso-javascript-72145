const url = "https://jsonplaceholder.typicode.com/posts";

async function buscarPosts() {
    try {
        const response = await fetch(url);
        if (!response.ok) {
            throw new Error(`Erro ao buscar dados: ${response.statusText}`);
        }

        const posts = await response.json();
        posts.forEach(post => {
            console.log(`id: ${post.id}`);
            console.log(`Título: ${post.title}`);
            console.log(`Descrição: ${post.body}`);
            console.log('-------------');
        });
    } catch (error) {
        console.error('Erro:', error.message);
    }
}

buscarPosts();