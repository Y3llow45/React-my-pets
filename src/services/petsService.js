export const getAll = (category = '') => {
    let url = 'http://localhost:3000/pets';
    url += category
        ? `?category=${this.props.match.params.category}`
        : '';
    return fetch(url)
        .then(res => res.json())
        .catch(error => console.log(error));
}