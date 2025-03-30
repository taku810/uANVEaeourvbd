document.getElementById('fetchButton').addEventListener('click', fetchData);

async function fetchData() {
    const apiUrl = 'https://randomfox.ca/floof';

    try {
        const response = await fetch(apiUrl);
        if (!response.ok) {
            throw new Error('ネットワークが応答しません'); 
        }
        const data = await response.json();
        document.getElementById('res_img').src = data.image;
        document.getElementById('res_img').alt = data.image;
        document.getElementById('res_url').textContent = data.image;
    } catch (error) {
        console.error('Error:', error);
        document.getElementById('res_url').textContent = 'Error: ' + error.message;
    }
}
