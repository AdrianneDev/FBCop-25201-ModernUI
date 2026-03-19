import {
	PXFieldState,
	PXFieldOptions,
	PXActionState,
	PXView,
	createCollection,
	viewInfo,
	gridConfig,
	GridPreset,
	GridColumnShowHideMode,
	linkCommand,
	columnConfig
} from "client-controls";
import { AP303000 } from "src/screens/AP/AP303000/AP303000";
import { Vendor as Vendor_Base } from "src/screens/AP/AP303000/views";

export interface AP303000_ICFBCustomization extends AP303000 {}
export class AP303000_ICFBCustomization {
	// Action for hyperlink grid
	GoToUrl: PXActionState;

	// Hyperlink grid
	@viewInfo({ containerName: "Hyperlink" })
	FileDetails = createCollection(ICFBFileDetails);
}

// Extend the Vendor view class to add custom fields
export interface Vendor extends Vendor_Base {}
export class Vendor {
	UsrICFBNutBuyingSourceType: PXFieldState;
	UsrICFBNutBuyingLocation: PXFieldState;
	IsNutBuyingTabVisible: PXFieldState;
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
