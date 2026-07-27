import { useDispatch, useSelector } from 'react-redux';
import type { RootState, AppDispatch } from './store';

/** Typed `useDispatch` — use throughout the app instead of plain `useDispatch` */
export const useAppDispatch = useDispatch.withTypes<AppDispatch>();

/** Typed `useSelector` — use throughout the app instead of plain `useSelector` */
export const useAppSelector = useSelector.withTypes<RootState>();
