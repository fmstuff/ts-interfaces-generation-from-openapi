import { Request, Response, NextFunction } from 'express';
import { getJellyBeansList } from '../../../domain/jellyBeansService';
import { JellyBeanColor } from '../../../domain/jellyBeans.model';
import { Paths } from '../../../../docs/openapi/generatedTypes/jellyBeansApi';
import { mapToApiResponse } from './response.model';

export async function getJellyBeans(request: Request, response: Response, next: NextFunction) {
  try {
    // get the data
    const jellyBeans = getJellyBeansList(request.query.color as JellyBeanColor);

    // map data to API response format
    const apiResponse: Paths.GetJellyBeansList.Responses.I200 = mapToApiResponse(jellyBeans);

    // send API response
    response.send(apiResponse);
  } catch (err) {
    next(err);
  }
}
