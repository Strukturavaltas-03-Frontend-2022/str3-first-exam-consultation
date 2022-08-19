const findMinimumAge = (people = [{age: 33}]) => {
    let min = people[0];
    people.forEach( p => {
        if (p.age < min.age) {
            min = p;
        }
    });

    return min;
};

export {
    findMinimumAge,
}