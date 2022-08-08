import { Request, Response } from 'express';
import { Controllers, HttpRequest } from '../../../presentation/protocols';

export const expressRouterAdapter = (controller: Controllers) => {
  return async (req: Request, resp: Response) => {
    const httpRequest: HttpRequest = {
      body: req.body,
      params: req.params,
      query: req.query,
    };
    const httpResponse = await controller.handle(httpRequest);

    if (httpResponse.statusCode === 201 || httpResponse.statusCode === 200) {
      resp.status(httpResponse.statusCode).json(httpResponse.body);
    } else {
      resp
        .status(httpResponse.statusCode)
        .json({ error: httpResponse.body.message });
    }
  };
};
