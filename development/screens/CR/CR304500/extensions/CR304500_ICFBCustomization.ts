import { PXFieldState, PXFieldOptions, PXView, createCollection, gridConfig, GridPreset, PXActionState, linkCommand } from "client-controls";
import { CR304500 } from "src/screens/CR/CR304500/CR304500";

export interface CR304500_ICFBCustomization extends CR304500 {}
export class CR304500_ICFBCustomization {
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
