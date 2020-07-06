export interface IJellyBeanDbModel {
  id: string;
  color: string;
}

export function getJellyBeanData(): IJellyBeanDbModel[] {
  return [
    {
      id: '273d8c4f-87e3-4954-816d-7580c4f2bf0a',
      color: 'red',
    },
    {
      id: '7b618eee-a145-4420-af8a-b9636ce8c9b2',
      color: 'green',
    },
    {
      id: 'ce8e03c6-bbac-4a0e-83c6-8031828bb467',
      color: 'rainbow',
    },
  ];
}
