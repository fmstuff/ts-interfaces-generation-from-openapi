import { Paths } from '../../../../docs/openapi/generatedTypes/jellyBeansApi';
import { IJellyBean } from '../../../domain/jellyBeans.model';

export function mapToApiResponse(jellyBeans: IJellyBean[]): Paths.GetJellyBeansList.Responses.I200 {
  return {
    jelly_beans: jellyBeans,
  };
}
