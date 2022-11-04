export interface UserService {
  getUser: (id: string) => Promise<void>;
}

export class UserServiceImpl implements UserService {
  async getUser(id: string) {
    let a = 3;
    console.log(a);
  }
}
