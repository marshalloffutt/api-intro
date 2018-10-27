const loadAPI = () => {
    return new Promise((resolve, reject) => {
        $.ajax({
            url: 'https://icanhazdadjoke.com/',
            headers: {
                accept: 'application/json'
            }
        })
            .done((data) => {
                resolve(data);
                console.log(data);
                $("#api").html(data.joke);
            })
            .fail((error) => {
                reject(error);
            })
    });
}

loadAPI();