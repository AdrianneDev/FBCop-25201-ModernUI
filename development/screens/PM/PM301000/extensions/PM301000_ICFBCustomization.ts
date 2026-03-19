import {
	createCollection,
	PXView,
	PXFieldState,
	PXActionState,
	gridConfig,
	GridPreset,
	viewInfo,
	linkCommand
} from "client-controls";
import { PM301000 } from "src/screens/PM/PM301000/PM301000";

export interface PM301000_ICFBCustomization extends PM301000 {}
export class PM301000_ICFBCustomization {
	// Action for hyperlink
	GoToUrl: PXActionState;

	// Notes Log view
	@viewInfo({ containerName: "Notes Log" })
	NotesLog = createCollection(NotesLog);

	// File Details (Hyperlink) view
	@viewInfo({ containerName: "Hyperlink" })
	FileDetails = createCollection(FileDetails);
}

// Notes Log view definition
@gridConfig({
	preset: GridPreset.Details,
	initNewRow: true
})
export class NotesLog extends PXView {
	Date_Date: PXFieldState;
	Date_Time: PXFieldState;
	UserID: PXFieldState;
	UserName: PXFieldState;
	Comments: PXFieldState;
}

// File Details (Hyperlink) view definition
@gridConfig({
	preset: GridPreset.Details,
	initNewRow: false
})
export class FileDetails extends PXView {
	DocumentUrl: PXFieldState;
	DocumentNotes: PXFieldState;

	@linkCommand<PM301000_ICFBCustomization>("GoToUrl")
	AttachmentLink: PXFieldState;
	
	FileLocation: PXFieldState;
}
