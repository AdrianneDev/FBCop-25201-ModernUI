import { 
	createCollection, createSingle, PXScreen, graphInfo, PXView, PXFieldState, 
	PXFieldOptions, gridConfig, GridPreset, PXActionState, columnConfig, linkCommand, controlConfig
} from "client-controls";

@graphInfo({
	graphType: "ICFBCustomization.Graph.Inquiry.ICFBSalesScheduleInq", 
	primaryView: "Filter"
})
export class ICFB4050 extends PXScreen {
	// Action for grid link command - only declared because used with @linkCommand
	viewSalesDocument: PXActionState;
	Filter = createSingle(ICFBSalesScheduleFilter);
	Schedule = createCollection(ICFBSalesScheduleResult);
}

@gridConfig({ 
  preset: GridPreset.Inquiry
})
export class ICFBSalesScheduleFilter extends PXView {
	OrgBAccountID: PXFieldState<PXFieldOptions.CommitChanges>;
	ScheduleType: PXFieldState<PXFieldOptions.CommitChanges>;
	StartDate: PXFieldState<PXFieldOptions.CommitChanges>;
	EndDate: PXFieldState<PXFieldOptions.CommitChanges>;
	CustomerID: PXFieldState<PXFieldOptions.CommitChanges>;
  @controlConfig({multiSelect:true,parameters:null})
	TaxID: PXFieldState<PXFieldOptions.CommitChanges>;
	TotalGrossSales: PXFieldState<PXFieldOptions.Disabled>;
	TotalDiscount: PXFieldState<PXFieldOptions.Disabled>;
	TotalOutputVAT: PXFieldState<PXFieldOptions.Disabled>;
	TotalNetSales: PXFieldState<PXFieldOptions.Disabled>;
}

@gridConfig({ 
	preset: GridPreset.Inquiry
})
export class ICFBSalesScheduleResult extends PXView {
  @columnConfig({
    width: 90
  })
    DocDate : PXFieldState;
  @columnConfig({
    editorConfig: {
      allowEdit: true,
      parameters: null
    },
    width: 140
  })
    CustomerID : PXFieldState;
  @columnConfig({
    width: 280
  })
    CustomerName : PXFieldState;
  @columnConfig({
    width: 180
  })
    TaxRegistrationID : PXFieldState;
  @columnConfig({
    width: 280
  })
    Description : PXFieldState;
  @columnConfig({
    editorConfig: {
      allowEdit: true,
      linkCommand: "viewSalesDocument",
      parameters: null
    },
    width: 140
  })
    RefNbr : PXFieldState;
  @columnConfig({
    width: 140
  })
    DocRefNbr : PXFieldState;
  @columnConfig({
    width: 100
  })
    Account : PXFieldState;
  @columnConfig({
    width: 100
  })
    AccountDescription : PXFieldState;
  @columnConfig({
    width: 100
  })
    GrossSales : PXFieldState;
  @columnConfig({
    width: 100
  })
    DiscountTotal : PXFieldState;
  @columnConfig({
    width: 100
  })
    OutputVAT : PXFieldState;
  @columnConfig({
    width: 100
  })
    NetSales : PXFieldState;
  @columnConfig({
    width: 140
  })
    TaxID : PXFieldState;
    RevenueType : PXFieldState;
  @columnConfig({
    width: 180
  })
    AddressLine1 : PXFieldState;
  @columnConfig({
    width: 180
  })
    AddressLine2 : PXFieldState;
  @columnConfig({
    width: 180
  })
    City : PXFieldState;
  @columnConfig({
    width: 220
  })
    CountryID : PXFieldState;
  @columnConfig({
    width: 180
  })
    FirstName : PXFieldState;
  @columnConfig({
    width: 180
  })
    MidName : PXFieldState;
  @columnConfig({
    width: 220
  })
    LastName : PXFieldState;
}
