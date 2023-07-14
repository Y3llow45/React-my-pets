export const getAll = (category = '') => {
    let url = 'http://localhost:3000/pets';
    url += (category && category !== 'all') ? `?category=${category}` : '';
    return fetch(url)
        .then(res => res.json())
        .catch(error => console.log(error));
}