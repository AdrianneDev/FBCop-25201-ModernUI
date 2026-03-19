import { PXFieldState, placeAfterProperty } from "client-controls";
import {
	IN204000,
	INLocation as INLocation_Base
} from "src/screens/IN/IN204000/IN204000";

export interface IN204000_ICFBCustomization extends IN204000 {}
export class IN204000_ICFBCustomization {}

// Extend the INLocation view class to add custom column
export interface INLocation extends INLocation_Base {}
export class INLocation {
	// Location Status field from ICFBCustomization - appears after TaskID in grid
	@placeAfterProperty("TaskID")
	UsrICFBLocationStatus: PXFieldState;
}
