import { Request, Response } from 'express';
import AppDataSource from 'index';
import { Point } from 'Model/Point';

export class PointController {
  async addPoints(req: Request, res: Response) {
    const { user } = req.body;

    const pointRepository = AppDataSource.getRepository(Point);
    const previousPoints = await pointRepository.findOne({
      where: {
        user,
      },
    });
    if (!previousPoints) {
      const points = new Point();

      points.user = user;
      points.quantity = 10;

      await pointRepository.save(points);

      return res.send({ sucess: true });
    }

    previousPoints.quantity += 10;

    await pointRepository.save(previousPoints);

    return res.send({ success: true });
  }

  async watchPoints(req: Request, res: Response) {
    const { user } = req.params;

    const pointRepository = AppDataSource.getRepository(Point);
    const points = await pointRepository.findOne({
      where: {
        user,
      },
    });

    if (!points) return res.send({ points: 0 });

    return res.send({ points: points.quantity });
  }
}
