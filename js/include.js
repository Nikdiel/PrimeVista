document.addEventListener("DOMContentLoaded", () => {
    
    fetch('header.html')
        .then(response => {
            if (!response.ok) { 
                throw new Error('Ошибка загрузки header.html');
            }
            return response.text(); 
        })
        .then(data => {
            document.getElementById('header').innerHTML = data; 
        })
        .catch(error => console.error('Ошибка:', error)); 

    
    fetch('footer.html') 
        .then(response => {
            if (!response.ok) {
                throw new Error('Ошибка загрузки footer.html');
            }
            return response.text();
        })
        .then(data => {
            document.getElementById('footer').innerHTML = data; 
        })
        .catch(error => console.error('Ошибка:', error));
        
});