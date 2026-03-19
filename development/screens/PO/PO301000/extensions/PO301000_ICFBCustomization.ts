import {
	PXFieldState,
	PXFieldOptions,
	PXView,
	PXActionState,
	createCollection,
	gridConfig,
	GridPreset,
	linkCommand,
} from "client-controls";
import {
	PO301000,
	POOrderHeader as POOrderHeader_Base,
	POOrder as POOrder_Base,
	POLine as POLine_Base,
} from "src/screens/PO/PO301000/PO301000";

// Screen extension - adds custom views for tabs
export interface PO301000_ICFBCustomization extends PO301000 {}
export class PO301000_ICFBCustomization {
	// Custom views for tabs
	NotesLog = createCollection(ICFBNotelogs);
	FileDetails = createCollection(ICFBFileDetails);
}

// Extend POOrderHeader view (Document Summary form header)
export interface POOrderHeader extends POOrderHeader_Base {}
export class POOrderHeader {
	// Custom fields for header
	UsrICFBMemo: PXFieldState;
	UsrICFBPurchaseOrderType: PXFieldState<PXFieldOptions.CommitChanges>;
	UsrICFBEndUse: PXFieldState<PXFieldOptions.CommitChanges>;
}

// Extend POOrder view (CurrentDocument - used in tabs)
export interface POOrder extends POOrder_Base {}
export class POOrder {
	// Nut Buying tab fields
	UsrICFBSupplier: PXFieldState<PXFieldOptions.CommitChanges>;
	UsrICFBSourcType: PXFieldState;
	UsrICFBLocation: PXFieldState;
	UsrICFBCoconutType: PXFieldState;
	UsrICFBFieldBuyer: PXFieldState;
	// Unbound fields for tab visibility
	IsNutBuyingTabVisible: PXFieldState;
	IsApprovedPO: PXFieldState;
}

// Extend POLine view (Transactions grid)
export interface POLine extends POLine_Base {}
export class POLine {
	UsrICFBItemDesc: PXFieldState;
}

// Notes Log view for custom tab
@gridConfig({ preset: GridPreset.Details })
export class ICFBNotelogs extends PXView {
	Date_Date: PXFieldState;
	Date_Time: PXFieldState;
	UserID: PXFieldState;
	UserName: PXFieldState;
	Comments: PXFieldState;
}

// File Details view for Hyperlink tab
@gridConfig({ preset: GridPreset.Details })
export class ICFBFileDetails extends PXView {
	GoToUrl: PXActionState;

	DocumentUrl: PXFieldState;
	DocumentNotes: PXFieldState;

	@linkCommand("GoToUrl")
	AttachmentLink: PXFieldState<PXFieldOptions.CommitChanges>;

	FileLocation: PXFieldState;
}
