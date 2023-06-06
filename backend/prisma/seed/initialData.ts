import { PrismaClient } from '@prisma/client';

const prisma = new PrismaClient();

async function seed() {
  await prisma.pet.createMany({
    data: [
      {
        name: "Whiskers",
        age: 2,
        type: "CAT",
        breed: "Persian",
        owner: "Alice",
        ownerPhone: "1234567890",
      },
      {
        name: "Max",
        age: 4,
        type: "DOG",
        breed: "Golden Retriever",
        owner: "John",
        ownerPhone: "9876543210",
      },
      {
        name: "Luna",
        age: 1,
        type: "CAT",
        breed: "Siamese",
        owner: "Sarah",
        ownerPhone: "5555555555",
      },
      {
        name: "Buddy",
        age: 3,
        type: "DOG",
        breed: "Labrador",
        owner: "Mike",
        ownerPhone: "9999999999",
      },
      {
        name: "Mittens",
        age: 10,
        type: "CAT",
        breed: "Maine Coon",
        owner: "Emily",
        ownerPhone: "7777777777",
      },
      {
        name: "Rocky",
        age: 12,
        type: "DOG",
        breed: "Bulldog",
        owner: "Daniel",
        ownerPhone: "8888888888",
      },
      {
        name: "Oliver",
        age: 5,
        type: "CAT",
        breed: "British Shorthair",
        owner: "Sophia",
        ownerPhone: "4444444444",
      },
      {
        name: "Charlie",
        age: 8,
        type: "DOG",
        breed: "Poodle",
        owner: "Emma",
        ownerPhone: "6666666666",
      },
      {
        name: "Simba",
        age: 4,
        type: "CAT",
        breed: "Siberian",
        owner: "Noah",
        ownerPhone: "3333333333",
      },
      {
        name: "Bailey",
        age: 2,
        type: "DOG",
        breed: "Beagle",
        owner: "William",
        ownerPhone: "2222222222",
      },
    ],
  });

  console.log('Dados iniciais inseridos com sucesso!');
}

seed()
  .catch((error) => {
    console.error('Erro ao inserir os dados iniciais:', error);
  })
  .finally(async () => {
    await prisma.$disconnect();
  });