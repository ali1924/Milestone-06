// syntactic sugar
class TeamMember {
  name;
  location;
  constructor(name, location, tech) {
    this.name = name;
    this.location = this.location;
  }
  // person feedback
  provideFeedBack() {
    console.log(`${name} thank you for your feedback`);
  }
}
class Instructor extends TeamMember{
  name;
  designation = "Web course instructor";
  team = "web team";
    location;
    constructor(name, location) {
        super(name, location);
    }
  startSupportSession(time) {
    console.log(`Start the support session at ${time}`);
  }
  creatQuize(moduleNo) {
    console.log(`Please create quize for module ${moduleNo}`);
  }
  // person feedback
  provideFeedBack() {
    console.log(`${name} thank you for your feedback`);
  }
}
//dev class
// syntactic sugar
class Developer extends TeamMember{
  name;
  designation = "Web course instructor";
  team = "web team";
    location;
    tech;
  // creat constuctor
  constructor(name, location,tech) {
      super(name, location);
      this.tech = tech;
  }
  developerFeature(feature) {
    console.log(`Please develop the feature ${feature}`);
  }
  release(version) {
    console.log(`Please release the version ${version}`);
  }
  // person feedback
  provideFeedBack() {
    console.log(`${name} thank you for your feedback`);
  }
}
//job placement class
class JobPlaceMent extends TeamMember{
  name;
  designation = "Job Placement Commandos";
  team = "Job Placement";
    location;
    tech;
  // creat constuctor
    constructor(name, location, tech) {
        super(name, location);
        this.tech = tech;
  }
  provideResume(feature) {
    console.log(`Please develop the feature ${feature}`);
  }
  prepareStudent(version) {
    console.log(`Please release the version ${version}`);
  }
  // person feedback
  provideFeedBack() {
    console.log(`${name} thank you for your feedback`);
  }
}

const object1 = new Instructor("Mohammad Ali", "Sirajganj");
console.log(object1);
object1.startSupportSession(`9:30pm`);
object1.creatQuize(35);
const product = {
  name: "Laptop",
  model: "Yoga 3",
  price: 49000,
  dusk: "512SSD",
};