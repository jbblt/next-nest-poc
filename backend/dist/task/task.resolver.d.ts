import { TaskService } from './task.service';
export declare class TaskResolver {
    private readonly taskService;
    constructor(taskService: TaskService);
    createTask(title: string, description?: string, status?: string): import(".prisma/client").Prisma.Prisma__TaskClient<{
        id: number;
        title: string;
        description: string | null;
        status: string;
        createdAt: Date;
        updatedAt: Date;
    }, never, import("@prisma/client/runtime/library").DefaultArgs, import(".prisma/client").Prisma.PrismaClientOptions>;
    tasks(): import(".prisma/client").Prisma.PrismaPromise<{
        id: number;
        title: string;
        description: string | null;
        status: string;
        createdAt: Date;
        updatedAt: Date;
    }[]>;
}
