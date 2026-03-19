import {
	PXView,
	PXFieldState,
	PXActionState,
	createCollection,
	viewInfo,
	gridConfig,
	GridPreset,
	linkCommand,
} from "client-controls";
import { IN304000 } from "src/screens/IN/IN304000/IN304000";

export interface IN304000_ICFBCustomization extends IN304000 {}
export class IN304000_ICFBCustomization {
	GoToUrl: PXActionState;

	@viewInfo({ containerName: "Hyperlink" })
	FileDetails = createCollection(ICFBFileDetails);
}

@gridConfig({
	preset: GridPreset.Details,
	initNewRow: true,
})
export class ICFBFileDetails extends PXView {
	DocumentUrl: PXFieldState;
	DocumentNotes: PXFieldState;

	@linkCommand<IN304000_ICFBCustomization>("GoToUrl")
	AttachmentLink: PXFieldState;

	FileLocation: PXFieldState;
}
