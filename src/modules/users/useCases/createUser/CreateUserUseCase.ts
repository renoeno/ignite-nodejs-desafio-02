import { User } from "../../model/User";
import { IUsersRepository } from "../../repositories/IUsersRepository";

interface IRequest {
  name: string;
  email: string;
}

class CreateUserUseCase {
  constructor(private usersRepository: IUsersRepository) {}

  execute({ email, name }: IRequest): User {
    const emailIsTaken = this.usersRepository.findByEmail(email);

    if (!emailIsTaken) {
      return this.usersRepository.create({ name, email });
    } else {
      throw new Error("Email already registered.");
    }
  }
}

export { CreateUserUseCase };
