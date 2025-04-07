export declare class TaskService {
    findAll(): import(".prisma/client").Prisma.PrismaPromise<{
        id: number;
        title: string;
        description: string | null;
        status: string;
        createdAt: Date;
        updatedAt: Date;
    }[]>;
    create(data: {
        title: string;
        description?: string;
        status?: string;
    }): import(".prisma/client").Prisma.Prisma__TaskClient<{
        id: number;
        title: string;
        description: string | null;
        status: string;
        createdAt: Date;
        updatedAt: Date;
    }, never, import("@prisma/client/runtime/library").DefaultArgs, import(".prisma/client").Prisma.PrismaClientOptions>;
}
