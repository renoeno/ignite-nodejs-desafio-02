import { User } from "../../model/User";
import { IUsersRepository } from "../../repositories/IUsersRepository";

interface IRequest {
  user_id: string;
}

class TurnUserAdminUseCase {
  constructor(private usersRepository: IUsersRepository) {}

  execute({ user_id }: IRequest): User {
    const adminUser = this.usersRepository.findById(user_id);

    if (!adminUser) {
      throw new Error("User not registered.");
    } else {
      return this.usersRepository.turnAdmin(adminUser);
    }
  }
}

export { TurnUserAdminUseCase };
