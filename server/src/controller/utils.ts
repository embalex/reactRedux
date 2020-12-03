import { IRouter, Router } from 'express';


export type Controller = (router: IRouter) => void;

export const registerController = (controller: Controller): IRouter => {
    const router = Router();
    controller(router);

    return router;
};
