import type { InitialStateInterface } from "@/util/list/typed-slice";
import { listSlice } from "@/util/list/list.slice";
import type { ListInterface } from "@/util/list/list.slice";

export const {
  setItemList: setCarsListItemList,
  addItem: addCarsListItem,
  resetItemList: resetCarsList,
  removeItem: removeCarsListItem,
} = listSlice("cars-list").actions;

export const selectCarsListList = (state: {
  carsList: InitialStateInterface<ListInterface>;
}) => state.carsList.response.listItemList;

export const carsList = listSlice("cars-list").reducer;
