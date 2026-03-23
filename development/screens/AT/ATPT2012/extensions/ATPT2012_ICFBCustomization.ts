import {
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

import { ATPT2012 } from "src/customizationScreens/Company/screens/AT/ATPT2012/ATPT2012";

export interface ATPT2012_ICFBCustomization extends ATPT2012 {}
export class ATPT2012_ICFBCustomization {
	// Actions
	GoToUrl: PXActionState;

	// Views
	NotesLog = createCollection(ICFBNotelogs);
	FileDetails = createCollection(ICFBFileDetails);
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
