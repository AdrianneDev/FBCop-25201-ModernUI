import {
	PXFieldState,
	PXFieldOptions,
	PXView,
	PXActionState,
	createCollection,
	gridConfig,
	GridPreset,
	linkCommand
} from "client-controls";
import {
	AP301000,
	APInvoice as APInvoice_Base
} from "src/screens/AP/AP301000/AP301000";

export interface AP301000_ICFBCustomization extends AP301000 {}
export class AP301000_ICFBCustomization {
	// Custom views for tabs
	NotesLog = createCollection(ICFBNotelogs);
	FileDetails = createCollection(ICFBFileDetails);
}

// Extend the APInvoice view class to add custom fields
export interface APInvoice extends APInvoice_Base {}
export class APInvoice {
	UsrICFBAdvanceCategory: PXFieldState;
	UsrICFBDisbursementCategory: PXFieldState;
	UsrICFBEndUse: PXFieldState;
	UsrICFBMemo: PXFieldState;
	UsrICFBBillingCategory: PXFieldState;
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
