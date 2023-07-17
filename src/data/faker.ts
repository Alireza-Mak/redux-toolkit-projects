import { faker } from '@faker-js/faker';
export interface FakerType {
  label: string;
  id: string;
}
const songCreator = (): FakerType => {
  return { label: faker.music.songName(), id: faker.string.uuid() };
};
const movieCreator = (): FakerType => {
  return {
    label: `${faker.word.adjective()} ${faker.word.noun()}`,
    id: faker.string.uuid(),
  };
};
export { songCreator, movieCreator };
