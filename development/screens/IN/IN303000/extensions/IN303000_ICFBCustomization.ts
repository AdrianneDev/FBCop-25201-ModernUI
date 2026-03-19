import {
	PXFieldState,
	PXFieldOptions,
	PXView,
	createCollection,
	gridConfig,
	GridPreset,
	PXActionState,
	linkCommand
} from "client-controls";
import { IN303000 } from "src/screens/IN/IN303000/IN303000";

export interface IN303000_ICFBCustomization extends IN303000 {}
export class IN303000_ICFBCustomization {
	// Custom view for Hyperlink tab
	FileDetails = createCollection(ICFBFileDetails);
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
