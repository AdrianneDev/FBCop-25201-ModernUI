import {
	createCollection,
	gridConfig,
	GridPreset,
	linkCommand,
	PXActionState,
	PXFieldOptions,
	PXFieldState,
	PXView
} from "client-controls";

import { EP301020 } from "src/screens/EP/EP301020/EP301020";

export interface EP301020_ICFBCustomization extends EP301020 {}
export class EP301020_ICFBCustomization {
	// Actions
	GoToUrl: PXActionState;

	// Views
	FileDetails = createCollection(ICFBFileDetails);
}

// File Details (Hyperlink) Grid View
@gridConfig({
	preset: GridPreset.Details
})
export class ICFBFileDetails extends PXView {
    GoToUrl: PXActionState;
	// Fields
	DocumentUrl: PXFieldState;
	DocumentNotes: PXFieldState;
	
	@linkCommand<EP301020_ICFBCustomization>("GoToUrl")
	AttachmentLink: PXFieldState<PXFieldOptions.CommitChanges>;
	
	FileLocation: PXFieldState;
}
