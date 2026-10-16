import { PrismaClient } from '@prisma/client';

const prisma = new PrismaClient();

async function main() {
  await prisma.scheduleItem.deleteMany({});

  const now = new Date();

  await prisma.scheduleItem.createMany({
    data: [
      {
        title: 'TRIIBE Fall Grant Application Cutoff',
        description: 'Submission deadline for 2026 Non-profit Infrastructure Grants.',
        type: 'GRANT_DEADLINE',
        startDate: new Date(now.getTime() + 5 * 24 * 60 * 60 * 1000), // 5 days from now
        location: 'Online Portal',
        link: '/grants',
      },
      {
        title: 'TRIIBE Global Ecosystem Community Call',
        description: 'Monthly sync covering upcoming initiatives, partnerships, and grant milestones.',
        type: 'TRIIBE_EVENT',
        startDate: new Date(now.getTime() + 12 * 24 * 60 * 60 * 1000), // 12 days from now
        location: 'Zoom',
        link: 'https://triibe.org/talk',
      },
    ],
  });

  console.log('Seed completed successfully.');
}

main()
  .catch((e) => {
    console.error(e);
    process.exit(1);
  })
  .finally(async () => {
    await prisma.$disconnect();
  });