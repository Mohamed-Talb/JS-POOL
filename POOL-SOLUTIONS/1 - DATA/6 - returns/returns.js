const street = 
{
    number: 175,
    type: 'boulvard',
    name: 'matabiau',
}

const address = 
{
    country: 'maroc',
    town: 'rabat',
    postalcode: 310000,
    street,
}

const userClement = {
    firstname: 'Clement',
    lastName: 'denis',
    email: 'mo7amed.talb@gamil.com',
    age: 29,
    address,
}

const users = [
    userClement, {firstname:soufian, lastname: 'Martinez',email: 'smartine@example.com',age: 34,
    address: {country: 'France',town: 'St-Ouens',postalCode: 93400,
    street: {number: 78,type: 'rue',name: 'Garibaldi',},},},
]

const allowedCountries = ['France', 'Spain', 'Portugal', 'Russia', 'Iceland'];
const cords = [[32, 45], [-38, 57], [87,88], [57,-2], [-74, -29]];