import { atom, selector } from 'recoil';

// Define the board data type
// export interface BoardData {
//     id: number;
//     title: string;
//     content: string;
// }

// Create an atom to hold the board data
export const boardState = atom({
  key: 'boardState',
  default: [],
});

// Create a selector to get the board data
export const boardSelector = selector({
  key: 'boardSelector',
  get: ({ get }) => {
    const boards = get(boardState);
    return boards;
  },
});
