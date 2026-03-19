import { PXFieldState, PXFieldOptions } from "client-controls";
import {
	GL102000,
	GLSetupRecord as GLSetupRecord_Base
} from "src/screens/GL/GL102000/GL102000";

export interface GL102000_ICFBCustomization extends GL102000 {}
export class GL102000_ICFBCustomization {}

// Extend the GLSetupRecord view class to add custom fields
export interface GLSetupRecord extends GLSetupRecord_Base {}
export class GLSetupRecord {
	// CWT / Final WHT Defaults fields
	UsrATPTCMTranCode: PXFieldState;
	UsrATPTCWTAcct: PXFieldState;
	UsrATPTCWTSub: PXFieldState;
	UsrATPTWHTAcct: PXFieldState;
	UsrATPTWHTSub: PXFieldState;
	UsrATPTAutoApplyCM: PXFieldState<PXFieldOptions.CommitChanges>;
	UsrATPTAutoRelCM: PXFieldState;
	UsrATPTConsoCM: PXFieldState;
}
