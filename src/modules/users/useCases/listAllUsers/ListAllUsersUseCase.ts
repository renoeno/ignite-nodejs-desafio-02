import { User } from "../../model/User";
import { IUsersRepository } from "../../repositories/IUsersRepository";

interface IRequest {
  user_id: string;
}

class ListAllUsersUseCase {
  constructor(private usersRepository: IUsersRepository) {}

  execute({ user_id }: IRequest): User[] {
    const user = this.usersRepository.findById(user_id);

    if (user) {
      const isAdmin = user.admin;

      if (isAdmin) {
        return this.usersRepository.list();
      } else {
        throw new Error("Non admin users cannot access all users.");
      }
    } else {
      throw new Error("User does not exist.");
    }
  }
}

export { ListAllUsersUseCase };
