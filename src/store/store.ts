import { create } from "zustand";

type PaginationStore = {
  currentPage: number;
  setCurrentPage: (pageNumber: number) => void;
  updatePagePosition: (pagePositionDelta: number) => void;
};

const usePaginationStore = create<PaginationStore>((set) => ({
  currentPage: 1,
  setCurrentPage: (pageNumber: number) =>
    set((state) => ({
      ...state,
      currentPage: pageNumber < 0 ? 0 : pageNumber,
    })),
  updatePagePosition: (pagePositionDelta: number) =>
    set((state) => ({
      ...state,
      currentPage:
        state.currentPage + pagePositionDelta < 0
          ? 0
          : state.currentPage + pagePositionDelta,
    })),
}));

export default usePaginationStore;
