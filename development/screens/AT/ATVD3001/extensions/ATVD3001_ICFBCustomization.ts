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

import { ATVD3001 } from "../ATVD3001";

export interface ATVD3001_ICFBCustomization extends ATVD3001 {}
export class ATVD3001_ICFBCustomization {
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
