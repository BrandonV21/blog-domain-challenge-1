const { PrismaClient } = require('@prisma/client');
const prisma = new PrismaClient();

async function seed() {
    const createdUsers = await prisma.user.create({
        data: { username: 'tomdavis', email: 'tomdavis@mail.com', }, 
    });

    console.log(`${createdUsers.count} users created`, createdUsers);

    // Add your code here
    const createdProfile = await prisma.profile.create({
        data: {
            userId: createdUsers.id,
            firstName: 'Tom',
            lastName: 'Davis',
            bio: 'Hi, my name is Tom',
            age: 34,
            location: 'England',
            interest: 'Tennis, Basketball',
            profileImage: 'URL',
            banner: 'URL',
        },
    });

    console.log('Profile created', createdProfile);

    const createdPost = await prisma.post.create({
        data: {
            userId: createdUsers.id,
            title: 'Recommended tennis racquet?',
            content: 'TextTextTextTextTextTextTextTextText',
            published: true,
            picture: 'URL',
        },
    });

    console.log('Post created', createdPost);

    const createdComment = await prisma.comment.create({
        data: {
            userId: createdUsers.id,
            postId: createdPost.id,
            content: 'TextTextTextTextTextTextTextTextText'
        },
    });

    console.log('Comment created', createdComment)

    // Don't edit any of the code below this line
    process.exit(0);
}

seed()
    .catch(async (error) => {
        console.error(error);
        await prisma.$disconnect();
        process.exit(1);
    })