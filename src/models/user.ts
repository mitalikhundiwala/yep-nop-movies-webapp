export default class User {
  userId: string;
  name: string;
  photoUrl: string;

  constructor(data) {
    this.userId = data.userId;
    this.name = data.name;
    this.photoUrl = data.photoUrl;
  }
}
