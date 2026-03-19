import {
	PXFieldState,
	PXActionState,
	linkCommand,
} from "client-controls";
import { EP503010, EPApproval as EPApproval_Base } from "src/screens/EP/EP503010/EP503010";

export interface EP503010_ICFBCustomization extends EP503010 {}
export class EP503010_ICFBCustomization {
	GoToUrl: PXActionState;
}

export interface EPApproval extends EPApproval_Base {}
export class EPApproval {
	UsrICFBDocumentUrl: PXFieldState;
	@linkCommand("GoToUrl")
	UsrICFBAttachmentLink: PXFieldState;
}
