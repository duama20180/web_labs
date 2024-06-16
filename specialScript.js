document.addEventListener('DOMContentLoaded', () => {
    const tableContainer = document.getElementById('table-container');

    document.querySelector('.get-button').addEventListener('click', () => {
        fetch('/users')
            .then(response => response.json())
            .then(data => {
                createTable(data);
            })
            .catch(error => console.error('Error fetching data:', error));
    });

    document.querySelector('.put-button').addEventListener('click', () => {
        const user = {
            tourselect: prompt('Tour Select:'),
            firstname: prompt('First Name:'),
            lastname: prompt('Last Name:'),
            phonenumber: prompt('Phone Number:'),
            discountcode: prompt('Discount Code:')
        };

        fetch('/adding', {
            method: 'PUT',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(user)
        })
        .then(response => response.text())
        .then(message => alert(message))
        .catch(error => console.error('Error adding user:', error));
    });

    function createTable(data) {
        tableContainer.innerHTML = '';

        const table = document.createElement('table');

        const headerRow = document.createElement('tr');
        [ 'Tour Select', 'First Name', 'Last Name', 'Phone Number', 'Discount Code'].forEach(text => {
            const th = document.createElement('th');
            th.textContent = text;
            headerRow.appendChild(th);
        });
        table.appendChild(headerRow);

        data.forEach(user => {
            const row = document.createElement('tr');

            Object.values(user).forEach(value => {
                const td = document.createElement('td');
                td.textContent = value;
                row.appendChild(td);
            });

            const actionTd = document.createElement('td');
            const deleteButton = document.createElement('button');
            deleteButton.textContent = 'Delete';
            deleteButton.addEventListener('click', () => {
                fetch(`/delete/${user.phonenumber}`, { method: 'DELETE' })
                    .then(response => response.text())
                    .then(message => {
                        alert(message);
                        row.remove();
                    })
                    .catch(error => console.error('Error deleting user:', error));
            });
            actionTd.appendChild(deleteButton);
            row.appendChild(actionTd);

            table.appendChild(row);
        });

        tableContainer.appendChild(table);
    }
});