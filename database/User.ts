import db from './db';

interface IUser {
  username: string;
  password: string;
}

class User {
  private username: string;

  private password: string;

  public user: () => IUser = () => ({
    username: this.username,
    password: this.password,
  });

  constructor(username: string, password?: string) {
    this.username = username;
    if (typeof password === 'string') {
      this.password = password;
    } else {
      // eslint-disable-next-line
      User.get(username).then(v => this.password = v.password);
    }
  }

  public static async get(username: string) {
    const doc = await db.findOne<IUser>({ type: 'User', username });
    return {
      username: doc.username,
      password: doc.password,
    };
  }

  // public static async changePassword(username: string, password: string) {
  //   db.update({ type: this.constructor.name });
  // }

  private write() {
    db.insert({ type: this.constructor.name, username: this.username, password: this.password })
      .then((doc) => { this.username = doc.username; this.password = doc.password; });
  }
}

export default User;
