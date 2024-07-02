class user {
    constructor(name, email) {
        this.name = name;
        this.email = email;
    }

    viewData() {
        console.log("data");
    }
};

class admin extends user {
    editData() {
        console.log("Edit Data");
    }
};


let stu1 = new user("Sumit", "sumit9266@gmail.com");
let stu2 = new user("Prachi", "prachi9266@gmail.com");