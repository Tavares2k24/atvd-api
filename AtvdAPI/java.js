async function fetchData() {
    try {
        const response = await fetch('https://parallelum.com.br/fipe/api/v1/motos/marcas');
        const data = await response.json();
        return data;
    } catch (error) {
        console.error('Erro ao buscar os dados da API:', error);
    }
}

async function displayData() {
    const apiData = await fetchData();

    const table = document.getElementById('api-Data');

    table.innerHTML = 'motos';

    apiData.forEach(item => {
        const row = document.createElement('tr');
        const cell1 = document.createElement('td');
        const cell2 = document.createElement('td');

        cell1.textContent = item.campo1;
        cell2.textContent = item.campo2;

        row.appendChild(cell1);
        row.appendChild(cell2);
        table.appendChild(row);
    });
}
displayData();