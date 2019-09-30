import User from "../../models/user";

export default class UserAdapter {
  static fromFirebaseResponse(data: any): User {
    return new User({
      userId: data.uid,
      name: data.displayName,
      photoUrl: data.photoUrl
    });
  }
}
