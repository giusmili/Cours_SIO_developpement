document.addEventListener("DOMContentLoaded", e => {
    e.preventDefault();
    let User;

    User = {
        //constructeur
        construct(nom, prenom, dates) {
            this.nom = nom;
            this.prenom = prenom;
            this.dates = dates;
        },
        //getter
        printOut() {
            let desc = `${this.nom} ${this.prenom} ${this.dates}`;
            console.log(desc);
            return desc;
        }
    };

    //console.log(User)
    let user_1 = Object.create(User);
    let user_2 = Object.create(User);
    user_1.construct("Montana", "Tony", 1980);
    user_2.construct("Wayne", "Bruce", 2005);
    //appeler le getter
    user_1.printOut();
    user_2.printOut();
    let capture = [];
    capture.push(user_1, user_2);
    console.table(capture);

    //une autre façon d'utiliser un constructeur
    let skills = [1980, true, 12.5, false];
    const createUser = (nom, age, ...skills) => {
        return {
            user: `Nom ${nom}`,
            age: `Age ${age}`,
            skills: skills
        };
    };
    const newUser = createUser("Tony", 35, skills);
    console.table(newUser.skills);
    let tab_1 = [10, 20, 0];
    let tab_2 = ["Hello", ...tab_1];
    console.table(tab_2);
});