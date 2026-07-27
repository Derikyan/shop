import { createSlice, type PayloadAction } from '@reduxjs/toolkit';
import type { DesignGrid } from '@/types';
import { GRID_SIZE } from '@/lib/constants';
interface DesignState {
  grid: DesignGrid;
  selectedTileId: string | null;
}
function createEmptyGrid(): DesignGrid {
  return Array.from({ length: GRID_SIZE }, () =>
    Array.from({ length: GRID_SIZE }, () => null),
  );
}
const initialState: DesignState = {
  grid: createEmptyGrid(),
  selectedTileId: null,
};
export const designSlice = createSlice({
  name: 'design',
  initialState,
  reducers: {
    selectPaletteTile(state, action: PayloadAction<string | null>) {
      state.selectedTileId = action.payload;
    },
    placeTile(state, action: PayloadAction<{ row: number; col: number }>) {
      const { row, col } = action.payload;
      if (
        state.selectedTileId &&
        row >= 0 && row < GRID_SIZE &&
        col >= 0 && col < GRID_SIZE
      ) {
        state.grid[row][col] = state.selectedTileId;
      }
    },
    clearCell(state, action: PayloadAction<{ row: number; col: number }>) {
      const { row, col } = action.payload;
      if (row >= 0 && row < GRID_SIZE && col >= 0 && col < GRID_SIZE) {
        state.grid[row][col] = null;
      }
    },
    clearGrid(state) {
      state.grid = createEmptyGrid();
    },
  },
});
export const { selectPaletteTile, placeTile, clearCell, clearGrid } =
  designSlice.actions;
export default designSlice.reducer;
