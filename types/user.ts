export interface User {
  id: number;
  first_name: string;
  last_name: string;
  email: string;
  password?: string; // Opcional, si no deseas exponer la contraseña
  role: "admin" | "user" | "guest";
  createdAt: Date;
  updatedAt: Date;
}

export class UserModel implements User {
  id: number;
  first_name: string;
  last_name: string;
  email: string;
  password?: string;
  role: "admin" | "user" | "guest";
  createdAt: Date;
  updatedAt: Date;

  constructor(user: User) {
    this.id = user.id;
    this.first_name = user.first_name;
    this.last_name = user.last_name;
    this.email = user.email;
    this.password = user.password;
    this.role = user.role;
    this.createdAt = new Date(user.createdAt);
    this.updatedAt = new Date(user.updatedAt);
  }

  updateDetails(details: Partial<Omit<User, "id" | "createdAt">>): void {
    if (details.first_name) this.first_name = details.first_name;
    if (details.last_name) this.last_name = details.last_name;
    if (details.email) this.email = details.email;
    if (details.password) this.password = details.password;
    if (details.role) this.role = details.role;
    this.updatedAt = new Date();
  }
}
