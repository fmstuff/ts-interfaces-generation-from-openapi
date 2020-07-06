import { IJellyBean, JellyBeanColor } from './jellyBeans.model';
import { getJellyBeanData } from '../persistence/mockDatabase';

export function getJellyBeansList(colorFilter?: JellyBeanColor): IJellyBean[] {
  const jellyData = getJellyBeanData();

  let jellyBeans = jellyData.map(jellyBean => ({
    id: jellyBean.id,
    color: mapColor(jellyBean.color),
  }));

  if (colorFilter) {
    jellyBeans = jellyBeans.filter(it => it.color === colorFilter);
  }

  return jellyBeans;
}

function mapColor(color: string): JellyBeanColor {
  switch (color) {
    case 'red':
    case 'green':
    case 'blue':
    case 'yellow':
    case 'orange':
    case 'purple':
    case 'rainbow':
      return color;
    default:
      return 'rainbow';
  }
}
