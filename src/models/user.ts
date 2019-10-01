export default class User {
  userId: string;
  name: string;
  photoURL: string;

  constructor(data) {
    this.userId = data.userId;
    this.name = data.name;
    this.photoURL = data.photoURL;
  }
}
