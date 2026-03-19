import { createCollection, createSingle, PXScreen, graphInfo, PXView, PXFieldState,
  gridConfig, controlConfig, columnConfig, TextAlign, GridPreset, GridFastFilterVisibility 
} from "client-controls";

@graphInfo({
	graphType: "ICFBCurrency.Graph.ICFBInventoryBookSummaryInq", 
	primaryView: "Filter"
})
export class ICFB4020 extends PXScreen {
	Filter = createSingle(ICFBInventoryBookFilter);
	InventoryBookResult = createCollection(ICFBInventoryBookResult);
}

export class ICFBInventoryBookFilter extends PXView {
	OrgBAccountID: PXFieldState;
	AsOfDate: PXFieldState;
	Currency: PXFieldState;
  @controlConfig({allowEdit:true,parameters:null})
	ItemClassID: PXFieldState;
	SiteID: PXFieldState;
	LocationID: PXFieldState;
	LotSerialNbr: PXFieldState;
}

@gridConfig({ 
  showFastFilter: GridFastFilterVisibility.False,
  preset: GridPreset.Details
})
export class ICFBInventoryBookResult extends PXView {
  @columnConfig({
    width: 140
  })
  InventoryCD : PXFieldState;
  @columnConfig({
    width: 280
  })
  Description : PXFieldState;
  @columnConfig({
    width: 140
  })
  BaseUnit : PXFieldState;
  @columnConfig({
    width: 100
  })
  Qty : PXFieldState;
  @columnConfig({
    width: 100
  })
  UnitCost : PXFieldState;
  @columnConfig({
    width: 100
  })
  Amount : PXFieldState;
  @columnConfig({
    width: 100
  })
  AmountInPHP : PXFieldState;
  @columnConfig({
    width: 100,
    textAlign: TextAlign.Right
  })
  Currency : PXFieldState;
  @columnConfig({
    width: 100,
    textAlign: TextAlign.Right
  })
  ItemClassID : PXFieldState;
  @columnConfig({
    width: 100,
    textAlign: TextAlign.Right
  })
  SiteCD : PXFieldState;
  @columnConfig({
    width: 100,
    textAlign: TextAlign.Right
  })
  Location : PXFieldState;
  @columnConfig({
    width: 100,
    textAlign: TextAlign.Right
  })
  LotSerialNbr : PXFieldState;  
}
