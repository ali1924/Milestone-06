// syntactic sugar
class Instructor{
    name;
    designation = 'Web course instructor';
    team = 'web team';
    location;
    startSupportSession(time) {
        console.log(`Start the support session at ${time}`);
    }
    creatQuize(moduleNo) {
        console.log(`Please create quize for module ${moduleNo}`);
    }
    // creat constuctor
    constructor(name,location) {
        this.name = name;
        this.location = this.location;
    }
}
const object1 = new Instructor('Mohammad Ali','Sirajganj');
console.log(object1);
object1.startSupportSession(`9:30pm`);
object1.creatQuize(35);
