import React, {
  createContext,
  useCallback,
  useContext,
  useReducer,
  useRef,
} from 'react';
import { WithChildren } from '../types/helpers';
import { PointsTileConfig, Tile } from '../types/tile';

type Action =
  | { type: 'UPDATE_POINTS'; tileId: string; points: number }
  | { type: 'UPDATE_TILE'; tile: Tile };

interface DataState {
  pointsCache: Record<string, number>;
  tileCache: Record<string, Tile>;
}

const initialState: DataState = {
  pointsCache: {},
  tileCache: {},
};

function dataReducer(state: DataState, action: Action): DataState {
  switch (action.type) {
    case 'UPDATE_POINTS':
      return {
        ...state,
        pointsCache: {
          ...state.pointsCache,
          [action.tileId]: action.points,
        },
      };
    case 'UPDATE_TILE':
      return {
        ...state,
        tileCache: {
          ...state.tileCache,
          [action.tile.id || '']: action.tile,
        },
      };
    default:
      return state;
  }
}

interface DataContextType {
  getPointsForTile: (tileId: string) => number | undefined;
  getTile: (tileId: string) => Tile | undefined;
  updatePoints: (tileId: string, points: number) => void;
  updateTile: (tile: Tile) => void;

  pointsCache: Record<string, number>;
  tileCache: Record<string, Tile>;
}

const DataContext = createContext<DataContextType | undefined>(undefined);

export function DataProvider({ children }: WithChildren) {
  const [state, dispatch] = useReducer(dataReducer, initialState);
  const stateRef = useRef(state);

  const getPointsForTile = useCallback(
    (tileId: string) => {
      return state.pointsCache[tileId];
    },
    [state.pointsCache]
  );

  const getTile = useCallback(
    (tileId: string) => {
      return state.tileCache[tileId];
    },
    [state.tileCache]
  );

  const updatePoints = useCallback((tileId: string, points: number) => {
    dispatch({ type: 'UPDATE_POINTS', tileId, points });
  }, []);

  const updateTile = useCallback((tile: Tile) => {
    if (tile.id) {
      dispatch({ type: 'UPDATE_TILE', tile });

      if (tile.type === 'POINTS' && tile.configuration) {
        const config = tile.configuration as PointsTileConfig;
        if (typeof config.points === 'number') {
          dispatch({
            type: 'UPDATE_POINTS',
            tileId: tile.id,
            points: config.points,
          });
        }
      }
    }
  }, []);

  stateRef.current = state;

  const contextValue = {
    getPointsForTile,
    getTile,
    updatePoints,
    updateTile,

    pointsCache: state.pointsCache,
    tileCache: state.tileCache,
  };

  return (
    <DataContext.Provider value={contextValue}>{children}</DataContext.Provider>
  );
}

export function useDataContext() {
  const context = useContext(DataContext);
  if (!context) {
    throw new Error('useDataContext must be used within a DataProvider');
  }
  return context;
}
