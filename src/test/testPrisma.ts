import 'dotenv/config';
import {prisma} from '../lib/prisma';

async function main() {

    const post = await prisma.post.create({
        data : {
            description : "test",
            preview: "test",
            published : true,
            title : "test",
            images : {
                create: {
                    url : "test"

                }
            }
        }
    });

    console.log(post);

    const fetchPost = await prisma.post.findMany({
        include : {
            images : true
        }
    });

    console.log(fetchPost);
}

main()
    .then(async () =>{
        await prisma.$disconnect()
    })
    .catch(async (e) => {
        console.error(e);
        await prisma.$disconnect();
        process.exit(1);
    })