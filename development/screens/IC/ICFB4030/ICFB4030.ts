import { 
	createCollection, createSingle, PXScreen, graphInfo, PXView, PXFieldState, 
	gridConfig, GridPreset, PXActionState, controlConfig 
} from "client-controls";

@graphInfo({
	graphType: "ICFBCurrency.Graph.ICFBInventoryBookDetailedInq", 
	primaryView: "Filter"
})
export class ICFB4030 extends PXScreen {
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
  preset: GridPreset.Details
})
export class ICFBInventoryBookResult extends PXView {
	DocDate: PXFieldState;
	InventoryCD: PXFieldState;
	Description: PXFieldState;
	BaseUnit: PXFieldState;
	QtyIn: PXFieldState;
	QtyOut: PXFieldState;
	Qty: PXFieldState;
	UnitCost: PXFieldState;
	CuryRate: PXFieldState;
	Amount: PXFieldState;
	UnitCostInPHP: PXFieldState;
	AmountInPHP: PXFieldState;
	Currency: PXFieldState;
	ItemClassID: PXFieldState;
	SiteCD: PXFieldState;
	Location: PXFieldState;
	LotSerialNbr: PXFieldState;
	AgedDays: PXFieldState;
}
