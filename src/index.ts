/* PRÁTICA GUIADA - Parte 1
Crie um sistema de cadastro de usuários que contenha:

1. Type Alias para uma pessoa (Person) com as propriedades id, name, email, password e role;
2. Type Aliases de conta, com as propriedades account e permission: 
  a. AdminAccount 
  b. NormalAccount
*/

type TPerson = {
  id: string,
  name: string,
  email: string,
  password: string,
  role: Role
}

type TAdminAccount = {
  account: string,
  permission: boolean
}

type TNormalAccount = {
  account: string,
  permission: boolean
}

/* PRÁTICA GUIADA - Parte 2
Vamos continuar nosso sistema de cadastro de usuários criando:

1. Enum com valores ADMIN e NORMAL;
2. Tipo Intersection unindo: pessoa(Person) + permissão (Role);
3. Um array de usuários que permite guardar apenas usuários do tipo Person + Role;
4. Crie duas pessoas, uma com permissão normal e a outra admin;
5. Guarde essas pessoas no array de usuários.

*/ 

enum Role {
  ADMIN = "Admin",
  NORMAL = "Normal"
}

type TAdminUser = TPerson & TAdminAccount

type TNormalUser = TPerson & TNormalAccount

const users: (TAdminUser | TNormalUser)[] = [
  {
    id: "01",
    name: "Renan",
    email: "renanpmiranda5@gmail.com",
    password: "123456",
    role: Role.ADMIN,
    account: "admin1",
    permission: true
  },
  {
    id: "02",
    name: "Ren",
    email: "ren@email.com",
    password: "654321",
    role: Role.NORMAL,
    account: "normal1",
    permission: false
  }
]

// console.table(users)