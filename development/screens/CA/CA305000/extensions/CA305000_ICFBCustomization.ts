import { PXFieldState, PXFieldOptions, PXView, createCollection, gridConfig, GridPreset, PXActionState, linkCommand } from "client-controls";
import { CA305000 } from "src/screens/CA/CA305000/CA305000";

export interface CA305000_ICFBCustomization extends CA305000 {}
export class CA305000_ICFBCustomization {
	// Custom views for tabs
	NotesLog = createCollection(ICFBNotelogs);
	FileDetails = createCollection(ICFBFileDetails);
}

// Notes Log view for tab
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
