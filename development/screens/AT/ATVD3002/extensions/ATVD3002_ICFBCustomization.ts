import {
	controlConfig,
	createCollection,
	gridConfig,
	GridPreset,
	linkCommand,
	PXActionState,
	PXFieldOptions,
	PXFieldState,
	PXScreen,
	PXView,
	viewInfo
} from "client-controls";

import { 
	ATVD3002,
} from "../ATVD3002";
import {ATVDVendorAccreditation as ATVDVendorAccreditation_Base} from "../views";

export interface ATVD3002_ICFBCustomization extends ATVD3002 {}
export class ATVD3002_ICFBCustomization {
	// Actions
	GoToUrl: PXActionState;

	// Views
	NotesLog = createCollection(ICFBNotelogs);
	FileDetails = createCollection(ICFBFileDetails);
}

export interface ATVDVendorAccreditation_ICFBCustomization extends ATVDVendorAccreditation_Base {}
export class ATVDVendorAccreditation_ICFBCustomization {
	@controlConfig({ allowEdit: true })
	UsrICFBTaxRegID: PXFieldState<PXFieldOptions.CommitChanges>;
}

// Notes Log Grid View
@gridConfig({
	preset: GridPreset.Details
})
export class ICFBNotelogs extends PXView {
	Date_Date: PXFieldState;
	Date_Time: PXFieldState;
	UserID: PXFieldState;
	UserName: PXFieldState;
	Comments: PXFieldState;
}

// File Details (Hyperlink) Grid View
@gridConfig({
	preset: GridPreset.Details
})
export class ICFBFileDetails extends PXView {
	// Actions
	GoToUrl: PXActionState;

	// Fields
	DocumentUrl: PXFieldState;
	DocumentNotes: PXFieldState;
	
	@linkCommand("GoToUrl")
	AttachmentLink: PXFieldState<PXFieldOptions.CommitChanges>;
	
	FileLocation: PXFieldState;
}
