document.getElementById('fetchDataButton').addEventListener('click', async () => {
    try {
      const response = await fetch('/api/data');
      const data = await response.json();
  
      const dataContainer = document.getElementById('dataContainer');
      dataContainer.innerHTML = '';
  
      data.forEach(item => {
        const div = document.createElement('div');
        div.classList.add('item');
        div.innerHTML = `
          <h3>${item.name}</h3>
          <p>${item.description}</p>
        `;
        dataContainer.appendChild(div);
      });
    } catch (error) {
      console.error('Error fetching data:', error);
    }
  });
  