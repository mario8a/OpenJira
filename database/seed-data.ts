interface seedData {
  entries: SeedEntry[];
}

interface SeedEntry {
  description: string;
  status: string;
  createdAt: number;
}


export const seedData:seedData = {
  entries: [
    {
      description: 'Pending: Duis culpa laboris ipsum fugiat.',
      status: 'pending',
      createdAt: Date.now(),
    },
    {
      description: 'In progress: Sit elit excepteur amet pariatur reprehenderit officia cillum culpa consectetur laboris irure ex.',
      status: 'in-progress',
      createdAt: Date.now() - 100000,
    },
    {
      description: 'Finished: Ea proident duis in qui aliquip.',
      status: 'finished',
      createdAt: Date.now() - 10000,
    }
  ]
}