function fetchData(){
    url = 'https://us-central1-js-capstone-backend.cloudfunctions.net/api/games/CQp6IQNJHqci9cABZdrC/scores/';

        fetch(url, {
            method: 'GET', 
            headers: {
                'Content-Type': 'application/json; charset=UTF-8',
            },
        })
        .then((response)=>{
            if (!response.ok) {
                throw new Error('Network response was not ok');
            }
            return response.json();
        })
        .then((data)=>{
            const tablee = document.getElementById('table');
            tablee.innerHTML = `<tr><td class = "bold">Name</td> <td class = "bold">Score</td></tr>`;
            data.result.forEach(element => {
                const t_row = document.createElement('tr');
                const t_data1 = document.createElement('td');
                const t_data2 = document.createElement('td');
                t_data1.innerHTML = element.user;
                t_data2.innerHTML = element.score;
                t_row.appendChild(t_data1);
                t_row.appendChild(t_data2);
                tablee.appendChild(t_row);
            });
        })
        
}


document.getElementById('addBtn').addEventListener('click',()=>{
    const name =document.getElementById('name').value;
    const score = document.getElementById('score').value;    
    fetch(url, {
        method: 'POST', 
        headers: {
            'Content-Type': 'application/json; charset=UTF-8',
        },
        body: JSON.stringify({ user: name, score: score }),
    })
    document.getElementById('name').value = "";
    document.getElementById('score').value = "";
    getScores();
})
fetchData();