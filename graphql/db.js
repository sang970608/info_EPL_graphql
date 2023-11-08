export const people = [
    {
        id: "1",
        name : "Sangwon",
        age: 27,
        gender: "male"
    },{
        id: "2",
        name : "Sangwon",
        age: 27,
        gender: "male"
    },{
        id: "3",
        name : "Sangwon",
        age: 27,
        gender: "male"
    },{
        id: "4",
        name : "Sangwon",
        age: 27,
        gender: "male"
    }
]

const getById = id => {
    const filteredPeople = movies.filter(person => id === people.id);
    return filteredPeople[0];
}