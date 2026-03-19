import {
	PXFieldState,
	PXFieldOptions,
	PXView,
	PXActionState,
	createCollection,
	gridConfig,
	GridPreset,
	linkCommand,
	placeAfterProperty,
} from "client-controls";
import {
	PO302000,
	POReceiptHeader as POReceiptHeader_Base,
	POReceipt as POReceipt_Base,
	POReceiptLine as POReceiptLine_Base,
} from "src/screens/PO/PO302000/PO302000";

// Screen extension - adds custom views for tabs
export interface PO302000_ICFBCustomization extends PO302000 {}
export class PO302000_ICFBCustomization {
	// Custom views for Nut Buying tabs
	FarmerDetail = createCollection(ICFBFarmerDetail);
	FileDetails = createCollection(ICFBFileDetails);
}

// Extend POReceiptHeader view (Document Summary form header)
export interface POReceiptHeader extends POReceiptHeader_Base {}
export class POReceiptHeader {
	// Custom header fields
	UsrICFBDeliveryReceipt: PXFieldState;
	UsrICFBPurchaseOrderType: PXFieldState<PXFieldOptions.CommitChanges>;
	// Unbound field for tab visibility
	IsNutBuyingFarmerTabVisible: PXFieldState;
}

// Extend POReceipt view (CurrentDocument - used in tabs for Nut Buying fields)
export interface POReceipt extends POReceipt_Base {}
export class POReceipt {
	// Nut Buying tab fields (Primary Information)
	UsrICFBPDRNbr: PXFieldState;
	UsrICFBTruckPlateNbr: PXFieldState;
	UsrICFBGatePassNbr: PXFieldState;
	UsrICFBTimeIn: PXFieldState;
	UsrICFBTimeOut: PXFieldState;
	// Nut Buying tab fields (Receiving Information)
	UsrICFBCoconutType: PXFieldState;
	UsrICFBCondition: PXFieldState;
	UsrICFBTareWeight: PXFieldState;
	UsrICFBDeductionPerc: PXFieldState;
	UsrICFBDeduction: PXFieldState;
}

// Extend POReceiptLine view (transactions grid)
export interface POReceiptLine extends POReceiptLine_Base {}
export class POReceiptLine {
	@placeAfterProperty("OrigOrderQty")
	UsrICFBGrossQty: PXFieldState<PXFieldOptions.CommitChanges>;

	@placeAfterProperty("UsrICFBGrossQty")
	UsrICFBRejectedQty: PXFieldState;
}

// Farmer Detail view for Farmer Details tab
@gridConfig({ preset: GridPreset.Details, syncPosition: true })
export class ICFBFarmerDetail extends PXView {
	CoconutType: PXFieldState;
	ActualQty: PXFieldState;
	FarmerID: PXFieldState<PXFieldOptions.CommitChanges>;
	ICFBFarmer__FirstName: PXFieldState;
	ICFBFarmer__LastName: PXFieldState;
	ICFBFarmer__PlotNo: PXFieldState;
	TraderID: PXFieldState;
	Memo: PXFieldState;
	HarvestDate: PXFieldState;
	PriceOfNutPerKilo: PXFieldState;
}

// File Details view for Files tab
@gridConfig({ preset: GridPreset.Details, syncPosition: true })
export class ICFBFileDetails extends PXView {
	GoToUrl: PXActionState;

	DocumentUrl: PXFieldState;
	DocumentNotes: PXFieldState;

	@linkCommand("GoToUrl")
	AttachmentLink: PXFieldState<PXFieldOptions.CommitChanges>;

	FileLocation: PXFieldState;
}
