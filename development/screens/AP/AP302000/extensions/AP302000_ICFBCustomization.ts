import {
	PXView,
	PXFieldState,
	PXFieldOptions,
	PXActionState,
	createSingle,
	createCollection,
	viewInfo,
	gridConfig,
	GridPreset,
	GridColumnShowHideMode,
	linkCommand,
	columnConfig
} from "client-controls";
import {
	AP302000,
	Document as Document_Base
} from "src/screens/AP/AP302000/AP302000";

// Extension class for AP302000 (Checks and Payments) - ICFBCustomization
export interface AP302000_ICFBCustomization extends AP302000 {}
export class AP302000_ICFBCustomization {
	// Action for hyperlink grids
	GoToUrl: PXActionState;
	SetCheckStatus: PXActionState;

	// Check Status View
	@viewInfo({ containerName: "Check Status" })
	ICFBAPPaymentCheckStatusView = createSingle(ICFBAPPaymentCheckStatusView);

	// Hyperlink grid
	@viewInfo({ containerName: "Hyperlink" })
	FileDetails = createCollection(ICFBFileDetails);

	// OR Link grid
	@viewInfo({ containerName: "OR Link" })
	ORLink = createCollection(ICFBORFileDetails);
}

// Extend Document view with custom fields
export interface Document extends Document_Base {}
export class Document {
	UsrICFBCheckReleased: PXFieldState;
	UsrICFBCheckCleared: PXFieldState;
}

// Check Status View
export class ICFBAPPaymentCheckStatusView extends PXView {
	UsrICFBCheckStatus: PXFieldState;
}

// File Details DAC for Hyperlink grid
@gridConfig({ preset: GridPreset.Details })
export class ICFBFileDetails extends PXView {
	DocumentUrl: PXFieldState;
	DocumentNotes: PXFieldState;

	@linkCommand("GoToUrl")
	@columnConfig({ allowShowHide: GridColumnShowHideMode.Server })
	AttachmentLink: PXFieldState<PXFieldOptions.CommitChanges>;

	FileLocation: PXFieldState;
}

// OR File Details DAC for OR Link grid
@gridConfig({ preset: GridPreset.Details })
export class ICFBORFileDetails extends PXView {
	DocumentUrl: PXFieldState;
	DocumentNotes: PXFieldState;

	@linkCommand("GoToUrl")
	@columnConfig({ allowShowHide: GridColumnShowHideMode.Server })
	AttachmentLink: PXFieldState<PXFieldOptions.CommitChanges>;

	FileLocation: PXFieldState;
}
