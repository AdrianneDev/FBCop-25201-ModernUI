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
import { IN301000 } from "src/screens/IN/IN301000/IN301000";

export interface IN301000_ICFBCustomization extends IN301000 {}
export class IN301000_ICFBCustomization {
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
