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
import { IN302000 } from "src/screens/IN/IN302000/IN302000";

export interface IN302000_ICFBCustomization extends IN302000 {}
export class IN302000_ICFBCustomization {
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
